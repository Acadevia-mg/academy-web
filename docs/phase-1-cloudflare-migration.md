# Phase 1: Cloudflare Migration

## Overview

Migrate from Vercel + static TypeScript data + local images to Cloudflare Workers + D1 (Drizzle ORM) + R2 buckets. No changes to existing logic, styling, or behavior.

## Current State

| Component    | Current                                                  | Target                                                           |
| ------------ | -------------------------------------------------------- | ---------------------------------------------------------------- |
| Hosting      | Vercel                                                   | Cloudflare Workers (`@opennextjs/cloudflare`)                    |
| Data         | `src/data/events.ts` (static TS array, 8 events)         | Cloudflare D1 (SQLite) via Drizzle ORM                           |
| Images       | `public/images/` (local, 60 speakers, 50 sponsors, etc.) | R2 bucket `academy-assets` at `academy-assets.devmultigroup.com` |
| OG Images    | `@vercel/og` edge function                               | `next/og` (built-in Next.js, CF Workers compatible)              |
| Announcement | `src/data/announcement.ts` (static file)                 | D1 `announcements` table                                         |

---

## 1. D1 Database Schema (Drizzle)

### File: `src/db/schema.ts`

Per-event one-to-many design. Speakers, organizers, sponsors are duplicated per event (not shared across events).

```typescript
import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

// ── Events Table ──
// Location and ColorPalette embedded as flat columns (1:1, not worth separate tables)
export const events = sqliteTable("events", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  navigable: integer("navigable", { mode: "boolean" }).default(true),
  name: text("name").notNull(),
  heroDescription: text("hero_description").notNull(),
  cardDescription: text("card_description").notNull(),
  registerLink: text("register_link").notNull(),
  videoUrl: text("video_url"),
  date: text("date").notNull(), // ISO 8601

  // Location (embedded 1:1)
  locationName: text("location_name").notNull(),
  locationSubtext: text("location_subtext").notNull(),
  locationLatitude: real("location_latitude"),
  locationLongitude: real("location_longitude"),

  // ColorPalette (embedded 1:1, HSL strings)
  colorPrimary: text("color_primary").notNull(),
  colorSecondary: text("color_secondary").notNull(),
  colorAccent: text("color_accent").notNull(),
  colorBackground: text("color_background").notNull(),
  colorText: text("color_text").notNull(),
});

// ── Speakers (per-event) ──
export const speakers = sqliteTable("speakers", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  eventId: integer("event_id")
    .notNull()
    .references(() => events.id, { onDelete: "cascade" }),
  fullName: text("full_name").notNull(),
  title: text("title").notNull(),
  company: text("company"),
  instagram: text("instagram"),
  linkedin: text("linkedin"),
  twitter: text("twitter"),
  sortOrder: integer("sort_order").notNull().default(0),
});

// ── Organizers (per-event) ──
export const organizers = sqliteTable("organizers", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  eventId: integer("event_id")
    .notNull()
    .references(() => events.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  designation: text("designation").notNull(),
  image: text("image").notNull(), // R2 path
  sortOrder: integer("sort_order").notNull().default(0),
});

// ── Sessions (per-event) ──
// Discriminated union: room="Network" makes topic/startTime/endTime nullable
// Enforced at application layer, not DB level
export const sessions = sqliteTable("sessions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  eventId: integer("event_id")
    .notNull()
    .references(() => events.id, { onDelete: "cascade" }),
  room: text("room").notNull(),
  speakerName: text("speaker_name").notNull(),
  topic: text("topic"),
  startTime: text("start_time"),
  endTime: text("end_time"),
  sortOrder: integer("sort_order").notNull().default(0),
});

// ── Sponsors (per-event) ──
export const sponsors = sqliteTable("sponsors", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  eventId: integer("event_id")
    .notNull()
    .references(() => events.id, { onDelete: "cascade" }),
  tier: text("tier").notNull(), // "platin" | "altın" | "gümüş" | "bronz" | ""
  sponsorSlug: text("sponsor_slug").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
});

// ── Tickets (per-event, optional) ──
export const tickets = sqliteTable("tickets", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  eventId: integer("event_id")
    .notNull()
    .references(() => events.id, { onDelete: "cascade" }),
  type: text("type").notNull(),
  description: text("description").notNull(),
  price: real("price").notNull(),
  link: text("link").notNull(),
  perks: text("perks").notNull(), // JSON array: '["perk1","perk2"]'
  sortOrder: integer("sort_order").notNull().default(0),
});

// ── Event Images (per-event) ──
export const eventImages = sqliteTable("event_images", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  eventId: integer("event_id")
    .notNull()
    .references(() => events.id, { onDelete: "cascade" }),
  url: text("url").notNull(), // R2 path
  sortOrder: integer("sort_order").notNull().default(0),
});

// ── Initial Metrics (per-event, max 3 enforced at app layer) ──
export const initialMetrics = sqliteTable("initial_metrics", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  eventId: integer("event_id")
    .notNull()
    .references(() => events.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  value: integer("value").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
});

// ── After Metrics (per-event, optional, 1:1) ──
export const afterMetrics = sqliteTable("after_metrics", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  eventId: integer("event_id")
    .notNull()
    .references(() => events.id, { onDelete: "cascade" }),
  applications: text("applications").notNull(),
  vipGuests: text("vip_guests").notNull(),
  supporter: text("supporter").notNull(),
  speakers: text("speakers_count").notNull(),
  workingParticipant: text("working_participant").notNull(),
  jobSeeker: text("job_seeker").notNull(),
  jobProvider: text("job_provider").notNull(),
  satisfaction: text("satisfaction").notNull(),
});

// ── Announcement (site-wide, single active row) ──
export const announcements = sqliteTable("announcements", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  show: integer("show", { mode: "boolean" }).notNull().default(false),
  text: text("text").notNull(),
  backgroundColor: text("background_color").notNull(),
  textColor: text("text_color").notNull(),
  link: text("link"),
  linkText: text("link_text"),
  showLink: integer("show_link", { mode: "boolean" }).notNull().default(false),
});
```

### Schema Design Notes

| Decision                              | Rationale                                                                                             |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Per-event speakers/organizers         | User preference; simpler schema; same speaker can have different titles/companies per event           |
| Location/ColorPalette as flat columns | 1:1 relationship with event, no benefit from separate table                                           |
| Session nullable fields               | DB allows nulls for `topic`, `startTime`, `endTime`; app layer validates Network vs non-Network rooms |
| Ticket perks as JSON text             | Simple string array, only read/written atomically, never queried individually                         |
| Max 3 initial metrics                 | Enforced at app layer (check `count` before insert), not DB constraint                                |
| Cascade deletes                       | All child tables cascade on event deletion                                                            |

---

## 2. R2 Bucket Structure

**Bucket name:** `academy-assets`
**Public URL:** `https://academy-assets.devmultigroup.com`

```
academy-assets/
├── {event-slug}/                          # Per-event directory
│   ├── speakers/
│   │   └── {slugify(fullName)}.webp       # e.g., esra-kelleci.webp
│   ├── sponsors/
│   │   └── {sponsorSlug}.webp             # e.g., aws.webp
│   ├── organizers/
│   │   └── {slugify(name)}.webp           # e.g., serkan-alc.webp
│   ├── banner.webp                        # Event banner
│   ├── mockup.webp                        # Event mockup
│   └── gallery/
│       ├── 1.webp
│       ├── 2.webp
│       └── 3.webp
└── shared/
    └── logo/
        ├── dmg-logo.webp
        ├── logo-small-white.webp
        ├── logo-small.webp
        └── logo-wide-dark.webp
```

### Event Slugs (for R2 directories)

Based on current data, the event slugs (via `slugify()`) are:

| Event Name                                          | Slug (R2 directory)                                   |
| --------------------------------------------------- | ----------------------------------------------------- |
| Foundations of Web Development Certification Course | `foundations-of-web-development-certification-course` |
| Web Developer Conference 2025                       | `web-developer-conference-2025`                       |
| Data Science Summit 2025                            | `data-science-summit-2025`                            |
| MultiGroup Developer Gathering 2025                 | `multigroup-developer-gathering-2025`                 |
| Web Developer Summit 2025                           | `web-developer-summit-2025`                           |
| Mobile Developer Conference 2025                    | `mobile-developer-conference-2025`                    |
| Mobile Developer Conference 2024                    | `mobile-developer-conference-2024`                    |
| Mobile Developer Conference 2023                    | `mobile-developer-conference-2023`                    |

### Image Migration Notes

- Speaker images are currently shared in `public/images/speakers/` across all events
- During migration, the upload script must **copy each speaker image to every event directory** where that speaker appears
- Example: `esra-kelleci.webp` appears in events 6, 5, and 2 → copied to all three event directories
- `webbootcampcomplogos/` directory is empty and will not be migrated
- Sponsor images from `public/images/sponsors/` are copied to each event's `sponsors/` directory based on that event's sponsor list

---

## 3. New Files & Directory Structure

```
src/
├── db/
│   ├── schema.ts          # Drizzle schema (above)
│   ├── index.ts           # DB client initialization
│   └── queries.ts         # Reusable query functions
├── lib/
│   ├── image-url.ts       # NEW: R2 URL helper
│   └── event-utils.ts     # MODIFIED: remove static import
├── app/
│   └── api/
│       ├── events/
│       │   ├── route.ts           # GET all events
│       │   └── [slug]/route.ts    # GET single event by slug
│       ├── announcement/
│       │   └── route.ts           # GET announcement config
│       └── og/route.tsx           # MODIFIED: replace @vercel/og
scripts/
├── seed-d1.ts             # Populate D1 from events.ts
└── upload-r2.ts           # Upload images to R2 per-event dirs
drizzle/
└── migrations/            # Generated by drizzle-kit
wrangler.toml              # Cloudflare Workers config
open-next.config.ts        # OpenNext config for CF
drizzle.config.ts          # Drizzle Kit config
.env.local                 # Local environment variables
```

---

## 4. Database Client

### File: `src/db/index.ts`

```typescript
import { drizzle } from "drizzle-orm/d1";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import * as schema from "./schema";

export async function getDb() {
  const { env } = await getCloudflareContext();
  return drizzle(env.DB, { schema });
}
```

### File: `src/db/queries.ts`

Reconstructs the `Event` type from relational tables:

```typescript
import { getDb } from "./index";
import { eq } from "drizzle-orm";
import * as schema from "./schema";
import type { Event } from "@/types";

export async function getAllEvents(): Promise<Event[]> {
  const db = await getDb();
  const allEvents = await db.select().from(schema.events);

  return Promise.all(
    allEvents.map(async (e) => {
      const [
        eventSpeakers,
        eventOrganizers,
        eventSessions,
        eventSponsors,
        eventTickets,
        eventImages,
        eventMetrics,
        eventAfterMetrics,
      ] = await Promise.all([
        db
          .select()
          .from(schema.speakers)
          .where(eq(schema.speakers.eventId, e.id))
          .orderBy(schema.speakers.sortOrder),
        db
          .select()
          .from(schema.organizers)
          .where(eq(schema.organizers.eventId, e.id))
          .orderBy(schema.organizers.sortOrder),
        db
          .select()
          .from(schema.sessions)
          .where(eq(schema.sessions.eventId, e.id))
          .orderBy(schema.sessions.sortOrder),
        db
          .select()
          .from(schema.sponsors)
          .where(eq(schema.sponsors.eventId, e.id))
          .orderBy(schema.sponsors.sortOrder),
        db
          .select()
          .from(schema.tickets)
          .where(eq(schema.tickets.eventId, e.id))
          .orderBy(schema.tickets.sortOrder),
        db
          .select()
          .from(schema.eventImages)
          .where(eq(schema.eventImages.eventId, e.id))
          .orderBy(schema.eventImages.sortOrder),
        db
          .select()
          .from(schema.initialMetrics)
          .where(eq(schema.initialMetrics.eventId, e.id))
          .orderBy(schema.initialMetrics.sortOrder),
        db
          .select()
          .from(schema.afterMetrics)
          .where(eq(schema.afterMetrics.eventId, e.id)),
      ]);

      return reconstructEvent(
        e,
        eventSpeakers,
        eventOrganizers,
        eventSessions,
        eventSponsors,
        eventTickets,
        eventImages,
        eventMetrics,
        eventAfterMetrics[0],
      );
    }),
  );
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
  // Query all events and filter by slugified name
  // (slugify happens at app layer to match current behavior)
  const allEvents = await getAllEvents();
  return allEvents.find((e) => slugify(e.name) === slug) || null;
}

export async function getAnnouncement() {
  const db = await getDb();
  const rows = await db.select().from(schema.announcements).limit(1);
  return rows[0] || null;
}
```

The `reconstructEvent()` function maps flat DB columns back to nested `Event` type:

- `locationName` + `locationSubtext` + `locationLatitude` + `locationLongitude` → `location: Location`
- `colorPrimary` + ... → `colorPalette: ColorPalette`
- Speaker/organizer/session/sponsor rows → arrays
- Ticket `perks` JSON string → `string[]` via `JSON.parse()`

---

## 5. API Routes

Since all page components are `"use client"`, D1 can only be accessed from server-side code. API routes serve as the bridge.

### `src/app/api/events/route.ts`

```typescript
import { getAllEvents } from "@/db/queries";
import { NextResponse } from "next/server";

export async function GET() {
  const events = await getAllEvents();
  return NextResponse.json(events);
}
```

### `src/app/api/events/[slug]/route.ts`

```typescript
import { getEventBySlug } from "@/db/queries";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  if (!event) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(event);
}
```

### `src/app/api/announcement/route.ts`

```typescript
import { getAnnouncement } from "@/db/queries";
import { NextResponse } from "next/server";

export async function GET() {
  const announcement = await getAnnouncement();
  return NextResponse.json(announcement);
}
```

---

## 6. Image URL Helper

### File: `src/lib/image-url.ts`

```typescript
const R2_BASE = process.env.NEXT_PUBLIC_R2_URL || "";

/**
 * Constructs image URL. When NEXT_PUBLIC_R2_URL is set, returns R2 URL.
 * When empty (local dev without R2), falls back to local /images/ path.
 */
export function imageUrl(path: string): string {
  if (!R2_BASE) return path; // fallback to local during dev
  // Strip leading /images/ for backward compat
  const cleanPath = path.replace(/^\/images\//, "");
  return `${R2_BASE}/${cleanPath}`;
}

/**
 * Constructs per-event image URL for speakers, sponsors, organizers
 */
export function eventImageUrl(
  eventSlug: string,
  category: string,
  filename: string,
): string {
  if (!R2_BASE) return `/images/${category}/${filename}`;
  return `${R2_BASE}/${eventSlug}/${category}/${filename}`;
}
```

### Components to Update

All image paths must switch from direct `/images/...` to using these helpers:

| File                                       | Current Pattern                                 | New Pattern                                                            |
| ------------------------------------------ | ----------------------------------------------- | ---------------------------------------------------------------------- |
| `speaker-components/speakers.tsx`          | `/images/speakers/${slugify(fullName)}.webp`    | `eventImageUrl(eventSlug, "speakers", slugify(fullName) + ".webp")`    |
| `speaker-components/sponsors.tsx`          | `/images/sponsors/${sponsorSlug}.webp`          | `eventImageUrl(eventSlug, "sponsors", sponsorSlug + ".webp")`          |
| `speaker-components/sponsors-slider.tsx`   | `/images/sponsors/${sponsorSlug}.webp`          | `eventImageUrl(eventSlug, "sponsors", sponsorSlug + ".webp")`          |
| `speaker-components/session-container.tsx` | `/images/speakers/${slugify(speakerName)}.webp` | `eventImageUrl(eventSlug, "speakers", slugify(speakerName) + ".webp")` |
| `event-page/EventPage.tsx`                 | `/images/mockups/${slugify(event.name)}.webp`   | `eventImageUrl(eventSlug, "mockup", "mockup.webp")`                    |
| `event-components/event-card.tsx`          | `/images/banners/${baseName}-${year}.webp`      | `eventImageUrl(eventSlug, "banner", "banner.webp")`                    |
| `navigation/navbar.tsx`                    | `/images/logo/...`                              | `imageUrl("/images/logo/...")` → uses `shared/logo/`                   |
| `navigation/footer.tsx`                    | `/images/logo/...`                              | `imageUrl("/images/logo/...")`                                         |
| `ui/animated-tooltip.tsx`                  | `item.image` (organizer)                        | Already a full path, stored in DB as R2 URL                            |

**Note:** The `eventSlug` must be passed down as a prop to components that reference per-event images. This is a key interface change — components like `Speakers`, `Sponsors`, `SessionContainer` need an additional `eventSlug` prop.

---

## 7. Refactoring `event-utils.ts`

### Current: imports static data

```typescript
import events from "@/data/events"; // REMOVE
```

### New: pure utility functions (client-compatible)

Split into two concerns:

**`src/lib/event-utils.ts`** — Pure functions that take `Event[]` as params (no imports, client-safe):

```typescript
// All existing functions become parameterized:
export function sortEventsByDate(events: Event[]): Event[] { ... }
export function getLatestEvent(events: Event[]): Event { ... }
export function getEventBySlug(events: Event[], slug: string): Event | null { ... }
export function getLatestNavigableEvent(events: Event[]): Event | null { ... }
export function getClosestUpcomingEvent(events: Event[]): Event | null { ... }
// ... etc

// Date formatting functions remain unchanged
export function getFormattedDate(date: string): string { ... }
export function formatIsoDate(isoDate: string): string { ... }
```

**`src/db/queries.ts`** — Server-side functions that access D1 (already defined above).

---

## 8. Refactoring `EventColorContext.tsx`

### Current: imports static data

```typescript
import events from "@/data/events"; // Line ~5, REMOVE
```

### New: receive events via props or fetch from API

The `EventColorProvider` currently uses static `events` to find the current event by pathname. After migration, it should:

1. Accept `events` as a prop passed from the layout, OR
2. Fetch events from `/api/events` on mount

**Recommended:** Pass as prop from `layout.tsx` (which is a Server Component and can query D1 directly).

---

## 9. Refactoring Page Components

### `src/app/(pages)/page.tsx` (Home)

Currently calls `getLatestNavigableEvent()` which imports static data. After migration:

- Fetch from `/api/events` on mount, or
- Receive event data from a server component wrapper

### `src/app/(pages)/etkinlikler/page.tsx` (Events List)

Currently imports `events` directly. After migration:

- Fetch all events from `/api/events`

### `src/app/(pages)/etkinlikler/[eventName]/page.tsx` (Event Detail)

Currently calls `getEventBySlug()`. After migration:

- Fetch from `/api/events/[slug]`

### `src/app/layout.tsx`

Currently calls `getLatestEventLink()` synchronously. This is a Server Component, so it can:

- Use `getDb()` directly to query the latest event link
- Pass it to `<Navbar>` as before

---

## 10. OG Image Generation

### File: `src/app/api/og/route.tsx`

**Change:** Replace `@vercel/og` import with `next/og` (built-in, CF Workers compatible).

```typescript
// Before:
import { ImageResponse } from "@vercel/og";

// After:
import { ImageResponse } from "next/og";
```

Remove `@vercel/og` from `package.json` dependencies.

The rest of the OG route stays the same — the `ImageResponse` API is identical.

---

## 11. Link Prefetch Optimization

Add `prefetch={false}` to all `<Link>` components for Cloudflare optimization.

Files using `next/link`:

- `src/components/event-components/action-card.tsx`
- `src/components/navigation/footer.tsx`
- Any other files discovered during implementation

```tsx
// Before:
<Link href="...">

// After:
<Link href="..." prefetch={false}>
```

---

## 12. Cloudflare Configuration

### `wrangler.toml`

```toml
name = "academy-web"
compatibility_date = "2024-09-23"
compatibility_flags = ["nodejs_compat"]

[[d1_databases]]
binding = "DB"
database_name = "academy-db"
database_id = "" # Fill after `wrangler d1 create academy-db`

# R2 binding (only needed for admin upload endpoint in Phase 2)
# For public reads, use the custom domain directly
# [[r2_buckets]]
# binding = "ASSETS_BUCKET"
# bucket_name = "academy-assets"
```

### `open-next.config.ts`

```typescript
import type { OpenNextConfig } from "@opennextjs/cloudflare";

const config: OpenNextConfig = {
  default: {
    override: {
      wrapper: "cloudflare-node",
      converter: "edge",
    },
  },
};

export default config;
```

### `drizzle.config.ts`

```typescript
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle/migrations",
  dialect: "sqlite",
} satisfies Config;
```

### `next.config.ts` (updated)

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "academy-assets.devmultigroup.com",
      },
    ],
  },
};

export default nextConfig;
```

---

## 13. Environment Variables

### `.env.local` (template)

```bash
# R2 Public URL (custom domain for the academy-assets bucket)
NEXT_PUBLIC_R2_URL=https://academy-assets.devmultigroup.com

# Umami Analytics
UMAMI_PROJECT_ID=your-umami-project-id

# D1 is accessed via Cloudflare bindings (wrangler.toml), not env vars
# No database credentials needed in .env
```

---

## 14. Package.json Changes

### New Dependencies

```bash
npm install drizzle-orm @opennextjs/cloudflare
npm install -D drizzle-kit wrangler tsx
```

### Remove

```bash
npm uninstall @vercel/og
```

### New Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "preview": "opennextjs-cloudflare build && wrangler dev",
    "deploy": "opennextjs-cloudflare build && wrangler deploy",
    "db:generate": "drizzle-kit generate",
    "db:migrate:local": "wrangler d1 migrations apply academy-db --local",
    "db:migrate:remote": "wrangler d1 migrations apply academy-db --remote",
    "db:seed": "tsx scripts/seed-d1.ts",
    "r2:upload": "tsx scripts/upload-r2.ts",
    "lint": "next lint",
    "format": "prettier --write \"**/*.{ts,tsx,js,jsx,md,mdx,css,yaml,yml}\"",
    "check": "prettier --check \"**/*.{ts,tsx,js,jsx,md,mdx,css,yaml,yml}\"",
    "prepare": "husky"
  }
}
```

---

## 15. Migration Scripts

### `scripts/seed-d1.ts`

This script reads the static `events.ts` and `announcement.ts` data and inserts into D1.

**Logic:**

1. Import `events` from `src/data/events.ts`
2. Import `announcement` from `src/data/announcement.ts`
3. For each event:
   - Insert into `events` table (map nested location/colorPalette to flat columns)
   - Insert speakers with `sortOrder` matching array index
   - Insert organizers with `sortOrder`
   - Insert sessions with `sortOrder`
   - Insert sponsors with `sortOrder`
   - Insert tickets with `perks` as `JSON.stringify(ticket.perks)`
   - Insert event images with `sortOrder`
   - Insert initial metrics with `sortOrder`
   - Insert after metrics if present
4. Insert announcement row
5. Runs via: `wrangler d1 execute academy-db --local --file=./scripts/seed.sql` or programmatically via D1 HTTP API

### `scripts/upload-r2.ts`

This script uploads local images to R2 in per-event directory structure.

**Logic:**

1. Read the events array to know which speakers/sponsors belong to each event
2. For each event:
   - Slugify event name → `eventSlug`
   - For each speaker: copy `public/images/speakers/${slugify(fullName)}.webp` → R2 `{eventSlug}/speakers/${slugify(fullName)}.webp`
   - For each sponsor: copy `public/images/sponsors/${sponsorSlug}.webp` → R2 `{eventSlug}/sponsors/${sponsorSlug}.webp`
   - For each organizer: copy organizer image → R2 `{eventSlug}/organizers/...`
   - Copy banner: `public/images/banners/{eventSlug}.webp` → R2 `{eventSlug}/banner.webp`
   - Copy mockup: `public/images/mockups/{eventSlug}.webp` → R2 `{eventSlug}/mockup.webp`
   - Copy gallery images → R2 `{eventSlug}/gallery/{n}.webp`
3. Copy shared logos → R2 `shared/logo/...`
4. Uses `wrangler r2 object put` for each file, or the S3-compatible API

**Important:** The same speaker image (e.g., `esra-kelleci.webp`) is copied to multiple event directories. This is intentional per the per-event architecture decision.

---

## 16. Implementation Sequence

Execute in this order to minimize broken states:

### Infrastructure Setup

1. Install dependencies: `drizzle-orm`, `@opennextjs/cloudflare`, `wrangler`, `drizzle-kit`, `tsx`
2. Create D1 database: `wrangler d1 create academy-db`
3. Create R2 bucket: `wrangler r2 bucket create academy-assets`
4. Configure R2 custom domain: `academy-assets.devmultigroup.com`
5. Create `wrangler.toml` with D1 binding (fill in database ID)
6. Create `drizzle.config.ts`
7. Create `.env.local` from template

### Schema & Data

8. Create `src/db/schema.ts`
9. Run `npm run db:generate` → produces SQL migration files in `drizzle/migrations/`
10. Apply migrations locally: `npm run db:migrate:local`
11. Create and run `scripts/seed-d1.ts` to populate local D1
12. Create and run `scripts/upload-r2.ts` to upload images to R2

### Code Changes

13. Create `src/db/index.ts` (DB client)
14. Create `src/db/queries.ts` (query functions)
15. Create `src/lib/image-url.ts` (R2 URL helper)
16. Create API routes: `/api/events`, `/api/events/[slug]`, `/api/announcement`
17. Refactor `src/lib/event-utils.ts` — remove static import, parameterize
18. Refactor `src/context/EventColorContext.tsx` — remove static import
19. Update page components to fetch from API routes
20. Update all image-referencing components to use `imageUrl()` / `eventImageUrl()`
21. Replace `@vercel/og` with `next/og` in OG route
22. Add `prefetch={false}` to Link components
23. Update `next.config.ts` with remote image patterns
24. Create `open-next.config.ts`

### Deploy

25. Test locally with `wrangler dev` (local D1 + R2 public URL)
26. Apply migrations remotely: `npm run db:migrate:remote`
27. Seed remote D1
28. Upload images to remote R2
29. Deploy: `npm run deploy`

---

## 17. Risks & Mitigations

| Risk                                                             | Mitigation                                                                                                                                  |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Client-side data fetching latency (all pages are `"use client"`) | Add loading states matching existing `loading.tsx` skeleton; consider converting critical pages to Server Components if performance is poor |
| Images 404 during local dev without R2                           | `imageUrl()` falls back to local `/images/` when `NEXT_PUBLIC_R2_URL` is empty                                                              |
| D1 query complexity (8+ joins per event)                         | Use `Promise.all` for parallel queries; consider caching with `Cache-Control` headers on API responses                                      |
| `@react-three/fiber` + Workers bundling                          | Client-only library, should not affect server bundle; monitor during build                                                                  |
| `next/og` compatibility on CF Workers                            | Test early; fallback to `satori` + `resvg-wasm` if needed                                                                                   |
| Organizer image paths changing                                   | Currently stored as `/images/organizers/serkan-alc.webp`; must update to R2 URL in DB seed script                                           |

---

## 18. Verification Checklist

- [ ] All 8 events render identically to current Vercel deployment
- [ ] Home page shows latest navigable event correctly
- [ ] Event listing page groups events by name with year selector
- [ ] Dynamic event pages load via `/etkinlikler/[eventName]`
- [ ] Non-navigable events return 404
- [ ] All speaker images load from R2
- [ ] All sponsor logos load from R2
- [ ] Event banners and mockups load from R2
- [ ] Shared logos (navbar, footer) load from R2
- [ ] Color palette theming works per event
- [ ] Session schedule renders with room tabs
- [ ] Ticket section renders when present
- [ ] OG images generate correctly at `/api/og`
- [ ] Announcement banner toggles correctly
- [ ] Calendar export still works
- [ ] Link components have `prefetch={false}`
- [ ] Local dev works with empty `NEXT_PUBLIC_R2_URL` (fallback to /images/)

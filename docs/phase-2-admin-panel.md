# Phase 2: Admin Panel

## Overview

Create a secret admin panel at `/admin` for managing events, speakers, sponsors, and all related data. The admin panel is never linked from the public site and is protected by an environment variable secret key.

**Prerequisites:** Phase 1 (D1 + R2 migration) must be completed first.

---

## 1. Architecture

### Route Structure

```
src/app/
├── (pages)/                    # Public site (existing)
│   ├── layout.tsx              # NEW: Navbar + Footer + EventColorProvider (moved from root)
│   ├── page.tsx
│   └── etkinlikler/
├── admin/                      # Admin panel (new, separate layout)
│   ├── layout.tsx              # Minimal layout: no public chrome
│   ├── page.tsx                # Login gate
│   └── dashboard/
│       ├── layout.tsx          # Dashboard chrome: sidebar + auth guard
│       ├── page.tsx            # Event list overview
│       ├── events/
│       │   ├── new/page.tsx    # Create event form
│       │   └── [id]/
│       │       └── edit/page.tsx  # Edit event form
│       └── announcement/
│           └── page.tsx        # Announcement management
├── api/
│   ├── events/                 # Public API (from Phase 1)
│   ├── announcement/           # Public API (from Phase 1)
│   └── admin/                  # Admin API (new)
│       ├── auth/route.ts       # POST: login, GET: check session
│       ├── events/route.ts     # GET: list, POST: create
│       ├── events/[id]/route.ts  # GET, PUT, DELETE
│       ├── announcement/route.ts # GET, PUT
│       └── upload/route.ts     # POST: image upload to R2
└── layout.tsx                  # Root layout: SIMPLIFIED (html, body, font only)
```

### Root Layout Refactoring

**Critical change:** Move public chrome from root `layout.tsx` to `(pages)/layout.tsx` so `/admin` routes don't inherit Navbar, Footer, or EventColorProvider.

**`src/app/layout.tsx`** (simplified):

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id={process.env.UMAMI_PROJECT_ID}
        />
      </head>
      <body className={`${montserrat.variable} bg-color-background`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
```

**`src/app/(pages)/layout.tsx`** (new, receives public chrome):

```tsx
export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const latestEventLink = getLatestEventLink();
  return (
    <EventColorProvider>
      <Navbar eventLink={latestEventLink} />
      {children}
      <Footer />
    </EventColorProvider>
  );
}
```

---

## 2. Authentication

### Approach: Secret Key + httpOnly Cookie

No user accounts needed. A single shared secret stored as a Cloudflare Workers secret.

### Flow

1. User navigates to `/admin`
2. Sees a single input: "Admin Anahtarı" + submit button
3. POST to `/api/admin/auth` with `{ key: "..." }`
4. Server compares against `ADMIN_SECRET_KEY` env var
5. If valid: creates HMAC-signed httpOnly cookie `admin_session`, redirects to `/admin/dashboard`
6. If invalid: returns 401

### Cookie Structure

```
admin_session = base64(timestamp:hmac_sha256(timestamp, ADMIN_SECRET_KEY))
```

- Expiry: 24 hours
- HttpOnly: true
- Secure: true (production)
- SameSite: Strict

### Validation

All `/api/admin/*` routes call `validateAdminSession(request)`:

```typescript
// src/lib/admin-auth.ts
export async function validateAdminSession(request: Request): Promise<boolean> {
  const cookie = parseCookies(request.headers.get("cookie") || "")[
    "admin_session"
  ];
  if (!cookie) return false;

  const [timestamp, signature] = atob(cookie).split(":");
  const age = Date.now() - parseInt(timestamp);
  if (age > 24 * 60 * 60 * 1000) return false; // expired

  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(process.env.ADMIN_SECRET_KEY),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const expected = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(timestamp),
  );
  return signature === bufferToHex(expected);
}
```

**Note:** Uses `crypto.subtle` which is available in Cloudflare Workers (not Node.js `crypto`).

### Auth Guard Component

```typescript
// src/components/admin/auth-guard.tsx
"use client";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/admin/auth")
      .then(res => { if (!res.ok) throw new Error(); setAuthenticated(true); })
      .catch(() => router.push("/admin"));
  }, []);

  if (authenticated === null) return <LoadingSpinner />;
  if (!authenticated) return null;
  return <>{children}</>;
}
```

---

## 3. Admin API Routes

### `POST /api/admin/auth`

```
Request:  { key: string }
Response: 200 + Set-Cookie (valid key) | 401 (invalid key)
```

### `GET /api/admin/auth`

```
Response: 200 (valid session) | 401 (invalid/expired)
```

### `GET /api/admin/events`

```
Response: Event[] (all events with all relations)
Auth: Required (cookie)
```

### `POST /api/admin/events`

```
Request: {
  name, heroDescription, cardDescription, navigable, registerLink, videoUrl, date,
  location: { name, subtext, latitude?, longitude? },
  colorPalette: { primary, secondary, accent, background, text },
  speakers: Speaker[],
  organizers: Organizer[],
  sessions: Session[],
  sponsors: Sponsor[],
  tickets?: Ticket[],
  images: string[],
  initialMetrics: InitialMetric[],
  afterMetrics?: AfterMetrics
}
Response: { id: number }
Auth: Required
```

**Logic:**

1. Validate payload
2. Insert into `events` table
3. Batch insert into child tables (`speakers`, `organizers`, etc.) with the new `eventId`
4. Return created event ID

### `PUT /api/admin/events/[id]`

```
Request: Same as POST (full event payload)
Response: { success: true }
Auth: Required
```

**Logic:**

1. Update `events` row
2. Delete all existing child rows for this event
3. Re-insert child rows from the payload
4. (Delete-and-reinsert is simpler than diffing, safe because admin is the only writer)

### `DELETE /api/admin/events/[id]`

```
Response: { success: true }
Auth: Required
```

Cascade deletes handle child rows automatically.

### `PUT /api/admin/announcement`

```
Request: { show, text, backgroundColor, textColor, link?, linkText?, showLink }
Response: { success: true }
Auth: Required
```

### `POST /api/admin/upload`

```
Request: FormData { file: Blob, path: string }
  - path examples: "event-slug/speakers/esra-kelleci.webp", "event-slug/sponsors/aws.webp"
Response: { url: "https://academy-assets.devmultigroup.com/event-slug/speakers/esra-kelleci.webp" }
Auth: Required
```

**Logic:**

1. Validate admin session
2. Read file from FormData
3. Put to R2: `env.ASSETS_BUCKET.put(path, file)`
4. Return public URL

**R2 binding needed in `wrangler.toml`:**

```toml
[[r2_buckets]]
binding = "ASSETS_BUCKET"
bucket_name = "academy-assets"
```

---

## 4. Admin UI Components

### Directory Structure

```
src/components/admin/
├── auth-guard.tsx              # Session check wrapper
├── admin-sidebar.tsx           # Navigation sidebar
├── event-form.tsx              # Main form component (create/edit)
├── image-crop-dialog.tsx       # Reusable image cropper modal
└── form-sections/
    ├── basic-info-section.tsx
    ├── location-section.tsx
    ├── speakers-section.tsx
    ├── sessions-section.tsx
    ├── sponsors-section.tsx
    ├── tickets-section.tsx
    ├── metrics-section.tsx
    ├── colors-section.tsx
    └── images-section.tsx
```

---

## 5. Event Form

### `src/components/admin/event-form.tsx`

A single form component used for both create and edit. Receives optional `initialData: Event` for edit mode.

**State management:** Plain `useState` with a single `formData` object. No form library needed at this scale.

```tsx
type EventFormData = {
  name: string;
  heroDescription: string;
  cardDescription: string;
  navigable: boolean;
  registerLink: string;
  videoUrl: string;
  date: string;
  location: {
    name: string;
    subtext: string;
    latitude: string;
    longitude: string;
  };
  colorPalette: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  speakers: SpeakerFormData[];
  organizers: OrganizerFormData[];
  sessions: SessionFormData[];
  sponsors: SponsorFormData[];
  tickets: TicketFormData[];
  images: string[];
  initialMetrics: { title: string; value: string }[];
  afterMetrics: AfterMetricsFormData | null;
};
```

### Form Sections

#### 5a. Basic Info Section

| Field             | Input Type                      | Required | Notes                                                       |
| ----------------- | ------------------------------- | -------- | ----------------------------------------------------------- |
| `name`            | Text input                      | Yes      | Event name (e.g., "Web Developer Conference 2025")          |
| `heroDescription` | Textarea                        | Yes      | Hero section subtitle                                       |
| `cardDescription` | Textarea                        | Yes      | Card description for event listing                          |
| `navigable`       | Checkbox (Shadcn)               | No       | Default: true. If false, event returns 404 on direct access |
| `registerLink`    | URL input                       | Yes      | Registration/ticket URL                                     |
| `videoUrl`        | URL input                       | No       | Video embed URL                                             |
| `date`            | `<input type="datetime-local">` | Yes      | Event date and time                                         |

#### 5b. Location Section

| Field                | Input Type   | Required | Notes                                 |
| -------------------- | ------------ | -------- | ------------------------------------- |
| `location.name`      | Text input   | Yes      | e.g., "Kadir Has Üniversitesi"        |
| `location.subtext`   | Text input   | Yes      | e.g., "Cibali Kampüsü Etkinlik Alanı" |
| `location.latitude`  | Number input | No       | For map display                       |
| `location.longitude` | Number input | No       | For map display                       |

#### 5c. Speakers Section (Dynamic Array)

Each speaker row:

| Field       | Input Type    | Required | Notes                                             |
| ----------- | ------------- | -------- | ------------------------------------------------- |
| `fullName`  | Text input    | Yes      | Determines image filename via `slugify()`         |
| `title`     | Text input    | Yes      | Job title                                         |
| `company`   | Text input    | No       | Company slug (matches sponsor logos)              |
| `instagram` | Text input    | No       | Instagram URL                                     |
| `linkedin`  | Text input    | No       | LinkedIn URL                                      |
| `twitter`   | Text input    | No       | Twitter/X URL                                     |
| Image       | Upload button | No       | Opens `ImageCropDialog` with **1:1 aspect ratio** |

- "Add Speaker" button appends empty row
- Remove (X) button on each row
- Auto-generated filename shown: `{slugify(fullName)}.webp`
- Image preview thumbnail after upload

#### 5d. Sessions Section (Dynamic Array)

Each session row:

| Field         | Input Type            | Required    | Notes                                             |
| ------------- | --------------------- | ----------- | ------------------------------------------------- |
| `room`        | Text input or select  | Yes         | Known values: "Ana Salon", "Yan Salon", "Network" |
| `topic`       | Text input            | Conditional | Required unless room = "Network"                  |
| `speakerName` | Text input / dropdown | Yes         | Ideally populated from speakers already added     |
| `startTime`   | Text input            | Conditional | Format: "13.00". Required unless room = "Network" |
| `endTime`     | Text input            | Conditional | Format: "14.00". Required unless room = "Network" |

- When room = "Network", topic/startTime/endTime fields become optional and grayed out
- "Add Session" button appends empty row
- Remove (X) button on each row

#### 5e. Sponsors Section (Dynamic Array)

Each sponsor row:

| Field         | Input Type      | Required | Notes                                                         |
| ------------- | --------------- | -------- | ------------------------------------------------------------- |
| `sponsorSlug` | Text input      | Yes      | Auto-slugified (lowercase, hyphens). e.g., "aws", "microsoft" |
| `tier`        | Select dropdown | Yes      | Options: "", "platin", "altın", "gümüş", "bronz"              |
| Image         | Upload button   | No       | Opens `ImageCropDialog` with **2.5:1 aspect ratio**           |

- Image preview thumbnail after upload
- "Add Sponsor" button appends empty row

#### 5f. Tickets Section (Dynamic Array, Optional)

Toggle to enable/disable the entire tickets section.

Each ticket row:

| Field         | Input Type           | Required | Notes                               |
| ------------- | -------------------- | -------- | ----------------------------------- |
| `type`        | Text input           | Yes      | e.g., "Community Supporter Ticket"  |
| `description` | Textarea             | Yes      | Ticket description (supports emoji) |
| `price`       | Number input         | Yes      | Price in TRY (0 for free)           |
| `link`        | URL input            | Yes      | Purchase URL                        |
| `perks`       | Dynamic string array | Yes      | Sub-array of text inputs            |

Perks sub-array:

- "Add Perk" button appends a text input
- Remove (X) button on each perk

#### 5g. Metrics Section

**Initial Metrics** (1-3 items):

| Field   | Input Type   | Required |
| ------- | ------------ | -------- |
| `title` | Text input   | Yes      |
| `value` | Number input | Yes      |

- Shows 1 metric by default
- "Add Metric" button (max 3, disabled at 3)
- Remove button (min 1, disabled at 1)

**After Metrics** (optional, toggle to enable):

| Field                | Input Type | Notes        |
| -------------------- | ---------- | ------------ |
| `applications`       | Text input | e.g., "700"  |
| `vipGuests`          | Text input | e.g., "200+" |
| `supporter`          | Text input | e.g., "250+" |
| `speakers`           | Text input | e.g., "40"   |
| `workingParticipant` | Text input | e.g., "70%"  |
| `jobSeeker`          | Text input | e.g., "45%"  |
| `jobProvider`        | Text input | e.g., "75%"  |
| `satisfaction`       | Text input | e.g., "90%"  |

#### 5h. Colors Section

5 HSL color fields: primary, secondary, accent, background, text

Each color:

- Text input showing HSL string (e.g., `"244.29, 100%, 97.25%"`)
- Color preview swatch (rendered with `background: hsl(${value})`)
- Three range sliders: H (0-360), S (0-100%), L (0-100%)
- Live preview updates as sliders move

Alternative: native `<input type="color">` with hex-to-HSL conversion (simpler, less precise).

#### 5i. Event Images Section

- Multiple file upload
- Each image is named `{index}.webp` in the event's `gallery/` R2 directory
- Preview thumbnails after upload
- Drag to reorder (optional)
- Remove button per image

---

## 6. Image Crop Dialog

### Library: `react-image-crop`

Chosen for:

- Lightweight (~8KB, no dependencies)
- Pure canvas-based (works in all browsers)
- Easy aspect ratio locking
- No jQuery dependency (unlike `react-cropper`)

### File: `src/components/admin/image-crop-dialog.tsx`

Uses Shadcn `Dialog` component wrapping `react-image-crop`.

### Flow

1. User clicks "Upload Image" on a speaker/sponsor row
2. Native file input opens → user selects an image
3. Dialog opens showing the image with a crop overlay
4. Crop area is **locked to the specified aspect ratio**:
   - Speakers: **1:1** (square), output: **400x400px**
   - Sponsors: **2.5:1** (rectangle), output: **500x200px**
5. User adjusts the crop area position and size
6. User clicks "Crop & Upload"
7. Client-side processing:
   ```
   a. Create offscreen <canvas> at target dimensions
   b. Draw cropped region onto canvas
   c. Export as webp: canvas.toBlob(blob, 'image/webp', 0.85)
   d. If browser doesn't support webp toBlob (rare), use png fallback
   ```
8. Upload the blob:
   ```
   POST /api/admin/upload
   FormData: { file: blob, path: "{eventSlug}/speakers/{slugify(fullName)}.webp" }
   ```
9. API route stores in R2, returns public URL
10. Dialog closes, preview thumbnail updates

### Component Props

```typescript
type ImageCropDialogProps = {
  open: boolean;
  onClose: () => void;
  onCropped: (url: string) => void;
  aspectRatio: number; // 1 for speakers, 2.5 for sponsors
  outputWidth: number; // 400 for speakers, 500 for sponsors
  outputHeight: number; // 400 for speakers, 200 for sponsors
  uploadPath: string; // R2 path like "event-slug/speakers/name.webp"
};
```

### Client-Side Processing (No Server-Side Image Manipulation)

All image processing happens in the browser:

- Cloudflare Workers cannot run Sharp or other native image libraries
- `canvas.toBlob('image/webp')` has universal browser support
- The uploaded blob is already the final format — no server-side transformation needed

---

## 7. Dashboard Pages

### Login Page (`src/app/admin/page.tsx`)

```
┌─────────────────────────────────────┐
│                                     │
│         Developer MultiGroup        │
│           Admin Panel               │
│                                     │
│   ┌───────────────────────────┐     │
│   │ Admin Key                 │     │
│   └───────────────────────────┘     │
│   [ Giriş Yap ]                    │
│                                     │
└─────────────────────────────────────┘
```

- Single password input + submit button
- Shows error toast on invalid key
- Redirects to `/admin/dashboard` on success

### Dashboard Overview (`src/app/admin/dashboard/page.tsx`)

```
┌──────────┬──────────────────────────────────────────┐
│ Sidebar  │  Etkinlikler                  [+ Yeni]   │
│          │                                          │
│ Events   │  ┌─────────────────────────────────────┐ │
│ Duyuru   │  │ Foundations of Web Dev...   [Düzenle]│ │
│ Çıkış    │  │ 9 Mart 2026 • Online     [navigable]│ │
│          │  └─────────────────────────────────────┘ │
│          │  ┌─────────────────────────────────────┐ │
│          │  │ Web Developer Conference 2025 [Düzenle]│
│          │  │ 27 Eylül 2025 • Kadir Has [navigable]│ │
│          │  └─────────────────────────────────────┘ │
│          │  ... (more events sorted by date)        │
└──────────┴──────────────────────────────────────────┘
```

- Lists all events sorted by date (newest first)
- Each card shows: name, date, location, navigable badge
- "Düzenle" button → `/admin/dashboard/events/[id]/edit`
- "+ Yeni" button → `/admin/dashboard/events/new`

### Create Event (`src/app/admin/dashboard/events/new/page.tsx`)

- Renders `<EventForm />` with no initial data
- On submit: POST to `/api/admin/events`
- On success: redirect to dashboard with success toast

### Edit Event (`src/app/admin/dashboard/events/[id]/edit/page.tsx`)

- Fetches event from `/api/admin/events/[id]`
- Renders `<EventForm initialData={event} />`
- On submit: PUT to `/api/admin/events/[id]`
- On success: redirect to dashboard with success toast

### Announcement Management (`src/app/admin/dashboard/announcement/page.tsx`)

Simple form with all announcement fields:

| Field             | Input Type               |
| ----------------- | ------------------------ |
| `show`            | Toggle switch            |
| `text`            | Textarea                 |
| `backgroundColor` | Color input + text (hex) |
| `textColor`       | Color input + text (hex) |
| `link`            | URL input                |
| `linkText`        | Text input               |
| `showLink`        | Toggle switch            |

- Live preview banner at top of form
- Save button: PUT to `/api/admin/announcement`

---

## 8. Admin Layout & Sidebar

### `src/app/admin/layout.tsx`

Minimal — just HTML structure, no public site chrome:

```tsx
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-gray-50">{children}</div>;
}
```

### `src/app/admin/dashboard/layout.tsx`

Wraps all authenticated pages with sidebar + auth guard:

```tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className="flex min-h-screen">
        <AdminSidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </AuthGuard>
  );
}
```

### Admin Sidebar

```
┌────────────────┐
│ DMG Admin       │
│                 │
│ 📋 Etkinlikler  │
│ 📢 Duyuru       │
│                 │
│                 │
│                 │
│ 🚪 Çıkış       │
└────────────────┘
```

- Fixed left sidebar, ~240px wide
- Navigation links to dashboard sections
- Logout button: POST to `/api/admin/auth` (clear cookie)

---

## 9. New Dependencies

```bash
npm install react-image-crop
```

That's the only new dependency for Phase 2. Everything else uses:

- Existing Shadcn/ui components (Dialog, Button, Input, Checkbox, Tabs, Card, Badge, Toast)
- Native HTML inputs (`datetime-local`, `number`, `color`)
- Existing Tailwind CSS classes
- Canvas API for image processing

---

## 10. Environment Variables

Add to Cloudflare Workers secrets:

```bash
wrangler secret put ADMIN_SECRET_KEY
# Enter a strong random string (e.g., 32+ character hex)
```

For local development, add to `.env.local`:

```bash
ADMIN_SECRET_KEY=your-local-dev-secret-key
```

---

## 11. Security Considerations

| Concern                 | Mitigation                                                                               |
| ----------------------- | ---------------------------------------------------------------------------------------- |
| No public link to admin | `/admin` route exists but is never linked from any public page                           |
| Secret key exposure     | Stored as CF Workers secret, never in client bundle                                      |
| XSS on admin panel      | HttpOnly cookies prevent token theft; all inputs sanitized                               |
| CSRF                    | SameSite=Strict cookie; validate origin header on mutations                              |
| Image upload abuse      | Check file size (max 5MB), validate content type (image/\*)                              |
| R2 path traversal       | Validate upload path format server-side (must match `{slug}/{category}/{filename}.webp`) |

---

## 12. Wrangler.toml Update

Add R2 binding for admin image uploads:

```toml
[[r2_buckets]]
binding = "ASSETS_BUCKET"
bucket_name = "academy-assets"
```

---

## 13. Implementation Sequence

### Layout Refactoring

1. Move Navbar/Footer/EventColorProvider from root `layout.tsx` to `(pages)/layout.tsx`
2. Simplify root `layout.tsx` to bare html/body/font
3. Verify public site still works identically

### Auth

4. Create `src/lib/admin-auth.ts` (HMAC cookie helpers)
5. Create `POST /api/admin/auth` route (login)
6. Create `GET /api/admin/auth` route (session check)
7. Create `src/components/admin/auth-guard.tsx`

### Admin Layout & Navigation

8. Create `src/app/admin/layout.tsx`
9. Create `src/app/admin/page.tsx` (login page)
10. Create `src/components/admin/admin-sidebar.tsx`
11. Create `src/app/admin/dashboard/layout.tsx`

### API Routes

12. Create `POST /api/admin/events` (create)
13. Create `GET /api/admin/events` (list)
14. Create `GET/PUT/DELETE /api/admin/events/[id]`
15. Create `PUT /api/admin/announcement`
16. Create `POST /api/admin/upload` (R2 image upload)

### Form Components

17. Create `src/components/admin/image-crop-dialog.tsx`
18. Create form sections (basic-info, location, speakers, sessions, sponsors, tickets, metrics, colors, images)
19. Assemble `src/components/admin/event-form.tsx`

### Pages

20. Create `src/app/admin/dashboard/page.tsx` (event list)
21. Create `src/app/admin/dashboard/events/new/page.tsx`
22. Create `src/app/admin/dashboard/events/[id]/edit/page.tsx`
23. Create `src/app/admin/dashboard/announcement/page.tsx`

### Testing

24. Test full CRUD flow: create event → verify on public site → edit → delete
25. Test image upload: speaker (square crop) → verify renders correctly
26. Test sponsor logo upload: rectangle crop → verify renders correctly
27. Test announcement toggle → verify banner appears/disappears on public site
28. Test auth: invalid key rejected, session expires after 24h

---

## 14. Verification Checklist

- [ ] `/admin` shows login page (no redirect, no 404)
- [ ] Invalid key shows error, valid key redirects to dashboard
- [ ] Dashboard lists all events sorted by date
- [ ] Create event form has all sections matching the Event type
- [ ] Speaker image upload crops to square (400x400)
- [ ] Sponsor logo upload crops to rectangle (500x200)
- [ ] Created event appears on public site immediately
- [ ] Edited event updates on public site immediately
- [ ] Deleted event returns 404 on public site
- [ ] Announcement toggle works from admin → visible on public site
- [ ] Session form handles Network room (optional fields)
- [ ] Ticket perks can be added/removed dynamically
- [ ] Initial metrics enforces max 3
- [ ] Color picker produces valid HSL strings
- [ ] Auth cookie expires after 24 hours
- [ ] No link to `/admin` exists anywhere in public site
- [ ] R2 uploads use correct per-event directory structure

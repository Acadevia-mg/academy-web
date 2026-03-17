# Phase 3: Template Customization (Brainstorm)

## Overview

This document explores approaches for allowing event pages to have different layouts, sections, and visual structures — not just different colors and data, but fundamentally different templates. Currently all events share a single `EventPage.tsx` renderer. The goal is to enable per-event customization of which sections appear, their order, and potentially their visual style, without requiring code deploys.

**Prerequisites:** Phase 1 (D1 + R2 migration) and Phase 2 (Admin Panel) must be completed first.

**Status:** Brainstorming document. No implementation decision has been made.

---

## Problem Statement

Today, every event renders the exact same page structure:

```
Hero → Metrics → Speakers → Sessions → Sponsors → Tickets → Gallery → Location → Footer
```

Real-world needs that this doesn't cover:

- Some events don't have sessions or tickets (past events, simple meetups)
- Some events want a video section prominently placed
- Future events might want testimonials, FAQ, or a countdown timer
- Section ordering may vary (e.g., sponsors above speakers for sponsor-heavy events)
- Different event types (conference vs. bootcamp vs. meetup) may want different page structures

---

## Approach 1: JSON Config Column (Recommended Starting Point)

### Concept

Add a `template_config` JSON text column to the `events` table. This column defines which sections are visible, their order, and per-section overrides.

### Schema Change

```typescript
// Add to events table in schema.ts
templateConfig: text("template_config"), // nullable, defaults to standard layout
```

### Config Structure

```typescript
type SectionType =
  | "hero"
  | "metrics"
  | "speakers"
  | "sessions"
  | "sponsors"
  | "tickets"
  | "gallery"
  | "location"
  | "video"
  | "afterMetrics";

type SectionConfig = {
  type: SectionType;
  visible: boolean;
  props?: Record<string, unknown>; // Per-section overrides
};

type TemplateConfig = {
  sections: SectionConfig[];
};
```

### Example Config

```json
{
  "sections": [
    { "type": "hero", "visible": true },
    { "type": "metrics", "visible": true },
    { "type": "video", "visible": true },
    { "type": "speakers", "visible": true, "props": { "columns": 4 } },
    { "type": "sessions", "visible": true },
    { "type": "sponsors", "visible": true },
    { "type": "tickets", "visible": false },
    { "type": "gallery", "visible": true },
    { "type": "location", "visible": true },
    { "type": "afterMetrics", "visible": false }
  ]
}
```

### Renderer Change

```typescript
// EventPage.tsx
const SECTION_COMPONENTS: Record<SectionType, React.ComponentType<any>> = {
  hero: HeroSection,
  metrics: MetricsSection,
  speakers: SpeakersSection,
  sessions: SessionsSection,
  sponsors: SponsorsSection,
  tickets: TicketsSection,
  gallery: GallerySection,
  location: LocationSection,
  video: VideoSection,
  afterMetrics: AfterMetricsSection,
};

function EventPage({ event }: { event: Event }) {
  const config = event.templateConfig ?? DEFAULT_TEMPLATE_CONFIG;

  return (
    <>
      {config.sections
        .filter((s) => s.visible)
        .map((section) => {
          const Component = SECTION_COMPONENTS[section.type];
          return <Component key={section.type} event={event} {...section.props} />;
        })}
    </>
  );
}
```

### Admin Panel Integration

Add a "Layout" tab to the Event Form:

- Checklist of sections with visibility toggles
- Drag-to-reorder list (using `@dnd-kit/core` or native drag)
- Per-section props exposed as simple inputs where applicable

### Pros

| Advantage                            | Detail                                               |
| ------------------------------------ | ---------------------------------------------------- |
| Simple to implement                  | Single column, JSON parse, map-and-render            |
| No schema migration for new sections | Just add a new key to the config and a new component |
| Backward compatible                  | `null` config renders the current default layout     |
| Easy admin UI                        | Checkbox list + drag reorder                         |
| No new dependencies                  | Just JSON and existing component library             |

### Cons

| Disadvantage                | Detail                                                         |
| --------------------------- | -------------------------------------------------------------- |
| Limited customization depth | Can toggle/reorder sections but can't change section internals |
| No custom HTML/blocks       | Admins can't create entirely new section types                 |
| JSON validation burden      | Must validate config shape at app layer                        |
| Props surface area          | Adding more `props` per section increases complexity over time |

### Effort: Low (~2-3 days)

---

## Approach 2: Relational Section Model

### Concept

Replace the JSON column with a proper `event_sections` table. Each row represents one section in the event page, with its type, order, visibility, and config.

### Schema

```typescript
export const eventSections = sqliteTable("event_sections", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  eventId: integer("event_id")
    .notNull()
    .references(() => events.id, { onDelete: "cascade" }),
  type: text("type").notNull(), // "hero", "speakers", etc.
  visible: integer("visible", { mode: "boolean" }).notNull().default(true),
  sortOrder: integer("sort_order").notNull().default(0),
  config: text("config"), // JSON for per-section props
});
```

### How It Differs From Approach 1

- Sections are proper DB rows — queryable, indexable, individually updateable
- Can add metadata per section (e.g., `created_at`, `updated_by`)
- Easier to build complex admin UIs around (standard CRUD)
- Can enforce constraints at DB level (e.g., unique section type per event)

### Admin Panel Integration

Same drag-to-reorder UI as Approach 1, but backed by individual row updates instead of rewriting a JSON blob.

### Pros

| Advantage                   | Detail                                             |
| --------------------------- | -------------------------------------------------- |
| Standard relational pattern | Fits the existing per-event one-to-many design     |
| Granular updates            | Change one section's order without touching others |
| Queryable                   | Can find "all events with a video section" via SQL |
| Familiar CRUD               | Same pattern as speakers, sponsors, etc.           |

### Cons

| Disadvantage                             | Detail                                           |
| ---------------------------------------- | ------------------------------------------------ |
| More queries per page load               | Additional join/query for sections               |
| Same limited customization               | Still just toggle/reorder built-in section types |
| More complex admin API                   | CRUD for sections vs. single JSON PUT            |
| Migration required for new section types | Must seed default rows for existing events       |

### Effort: Medium (~3-5 days)

---

## Approach 3: Block Editor / Page Builder

### Concept

Each event page is a list of "blocks" — flexible content units that go beyond the current fixed section types. Admins can add generic blocks like "Rich Text", "Image Grid", "CTA Button", "FAQ Accordion", alongside the current data-driven sections.

### Schema

```typescript
export const eventBlocks = sqliteTable("event_blocks", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  eventId: integer("event_id")
    .notNull()
    .references(() => events.id, { onDelete: "cascade" }),
  blockType: text("block_type").notNull(), // "speakers", "richText", "imageGrid", "faq", etc.
  sortOrder: integer("sort_order").notNull().default(0),
  visible: integer("visible", { mode: "boolean" }).notNull().default(true),
  data: text("data").notNull(), // JSON: block-specific content
});
```

### Block Types

| Block Type     | Data Schema                                                   | Renders                  |
| -------------- | ------------------------------------------------------------- | ------------------------ |
| `hero`         | (uses event data)                                             | Current hero section     |
| `speakers`     | `{ columns?: number }`                                        | Current speakers grid    |
| `sessions`     | `{}`                                                          | Current session tabs     |
| `sponsors`     | `{}`                                                          | Current sponsors section |
| `tickets`      | `{}`                                                          | Current tickets section  |
| `richText`     | `{ html: string }`                                            | Rendered markdown/HTML   |
| `imageGrid`    | `{ images: string[], columns: 2\|3\|4 }`                      | Responsive image grid    |
| `ctaButton`    | `{ text: string, url: string, style: "primary"\|"outline" }`  | Call-to-action button    |
| `faq`          | `{ items: { q: string, a: string }[] }`                       | Accordion FAQ            |
| `countdown`    | `{ targetDate: string, label: string }`                       | Countdown timer          |
| `video`        | `{ url: string, autoplay?: boolean }`                         | Embedded video           |
| `testimonials` | `{ items: { name: string, text: string, image?: string }[] }` | Testimonial carousel     |
| `divider`      | `{ style: "line"\|"dots"\|"space" }`                          | Visual separator         |

### Admin UI

A more complex builder interface:

- Block palette sidebar: drag blocks onto the page
- Each block has an inline editor when selected
- Rich text block uses a WYSIWYG editor (e.g., Tiptap, which is headless and lightweight)
- Preview pane showing approximate render

### Pros

| Advantage                              | Detail                                       |
| -------------------------------------- | -------------------------------------------- |
| Maximum flexibility                    | Admins can compose arbitrary page layouts    |
| New block types without schema changes | Add a React component + register it          |
| Content blocks                         | Rich text, FAQ, CTA are useful beyond events |
| Modern UX                              | Feels like Notion/WordPress block editor     |

### Cons

| Disadvantage          | Detail                                                 |
| --------------------- | ------------------------------------------------------ |
| Significant UI effort | Block editor is a complex UI component                 |
| WYSIWYG complexity    | Rich text editing is notoriously hard to get right     |
| Performance           | Many blocks = many DB rows + JSON parses per page load |
| Content sprawl        | Without guardrails, pages can become inconsistent      |
| Security              | Rich text / HTML blocks need sanitization (XSS risk)   |

### Effort: High (~2-3 weeks)

---

## Approach 4: Headless CMS Integration

### Concept

Delegate content management to an external headless CMS (e.g., Sanity, Strapi, Contentful, or Payload CMS) and use our D1 only for structured event data. The CMS handles page layout, rich content, and media management.

### Architecture Options

**Option A: CMS for layout only**

- D1 stores event data (speakers, sessions, sponsors, etc.)
- CMS stores page templates and section ordering per event
- At render time, fetch layout from CMS + data from D1, merge

**Option B: CMS for everything**

- Migrate all event data to CMS
- D1 becomes unnecessary (or used only for derived/cached data)
- R2 replaced by CMS media management

### CMS Candidates

| CMS             | Hosting                     | Pros                                                        | Cons                                      |
| --------------- | --------------------------- | ----------------------------------------------------------- | ----------------------------------------- |
| **Sanity**      | Cloud (free tier)           | Excellent content modeling, real-time preview, GROQ queries | Vendor lock-in, learning curve            |
| **Payload CMS** | Self-hosted (can run on CF) | Open source, TypeScript-native, custom fields               | Must host/maintain yourself               |
| **Strapi**      | Self-hosted                 | Popular, plugin ecosystem, REST + GraphQL                   | Heavy, needs Node server (not CF Workers) |
| **Contentful**  | Cloud                       | CDN-backed, established                                     | Expensive at scale, rigid content model   |

### Pros

| Advantage                        | Detail                                                     |
| -------------------------------- | ---------------------------------------------------------- |
| Battle-tested content management | CMSes solve page building, media, versioning, localization |
| Rich editing UX                  | Visual editors, preview, collaboration out of the box      |
| No admin panel to maintain       | The CMS _is_ the admin panel                               |
| Content versioning / drafts      | Built into most CMSes                                      |

### Cons

| Disadvantage           | Detail                                                         |
| ---------------------- | -------------------------------------------------------------- |
| External dependency    | Adds a third-party service to the stack                        |
| Cost                   | Most cloud CMSes charge per seat or API call at scale          |
| Complexity             | Two data sources (CMS + D1) or full migration effort           |
| Vendor lock-in         | Content model tied to specific CMS                             |
| Latency                | API calls to external CMS add latency vs. local D1             |
| Defeats Phase 1-2 work | If going full CMS, the D1 + R2 + admin panel becomes redundant |

### Effort: High (~2-4 weeks for integration, longer for full migration)

---

## Approach 5: Static Config + Git Workflow

### Concept

Instead of a database-driven template system, define per-event templates as code. Each event can optionally have a custom layout file (e.g., `src/templates/web-developer-conference-2025.tsx`) or reference a template name in its config.

### How It Works

```typescript
// src/templates/index.ts
const templates = {
  default: DefaultEventTemplate,
  conference: ConferenceTemplate,
  bootcamp: BootcampTemplate,
  meetup: MeetupTemplate,
};

// In events table or data
templateName: text("template_name").default("default"),
```

```typescript
// EventPage.tsx
function EventPage({ event }: { event: Event }) {
  const Template = templates[event.templateName] ?? templates.default;
  return <Template event={event} />;
}
```

### Template Variants

| Template     | Sections                                                  | Use Case                            |
| ------------ | --------------------------------------------------------- | ----------------------------------- |
| `default`    | All sections, current layout                              | Standard events                     |
| `conference` | Hero → Speakers → Sessions → Sponsors → Tickets → Metrics | Multi-day conferences               |
| `bootcamp`   | Hero → Metrics → Curriculum (custom) → Tickets → FAQ      | Course-style events                 |
| `meetup`     | Hero → Speakers → Location → Sponsors                     | Simple meetups, no tickets/sessions |
| `past`       | Hero → AfterMetrics → Gallery → Speakers (read-only)      | Archived past events                |

### Admin Panel Integration

A dropdown selector on the Event Form: "Template" → picks from registered template names.

### Pros

| Advantage           | Detail                                                   |
| ------------------- | -------------------------------------------------------- |
| Full control        | Each template is a React component — any layout possible |
| Type-safe           | Templates are TypeScript, caught at build time           |
| Fast                | No JSON parsing or dynamic resolution at runtime         |
| Simple mental model | "Which template does this event use?" — one field        |
| Easy to test        | Each template is a standalone component                  |

### Cons

| Disadvantage           | Detail                                             |
| ---------------------- | -------------------------------------------------- |
| Requires code deploy   | New templates or changes need a git push + deploy  |
| Not admin-manageable   | Non-developers can't create new templates          |
| Template proliferation | Risk of one-off templates per event                |
| Coupling               | Templates must know about the Event type structure |

### Effort: Low (~1-2 days for the framework, ongoing per template)

---

## Comparison Matrix

| Criteria                  | JSON Config | Relational Sections | Block Editor | Headless CMS | Static Templates  |
| ------------------------- | :---------: | :-----------------: | :----------: | :----------: | :---------------: |
| **Implementation effort** |     Low     |       Medium        |     High     |     High     |        Low        |
| **Admin flexibility**     |   Medium    |       Medium        |     High     |  Very High   |        Low        |
| **Section reordering**    |     Yes     |         Yes         |     Yes      |     Yes      | No (per template) |
| **Custom content blocks** |     No      |         No          |     Yes      |     Yes      |     Code only     |
| **Non-dev friendly**      |     Yes     |         Yes         |     Yes      |     Yes      |        No         |
| **Performance impact**    |   Minimal   |       Minimal       |   Moderate   |   Moderate   |       None        |
| **Maintenance burden**    |     Low     |         Low         |     High     |    Medium    |        Low        |
| **Consistency**           |    High     |        High         |    Medium    |    Medium    |       High        |
| **Works with Phase 1-2**  | Seamlessly  |     Seamlessly      |   Extends    |   Replaces   |    Seamlessly     |

---

## Recommendation

### Start With: Approach 1 (JSON Config) + Approach 5 (Static Templates)

A hybrid of the two simplest approaches covers the most ground with minimal effort:

1. **Static templates** for structurally different event types (conference vs. bootcamp vs. meetup). These are code-defined React components — maximum control, type-safe, zero runtime overhead.

2. **JSON config** within each template for section-level customization (show/hide sections, reorder, per-section props). This gives admins control without needing code deploys for simple changes.

### Implementation Path

```
Phase 3a: Static Templates (~1-2 days)
  - Add `templateName` column to events table
  - Create 2-3 template variants (default, conference, meetup)
  - Add template dropdown to admin Event Form
  - EventPage.tsx dispatches to the correct template

Phase 3b: JSON Config (~2-3 days)
  - Add `templateConfig` column to events table
  - Each template reads its config and renders sections accordingly
  - Add "Layout" tab to admin Event Form with section toggles + reorder

Phase 3c (future): Block Editor
  - Only if 3a + 3b prove insufficient
  - Build on top of the existing template system
  - Add generic content blocks alongside data-driven sections
```

### Why Not Start With Block Editor or CMS?

- **Block editor** is a significant UI investment before we know the actual requirements. The current 8 events all use the same layout — we may never need more than section toggling.
- **Headless CMS** contradicts the architectural direction of Phase 1-2. It makes sense if we were starting from scratch, but rebuilding after D1/R2/admin are already in place would be wasteful.
- Both remain viable future options if the simpler approaches prove insufficient.

---

## Open Questions

1. **How many distinct event types will there realistically be?** If just 2-3, static templates are sufficient. If 10+, consider the block editor.
2. **Who creates new event layouts?** If only developers, static templates work. If non-technical staff need to, block editor or CMS becomes necessary.
3. **Is per-event section ordering actually needed?** Or is it enough to have 3-4 predefined templates? User research with event organizers would clarify this.
4. **What about multi-language support?** None of these approaches address i18n. If localization is on the roadmap, a CMS with built-in i18n (Sanity, Contentful) becomes more attractive.
5. **Should past events be editable?** If past events become read-only archives, a simplified "past" template with just gallery + metrics might be all that's needed.

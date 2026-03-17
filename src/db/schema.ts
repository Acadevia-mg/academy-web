import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

// ── Events Table ──
export const events = sqliteTable("events", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  navigable: integer("navigable", { mode: "boolean" }).default(true),
  name: text("name").notNull(),
  heroDescription: text("hero_description").notNull(),
  cardDescription: text("card_description").notNull(),
  registerLink: text("register_link").notNull(),
  videoUrl: text("video_url"),
  date: text("date").notNull(),

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
  image: text("image").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
});

// ── Sessions (per-event) ──
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
  eventDate: text("event_date"),
  sortOrder: integer("sort_order").notNull().default(0),
});

// ── Sponsors (per-event) ──
export const sponsors = sqliteTable("sponsors", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  eventId: integer("event_id")
    .notNull()
    .references(() => events.id, { onDelete: "cascade" }),
  tier: text("tier").notNull(),
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
  url: text("url").notNull(),
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

/**
 * Seed script for D1 database.
 *
 * Reads static events.ts and announcement.ts data and generates SQL INSERT statements.
 * Run with: npm run db:seed
 *
 * Usage:
 *   tsx scripts/seed-d1.ts > scripts/seed.sql
 *   wrangler d1 execute academy-db --local --file=./scripts/seed.sql
 *
 * Or for remote:
 *   wrangler d1 execute academy-db --remote --file=./scripts/seed.sql
 */

// We use a dynamic import approach since events.ts uses path aliases
// This script should be run from project root with tsx

import { readFileSync } from "fs";
import { join } from "path";

// Helper to escape SQL strings
function esc(val: string | undefined | null): string {
  if (val === undefined || val === null) return "NULL";
  return `'${val.replace(/'/g, "''")}'`;
}

function escNum(val: number | undefined | null): string {
  if (val === undefined || val === null) return "NULL";
  return String(val);
}

function escBool(val: boolean | undefined | null): string {
  if (val === undefined || val === null) return "1";
  return val ? "1" : "0";
}

async function main() {
  // Dynamically import the events data
  // tsx supports path aliases from tsconfig.json
  const { default: events } = await import("../src/data/events");
  const { announcement } = await import("../src/data/announcement");

  const lines: string[] = [];

  // Insert events
  for (const event of events) {
    lines.push(
      `INSERT INTO events (navigable, name, hero_description, card_description, register_link, video_url, date, location_name, location_subtext, location_latitude, location_longitude, color_primary, color_secondary, color_accent, color_background, color_text) VALUES (${escBool(event.navigable)}, ${esc(event.name)}, ${esc(event.heroDescription)}, ${esc(event.cardDescription)}, ${esc(event.registerLink)}, ${esc(event.videoUrl)}, ${esc(event.date)}, ${esc(event.location.name)}, ${esc(event.location.subtext)}, ${escNum(event.location.latitude)}, ${escNum(event.location.longitude)}, ${esc(event.colorPalette.primary)}, ${esc(event.colorPalette.secondary)}, ${esc(event.colorPalette.accent)}, ${esc(event.colorPalette.background)}, ${esc(event.colorPalette.text)});`,
    );

    // We use last_insert_rowid() to get the event ID
    // But since D1 SQL execution is batch, we need to track IDs ourselves
    // We'll use a subquery approach instead

    const eventIdExpr = `(SELECT id FROM events WHERE name = ${esc(event.name)})`;

    // Speakers
    event.speakers.forEach((speaker, i) => {
      lines.push(
        `INSERT INTO speakers (event_id, full_name, title, company, instagram, linkedin, twitter, sort_order) VALUES (${eventIdExpr}, ${esc(speaker.fullName)}, ${esc(speaker.title)}, ${esc(speaker.company)}, ${esc(speaker.instagram)}, ${esc(speaker.linkedin)}, ${esc(speaker.twitter)}, ${i});`,
      );
    });

    // Organizers
    event.organizers.forEach((org, i) => {
      lines.push(
        `INSERT INTO organizers (event_id, name, designation, image, sort_order) VALUES (${eventIdExpr}, ${esc(org.name)}, ${esc(org.designation)}, ${esc(org.image)}, ${i});`,
      );
    });

    // Sessions
    event.sessions.forEach((session, i) => {
      lines.push(
        `INSERT INTO sessions (event_id, room, speaker_name, topic, start_time, end_time, sort_order) VALUES (${eventIdExpr}, ${esc(session.room)}, ${esc(session.speakerName)}, ${esc(session.topic)}, ${esc(session.startTime)}, ${esc(session.endTime)}, ${i});`,
      );
    });

    // Sponsors
    event.sponsors.forEach((sponsor, i) => {
      lines.push(
        `INSERT INTO sponsors (event_id, tier, sponsor_slug, sort_order) VALUES (${eventIdExpr}, ${esc(sponsor.tier)}, ${esc(sponsor.sponsorSlug)}, ${i});`,
      );
    });

    // Tickets
    if (event.tickets) {
      event.tickets.forEach((ticket, i) => {
        lines.push(
          `INSERT INTO tickets (event_id, type, description, price, link, perks, sort_order) VALUES (${eventIdExpr}, ${esc(ticket.type)}, ${esc(ticket.description)}, ${escNum(ticket.price)}, ${esc(ticket.link)}, ${esc(JSON.stringify(ticket.perks))}, ${i});`,
        );
      });
    }

    // Event Images
    event.images.forEach((img, i) => {
      lines.push(
        `INSERT INTO event_images (event_id, url, sort_order) VALUES (${eventIdExpr}, ${esc(img)}, ${i});`,
      );
    });

    // Initial Metrics
    event.initialMetrics.forEach((metric, i) => {
      lines.push(
        `INSERT INTO initial_metrics (event_id, title, value, sort_order) VALUES (${eventIdExpr}, ${esc(metric.title)}, ${escNum(metric.value)}, ${i});`,
      );
    });

    // After Metrics
    if (event.afterMetrics) {
      const am = event.afterMetrics;
      lines.push(
        `INSERT INTO after_metrics (event_id, applications, vip_guests, supporter, speakers_count, working_participant, job_seeker, job_provider, satisfaction) VALUES (${eventIdExpr}, ${esc(am.applications)}, ${esc(am.vipGuests)}, ${esc(am.supporter)}, ${esc(am.speakers)}, ${esc(am.workingParticipant)}, ${esc(am.jobSeeker)}, ${esc(am.jobProvider)}, ${esc(am.satisfaction)});`,
      );
    }
  }

  // Insert announcement
  lines.push(
    `INSERT INTO announcements (show, text, background_color, text_color, link, link_text, show_link) VALUES (${escBool(announcement.show)}, ${esc(announcement.text)}, ${esc(announcement.backgroundColor)}, ${esc(announcement.textColor)}, ${esc(announcement.link)}, ${esc(announcement.linkText)}, ${escBool(announcement.showLink)});`,
  );

  console.log(lines.join("\n"));
}

main().catch(console.error);

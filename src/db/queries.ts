import { getDb } from "./index";
import { eq } from "drizzle-orm";
import * as schema from "./schema";
import type {
  Event,
  Speaker,
  Session,
  Sponsor,
  Ticket,
  InitialMetric,
  AfterMetrics,
  Organizer,
} from "@/types";
import { slugify } from "@/lib/slugify";

function reconstructEvent(
  e: typeof schema.events.$inferSelect,
  eventSpeakers: (typeof schema.speakers.$inferSelect)[],
  eventOrganizers: (typeof schema.organizers.$inferSelect)[],
  eventSessions: (typeof schema.sessions.$inferSelect)[],
  eventSponsors: (typeof schema.sponsors.$inferSelect)[],
  eventTickets: (typeof schema.tickets.$inferSelect)[],
  eventImgs: (typeof schema.eventImages.$inferSelect)[],
  eventMetrics: (typeof schema.initialMetrics.$inferSelect)[],
  eventAfterMetrics: typeof schema.afterMetrics.$inferSelect | undefined,
): Event {
  const speakersArr: Speaker[] = eventSpeakers.map((s) => ({
    fullName: s.fullName,
    title: s.title,
    company: s.company ?? undefined,
    instagram: s.instagram ?? undefined,
    linkedin: s.linkedin ?? undefined,
    twitter: s.twitter ?? undefined,
  }));

  const organizersArr: Organizer[] = eventOrganizers.map((o) => ({
    id: o.id,
    name: o.name,
    designation: o.designation,
    image: o.image,
  }));

  const sessionsArr: Session[] = eventSessions.map((s) => {
    if (s.room === "Network") {
      return {
        room: "Network" as const,
        speakerName: s.speakerName,
        topic: s.topic ?? undefined,
        startTime: s.startTime ?? undefined,
        endTime: s.endTime ?? undefined,
      };
    }
    return {
      room: s.room,
      topic: s.topic!,
      startTime: s.startTime!,
      endTime: s.endTime!,
      speakerName: s.speakerName,
    };
  });

  const sponsorsArr: Sponsor[] = eventSponsors.map((s) => ({
    tier: s.tier as Sponsor["tier"],
    sponsorSlug: s.sponsorSlug,
  }));

  const ticketsArr: Ticket[] | undefined =
    eventTickets.length > 0
      ? eventTickets.map((t) => ({
          type: t.type,
          description: t.description,
          price: t.price,
          link: t.link,
          perks: JSON.parse(t.perks) as string[],
        }))
      : undefined;

  const metricsArr: InitialMetric[] = eventMetrics.map((m) => ({
    title: m.title,
    value: m.value,
  }));

  const afterMetricsObj: AfterMetrics | undefined = eventAfterMetrics
    ? {
        applications: eventAfterMetrics.applications,
        vipGuests: eventAfterMetrics.vipGuests,
        supporter: eventAfterMetrics.supporter,
        speakers: eventAfterMetrics.speakers,
        workingParticipant: eventAfterMetrics.workingParticipant,
        jobSeeker: eventAfterMetrics.jobSeeker,
        jobProvider: eventAfterMetrics.jobProvider,
        satisfaction: eventAfterMetrics.satisfaction,
      }
    : undefined;

  return {
    id: e.id,
    navigable: e.navigable ?? true,
    name: e.name,
    heroDescription: e.heroDescription,
    cardDescription: e.cardDescription,
    location: {
      name: e.locationName,
      subtext: e.locationSubtext,
      latitude: e.locationLatitude ?? undefined,
      longitude: e.locationLongitude ?? undefined,
    },
    registerLink: e.registerLink,
    videoUrl: e.videoUrl ?? undefined,
    date: e.date,
    organizers: organizersArr,
    speakers: speakersArr,
    sessions: sessionsArr,
    sponsors: sponsorsArr,
    tickets: ticketsArr,
    images: eventImgs.map((img) => img.url),
    initialMetrics: metricsArr as Event["initialMetrics"],
    afterMetrics: afterMetricsObj,
    colorPalette: {
      primary: e.colorPrimary,
      secondary: e.colorSecondary,
      accent: e.colorAccent,
      background: e.colorBackground,
      text: e.colorText,
    },
  };
}

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
        eventImgs,
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
        eventImgs,
        eventMetrics,
        eventAfterMetrics[0],
      );
    }),
  );
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
  const allEvents = await getAllEvents();
  return allEvents.find((e) => slugify(e.name) === slug) || null;
}

export async function getAnnouncement() {
  const db = await getDb();
  const rows = await db.select().from(schema.announcements).limit(1);
  return rows[0] || null;
}

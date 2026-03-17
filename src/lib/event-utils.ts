import { Event } from "@/types";
import { slugify } from "./slugify";

export function getFormattedDate(date: string) {
  const formattedDate = new Date(date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return formattedDate;
}

export function formatIsoDate(isoDate: string): string {
  if (!isoDate) return "";
  const date = new Date(isoDate);

  if (isNaN(date.getTime())) {
    return "";
  }

  const day = date.getDate();
  const year = date.getFullYear();
  const month = date.toLocaleString("tr-TR", { month: "long" });

  return `${day} ${month} ${year}`;
}

export function sortEventsByDate(events: Event[]): Event[] {
  return events
    .slice()
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function getLatestEvent(events: Event[]): Event {
  const sortedEvents = sortEventsByDate(events);
  return sortedEvents[sortedEvents.length - 1];
}

export function getEventBySlug(events: Event[], slug: string) {
  return events.find((event) => slugify(event.name) === slug) || null;
}

export function getLatestEventLink(events: Event[]): string {
  const latestEvent = getClosestUpcomingEvent(events);
  return latestEvent
    ? latestEvent.registerLink
    : "https://togather.lodos.io/communities/multiacademy-94761667282726876508";
}

export function getSecondLatestEvent(events: Event[]): Event {
  const sortedEvents = sortEventsByDate(events);
  return sortedEvents[sortedEvents.length - 2];
}

export function getClosestUpcomingEvent(events: Event[]): Event | null {
  const now = new Date();
  const upcoming = events
    .filter((e) => new Date(e.date) > now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  return upcoming[0] || null;
}

export function getMostRecentPastEvent(events: Event[]): Event | null {
  const now = new Date();
  const past = events
    .filter((e) => new Date(e.date) <= now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return past[0] || null;
}

export function getLatestNavigableEvent(events: Event[]): Event | null {
  const navigableEvents = events.filter((e) => e.navigable !== false);
  if (navigableEvents.length === 0) return null;

  const sortedNavigable = navigableEvents.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return sortedNavigable[0];
}

export function getEventByBaseNameAndYear(
  events: Event[],
  baseName: string,
  year: string,
): Event | null {
  const normalizedBase = baseName
    .trim()
    .toLowerCase()
    .replace(/[-\s]+/g, "-");
  return (
    events.find((event) => {
      const eventName = event.name.trim().toLowerCase();
      const eventBase = eventName
        .replace(/[-\s]?\d{4}$/, "")
        .replace(/[-\s]+/g, "-");
      const eventYear = eventName.match(/(\d{4})$/)?.[1];
      return eventBase === normalizedBase && eventYear === year;
    }) || null
  );
}

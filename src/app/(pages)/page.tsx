"use client";

import {
  getSecondLatestEvent,
  getLatestNavigableEvent,
} from "@/lib/event-utils";
import { useEffect, useState, useMemo } from "react";
import { useEventColor } from "@/context/EventColorContext";
import EventPage from "@/components/event-page/EventPage";
import Loading from "@/app/loading";
import type { Event } from "@/types";

export default function HeroPage() {
  const [events, setEvents] = useState<Event[] | null>(null);
  const { setCurrentEvent } = useEventColor();

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data: Event[]) => setEvents(data))
      .catch(() => setEvents([]));
  }, []);

  const latestEventDetails = useMemo(
    () => (events ? getLatestNavigableEvent(events) : null),
    [events],
  );

  const secondLatest = useMemo(
    () =>
      events && events.length >= 2 ? getSecondLatestEvent(events) : undefined,
    [events],
  );

  useEffect(() => {
    if (latestEventDetails) {
      setCurrentEvent(latestEventDetails);
    }
  }, [latestEventDetails, setCurrentEvent]);

  if (!events) return <Loading />;

  if (!latestEventDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p>Etkinlik bulunamadı.</p>
      </div>
    );
  }

  return (
    <EventPage event={latestEventDetails} previousEvent={secondLatest} hero />
  );
}

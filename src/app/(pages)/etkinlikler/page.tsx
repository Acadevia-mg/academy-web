"use client";

import { useEffect, useState } from "react";
import EventCard from "@/components/event-components/event-card";
import { getLatestEvent, getEventByBaseNameAndYear } from "@/lib/event-utils";
import { useEventColor } from "@/context/EventColorContext";
import Loading from "@/app/loading";
import type { Event } from "@/types";
import { notFound } from "next/navigation";

interface EventGroup {
  baseEvent: Event;
  availableYears: string[];
  selectedYear: string;
}

export default function Events() {
  const [events, setEvents] = useState<Event[] | null>(null);
  const [latestEvent, setLatestEvent] = useState<Event | null>(null);
  const [eventGroups, setEventGroups] = useState<EventGroup[]>([]);
  const { setCurrentEvent } = useEventColor();

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data: Event[]) => {
        setEvents(data);
        if (data.length === 0) return;
        const latest = getLatestEvent(data);
        setLatestEvent(latest);
        setCurrentEvent(latest);
      })
      .catch(() => setEvents([]));
  }, [setCurrentEvent]);

  useEffect(() => {
    if (!latestEvent || !events) return;

    // Group events by their base name (without year suffix)
    const eventMap = new Map<string, Event[]>();

    events.forEach((event) => {
      const nameMatch = event.name.match(/^(.+?)\s+(\d{4})$|^(.+)-(\d{4})$/);
      if (nameMatch) {
        const baseName = nameMatch[1] || nameMatch[3];

        if (!eventMap.has(baseName)) {
          eventMap.set(baseName, []);
        }
        eventMap.get(baseName)!.push(event);
      } else {
        // Events without a year suffix get their own group
        eventMap.set(event.name, [event]);
      }
    });

    // Create event groups with available years
    const groups: EventGroup[] = [];
    eventMap.forEach((eventList, baseName) => {
      eventList.sort((a, b) => {
        const yearA = a.name.match(/\s+(\d{4})$|-(\d{4})$/)?.[1] || "0";
        const yearB = b.name.match(/\s+(\d{4})$|-(\d{4})$/)?.[1] || "0";
        return Number.parseInt(yearB) - Number.parseInt(yearA);
      });

      const availableYears = eventList
        .map((event) => {
          const yearMatch = event.name.match(/\s+(\d{4})$|-(\d{4})$/);
          return yearMatch ? yearMatch[1] : "";
        })
        .filter(Boolean);

      groups.push({
        baseEvent: eventList[0],
        availableYears,
        selectedYear: availableYears[0] || "",
      });
    });

    groups.sort(
      (a, b) =>
        new Date(b.baseEvent.date).getTime() -
        new Date(a.baseEvent.date).getTime(),
    );

    const latestEventIndex = groups.findIndex(
      (group) =>
        group.baseEvent.id === latestEvent.id ||
        groups.some((g) =>
          g.availableYears.some((year) => {
            const baseName = group.baseEvent.name.replace(
              /\s+\d{4}$|-\d{4}$/,
              "",
            );
            const latestBaseName = latestEvent.name.replace(
              /\s+\d{4}$|-\d{4}$/,
              "",
            );
            return baseName === latestBaseName;
          }),
        ),
    );

    if (latestEventIndex > 0) {
      const latestGroup = groups.splice(latestEventIndex, 1)[0];
      groups.unshift(latestGroup);
    }

    setEventGroups(groups);
  }, [latestEvent, events]);

  if (!events || !latestEvent) {
    return <Loading />;
  }

  const allEventCards = eventGroups.map((group) => ({
    event: group.baseEvent,
    availableYears: group.availableYears,
    selectedYear: group.selectedYear,
    isLatestEvent: group.baseEvent.id === latestEvent.id,
  }));

  const now = new Date();
  const upcomingEvents = allEventCards
    .filter(({ event }) => new Date(event.date) > now)
    .sort(
      (a, b) =>
        new Date(a.event.date).getTime() - new Date(b.event.date).getTime(),
    );
  const completedEvents = allEventCards
    .filter(({ event }) => new Date(event.date) <= now)
    .sort(
      (a, b) =>
        new Date(b.event.date).getTime() - new Date(a.event.date).getTime(),
    );

  if (upcomingEvents.length > 0) {
    upcomingEvents.forEach((e, i) => (e.isLatestEvent = false));
    upcomingEvents[0].isLatestEvent = true;
  }

  return (
    <div className="min-h-screen bg-color-background">
      <div className="pt-[20vh] w-5/6 2xl:w-2/3 mx-auto space-y-8">
        {upcomingEvents.length > 0 && (
          <div className="space-y-8">
            {upcomingEvents.map((props) => (
              <EventCard
                key={`${props.event.id}-${props.selectedYear}`}
                {...props}
                allEvents={events}
              />
            ))}
          </div>
        )}
        {upcomingEvents.length > 0 && completedEvents.length > 0 && (
          <hr className="my-8 border-t border-gray-300" />
        )}
        {completedEvents.length > 0 && (
          <div className="space-y-8 ">
            {completedEvents.map((props) => (
              <EventCard
                key={`${props.event.id}-${props.selectedYear}`}
                {...props}
                allEvents={events}
              />
            ))}
          </div>
        )}
        {upcomingEvents.length === 0 && completedEvents.length === 0 && (
          <div className="flex items-center justify-center min-h-[50vh] text-lg text-gray-600">
            Geçmiş etkinlik bulunmamaktadır.
          </div>
        )}
      </div>
    </div>
  );
}

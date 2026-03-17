"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { TicketsForm } from "@/components/admin/form-sections/tickets-form";
import type { Event } from "@/types";

export default function EventTicketsPage() {
  const params = useParams();
  const eventId = params.id as string;
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/admin/events`)
      .then((res) => res.json())
      .then((events: Event[]) => {
        const found = events.find((e) => e.id === parseInt(eventId));
        setEvent(found || null);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [eventId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!event) return <p className="text-gray-500">Event not found.</p>;

  return (
    <div className="max-w-3xl">
      <TicketsForm
        eventId={eventId}
        initialTickets={event.tickets?.map((t) => ({
          type: t.type,
          description: t.description,
          price: t.price,
          link: t.link,
          perks: t.perks,
        }))}
      />
    </div>
  );
}

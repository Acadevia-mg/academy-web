"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { EventSectionNav } from "@/components/admin/event-section-nav";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function EventDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const eventId = params.id as string;
  const [eventName, setEventName] = useState<string>("");

  useEffect(() => {
    fetch(`/api/admin/events/${eventId}`)
      .then((res) => res.json())
      .then((data) => setEventName(data.name || ""))
      .catch(() => {});
  }, [eventId]);

  return (
    <div className="-m-6">
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/dashboard"
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">
              {eventName || "Loading..."}
            </h1>
            <p className="text-sm text-gray-500">Event ID: {eventId}</p>
          </div>
        </div>
      </div>
      <EventSectionNav eventId={eventId} />
      <div className="p-6">{children}</div>
    </div>
  );
}

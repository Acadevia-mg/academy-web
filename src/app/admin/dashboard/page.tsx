"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Event } from "@/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus } from "lucide-react";

export default function DashboardPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/admin/events")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort(
          (a: Event, b: Event) =>
            new Date(b.date).getTime() - new Date(a.date).getTime(),
        );
        setEvents(sorted);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Events</h1>
        <Button onClick={() => router.push("/admin/dashboard/events/new")}>
          <Plus className="h-4 w-4 mr-1" />
          New Event
        </Button>
      </div>

      <div className="space-y-3">
        {events.map((event) => (
          <Card
            key={event.id}
            className="hover:shadow-sm transition-shadow cursor-pointer"
            onClick={() => router.push(`/admin/dashboard/events/${event.id}`)}
          >
            <CardHeader className="p-4 pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{event.name}</CardTitle>
                <div className="flex items-center gap-2">
                  {event.navigable !== false && (
                    <Badge variant="secondary">Navigable</Badge>
                  )}
                  {event.navigable === false && (
                    <Badge variant="outline">Hidden</Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <CardDescription>
                {new Date(event.date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}{" "}
                &middot; {event.location.name}
              </CardDescription>
            </CardContent>
          </Card>
        ))}

        {events.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No events yet. Create your first event to get started.
          </div>
        )}
      </div>
    </div>
  );
}

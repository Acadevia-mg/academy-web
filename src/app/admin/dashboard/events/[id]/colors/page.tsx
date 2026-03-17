"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ColorsForm } from "@/components/admin/form-sections/colors-form";

export default function EventColorsPage() {
  const params = useParams();
  const eventId = params.id as string;
  const [colors, setColors] = useState<Record<string, string> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/admin/events/${eventId}`)
      .then((res) => res.json())
      .then((data) => {
        setColors({
          primary: data.colorPrimary || "",
          secondary: data.colorSecondary || "",
          accent: data.colorAccent || "",
          background: data.colorBackground || "",
          text: data.colorText || "",
        });
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

  return (
    <div className="max-w-3xl">
      <ColorsForm
        eventId={eventId}
        initialColors={
          colors
            ? {
                primary: colors.primary,
                secondary: colors.secondary,
                accent: colors.accent,
                background: colors.background,
                text: colors.text,
              }
            : undefined
        }
      />
    </div>
  );
}

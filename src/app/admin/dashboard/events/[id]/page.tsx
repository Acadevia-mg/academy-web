"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { BasicInfoForm } from "@/components/admin/form-sections/basic-info-form";
import type { BasicInfoFormData } from "@/lib/validations/event";
import { slugify } from "@/lib/slugify";

export default function EventBasicInfoPage() {
  const params = useParams();
  const eventId = params.id as string;
  const [initialData, setInitialData] = useState<BasicInfoFormData | null>(
    null,
  );
  const [eventSlug, setEventSlug] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/admin/events/${eventId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.name) setEventSlug(slugify(data.name));
        setInitialData({
          name: data.name || "",
          heroDescription: data.heroDescription || "",
          cardDescription: data.cardDescription || "",
          navigable: data.navigable ?? true,
          registerLink: data.registerLink || "",
          videoUrl: data.videoUrl || "",
          date: data.date || "",
          location: {
            name: data.locationName || data.location?.name || "",
            subtext: data.locationSubtext || data.location?.subtext || "",
            latitude: data.locationLatitude ?? data.location?.latitude ?? "",
            longitude: data.locationLongitude ?? data.location?.longitude ?? "",
          },
          colorPalette: {
            primary: data.colorPrimary || data.colorPalette?.primary || "",
            secondary:
              data.colorSecondary || data.colorPalette?.secondary || "",
            accent: data.colorAccent || data.colorPalette?.accent || "",
            background:
              data.colorBackground || data.colorPalette?.background || "",
            text: data.colorText || data.colorPalette?.text || "",
          },
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
      <BasicInfoForm
        eventId={eventId}
        eventSlug={eventSlug}
        initialData={initialData ?? undefined}
      />
    </div>
  );
}

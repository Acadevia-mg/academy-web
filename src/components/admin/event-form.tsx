"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ImageCropDialog } from "./image-crop-dialog";
import { slugify } from "@/lib/slugify";
import type { Event } from "@/types";

type SpeakerForm = {
  fullName: string;
  title: string;
  company: string;
  instagram: string;
  linkedin: string;
  twitter: string;
};

type OrganizerForm = {
  name: string;
  designation: string;
  image: string;
};

type SessionForm = {
  room: string;
  speakerName: string;
  topic: string;
  startTime: string;
  endTime: string;
};

type SponsorForm = {
  tier: string;
  sponsorSlug: string;
};

type TicketForm = {
  type: string;
  description: string;
  price: number;
  link: string;
  perks: string[];
};

type MetricForm = {
  title: string;
  value: number;
};

type AfterMetricsForm = {
  applications: string;
  vipGuests: string;
  supporter: string;
  speakers: string;
  workingParticipant: string;
  jobSeeker: string;
  jobProvider: string;
  satisfaction: string;
};

type CropConfig = {
  aspectRatio: number;
  outputWidth: number;
  outputHeight: number;
  uploadPath: string;
  onCropped: (url: string) => void;
};

interface EventFormProps {
  initialData?: Event;
}

export function EventForm({ initialData }: EventFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  // Basic info
  const [name, setName] = useState(initialData?.name ?? "");
  const [heroDescription, setHeroDescription] = useState(
    initialData?.heroDescription ?? "",
  );
  const [cardDescription, setCardDescription] = useState(
    initialData?.cardDescription ?? "",
  );
  const [navigable, setNavigable] = useState(initialData?.navigable !== false);
  const [registerLink, setRegisterLink] = useState(
    initialData?.registerLink ?? "",
  );
  const [videoUrl, setVideoUrl] = useState(initialData?.videoUrl ?? "");
  const [date, setDate] = useState(initialData?.date ?? "");

  // Location
  const [locationName, setLocationName] = useState(
    initialData?.location.name ?? "",
  );
  const [locationSubtext, setLocationSubtext] = useState(
    initialData?.location.subtext ?? "",
  );
  const [locationLat, setLocationLat] = useState(
    initialData?.location.latitude?.toString() ?? "",
  );
  const [locationLng, setLocationLng] = useState(
    initialData?.location.longitude?.toString() ?? "",
  );

  // Colors
  const [colorPrimary, setColorPrimary] = useState(
    initialData?.colorPalette.primary ?? "0 0% 100%",
  );
  const [colorSecondary, setColorSecondary] = useState(
    initialData?.colorPalette.secondary ?? "0 0% 20%",
  );
  const [colorAccent, setColorAccent] = useState(
    initialData?.colorPalette.accent ?? "200 80% 50%",
  );
  const [colorBackground, setColorBackground] = useState(
    initialData?.colorPalette.background ?? "0 0% 98%",
  );
  const [colorText, setColorText] = useState(
    initialData?.colorPalette.text ?? "0 0% 10%",
  );

  // Arrays
  const [speakers, setSpeakers] = useState<SpeakerForm[]>(
    initialData?.speakers.map((s) => ({
      fullName: s.fullName,
      title: s.title,
      company: s.company ?? "",
      instagram: s.instagram ?? "",
      linkedin: s.linkedin ?? "",
      twitter: s.twitter ?? "",
    })) ?? [],
  );

  const [organizers, setOrganizers] = useState<OrganizerForm[]>(
    initialData?.organizers.map((o) => ({
      name: o.name,
      designation: o.designation,
      image: o.image,
    })) ?? [],
  );

  const [sessions, setSessions] = useState<SessionForm[]>(
    initialData?.sessions.map((s) => ({
      room: s.room,
      speakerName: s.speakerName,
      topic: s.topic ?? "",
      startTime: s.startTime ?? "",
      endTime: s.endTime ?? "",
    })) ?? [],
  );

  const [sponsors, setSponsors] = useState<SponsorForm[]>(
    initialData?.sponsors.map((s) => ({
      tier: s.tier,
      sponsorSlug: s.sponsorSlug,
    })) ?? [],
  );

  const [hasTickets, setHasTickets] = useState(!!initialData?.tickets?.length);
  const [tickets, setTickets] = useState<TicketForm[]>(
    initialData?.tickets?.map((t) => ({
      type: t.type,
      description: t.description,
      price: t.price,
      link: t.link,
      perks: t.perks,
    })) ?? [],
  );

  const [initialMetrics, setInitialMetrics] = useState<MetricForm[]>(
    initialData?.initialMetrics.map((m) => ({
      title: m.title,
      value: m.value,
    })) ?? [{ title: "", value: 0 }],
  );

  const [hasAfterMetrics, setHasAfterMetrics] = useState(
    !!initialData?.afterMetrics,
  );
  const [afterMetrics, setAfterMetrics] = useState<AfterMetricsForm>(
    initialData?.afterMetrics ?? {
      applications: "",
      vipGuests: "",
      supporter: "",
      speakers: "",
      workingParticipant: "",
      jobSeeker: "",
      jobProvider: "",
      satisfaction: "",
    },
  );

  const [images, setImages] = useState<string[]>(initialData?.images ?? []);

  // Image crop dialog
  const [cropConfig, setCropConfig] = useState<CropConfig | null>(null);

  const eventSlug = slugify(name);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const payload = {
      name,
      heroDescription,
      cardDescription,
      navigable,
      registerLink,
      videoUrl: videoUrl || undefined,
      date,
      location: {
        name: locationName,
        subtext: locationSubtext,
        latitude: locationLat ? parseFloat(locationLat) : undefined,
        longitude: locationLng ? parseFloat(locationLng) : undefined,
      },
      colorPalette: {
        primary: colorPrimary,
        secondary: colorSecondary,
        accent: colorAccent,
        background: colorBackground,
        text: colorText,
      },
      speakers: speakers.map((s) => ({
        fullName: s.fullName,
        title: s.title,
        company: s.company || undefined,
        instagram: s.instagram || undefined,
        linkedin: s.linkedin || undefined,
        twitter: s.twitter || undefined,
      })),
      organizers,
      sessions: sessions.map((s) => ({
        room: s.room,
        speakerName: s.speakerName,
        topic: s.topic || undefined,
        startTime: s.startTime || undefined,
        endTime: s.endTime || undefined,
      })),
      sponsors,
      tickets: hasTickets ? tickets : undefined,
      images,
      initialMetrics,
      afterMetrics: hasAfterMetrics ? afterMetrics : undefined,
    };

    try {
      const url = initialData
        ? `/api/admin/events/${initialData.id}`
        : "/api/admin/events";
      const method = initialData ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        router.push("/admin/dashboard");
      }
    } catch {
    } finally {
      setSaving(false);
    }
  };

  // Helper to update array items
  const updateSpeaker = (i: number, field: keyof SpeakerForm, val: string) => {
    const updated = [...speakers];
    updated[i] = { ...updated[i], [field]: val };
    setSpeakers(updated);
  };

  const updateOrganizer = (
    i: number,
    field: keyof OrganizerForm,
    val: string,
  ) => {
    const updated = [...organizers];
    updated[i] = { ...updated[i], [field]: val };
    setOrganizers(updated);
  };

  const updateSession = (i: number, field: keyof SessionForm, val: string) => {
    const updated = [...sessions];
    updated[i] = { ...updated[i], [field]: val };
    setSessions(updated);
  };

  const updateSponsor = (i: number, field: keyof SponsorForm, val: string) => {
    const updated = [...sponsors];
    updated[i] = { ...updated[i], [field]: val };
    setSponsors(updated);
  };

  const updateTicket = (
    i: number,
    field: keyof TicketForm,
    val: string | number | string[],
  ) => {
    const updated = [...tickets];
    updated[i] = { ...updated[i], [field]: val };
    setTickets(updated);
  };

  const inputClass =
    "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";
  const sectionClass =
    "bg-white rounded-lg border border-gray-200 p-6 space-y-4";

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl">
      {/* Basic Info */}
      <div className={sectionClass}>
        <h2 className="text-lg font-semibold">Temel Bilgiler</h2>
        <div>
          <label className={labelClass}>Etkinlik Adi</label>
          <input
            className={inputClass}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className={labelClass}>Hero Aciklamasi</label>
          <textarea
            className={inputClass}
            value={heroDescription}
            onChange={(e) => setHeroDescription(e.target.value)}
            rows={3}
            required
          />
        </div>
        <div>
          <label className={labelClass}>Kart Aciklamasi</label>
          <textarea
            className={inputClass}
            value={cardDescription}
            onChange={(e) => setCardDescription(e.target.value)}
            rows={3}
            required
          />
        </div>
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={navigable}
            onChange={(e) => setNavigable(e.target.checked)}
            className="rounded"
          />
          <label className="text-sm text-gray-700">
            Navigable (gorunur etkinlik)
          </label>
        </div>
        <div>
          <label className={labelClass}>Kayit Linki</label>
          <input
            type="url"
            className={inputClass}
            value={registerLink}
            onChange={(e) => setRegisterLink(e.target.value)}
            required
          />
        </div>
        <div>
          <label className={labelClass}>Video URL</label>
          <input
            type="url"
            className={inputClass}
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          />
        </div>
        <div>
          <label className={labelClass}>Tarih</label>
          <input
            type="datetime-local"
            className={inputClass}
            value={date ? date.slice(0, 16) : ""}
            onChange={(e) => setDate(new Date(e.target.value).toISOString())}
            required
          />
        </div>
      </div>

      {/* Location */}
      <div className={sectionClass}>
        <h2 className="text-lg font-semibold">Konum</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Konum Adi</label>
            <input
              className={inputClass}
              value={locationName}
              onChange={(e) => setLocationName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className={labelClass}>Alt Metin</label>
            <input
              className={inputClass}
              value={locationSubtext}
              onChange={(e) => setLocationSubtext(e.target.value)}
              required
            />
          </div>
          <div>
            <label className={labelClass}>Enlem</label>
            <input
              type="number"
              step="any"
              className={inputClass}
              value={locationLat}
              onChange={(e) => setLocationLat(e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Boylam</label>
            <input
              type="number"
              step="any"
              className={inputClass}
              value={locationLng}
              onChange={(e) => setLocationLng(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Speakers */}
      <div className={sectionClass}>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Konusmacilar</h2>
          <button
            type="button"
            onClick={() =>
              setSpeakers([
                ...speakers,
                {
                  fullName: "",
                  title: "",
                  company: "",
                  instagram: "",
                  linkedin: "",
                  twitter: "",
                },
              ])
            }
            className="text-sm text-gray-600 hover:text-gray-900 px-3 py-1 border border-gray-200 rounded-lg"
          >
            + Ekle
          </button>
        </div>
        {speakers.map((speaker, i) => (
          <div
            key={i}
            className="border border-gray-100 rounded-lg p-4 space-y-3"
          >
            <div className="flex justify-between items-start">
              <span className="text-sm font-medium text-gray-500">
                #{i + 1}
              </span>
              <button
                type="button"
                onClick={() => setSpeakers(speakers.filter((_, j) => j !== i))}
                className="text-red-500 text-sm hover:text-red-700"
              >
                Kaldir
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelClass}>Ad Soyad</label>
                <input
                  className={inputClass}
                  value={speaker.fullName}
                  onChange={(e) => updateSpeaker(i, "fullName", e.target.value)}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Unvan</label>
                <input
                  className={inputClass}
                  value={speaker.title}
                  onChange={(e) => updateSpeaker(i, "title", e.target.value)}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Sirket</label>
                <input
                  className={inputClass}
                  value={speaker.company}
                  onChange={(e) => updateSpeaker(i, "company", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>LinkedIn</label>
                <input
                  className={inputClass}
                  value={speaker.linkedin}
                  onChange={(e) => updateSpeaker(i, "linkedin", e.target.value)}
                />
              </div>
            </div>
            {speaker.fullName && (
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400">
                  Gorsel: {slugify(speaker.fullName)}.webp
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setCropConfig({
                      aspectRatio: 1,
                      outputWidth: 400,
                      outputHeight: 400,
                      uploadPath: `${eventSlug}/speakers/${slugify(speaker.fullName)}.webp`,
                      onCropped: () => {},
                    })
                  }
                  className="text-xs text-blue-600 hover:text-blue-800"
                >
                  Gorsel Yukle
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Organizers */}
      <div className={sectionClass}>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Organizatorler</h2>
          <button
            type="button"
            onClick={() =>
              setOrganizers([
                ...organizers,
                { name: "", designation: "", image: "" },
              ])
            }
            className="text-sm text-gray-600 hover:text-gray-900 px-3 py-1 border border-gray-200 rounded-lg"
          >
            + Ekle
          </button>
        </div>
        {organizers.map((org, i) => (
          <div
            key={i}
            className="border border-gray-100 rounded-lg p-4 space-y-3"
          >
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-500">
                #{i + 1}
              </span>
              <button
                type="button"
                onClick={() =>
                  setOrganizers(organizers.filter((_, j) => j !== i))
                }
                className="text-red-500 text-sm hover:text-red-700"
              >
                Kaldir
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className={labelClass}>Ad</label>
                <input
                  className={inputClass}
                  value={org.name}
                  onChange={(e) => updateOrganizer(i, "name", e.target.value)}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Gorev</label>
                <input
                  className={inputClass}
                  value={org.designation}
                  onChange={(e) =>
                    updateOrganizer(i, "designation", e.target.value)
                  }
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Gorsel URL</label>
                <input
                  className={inputClass}
                  value={org.image}
                  onChange={(e) => updateOrganizer(i, "image", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sessions */}
      <div className={sectionClass}>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Oturumlar</h2>
          <button
            type="button"
            onClick={() =>
              setSessions([
                ...sessions,
                {
                  room: "Ana Salon",
                  speakerName: "",
                  topic: "",
                  startTime: "",
                  endTime: "",
                },
              ])
            }
            className="text-sm text-gray-600 hover:text-gray-900 px-3 py-1 border border-gray-200 rounded-lg"
          >
            + Ekle
          </button>
        </div>
        {sessions.map((session, i) => (
          <div
            key={i}
            className="border border-gray-100 rounded-lg p-4 space-y-3"
          >
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-500">
                #{i + 1}
              </span>
              <button
                type="button"
                onClick={() => setSessions(sessions.filter((_, j) => j !== i))}
                className="text-red-500 text-sm hover:text-red-700"
              >
                Kaldir
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelClass}>Salon</label>
                <input
                  className={inputClass}
                  value={session.room}
                  onChange={(e) => updateSession(i, "room", e.target.value)}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Konusmaci</label>
                <input
                  className={inputClass}
                  value={session.speakerName}
                  onChange={(e) =>
                    updateSession(i, "speakerName", e.target.value)
                  }
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Konu</label>
                <input
                  className={inputClass}
                  value={session.topic}
                  onChange={(e) => updateSession(i, "topic", e.target.value)}
                  disabled={session.room === "Network"}
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className={labelClass}>Baslangic</label>
                  <input
                    className={inputClass}
                    value={session.startTime}
                    onChange={(e) =>
                      updateSession(i, "startTime", e.target.value)
                    }
                    placeholder="13.00"
                    disabled={session.room === "Network"}
                  />
                </div>
                <div>
                  <label className={labelClass}>Bitis</label>
                  <input
                    className={inputClass}
                    value={session.endTime}
                    onChange={(e) =>
                      updateSession(i, "endTime", e.target.value)
                    }
                    placeholder="14.00"
                    disabled={session.room === "Network"}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sponsors */}
      <div className={sectionClass}>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Sponsorlar</h2>
          <button
            type="button"
            onClick={() =>
              setSponsors([...sponsors, { tier: "", sponsorSlug: "" }])
            }
            className="text-sm text-gray-600 hover:text-gray-900 px-3 py-1 border border-gray-200 rounded-lg"
          >
            + Ekle
          </button>
        </div>
        {sponsors.map((sponsor, i) => (
          <div
            key={i}
            className="border border-gray-100 rounded-lg p-4 space-y-3"
          >
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-500">
                #{i + 1}
              </span>
              <button
                type="button"
                onClick={() => setSponsors(sponsors.filter((_, j) => j !== i))}
                className="text-red-500 text-sm hover:text-red-700"
              >
                Kaldir
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelClass}>Slug</label>
                <input
                  className={inputClass}
                  value={sponsor.sponsorSlug}
                  onChange={(e) =>
                    updateSponsor(i, "sponsorSlug", e.target.value)
                  }
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Tier</label>
                <select
                  className={inputClass}
                  value={sponsor.tier}
                  onChange={(e) => updateSponsor(i, "tier", e.target.value)}
                >
                  <option value="">Tier yok</option>
                  <option value="platin">Platin</option>
                  <option value="altin">Altin</option>
                  <option value="gumus">Gumus</option>
                  <option value="bronz">Bronz</option>
                </select>
              </div>
            </div>
            {sponsor.sponsorSlug && (
              <button
                type="button"
                onClick={() =>
                  setCropConfig({
                    aspectRatio: 2.5,
                    outputWidth: 500,
                    outputHeight: 200,
                    uploadPath: `${eventSlug}/sponsors/${sponsor.sponsorSlug}.webp`,
                    onCropped: () => {},
                  })
                }
                className="text-xs text-blue-600 hover:text-blue-800"
              >
                Logo Yukle
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Tickets */}
      <div className={sectionClass}>
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold">Biletler</h2>
          <input
            type="checkbox"
            checked={hasTickets}
            onChange={(e) => setHasTickets(e.target.checked)}
            className="rounded"
          />
        </div>
        {hasTickets && (
          <>
            <button
              type="button"
              onClick={() =>
                setTickets([
                  ...tickets,
                  {
                    type: "",
                    description: "",
                    price: 0,
                    link: "",
                    perks: [],
                  },
                ])
              }
              className="text-sm text-gray-600 hover:text-gray-900 px-3 py-1 border border-gray-200 rounded-lg"
            >
              + Bilet Ekle
            </button>
            {tickets.map((ticket, i) => (
              <div
                key={i}
                className="border border-gray-100 rounded-lg p-4 space-y-3"
              >
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-500">
                    Bilet #{i + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setTickets(tickets.filter((_, j) => j !== i))
                    }
                    className="text-red-500 text-sm hover:text-red-700"
                  >
                    Kaldir
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>Tip</label>
                    <input
                      className={inputClass}
                      value={ticket.type}
                      onChange={(e) => updateTicket(i, "type", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Fiyat (TRY)</label>
                    <input
                      type="number"
                      className={inputClass}
                      value={ticket.price}
                      onChange={(e) =>
                        updateTicket(i, "price", parseFloat(e.target.value))
                      }
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Aciklama</label>
                  <textarea
                    className={inputClass}
                    value={ticket.description}
                    onChange={(e) =>
                      updateTicket(i, "description", e.target.value)
                    }
                    rows={2}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>Link</label>
                  <input
                    type="url"
                    className={inputClass}
                    value={ticket.link}
                    onChange={(e) => updateTicket(i, "link", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>Avantajlar</label>
                  {ticket.perks.map((perk, pi) => (
                    <div key={pi} className="flex gap-2 mb-2">
                      <input
                        className={inputClass}
                        value={perk}
                        onChange={(e) => {
                          const newPerks = [...ticket.perks];
                          newPerks[pi] = e.target.value;
                          updateTicket(i, "perks", newPerks);
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const newPerks = ticket.perks.filter(
                            (_, j) => j !== pi,
                          );
                          updateTicket(i, "perks", newPerks);
                        }}
                        className="text-red-500 text-sm shrink-0"
                      >
                        X
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() =>
                      updateTicket(i, "perks", [...ticket.perks, ""])
                    }
                    className="text-xs text-gray-500 hover:text-gray-700"
                  >
                    + Avantaj Ekle
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Metrics */}
      <div className={sectionClass}>
        <h2 className="text-lg font-semibold">Metrikler</h2>
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-600">
            Baslangic Metrikleri (maks 3)
          </h3>
          {initialMetrics.map((metric, i) => (
            <div key={i} className="flex gap-3 items-end">
              <div className="flex-1">
                <label className={labelClass}>Baslik</label>
                <input
                  className={inputClass}
                  value={metric.title}
                  onChange={(e) => {
                    const updated = [...initialMetrics];
                    updated[i] = { ...updated[i], title: e.target.value };
                    setInitialMetrics(updated);
                  }}
                  required
                />
              </div>
              <div className="w-32">
                <label className={labelClass}>Deger</label>
                <input
                  type="number"
                  className={inputClass}
                  value={metric.value}
                  onChange={(e) => {
                    const updated = [...initialMetrics];
                    updated[i] = {
                      ...updated[i],
                      value: parseInt(e.target.value),
                    };
                    setInitialMetrics(updated);
                  }}
                  required
                />
              </div>
              {initialMetrics.length > 1 && (
                <button
                  type="button"
                  onClick={() =>
                    setInitialMetrics(initialMetrics.filter((_, j) => j !== i))
                  }
                  className="text-red-500 text-sm pb-2"
                >
                  X
                </button>
              )}
            </div>
          ))}
          {initialMetrics.length < 3 && (
            <button
              type="button"
              onClick={() =>
                setInitialMetrics([...initialMetrics, { title: "", value: 0 }])
              }
              className="text-sm text-gray-600 hover:text-gray-900 px-3 py-1 border border-gray-200 rounded-lg"
            >
              + Metrik Ekle
            </button>
          )}
        </div>

        <div className="border-t border-gray-100 pt-4 mt-4">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-sm font-medium text-gray-600">
              Sonras Metrikleri
            </h3>
            <input
              type="checkbox"
              checked={hasAfterMetrics}
              onChange={(e) => setHasAfterMetrics(e.target.checked)}
              className="rounded"
            />
          </div>
          {hasAfterMetrics && (
            <div className="grid grid-cols-2 gap-3">
              {(Object.keys(afterMetrics) as (keyof AfterMetricsForm)[]).map(
                (field) => (
                  <div key={field}>
                    <label className={labelClass}>{field}</label>
                    <input
                      className={inputClass}
                      value={afterMetrics[field]}
                      onChange={(e) =>
                        setAfterMetrics({
                          ...afterMetrics,
                          [field]: e.target.value,
                        })
                      }
                    />
                  </div>
                ),
              )}
            </div>
          )}
        </div>
      </div>

      {/* Colors */}
      <div className={sectionClass}>
        <h2 className="text-lg font-semibold">Renkler (HSL)</h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              label: "Primary",
              value: colorPrimary,
              setter: setColorPrimary,
            },
            {
              label: "Secondary",
              value: colorSecondary,
              setter: setColorSecondary,
            },
            { label: "Accent", value: colorAccent, setter: setColorAccent },
            {
              label: "Background",
              value: colorBackground,
              setter: setColorBackground,
            },
            { label: "Text", value: colorText, setter: setColorText },
          ].map(({ label, value, setter }) => (
            <div key={label} className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded border border-gray-200 shrink-0"
                style={{ backgroundColor: `hsl(${value})` }}
              />
              <div className="flex-1">
                <label className={labelClass}>{label}</label>
                <input
                  className={inputClass}
                  value={value}
                  onChange={(e) => setter(e.target.value)}
                  placeholder="210 40% 98%"
                  required
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Submit */}
      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={saving}
          className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 disabled:opacity-50 transition-colors"
        >
          {saving ? "Kaydediliyor..." : initialData ? "Guncelle" : "Olustur"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/dashboard")}
          className="text-gray-600 hover:text-gray-900 px-4 py-3"
        >
          Iptal
        </button>
      </div>

      {/* Image Crop Dialog */}
      {cropConfig && (
        <ImageCropDialog
          open={!!cropConfig}
          onClose={() => setCropConfig(null)}
          onCropped={cropConfig.onCropped}
          aspectRatio={cropConfig.aspectRatio}
          outputWidth={cropConfig.outputWidth}
          outputHeight={cropConfig.outputHeight}
          uploadPath={cropConfig.uploadPath}
        />
      )}
    </form>
  );
}

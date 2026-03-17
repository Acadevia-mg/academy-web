import { NextResponse } from "next/server";
import { validateAdminSession } from "@/lib/admin-auth";
import { getDb } from "@/db/index";
import * as schema from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const valid = await validateAdminSession(request);
  if (!valid) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const eventId = parseInt(id);
  const db = await getDb();

  const event = await db
    .select()
    .from(schema.events)
    .where(eq(schema.events.id, eventId))
    .limit(1);

  if (!event[0]) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(event[0]);
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const valid = await validateAdminSession(request);
  if (!valid) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const eventId = parseInt(id);
  const body = await request.json();
  const db = await getDb();

  // Update event
  await db
    .update(schema.events)
    .set({
      navigable: body.navigable ?? true,
      name: body.name,
      heroDescription: body.heroDescription,
      cardDescription: body.cardDescription,
      registerLink: body.registerLink,
      videoUrl: body.videoUrl || null,
      date: body.date,
      locationName: body.location.name,
      locationSubtext: body.location.subtext,
      locationLatitude: body.location.latitude || null,
      locationLongitude: body.location.longitude || null,
      colorPrimary: body.colorPalette.primary,
      colorSecondary: body.colorPalette.secondary,
      colorAccent: body.colorPalette.accent,
      colorBackground: body.colorPalette.background,
      colorText: body.colorPalette.text,
    })
    .where(eq(schema.events.id, eventId));

  // Delete-and-reinsert child rows
  await Promise.all([
    db.delete(schema.speakers).where(eq(schema.speakers.eventId, eventId)),
    db.delete(schema.organizers).where(eq(schema.organizers.eventId, eventId)),
    db.delete(schema.sessions).where(eq(schema.sessions.eventId, eventId)),
    db.delete(schema.sponsors).where(eq(schema.sponsors.eventId, eventId)),
    db.delete(schema.tickets).where(eq(schema.tickets.eventId, eventId)),
    db
      .delete(schema.eventImages)
      .where(eq(schema.eventImages.eventId, eventId)),
    db
      .delete(schema.initialMetrics)
      .where(eq(schema.initialMetrics.eventId, eventId)),
    db
      .delete(schema.afterMetrics)
      .where(eq(schema.afterMetrics.eventId, eventId)),
  ]);

  // Re-insert child rows (same logic as POST)
  if (body.speakers?.length) {
    await db.insert(schema.speakers).values(
      body.speakers.map((s: any, i: number) => ({
        eventId,
        fullName: s.fullName,
        title: s.title,
        company: s.company || null,
        instagram: s.instagram || null,
        linkedin: s.linkedin || null,
        twitter: s.twitter || null,
        sortOrder: i,
      })),
    );
  }

  if (body.organizers?.length) {
    await db.insert(schema.organizers).values(
      body.organizers.map((o: any, i: number) => ({
        eventId,
        name: o.name,
        designation: o.designation,
        image: o.image,
        sortOrder: i,
      })),
    );
  }

  if (body.sessions?.length) {
    await db.insert(schema.sessions).values(
      body.sessions.map((s: any, i: number) => ({
        eventId,
        room: s.room,
        speakerName: s.speakerName,
        topic: s.topic || null,
        startTime: s.startTime || null,
        endTime: s.endTime || null,
        sortOrder: i,
      })),
    );
  }

  if (body.sponsors?.length) {
    await db.insert(schema.sponsors).values(
      body.sponsors.map((s: any, i: number) => ({
        eventId,
        tier: s.tier,
        sponsorSlug: s.sponsorSlug,
        sortOrder: i,
      })),
    );
  }

  if (body.tickets?.length) {
    await db.insert(schema.tickets).values(
      body.tickets.map((t: any, i: number) => ({
        eventId,
        type: t.type,
        description: t.description,
        price: t.price,
        link: t.link,
        perks: JSON.stringify(t.perks),
        sortOrder: i,
      })),
    );
  }

  if (body.images?.length) {
    await db.insert(schema.eventImages).values(
      body.images.map((url: string, i: number) => ({
        eventId,
        url,
        sortOrder: i,
      })),
    );
  }

  if (body.initialMetrics?.length) {
    await db.insert(schema.initialMetrics).values(
      body.initialMetrics.map((m: any, i: number) => ({
        eventId,
        title: m.title,
        value: m.value,
        sortOrder: i,
      })),
    );
  }

  if (body.afterMetrics) {
    await db.insert(schema.afterMetrics).values({
      eventId,
      applications: body.afterMetrics.applications,
      vipGuests: body.afterMetrics.vipGuests,
      supporter: body.afterMetrics.supporter,
      speakers: body.afterMetrics.speakers,
      workingParticipant: body.afterMetrics.workingParticipant,
      jobSeeker: body.afterMetrics.jobSeeker,
      jobProvider: body.afterMetrics.jobProvider,
      satisfaction: body.afterMetrics.satisfaction,
    });
  }

  return NextResponse.json({ success: true });
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const valid = await validateAdminSession(request);
  if (!valid) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const eventId = parseInt(id);
  const db = await getDb();

  await db.delete(schema.events).where(eq(schema.events.id, eventId));

  return NextResponse.json({ success: true });
}

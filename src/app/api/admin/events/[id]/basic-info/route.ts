import { NextResponse } from "next/server";
import { validateAdminSession } from "@/lib/admin-auth";
import { getDb } from "@/db/index";
import * as schema from "@/db/schema";
import { eq } from "drizzle-orm";
import { basicInfoSchema } from "@/lib/validations/event";

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

  const parsed = basicInfoSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const db = await getDb();

  await db
    .update(schema.events)
    .set({
      name: data.name,
      heroDescription: data.heroDescription,
      cardDescription: data.cardDescription,
      navigable: data.navigable,
      registerLink: data.registerLink,
      videoUrl: data.videoUrl || null,
      date: data.date,
      locationName: data.location.name,
      locationSubtext: data.location.subtext,
      locationLatitude: data.location.latitude
        ? Number(data.location.latitude)
        : null,
      locationLongitude: data.location.longitude
        ? Number(data.location.longitude)
        : null,
      colorPrimary: data.colorPalette.primary,
      colorSecondary: data.colorPalette.secondary,
      colorAccent: data.colorPalette.accent,
      colorBackground: data.colorPalette.background,
      colorText: data.colorPalette.text,
    })
    .where(eq(schema.events.id, eventId));

  return NextResponse.json({ success: true });
}

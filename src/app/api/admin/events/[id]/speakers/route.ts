import { NextResponse } from "next/server";
import { validateAdminSession } from "@/lib/admin-auth";
import { getDb } from "@/db/index";
import * as schema from "@/db/schema";
import { eq } from "drizzle-orm";
import { speakersFormSchema } from "@/lib/validations/speakers";

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

  const parsed = speakersFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const db = await getDb();

  // Delete and reinsert speakers
  await db.delete(schema.speakers).where(eq(schema.speakers.eventId, eventId));
  if (data.speakers.length > 0) {
    await db.insert(schema.speakers).values(
      data.speakers.map((s, i) => ({
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

  // Delete and reinsert organizers
  await db
    .delete(schema.organizers)
    .where(eq(schema.organizers.eventId, eventId));
  if (data.organizers.length > 0) {
    await db.insert(schema.organizers).values(
      data.organizers.map((o, i) => ({
        eventId,
        name: o.name,
        designation: o.designation,
        image: o.image,
        sortOrder: i,
      })),
    );
  }

  return NextResponse.json({ success: true });
}

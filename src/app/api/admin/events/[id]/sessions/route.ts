import { NextResponse } from "next/server";
import { validateAdminSession } from "@/lib/admin-auth";
import { getDb } from "@/db/index";
import * as schema from "@/db/schema";
import { eq } from "drizzle-orm";
import { sessionsFormSchema } from "@/lib/validations/sessions";

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

  const parsed = sessionsFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const db = await getDb();

  await db.delete(schema.sessions).where(eq(schema.sessions.eventId, eventId));
  if (data.sessions.length > 0) {
    await db.insert(schema.sessions).values(
      data.sessions.map((s, i) => ({
        eventId,
        room: s.room,
        speakerName: s.speakerName,
        topic: s.topic || null,
        startTime: s.startTime || null,
        endTime: s.endTime || null,
        eventDate: s.eventDate || null,
        sortOrder: i,
      })),
    );
  }

  return NextResponse.json({ success: true });
}

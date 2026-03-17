import { NextResponse } from "next/server";
import { validateAdminSession } from "@/lib/admin-auth";
import { getDb } from "@/db/index";
import * as schema from "@/db/schema";
import { eq } from "drizzle-orm";
import { metricsFormSchema } from "@/lib/validations/metrics";

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

  const parsed = metricsFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const db = await getDb();

  // Initial metrics
  await db
    .delete(schema.initialMetrics)
    .where(eq(schema.initialMetrics.eventId, eventId));
  if (data.initialMetrics.length > 0) {
    await db.insert(schema.initialMetrics).values(
      data.initialMetrics.map((m, i) => ({
        eventId,
        title: m.title,
        value: m.value,
        sortOrder: i,
      })),
    );
  }

  // After metrics
  await db
    .delete(schema.afterMetrics)
    .where(eq(schema.afterMetrics.eventId, eventId));
  if (data.afterMetrics) {
    await db.insert(schema.afterMetrics).values({
      eventId,
      applications: data.afterMetrics.applications,
      vipGuests: data.afterMetrics.vipGuests,
      supporter: data.afterMetrics.supporter,
      speakers: data.afterMetrics.speakers,
      workingParticipant: data.afterMetrics.workingParticipant,
      jobSeeker: data.afterMetrics.jobSeeker,
      jobProvider: data.afterMetrics.jobProvider,
      satisfaction: data.afterMetrics.satisfaction,
    });
  }

  return NextResponse.json({ success: true });
}

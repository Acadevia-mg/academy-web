import { NextResponse } from "next/server";
import { validateAdminSession } from "@/lib/admin-auth";
import { getDb } from "@/db/index";
import * as schema from "@/db/schema";
import { eq } from "drizzle-orm";
import { sponsorsFormSchema } from "@/lib/validations/sponsors";

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

  const parsed = sponsorsFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const db = await getDb();

  await db.delete(schema.sponsors).where(eq(schema.sponsors.eventId, eventId));
  if (data.sponsors.length > 0) {
    await db.insert(schema.sponsors).values(
      data.sponsors.map((s, i) => ({
        eventId,
        tier: s.tier,
        sponsorSlug: s.sponsorSlug,
        sortOrder: i,
      })),
    );
  }

  return NextResponse.json({ success: true });
}

import { NextResponse } from "next/server";
import { validateAdminSession } from "@/lib/admin-auth";
import { getDb } from "@/db/index";
import * as schema from "@/db/schema";
import { eq } from "drizzle-orm";
import { ticketsFormSchema } from "@/lib/validations/tickets";

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

  const parsed = ticketsFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const db = await getDb();

  await db.delete(schema.tickets).where(eq(schema.tickets.eventId, eventId));
  if (data.tickets.length > 0) {
    await db.insert(schema.tickets).values(
      data.tickets.map((t, i) => ({
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

  return NextResponse.json({ success: true });
}

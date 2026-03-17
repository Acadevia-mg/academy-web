import { NextResponse } from "next/server";
import { validateAdminSession } from "@/lib/admin-auth";
import { getDb } from "@/db/index";
import * as schema from "@/db/schema";
import { eq } from "drizzle-orm";
import { colorPaletteSchema } from "@/lib/validations/event";
import { z } from "zod";

const colorsPayloadSchema = z.object({
  colorPalette: colorPaletteSchema,
});

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

  const parsed = colorsPayloadSchema.safeParse(body);
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
      colorPrimary: data.colorPalette.primary,
      colorSecondary: data.colorPalette.secondary,
      colorAccent: data.colorPalette.accent,
      colorBackground: data.colorPalette.background,
      colorText: data.colorPalette.text,
    })
    .where(eq(schema.events.id, eventId));

  return NextResponse.json({ success: true });
}

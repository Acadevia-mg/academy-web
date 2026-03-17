import { NextResponse } from "next/server";
import { validateAdminSession } from "@/lib/admin-auth";
import { getDb } from "@/db/index";
import * as schema from "@/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";

const imagesPayloadSchema = z.object({
  images: z.array(z.string().min(1)),
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

  const parsed = imagesPayloadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const db = await getDb();

  await db
    .delete(schema.eventImages)
    .where(eq(schema.eventImages.eventId, eventId));
  if (data.images.length > 0) {
    await db.insert(schema.eventImages).values(
      data.images.map((url, i) => ({
        eventId,
        url,
        sortOrder: i,
      })),
    );
  }

  return NextResponse.json({ success: true });
}

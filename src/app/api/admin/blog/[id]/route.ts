import { NextResponse } from "next/server";
import { validateAdminSession } from "@/lib/admin-auth";
import { getManagementEnvironment } from "@/lib/contentful";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const valid = await validateAdminSession(request);
  if (!valid) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    const env = await getManagementEnvironment();
    const entry = await env.getEntry(id);

    return NextResponse.json({
      id: entry.sys.id,
      title: entry.fields.title?.["en-US"] || "",
      slug: entry.fields.slug?.["en-US"] || "",
      writers: entry.fields.writers?.["en-US"] || [],
      description: entry.fields.description?.["en-US"] || "",
      body: entry.fields.body?.["en-US"] || null,
      createdAt: entry.sys.createdAt,
      updatedAt: entry.sys.updatedAt,
    });
  } catch (error) {
    console.error("Failed to fetch blog post:", error);
    return NextResponse.json(
      { error: "Failed to fetch post" },
      { status: 500 },
    );
  }
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

  try {
    const body = await request.json();
    const env = await getManagementEnvironment();
    const entry = await env.getEntry(id);

    entry.fields.title = { "en-US": body.title };
    entry.fields.slug = { "en-US": body.slug };
    entry.fields.writers = { "en-US": body.writers };
    entry.fields.description = { "en-US": body.description };
    entry.fields.body = { "en-US": body.body };

    const updated = await entry.update();
    await updated.publish();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to update blog post:", error);
    return NextResponse.json(
      { error: "Failed to update post" },
      { status: 500 },
    );
  }
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

  try {
    const env = await getManagementEnvironment();
    const entry = await env.getEntry(id);

    if (entry.isPublished()) {
      await entry.unpublish();
    }
    await entry.delete();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete blog post:", error);
    return NextResponse.json(
      { error: "Failed to delete post" },
      { status: 500 },
    );
  }
}

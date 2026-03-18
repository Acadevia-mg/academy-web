import { NextResponse } from "next/server";
import { validateAdminSession } from "@/lib/admin-auth";
import { getManagementEnvironment } from "@/lib/contentful";

export async function GET(request: Request) {
  const valid = await validateAdminSession(request);
  if (!valid) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const env = await getManagementEnvironment();
    const entries = await env.getEntries({
      content_type: "dmgBlog",
      "fields.type": "academy",
      order: "-sys.createdAt",
    });

    const posts = entries.items.map((item) => ({
      id: item.sys.id,
      title: item.fields.title?.["en-US"] || "",
      slug: item.fields.slug?.["en-US"] || "",
      writers: item.fields.writers?.["en-US"] || [],
      description: item.fields.description?.["en-US"] || "",
      body: item.fields.body?.["en-US"] || null,
      createdAt: item.sys.createdAt,
      updatedAt: item.sys.updatedAt,
    }));

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  const valid = await validateAdminSession(request);
  if (!valid) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const env = await getManagementEnvironment();

    const entry = await env.createEntry("dmgBlog", {
      fields: {
        title: { "en-US": body.title },
        type: { "en-US": "academy" },
        slug: { "en-US": body.slug },
        writers: { "en-US": body.writers },
        description: { "en-US": body.description },
        body: { "en-US": body.body },
      },
    });

    await entry.publish();

    return NextResponse.json({ id: entry.sys.id });
  } catch (error) {
    console.error("Failed to create blog post:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 },
    );
  }
}

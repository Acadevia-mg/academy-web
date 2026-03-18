import { NextResponse } from "next/server";
import { getDeliveryClient } from "@/lib/contentful";
import type { BlogFieldsSkeleton, BlogPost } from "@/types/blog";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  try {
    const client = getDeliveryClient();
    const entries = await client.getEntries<BlogFieldsSkeleton>({
      content_type: "dmgBlog",
      "fields.type": "academy",
      "fields.slug": slug,
      limit: 1,
    });

    if (entries.items.length === 0) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const item = entries.items[0];
    const post: BlogPost = {
      id: item.sys.id,
      title: item.fields.title as string,
      slug: item.fields.slug as string,
      writers: (item.fields.writers as string[]) || [],
      description: item.fields.description as string,
      body: item.fields.body as BlogPost["body"],
      createdAt: item.sys.createdAt,
      updatedAt: item.sys.updatedAt,
    };

    return NextResponse.json(post);
  } catch (error) {
    console.error("Failed to fetch blog post:", error);
    return NextResponse.json(
      { error: "Failed to fetch post" },
      { status: 500 },
    );
  }
}

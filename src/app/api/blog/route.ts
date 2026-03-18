import { NextResponse } from "next/server";
import { getDeliveryClient } from "@/lib/contentful";
import type { BlogFieldsSkeleton, BlogPost } from "@/types/blog";

export async function GET() {
  try {
    const client = getDeliveryClient();
    const entries = await client.getEntries<BlogFieldsSkeleton>({
      content_type: "dmgBlog",
      "fields.type": "academy",
      order: ["-sys.createdAt"],
    });

    const posts: BlogPost[] = entries.items.map((item) => ({
      id: item.sys.id,
      title: item.fields.title as string,
      slug: item.fields.slug as string,
      writers: (item.fields.writers as string[]) || [],
      description: item.fields.description as string,
      body: item.fields.body as BlogPost["body"],
      createdAt: item.sys.createdAt,
      updatedAt: item.sys.updatedAt,
    }));

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return NextResponse.json([], { status: 200 });
  }
}

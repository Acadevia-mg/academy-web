import { NextResponse } from "next/server";
import { validateAdminSession } from "@/lib/admin-auth";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function POST(request: Request) {
  const valid = await validateAdminSession(request);
  if (!valid) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file") as Blob | null;
  const path = formData.get("path") as string | null;

  if (!file || !path) {
    return NextResponse.json(
      { error: "File and path are required" },
      { status: 400 },
    );
  }

  // Validate path format: 2 or 3 segments (e.g. "slug/banner.webp" or "slug/speakers/name.webp")
  if (!/^[\w-]+(\/[\w.-]+){1,2}$/.test(path)) {
    return NextResponse.json({ error: "Invalid path format" }, { status: 400 });
  }

  // Validate file size (max 5MB)
  if (file.size > 5 * 1024 * 1024) {
    return NextResponse.json(
      { error: "File too large (max 5MB)" },
      { status: 400 },
    );
  }

  const { env } = await getCloudflareContext();
  const bucket = (env as any).ASSETS_BUCKET;

  await bucket.put(path, await file.arrayBuffer(), {
    httpMetadata: { contentType: file.type },
  });

  const r2Url = process.env.NEXT_PUBLIC_R2_URL || "";
  const publicUrl = r2Url ? `${r2Url}/${path}` : `/${path}`;

  return NextResponse.json({ url: publicUrl });
}

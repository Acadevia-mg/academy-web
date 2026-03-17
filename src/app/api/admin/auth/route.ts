import { NextResponse } from "next/server";
import { createAdminSession, validateAdminSession } from "@/lib/admin-auth";

export async function POST(request: Request) {
  const body = await request.json();
  const { key } = body;

  if (!key || key !== process.env.ADMIN_SECRET_KEY) {
    return NextResponse.json({ error: "Invalid key" }, { status: 401 });
  }

  const sessionToken = await createAdminSession();
  const isProduction = process.env.NODE_ENV === "production";

  const response = NextResponse.json({ success: true });
  response.cookies.set("admin_session", sessionToken, {
    httpOnly: true,
    secure: isProduction,
    sameSite: "strict",
    maxAge: 24 * 60 * 60,
    path: "/",
  });

  return response;
}

export async function GET(request: Request) {
  const valid = await validateAdminSession(request);
  if (!valid) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json({ authenticated: true });
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.set("admin_session", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 0,
    path: "/",
  });
  return response;
}

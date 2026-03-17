import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function parseCookies(cookieHeader: string): Record<string, string> {
  const cookies: Record<string, string> = {};
  cookieHeader.split(";").forEach((cookie) => {
    const [name, ...rest] = cookie.trim().split("=");
    if (name) cookies[name] = rest.join("=");
  });
  return cookies;
}

function bufferToHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function isValidSession(
  cookie: string,
  secretKey: string,
): Promise<boolean> {
  try {
    const decoded = atob(cookie);
    const colonIndex = decoded.indexOf(":");
    if (colonIndex === -1) return false;

    const timestamp = decoded.substring(0, colonIndex);
    const signature = decoded.substring(colonIndex + 1);

    const age = Date.now() - parseInt(timestamp);
    if (age > 24 * 60 * 60 * 1000) return false;

    const key = await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(secretKey),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"],
    );
    const expected = await crypto.subtle.sign(
      "HMAC",
      key,
      new TextEncoder().encode(timestamp),
    );

    return signature === bufferToHex(expected);
  } catch {
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect /admin/dashboard/* routes
  if (!pathname.startsWith("/admin/dashboard")) {
    return NextResponse.next();
  }

  const cookieHeader = request.headers.get("cookie") || "";
  const cookies = parseCookies(cookieHeader);
  const sessionCookie = cookies["admin_session"];

  const secretKey = process.env.ADMIN_SECRET_KEY;
  if (!secretKey || !sessionCookie) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  const valid = await isValidSession(sessionCookie, secretKey);
  if (!valid) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};

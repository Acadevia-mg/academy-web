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

export async function createAdminSession(): Promise<string> {
  const timestamp = Date.now().toString();
  const secretKey = process.env.ADMIN_SECRET_KEY;
  if (!secretKey) throw new Error("ADMIN_SECRET_KEY not configured");

  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secretKey),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(timestamp),
  );

  return btoa(`${timestamp}:${bufferToHex(signature)}`);
}

export async function validateAdminSession(request: Request): Promise<boolean> {
  const cookie = parseCookies(request.headers.get("cookie") || "")[
    "admin_session"
  ];
  if (!cookie) return false;

  try {
    const decoded = atob(cookie);
    const colonIndex = decoded.indexOf(":");
    if (colonIndex === -1) return false;

    const timestamp = decoded.substring(0, colonIndex);
    const signature = decoded.substring(colonIndex + 1);

    const age = Date.now() - parseInt(timestamp);
    if (age > 24 * 60 * 60 * 1000) return false;

    const secretKey = process.env.ADMIN_SECRET_KEY;
    if (!secretKey) return false;

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

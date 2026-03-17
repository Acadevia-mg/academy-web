/**
 * Upload script for R2 bucket.
 *
 * Reads the events data and uploads local images to R2 in per-event directory structure.
 * Run with: npm run r2:upload
 *
 * Prerequisites:
 *   - wrangler must be authenticated
 *   - R2 bucket 'academy-assets' must exist
 *
 * Usage:
 *   tsx scripts/upload-r2.ts [--remote]
 *
 * Without --remote, uses local R2 emulator.
 */

import { execSync } from "child_process";
import { existsSync } from "fs";
import { join } from "path";

function slugify(text: string): string {
  const trMap: Record<string, string> = {
    ç: "c",
    ğ: "g",
    ı: "i",
    ö: "o",
    ş: "s",
    ü: "u",
    Ç: "C",
    Ğ: "G",
    İ: "I",
    Ö: "O",
    Ş: "S",
    Ü: "U",
  };

  return text
    .split("")
    .map((char) => trMap[char] || char)
    .join("")
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/--+/g, "-");
}

function upload(localPath: string, r2Key: string, remote: boolean) {
  if (!existsSync(localPath)) {
    console.warn(`  SKIP (not found): ${localPath}`);
    return;
  }

  const remoteFlag = remote ? "--remote" : "--local";
  const cmd = `wrangler r2 object put academy-assets/${r2Key} --file="${localPath}" ${remoteFlag}`;
  try {
    execSync(cmd, { stdio: "pipe" });
    console.log(`  OK: ${r2Key}`);
  } catch (e: any) {
    console.error(`  FAIL: ${r2Key} - ${e.message}`);
  }
}

async function main() {
  const remote = process.argv.includes("--remote");
  console.log(`Uploading to ${remote ? "REMOTE" : "LOCAL"} R2...`);

  const { default: events } = await import("../src/data/events");

  const publicDir = join(process.cwd(), "public");

  for (const event of events) {
    const eventSlug = slugify(event.name);
    console.log(`\nEvent: ${event.name} → ${eventSlug}/`);

    // Speakers
    for (const speaker of event.speakers) {
      const filename = `${slugify(speaker.fullName)}.webp`;
      upload(
        join(publicDir, "images/speakers", filename),
        `${eventSlug}/speakers/${filename}`,
        remote,
      );
    }

    // Sponsors
    for (const sponsor of event.sponsors) {
      const filename = `${sponsor.sponsorSlug}.webp`;
      upload(
        join(publicDir, "images/sponsors", filename),
        `${eventSlug}/sponsors/${filename}`,
        remote,
      );
    }

    // Organizers
    for (const org of event.organizers) {
      // Extract filename from image path like "/images/organizers/serkan-alc.webp"
      const filename = org.image.split("/").pop()!;
      upload(
        join(publicDir, "images/organizers", filename),
        `${eventSlug}/organizers/${filename}`,
        remote,
      );
    }

    // Banner
    upload(
      join(publicDir, `images/banners/${eventSlug}.webp`),
      `${eventSlug}/banner.webp`,
      remote,
    );

    // Mockup
    upload(
      join(publicDir, `images/mockups/${eventSlug}.webp`),
      `${eventSlug}/mockup.webp`,
      remote,
    );

    // Gallery images
    event.images.forEach((img, i) => {
      const filename = img.split("/").pop()!;
      upload(
        join(publicDir, img.startsWith("/") ? img.slice(1) : img),
        `${eventSlug}/gallery/${i + 1}.webp`,
        remote,
      );
    });
  }

  // Shared logos
  console.log("\nShared logos:");
  const logos = [
    "dmg-logo.webp",
    "logo-small-white.webp",
    "logo-small.webp",
    "logo-wide-dark.webp",
  ];
  for (const logo of logos) {
    upload(join(publicDir, "images/logo", logo), `shared/logo/${logo}`, remote);
  }

  // Reserved mockup (shared)
  upload(
    join(publicDir, "images/mockups/reserved.webp"),
    "shared/mockups/reserved.webp",
    remote,
  );

  console.log("\nDone!");
}

main().catch(console.error);

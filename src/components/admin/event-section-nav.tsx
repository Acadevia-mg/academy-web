"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sections = [
  { href: "", label: "Basic Info" },
  { href: "/speakers", label: "Speakers" },
  { href: "/sessions", label: "Sessions" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/tickets", label: "Tickets" },
  { href: "/metrics", label: "Metrics" },
  { href: "/colors", label: "Colors" },
  { href: "/images", label: "Images" },
];

export function EventSectionNav({ eventId }: { eventId: string }) {
  const pathname = usePathname();
  const basePath = `/admin/dashboard/events/${eventId}`;

  return (
    <nav className="flex gap-1 border-b border-gray-200 bg-white px-6 overflow-x-auto">
      {sections.map((section) => {
        const fullPath = `${basePath}${section.href}`;
        const isActive =
          section.href === "" ? pathname === basePath : pathname === fullPath;

        return (
          <Link
            key={section.href}
            href={fullPath}
            prefetch={false}
            className={cn(
              "px-4 py-2.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors -mb-px",
              isActive
                ? "border-gray-900 text-gray-900"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
            )}
          >
            {section.label}
          </Link>
        );
      })}
    </nav>
  );
}

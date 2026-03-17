"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin");
  };

  const navItems = [
    { href: "/admin/dashboard", label: "Etkinlikler", icon: "list" },
    {
      href: "/admin/dashboard/announcement",
      label: "Duyuru",
      icon: "megaphone",
    },
  ];

  return (
    <aside className="w-60 bg-white border-r border-gray-200 min-h-screen flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-lg font-bold text-gray-900">DMG Admin</h1>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className="w-full px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors text-left"
        >
          Cikis
        </button>
      </div>
    </aside>
  );
}

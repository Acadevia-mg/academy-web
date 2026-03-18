"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UnsavedChangesDialog } from "./unsaved-changes-dialog";
import { useState } from "react";

export function AdminHeader({
  hasUnsavedChanges = false,
  onSave,
}: {
  hasUnsavedChanges?: boolean;
  onSave?: () => Promise<void>;
}) {
  const router = useRouter();
  const [showUnsavedDialog, setShowUnsavedDialog] = useState(false);
  const [pendingHref, setPendingHref] = useState<string | null>(null);

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin");
  };

  const handleNavigation = (href: string) => {
    if (hasUnsavedChanges) {
      setPendingHref(href);
      setShowUnsavedDialog(true);
    } else {
      if (href === "logout") {
        handleLogout();
      } else {
        router.push(href);
      }
    }
  };

  const handleDiscard = () => {
    setShowUnsavedDialog(false);
    if (pendingHref === "logout") {
      handleLogout();
    } else if (pendingHref) {
      router.push(pendingHref);
    }
  };

  const handleSave = async () => {
    if (onSave) {
      await onSave();
    }
    setShowUnsavedDialog(false);
    if (pendingHref === "logout") {
      handleLogout();
    } else if (pendingHref) {
      router.push(pendingHref);
    }
  };

  return (
    <>
      <header className="h-14 border-b border-gray-200 bg-white flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleNavigation("/")}
            className="text-lg font-bold text-gray-900 hover:text-gray-600 transition-colors"
          >
            DMG Admin
          </button>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/admin/dashboard"
            className="text-sm text-gray-600 hover:text-gray-900 px-3 py-1.5 rounded-md hover:bg-gray-100 transition-colors"
          >
            Events
          </Link>
          <Link
            href="/admin/dashboard/blog"
            className="text-sm text-gray-600 hover:text-gray-900 px-3 py-1.5 rounded-md hover:bg-gray-100 transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/admin/dashboard/announcement"
            className="text-sm text-gray-600 hover:text-gray-900 px-3 py-1.5 rounded-md hover:bg-gray-100 transition-colors"
          >
            Announcement
          </Link>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleNavigation("logout")}
            className="text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <LogOut className="h-4 w-4 mr-1" />
            Logout
          </Button>
        </div>
      </header>

      <UnsavedChangesDialog
        open={showUnsavedDialog}
        onClose={() => setShowUnsavedDialog(false)}
        onDiscard={handleDiscard}
        onSave={handleSave}
      />
    </>
  );
}

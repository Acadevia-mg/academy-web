import { AuthGuard } from "@/components/admin/auth-guard";
import { AdminHeader } from "@/components/admin/admin-header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50">
        <AdminHeader />
        <main className="p-6 max-w-7xl mx-auto">{children}</main>
      </div>
    </AuthGuard>
  );
}

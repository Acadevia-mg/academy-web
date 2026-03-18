"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BlogForm } from "@/components/admin/blog/blog-form";
import { useToast } from "@/hooks/use-toast";
import type { BlogFormData } from "@/lib/validations/blog";

export default function NewBlogPostPage() {
  const [saving, setSaving] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (data: BlogFormData) => {
    setSaving(true);
    try {
      const res = await fetch("/api/admin/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to create");
      toast({ title: "Created", description: "Blog post created." });
      router.push("/admin/dashboard/blog");
    } catch {
      toast({
        title: "Error",
        description: "Failed to create post.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">New Blog Post</h1>
      <BlogForm onSubmit={handleSubmit} saving={saving} submitLabel="Create" />
    </div>
  );
}

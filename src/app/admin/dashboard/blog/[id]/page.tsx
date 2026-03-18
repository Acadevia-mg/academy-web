"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { BlogForm } from "@/components/admin/blog/blog-form";
import { useToast } from "@/hooks/use-toast";
import type { BlogFormData } from "@/lib/validations/blog";
import type { BlogPost } from "@/types/blog";

export default function EditBlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const [saving, setSaving] = useState(false);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    fetch(`/api/admin/blog/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => setPost(data))
      .catch(() =>
        toast({
          title: "Error",
          description: "Failed to load post.",
          variant: "destructive",
        }),
      )
      .finally(() => setLoading(false));
  }, [id, toast]);

  const handleSubmit = async (data: BlogFormData) => {
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/blog/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to update");
      toast({ title: "Updated", description: "Blog post updated." });
      router.push("/admin/dashboard/blog");
    } catch {
      toast({
        title: "Error",
        description: "Failed to update post.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <p className="text-gray-500">Loading...</p>;
  }

  if (!post) {
    return <p className="text-gray-500">Post not found.</p>;
  }

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Blog Post</h1>
      <BlogForm
        defaultValues={{
          title: post.title,
          slug: post.slug,
          writers: post.writers,
          description: post.description,
          body: post.body,
        }}
        onSubmit={handleSubmit}
        saving={saving}
        submitLabel="Update"
      />
    </div>
  );
}

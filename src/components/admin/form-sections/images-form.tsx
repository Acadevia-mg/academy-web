"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2, Upload } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function ImagesForm({
  eventId,
  eventSlug,
  initialImages,
}: {
  eventId: string;
  eventSlug: string;
  initialImages?: string[];
}) {
  const [images, setImages] = useState<string[]>(initialImages ?? []);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("path", `${eventSlug}/gallery/${images.length}.webp`);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");
      const data = await res.json();
      setImages((prev) => [...prev, data.url]);
    } catch {
      toast({
        title: "Error",
        description: "Failed to upload image.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/events/${eventId}/images`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ images }),
      });
      if (!res.ok) throw new Error("Failed to save");
      toast({ title: "Saved", description: "Images updated successfully." });
    } catch {
      toast({
        title: "Error",
        description: "Failed to save changes.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Event Images</h2>
        <div className="flex gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={uploading}
            asChild
          >
            <label className="cursor-pointer">
              <Upload className="h-4 w-4 mr-1" />
              {uploading ? "Uploading..." : "Upload Image"}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleUpload}
              />
            </label>
          </Button>
        </div>
      </div>

      {images.length === 0 && (
        <p className="text-sm text-gray-500 py-4 text-center">
          No images added yet.
        </p>
      )}

      <div className="grid grid-cols-3 gap-4">
        {images.map((url, index) => (
          <div
            key={index}
            className="relative border border-gray-200 rounded-lg overflow-hidden group"
          >
            <img
              src={url}
              alt={`Event image ${index + 1}`}
              className="w-full h-40 object-cover"
            />
            <Button
              type="button"
              variant="destructive"
              size="sm"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => removeImage(index)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
            <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded">
              {index + 1}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-700">
          Or add image URL manually:
        </p>
        <div className="flex gap-2">
          <Input
            id="manual-url"
            placeholder="https://..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                const input = e.currentTarget;
                if (input.value) {
                  setImages((prev) => [...prev, input.value]);
                  input.value = "";
                }
              }
            }}
          />
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              const input = document.getElementById(
                "manual-url",
              ) as HTMLInputElement;
              if (input?.value) {
                setImages((prev) => [...prev, input.value]);
                input.value = "";
              }
            }}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <Button onClick={handleSave} disabled={saving}>
          {saving ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </div>
  );
}

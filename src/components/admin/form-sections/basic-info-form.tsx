"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  basicInfoSchema,
  type BasicInfoFormData,
} from "@/lib/validations/event";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Upload, X } from "lucide-react";
import { slugify } from "@/lib/slugify";

export function BasicInfoForm({
  eventId,
  eventSlug,
  initialData,
}: {
  eventId: string;
  eventSlug?: string;
  initialData?: BasicInfoFormData;
}) {
  const [saving, setSaving] = useState(false);
  const [bannerUploading, setBannerUploading] = useState(false);
  const [bannerUrl, setBannerUrl] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<BasicInfoFormData>({
    resolver: zodResolver(basicInfoSchema),
    defaultValues: initialData ?? {
      name: "",
      heroDescription: "",
      cardDescription: "",
      navigable: true,
      registerLink: "",
      videoUrl: "",
      date: "",
      location: { name: "", subtext: "", latitude: "", longitude: "" },
      colorPalette: {
        primary: "",
        secondary: "",
        accent: "",
        background: "",
        text: "",
      },
    },
  });

  const watchedName = form.watch("name");
  const currentSlug = eventSlug || (watchedName ? slugify(watchedName) : "");
  const r2Base = process.env.NEXT_PUBLIC_R2_URL || "";
  const currentBannerSrc = currentSlug
    ? `${r2Base}/${currentSlug}/banner.webp`
    : "";

  const onSubmit = async (data: BasicInfoFormData) => {
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/events/${eventId}/basic-info`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to save");
      toast({
        title: "Saved",
        description: "Basic info updated successfully.",
      });
      form.reset(data);
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Basic Information</h2>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Web Developer Conference 2025"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="heroDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hero Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Hero section subtitle" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cardDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Card Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Card description for event listing"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date & Time</FormLabel>
                  <FormControl>
                    <Input type="datetime-local" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="registerLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Registration Link</FormLabel>
                  <FormControl>
                    <Input type="url" placeholder="https://..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="videoUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Video URL (optional)</FormLabel>
                  <FormControl>
                    <Input type="url" placeholder="https://..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="navigable"
              render={({ field }) => (
                <FormItem className="flex items-center gap-3 pt-8">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-0.5">
                    <FormLabel>Navigable</FormLabel>
                    <FormDescription>
                      If unchecked, event returns 404 on the public site
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Banner Image</h2>
          <p className="text-sm text-gray-500">
            Displayed on the event card. Uploaded to R2 as{" "}
            <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">
              {currentSlug}/banner.webp
            </code>
          </p>

          {(bannerUrl || currentBannerSrc) && (
            <div className="relative inline-block">
              <img
                src={bannerUrl || currentBannerSrc}
                alt="Banner preview"
                className="rounded-lg border border-gray-200 max-h-40 object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          )}

          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              disabled={bannerUploading || !currentSlug}
              asChild
            >
              <label className="cursor-pointer">
                <Upload className="h-4 w-4 mr-1" />
                {bannerUploading ? "Uploading..." : "Upload Banner"}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (!file || !currentSlug) return;
                    setBannerUploading(true);
                    try {
                      const formData = new FormData();
                      formData.append("file", file);
                      formData.append(
                        "path",
                        `${currentSlug}/banner.webp`,
                      );
                      const res = await fetch("/api/admin/upload", {
                        method: "POST",
                        body: formData,
                      });
                      if (!res.ok) throw new Error("Upload failed");
                      const data = await res.json();
                      setBannerUrl(data.url);
                      toast({
                        title: "Uploaded",
                        description: "Banner image uploaded successfully.",
                      });
                    } catch {
                      toast({
                        title: "Error",
                        description: "Failed to upload banner.",
                        variant: "destructive",
                      });
                    } finally {
                      setBannerUploading(false);
                      e.target.value = "";
                    }
                  }}
                />
              </label>
            </Button>
            {!currentSlug && (
              <p className="text-xs text-amber-600 self-center">
                Enter an event name first to enable upload.
              </p>
            )}
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Location</h2>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="location.name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Kadir Has Üniversitesi" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location.subtext"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location Subtext</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Cibali Kampüsü Etkinlik Alanı"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="location.latitude"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Latitude (optional)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="any"
                      placeholder="41.0234"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location.longitude"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Longitude (optional)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="any"
                      placeholder="28.9553"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Color Palette</h2>
          <p className="text-sm text-gray-500">
            HSL values (e.g., &quot;244.29 100% 97.25%&quot;)
          </p>

          <div className="grid grid-cols-2 gap-4">
            {(
              ["primary", "secondary", "accent", "background", "text"] as const
            ).map((color) => (
              <FormField
                key={color}
                control={form.control}
                name={`colorPalette.${color}`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">{color}</FormLabel>
                    <div className="flex gap-2">
                      <div
                        className="w-10 h-10 rounded border border-gray-200 shrink-0"
                        style={{
                          backgroundColor: field.value
                            ? `hsl(${field.value})`
                            : "transparent",
                        }}
                      />
                      <FormControl>
                        <Input placeholder="0 0% 100%" {...field} />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <Button type="submit" disabled={saving}>
            {saving ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

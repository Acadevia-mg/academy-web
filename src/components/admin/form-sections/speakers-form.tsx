"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  speakersFormSchema,
  type SpeakersFormData,
} from "@/lib/validations/speakers";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Plus, Trash2, Upload } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ImageCropDialog } from "@/components/admin/image-crop-dialog";
import { slugify } from "@/lib/slugify";

export function SpeakersForm({
  eventId,
  eventSlug,
  initialSpeakers,
  initialOrganizers,
}: {
  eventId: string;
  eventSlug: string;
  initialSpeakers?: SpeakersFormData["speakers"];
  initialOrganizers?: SpeakersFormData["organizers"];
}) {
  const [saving, setSaving] = useState(false);
  const [cropDialog, setCropDialog] = useState<{
    open: boolean;
    type: "speaker" | "organizer";
    index: number;
  }>({ open: false, type: "speaker", index: 0 });
  const { toast } = useToast();

  const form = useForm<SpeakersFormData>({
    resolver: zodResolver(speakersFormSchema),
    defaultValues: {
      speakers: initialSpeakers ?? [],
      organizers: initialOrganizers ?? [],
    },
  });

  const speakerFields = useFieldArray({
    control: form.control,
    name: "speakers",
  });

  const organizerFields = useFieldArray({
    control: form.control,
    name: "organizers",
  });

  const onSubmit = async (data: SpeakersFormData) => {
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/events/${eventId}/speakers`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to save");
      toast({
        title: "Saved",
        description: "Speakers & organizers updated successfully.",
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

  const handleSpeakerImageCropped = (url: string) => {
    // Speaker images are managed via R2 path convention, no DB field needed
    setCropDialog({ ...cropDialog, open: false });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Speakers */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Speakers</h2>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() =>
                speakerFields.append({
                  fullName: "",
                  title: "",
                  company: "",
                  instagram: "",
                  linkedin: "",
                  twitter: "",
                })
              }
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Speaker
            </Button>
          </div>

          {speakerFields.fields.length === 0 && (
            <p className="text-sm text-gray-500 py-4 text-center">
              No speakers added yet.
            </p>
          )}

          {speakerFields.fields.map((field, index) => (
            <div
              key={field.id}
              className="border border-gray-200 rounded-lg p-4 space-y-4 bg-white"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">
                  Speaker {index + 1}
                </span>
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setCropDialog({ open: true, type: "speaker", index })
                    }
                  >
                    <Upload className="h-4 w-4 mr-1" />
                    Upload Image
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => speakerFields.remove(index)}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name={`speakers.${index}.fullName`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`speakers.${index}.title`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Software Engineer" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name={`speakers.${index}.company`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company (optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Company name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name={`speakers.${index}.linkedin`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LinkedIn (optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://linkedin.com/in/..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`speakers.${index}.instagram`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Instagram (optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://instagram.com/..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`speakers.${index}.twitter`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Twitter/X (optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://x.com/..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {form.watch(`speakers.${index}.fullName`) && (
                <p className="text-xs text-gray-400">
                  Image path: {eventSlug}/speakers/
                  {slugify(form.watch(`speakers.${index}.fullName`))}.webp
                </p>
              )}
            </div>
          ))}
        </div>

        <Separator />

        {/* Organizers */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Organizers</h2>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() =>
                organizerFields.append({
                  name: "",
                  designation: "",
                  image: "",
                })
              }
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Organizer
            </Button>
          </div>

          {organizerFields.fields.length === 0 && (
            <p className="text-sm text-gray-500 py-4 text-center">
              No organizers added yet.
            </p>
          )}

          {organizerFields.fields.map((field, index) => (
            <div
              key={field.id}
              className="border border-gray-200 rounded-lg p-4 space-y-4 bg-white"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">
                  Organizer {index + 1}
                </span>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => organizerFields.remove(index)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name={`organizers.${index}.name`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Organizer name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`organizers.${index}.designation`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Designation</FormLabel>
                      <FormControl>
                        <Input placeholder="Role / title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`organizers.${index}.image`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image URL</FormLabel>
                      <FormControl>
                        <Input placeholder="https://..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end pt-4">
          <Button type="submit" disabled={saving}>
            {saving ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </form>

      {cropDialog.open && (
        <ImageCropDialog
          open={cropDialog.open}
          onClose={() => setCropDialog({ ...cropDialog, open: false })}
          onCropped={handleSpeakerImageCropped}
          aspectRatio={1}
          outputWidth={400}
          outputHeight={400}
          uploadPath={`${eventSlug}/speakers/${slugify(form.watch(`speakers.${cropDialog.index}.fullName`) || "speaker")}.webp`}
        />
      )}
    </Form>
  );
}

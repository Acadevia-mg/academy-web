"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  sponsorsFormSchema,
  type SponsorsFormData,
} from "@/lib/validations/sponsors";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

const TIER_OPTIONS = [
  { value: "", label: "No tier" },
  { value: "platin", label: "Platin" },
  { value: "altın", label: "Altın" },
  { value: "gümüş", label: "Gümüş" },
  { value: "bronz", label: "Bronz" },
];

export function SponsorsForm({
  eventId,
  eventSlug,
  initialSponsors,
}: {
  eventId: string;
  eventSlug: string;
  initialSponsors?: SponsorsFormData["sponsors"];
}) {
  const [saving, setSaving] = useState(false);
  const [cropDialog, setCropDialog] = useState<{
    open: boolean;
    index: number;
  }>({ open: false, index: 0 });
  const { toast } = useToast();

  const form = useForm<SponsorsFormData>({
    resolver: zodResolver(sponsorsFormSchema),
    defaultValues: {
      sponsors: initialSponsors ?? [],
    },
  });

  const sponsorFields = useFieldArray({
    control: form.control,
    name: "sponsors",
  });

  const onSubmit = async (data: SponsorsFormData) => {
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/events/${eventId}/sponsors`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to save");
      toast({
        title: "Saved",
        description: "Sponsors updated successfully.",
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Sponsors</h2>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => sponsorFields.append({ sponsorSlug: "", tier: "" })}
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Sponsor
          </Button>
        </div>

        {sponsorFields.fields.length === 0 && (
          <p className="text-sm text-gray-500 py-4 text-center">
            No sponsors added yet.
          </p>
        )}

        {sponsorFields.fields.map((field, index) => (
          <div
            key={field.id}
            className="border border-gray-200 rounded-lg p-4 space-y-4 bg-white"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-500">
                Sponsor {index + 1}
              </span>
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setCropDialog({ open: true, index })}
                >
                  <Upload className="h-4 w-4 mr-1" />
                  Upload Logo
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => sponsorFields.remove(index)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name={`sponsors.${index}.sponsorSlug`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sponsor Slug</FormLabel>
                    <FormControl>
                      <Input placeholder="aws, microsoft, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`sponsors.${index}.tier`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tier</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select tier" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {TIER_OPTIONS.map((tier) => (
                          <SelectItem
                            key={tier.value}
                            value={tier.value || "none"}
                          >
                            {tier.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {form.watch(`sponsors.${index}.sponsorSlug`) && (
              <p className="text-xs text-gray-400">
                Logo path: {eventSlug}/sponsors/
                {form.watch(`sponsors.${index}.sponsorSlug`)}.webp
              </p>
            )}
          </div>
        ))}

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
          onCropped={() => setCropDialog({ ...cropDialog, open: false })}
          aspectRatio={2.5}
          outputWidth={500}
          outputHeight={200}
          uploadPath={`${eventSlug}/sponsors/${form.watch(`sponsors.${cropDialog.index}.sponsorSlug`) || "sponsor"}.webp`}
        />
      )}
    </Form>
  );
}

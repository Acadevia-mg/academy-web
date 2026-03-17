"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { colorPaletteSchema } from "@/lib/validations/event";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const colorsFormSchema = z.object({
  colorPalette: colorPaletteSchema,
});

type ColorsFormData = z.infer<typeof colorsFormSchema>;

const COLOR_FIELDS = [
  { key: "primary" as const, label: "Primary" },
  { key: "secondary" as const, label: "Secondary" },
  { key: "accent" as const, label: "Accent" },
  { key: "background" as const, label: "Background" },
  { key: "text" as const, label: "Text" },
];

export function ColorsForm({
  eventId,
  initialColors,
}: {
  eventId: string;
  initialColors?: ColorsFormData["colorPalette"];
}) {
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  const form = useForm<ColorsFormData>({
    resolver: zodResolver(colorsFormSchema),
    defaultValues: {
      colorPalette: initialColors ?? {
        primary: "",
        secondary: "",
        accent: "",
        background: "",
        text: "",
      },
    },
  });

  const onSubmit = async (data: ColorsFormData) => {
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/events/${eventId}/colors`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to save");
      toast({ title: "Saved", description: "Colors updated successfully." });
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
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Color Palette</h2>
          <p className="text-sm text-gray-500">
            HSL values (e.g., &quot;244.29 100% 97.25%&quot;). Changes are
            reflected on the public event page.
          </p>

          <div className="space-y-4">
            {COLOR_FIELDS.map(({ key, label }) => (
              <FormField
                key={key}
                control={form.control}
                name={`colorPalette.${key}`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <div className="flex gap-3 items-center">
                      <div
                        className="w-12 h-12 rounded-lg border border-gray-200 shrink-0 shadow-sm"
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

          {/* Live Preview */}
          <div className="mt-6 p-4 rounded-lg border border-gray-200">
            <p className="text-sm font-medium mb-3">Preview</p>
            <div
              className="p-4 rounded-lg"
              style={{
                backgroundColor: `hsl(${form.watch("colorPalette.background") || "0 0% 100%"})`,
                color: `hsl(${form.watch("colorPalette.text") || "0 0% 0%"})`,
              }}
            >
              <h3
                className="font-bold text-lg"
                style={{
                  color: `hsl(${form.watch("colorPalette.primary") || "0 0% 0%"})`,
                }}
              >
                Primary Heading
              </h3>
              <p
                className="text-sm mt-1"
                style={{
                  color: `hsl(${form.watch("colorPalette.secondary") || "0 0% 50%"})`,
                }}
              >
                Secondary text
              </p>
              <span
                className="inline-block mt-2 px-3 py-1 rounded text-sm font-medium"
                style={{
                  backgroundColor: `hsl(${form.watch("colorPalette.accent") || "0 0% 90%"})`,
                }}
              >
                Accent Element
              </span>
            </div>
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

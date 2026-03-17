"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  metricsFormSchema,
  type MetricsFormData,
} from "@/lib/validations/metrics";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function MetricsForm({
  eventId,
  initialMetrics,
  initialAfterMetrics,
}: {
  eventId: string;
  initialMetrics?: MetricsFormData["initialMetrics"];
  initialAfterMetrics?: MetricsFormData["afterMetrics"];
}) {
  const [saving, setSaving] = useState(false);
  const [showAfterMetrics, setShowAfterMetrics] =
    useState(!!initialAfterMetrics);
  const { toast } = useToast();

  const form = useForm<MetricsFormData>({
    resolver: zodResolver(metricsFormSchema),
    defaultValues: {
      initialMetrics: initialMetrics ?? [{ title: "", value: 0 }],
      afterMetrics: initialAfterMetrics ?? null,
    },
  });

  const metricFields = useFieldArray({
    control: form.control,
    name: "initialMetrics",
  });

  const onSubmit = async (data: MetricsFormData) => {
    if (!showAfterMetrics) {
      data.afterMetrics = null;
    }
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/events/${eventId}/metrics`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to save");
      toast({ title: "Saved", description: "Metrics updated successfully." });
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

  const toggleAfterMetrics = (enabled: boolean) => {
    setShowAfterMetrics(enabled);
    if (enabled) {
      form.setValue("afterMetrics", {
        applications: "",
        vipGuests: "",
        supporter: "",
        speakers: "",
        workingParticipant: "",
        jobSeeker: "",
        jobProvider: "",
        satisfaction: "",
      });
    } else {
      form.setValue("afterMetrics", null);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Initial Metrics</h2>
            <Button
              type="button"
              variant="outline"
              size="sm"
              disabled={metricFields.fields.length >= 3}
              onClick={() => metricFields.append({ title: "", value: 0 })}
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Metric
            </Button>
          </div>
          <p className="text-sm text-gray-500">
            1-3 metrics shown on the event hero section.
          </p>

          {metricFields.fields.map((field, index) => (
            <div key={field.id} className="flex gap-4 items-end">
              <FormField
                control={form.control}
                name={`initialMetrics.${index}.title`}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Speakers" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`initialMetrics.${index}.value`}
                render={({ field }) => (
                  <FormItem className="w-32">
                    <FormLabel>Value</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                disabled={metricFields.fields.length <= 1}
                onClick={() => metricFields.remove(index)}
                className="text-red-600 hover:text-red-700 hover:bg-red-50 mb-0.5"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        <Separator />

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">After Metrics</h2>
            <Switch
              checked={showAfterMetrics}
              onCheckedChange={toggleAfterMetrics}
            />
          </div>
          <p className="text-sm text-gray-500">
            Optional post-event statistics.
          </p>

          {showAfterMetrics && (
            <div className="grid grid-cols-2 gap-4">
              {(
                [
                  ["applications", "Applications"],
                  ["vipGuests", "VIP Guests"],
                  ["supporter", "Supporters"],
                  ["speakers", "Speakers"],
                  ["workingParticipant", "Working Participants"],
                  ["jobSeeker", "Job Seekers"],
                  ["jobProvider", "Job Providers"],
                  ["satisfaction", "Satisfaction"],
                ] as const
              ).map(([key, label]) => (
                <FormField
                  key={key}
                  control={form.control}
                  name={`afterMetrics.${key}`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{label}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., 700, 200+, 90%"
                          {...field}
                          value={field.value ?? ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>
          )}
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

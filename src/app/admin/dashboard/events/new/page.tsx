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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewEventPage() {
  const [saving, setSaving] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<BasicInfoFormData>({
    resolver: zodResolver(basicInfoSchema),
    defaultValues: {
      name: "",
      heroDescription: "",
      cardDescription: "",
      navigable: true,
      registerLink: "",
      videoUrl: "",
      date: "",
      location: { name: "", subtext: "", latitude: "", longitude: "" },
      colorPalette: {
        primary: "0 0% 0%",
        secondary: "0 0% 50%",
        accent: "0 0% 90%",
        background: "0 0% 100%",
        text: "0 0% 0%",
      },
    },
  });

  const onSubmit = async (data: BasicInfoFormData) => {
    setSaving(true);
    try {
      const payload = {
        ...data,
        location: {
          name: data.location.name,
          subtext: data.location.subtext,
          latitude: data.location.latitude || null,
          longitude: data.location.longitude || null,
        },
        colorPalette: data.colorPalette,
        speakers: [],
        organizers: [],
        sessions: [],
        sponsors: [],
        tickets: [],
        images: [],
        initialMetrics: [{ title: "Speakers", value: 0 }],
      };

      const res = await fetch("/api/admin/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to create event");
      const result = await res.json();

      toast({
        title: "Created",
        description: "Event created. You can now add speakers, sessions, etc.",
      });
      router.push(`/admin/dashboard/events/${result.id}`);
    } catch {
      toast({
        title: "Error",
        description: "Failed to create event.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/admin/dashboard"
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">New Event</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                      <Textarea
                        placeholder="Hero section subtitle"
                        {...field}
                      />
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
                        <Input
                          type="url"
                          placeholder="https://..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="navigable"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-3">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-0.5">
                      <FormLabel>Navigable</FormLabel>
                      <FormDescription>
                        If unchecked, event won&apos;t be visible on the public
                        site
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />

              <Separator />

              <h3 className="text-base font-semibold">Location</h3>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="location.name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Kadir Has Üniversitesi"
                          {...field}
                        />
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
                        <Input placeholder="Campus area" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Separator />

              <h3 className="text-base font-semibold">Color Palette</h3>
              <p className="text-sm text-gray-500">
                HSL values. You can change these later.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {(
                  [
                    "primary",
                    "secondary",
                    "accent",
                    "background",
                    "text",
                  ] as const
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

              <div className="flex justify-end pt-4">
                <Button type="submit" disabled={saving}>
                  {saving ? "Creating..." : "Create Event"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

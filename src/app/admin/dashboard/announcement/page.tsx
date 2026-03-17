"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  announcementSchema,
  type AnnouncementFormData,
} from "@/lib/validations/announcement";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

const defaultValues: AnnouncementFormData = {
  show: false,
  text: "",
  backgroundColor: "#003B5C",
  textColor: "#FFFFFF",
  link: "",
  linkText: "",
  showLink: false,
};

export default function AnnouncementPage() {
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  const form = useForm<AnnouncementFormData>({
    resolver: zodResolver(announcementSchema),
    defaultValues,
  });

  useEffect(() => {
    fetch("/api/announcement")
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          form.reset({
            show: result.show ?? false,
            text: result.text ?? "",
            backgroundColor: result.backgroundColor ?? "#003B5C",
            textColor: result.textColor ?? "#FFFFFF",
            link: result.link ?? "",
            linkText: result.linkText ?? "",
            showLink: result.showLink ?? false,
          });
        }
      })
      .catch(() => {});
  }, [form]);

  const onSubmit = async (data: AnnouncementFormData) => {
    setSaving(true);
    try {
      const res = await fetch("/api/admin/announcement", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to save");
      toast({
        title: "Saved",
        description: "Announcement updated successfully.",
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

  const showValue = form.watch("show");
  const showLinkValue = form.watch("showLink");

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Announcement</h1>

      {/* Live Preview */}
      {showValue && (
        <div
          className="mb-6 p-3 rounded-lg text-center text-sm"
          style={{
            backgroundColor: form.watch("backgroundColor"),
            color: form.watch("textColor"),
          }}
        >
          {form.watch("text") || "Announcement preview"}
          {showLinkValue && form.watch("link") && (
            <a href={form.watch("link")} className="ml-2 underline">
              {form.watch("linkText") || "Learn more"}
            </a>
          )}
        </div>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Announcement Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="show"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-3">
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="!mt-0">Show Announcement</FormLabel>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Text</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Announcement text"
                        rows={3}
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
                  name="backgroundColor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Background Color</FormLabel>
                      <div className="flex gap-2">
                        <input
                          type="color"
                          value={field.value}
                          onChange={field.onChange}
                          className="h-10 w-10 rounded cursor-pointer border border-gray-200"
                        />
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="textColor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Text Color</FormLabel>
                      <div className="flex gap-2">
                        <input
                          type="color"
                          value={field.value}
                          onChange={field.onChange}
                          className="h-10 w-10 rounded cursor-pointer border border-gray-200"
                        />
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="showLink"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-3">
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="!mt-0">Show Link</FormLabel>
                  </FormItem>
                )}
              />

              {showLinkValue && (
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="link"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Link URL</FormLabel>
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
                  <FormField
                    control={form.control}
                    name="linkText"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Link Text</FormLabel>
                        <FormControl>
                          <Input placeholder="Learn more" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              <div className="flex justify-end pt-4">
                <Button type="submit" disabled={saving}>
                  {saving ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

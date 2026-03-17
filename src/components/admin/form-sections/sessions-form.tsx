"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  sessionsFormSchema,
  type SessionsFormData,
} from "@/lib/validations/sessions";
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
import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ROOM_OPTIONS = ["Ana Salon", "Yan Salon", "Network"];

export function SessionsForm({
  eventId,
  speakerNames,
  initialSessions,
}: {
  eventId: string;
  speakerNames: string[];
  initialSessions?: SessionsFormData["sessions"];
}) {
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  const form = useForm<SessionsFormData>({
    resolver: zodResolver(sessionsFormSchema),
    defaultValues: {
      sessions: initialSessions ?? [],
    },
  });

  const sessionFields = useFieldArray({
    control: form.control,
    name: "sessions",
  });

  const onSubmit = async (data: SessionsFormData) => {
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/events/${eventId}/sessions`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to save");
      toast({
        title: "Saved",
        description: "Sessions updated successfully.",
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
          <h2 className="text-lg font-semibold">Sessions</h2>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() =>
              sessionFields.append({
                room: "",
                speakerName: "",
                topic: "",
                startTime: "",
                endTime: "",
                eventDate: "",
              })
            }
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Session
          </Button>
        </div>

        {sessionFields.fields.length === 0 && (
          <p className="text-sm text-gray-500 py-4 text-center">
            No sessions added yet.
          </p>
        )}

        {sessionFields.fields.map((field, index) => {
          const room = form.watch(`sessions.${index}.room`);
          const isNetwork = room === "Network";

          return (
            <div
              key={field.id}
              className="border border-gray-200 rounded-lg p-4 space-y-4 bg-white"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">
                  Session {index + 1}
                </span>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => sessionFields.remove(index)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name={`sessions.${index}.room`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Room</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select room" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {ROOM_OPTIONS.map((room) => (
                            <SelectItem key={room} value={room}>
                              {room}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`sessions.${index}.speakerName`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Speaker</FormLabel>
                      {speakerNames.length > 0 ? (
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select speaker" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {speakerNames.map((name) => (
                              <SelectItem key={name} value={name}>
                                {name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : (
                        <FormControl>
                          <Input placeholder="Speaker name" {...field} />
                        </FormControl>
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name={`sessions.${index}.topic`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Topic {isNetwork && "(optional for Network)"}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Session topic"
                        disabled={isNetwork}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name={`sessions.${index}.startTime`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Start Time {isNetwork && "(optional)"}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="13.00"
                          disabled={isNetwork}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`sessions.${index}.endTime`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        End Time {isNetwork && "(optional)"}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="14.00"
                          disabled={isNetwork}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`sessions.${index}.eventDate`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Date (optional)</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          );
        })}

        <div className="flex justify-end pt-4">
          <Button type="submit" disabled={saving}>
            {saving ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

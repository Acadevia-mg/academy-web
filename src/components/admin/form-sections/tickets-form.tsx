"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ticketsFormSchema,
  type TicketsFormData,
} from "@/lib/validations/tickets";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Plus, Trash2, X } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function TicketsForm({
  eventId,
  initialTickets,
}: {
  eventId: string;
  initialTickets?: TicketsFormData["tickets"];
}) {
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  const form = useForm<TicketsFormData>({
    resolver: zodResolver(ticketsFormSchema),
    defaultValues: {
      tickets: initialTickets ?? [],
    },
  });

  const ticketFields = useFieldArray({
    control: form.control,
    name: "tickets",
  });

  const onSubmit = async (data: TicketsFormData) => {
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/events/${eventId}/tickets`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to save");
      toast({ title: "Saved", description: "Tickets updated successfully." });
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
          <h2 className="text-lg font-semibold">Tickets</h2>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() =>
              ticketFields.append({
                type: "",
                description: "",
                price: 0,
                link: "",
                perks: [],
              })
            }
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Ticket
          </Button>
        </div>

        {ticketFields.fields.length === 0 && (
          <p className="text-sm text-gray-500 py-4 text-center">
            No tickets added yet. Tickets are optional.
          </p>
        )}

        {ticketFields.fields.map((field, index) => (
          <TicketCard
            key={field.id}
            form={form}
            index={index}
            onRemove={() => ticketFields.remove(index)}
          />
        ))}

        <div className="flex justify-end pt-4">
          <Button type="submit" disabled={saving}>
            {saving ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

function TicketCard({
  form,
  index,
  onRemove,
}: {
  form: ReturnType<typeof useForm<TicketsFormData>>;
  index: number;
  onRemove: () => void;
}) {
  const perks = form.watch(`tickets.${index}.perks`) || [];

  const addPerk = () => {
    const current = form.getValues(`tickets.${index}.perks`) || [];
    form.setValue(`tickets.${index}.perks`, [...current, ""]);
  };

  const removePerk = (perkIndex: number) => {
    const current = form.getValues(`tickets.${index}.perks`) || [];
    form.setValue(
      `tickets.${index}.perks`,
      current.filter((_, i) => i !== perkIndex),
    );
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 space-y-4 bg-white">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-500">
          Ticket {index + 1}
        </span>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={onRemove}
          className="text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name={`tickets.${index}.type`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <FormControl>
                <Input placeholder="Community Supporter Ticket" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`tickets.${index}.price`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price (TRY)</FormLabel>
              <FormControl>
                <Input type="number" min="0" step="0.01" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name={`tickets.${index}.description`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea placeholder="Ticket description" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`tickets.${index}.link`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Purchase Link</FormLabel>
            <FormControl>
              <Input type="url" placeholder="https://..." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Perks</span>
          <Button type="button" variant="ghost" size="sm" onClick={addPerk}>
            <Plus className="h-3 w-3 mr-1" />
            Add Perk
          </Button>
        </div>
        {perks.map((_: string, perkIndex: number) => (
          <div key={perkIndex} className="flex gap-2">
            <Input
              value={form.watch(`tickets.${index}.perks.${perkIndex}`) || ""}
              onChange={(e) =>
                form.setValue(
                  `tickets.${index}.perks.${perkIndex}`,
                  e.target.value,
                )
              }
              placeholder="Perk description"
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => removePerk(perkIndex)}
              className="shrink-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

import { z } from "zod";

export const ticketSchema = z.object({
  type: z.string().min(1, "Ticket type is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number().min(0, "Price must be 0 or greater"),
  link: z.string().url("Must be a valid URL"),
  perks: z.array(z.string()),
});

export const ticketsFormSchema = z.object({
  tickets: z.array(ticketSchema),
});

export type TicketFormData = z.infer<typeof ticketSchema>;
export type TicketsFormData = z.infer<typeof ticketsFormSchema>;

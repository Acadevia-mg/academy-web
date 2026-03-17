import { z } from "zod";

export const speakerSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  title: z.string().min(1, "Title is required"),
  company: z.string(),
  instagram: z.string(),
  linkedin: z.string(),
  twitter: z.string(),
});

export const organizerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  designation: z.string().min(1, "Designation is required"),
  image: z.string().min(1, "Image URL is required"),
});

export const speakersFormSchema = z.object({
  speakers: z.array(speakerSchema),
  organizers: z.array(organizerSchema),
});

export type SpeakerFormData = z.infer<typeof speakerSchema>;
export type OrganizerFormData = z.infer<typeof organizerSchema>;
export type SpeakersFormData = z.infer<typeof speakersFormSchema>;

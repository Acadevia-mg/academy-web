import { z } from "zod";

export const locationSchema = z.object({
  name: z.string().min(1, "Location name is required"),
  subtext: z.string().min(1, "Location subtext is required"),
  latitude: z.string(),
  longitude: z.string(),
});

export const colorPaletteSchema = z.object({
  primary: z.string().min(1, "Primary color is required"),
  secondary: z.string().min(1, "Secondary color is required"),
  accent: z.string().min(1, "Accent color is required"),
  background: z.string().min(1, "Background color is required"),
  text: z.string().min(1, "Text color is required"),
});

export const basicInfoSchema = z.object({
  name: z.string().min(1, "Event name is required"),
  heroDescription: z.string().min(1, "Hero description is required"),
  cardDescription: z.string().min(1, "Card description is required"),
  navigable: z.boolean(),
  registerLink: z.string().url("Must be a valid URL"),
  videoUrl: z.string(),
  date: z.string().min(1, "Date is required"),
  location: locationSchema,
  colorPalette: colorPaletteSchema,
});

export type BasicInfoFormData = z.infer<typeof basicInfoSchema>;

import { z } from "zod";

export const blogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z
    .string()
    .min(1, "Slug is required")
    .regex(
      /^[a-z0-9]+(-[a-z0-9]+)*$/,
      "Slug must be lowercase letters, numbers, and hyphens only",
    ),
  writers: z.array(z.string()).min(1, "At least one writer is required"),
  description: z.string().min(1, "Description is required"),
  body: z.any(),
});

export type BlogFormData = z.infer<typeof blogSchema>;

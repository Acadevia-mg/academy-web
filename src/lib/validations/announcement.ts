import { z } from "zod";

export const announcementSchema = z.object({
  show: z.boolean(),
  text: z.string().min(1, "Announcement text is required"),
  backgroundColor: z.string().min(1, "Background color is required"),
  textColor: z.string().min(1, "Text color is required"),
  link: z.string(),
  linkText: z.string(),
  showLink: z.boolean(),
});

export type AnnouncementFormData = z.infer<typeof announcementSchema>;

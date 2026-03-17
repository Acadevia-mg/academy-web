import { z } from "zod";

export const sponsorSchema = z.object({
  sponsorSlug: z.string().min(1, "Sponsor slug is required"),
  tier: z.enum(["platin", "altın", "gümüş", "bronz", ""]),
});

export const sponsorsFormSchema = z.object({
  sponsors: z.array(sponsorSchema),
});

export type SponsorFormData = z.infer<typeof sponsorSchema>;
export type SponsorsFormData = z.infer<typeof sponsorsFormSchema>;

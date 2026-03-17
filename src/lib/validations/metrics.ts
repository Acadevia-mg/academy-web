import { z } from "zod";

export const initialMetricSchema = z.object({
  title: z.string().min(1, "Title is required"),
  value: z.number().int("Value must be an integer"),
});

export const afterMetricsSchema = z.object({
  applications: z.string().min(1, "Required"),
  vipGuests: z.string().min(1, "Required"),
  supporter: z.string().min(1, "Required"),
  speakers: z.string().min(1, "Required"),
  workingParticipant: z.string().min(1, "Required"),
  jobSeeker: z.string().min(1, "Required"),
  jobProvider: z.string().min(1, "Required"),
  satisfaction: z.string().min(1, "Required"),
});

export const metricsFormSchema = z.object({
  initialMetrics: z
    .array(initialMetricSchema)
    .min(1, "At least 1 metric is required")
    .max(3, "Maximum 3 metrics allowed"),
  afterMetrics: afterMetricsSchema.nullable(),
});

export type InitialMetricFormData = z.infer<typeof initialMetricSchema>;
export type AfterMetricsFormData = z.infer<typeof afterMetricsSchema>;
export type MetricsFormData = z.infer<typeof metricsFormSchema>;

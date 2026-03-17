import { z } from "zod";

export const sessionSchema = z
  .object({
    room: z.string().min(1, "Room is required"),
    speakerName: z.string().min(1, "Speaker name is required"),
    topic: z.string(),
    startTime: z.string(),
    endTime: z.string(),
    eventDate: z.string(),
  })
  .refine(
    (data) => {
      if (data.room === "Network") return true;
      return data.topic.length > 0;
    },
    { message: "Topic is required for non-Network rooms", path: ["topic"] },
  )
  .refine(
    (data) => {
      if (data.room === "Network") return true;
      return data.startTime.length > 0;
    },
    {
      message: "Start time is required for non-Network rooms",
      path: ["startTime"],
    },
  )
  .refine(
    (data) => {
      if (data.room === "Network") return true;
      return data.endTime.length > 0;
    },
    {
      message: "End time is required for non-Network rooms",
      path: ["endTime"],
    },
  );

export const sessionsFormSchema = z.object({
  sessions: z.array(
    z.object({
      room: z.string().min(1, "Room is required"),
      speakerName: z.string().min(1, "Speaker name is required"),
      topic: z.string(),
      startTime: z.string(),
      endTime: z.string(),
      eventDate: z.string(),
    }),
  ),
});

export type SessionFormData = z.infer<typeof sessionSchema>;
export type SessionsFormData = z.infer<typeof sessionsFormSchema>;

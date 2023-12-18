import { z } from "zod";

export const slugSchema = z.object({
  current: z.string(),
});

export const entrySchema = z.object({
  _id: z.string(),
});

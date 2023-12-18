import { z } from "zod";

export const categorySchema = z.object({
  _type: z.literal("category"),
  _id: z.string(),
  title: z.string(),
  slug: z.object({
    current: z.string(),
  }),
  description: z.string().nullable(),
});

export type CategoryModel = z.infer<typeof categorySchema>;

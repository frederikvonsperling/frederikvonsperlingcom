import { z } from "zod";
import { entrySchema } from "@/foundation/base-entities";

export const codeSchema = z.object({
  _type: z.literal("code-snippet"),
  code: z.string(),
});

export const spanSchema = z.object({
  _type: z.literal("span"),
  text: z.string(),
});

export const blockSchema = z.object({
  _type: z.literal("block"),
  children: z.array(spanSchema),
  style: z.string(),
});

export const postSchema = entrySchema.extend({
  _id: z.string(),
  title: z.string(),
  slug: z.object({
    current: z.string(),
  }),
  content: z.array(z.union([blockSchema, codeSchema])),
});

export type PostType = z.infer<typeof postSchema>;

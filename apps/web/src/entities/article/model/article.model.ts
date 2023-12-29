import { z } from "zod";
import { entrySchema } from "@/shared/base-entities";

export const marksSchema = z.array(z.string());

export const codeSchema = z.object({
  _type: z.literal("code-snippet"),
  code: z.string(),
});

export const spanSchema = z.object({
  _type: z.literal("span"),
  text: z.string(),
  marks: marksSchema,
});

export const blockSchema = z.object({
  _type: z.literal("block"),
  children: z.array(spanSchema),
  style: z.string(),
});

export const articleSchema = entrySchema.extend({
  _id: z.string(),
  title: z.string(),
  slug: z.object({
    current: z.string(),
  }),
  excerpt: z.string(),
  content: z.any(),
  tags: z
    .array(
      z.object({
        _id: z.string(),
        _type: z.literal("tag"),
        title: z.string(),
      })
    )
    .nullable(),
  _createdAt: z.string(),
  _updatedAt: z.string(),
});

export type ArticleType = z.infer<typeof articleSchema>;

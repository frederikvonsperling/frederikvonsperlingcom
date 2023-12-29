import { z } from "zod";

export const tagSchema = z.object({
  _type: z.literal("tag"),
  _id: z.string(),
  title: z.string(),
  slug: z.object({
    current: z.string(),
  }),
  description: z.string().nullable(),
});

export const relatedTagsSchema = tagSchema.extend({
  tagList: z.array(
    z.object({
      mainTag: tagSchema,
      tags: z.array(tagSchema),
    })
  ),
});

export type TagModel = z.infer<typeof tagSchema>;
export type RelatedTagsModel = z.infer<typeof relatedTagsSchema>;

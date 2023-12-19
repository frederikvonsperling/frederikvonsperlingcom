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

export const relatedCategoriesSchema = categorySchema.extend({
  categoryList: z.array(
    z.object({
      mainCategory: categorySchema,
      categories: z.array(categorySchema),
    })
  ),
});

export type CategoryModel = z.infer<typeof categorySchema>;
export type RelatedCategoriesModel = z.infer<typeof relatedCategoriesSchema>;

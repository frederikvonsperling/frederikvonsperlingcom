import { defineField, defineType } from "sanity";

export default defineType({
  name: "categoryList",
  title: "Category List",
  type: "document",
  fields: [
    defineField({
      name: "mainCategory",
      title: "Main Category",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),
  ],
  preview: {
    select: {
      mainTitle: "mainCategory.title",
      mainSubtitle: "mainCategory.description",
      categories: "categories",
    },
    prepare({ mainTitle, mainSubtitle, categories }) {
      return {
        title: `${mainTitle} (${categories.length})`,
        subtitle: mainSubtitle,
      };
    },
  },
});

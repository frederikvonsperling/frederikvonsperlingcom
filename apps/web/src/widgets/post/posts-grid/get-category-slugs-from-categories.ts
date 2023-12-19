import { unique } from "radash";
import { RelatedCategoriesModel } from "@/entities/category/model/category.model";

type Props = {
  categories: RelatedCategoriesModel;
};

export default function getCategorySlugsFromCategories({ categories }: Props) {
  const currentCategorySlug = categories.slug.current;
  const mainCategorySlugs = categories.categoryList.map(
    (category) => category.mainCategory.slug.current
  );
  const subCategorySlugs = categories.categoryList.map((category) =>
    category.categories.map((subCategory) => subCategory.slug.current)
  );

  const slugs = unique([
    currentCategorySlug,
    ...mainCategorySlugs,
    ...subCategorySlugs.flat(),
  ]);

  return slugs;
}

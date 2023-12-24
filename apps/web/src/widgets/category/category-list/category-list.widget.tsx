import getCategoriesApi from "@/entities/category/api/get-categories.api.cache";
import CategoryItem from "@/entities/category/ui/category-item";
import CategoryLink from "@/features/category/category-link";
import { vstack } from "@styled-system/patterns";

export default async function CategoryListWidget() {
  const categoriesResponse = await getCategoriesApi();

  if (categoriesResponse.isErr()) {
    return <p>Failed to get categories: {categoriesResponse.error.message}</p>;
  }

  return (
    <div className={vstack({ alignItems: "flex-start" })}>
      {categoriesResponse.value.map((category) => {
        return (
          <CategoryLink slug={category.slug.current} key={category._id}>
            <CategoryItem category={category} />
          </CategoryLink>
        );
      })}
    </div>
  );
}

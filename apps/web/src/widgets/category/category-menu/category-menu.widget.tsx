import getCategoryListApi from "@/entities/category/api/get-category-list.api";
import { CategoryModel } from "@/entities/category/model/category.model";
import CategoryItem from "@/entities/category/ui/category-item";
import CategoryLink from "@/features/category/category-link";
import { css } from "@styled-system/css";
import { vstack } from "@styled-system/patterns";
import SingleCategory from "./single-category";

export default async function CategoryMenuWidget() {
  const categoriesResponse = await getCategoryListApi();

  if (categoriesResponse.isErr()) {
    return <p>Failed to get categories: {categoriesResponse.error.message}</p>;
  }

  return (
    <div className={vstack({ alignItems: "flex-start", lineHeight: "loose" })}>
      <ul>
        {categoriesResponse.value.map((categoryList) => {
          return (
            <li key={categoryList._id}>
              <SingleCategory category={categoryList.mainCategory} />
              <ul className={css({ ml: "4" })}>
                {categoryList.categories.map((category) => {
                  return (
                    <SingleCategory category={category} key={category._id} />
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

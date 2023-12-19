import getCategoryListApi from "@/entities/category/api/get-category-list.api";
import { css } from "@styled-system/css";
import { vstack } from "@styled-system/patterns";
import SingleCategory from "./single-category";

type Props = {
  slug?: string;
};

export default async function CategoryMenuWidget({ slug }: Props) {
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
              <SingleCategory
                category={categoryList.mainCategory}
                isActive={slug === categoryList.mainCategory.slug.current}
              />
              <ul className={css({ ml: "4" })}>
                {categoryList.categories.map((category) => {
                  return (
                    <SingleCategory
                      category={category}
                      key={category._id}
                      isActive={slug === category.slug.current}
                    />
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

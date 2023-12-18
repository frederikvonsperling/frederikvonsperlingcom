import { CategoryModel } from "@/entities/category/model/category.model";
import { css } from "@styled-system/css";
import { vstack } from "@styled-system/patterns";
import Link from "next/link";

type Props = {
  categories: CategoryModel[];
};

export default function CategoryList({ categories }: Props) {
  return (
    <div className={vstack({ alignItems: "flex-start" })}>
      {categories.map((category) => {
        return (
          <Link
            href={`/blog/category/${category.slug.current}`}
            className={css({ fontFamily: "body" })}
            key={category._id}
          >
            {category.title}
          </Link>
        );
      })}
    </div>
  );
}

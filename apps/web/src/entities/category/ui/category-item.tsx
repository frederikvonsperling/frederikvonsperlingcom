import { css } from "@styled-system/css";
import { CategoryModel } from "../model/category.model";

type Props = {
  category: CategoryModel;
  isActive?: boolean;
};

export default function CategoryItem({ category, isActive }: Props) {
  return (
    <div
      data-category-id={category._id}
      className={css({ fontFamily: "body" })}
      style={isActive ? { fontWeight: "bold" } : undefined}
    >
      {category.title}
    </div>
  );
}

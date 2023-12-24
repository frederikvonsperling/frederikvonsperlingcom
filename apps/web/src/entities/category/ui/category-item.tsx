import { CategoryModel } from "../model/category.model";
import Badge from "@ui/components/badge/badge";

type Props = {
  category: CategoryModel;
  isActive?: boolean;
};

export default function CategoryItem({ category, isActive }: Props) {
  return <Badge data-category-id={category._id}>{category.title}</Badge>;
}

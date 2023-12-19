import { CategoryModel } from "@/entities/category/model/category.model";
import CategoryItem from "@/entities/category/ui/category-item";
import CategoryLink from "@/features/category/category-link";

type Props = {
  category: CategoryModel;
  isActive?: boolean;
};

export default function SingleCategory({ category, isActive }: Props) {
  return (
    <CategoryLink slug={category.slug.current} key={category._id}>
      <CategoryItem category={category} isActive={isActive} />
    </CategoryLink>
  );
}

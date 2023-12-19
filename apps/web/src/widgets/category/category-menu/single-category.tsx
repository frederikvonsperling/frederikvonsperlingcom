"use client";

import { CategoryModel } from "@/entities/category/model/category.model";
import CategoryItem from "@/entities/category/ui/category-item";
import CategoryLink from "@/features/category/category-link";
import { usePathname } from "next/navigation";

type Props = {
  category: CategoryModel;
};

export default function SingleCategory({ category }: Props) {
  const pathname = usePathname();
  const href = `/articles/category/${category.slug.current}`;

  console.log(href === pathname);

  return (
    <CategoryLink href={href} key={category._id}>
      <CategoryItem category={category} isActive={href === pathname} />
    </CategoryLink>
  );
}

import getRelatedCategories from "@/entities/category/api/get-related-categories";
import getPostsByCategoryApi from "@/entities/post/api/get-posts-by-category.api";
import getPostsApi from "@/entities/post/api/get-posts.api";
import { err } from "neverthrow";
import getCategorySlugsFromCategories from "./get-category-slugs-from-categories";

type Props = {
  slug?: string;
};

export async function getPosts({ slug }: Props) {
  if (!slug) {
    const postsResponse = await getPostsApi();
    return postsResponse;
  }

  const categories = await getRelatedCategories({
    params: { slug },
  });

  if (categories.isErr()) {
    return err(categories.error);
  }

  const slugs = getCategorySlugsFromCategories({
    categories: categories.value,
  });

  const postResponse = await getPostsByCategoryApi({
    params: {
      slugs,
    },
  });

  return postResponse;
}

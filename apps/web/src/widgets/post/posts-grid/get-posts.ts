import getRelatedCategories from "@/entities/category/api/get-related-categories.cache";
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

  const postResponse = await getPostsByCategoryApi({
    params: {
      slugs: [slug],
    },
  });

  return postResponse;
}

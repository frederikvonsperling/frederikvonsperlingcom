import getPostsByCategoryCacheApi from "@/entities/post/api/get-posts-by-category.cache.api";
import getPostsCacheApi from "@/entities/post/api/get-posts.cache.api";

type Props = {
  slug?: string;
};

export async function getPosts({ slug }: Props) {
  if (!slug) {
    const postsResponse = await getPostsCacheApi();
    return postsResponse;
  }

  const postResponse = await getPostsByCategoryCacheApi({
    params: {
      slugs: [slug],
    },
  });

  return postResponse;
}

import getCategoriesApi from "@/entities/category/api/get-categories.api";
import getPostsByCategoryApi from "@/entities/post/api/get-posts-by-category.api";
import getPostsApi from "@/entities/post/api/get-posts.api";
import CategoryListWidget from "@/widgets/category/category-list/category-list.widget";
import PostGridWidget from "@/widgets/post/posts-grid/posts-grid.widget";
import { css } from "@styled-system/css";
import { hstack } from "@styled-system/patterns";

type Props = {
  /**
   * Category slug
   */
  slug: string;
};

export default async function PostsInCategoryPage({ slug }: Props) {
  const postsResponse = await getPostsByCategoryApi({ params: { slug } });
  const categories = await getCategoriesApi();

  if (categories.isErr()) {
    return <p>Failed to get categories: {categories.error.message}</p>;
  }

  if (postsResponse.isErr()) {
    return <p>Failed to get posts: {postsResponse.error.message}</p>;
  }

  return (
    <div className={css({ maxW: "5xl", mx: "auto", p: "4" })}>
      <div className={hstack({ alignItems: "stretch", gap: "8" })}>
        <div
          className={css({
            borderRight: "1px solid white",
            flexBasis: "15vw",
            flexShrink: 0,
          })}
        >
          <CategoryListWidget categories={categories.value} />
        </div>
        <div>
          <PostGridWidget posts={postsResponse.value} />
        </div>
      </div>
    </div>
  );
}

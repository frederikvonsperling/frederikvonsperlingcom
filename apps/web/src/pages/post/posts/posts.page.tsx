import getCategoriesApi from "@/entities/category/api/get-categories.api";
import getPostsApi from "@/entities/post/api/get-posts.api";
import CategoryListWidget from "@/widgets/category/category-list/category-list.widget";
import PostGridWidget from "@/widgets/post/posts-grid/posts-grid.widget";
import { css } from "@styled-system/css";
import { hstack } from "@styled-system/patterns";
import { Heading } from "@ui/components/01-atoms/Heading/Heading";

export default async function PostsPage() {
  const postsResponse = await getPostsApi();

  const categories = await getCategoriesApi();

  if (categories.isErr()) {
    return <p>Failed to get categories: {categories.error.message}</p>;
  }

  if (postsResponse.isErr()) {
    return <p>Failed to get posts: {postsResponse.error.message}</p>;
  }

  return (
    <div className={css({ maxW: "3xl", mx: "auto", p: "4" })}>
      <div className={hstack({ alignItems: "flex-start" })}>
        <div className={css({ borderRight: "1px solid red" })}>
          <CategoryListWidget categories={categories.value} />
        </div>
        <div>
          <div className={css({ mb: "10" })}>
            <Heading size="h1" element="h1">
              Posts
            </Heading>
          </div>
          <PostGridWidget posts={postsResponse.value} />
        </div>
      </div>
    </div>
  );
}

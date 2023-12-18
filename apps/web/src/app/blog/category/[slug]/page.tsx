import getPostsByCategoryApi from "@/entities/post/api/get-posts-by-category.api";
import PostsInCategoryPage from "@/pages/post/posts-in-category/posts-in-category.page";

type Props = {
  params: {
    slug: string;
  };
};

export default async function CategoryPostsPage({ params }: Props) {
  return <PostsInCategoryPage slug={params.slug} />;
}

import PostsPage from "@/page-views/post/posts/posts.page";

type Props = {
  params: {
    slug: string;
  };
};

export default async function CategoryPostsPage({ params }: Props) {
  return <PostsPage slug={params.slug} />;
}

import PostsPage from "@/pages/post/posts/posts.page";

type Props = {
  params: {
    slug: string;
  };
};

export default async function CategoryPostsPage({ params }: Props) {
  return <PostsPage slug={params.slug} />;
}

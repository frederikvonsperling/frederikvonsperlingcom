import getPostApi from "@/entities/post/api/get-post.api";
import SinglePostWidget from "@/widgets/post/single-post/single-post.widget";

type Props = {
  slug: string;
};

export default async function SinglePostPage({ slug }: Props) {
  const postResponse = await getPostApi({ params: { slug } });

  if (postResponse.isErr()) {
    return <p>Failed to get post: {postResponse.error.message}</p>;
  }

  return <SinglePostWidget post={postResponse.value} />;
}

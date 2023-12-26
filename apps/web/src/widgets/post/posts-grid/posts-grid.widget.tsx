import PostCard from "@/entities/post/ui/post-card/post-card";
import { css } from "@styled-system/css";
import { getPosts } from "./get-posts";

type Props = {
  slug?: string;
};

export default async function PostGridWidget({ slug }: Props) {
  const postsResponse = await getPosts({ slug });

  if (postsResponse.isErr()) {
    return <p>Failed to get posts: {postsResponse.error.message}</p>;
  }

  return (
    <div
      className={css({ display: "grid", gridTemplateColumns: "3", gap: "4" })}
    >
      {postsResponse.value.map((post) => (
        <PostCard post={post} key={post._id} />
      ))}
    </div>
  );
}

import { PostType } from "@/entities/post/model/post.model";
import PostCard from "@/entities/post/ui/post-card/post-card";
import PostLink from "@/features/post/post-link/post-link";
import { css } from "@styled-system/css";

type Props = {
  posts: PostType[];
};

export default async function PostGridWidget({ posts }: Props) {
  return (
    <div
      className={css({ display: "grid", gridTemplateColumns: "3", gap: "8" })}
    >
      {posts.map((post) => (
        <PostLink post={post} key={post._id}>
          <PostCard post={post} />
        </PostLink>
      ))}
    </div>
  );
}

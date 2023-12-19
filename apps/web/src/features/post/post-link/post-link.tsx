import { PostType } from "@/entities/post/model/post.model";
import { css } from "@styled-system/css";
import Link from "next/link";

type Props = {
  post: PostType;
  children: React.ReactNode;
};

export default function PostLink({ post, children }: Props) {
  return (
    <Link
      data-post-id={post._id}
      key={post._id}
      href={`/articles/${post.slug.current}`}
    >
      {children}
    </Link>
  );
}

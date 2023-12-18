import { PostType } from "@/entities/post/model/post.model";
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
      href={`/blog/${post.slug.current}`}
    >
      {children}
    </Link>
  );
}

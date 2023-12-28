import Link from "next/link";
import { PostType } from "../../model/post.model";
import Card from "@ui/components/card";

type Props = {
  post: PostType;
};

/**
 * Single Post Card
 */
export default function PostCard({ post }: Props) {
  return (
    <Link
      data-post-id={post._id}
      key={post._id}
      href={`/articles/${post.slug.current}`}
      className="group"
    >
      <Card
        title={post.title}
        excerpt={post.excerpt}
        categories={post.tags?.map((category) => category.title) ?? []}
      />
    </Link>
  );
}

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
    <Card
      title={post.title}
      excerpt={post.excerpt}
      categories={post.categories.map((category) => category.title)}
    />
  );
}

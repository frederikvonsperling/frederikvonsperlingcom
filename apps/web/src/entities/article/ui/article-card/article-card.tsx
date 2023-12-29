import Link from "next/link";
import { ArticleType } from "../../model/article.model";
import Card from "@ui/components/card";

type Props = {
  article: ArticleType;
};

/**
 * Single Post Card
 */
export default function ArticleCard({ article }: Props) {
  return (
    <Link
      data-post-id={article._id}
      key={article._id}
      href={`/articles/${article.slug.current}`}
      className="group"
    >
      <Card
        title={article.title}
        excerpt={article.excerpt}
        categories={article.tags?.map((tag) => tag.title) ?? []}
      />
    </Link>
  );
}

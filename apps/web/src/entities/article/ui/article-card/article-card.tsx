import Link from "next/link";

import Card from "@ui/components/card";

import { ArticleType } from "@/entities/article/model/article.model";

type Properties = {
  article: ArticleType;
};

/**
 * Single article card
 */
export default function ArticleCard({ article }: Properties) {
  return (
    <Link
      data-article-id={article._id}
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

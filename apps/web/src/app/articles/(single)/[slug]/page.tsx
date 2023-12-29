import { Metadata } from "next";

import SingleArticlePage from "@/page-views/article/single-article/single-article.page";
import getArticleBySlugCacheApi from "@/entities/article/api/get-article-by-slug.cache.api";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const articleResponse = await getArticleBySlugCacheApi({
    params: { slug: params.slug },
  });

  if (articleResponse.isErr()) {
    throw new Error(`Error getting article with ${params.slug}`);
  }

  return {
    title: articleResponse.value.title,
  };
}

export default async function Page({ params }: Props) {
  return <SingleArticlePage slug={params.slug} />;
}

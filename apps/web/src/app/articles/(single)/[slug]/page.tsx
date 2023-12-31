import { Metadata } from "next";

import getArticleBySlugCacheApi from "@/entities/article/api/get-article-by-slug.cache.api";

import SingleArticlePage from "@/page-views/article/single-article/single-article.page";

type Properties = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: Properties): Promise<Metadata> {
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

export default async function Page({ params }: Properties) {
  return <SingleArticlePage slug={params.slug} />;
}

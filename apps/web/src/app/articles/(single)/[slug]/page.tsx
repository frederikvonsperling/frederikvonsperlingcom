import { Metadata } from "next";

import getPost from "@/entities/article/api/get-article-by-slug.cache.api";
import SingleArticlePage from "@/page-views/article/single-article/single-article.page";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const postsResponse = await getPost({ params: { slug: params.slug } });

  if (postsResponse.isErr()) {
    throw new Error(`Error getting post with slug ${params.slug}`);
  }

  return {
    title: postsResponse.value.title,
  };
}

export default async function Page({ params }: Props) {
  return <SingleArticlePage slug={params.slug} />;
}

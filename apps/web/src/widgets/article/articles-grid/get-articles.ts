import getArticleByCategoryCacheApi from "@/entities/article/api/get-articles-by-category.cache.api";
import getArticlesCacheApi from "@/entities/article/api/get-articles.cache.api";

type Props = {
  slug?: string;
};

export default async function getArticles({ slug }: Props) {
  if (!slug) {
    const articleResponse = await getArticlesCacheApi();
    return articleResponse;
  }

  const articleResponse = await getArticleByCategoryCacheApi({
    params: {
      slugs: [slug],
    },
  });

  return articleResponse;
}

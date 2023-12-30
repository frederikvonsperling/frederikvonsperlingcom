import getArticlesCacheApi from "@/entities/article/api/get-articles.cache.api";
import getArticleByCategoryCacheApi from "@/entities/article/api/get-articles-by-category.cache.api";

type Properties = {
  slug?: string;
};

export default async function getArticles({ slug }: Properties) {
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

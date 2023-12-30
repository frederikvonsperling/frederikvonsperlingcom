import SingleArticleWidget from "@/widgets/article/single-article/single-article.widget";

type Properties = {
  slug: string;
};

export default async function SingleArticlePage({ slug }: Properties) {
  return <SingleArticleWidget slug={slug} />;
}

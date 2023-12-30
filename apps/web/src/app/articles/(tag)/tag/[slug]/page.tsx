import ArticlePage from "@/page-views/article/article/articles.page";

type Properties = {
  params: {
    slug: string;
  };
};

export default async function TagArticlePage({ params }: Properties) {
  return <ArticlePage slug={params.slug} />;
}

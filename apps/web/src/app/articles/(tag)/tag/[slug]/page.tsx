import ArticlePage from "@/page-views/article/article/articles.page";

type Props = {
  params: {
    slug: string;
  };
};

export default async function TagArticlePage({ params }: Props) {
  return <ArticlePage slug={params.slug} />;
}

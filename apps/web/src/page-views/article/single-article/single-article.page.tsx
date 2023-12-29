import ArticleCommentWidget from "@/widgets/article/article-comment/article-comment.widget";
import SingleArticleWidget from "@/widgets/article/single-article/single-article.widget";
import { Grid } from "@styled-system/jsx";

type Props = {
  slug: string;
};

export default async function SingleArticlePage({ slug }: Props) {
  return (
    <Grid>
      <SingleArticleWidget slug={slug} />
      <ArticleCommentWidget />
    </Grid>
  );
}

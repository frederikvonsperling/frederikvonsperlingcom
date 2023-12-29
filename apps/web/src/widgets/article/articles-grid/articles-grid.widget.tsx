import getArticles from "./get-articles";
import { Grid } from "@styled-system/jsx";
import Box from "@/shared/components/box";
import ArticleCard from "@/entities/article/ui/article-card/article-card";

type Props = {
  slug?: string;
};

/**
 * Showing all articles or articles by tag
 */
export default async function ArticleGridWidget({ slug }: Props) {
  const articleResponse = await getArticles({ slug });

  if (articleResponse.isErr()) {
    return <p>Failed to get article: {articleResponse.error.message}</p>;
  }

  if (articleResponse.value.length === 0) {
    return null;
  }

  return (
    <Box>
      <Grid columns={3} gap={"4"}>
        {articleResponse.value.map((article) => (
          <ArticleCard article={article} key={article._id} />
        ))}
      </Grid>
    </Box>
  );
}

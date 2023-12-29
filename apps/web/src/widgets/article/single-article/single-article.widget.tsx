import { css } from "@styled-system/css";
import Badge from "@ui/components/badge";
import PortableText from "@/shared/components/portable-text";
import getPostApi from "@/entities/article/api/get-article-by-slug.cache.api";
import Box from "@/shared/components/box";
import { Grid } from "@styled-system/jsx";
import getArticleBySlugCacheApi from "@/entities/article/api/get-article-by-slug.cache.api";

type Props = {
  slug: string;
};

export default async function SingleArticleWidget({ slug }: Props) {
  const articleResponse = await getArticleBySlugCacheApi({ params: { slug } });

  if (articleResponse.isErr()) {
    return <p>Failed to get post: {articleResponse.error.message}</p>;
  }

  const article = articleResponse.value;

  return (
    <Grid gap={"4"}>
      <Box>
        <header>
          <p className={css({ fontFamily: "code", mb: "4" })}>
            Last updated:{" "}
            {new Date(article._updatedAt).toLocaleDateString("en-US")}
          </p>
          <h1
            className={css({
              fontFamily: "heading",
              fontSize: "5xl",
              mb: "2",
              fontWeight: "extrabold",
              color: "white",
              lineHeight: "tight",
            })}
          >
            {article.title}
          </h1>
          <p
            className={css({
              fontFamily: "body",
              fontWeight: "normal",
              fontSize: "2xl",
            })}
          >
            {article.excerpt}
          </p>
        </header>
      </Box>
      <main>
        <Box>
          <PortableText content={article.content} />
        </Box>
      </main>
      <footer>
        <div className={css({ mt: "8" })}>
          <div className={css({ display: "flex", gap: "2" })}>
            {article.tags?.map((tag) => {
              return <Badge key={tag._id}>{tag.title}</Badge>;
            })}
          </div>
        </div>
      </footer>
    </Grid>
  );
}

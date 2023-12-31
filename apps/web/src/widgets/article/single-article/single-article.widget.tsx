import { css } from "@styled-system/css";
import { Grid } from "@styled-system/jsx";

import Badge from "@ui/components/badge";
import Box from "@ui/components/box";
import Heading from "@ui/components/heading/heading";

import PortableText from "@/shared/components/portable-text";

import getArticleBySlugCacheApi from "@/entities/article/api/get-article-by-slug.cache.api";

type Properties = {
  slug: string;
};

export default async function SingleArticleWidget({ slug }: Properties) {
  const articleResponse = await getArticleBySlugCacheApi({ params: { slug } });

  if (articleResponse.isErr()) {
    return <p>Failed to get article: {articleResponse.error.message}</p>;
  }

  const article = articleResponse.value;

  return (
    <Grid gap={"4"}>
      <Box>
        <Grid gap="8">
          <header>
            <p className={css({ fontFamily: "code", mb: "4", fontSize: "sm" })}>
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

          <main>
            <PortableText content={article.content} />
          </main>
        </Grid>
      </Box>
      <footer>
        <Box>
          <Grid gap="4">
            <Heading element="h3" size="h3">
              Tags
            </Heading>
            <div className={css({ display: "flex", gap: "2" })}>
              {article.tags?.map((tag) => {
                return <Badge key={tag._id}>{tag.title}</Badge>;
              })}
            </div>
          </Grid>
        </Box>
      </footer>
    </Grid>
  );
}

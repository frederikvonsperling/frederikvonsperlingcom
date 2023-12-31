import { Suspense } from "react";

import { css } from "@styled-system/css";
import { Grid } from "@styled-system/jsx";
import { hstack } from "@styled-system/patterns";

import Box from "@ui/components/box";
import Heading from "@ui/components/heading";

import ArticlesGridWidget from "@/widgets/article/articles-grid/articles-grid.widget";

type Properties = {
  slug?: string;
};

export default async function ArticlesPage({ slug }: Properties) {
  const Loading = () => (
    <Box isLoading className={css({ height: "56", w: "full" })} />
  );

  return (
    <div className={css({ maxW: "5xl", mx: "auto", w: "full" })}>
      <Grid gap="4">
        <Box>
          <Heading element="h3" size="h3">
            {slug ? `Showing articles in ${slug}` : `All articles`}
          </Heading>
        </Box>
        <div className={hstack({ alignItems: "stretch", gap: "8", w: "full" })}>
          <Suspense fallback={<Loading />}>
            <ArticlesGridWidget slug={slug} />
          </Suspense>
        </div>
      </Grid>
    </div>
  );
}

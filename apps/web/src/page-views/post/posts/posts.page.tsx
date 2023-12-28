import Box from "@/shared/components/box";
import PostGridWidget from "@/widgets/post/posts-grid/posts-grid.widget";
import { css } from "@styled-system/css";
import { Grid, GridItem } from "@styled-system/jsx";
import { hstack } from "@styled-system/patterns";
import Heading from "@ui/components/heading";
import { Suspense } from "react";

type Props = {
  slug?: string;
};

export default async function PostsPage({ slug }: Props) {
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
            <PostGridWidget slug={slug} />
          </Suspense>
        </div>
      </Grid>
    </div>
  );
}

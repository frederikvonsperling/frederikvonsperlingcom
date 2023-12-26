import Box from "@/shared/components/box";
import PostGridWidget from "@/widgets/post/posts-grid/posts-grid.widget";
import { css } from "@styled-system/css";
import { Grid, GridItem } from "@styled-system/jsx";
import { hstack } from "@styled-system/patterns";
import { Suspense } from "react";

type Props = {
  slug?: string;
};

export default async function PostsPage({ slug }: Props) {
  const Loading = () => (
    <Grid columns={3} width={"full"} columnGap={"4"}>
      {Array.from({ length: 3 }).map((_, i) => (
        <GridItem key={i}>
          <Box isLoading className={css({ height: "56" })} />
        </GridItem>
      ))}
    </Grid>
  );

  return (
    <div className={css({ maxW: "5xl", mx: "auto", w: "full" })}>
      <div className={hstack({ alignItems: "stretch", gap: "8", w: "full" })}>
        <Suspense fallback={<Loading />}>
          <PostGridWidget slug={slug} />
        </Suspense>
      </div>
    </div>
  );
}

import Link from "next/link";

import { css } from "@styled-system/css";
import { Grid, GridItem } from "@styled-system/jsx";

import Box from "@/shared/components/box/box";
import PostNavWidget from "@/widgets/article/article-nav/article-nav.widget";

type Properties = {
  params: { slug: string };
  children: React.ReactNode;
};

export default function Layout({ children, params }: Properties) {
  return (
    <div className={css({ maxW: "5xl", mx: "auto", p: "4" })}>
      <Grid alignItems={"stretch"} gap="4" columns={12}>
        <GridItem colSpan={3}>
          <Grid gap={"4"}>
            <Box>
              <Link
                className={css({
                  fontFamily: "body",
                  color: "white",
                  display: "block",
                })}
                href="/articles"
              >
                Back to articles
              </Link>
            </Box>
            <Box>
              <PostNavWidget slug={params.slug} />
            </Box>
          </Grid>
        </GridItem>
        <GridItem colSpan={9}>
          <article className={css({ minW: "1" })}>{children}</article>
        </GridItem>
      </Grid>
    </div>
  );
}

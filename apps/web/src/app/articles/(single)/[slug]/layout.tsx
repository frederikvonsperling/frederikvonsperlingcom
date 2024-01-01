import Link from "next/link";

import { css } from "@styled-system/css";
import { Grid, GridItem } from "@styled-system/jsx";

import Box from "@ui/components/box";
import Container from "@ui/components/container";

import PostNavWidget from "@/widgets/article/article-nav/article-nav.widget";

type Properties = {
  params: { slug: string };
  children: React.ReactNode;
};

export default function Layout({ children, params }: Properties) {
  return (
    <Container>
      <Grid alignItems={"stretch"} gap="4" columns={12}>
        <GridItem colSpan={{ base: 12, md: 3 }}>
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
        <GridItem
          colEnd={13}
          colStart={{ base: 1, md: 4 }}
          rowStart={{ mdDown: 1 }}
        >
          <article className={css({ minW: "1" })}>{children}</article>
        </GridItem>
      </Grid>
    </Container>
  );
}

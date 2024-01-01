import { Suspense } from "react";

import { css } from "@styled-system/css";
import { Grid, GridItem } from "@styled-system/jsx";

import Box from "@ui/components/box";
import Container from "@ui/components/container";
import Heading from "@ui/components/heading";

import CategoryListWidget from "@/widgets/tag/tag-list/tag-list.widget";

type Properties = {
  params: { slug: string };
  children: React.ReactNode;
};

export default function Layout({ children }: Properties) {
  return (
    <Container>
      <Grid alignItems={"stretch"} gap="4" columns={12}>
        <GridItem colSpan={3}>
          <Box>
            <Heading element="h3" size="h3" className={css({ mb: "4" })}>
              Tags
            </Heading>

            <Suspense fallback={<p>Getting categories</p>}>
              <CategoryListWidget />
            </Suspense>
          </Box>
        </GridItem>

        <GridItem colSpan={9}>{children}</GridItem>
      </Grid>
    </Container>
  );
}

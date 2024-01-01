import { Suspense } from "react";

import { css } from "@styled-system/css";
import { Grid, GridItem } from "@styled-system/jsx";

import Box from "@ui/components/box";
import Container from "@ui/components/container";
import Heading from "@ui/components/heading";

import CategoryListWidget from "@/widgets/tag/tag-list/tag-list.widget";

type Properties = {
  children: React.ReactNode;
};

export default function Layout({ children }: Properties) {
  return (
    <Container>
      <Grid alignItems={"stretch"} gap="4" columns={12}>
        <GridItem colStart={1} colEnd={{ base: 13, sm: 5, md: 4 }}>
          <Box>
            <Heading element="h3" size="h3" className={css({ mb: "4" })}>
              Tags
            </Heading>

            <Suspense fallback={<p>Getting categories</p>}>
              <CategoryListWidget />
            </Suspense>
          </Box>
        </GridItem>

        <GridItem
          colStart={{ base: 1, sm: 5, md: 4 }}
          colEnd={13}
          rowStart={{ smDown: 1 }}
        >
          {children}
        </GridItem>
      </Grid>
    </Container>
  );
}

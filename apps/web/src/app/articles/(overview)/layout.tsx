import { Suspense } from "react";

import { css } from "@styled-system/css";
import { Grid, GridItem } from "@styled-system/jsx";

import Heading from "@ui/components/heading";

import Box from "@/shared/components/box";
import CategoryListWidget from "@/widgets/tag/tag-list/tag-list.widget";

type Properties = {
  params: { slug: string };
  children: React.ReactNode;
};

export default function Layout({ children, params }: Properties) {
  return (
    <div className={css({ maxW: "5xl", mx: "auto", p: "4" })}>
      <Grid alignItems={"stretch"} gap="4" columns={12}>
        <GridItem colSpan={3}>
          <Box>
            <Heading element="h3" size="h3" className={css({ mb: "4" })}>
              Categories
            </Heading>

            <Suspense fallback={<p>Getting categories</p>}>
              <CategoryListWidget />
            </Suspense>
          </Box>
        </GridItem>

        <GridItem colSpan={9}>{children}</GridItem>
      </Grid>
    </div>
  );
}

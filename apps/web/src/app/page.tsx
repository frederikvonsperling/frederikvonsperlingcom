import { css } from "@styled-system/css";
import { Grid, GridItem } from "@styled-system/jsx";

import Box from "@ui/components/box";
import Container from "@ui/components/container";
import Heading from "@ui/components/heading";

import GithubIcon from "@/shared/icons/github-icon";

import CategoryListWidget from "@/widgets/tag/tag-list/tag-list.widget";

export default async function Page() {
  return (
    <Container>
      <Grid gap="4" columns={12} alignItems={"stretch"}>
        <GridItem colSpan={{ base: 12, sm: 4, md: 3 }}>
          <Box>
            <p
              dangerouslySetInnerHTML={{
                __html: `Hi there, I'm <b>Frederik von Sperling</b>, Frontend software
            developer based in Copenhagen, Denmark`,
              }}
            />
            <a
              href="https://github.com/frederikvonsperling"
              className={css({
                width: "8",
                display: "block",
                height: "8",
                mt: "4",
              })}
            >
              <GithubIcon />
            </a>
          </Box>
        </GridItem>

        <GridItem
          colStart={{ base: 1, sm: 5, md: 4 }}
          colEnd={{ base: 13, sm: 13, md: 13 }}
          rowStart={1}
          rowEnd={3}
        >
          <Box>Some articles will show here eventually</Box>
        </GridItem>

        <GridItem colSpan={{ base: 12, sm: 4, md: 3 }}>
          <Box>
            <Heading size="h3" element="h3" className={css({ mb: "4" })}>
              Categories
            </Heading>
            <CategoryListWidget />
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}

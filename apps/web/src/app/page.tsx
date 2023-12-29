import CategoryListWidget from "@/widgets/tag/tag-list/tag-list.widget";
import { grid, hstack, vstack } from "@styled-system/patterns";
import Heading from "@ui/components/heading/heading";
import { css } from "styled-system/css";

import GithubIcon from "@/shared/icons/github-icon";
import Box from "@/shared/components/box";
import { GridItem } from "@styled-system/jsx";

export default async function Page() {
  return (
    <div
      className={grid({
        gap: "4",
        maxW: "5xl",
        mx: "auto",
        p: "4",
        columns: 12,
      })}
    >
      <GridItem colSpan={3}>
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
        <Box className={css({ mt: "4" })}>
          <Heading size="h3" element="h3" className={css({ mb: "4" })}>
            Categories
          </Heading>
          <CategoryListWidget />
        </Box>
      </GridItem>

      <GridItem colSpan={9}>
        <Box className={css({})}>Some articles will show here eventually</Box>
      </GridItem>
    </div>
  );
}

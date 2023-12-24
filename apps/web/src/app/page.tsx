import CategoryListWidget from "@/widgets/category/category-list/category-list.widget";
import { hstack } from "@styled-system/patterns";
import Heading from "@ui/components/heading/heading";
import { css } from "styled-system/css";

import GithubIcon from "@/shared/icons/github-icon";

export default async function Page() {
  return (
    <div className={css({ maxW: "5xl", mx: "auto", p: "4" })}>
      <div className={hstack({ alignItems: "stretch", gap: "8" })}>
        <div
          className={css({
            flexBasis: "56",
            flexShrink: 0,
            flexGrow: 0,
          })}
        >
          <div>
            <p>
              Hi there, I'm <b>Frederik von Sperling</b>, Frontend software
              developer based in Copenhagen, Denmark
            </p>
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
          </div>
          <div className={css({ mt: "8" })}>
            <Heading size="h3" element="h3" className={css({ mb: "4" })}>
              Categories
            </Heading>
            <CategoryListWidget />
          </div>
        </div>
        <article className={css({ minW: "1" })}>
          Some articles will show here eventually
        </article>
      </div>
    </div>
  );
}

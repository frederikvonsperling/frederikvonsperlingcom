import Script from "next/script";

import { css } from "@styled-system/css";

/**
 * Github comments widget
 * https://utteranc.es/
 */
export default function ArticleCommentWidget() {
  return (
    <>
      <p className={css({ color: "white" })}>Hej</p>
      <Script
        src="https://utteranc.es/client.js"
        // @ts-expect-error - this is a valid prop for utterances
        repo="frederikvonsperling/frederikvonsperlingcom"
        issue-term="pathname"
        label="article"
        theme="github-dark"
        crossOrigin="anonymous"
        async
      />
    </>
  );
}

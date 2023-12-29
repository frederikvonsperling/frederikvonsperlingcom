"use client";

import { hstack } from "@styled-system/patterns";
import { HStack } from "@styled-system/jsx";
import tokens from "@ui/panda-preset/tokens";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import * as styles from "react-syntax-highlighter/dist/esm/styles/hljs";
import { css } from "styled-system/css";
import { match } from "ts-pattern";

type Props = {
  language: string;
  children: string;
  filename: string;
};

export default function CodeBlock({ language, children, filename }: Props) {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    setHasCopied(true);

    navigator.clipboard.writeText(children);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const icons = match(language)
    .with("tsx", () => (
      <>
        <i className="devicon-react-plain" />
      </>
    ))
    .otherwise(() => null);

  return (
    <div
      className={css({
        mb: "8",
        pos: "relative",
        border: "subtle",
        borderRadius: "md",
      })}
    >
      <HStack
        className={css({ py: "2", px: "4", justifyContent: "space-between" })}
      >
        <p className={hstack({})}>
          {icons}
          <span>{filename}</span>
        </p>
        <button
          onClick={handleCopy}
          className={css({
            fontFamily: "body",
            color: "white",
            fontSize: "sm",
            fontWeight: "normal",
            rounded: "sm",
            cursor: "pointer",
          })}
        >
          {hasCopied ? "Copied!" : "Copy"}
        </button>
      </HStack>
      <SyntaxHighlighter
        showLineNumbers={true}
        language={"typescript"}
        style={styles.stackoverflowDark}
        customStyle={{
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 20,
          paddingBottom: 20,
          background: tokens.colors.offWhite[50].value,
        }}
        codeTagProps={{
          style: {
            fontSize: 16,
            lineHeight: "normal",
            letterSpacing: "-0.05em",
            fontWeight: 400,
            fontFamily: "var(--font-family-source-code-pro)",
          },
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

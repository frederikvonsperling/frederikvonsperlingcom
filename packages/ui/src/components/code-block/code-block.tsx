"use client";

import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import * as styles from "react-syntax-highlighter/dist/esm/styles/hljs";
import { css } from "styled-system/css";

export default function CodeBlock({
  language,
  children,
}: {
  language: string;
  children: string;
}) {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    setHasCopied(true);

    navigator.clipboard.writeText(children);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <div
      className={css({
        mb: "8",
        pos: "relative",
      })}
    >
      <SyntaxHighlighter
        showLineNumbers={true}
        language={"typescript"}
        style={styles.stackoverflowDark}
        customStyle={{
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 20,
          paddingBottom: 20,
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

      <button
        onClick={handleCopy}
        className={css({
          fontFamily: "body",
          pos: "absolute",
          bottom: "2",
          right: "4",
          color: "white",
          px: "2",
          fontSize: "md",
          fontWeight: "bold",
          rounded: "sm",
          cursor: "pointer",
        })}
      >
        {hasCopied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

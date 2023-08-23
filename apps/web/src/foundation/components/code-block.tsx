"use client";

import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import * as styles from "react-syntax-highlighter/dist/esm/styles/hljs";
import { css } from "styled-system/css";

export const CodeBlock = ({
  language,
  children,
}: {
  language: string;
  children: string;
}) => {
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
        background: "#282c34",
        borderRadius: 5,
        overflow: "hidden",
        mb: 8,
        pos: "relative",
      })}
    >
      <div
        className={css({
          pos: "absolute",
          top: 2,
          textAlign: "right",
          right: 4,
          color: "white",
          fontFamily: "code",
          fontWeight: 600,
          fontSize: 14,
          opacity: 0.5,
        })}
      >
        {language === "typescript" && "tsx"}
      </div>
      <SyntaxHighlighter
        showLineNumbers={true}
        language={language}
        line
        style={styles?.atomOneDarkReasonable}
        customStyle={{
          background: "#282c34",
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 20,
          paddingBottom: 20,
        }}
        codeTagProps={{
          style: {
            fontSize: 16,
            lineHeight: "1.6em",
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
          pos: "absolute",
          bottom: 2,
          right: 4,
          bg: "cyan.400",
          px: 2,
          fontSize: 14,
          fontWeight: 600,
          rounded: "sm",
          cursor: "pointer",
          _hover: {
            bg: "cyan.500",
          },
          _active: {
            bg: "cyan.800",
          },
        })}
      >
        {hasCopied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

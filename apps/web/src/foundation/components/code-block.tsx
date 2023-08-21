"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import * as styles from "react-syntax-highlighter/dist/esm/styles/hljs";

export const CodeBlock = ({
  language,
  children,
}: {
  language: string;
  children: string;
}) => {
  return (
    <div
      style={{
        background: "#282c34",
        borderRadius: 5,
        overflow: "hidden",
      }}
    >
      <SyntaxHighlighter
        showLineNumbers={true}
        language={language}
        style={styles?.atomOneDarkReasonable}
        customStyle={{
          background: "#282c34",
          paddingLeft: 20,
          paddingRight: 20,
        }}
        codeTagProps={{
          style: {
            fontSize: 16,
            lineHeight: "1.8em",
            fontFamily: "var(--font-family-inconsolata)",
            fontWeight: 600,
          },
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

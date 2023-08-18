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
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <div style={{ width: "100%", height: 20, background: "lightgray" }}></div>
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
          },
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

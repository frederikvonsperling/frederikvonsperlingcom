import { PortableTextTypeComponentProps } from "@portabletext/react";
import CodeBlock from "@ui/components/code-block";
import language from "react-syntax-highlighter/dist/esm/languages/hljs/1c";

export default function CodeSnippetType({
  value,
}: PortableTextTypeComponentProps<{ language: string; code: string }>) {
  return <CodeBlock language={value.language}>{value.code}</CodeBlock>;
}

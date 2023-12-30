import { PortableTextTypeComponentProps } from "@portabletext/react";

import CodeBlock from "@ui/components/code-block";

type Properties = PortableTextTypeComponentProps<{
  language: string;
  code: string;
  filename: string;
}>;

export default function CodeSnippetType({ value }: Properties) {
  return (
    <CodeBlock filename={value.filename} language={value.language}>
      {value.code}
    </CodeBlock>
  );
}

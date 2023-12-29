import { PortableTextTypeComponentProps } from "@portabletext/react";
import CodeBlock from "@ui/components/code-block";

type Props = {
  language: string;
  code: string;
  filename: string;
};

export default function CodeSnippetType({
  value,
}: PortableTextTypeComponentProps<Props>) {
  return (
    <CodeBlock filename={value.filename} language={value.language}>
      {value.code}
    </CodeBlock>
  );
}

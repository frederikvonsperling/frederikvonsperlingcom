import { PortableTextMarkComponentProps } from "@portabletext/react";

import Code from "@ui/components/code";

type Properties = PortableTextMarkComponentProps<{ _type: "code" }>;

export default function CodeMark(properties: Properties) {
  return <Code {...properties} />;
}

import { PortableTextComponents } from "@portabletext/react";
import NormalBlock from "./normal.block";
import H2Block from "./h2.block";
import LinkMark from "./link.mark";
import CodeSnippetType from "./code-snippet.type";
import ImageType from "./image.type";
import CodeMark from "./code.mark";

export default {
  block: {
    normal: NormalBlock,
    h2: H2Block,
  },
  types: {
    "code-snippet": CodeSnippetType,
    image: ImageType,
  },
  marks: {
    code: CodeMark,
    link: LinkMark,
  },
} satisfies PortableTextComponents;

import { PortableTextComponents } from "@portabletext/react";

import CodeMark from "./code.mark";
import CodeSnippetType from "./code-snippet.type";
import H2Block from "./h2.block";
import H3Block from "./h3.block";
import ImageType from "./image.type";
import LinkMark from "./link.mark";
import NormalBlock from "./normal.block";

export default {
  block: {
    normal: NormalBlock,
    h2: H2Block,
    h3: H3Block,
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

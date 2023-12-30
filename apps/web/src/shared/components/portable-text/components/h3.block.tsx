import { PortableTextComponentProps, toPlainText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import slugify from "slugify";

import Heading from "@ui/components/heading";

import CopyUrl from "./copy-url";

type Properties = PortableTextComponentProps<PortableTextBlock>;

export default function H3Block({ children, value }: Properties) {
  const slug = slugify(toPlainText(value), { lower: true });

  return (
    <Heading id={slug} element="h3" size="h3">
      {children}
      <CopyUrl slug={slug} />
    </Heading>
  );
}

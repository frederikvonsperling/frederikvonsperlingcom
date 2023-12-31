import { PortableTextComponentProps, toPlainText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import slugify from "slugify";

import { css } from "@styled-system/css";

import Heading from "@ui/components/heading";

import CopyUrl from "./copy-url";

type Properties = PortableTextComponentProps<PortableTextBlock>;

export default function H2Block({ children, value }: Properties) {
  const slug = slugify(toPlainText(value), { lower: true });

  return (
    <Heading id={slug} element="h2" size="h2" className={css({ mb: "1" })}>
      {children}
      <CopyUrl slug={slug} />
    </Heading>
  );
}

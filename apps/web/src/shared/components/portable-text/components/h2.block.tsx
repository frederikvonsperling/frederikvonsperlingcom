import { css } from "@styled-system/css";
import { PortableTextComponentProps, toPlainText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import slugify from "slugify";
import CopyUrl from "./copy-url";

export default function H2Block({
  children,
  value,
}: PortableTextComponentProps<PortableTextBlock>) {
  const slug = slugify(toPlainText(value), { lower: true });

  return (
    <h2
      id={slug}
      className={css({
        fontSize: "2xl",
        fontFamily: "heading",
        fontWeight: "bold",
      })}
    >
      {children}
      <CopyUrl slug={slug} />
    </h2>
  );
}

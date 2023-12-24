import { css } from "@styled-system/css";
import { PortableTextComponentProps, toPlainText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import slugify from "slugify";
import CopyUrl from "./copy-url";

export default function H3Block({
  children,
  value,
}: PortableTextComponentProps<PortableTextBlock>) {
  const slug = slugify(toPlainText(value), { lower: true });

  return (
    <h3
      id={slug}
      className={css({
        fontSize: "xl",
        fontFamily: "heading",
        fontWeight: "bold",
      })}
    >
      {children}
      <CopyUrl slug={slug} />
    </h3>
  );
}

import { css } from "@styled-system/css";
import { PortableTextComponentProps } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

export default function NormalBlock({
  children,
}: PortableTextComponentProps<PortableTextBlock>) {
  return (
    <p
      className={css({
        fontSize: "md",
        fontFamily: "body",
        lineHeight: "relaxed",
        mb: "6",
      })}
    >
      {children}
    </p>
  );
}

import { PortableTextMarkComponentProps } from "@portabletext/react";
import { css } from "@styled-system/css";

export default function CodeMark({
  children,
}: PortableTextMarkComponentProps<{ _type: "code" }>) {
  return (
    <span
      className={css({
        display: "inline-block",
        bg: "darkGray",
        fontFamily: "code",
        fontSize: "md",
        px: "1",
      })}
    >
      {children}
    </span>
  );
}

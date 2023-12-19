import { css } from "@styled-system/css";
import { PortableTextMarkComponentProps } from "@portabletext/react";

export default function LinkMark({
  children,
  value,
}: PortableTextMarkComponentProps<{ _type: "link"; href: string }>) {
  return (
    <a
      className={css({ textDecoration: "underline" })}
      href={value?.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

import { PortableTextComponentProps } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

import { css } from "@styled-system/css";

import Body from "@ui/components/body";

type Properties = PortableTextComponentProps<PortableTextBlock>;

export default function NormalBlock({ children }: Properties) {
  return <Body className={css({ mb: "6" })}>{children}</Body>;
}

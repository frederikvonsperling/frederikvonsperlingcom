"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { css } from "@styled-system/css";
import { hstack } from "@styled-system/patterns";

type Props = {};

export const Header = ({}: Props) => {
  const pathname = usePathname();

  return (
    <div
      className={css({
        maxW: "3xl",
        mx: "auto",
        color: "white",
        px: "4",
        py: "8",
        mb: "10",
      })}
    >
      <div className={hstack({ justifyContent: "center" })}>
        <Link
          className={css({
            fontSize: "md",
            fontFamily: "heading",
            color: "white",
            fontWeight: "normal",
          })}
          href={"/articles"}
        >
          Articles
        </Link>
      </div>
    </div>
  );
};

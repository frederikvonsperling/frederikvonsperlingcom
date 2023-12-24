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
      className={hstack({
        maxW: "5xl",
        mx: "auto",
        color: "white",
        px: "4",
        py: "10",
      })}
    >
      <div className={css({ flex: "1", fontWeight: "bold" })}>
        Frederik von Sperling
      </div>
      <div
        className={hstack({ justifyContent: "center", flex: "1", gap: "8" })}
      >
        <Link
          className={css({
            fontSize: "md",
            color: "white",
            fontWeight: "normal",
          })}
          href={"/"}
        >
          Home
        </Link>
        <Link
          className={css({
            fontSize: "md",
            color: "white",
            fontWeight: "normal",
          })}
          href={"/articles"}
        >
          Articles
        </Link>
      </div>
      <div className={css({ flex: "1", textAlign: "right" })}>
        Imagine a cool search here
      </div>
    </div>
  );
};

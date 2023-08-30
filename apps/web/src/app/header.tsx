"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { css } from "styled-system/css";

type Props = {};

export const Header = ({}: Props) => {
  const pathname = usePathname();

  return (
    <div
      className={css({
        maxW: "3xl",
        mx: "auto",
        color: "white",
        px: 4,
        py: 8,
        mb: 10,
      })}
    >
      <div className={css({ display: "grid", gridTemplateColumns: "3" })}>
        <div>
          <Link
            href={"/"}
            className={css({
              rounded: "full",
              w: 10,
              h: 10,
              overflow: "hidden",
              display: "block",
            })}
          >
            <img src={"/frederikvonsperling.png"} />
          </Link>
        </div>
        <div
          className={css({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          })}
        >
          <Link
            className={css({
              fontSize: "lg",
              fontFamily: "body",
              color: pathname === "/blog" ? "blue" : "white",
              fontWeight: pathname === "/blog" ? "bold" : "normal",
            })}
            href={"/blog"}
          >
            Blog
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};

import Link from "next/link";
import { css } from "styled-system/css";
import { grid } from "styled-system/patterns";

type Props = {};

export const Header = ({}: Props) => {
  return (
    <div className={css({ maxW: "3xl", mx: "auto", color: "white", p: 4 })}>
      <div className={css({ display: "grid", gridTemplateColumns: "2" })}>
        <div>
          <Link href={"/"}>
            <p
              className={css({
                fontFamily: "code",
                display: "inline-block",
                px: 1,
                rounded: "sm",
                bgGradient: "to-r",
                gradientFrom: "red",
                gradientTo: "pink",
              })}
            >
              frederikvonsperling.com
            </p>
          </Link>
        </div>
        <div className={css({ display: "flex", justifyContent: "flex-end" })}>
          <Link className={css({ textDecoration: "underline" })} href={"/blog"}>
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

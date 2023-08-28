import Link from "next/link";
import { css } from "styled-system/css";
import { grid } from "styled-system/patterns";

type Props = {};

export const Header = ({}: Props) => {
  return (
    <div
      className={css({ maxW: "3xl", mx: "auto", color: "white", p: 4, mb: 10 })}
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
          <Link className={css({ fontFamily: "body" })} href={"/blog"}>
            Blog
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};

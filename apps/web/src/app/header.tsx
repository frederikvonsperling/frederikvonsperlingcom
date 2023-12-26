"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { css } from "@styled-system/css";
import { grid, hstack } from "@styled-system/patterns";
import Box from "@/shared/components/box";
import { GridItem } from "@styled-system/jsx";

type Props = {};

export const Header = ({}: Props) => {
  const pathname = usePathname();

  return (
    <div
      className={grid({
        maxW: "5xl",
        mx: "auto",
        color: "white",
        alignItems: "stretch",
        px: "4",
        pt: "4",
        gap: "4",
        columns: 12,
      })}
    >
      <GridItem colSpan={3}>
        <Box>
          <a href="/" className={css({ fontWeight: "bold" })}>
            Frederik von Sperling
          </a>
        </Box>
      </GridItem>

      <GridItem colSpan={9}>
        <Box
          className={hstack({
            justifyContent: "center",
          })}
        >
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
        </Box>
      </GridItem>
    </div>
  );
};

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { css, cva } from "@styled-system/css";
import { Grid, GridItem } from "@styled-system/jsx";
import { hstack } from "@styled-system/patterns";

import Box from "@ui/components/box";

const navItemStyles = cva({
  base: {
    fontSize: "md",
    color: "white",
    fontWeight: "normal",
    py: "1",
    px: "2",
  },
  variants: {
    isActive: {
      true: {
        backgroundColor: "offWhite.50",
        borderRadius: "md",
      },
    },
  },
});

export const Header = () => {
  const pathname = usePathname();
  return (
    <Grid
      maxW={"5xl"}
      mx={"auto"}
      color={"white"}
      alignItems={"stretch"}
      alignContent={"stretch"}
      px={"4"}
      gap={"4"}
      columns={12}
    >
      <GridItem colSpan={3}>
        <Box
          className={css({
            height: "full",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          })}
        >
          <a href="/" className={css({ fontWeight: "bold" })}>
            Frederik von Sperling
          </a>
        </Box>
      </GridItem>

      <GridItem colSpan={9}>
        <Box
          className={hstack({
            justifyContent: "center",
            height: "full",
          })}
        >
          <Link
            className={navItemStyles({ isActive: pathname === "/articles" })}
            href={"/articles"}
          >
            Articles
          </Link>
        </Box>
      </GridItem>
    </Grid>
  );
};

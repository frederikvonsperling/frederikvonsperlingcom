"use client";

import Link from "next/link";
import { css, cva } from "@styled-system/css";
import { grid, hstack } from "@styled-system/patterns";
import Box from "@/shared/components/box";
import { Grid, GridItem } from "@styled-system/jsx";
import { usePathname } from "next/navigation";

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

"use client";

import { Children } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { css, cva } from "@styled-system/css";
import { Grid, GridItem } from "@styled-system/jsx";
import { hstack } from "@styled-system/patterns";

import Box from "@ui/components/box";
import Container from "@ui/components/container/container";

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

type Properties = {
  children: React.ReactNode;
};

export function GridTest({ children }: Properties) {
  const childrenArray = Children.toArray(children);

  if (childrenArray.length !== 2) {
    throw new Error("GridTest requires exactly 2 children");
  }

  return (
    <Grid
      color={"white"}
      alignItems={"stretch"}
      alignContent={"stretch"}
      gap={"4"}
      columns={12}
    >
      <GridItem colSpan={{ base: 12, sm: 4, md: 3 }}>
        {childrenArray[0]}
      </GridItem>
      <GridItem colSpan={{ base: 12, sm: 8, md: 9 }}>
        {childrenArray[1]}
      </GridItem>
    </Grid>
  );
}

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav
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
    </nav>
  );
}

export const Header = () => {
  return (
    <Container>
      <GridTest>
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

        <Box>
          <Navigation />
        </Box>
      </GridTest>
    </Container>
  );
};

import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

import { css, cx } from "@styled-system/css";

import "@/shared/lib/environment-schema";
import "@/app/global.css";

import { ibmPlexSans, ibmPlexSansCondensed, sourceCodePro } from "./fonts";
import { Footer } from "./footer";
import { Header } from "./header";

export const metadata: Metadata = {
  title: {
    template: "%s | Frederik von Sperling",
    default: "La blog | Frederik von Sperling", // a default is required when creating a template
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cx(
        `${ibmPlexSans.variable} ${ibmPlexSansCondensed.variable} ${sourceCodePro.variable}`,
        css({ backgroundColor: "black" })
      )}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body
        className={css({
          w: "full",
        })}
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

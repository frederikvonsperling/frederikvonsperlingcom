import "./global.css";
import { sourceCodePro, ibmPlexSans, ibmPlexSansCondensed } from "./fonts";
import { Header } from "./header";
import { Footer } from "./footer";
import { css } from "@styled-system/css";
import { Metadata } from "next";
import "@/shared/lib/env-schema";

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
      className={`${ibmPlexSans.variable} ${ibmPlexSansCondensed.variable} ${sourceCodePro.variable}`}
      style={{ backgroundColor: "#000000" }}
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
          h: "full",
          minH: "screen",
          my: "4",
        })}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

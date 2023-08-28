import "./global.css";
import { ptSans, nunito, sourceCodePro } from "./fonts";
import { MaintenanceMode } from "./maintenance-mode";
import { Header } from "./header";
import { Footer } from "./footer";
import { css } from "@styled-system/css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Frederik von Sperling",
    default: "La blog | Frederik von Sperling", // a default is required when creating a template
  },
};

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${ptSans.variable} ${sourceCodePro.variable}`}
      style={{ backgroundColor: "#000000" }}
    >
      <body className={css({ w: "full", h: "full", minH: "screen" })}>
        <div
          className={css({
            w: "full",
            h: "full",
            overflow: "hidden",
            pos: "absolute",
            zIndex: -1,
          })}
        >
          <div
            className={css({
              width: 800,
              height: 800,
              bgGradient: "to-r",
              gradientFrom: "purple",
              gradientTo: "blue",
              rounded: "full",
              opacity: 0.2,
              pos: "absolute",
              top: "-40%",
              right: "10%",
              zIndex: -1,
              filter: "blur(100px)",
            })}
          />
          <div
            className={css({
              width: 400,
              height: 400,
              bgGradient: "to-r",
              gradientFrom: "yellow",
              gradientTo: "black",
              rounded: "full",
              opacity: 0.2,
              pos: "absolute",
              top: "-30%",
              right: "-10%",
              zIndex: -1,
              filter: "blur(100px)",
            })}
          />
        </div>
        <Header />
        <MaintenanceMode>{children}</MaintenanceMode>
        <Footer />
      </body>
    </html>
  );
};

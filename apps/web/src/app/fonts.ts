import {
  Nunito,
  PT_Sans,
  Source_Code_Pro,
  IBM_Plex_Sans_Condensed,
  IBM_Plex_Sans,
} from "next/font/google";

export const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-family-source-code-pro",
  weight: ["200", "300", "400", "600", "700", "800", "900"],
});

export const ibmPlexSansCondensed = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-family-ibm-plex-sans-condensed",
  weight: ["200", "300", "400", "600", "700"],
});

export const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-family-ibm-plex-sans",
  weight: ["200", "300", "400", "600", "700"],
});

export const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-family-nunito",
  weight: ["200", "300", "400", "600", "700", "800", "900"],
});

export const ptSans = PT_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-family-pt-sans",
  weight: ["400", "700"],
});

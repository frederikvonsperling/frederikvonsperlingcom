import { Nunito, PT_Sans, Source_Code_Pro } from "next/font/google";

export const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-family-source-code-pro",
  weight: ["200", "300", "400", "600", "700", "800", "900"],
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

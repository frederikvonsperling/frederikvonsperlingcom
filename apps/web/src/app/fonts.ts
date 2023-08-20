import { Oswald, Source_Sans_3 } from "next/font/google";

export const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-family-oswald",
  weight: ["200", "300", "400", "600", "700"],
});

export const sourceSerif = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-family-source-sans",
  weight: ["200", "300", "400", "600", "700", "800", "900"],
});

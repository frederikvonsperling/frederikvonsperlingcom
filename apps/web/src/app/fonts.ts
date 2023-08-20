import { Oswald, Source_Serif_4 } from "next/font/google";

export const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-family-oswald",
  weight: ["200", "300", "400", "600", "700"],
});

export const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-family-source-serif",
  weight: ["200", "300", "400", "600", "700", "800", "900"],
});

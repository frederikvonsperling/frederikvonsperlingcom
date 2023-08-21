import {
  Oswald,
  Source_Sans_3,
  Inconsolata,
  Source_Serif_4,
  Nunito,
  PT_Sans,
} from "next/font/google";

export const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-family-oswald",
  weight: ["200", "300", "400", "600", "700"],
});

export const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-family-source-sans",
  weight: ["200", "300", "400", "600", "700", "800", "900"],
});

export const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-family-source-serif",
  weight: ["200", "300", "400", "600", "700", "800", "900"],
});

export const inconsolata = Inconsolata({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-family-inconsolata",
  weight: ["200", "300", "400", "600", "700", "800", "900"],
});

export const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-family-nunito",
  weight: ["200", "300", "400", "600", "700", "800", "900"],
});

export const PTSans = PT_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-family-pt-sans",
  weight: ["400", "700"],
});

import { Oswald, Source_Serif_4 } from "next/font/google";
import './global.css';

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-family-oswald",
  weight: ["200", "300", "400", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-family-source-serif",
  weight: ["200", "300", "400", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${sourceSerif.variable}`}
      style={{ backgroundColor: "#0C0F0A" }}
    >
      <body>{children}</body>
    </html>
  );
}

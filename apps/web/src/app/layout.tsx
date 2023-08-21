import {
  inconsolata,
  oswald,
  sourceSerif,
  PTSans,
  nunito,
  sourceSans,
} from "./fonts";
import "./global.css";
import { MaintenanceMode } from "./maintenance-mode";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${PTSans.variable}`}
      style={{ backgroundColor: "#0C0F0A" }}
    >
      <body>
        <MaintenanceMode>{children}</MaintenanceMode>
      </body>
    </html>
  );
}

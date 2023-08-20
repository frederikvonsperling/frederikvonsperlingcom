import { oswald, sourceSerif } from "./fonts";
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
      className={`${oswald.variable} ${sourceSerif.variable}`}
      style={{ backgroundColor: "#0C0F0A" }}
    >
      <body>
        <MaintenanceMode>{children}</MaintenanceMode>
      </body>
    </html>
  );
}

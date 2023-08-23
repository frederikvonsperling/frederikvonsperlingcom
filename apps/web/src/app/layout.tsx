import "./global.css";
import { ptSans, nunito, sourceCodePro } from "./fonts";
import { MaintenanceMode } from "./maintenance-mode";
import { Header } from "./header";
import { Footer } from "./footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${ptSans.variable} ${sourceCodePro.variable}`}
      style={{ backgroundColor: "#121516" }}
    >
      <body>
        <Header />
        <MaintenanceMode>{children}</MaintenanceMode>
        <Footer />
      </body>
    </html>
  );
}

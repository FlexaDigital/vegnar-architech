import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { metadata } from "./config/metadata";
import { SectionProvider } from "./context/SectionContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
});

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        <SectionProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </SectionProvider>
      </body>
    </html>
  );
}

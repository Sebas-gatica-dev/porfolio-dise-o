import type { ReactNode } from "react";
import { Space_Grotesk } from "next/font/google";

import Footer from "@/components/Footer";
import IntroOverlay from "@/components/IntroOverlay";
import Navbar from "@/components/Navbar";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: ReactNode;
  modal: ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={spaceGrotesk.className}>
        <div className="site-shell">
          <IntroOverlay />
          <Navbar />
          <main className="site-main">
            {children}
            {modal}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

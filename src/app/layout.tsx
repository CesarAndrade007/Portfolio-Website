import NavBar from "../components/navbar";
import FooterContent from "../components/footer";
import '../styles/globals.css';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to my Portfolio Website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <NavBar />
        </header>

        <main>
          {children}
        </main>

        <footer>
          <FooterContent />
        </footer>
      </body>
    </html>
  );
}
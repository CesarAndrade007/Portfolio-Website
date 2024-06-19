import type { Metadata } from "next";
import NavBar from "../components/navbar";
import FooterContent from "../components/footer";

import '../styles/globals.css';
import { Inter } from "next/font/google";

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

        {children}

        <footer>
          <FooterContent />
        </footer>
      </body>
    </html>
  );
}

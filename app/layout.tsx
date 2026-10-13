
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
export const metadata: Metadata = {
  title: "WMMA Haiti — We Make Movies Academy",
  description:
    "Une académie créative en Haïti dédiée au cinéma, à la production musicale, au design graphique et à la création de contenu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

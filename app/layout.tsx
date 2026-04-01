import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio Artiste | Smove",
  description:
    "Portfolio musical premium pour présenter un artiste, son univers et ses plateformes officielles.",
  openGraph: {
    title: "Portfolio Artiste | Smove",
    description:
      "Une vitrine élégante et immersive pour artistes et musiciens, responsive et prête pour le multi-artistes.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

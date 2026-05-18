import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stanislas-couverture78.fr"),
  title: "Stanislas Couverture 78 | Artisan Couvreur en Yvelines | Devis Gratuit",
  description:
    "Artisan couvreur professionnel en Yvelines (78). Rénovation toiture, zinguerie, isolation, étanchéité, gouttières, nettoyage. Devis gratuit sous 48h. Garantie décennale 10 ans. Urgence 7j/7.",
  keywords: [
    "couvreur Yvelines",
    "couvreur 78",
    "rénovation toiture 78",
    "artisan couvreur Versailles",
    "toiture Yvelines",
    "zinguerie 78",
    "isolation toiture Yvelines",
    "devis couvreur 78",
  ],
  authors: [{ name: "Stanislas Couverture 78" }],
  openGraph: {
    title: "Stanislas Couverture 78 | Artisan Couvreur en Yvelines",
    description:
      "Artisan couvreur professionnel en Yvelines. Devis gratuit sous 48h, garantie décennale, urgence 7j/7.",
    type: "website",
    locale: "fr_FR",
    url: "https://stanislas-couverture78.fr",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://stanislas-couverture78.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${manrope.variable} scroll-smooth`}>
      <head>
        <meta name="geo.region" content="FR-78" />
        <meta name="geo.placename" content="Yvelines" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className="min-h-full antialiased bg-[var(--background)] text-[var(--foreground)]">
        {/* Top atmospheric blur fade */}
        <div
          className="fixed top-0 left-0 right-0 z-[45] pointer-events-none"
          style={{
            height: '100px',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            maskImage: 'linear-gradient(to bottom, black 0%, black 25%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 25%, transparent 100%)',
          }}
        />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Schema from "./components/Schema";
import StickyCTA from "./components/StickyCTA";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "KI Werbeagentur Österreich | Profitabler durch Webseiten, Landingpages & Automatisierung",
  description: "Österreichs Nr. 1 KI-Werbeagentur für KMU. Wir erstellen moderne Webseiten, verkaufsstarke Landingpages und machen Sie durch SEO & GEO zum Kundenmagneten.",
  keywords: ["Werbeagentur Niederösterreich", "KI Werbeagentur Österreich", "SEO Seitenstetten", "GEO Marketing", "Webseite erstellen lassen KMU", "Landingpage erstellen lassen", "Website", "Prozessautomatisierung für Unternehmen"],
  authors: [{ name: "Andi Sturm" }],
  creator: "Andi Sturm",
  publisher: "BrainStorm Werbeagentur",
  openGraph: {
    title: "KI Werbeagentur Österreich | Webseiten, Landingpages & SEO",
    description: "Wir erstellen moderne Webseiten, verkaufsstarke Landingpages und automatisierte KI-Lösungen für maximale Sichtbarkeit und Effizienz Ihrer KMU.",
    url: "https://ki-marketingagentur.jetzt",
    siteName: "BrainStorm Werbeagentur",
    locale: "de_AT",
    type: "website",
    images: ["https://ki-marketingagentur.jetzt/bilder/logo.png"],
  },
  alternates: {
    canonical: "https://ki-marketingagentur.jetzt",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrainStorm KI | Web & KI aus Seitenstetten",
    description: "Professionelle Webseiten und KI-Lösungen für maximale Sichtbarkeit Ihrer KMU.",
    creator: "@andi_sturm",
    images: ["https://ki-marketingagentur.jetzt/bilder/logo.png"],
  },
  icons: {
    icon: "/bilder/logo.png",
    shortcut: "/bilder/logo.png",
    apple: "/bilder/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth" suppressHydrationWarning={true}>
      <body
        className={`${outfit.variable} font-sans antialiased text-gray-900 bg-white`}
        suppressHydrationWarning={true}
      >
        <Schema />
        {children}
        <StickyCTA />
      </body>
    </html>
  );
}

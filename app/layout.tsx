import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Schema from "./components/Schema";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "BrainStorm KI: Smarte Webseiten & Apps für KMU Österreich",
  description: "Österreichs führende KI-Werbeagentur für KMU. Wir verwandeln Ihre digitale Präsenz in einen Kundenmagneten mit SEO, GEO & Automatisierung.",
  keywords: ["Werbeagentur Niederösterreich", "KI Werbeagentur Österreich", "SEO Seitenstetten", "GEO Marketing", "Website erstellen lassen KMU", "Generative Engine Optimization", "Prozessautomatisierung für Unternehmen"],
  authors: [{ name: "Andi Sturm" }],
  creator: "Andi Sturm",
  publisher: "BrainStorm Werbeagentur",
  openGraph: {
    title: "BrainStorm KI Werbeagentur | Web & KI aus Seitenstetten",
    description: "Professionelle Webseiten und KI-Lösungen für maximale Sichtbarkeit und Effizienz Ihrer KMU.",
    url: "https://brainstorm-werbeagentur.at",
    siteName: "BrainStorm Werbeagentur",
    locale: "de_AT",
    type: "website",
    images: ["https://brainstorm-werbeagentur.at/bilder/logo.png"],
  },
  alternates: {
    canonical: "https://brainstorm-werbeagentur.at",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrainStorm KI | Web & KI aus Seitenstetten",
    description: "Professionelle Webseiten und KI-Lösungen für maximale Sichtbarkeit Ihrer KMU.",
    creator: "@andi_sturm",
    images: ["https://brainstorm-werbeagentur.at/bilder/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
      </body>
    </html>
  );
}

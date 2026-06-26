import type { Metadata } from "next";
import { Playfair_Display, Inter, Vollkorn } from "next/font/google";
import "./globals.css";
import Schema from "./components/Schema";
import StickyCTA from "./components/StickyCTA";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", weight: ["400", "500", "600", "700", "800", "900"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["400", "500", "600", "700", "800"] });
const vollkorn = Vollkorn({ subsets: ["latin"], variable: "--font-vollkorn", weight: ["400", "500", "600", "700", "800", "900"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: "BrainStorm KI | Werbeagentur & SEO Agentur Niederösterreich",
  description: "Moderne Webseiten, SEO & KI-Automatisierung für KMUs in Niederösterreich. Live in 5-7 Tagen. Jetzt kostenlosen Webseiten-Check sichern!",
  keywords: ["werbeagentur", "web agentur", "webagentur", "werbeagentur website", "seo agentur niederösterreich", "suchmaschinenoptimierung niederösterreich", "website werbeagentur", "KI Werbeagentur Österreich", "Webseite erstellen lassen KMU", "SEO Seitenstetten", "GEO Marketing"],
  authors: [{ name: "Andreas Sturm" }],
  creator: "Andreas Sturm",
  publisher: "BrainStorm Werbeagentur",
  openGraph: {
    title: "BrainStorm KI | Werbeagentur & SEO Agentur Niederösterreich",
    description: "Moderne Webseiten, SEO & KI-Automatisierung für KMUs in Niederösterreich. Live in 5-7 Tagen. Jetzt kostenlosen Webseiten-Check sichern!",
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
    title: "BrainStorm KI | Werbeagentur & SEO Agentur Niederösterreich",
    description: "Moderne Webseiten, SEO & KI-Automatisierung für KMUs. Live in 5-7 Tagen.",
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
        className={`${playfair.variable} ${inter.variable} ${vollkorn.variable} font-sans antialiased text-[#1C1C1C] bg-[#F5EFE6]`}
        suppressHydrationWarning={true}
      >
        {/* #23: Skip Navigation für Barrierefreiheit (BFSG / WCAG 2.1) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#F7C429] focus:text-[#1C1C1C] focus:font-bold focus:rounded-lg focus:shadow-lg"
        >
          Zum Hauptinhalt springen
        </a>
        <Schema />
        {children}
        <StickyCTA />
      </body>
    </html>
  );
}

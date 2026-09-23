import type { Metadata } from "next";
import { Playfair_Display, Inter, Vollkorn } from "next/font/google";
import "./globals.css";
import Schema from "./components/Schema";
import StickyCTA from "./components/StickyCTA";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", weight: ["400", "500", "600", "700", "800", "900"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["400", "500", "600", "700", "800"] });
const vollkorn = Vollkorn({ subsets: ["latin"], variable: "--font-vollkorn", weight: ["400", "500", "600", "700", "800", "900"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: "BrainStorm KI | Werbeagentur, SEO & Social Recruiting Niederösterreich",
  description: "Moderne Webseiten, Social Recruiting & Mitarbeitergewinnung, SEO/GEO & KI-Automatisierung für KMUs im Mostviertel & Niederösterreich. Live in 5-7 Tagen. Jetzt kostenlosen Webseiten-Check sichern!",
  keywords: [
    // Werbeagentur & Webdesign
    "werbeagentur",
    "web agentur",
    "webagentur",
    "werbeagentur website",
    "website werbeagentur",
    "werbeagentur niederösterreich",
    "webdesign niederösterreich",
    "homepage erstellen lassen niederösterreich",
    "webseite erstellen lassen kmu",
    "webdesign mostviertel",
    "webdesigner seitenstetten",
    "verkaufsstarke landingpage",
    "sprint webseite 7 tage",
    "barrierefreie website bfsg österreich",

    // Social Recruiting & Mitarbeitergewinnung
    "social recruiting",
    "social recruiting österreich",
    "social recruiting handwerk",
    "mitarbeitergewinnung kmu",
    "mitarbeiter finden niederösterreich",
    "social recruiting mostviertel",
    "fachkräfte finden handwerk",
    "recruiting agentur niederösterreich",
    "bewerber finden ohne ams willhaben",
    "60 sekunden bewerbung handwerk",

    // SEO, GEO & KI-Suche (AIO)
    "seo agentur niederösterreich",
    "suchmaschinenoptimierung niederösterreich",
    "seo mostviertel",
    "seo seitenstetten",
    "seo agentur amstetten",
    "local seo google maps",
    "google maps optimieren mostviertel",
    "geo marketing",
    "generative engine optimization österreich",
    "chatgpt optimierung österreich",
    "ki suche ranking",
    "perplexity optimierung",

    // KI-Automatisierung & Lead-Gen
    "ki werbeagentur österreich",
    "ki agentur niederösterreich",
    "ki prozessautomatisierung kmu",
    "terminbuchung automatisieren",
    "lead funnels kmu",
    "kunden gewinnen autopilot",

    // Social Media & Kampagnen
    "social media agentur mostviertel",
    "social media betreuung kmu",
    "meta ads agentur niederösterreich",
    "google ads agentur amstetten",
    "online marketing mostviertel",

    // Regionale Standorte & Mostviertel
    "werbeagentur mostviertel",
    "werbeagentur seitenstetten",
    "werbeagentur amstetten",
    "werbeagentur steyr",
    "werbeagentur linz",
    "werbeagentur perg",
    "werbeagentur st pölten",
    "werbeagentur waidhofen ybbs",
    "werbeagentur haag"
  ],
  authors: [{ name: "Andreas Sturm" }],
  creator: "Andreas Sturm",
  publisher: "BrainStorm Werbeagentur",
  openGraph: {
    title: "BrainStorm KI | Werbeagentur, SEO & Social Recruiting Niederösterreich",
    description: "Moderne Webseiten, Social Recruiting & Mitarbeitergewinnung, SEO/GEO & KI-Automatisierung für KMUs im Mostviertel & Niederösterreich. Live in 5-7 Tagen.",
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
    title: "BrainStorm KI | Werbeagentur, SEO & Social Recruiting Niederösterreich",
    description: "Moderne Webseiten, Social Recruiting, SEO/GEO & KI-Automatisierung für KMUs. Live in 5-7 Tagen.",
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
  other: {
    "geo.region": "AT-3",
    "geo.placename": "Seitenstetten, Mostviertel, Niederösterreich",
    "geo.position": "48.0353;14.6534",
    "ICBM": "48.0353, 14.6534",
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

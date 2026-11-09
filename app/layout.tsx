import type { Metadata } from "next";
import { Playfair_Display, Inter, Vollkorn } from "next/font/google";
import "./globals.css";
import Schema from "./components/Schema";
import StickyCTA from "./components/StickyCTA";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", weight: ["400", "500", "600", "700", "800", "900"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["400", "500", "600", "700", "800"] });
const vollkorn = Vollkorn({ subsets: ["latin"], variable: "--font-vollkorn", weight: ["400", "500", "600", "700", "800", "900"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: "BrainStorm KI | Werbeagentur, Webseite, Landingpage, SEO & KI",
  description: "Moderne Webseiten, verkaufsstarke Landingpages, Social Recruiting, Suchmaschinenoptimierung (SEO), GEO & KI-Automatisierung für KMUs in Amstetten, Steyr, Linz, Perg, St. Pölten, Salzburg & Wien. Live in 5-7 Tagen!",
  keywords: [
    // Werbeagentur, Webseite & Landingpage
    "werbeagentur",
    "web agentur",
    "webagentur",
    "werbeagentur website",
    "website werbeagentur",
    "webseite erstellen lassen",
    "landingpage erstellen lassen",
    "landingpage agentur",
    "verkaufsstarke landingpage",
    "sprint webseite 7 tage",
    "homepage erstellen lassen niederösterreich",
    "webseite erstellen lassen kmu",
    "werbeagentur niederösterreich",
    "webdesign niederösterreich",
    "webdesign oberösterreich",
    "webdesign mostviertel",
    "webdesigner seitenstetten",
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

    // SEO, Suchmaschinenoptimierung, GEO & KI-Suche (AIO)
    "suchmaschinenoptimierung",
    "suchmaschinenoptimierung österreich",
    "suchmaschinenoptimierung niederösterreich",
    "suchmaschinenoptimierung oberösterreich",
    "seo agentur niederösterreich",
    "seo agentur oberösterreich",
    "seo mostviertel",
    "seo seitenstetten",
    "seo agentur amstetten",
    "seo agentur steyr",
    "seo agentur linz",
    "seo agentur perg",
    "seo agentur st pölten",
    "seo agentur salzburg",
    "seo agentur wien",
    "local seo google maps",
    "google maps optimieren mostviertel",
    "geo marketing",
    "generative engine optimization österreich",
    "chatgpt optimierung österreich",
    "ki suche optimierung",
    "ki suche ranking",
    "perplexity optimierung",

    // KI-Automatisierung & KI-Werbeagentur
    "ki werbeagentur österreich",
    "ki agentur niederösterreich",
    "ki agentur oberösterreich",
    "ki webseite erstellen",
    "ki landingpage",
    "ki suchmaschinenoptimierung",
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

    // Regionale Standorte (Amstetten, Steyr, Linz, Perg, St. Pölten, Salzburg, Wien)
    "werbeagentur mostviertel",
    "werbeagentur seitenstetten",
    "werbeagentur amstetten",
    "webseite amstetten",
    "landingpage amstetten",
    "suchmaschinenoptimierung amstetten",
    "werbeagentur steyr",
    "webseite steyr",
    "landingpage steyr",
    "suchmaschinenoptimierung steyr",
    "werbeagentur linz",
    "webseite linz",
    "landingpage linz",
    "suchmaschinenoptimierung linz",
    "werbeagentur perg",
    "webseite perg",
    "landingpage perg",
    "suchmaschinenoptimierung perg",
    "werbeagentur st pölten",
    "webseite st pölten",
    "landingpage st pölten",
    "suchmaschinenoptimierung st pölten",
    "werbeagentur salzburg",
    "webseite salzburg",
    "landingpage salzburg",
    "suchmaschinenoptimierung salzburg",
    "werbeagentur wien",
    "webseite wien",
    "landingpage wien",
    "suchmaschinenoptimierung wien",
    "werbeagentur waidhofen ybbs",
    "werbeagentur haag"
  ],
  authors: [{ name: "Andreas Sturm" }],
  creator: "Andreas Sturm",
  publisher: "BrainStorm Werbeagentur",
  openGraph: {
    title: "BrainStorm KI | Werbeagentur, Webseite, Landingpage, SEO & KI",
    description: "Moderne Webseiten, verkaufsstarke Landingpages, Social Recruiting, SEO/GEO & KI-Automatisierung für KMUs im Mostviertel, NÖ, OÖ, Salzburg & Wien. Live in 5-7 Tagen.",
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
    title: "BrainStorm KI | Werbeagentur, Webseite, Landingpage, SEO & KI",
    description: "Moderne Webseiten, Landingpages, Social Recruiting, SEO/GEO & KI-Automatisierung für KMUs. Live in 5-7 Tagen.",
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

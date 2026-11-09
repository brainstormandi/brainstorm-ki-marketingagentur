import { Metadata } from 'next';
import { ArrowRight, MapPin, Building2, TrendingUp, Handshake, Globe, Monitor, Rocket, Star, CheckCircle2, Quote, ExternalLink, ShieldCheck, Trophy, Brain, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import IndustryMarquee from '../components/IndustryMarquee';
import { AIAssistant, Contact } from './DynamicComponents';
import LinzFAQ from './LinzFAQ';
import { GOOGLE_REVIEW_LINK } from '../constants';

export const metadata: Metadata = {
  title: "Werbeagentur Linz | Webseite, Landingpage, SEO & KI-Marketing",
  description: "Deine KI-Werbeagentur für den Wirtschaftsraum Linz & OÖ. Wir kreieren Business-Webseiten, verkaufsstarke Landingpages, Suchmaschinenoptimierung (SEO) und GEO, die Besucher in Kunden und Fachkräfte verwandeln.",
  keywords: [
    "werbeagentur linz",
    "webseite linz",
    "landingpage linz",
    "landingpage erstellen lassen linz",
    "webdesign linz",
    "homepage linz",
    "webseite erstellen lassen linz",
    "homepage erstellen lassen linz",
    "webagentur linz",
    "seo agentur linz",
    "suchmaschinenoptimierung linz",
    "seo linz",
    "geo linz",
    "ki suche linz",
    "ki werbeagentur linz",
    "ki agentur linz",
    "social recruiting linz",
    "mitarbeitergewinnung linz",
    "online marketing linz",
    "werbeagentur oberösterreich",
    "werbeagentur linz-land"
  ],
  openGraph: {
    title: "Werbeagentur Linz | Webseite, Landingpage, SEO & KI-Marketing",
    description: "Deine KI-Webagentur für den Wirtschaftsraum Linz. Business-Webseiten, Landingpages, Suchmaschinenoptimierung (SEO) und KI-Suche (GEO).",
    url: "https://ki-marketingagentur.jetzt/werbeagentur-linz",
    siteName: "BrainStorm KI Werbeagentur",
    locale: "de_AT",
    type: "website",
    images: ["https://ki-marketingagentur.jetzt/bilder/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Werbeagentur Linz | Webseite, Landingpage, SEO & KI-Marketing",
    description: "Webseiten, Landingpages, SEO, GEO & KI-Marketing für Linz & Oberösterreich.",
    images: ["https://ki-marketingagentur.jetzt/bilder/logo.png"],
  },
  alternates: {
    canonical: "https://ki-marketingagentur.jetzt/werbeagentur-linz",
  },
  other: {
    "geo.region": "AT-4",
    "geo.placename": "Linz, Oberösterreich",
    "geo.position": "48.3069;14.2858",
    "ICBM": "48.3069, 14.2858",
  },
};

const LINZ_SCHEMA_FAQS = [
  {
    question: "Warum BrainStorm KI statt einer lokalen Linzer Werbeagentur?",
    answer: "In Linz gibt es viele klassische Agenturen. Was uns unterscheidet, ist die konsequente Einbindung von künstlicher Intelligenz in den Webdesign-Prozess. Dadurch sind wir nicht nur schneller, sondern bauen Homepages, die bei Google extrem gut ranken und durch konvertierungsoptimerte Texte mehr Anfragen generieren als klassische Websites."
  },
  {
    question: "Wo liegt der Schwerpunkt deiner Webprojekte im Raum Linz?",
    answer: "Wir betreuen vom hochspezialisierten KMU in der Linzer Industriezeile bis hin zum modernen Dienstleister in Urfahr. Jeder Betrieb braucht heute eine digitale Infrastruktur, die Leads qualifiziert und Mitarbeiter anzieht. Genau das bauen wir."
  },
  {
    question: "Bietest du auch regelmäßige Vor-Ort-Meetings im Zentralraum OÖ?",
    answer: "Ja. Dank unserer Nähe (aus dem Mostviertel via A1) sind wir rasch in Linz. Viele unserer Kunden schätzen die Kombination aus effizienten Video-Calls für das Tagesgeschäft und strategischen, tiefgreifenden Terminen direkt an deren Firmenstandort."
  },
  {
    question: "Was bringt mir eine KI-Agentur bei der Suche nach Fachkräften in Linz?",
    answer: "Der Fachkräftemangel in Linz ist massiv. Wir konzipieren dezidierte Recruiting-Funnel und Karriere-Websites. Durch psychologisch fundiertes Copwriting und moderne Bewerbungsprozesse (z.B. One-Click-Bewerber-Bots) holen wir deine Traumkandidaten direkt auf dein Smartphone."
  }
];

export default function WerbeagenturLinz() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AdvertisingAgency", "ProfessionalService"],
    "name": "BrainStorm KI Werbeagentur, Webdesign & SEO Linz",
    "alternateName": [
      "Werbeagentur Linz",
      "Webagentur Linz",
      "SEO Agentur Linz",
      "KI Werbeagentur Linz"
    ],
    "image": "https://ki-marketingagentur.jetzt/bilder/logo.png",
    "@id": "https://ki-marketingagentur.jetzt/werbeagentur-linz#localbusiness",
    "url": "https://ki-marketingagentur.jetzt/werbeagentur-linz",
    "telephone": "+43 660 520 3171",
    "email": "info@brainstorm-werbeagentur.at",
    "priceRange": "€€",
    "parentOrganization": {
      "@id": "https://ki-marketingagentur.jetzt/#organization"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Am Ziegelfeld 8",
      "addressLocality": "Seitenstetten",
      "postalCode": "3353",
      "addressRegion": "Niederösterreich",
      "addressCountry": "AT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.3069,
      "longitude": 14.2858
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Linz",
        "postalCode": "4020",
        "sameAs": "https://www.wikidata.org/wiki/Q41329"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Bezirk Linz-Land",
        "sameAs": "https://www.wikidata.org/wiki/Q256862"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Oberösterreich",
        "sameAs": "https://www.wikidata.org/wiki/Q41967"
      }
    ],
    "knowsAbout": [
      "Werbeagentur Linz",
      "Webseite Linz",
      "Landingpage Linz",
      "Webdesign Linz",
      "Homepage erstellen Linz",
      "Suchmaschinenoptimierung (SEO) Linz",
      "Generative Engine Optimization (GEO) Linz",
      "KI-Suche Optimierung (ChatGPT, Perplexity, Gemini)",
      "KI-Marketing & Prozessautomatisierung Linz",
      "Social Recruiting & Mitarbeitergewinnung Linz"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Leistungen für Unternehmen in Linz & Oberösterreich",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Webseite & Landingpage erstellen lassen in Linz",
            "description": "High-Performance Business-Webseiten und verkaufsstarke Landingpages für den Wirtschaftsraum Linz in 5-7 Tagen."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Suchmaschinenoptimierung (SEO) & KI-Suche (GEO) Linz",
            "description": "Platz 1 Optimierung für Google Suche, Google Maps und KI-Suchmaschinen (ChatGPT, Perplexity, Claude, Gemini) in Linz."
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1",
      "url": "https://share.google/8UoKWrgoWbfFIPX"
    }
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://ki-marketingagentur.jetzt/werbeagentur-linz#webpage",
    "url": "https://ki-marketingagentur.jetzt/werbeagentur-linz",
    "name": "Werbeagentur Linz | Webseite, Landingpage, SEO & KI-Marketing",
    "description": "Deine KI-Werbeagentur für den Wirtschaftsraum Linz. Business-Webseiten, verkaufsstarke Landingpages, Suchmaschinenoptimierung (SEO) und GEO.",
    "inLanguage": "de-AT",
    "isPartOf": {
      "@id": "https://ki-marketingagentur.jetzt/#website"
    },
    "about": {
      "@id": "https://ki-marketingagentur.jetzt/werbeagentur-linz#localbusiness"
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", "p"]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": LINZ_SCHEMA_FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Startseite",
        "item": "https://ki-marketingagentur.jetzt/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Werbeagentur Linz",
        "item": "https://ki-marketingagentur.jetzt/werbeagentur-linz"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F5EFE6] text-[#1C1C1C]">
      <Navbar />
      <main>
        <section className="relative min-h-screen flex items-center overflow-hidden pt-32 sm:pt-28 pb-20">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-hidden="true"
                    className="w-full h-full object-cover scale-[1.25] object-[30%_center] md:object-[0%_center]"
                >
                    <source src="/video/ki-werbeagentur-brainstorm-hero-video.mp4" type="video/mp4" />
                </video>
                {/* Clean Horizontal Blending Gradient */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #F5EFE6 0%, #F5EFE6 30%, rgba(245, 239, 230, 0.95) 45%, rgba(245, 239, 230, 0.6) 70%, transparent 100%)' }} />
                {/* Gentle Bottom Fade */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(245, 239, 230, 0.6) 0%, rgba(245, 239, 230, 0) 15%, rgba(245, 239, 230, 0) 75%, #F5EFE6 100%)' }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="max-w-2xl xl:max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm text-[#1C1C1C] font-bold text-xs mb-6 sm:mb-8 uppercase tracking-widest border border-[#1C1C1C]/10 shadow-sm animate-reveal-down">
                        <MapPin className="w-4 h-4 text-[#F7C429]" />
                        Webdesign & KI-Marketing für Linz
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-[var(--font-vollkorn)] font-medium text-[#1C1C1C] tracking-tight leading-[1.05] mb-6 animate-reveal-up">
                       Premium Webdesign <br />
                       <span className="text-[#F7C429] relative inline-block">
                           für Linz & OÖ
                           <span className="absolute bottom-[10%] left-0 right-0 h-[25%] bg-[#F7C429]/20 -z-10 skew-x-[-15deg]" />
                       </span>
                    </h1>

                    <p className="font-[var(--font-inter)] text-[#111827] text-lg leading-relaxed max-w-lg mb-8 animate-reveal-up reveal-delay-200">
                       Von der Industriezeile bis Urfahr: Wir bauen hochmoderne Homepages, die für deine digitale Sichtbarkeit am OÖ-Markt den Unterschied machen.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-10 animate-reveal-up reveal-delay-300">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/60 shadow-sm text-[#1C1C1C]/80 font-bold text-[13px] sm:text-sm">
                            <Globe className="w-5 h-5 text-[#F7C429]" />
                            <span>Konvertierende Landingpages</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/60 shadow-sm text-[#1C1C1C]/80 font-bold text-[13px] sm:text-sm">
                            <Monitor className="w-5 h-5 text-[#F7C429]" />
                            <span>B2B Webseiten</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/60 shadow-sm text-[#1C1C1C]/80 font-bold text-[13px] sm:text-sm">
                            <Rocket className="w-5 h-5 text-[#F7C429]" />
                            <span>Local SEO Leads</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 animate-reveal-up reveal-delay-500">
                         <a href="#contact" className="btn-primary py-4 px-8 group">
                             Projekt in Linz starten
                             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                         </a>
                    </div>

                    <div className="mt-14 flex flex-wrap items-center gap-6 sm:gap-10 animate-reveal-up reveal-delay-600">
                        <a href={GOOGLE_REVIEW_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 group">
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, s) => (
                                    <Star key={s} className="w-4 h-4 fill-[#F7C429] text-[#F7C429]" />
                                ))}
                            </div>
                            <span className="text-sm font-bold text-[#1C1C1C] group-hover:text-[#F7C429] transition-colors">
                                <strong>5.0</strong> Google-Rating
                            </span>
                        </a>
                        <div className="w-px h-4 bg-gray-300 hidden sm:block"></div>
                        <div className="flex items-center gap-2 text-[13px] font-semibold text-[#1C1C1C]/90">
                            <ShieldCheck className="w-4 h-4 text-[#F7C429]" />
                            100% DSGVO
                        </div>
                        <div className="flex items-center gap-2 text-[13px] font-semibold text-[#1C1C1C]/90">
                            <Trophy className="w-4 h-4 text-[#F7C429]" />
                            32 Jahre Erfahrung
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-20 bg-[#EDE7DB] border-y border-[#1C1C1C]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#F7C429]/10 text-[#F7C429] font-bold text-[10px] uppercase tracking-widest mb-4 border border-accent/20">
                            Digital Growth
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-[#1C1C1C] tracking-tight leading-tight mb-6">
                            BrainStorm <br className="hidden sm:block" />
                            <span className="text-transparent text-[#1C1C1C]">Webagentur für Linz</span>
                        </h2>
                        <p className="text-[#1C1C1C]/70 text-lg leading-relaxed mb-8 font-[var(--font-inter)]">
                            Wir wissen, was der oberösterreichische Zentralraum braucht: Verlässlichkeit, Schnelligkeit und ein digitales Branding, das Vertrauen ausstrahlt.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { title: "B2B Fokus", desc: "Spezialisiert auf anspruchsvolle Kunden im Linzer Wirtschaftsraum.", icon: <Building2 className="w-5 h-5 text-[#F7C429]" /> },
                            { title: "Page Speed", desc: "Ultraschnelle Ladezeiten als massives SEO-Doping für Google.", icon: <Zap className="w-5 h-5 text-[#F7C429]" /> },
                            { title: "KI-Texte", desc: "Verkaufspsychologisch optimierte Inhalte statt leerer Phrasen.", icon: <Brain className="w-5 h-5 text-[#F7C429]" /> },
                            { title: "Support", desc: "Nahtlose Kommunikation über Video-Calls oder Vor-Ort.", icon: <Handshake className="w-5 h-5 text-[#F7C429]" /> },
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-white rounded-2xl border border-[#1C1C1C]/10 shadow-sm hover:border-accent/30 transition-colors group">
                                <div className="w-10 h-10 rounded-xl bg-[#F5EFE6] flex items-center justify-center mb-4 group-hover:bg-[#F7C429]/10 transition-colors">
                                    {item.icon}
                                </div>
                                <h4 className="font-bold text-[#1C1C1C] mb-2">{item.title}</h4>
                                <p className="text-sm text-[#1C1C1C]/60 leading-relaxed font-[var(--font-inter)]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        <section className="py-24 bg-[#F5EFE6] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <ScrollReveal animation="reveal-right">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C1C1C] tracking-tight leading-[1.1] py-1 mb-8">
<span className="font-sans block">deine Online-Auslage </span>
<span className="font-sans block text-transparent text-[#1C1C1C] pb-2">in der Stahlstadt</span>
</h2>
                  <p className="font-[var(--font-inter)] text-[#111827] text-lg leading-relaxed mb-6">
                     Linz ist ein Knotenpunkt für Innovation und Technologie. Sich hier digital zu behaupten, erfordert mehr als nette Bilder. Es erfordert eine intelligente, zielgerichtete Web-Infrastruktur, die aus puren Webseitenbesuchern tatsächliche Anfragen macht.
                  </p>
                  <p className="font-[var(--font-inter)] text-[#111827] text-lg leading-relaxed mb-8">
                     Über die A1 sind wir rasch in Linz vor Ort. Wir wissen, was der oberösterreichische Zentralraum braucht: Verlässlichkeit, Schnelligkeit und ein digitales Branding, das Vertrauen ausstrahlt. Ob KI-Integrationen, Recruting-Landingpages oder der komplette Relaunch deiner Unternehmenswebsite – wir sind dein starker Umsetzungspartner.
                  </p>
                  
                  <div className="flex flex-col gap-4 mb-10">
                     <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-[#F7C429]/20 border border-accent/30 flex items-center justify-center shrink-0">
                           <TrendingUp className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                           <h4 className="font-bold text-[#1C1C1C] text-lg font-sans">Konvertierendes Webdesign</h4>
                           <span className="font-[var(--font-inter)] text-[#111827] text-sm">Psychologisch durchdachte Nutzerführung (UX/UI).</span>
                        </div>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-[#F7C429]/20 border border-accent/30 flex items-center justify-center shrink-0">
                           <Globe className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                           <h4 className="font-bold text-[#1C1C1C] text-lg font-sans">Regionale Dominanz</h4>
                           <span className="font-[var(--font-inter)] text-[#111827] text-sm">Präzises Geo-SEO für Top-Platzierungen im Linzer Suchraum.</span>
                        </div>
                     </div>
                  </div>
               </ScrollReveal>

               <ScrollReveal animation="reveal-left" delay={200}>
                  <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#1C1C1C]/10 shadow-sm relative">
                     <Quote className="w-16 h-16 text-[#F7C429]/20 absolute top-6 right-8 rotate-180" />
                     
                     <div className="flex items-center gap-4 mb-6">
                         <div className="w-20 h-20 rounded-full bg-[#EDE7DB] overflow-hidden shrink-0 border-4 border-white shadow-md relative">
                             <img 
                                src="/bilder/testimonial-linz.jpg" 
                                alt="Thomas Jungreuthmayer Kundenstimme" 
                                className="w-full h-full object-cover"
                             />
                         </div>
                         <div>
                             <div className="flex text-[#F7C429] mb-1">
                                 {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-accent" />)}
                             </div>
                             <h4 className="font-bold text-[#1C1C1C] leading-tight">Thomas Jungreuthmayer</h4>
                             <span className="text-sm text-[#1C1C1C]/60">Verifizierte Kundenbewertung</span>
                         </div>
                     </div>

                     <blockquote className="font-[var(--font-inter)] text-[#111827] text-base leading-relaxed relative z-10">
                        "Tolle, kompetente und zeitnahe Umsetzung unserer neuen Homepage mit der wir sehr zufrieden sind. Hat uns sehr professionell bei der Weiterentwicklung unserer Etiketten unterstützt. Waren mit der kundenorientierten Zusammenarbeit sehr zufrieden."
                     </blockquote>
                  </div>

                  <div className="mt-8 flex justify-center w-full">
                     <a href="https://www.google.com/search?q=BrainStorm+KI+Werbeagentur" target="_blank" rel="noopener noreferrer" className="inline-flex w-full justify-center items-center gap-2 px-8 py-4 bg-white border border-[#1C1C1C]/10 rounded-xl font-bold text-lg text-[#1C1C1C]/80 shadow-sm hover:bg-gray-50 hover:border-gray-300 hover:text-[#F7C429] transition-all group scale-100 hover:scale-[1.02]">
                        Besuche unser Google Profil
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#F7C429] transition-transform group-hover:translate-x-1" />
                     </a>
                  </div>
               </ScrollReveal>
            </div>
          </div>
        </section>

        <Services />
        <LinzFAQ />
        <Contact />
        <IndustryMarquee />
      </main>
      <Footer />
      <AIAssistant />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }} />
    </div>
  );
}

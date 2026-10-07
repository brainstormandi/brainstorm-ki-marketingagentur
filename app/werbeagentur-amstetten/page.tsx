import { Metadata } from 'next';
import { ArrowRight, MapPin, Building2, TrendingUp, Handshake, Globe, Monitor, Rocket, Star, Quote, ExternalLink, ShieldCheck, Trophy, Brain, Sparkles, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import IndustryMarquee from '../components/IndustryMarquee';
import { AIAssistant, Contact } from './DynamicComponents';
import AmstettenFAQ from './AmstettenFAQ';
import { AMSTETTEN_FAQS } from './amstettenData';
import { GOOGLE_REVIEW_LINK } from '../constants';

export const metadata: Metadata = {
  title: "Werbeagentur Amstetten | Webseite & Webdesign Mostviertel | BrainStorm",
  description: "Professionelle Webseite in Amstetten erstellen lassen. BrainStorm KI Werbeagentur: Dein lokaler Partner für Webdesign, SEO & KI-Marketing im Mostviertel. Live in 5-7 Tagen!",
  keywords: [
    "werbeagentur amstetten",
    "webseite amstetten",
    "webdesign amstetten",
    "homepage amstetten",
    "webseite erstellen lassen amstetten",
    "webdesigner amstetten",
    "werbeagentur website",
    "webagentur amstetten",
    "seo agentur amstetten",
    "suchmaschinenoptimierung amstetten",
    "werbeagentur mostviertel",
    "werbeagentur niederösterreich"
  ],
  alternates: {
    canonical: "https://ki-marketingagentur.jetzt/werbeagentur-amstetten",
  },
};

export default function WerbeagenturAmstetten() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BrainStorm Webdesign & Werbeagentur Amstetten",
    "image": "https://ki-marketingagentur.jetzt/bilder/logo.png",
    "@id": "https://ki-marketingagentur.jetzt/werbeagentur-amstetten",
    "url": "https://ki-marketingagentur.jetzt/werbeagentur-amstetten",
    "telephone": "+43 660 520 3171",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Am Ziegelfeld 8",
      "addressLocality": "Seitenstetten",
      "postalCode": "3353",
      "addressCountry": "AT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.0333,
      "longitude": 14.65
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Amstetten",
        "sameAs": "https://www.wikidata.org/wiki/Q251016",
        "postalCode": "3300"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Bezirk Amstetten",
        "sameAs": "https://www.wikidata.org/wiki/Q132997"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Mostviertel"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Niederösterreich"
      }
    ],
    "knowsAbout": [
      "Werbeagentur Amstetten",
      "Webseite Amstetten",
      "Webdesign Amstetten",
      "Homepage erstellen Amstetten",
      "Suchmaschinenoptimierung Mostviertel",
      "Generative Engine Optimization (GEO)",
      "Social Recruiting Mostviertel",
      "Barrierefreie Webseiten BFSG"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1",
      "url": "https://share.google/8UoKWrgoWbfFIPX"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": AMSTETTEN_FAQS.map(faq => ({
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
        "name": "Werbeagentur Amstetten",
        "item": "https://ki-marketingagentur.jetzt/werbeagentur-amstetten"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F5EFE6] text-[#1C1C1C]">
      <Navbar />

      <main>
        {/* HERO SECTION */}
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
                {/* Horizontal Blending Gradient */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #F5EFE6 0%, #F5EFE6 30%, rgba(245, 239, 230, 0.95) 45%, rgba(245, 239, 230, 0.6) 70%, transparent 100%)' }} />
                {/* Bottom Fade */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(245, 239, 230, 0.6) 0%, rgba(245, 239, 230, 0) 15%, rgba(245, 239, 230, 0) 75%, #F5EFE6 100%)' }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="max-w-2xl xl:max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm text-[#1C1C1C] font-bold text-xs mb-6 sm:mb-8 uppercase tracking-widest border border-[#1C1C1C]/10 shadow-sm animate-reveal-down">
                        <MapPin className="w-4 h-4 text-[#F7C429]" />
                        Werbeagentur & Webdesign Amstetten
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-[var(--font-vollkorn)] font-medium text-[#1C1C1C] tracking-tight leading-[1.05] mb-6 animate-reveal-up">
                       Werbeagentur Amstetten <br />
                       <span className="text-[#F7C429] relative inline-block">
                           Webseite & High-End Webdesign
                           <span className="absolute bottom-[10%] left-0 right-0 h-[25%] bg-[#F7C429]/20 -z-10 skew-x-[-15deg]" />
                       </span>
                    </h1>

                    <p className="font-[var(--font-inter)] text-[#111827] text-lg leading-relaxed max-w-xl mb-8 animate-reveal-up reveal-delay-200">
                       Wir erstellen als spezialisierte Werbeagentur für Amstetten und das Mostviertel nicht nur schöne Webseiten – sondern schlüsselfertige digitale Vertriebsmaschinen. Live in 5 bis 7 Tagen, optimiert für Google Platz 1, KI-Suche und planbare Kundenanfragen.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-10 animate-reveal-up reveal-delay-300">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/60 shadow-sm text-[#1C1C1C]/80 font-bold text-[13px] sm:text-sm">
                            <Globe className="w-5 h-5 text-[#F7C429]" />
                            <span>Webseite Amstetten</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/60 shadow-sm text-[#1C1C1C]/80 font-bold text-[13px] sm:text-sm">
                            <Monitor className="w-5 h-5 text-[#F7C429]" />
                            <span>Sprint-Webseite in 7 Tagen</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/60 shadow-sm text-[#1C1C1C]/80 font-bold text-[13px] sm:text-sm">
                            <Rocket className="w-5 h-5 text-[#F7C429]" />
                            <span>Google & KI-Optimiert (GEO)</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 animate-reveal-up reveal-delay-500">
                         <a href="#contact" className="btn-primary py-4 px-8 group">
                             Webseite & Homepage anfragen
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
                            100% DSGVO & BFSG 2025
                        </div>
                        <div className="flex items-center gap-2 text-[13px] font-semibold text-[#1C1C1C]/90">
                            <Trophy className="w-4 h-4 text-[#F7C429]" />
                            32 Jahre Erfahrung
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* MOSTVIERTEL HUB HIGHLIGHTS */}
        <section className="py-20 bg-[#EDE7DB] border-y border-[#1C1C1C]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#F7C429]/10 text-[#F7C429] font-bold text-[10px] uppercase tracking-widest mb-4 border border-accent/20">
                            Mostviertel Hub Amstetten
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-[#1C1C1C] tracking-tight leading-tight mb-6">
                            Deine Werbeagentur für <br className="hidden sm:block" />
                            <span className="text-[#1C1C1C]">Webseiten in Amstetten & Region</span>
                        </h2>
                        <p className="text-[#1C1C1C]/70 text-lg leading-relaxed mb-8 font-[var(--font-inter)]">
                            Agentur-Expertise direkt aus dem Herzen des Mostviertels. Wir konzipieren Webseiten für Firmen aus Amstetten, die bei Google und in modernen KI-Suchmaschinen wirklich gefunden werden.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { title: "Wirtschafts-Fokus Amstetten", desc: "Professionelle Homepages für Industrie, Gewerbe & KMU in Amstetten.", icon: <Building2 className="w-5 h-5 text-[#F7C429]" /> },
                            { title: "Lokale Vor-Ort-Nähe", desc: "Direkt aus Seitenstetten – in 15 Min. bei dir im Betrieb.", icon: <MapPin className="w-5 h-5 text-[#F7C429]" /> },
                            { title: "KI-Technologie & GEO", desc: "Top-Platzierungen bei Google und direkte Zitate in ChatGPT & Perplexity.", icon: <Brain className="w-5 h-5 text-[#F7C429]" /> },
                            { title: "High Performance", desc: "5.0 Sterne Google-Ratings und messbare Neukundengewinnung.", icon: <TrendingUp className="w-5 h-5 text-[#F7C429]" /> },
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

        {/* SEKTION B: LOKALER BEZUG WEBSEITE & HOMEPAGE MIT CASE STUDY */}
        <section className="py-24 bg-[#F5EFE6] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <ScrollReveal animation="reveal-right">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C1C1C] tracking-tight leading-[1.1] py-1 mb-8">
                     <span className="font-sans block">Webseite in Amstetten erstellen lassen:</span>
                     <span className="font-sans block text-transparent text-[#1C1C1C] pb-2">Dein Partner im Mostviertel</span>
                  </h2>
                  <p className="font-[var(--font-inter)] text-[#111827] text-lg leading-relaxed mb-6">
                     Amstetten ist mit dem Wirtschaftspark, dem CCA und seiner starken Industrie der pulsierende Knotenpunkt im Herzen des Mostviertels. Für erfolgreiche Unternehmen vor Ort reicht eine einfache Visitenkarte im Netz schon lange nicht mehr aus. Es bedarf einer hochkonvertierenden Webseite und starken Homepage-Infrastruktur, um Mitarbeiter zu gewinnen und Kunden zu überzeugen.
                  </p>
                  <p className="font-[var(--font-inter)] text-[#111827] text-lg leading-relaxed mb-8">
                     Als deine regionale Werbeagentur sitzen wir direkt nebenan in Seitenstetten im Bezirk Amstetten. Ob bei einem strategischen Vor-Ort-Termin rund um Amstetten, das Ybbstal und Mauthausen oder zeitsparend und unkompliziert per Video-Call – wir richten uns flexibel nach deinem Kalender, um deine neue Website gemeinsam zu planen und erfolgreich umzusetzen.
                  </p>
                  
                  <div className="flex flex-col gap-4 mb-10">
                     <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-[#F7C429]/20 border border-accent/30 flex items-center justify-center shrink-0">
                           <Monitor className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                           <h4 className="font-bold text-[#1C1C1C] text-lg font-sans">Individuelles Webdesign</h4>
                           <span className="font-[var(--font-inter)] text-[#111827] text-sm">Perfekte Darstellung auf allen Geräten im Mostviertel.</span>
                        </div>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-[#F7C429]/20 border border-accent/30 flex items-center justify-center shrink-0">
                           <Handshake className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                           <h4 className="font-bold text-[#1C1C1C] text-lg font-sans">Persönliche KI-Betreuung</h4>
                           <span className="font-[var(--font-inter)] text-[#111827] text-sm">Andreas Sturm berät dich persönlich bei dir vor Ort.</span>
                        </div>
                     </div>
                  </div>
               </ScrollReveal>

               <ScrollReveal animation="reveal-left" delay={200}>
                  {/* Real Case Study / Social Proof Block */}
                  <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#1C1C1C]/10 shadow-sm relative">
                     <Quote className="w-16 h-16 text-[#F7C429]/20 absolute top-6 right-8 rotate-180" />
                     
                     <div className="flex items-center gap-4 mb-6">
                         <div className="w-20 h-20 rounded-full bg-[#EDE7DB] overflow-hidden shrink-0 border-4 border-white shadow-md relative">
                             <img 
                                src="/bilder/testimonial-amstetten.jpg" 
                                alt="Kundenstimme zur Webseite" 
                                className="w-full h-full object-cover"
                             />
                         </div>
                         <div>
                             <div className="flex text-[#F7C429] mb-1">
                                 {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-accent" />)}
                             </div>
                             <h4 className="font-bold text-[#1C1C1C] leading-tight">Karin Metz</h4>
                             <span className="text-sm text-[#1C1C1C]/60">Verifizierte Kundenbewertung</span>
                         </div>
                     </div>

                     <blockquote className="font-[var(--font-inter)] text-[#111827] text-base leading-relaxed relative z-10">
                        &quot;Bei der Brainstorm Werbeagentur ist man in besten Händen was Webseite und Social Media betrifft.
                        Meine Webseite muss funktionieren, gefunden werden, den rechtlichen Richtlinien entsprechen und dabei noch richtig toll aussehen! Und dafür ist Andreas Sturm der perfekte Partner. Er weiß mit KI umzugehen, kennt stets die aktuell notwendigen Anpassungen und setzt diese verlässlich um. - und ich kann mich um die Aufträge kümmern, die aufgrund meines guten Außenauftritts hereintrudeln ;-) Danke!&quot;
                     </blockquote>
                  </div>

                  {/* Google Business Link */}
                  <div className="mt-8 flex justify-center w-full">
                     <a 
                       href={GOOGLE_REVIEW_LINK}
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="inline-flex w-full justify-center items-center gap-2 px-8 py-4 bg-white border border-[#1C1C1C]/10 rounded-xl font-bold text-lg text-[#1C1C1C]/80 shadow-sm hover:bg-gray-50 hover:border-gray-300 hover:text-[#F7C429] transition-all group scale-100 hover:scale-[1.02]"
                     >
                        Besuche unser Google Profil
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#F7C429] transition-transform group-hover:translate-x-1" />
                     </a>
                  </div>
               </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── GEO-DIREKTANTWORTEN / KI-ZITIERBLOCK (Generative Engine Optimization) ── */}
        <section id="geo-fakten" className="py-24 bg-white border-t border-[#1C1C1C]/10 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#F7C429]/15 text-[#1C1C1C] font-bold text-xs mb-4 uppercase tracking-widest border border-[#F7C429]/30">
                <Sparkles className="w-4 h-4 text-[#1C1C1C]" />
                Kompakt für Entscheider &amp; KI-Suche (GEO)
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C1C1C] tracking-tight leading-tight mb-4">
                Werbeagentur &amp; Webseite Amstetten: Die wichtigsten Fakten auf einen Blick
              </h2>
              <p className="font-[var(--font-inter)] text-gray-600 text-lg leading-relaxed">
                Strukturierte Antworten für Unternehmen aus Amstetten sowie für intelligente Suchmaschinen (Google, ChatGPT, Perplexity).
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  badge: "Anbieter & Erfahrung",
                  title: "Wer erstellt professionelle Webseiten in Amstetten?",
                  answer: "Die BrainStorm KI Werbeagentur unter der Leitung von Andreas Sturm mit über 32 Jahren Marketing-Erfahrung. Spezialisiert auf verkaufsstarke Webseiten, Webdesign, SEO und Social Recruiting für KMUs im Bezirk Amstetten und Mostviertel.",
                  highlight: "32 Jahre Marketing-Erfahrung"
                },
                {
                  badge: "Kosten & Festpreis",
                  title: "Was kostet eine Firmen-Webseite in Amstetten?",
                  answer: "Transparente Festpreise ohne versteckte Kosten: Eine High-End Sprint-Webseite startet ab 1.490 €, vollwertige Unternehmens-Webseiten mit Mitarbeiter-Recruiting ab 2.990 €. Erstberatung und Webseiten-Check sind 100 % kostenlos.",
                  highlight: "Sprint-Webseite ab 1.490 €"
                },
                {
                  badge: "Projektdauer",
                  title: "Wie schnell ist die neue Webseite online?",
                  answer: "Dank optimierter Next.js-Technologie und KI-Workflows geht deine maßgeschneiderte Firmen-Webseite in 5 bis 7 Tagen schlüsselfertig online – inklusive aller Texte, mobilem Design und DSGVO-Konformität.",
                  highlight: "Schlüsselfertig in 5–7 Tagen"
                },
                {
                  badge: "Vor-Ort-Service",
                  title: "Bietet ihr persönliche Termine in Amstetten an?",
                  answer: "Ja. Unser Standort liegt in Seitenstetten im Bezirk Amstetten – wir sind in 15 bis 20 Minuten direkt bei dir im Betrieb, im Wirtschaftspark Amstetten oder im CCA. Alternativ flexibel per Video-Call.",
                  highlight: "15 Min. Anfahrt in Amstetten"
                },
                {
                  badge: "Recht & Barrierefreiheit",
                  title: "Sind die Webseiten barrierefrei (BFSG 2025)?",
                  answer: "Ja, alle Webseiten erfüllen die ab Juni 2025 gesetzlich verpflichtenden Vorgaben für digitale Barrierefreiheit (WCAG 2.1 / BFSG Österreich) und sind 100 % DSGVO-konform aufgebaut.",
                  highlight: "100 % BFSG 2025 & DSGVO"
                },
                {
                  badge: "Sichtbarkeit & Ranking",
                  title: "Wie wird die Webseite bei Google & KI gefunden?",
                  answer: "Durch ganzheitliche Suchmaschinenoptimierung (SEO) für Google Seite 1 / Google Maps und Generative Engine Optimization (GEO) für direkte Zitate in KI-Systemen wie ChatGPT, Perplexity und Google Gemini.",
                  highlight: "SEO Platz 1 & KI-Zitierung"
                }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-7 bg-[#F5EFE6] rounded-2xl border border-[#1C1C1C]/10 flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#1C1C1C]/60 bg-white/80 px-3 py-1 rounded-full mb-3 border border-[#1C1C1C]/5">
                      {item.badge}
                    </span>
                    <h3 className="font-bold text-[#1C1C1C] text-lg leading-snug mb-3">
                      {item.title}
                    </h3>
                    <p className="font-[var(--font-inter)] text-gray-700 text-sm leading-relaxed mb-4">
                      {item.answer}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#1C1C1C]/10 flex items-center gap-2 text-xs font-bold text-[#1C1C1C]">
                    <CheckCircle2 className="w-4 h-4 text-[#F7C429] shrink-0" />
                    <span>{item.highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES & LEISTUNGEN */}
        <Services />

        {/* DETAIL-FAQ ACCORDION */}
        <AmstettenFAQ />

        {/* KONTAKT */}
        <Contact />

        {/* MARQUEE */}
        <IndustryMarquee />
      </main>

      <Footer />
      <AIAssistant />

      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
    </div>
  );
}

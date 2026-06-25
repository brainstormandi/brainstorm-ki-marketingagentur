import { Metadata } from 'next';
import { ArrowRight, MapPin, Building2, TrendingUp, Handshake, Globe, Monitor, Rocket, Star, CheckCircle2, Quote, ExternalLink, ShieldCheck, Trophy, Brain, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import IndustryMarquee from '../components/IndustryMarquee';
import { AIAssistant, Contact } from './DynamicComponents';
import PergFAQ from './PergFAQ';
import { GOOGLE_REVIEW_LINK } from '../constants';

export const metadata: Metadata = {
  title: "Werbeagentur Perg | Premium Webdesign & Webseiten für das Mühlviertel",
  description: "deine Werbeagentur für das Machland und Perg! KI-Sichtbarkeit und Webdesign, das Mitarbeiter und Kunden auf Knopfdruck anzieht. Jetzt anfragen!",
  keywords: ["werbeagentur", "web agentur", "webagentur", "werbeagentur website", "seo agentur niederösterreich", "suchmaschinenoptimierung niederösterreich", "website werbeagentur", "werbeagentur perg", "webdesign perg", "homepage perg"],
  alternates: {
    canonical: "https://ki-marketingagentur.jetzt/werbeagentur-perg",
  },
};

export default function WerbeagenturPerg() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BrainStorm Webdesign & Werbeagentur Perg",
    "image": "https://ki-marketingagentur.jetzt/bilder/logo.png",
    "@id": "https://ki-marketingagentur.jetzt/werbeagentur-perg",
    "url": "https://ki-marketingagentur.jetzt/werbeagentur-perg",
    "telephone": "+43 660 520 3171",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Am Ziegelfeld 8",
      "addressLocality": "Seitenstetten",
      "postalCode": "3353",
      "addressCountry": "AT"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 48.25,
        "longitude": 14.63
    },
    "serviceArea": {
      "@type": "Place",
      "name": "Perg"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "28",
        "bestRating": "5",
        "worstRating": "1",
        "url": "https://share.google/8UoKWrgoWbfFIPX"
    }
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
                        Webdesign & KI-Marketing für Perg
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-[var(--font-vollkorn)] font-medium text-[#1C1C1C] tracking-tight leading-[1.05] mb-6 animate-reveal-up">
                       High-End Webdesign <br />
                       <span className="text-[#F7C429] relative inline-block">
                           für Perg & Machland
                           <span className="absolute bottom-[10%] left-0 right-0 h-[25%] bg-[#F7C429]/20 -z-10 skew-x-[-15deg]" />
                       </span>
                    </h1>

                    <p className="font-[var(--font-inter)] text-[#111827] text-lg leading-relaxed max-w-lg mb-8 animate-reveal-up reveal-delay-200">
                       Machland und Mühlviertel digital. Hol dir mit einer modernen Webseite den entscheidenden Marktvorteil für Kundengewinnung und Recruiting.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-10 animate-reveal-up reveal-delay-300">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/60 shadow-sm text-[#1C1C1C]/80 font-bold text-[13px] sm:text-sm">
                            <Globe className="w-5 h-5 text-[#F7C429]" />
                            <span>Verkaufsstarke Landingpages</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/60 shadow-sm text-[#1C1C1C]/80 font-bold text-[13px] sm:text-sm">
                            <Monitor className="w-5 h-5 text-[#F7C429]" />
                            <span>Business Webseiten</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/60 shadow-sm text-[#1C1C1C]/80 font-bold text-[13px] sm:text-sm">
                            <Rocket className="w-5 h-5 text-[#F7C429]" />
                            <span>Lokales SEO & KI</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 animate-reveal-up reveal-delay-500">
                         <a href="#contact" className="btn-primary py-4 px-8 group">
                             Projekt in Perg starten
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
                            Regionale Sichtbarkeit
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-[#1C1C1C] tracking-tight leading-tight mb-6">
                            dein Partner für <br className="hidden sm:block" />
                            <span className="text-transparent text-[#1C1C1C]">Webseiten im Machland</span>
                        </h2>
                        <p className="text-[#1C1C1C]/70 text-lg leading-relaxed mb-8 font-[var(--font-inter)]">
                            Wir fokussieren uns auf Premium Homepages und performante Landingpages für den Mittelstand im Bezirk Perg.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { title: "Premium Design", desc: "Homepages, die deine Qualität im Mühlviertel widerspiegeln.", icon: <Building2 className="w-5 h-5 text-[#F7C429]" /> },
                            { title: "Mühlviertel Fokus", desc: "Spezialisiert auf das Machland, Donauraum und Strudengau.", icon: <MapPin className="w-5 h-5 text-[#F7C429]" /> },
                            { title: "High-Tech", desc: "Next-Gen Webdesign kombiniert mit KI-Sichtbarkeit.", icon: <Zap className="w-5 h-5 text-[#F7C429]" /> },
                            { title: "Persönlich", desc: "Ein fester, naher Ansprechpartner anstatt anonymer Call-Center.", icon: <Handshake className="w-5 h-5 text-[#F7C429]" /> },
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
<span className="font-sans block">Digital in der </span>
<span className="font-sans block text-transparent text-[#1C1C1C] pb-2">Bezirkshauptstadt</span>
</h2>
                  <p className="font-[var(--font-inter)] text-[#111827] text-lg leading-relaxed mb-6">
                     Der Bezirk Perg ist wirtschaftlich florierend und enorm wettbewerbsintensiv. Egal ob du Handwerker aus Schwertberg, Dienstleister am Perger Hauptplatz oder ein Industriezulieferer aus Grein sind – deine digitale Visitenkarte muss makellos sitzen.
                  </p>
                  <p className="font-[var(--font-inter)] text-[#111827] text-lg leading-relaxed mb-8">
                     Ob bei einem Vor-Ort-Termin direkt im Raum Perg, oder völlig flexibel via Video-Call – wir widmen uns deinem Web-Projekt mit Herzblut und KI-Unterstützung. dein Webdesign muss heute nicht nur ästhetisch glänzen, es muss in erster Linie Kunden und Bewerber generieren. Dafür sorgen wir.
                  </p>
                  
                  <div className="flex flex-col gap-4 mb-10">
                     <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-[#F7C429]/20 border border-accent/30 flex items-center justify-center shrink-0">
                           <TrendingUp className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                           <h4 className="font-bold text-[#1C1C1C] text-lg font-sans">Wettbewerbsvorteil</h4>
                           <span className="font-[var(--font-inter)] text-[#111827] text-sm">Überflügeln du deine Konkurrenz mit exzellentem UI/UX Design.</span>
                        </div>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-[#F7C429]/20 border border-accent/30 flex items-center justify-center shrink-0">
                           <Globe className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                           <h4 className="font-bold text-[#1C1C1C] text-lg font-sans">Regionale SEO</h4>
                           <span className="font-[var(--font-inter)] text-[#111827] text-sm">Werde exakt dort gefunden, wo deine Zielgruppe nach dir sucht.</span>
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
                                src="/bilder/testimonial-perg.jpg" 
                                alt="Thomas Hinterreiter Kundenstimme" 
                                className="w-full h-full object-cover"
                             />
                         </div>
                         <div>
                             <div className="flex text-[#F7C429] mb-1">
                                 {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-accent" />)}
                             </div>
                             <h4 className="font-bold text-[#1C1C1C] leading-tight">Thomas Hinterreiter</h4>
                             <span className="text-sm text-[#1C1C1C]/60">Verifizierte Kundenbewertung</span>
                         </div>
                     </div>

                     <blockquote className="font-[var(--font-inter)] text-[#111827] text-base leading-relaxed relative z-10">
                        "Die Jobpage und die dazugehörigen Bewerbungen funktionieren perfekt! Immer schnell und professionell!"
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
        <PergFAQ />
        <Contact />
        <IndustryMarquee />
      </main>
      <Footer />
      <AIAssistant />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </div>
  );
}

import { Metadata } from 'next';
import { ArrowRight, MapPin, Building2, TrendingUp, Handshake, Globe, Monitor, Rocket, Star, CheckCircle2, Quote, ExternalLink, ShieldCheck, Trophy, Brain, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import IndustryMarquee from '../components/IndustryMarquee';
import { AIAssistant, Contact } from './DynamicComponents';
import SteyrFAQ from './SteyrFAQ';
import { GOOGLE_REVIEW_LINK } from '../constants';

export const metadata: Metadata = {
  title: "Werbeagentur & Webdesign Steyr | deine neue Firmen-Homepage",
  description: "Die Experten für Webseiten und Landingpages in Steyr. Wir vereinen hochmodernes Design mit KI-Sichtbarkeit für maximalen Umsatz. Jetzt Website anfragen!",
  alternates: {
    canonical: "https://ki-marketingagentur.jetzt/werbeagentur-steyr",
  },
};

export default function WerbeagenturSteyr() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BrainStorm Webdesign & Werbeagentur Steyr",
    "image": "https://ki-marketingagentur.jetzt/bilder/logo.png",
    "@id": "https://ki-marketingagentur.jetzt/werbeagentur-steyr",
    "url": "https://ki-marketingagentur.jetzt/werbeagentur-steyr",
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
        "latitude": 48.04,
        "longitude": 14.41
    },
    "serviceArea": {
      "@type": "Place",
      "name": "Steyr"
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
    <div className="min-h-screen bg-white">
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
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 30%, rgba(255,255,255,0.6) 55%, rgba(255,255,255,0) 75%)' }} />
                {/* Gentle Bottom Fade */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 15%, rgba(255,255,255,0) 75%, rgba(255,255,255,0.95) 100%)' }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="max-w-2xl xl:max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-800 font-bold text-xs mb-6 sm:mb-8 uppercase tracking-widest border border-gray-200 shadow-sm animate-reveal-down">
                        <MapPin className="w-4 h-4 text-accent" />
                        Webdesign & KI-Marketing für Steyr
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-[var(--font-playfair)] font-medium text-gray-900 tracking-tight leading-[1.05] mb-6 animate-reveal-up">
                       High-End Webdesign <br />
                       <span className="text-[#F7C429] relative inline-block">
                           für Steyr & Region
                           <span className="absolute bottom-[10%] left-0 right-0 h-[25%] bg-[#F7C429]/20 -z-10 skew-x-[-15deg]" />
                       </span>
                    </h1>

                    <p className="font-body text-[#111827] text-lg leading-relaxed max-w-lg mb-8 animate-reveal-up reveal-delay-200">
                       Hebe dich ab. Wir konzipieren als Werbeagentur deine hochmoderne Website – präzise zugeschnitten auf den Markt in und um Steyr.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-10 animate-reveal-up reveal-delay-300">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/60 shadow-sm text-gray-700 font-bold text-[13px] sm:text-sm">
                            <Globe className="w-5 h-5 text-accent" />
                            <span>Konvertierende Websites</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/60 shadow-sm text-gray-700 font-bold text-[13px] sm:text-sm">
                            <Monitor className="w-5 h-5 text-accent" />
                            <span>Umfassende Homepages</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/60 shadow-sm text-gray-700 font-bold text-[13px] sm:text-sm">
                            <Rocket className="w-5 h-5 text-accent" />
                            <span>SEO & Sichtbarkeit</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 animate-reveal-up reveal-delay-500">
                         <a href="#contact" className="group flex items-center justify-center gap-3 bg-[#F7C429] text-black px-8 py-[22px] rounded-full font-bold uppercase tracking-[0.15em] text-[15px] shadow-[0_10px_30px_rgba(247,196,41,0.4)] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-black hover:text-[#F7C429] hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:-translate-y-0.5">
                             Projekt in Steyr starten
                             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                         </a>
                    </div>

                    <div className="mt-14 flex flex-wrap items-center gap-6 sm:gap-10 animate-reveal-up reveal-delay-600">
                        <a href={GOOGLE_REVIEW_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 group">
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, s) => (
                                    <Star key={s} className="w-4 h-4 fill-accent text-accent" />
                                ))}
                            </div>
                            <span className="text-sm font-bold text-gray-900 group-hover:text-accent transition-colors">
                                <strong>5.0</strong> Google-Rating
                            </span>
                        </a>
                        <div className="w-px h-4 bg-gray-300 hidden sm:block"></div>
                        <div className="flex items-center gap-2 text-[13px] font-semibold text-gray-800">
                            <ShieldCheck className="w-4 h-4 text-accent" />
                            100% DSGVO
                        </div>
                        <div className="flex items-center gap-2 text-[13px] font-semibold text-gray-800">
                            <Trophy className="w-4 h-4 text-accent" />
                            32 Jahre Erfahrung
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-20 bg-gray-50 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-[10px] uppercase tracking-widest mb-4 border border-accent/20">
                            Regionale Expertise
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-6">
                            dein Partner für <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">Webdesign in Steyr</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8 font-body">
                            Agentur-Expertise, die vor Ort ist. Wir konzipieren deine hochmoderne Website – präzise zugeschnitten auf den Markt in und um Steyr.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { title: "Fokus", desc: "Automatisierte Homepages und vertriebsorientierte Landingpages.", icon: <Building2 className="w-5 h-5 text-accent" /> },
                            { title: "Erreichbarkeit", desc: "Direkte Unterstützung in unter 30 Minuten für Betriebe in Steyr.", icon: <Zap className="w-5 h-5 text-accent" /> },
                            { title: "Qualität", desc: "Psychologisch fundierte Texte vereint mit KI-Performance.", icon: <Brain className="w-5 h-5 text-accent" /> },
                            { title: "Vertrauen", desc: "Exzellente Google-Bewertungen aus dem gesamten Umkreis.", icon: <Handshake className="w-5 h-5 text-accent" /> },
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-accent/30 transition-colors group">
                                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                                    {item.icon}
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                                <p className="text-sm text-gray-500 leading-relaxed font-body">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <ScrollReveal animation="reveal-right">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1] py-1 mb-8">
<span className="font-sans block">Erfolg rund um</span>
<span className="font-sans block text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 drop-shadow-sm pb-2">die Eisenstadt</span>
</h2>
                  <p className="font-body text-[#111827] text-lg leading-relaxed mb-6">
                     Steyr ist ein traditionsreiches Wirtschaftszentrum. Vom Stadtplatz bis nach Garsten spürt man die hohe Innovationskraft dieser Region. Mit uns hast du nicht einfach "nur" eine Agentur, die schönen Code schreibt – sondern einen Partner, der Homepages kreiert, die Besucher magisch anziehen und in treue Kunden verwandeln.
                  </p>
                  <p className="font-body text-[#111827] text-lg leading-relaxed mb-8">
                     Wir setzen uns bei einem Video-Call, Web-Konferenz oder direkt bei dir im Raum Steyr zusammen. Ganz flexibel nach deinem Kalender besprechen wir, was eine professionell erstellte Firmenwebseite heute wirklich liefern muss: Sichtbarkeit in Google, Top-Performance auf dem Smartphone und kristallklare Botschaften.
                  </p>
                  
                  <div className="flex flex-col gap-4 mb-10">
                     <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0">
                           <Monitor className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                           <h4 className="font-bold text-gray-900 text-lg font-sans">Einzigartiges Webdesign</h4>
                           <span className="font-body text-[#111827] text-sm">Präzise abgestimmt auf die Zielgruppen in der Region Steyr und Ennstal.</span>
                        </div>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0">
                           <Handshake className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                           <h4 className="font-bold text-gray-900 text-lg font-sans">Nahe & greifbar</h4>
                           <span className="font-body text-[#111827] text-sm">Persönliche Web-Meetings oder direkte Besuche vor Ort.</span>
                        </div>
                     </div>
                  </div>
               </ScrollReveal>

               <ScrollReveal animation="reveal-left" delay={200}>
                  <div className="bg-gray-50/80 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-gray-200/60 shadow-xl relative">
                     <Quote className="w-16 h-16 text-accent/20 absolute top-6 right-8 rotate-180" />
                     
                     <div className="flex items-center gap-4 mb-6">
                         <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden shrink-0 border-4 border-white shadow-md relative">
                             <img 
                                src="/bilder/testimonial-steyr.jpg" 
                                alt="Christian Rohrhofer Kundenstimme" 
                                className="w-full h-full object-cover"
                             />
                         </div>
                         <div>
                             <div className="flex text-accent mb-1">
                                 {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-accent" />)}
                             </div>
                             <h4 className="font-bold text-gray-900 leading-tight">Christian Rohrhofer</h4>
                             <span className="text-sm text-gray-500">Verifizierte Kundenbewertung</span>
                         </div>
                     </div>

                     <blockquote className="font-body text-[#111827] text-base leading-relaxed relative z-10">
                        "Da versteht jemand etwas von seinem Handwerk! Vor allem gibt es auch Dienstleistungen über die 'normale' Website hinaus, wie beispielsweise eCommerce und Social Media sowie deren Verbindung. BrainStorm kann ich weiterempfehlen!"
                     </blockquote>
                  </div>

                  <div className="mt-8 flex justify-center w-full">
                     <a href="https://www.google.com/search?q=BrainStorm+KI+Werbeagentur" target="_blank" rel="noopener noreferrer" className="inline-flex w-full justify-center items-center gap-2 px-8 py-4 bg-white border border-gray-200 rounded-xl font-bold text-lg text-gray-700 shadow-sm hover:bg-gray-50 hover:border-gray-300 hover:text-accent transition-all group scale-100 hover:scale-[1.02]">
                        Besuche unser Google Profil
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-accent transition-transform group-hover:translate-x-1" />
                     </a>
                  </div>
               </ScrollReveal>
            </div>
          </div>
        </section>

        <Services />
        <SteyrFAQ />
        <Contact />
        <IndustryMarquee />
      </main>
      <Footer />
      <AIAssistant />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </div>
  );
}

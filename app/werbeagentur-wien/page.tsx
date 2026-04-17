import { Metadata } from 'next';
import { ArrowRight, MapPin, Building2, TrendingUp, Handshake, Globe, Monitor, Rocket, Star, CheckCircle2, Quote, ExternalLink, ShieldCheck, Trophy, Brain, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import IndustryMarquee from '../components/IndustryMarquee';
import { AIAssistant, Contact } from './DynamicComponents';
import WienFAQ from './WienFAQ';
import { GOOGLE_REVIEW_LINK } from '../constants';

export const metadata: Metadata = {
  title: "Webagentur & Webdesign Wien | Innovative Homepages & KI",
  description: "Webseiten auf Großstadtniveau für Wien & Umgebung. Innovative KI-Strategien, konvertierende Premium-Landingpages. Stechen Sie in Wien heraus!",
  alternates: {
    canonical: "https://ki-marketingagentur.jetzt/werbeagentur-wien",
  },
};

export default function WerbeagenturWien() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BrainStorm Webdesign & Werbeagentur Wien / NÖ",
    "image": "https://ki-marketingagentur.jetzt/bilder/logo.png",
    "@id": "https://ki-marketingagentur.jetzt/werbeagentur-wien",
    "url": "https://ki-marketingagentur.jetzt/werbeagentur-wien",
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
        "latitude": 48.20,
        "longitude": 16.37
    },
    "serviceArea": {
      "@type": "Place",
      "name": "Wien"
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC]/80 via-white/80 to-white/30 sm:to-white/10"></div>
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="max-w-2xl xl:max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm text-slate-800 font-bold text-xs mb-6 sm:mb-8 uppercase tracking-widest border border-slate-200 shadow-sm animate-reveal-down">
                        <MapPin className="w-4 h-4 text-accent" />
                        Webdesign & KI-Marketing für Wien
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] py-1 mb-6 animate-reveal-up">
                       <span className="font-sans font-black block">High-End Webdesign</span>
                       <span className="font-sans block text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 drop-shadow-sm pb-2">für Wien & Umgebung</span>
                    </h1>

                    <p className="font-body text-[#111827] text-lg leading-relaxed max-w-lg mb-8 animate-reveal-up reveal-delay-200">
                       Der Markt in der Hauptstadt verzeiht keine Fehler. Beeindrucken Sie Ihre Wiener Zielgruppe mit Webseiten, die messbar besser performen.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-10 animate-reveal-up reveal-delay-300">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/60 shadow-sm text-slate-700 font-bold text-[13px] sm:text-sm">
                            <Globe className="w-5 h-5 text-accent" />
                            <span>KI-Landingpages</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/60 shadow-sm text-slate-700 font-bold text-[13px] sm:text-sm">
                            <Monitor className="w-5 h-5 text-accent" />
                            <span>Business Webseiten</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/60 shadow-sm text-slate-700 font-bold text-[13px] sm:text-sm">
                            <Rocket className="w-5 h-5 text-accent" />
                            <span>Digitale Sichtbarkeit</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 animate-reveal-up reveal-delay-500">
                         <a href="#contact" className="w-full sm:w-auto px-12 py-6 bg-accent text-primary rounded-2xl font-black text-lg sm:text-xl hover:bg-[#e5b510] hover:scale-105 transition-all shadow-[0_20px_40px_-10px_rgba(247,196,41,0.5)] flex items-center justify-center gap-4 group">
                             Projekt in Wien starten
                             <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                         </a>
                    </div>

                    <div className="mt-14 flex flex-wrap items-center gap-6 sm:gap-10 animate-reveal-up reveal-delay-600">
                        <a href={GOOGLE_REVIEW_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 group">
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, s) => (
                                    <Star key={s} className="w-4 h-4 fill-accent text-accent" />
                                ))}
                            </div>
                            <span className="text-sm font-bold text-slate-900 group-hover:text-accent transition-colors">
                                <strong>5.0</strong> Google-Rating
                            </span>
                        </a>
                        <div className="w-px h-4 bg-slate-300 hidden sm:block"></div>
                        <div className="flex items-center gap-2 text-[13px] font-semibold text-slate-800">
                            <ShieldCheck className="w-4 h-4 text-accent" />
                            100% DSGVO
                        </div>
                        <div className="flex items-center gap-2 text-[13px] font-semibold text-slate-800">
                            <Trophy className="w-4 h-4 text-accent" />
                            32 Jahre Erfahrung
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <IndustryMarquee />

        <section className="py-20 bg-slate-50 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-[10px] uppercase tracking-widest mb-4 border border-accent/20">
                            Local Expertise
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                            Ihr Webdesign-Partner <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">für den Standort Wien</span>
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8 font-body">
                            Wir kombinieren Agentur-Expertise auf Metropol-Niveau mit der Effizienz moderner KI-Prozesse. Das Ergebnis: Webseiten, die in Wien wirklich herausstechen.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { title: "Wiener Markt", desc: "Konvertierende Landingpages für das hart umkämpfte Umfeld.", icon: <Building2 className="w-5 h-5 text-accent" /> },
                            { title: "KI-Power", desc: "Smarte Chatbots und automatisierte Marketing-Funnels.", icon: <Brain className="w-5 h-5 text-accent" /> },
                            { title: "Effizienz", desc: "Premium-Qualität zu fairen, regionalen Business-Preisen.", icon: <Zap className="w-5 h-5 text-accent" /> },
                            { title: "Digital-First", desc: "Nahtlose Abstimmung via Video-Call ohne Zeitverlust.", icon: <Handshake className="w-5 h-5 text-accent" /> },
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-accent/30 transition-colors group">
                                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                                    {item.icon}
                                </div>
                                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                <p className="text-sm text-slate-500 leading-relaxed font-body">{item.desc}</p>
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
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] py-1 mb-8">
<span className="font-sans block">Digital erfolgreich im </span>
<span className="font-sans block text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 drop-shadow-sm pb-2">Großraum Wien</span>
</h2>
                  <p className="font-body text-[#111827] text-lg leading-relaxed mb-6">
                     Egal ob in der Stadt selber, oder dem vitalen Speckgürtel im Wiener Becken: Sie konkurrieren digital um die besten Fachkräfte und die lukrativsten Kundenaufträge. Eine gewöhnliche Firmenwebseite fällt hier sofort durchs Raster.
                  </p>
                  <p className="font-body text-[#111827] text-lg leading-relaxed mb-8">
                     Als schlagkräftige, KI-getriebene Werbeagentur haben wir perfekten Service digitalisiert. Von der Planung in Videocalls bis zum messerscharfen Design – wir sorgen dafür, dass Ihr Unternehmen im Großraum Wien durch atemberaubende Websites und smarte Landingpages sofort ins Auge sticht.
                  </p>
                  
                  <div className="flex flex-col gap-4 mb-10">
                     <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0">
                           <TrendingUp className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-900 text-lg font-sans">Mitarbeitergewinnung</h4>
                           <span className="font-body text-[#111827] text-sm">Automatisierte Recruiting-Webseiten für den Wiener Arbeitsmarkt.</span>
                        </div>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0">
                           <Globe className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-900 text-lg font-sans">Lokales SEO</h4>
                           <span className="font-body text-[#111827] text-sm">Machen Sie Ihren Betrieb im passenden Wiener Bezirk online zum Platzhirsch.</span>
                        </div>
                     </div>
                  </div>
               </ScrollReveal>

               <ScrollReveal animation="reveal-left" delay={200}>
                  <div className="bg-slate-50/80 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-slate-200/60 shadow-xl relative">
                     <Quote className="w-16 h-16 text-accent/20 absolute top-6 right-8 rotate-180" />
                     
                     <div className="flex items-center gap-4 mb-6">
                         <div className="w-20 h-20 rounded-full bg-slate-200 overflow-hidden shrink-0 border-4 border-white shadow-md relative">
                             <img 
                                src="/bilder/testimonial-wien.jpg" 
                                alt="Susanne Wolfsohn Kundenstimme" 
                                className="w-full h-full object-cover"
                             />
                         </div>
                         <div>
                             <div className="flex text-accent mb-1">
                                 {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-accent" />)}
                             </div>
                             <h4 className="font-bold text-slate-900 leading-tight">Susanne Wolfsohn</h4>
                             <span className="text-sm text-slate-500">Verifizierte Kundenbewertung</span>
                         </div>
                     </div>

                     <blockquote className="font-body text-[#111827] text-lg leading-relaxed relative z-10">
                        "Andreas Sturm ist sehr kompetent, erledigt Aufträge zu meiner größten Zufriedenheit und rasch. Er gibt Auskunft so, dass es auch ein Laie versteht, ist sehr unterstützend und hat immer gute Ideen für eine Lösung. Das war ich bisher nicht gewohnt. Deshalb habe ich volles Vertrauen zu ihm und kann bestens weiter empfehlen!"
                     </blockquote>
                  </div>

                  <div className="mt-8 flex justify-center w-full">
                     <a href="https://www.google.com/search?q=BrainStorm+KI+Werbeagentur" target="_blank" rel="noopener noreferrer" className="inline-flex w-full justify-center items-center gap-2 px-8 py-4 bg-white border border-slate-200 rounded-xl font-bold text-lg text-slate-700 shadow-sm hover:bg-slate-50 hover:border-slate-300 hover:text-accent transition-all group scale-100 hover:scale-[1.02]">
                        Besuchen Sie unser Google Profil
                        <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-accent transition-transform group-hover:translate-x-1" />
                     </a>
                  </div>
               </ScrollReveal>
            </div>
          </div>
        </section>

        <Services />
        <WienFAQ />
        <Contact />
      </main>
      <Footer />
      <AIAssistant />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </div>
  );
}

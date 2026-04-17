import { Metadata } from 'next';
import { ArrowRight, MapPin, Building2, TrendingUp, Handshake, Globe, Monitor, Rocket, Star, CheckCircle2, Quote, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { AIAssistant, Contact } from './DynamicComponents';
import StPoeltenFAQ from './StPoeltenFAQ';

export const metadata: Metadata = {
  title: "Webagentur & Webdesign St. Pölten | Starke Firmen-Homepages",
  description: "Webagentur aktiv in St. Pölten & Umgebung. Bessere Sichtbarkeit durch moderne Landingpages, künstliche Intelligenz und erstklassiges Webdesign.",
  alternates: {
    canonical: "https://ki-marketingagentur.jetzt/werbeagentur-st-poelten",
  },
};

export default function WerbeagenturStPoelten() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BrainStorm Webdesign & Werbeagentur St. Pölten",
    "image": "https://ki-marketingagentur.jetzt/bilder/logo.png",
    "@id": "https://ki-marketingagentur.jetzt/werbeagentur-st-poelten",
    "url": "https://ki-marketingagentur.jetzt/werbeagentur-st-poelten",
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
        "longitude": 15.62
    },
    "serviceArea": {
      "@type": "Place",
      "name": "St. Pölten"
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
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <main>
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-12">
          <div className="absolute inset-0 z-0 overflow-hidden">
             <video autoPlay loop muted playsInline aria-hidden="true" className="w-full h-full object-cover scale-[1.25] object-[30%_center] md:object-[0%_center]">
                <source src="/video/ki-werbeagentur-brainstorm-hero-video.mp4" type="video/mp4" />
             </video>
             <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC]/90 via-white/80 to-transparent"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center mt-8">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 mb-6 shadow-sm animate-reveal-down">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-sm font-bold text-slate-800 uppercase tracking-widest">Die regionale Webagentur</span>
            </div>
            
            <h1 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] mb-6 max-w-5xl tracking-tight animate-reveal-up">
               Modernstes Webdesign <br/>für <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">St. Pölten</span>
            </h1>
            
            <p className="font-body text-[#111827] text-lg leading-relaxed mb-8 max-w-3xl mx-auto animate-reveal-up reveal-delay-200">
               Als Werbeagentur bauen wir für Firmen in der NÖ Landeshauptstadt Webseiten, die messerscharf positionieren und den Umsatz steigern.
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 animate-reveal-up reveal-delay-300">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/60 shadow-sm text-slate-700 font-bold text-[13px] sm:text-sm">
                    <Globe className="w-5 h-5 text-accent" />
                    <span>Konvertierende Websites</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/60 shadow-sm text-slate-700 font-bold text-[13px] sm:text-sm">
                    <Monitor className="w-5 h-5 text-accent" />
                    <span>Business Webseiten</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/60 shadow-sm text-slate-700 font-bold text-[13px] sm:text-sm">
                    <Rocket className="w-5 h-5 text-accent" />
                    <span>Recruiting & Sichtbarkeit</span>
                </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-reveal-up reveal-delay-500 w-full sm:w-auto">
                <a href="#contact" className="w-full sm:w-auto px-12 py-6 bg-accent text-primary rounded-2xl font-black text-lg sm:text-xl hover:bg-[#e5b510] hover:scale-105 transition-all shadow-[0_20px_40px_-10px_rgba(247,196,41,0.5)] flex items-center justify-center gap-4 group">
                   Webprojekt starten
                   <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </a>
            </div>
          </div>
        </section>

        <section className="bg-white/50 backdrop-blur-sm border-y border-slate-200/60 py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-10">
                    <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <Star className="w-6 h-6 text-accent fill-accent" />
                        BrainStorm KI Webagentur für St. Pölten
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4 text-slate-600">
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                <span><strong>Regionale Stärke:</strong> Fokussiert auf den Zentralraum St. Pölten und das Traisental.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                <span><strong>Premium UI:</strong> Webdesign, das auf Smartphone, Tablet und PC atemberaubend aussieht.</span>
                            </li>
                        </ul>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                <span><strong>Text & Copywriting:</strong> Automatisch erstellte, verkaufsstarke Websitetexte dank eigener KI.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                <span><strong>Agiler Service:</strong> Ohne Bürokratie, schnelle Umsetzung und absolute Verlässlichkeit.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <ScrollReveal animation="reveal-right">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[0.95] mb-8">
<span className="font-sans block">Digital in der </span>
<span className="font-sans block text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 drop-shadow-sm pb-2">Landeshauptstadt</span>
</h2>
                  <p className="font-body text-[#111827] text-lg leading-relaxed mb-6">
                     St. Pölten ist das vitale Zentrum Niederösterreichs. Vom Veranstaltungszentrum (VAZ) bis in die florierenden Gewerbeparks – wer als Unternehmen wachsen will, braucht hier einen makellosen digitalen Auftritt. Wir bauen Webseiten, die sich wie professionelle Vertriebsmitarbeiter verhalten.
                  </p>
                  <p className="font-body text-[#111827] text-lg leading-relaxed mb-8">
                     Von unserem nahegelegenen Agentur-Sitz aus betreuen wir Sie hybrid: Schnelle, ressourcenschonende Absprache per Video-Call und persönliche Workshop-Sessions direkt bei Ihnen in St. Pölten oder dem Traisental. 
                     Profitieren Sie von KI-gestütztem Marketing, das Ihrem Unternehmen in NÖ einen massiven Vorsprung sichert.
                  </p>
                  
                  <div className="flex flex-col gap-4 mb-10">
                     <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0">
                           <TrendingUp className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-900 text-lg font-sans">Wettbewerbsvorteil</h4>
                           <span className="font-body text-[#111827] text-sm">Heben Sie sich im Großraum NÖ signifikant vom Durchschnitt ab.</span>
                        </div>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0">
                           <Globe className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-900 text-lg font-sans">Regionale SEO</h4>
                           <span className="font-body text-[#111827] text-sm">Werden Sie in St. Pölten gefunden, wo immer nach Ihnen gesucht wird.</span>
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
                                src="/bilder/testimonial-stpoelten.jpg" 
                                alt="Andreas Hofer Kundenstimme" 
                                className="w-full h-full object-cover"
                             />
                         </div>
                         <div>
                             <div className="flex text-accent mb-1">
                                 {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-accent" />)}
                             </div>
                             <h4 className="font-bold text-slate-900 leading-tight">Andreas Hofer</h4>
                             <span className="text-sm text-slate-500">Verifizierte Kundenbewertung</span>
                         </div>
                     </div>

                     <blockquote className="font-body text-[#111827] text-lg leading-relaxed relative z-10">
                        "Andreas Sturm ist sehr kompetent. Er gibt Auskunft so, dass es auch ein Laie versteht, ist sehr unterstützend und hat immer gute Ideen für eine Lösung. Das war ich bisher nicht gewohnt. Deshalb habe ich volles Vertrauen zu ihm und kann bestens weiter empfehlen!"
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
        <StPoeltenFAQ />
        <Contact />
      </main>
      <Footer />
      <AIAssistant />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </div>
  );
}

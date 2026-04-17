import { Metadata } from 'next';
import { ArrowRight, MapPin, Building2, TrendingUp, Handshake, Globe, Monitor, Rocket, Star, CheckCircle2, Quote, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { AIAssistant, Contact } from './DynamicComponents';
import SteyrFAQ from './SteyrFAQ';

export const metadata: Metadata = {
  title: "Werbeagentur & Webdesign Steyr | Ihre neue Firmen-Homepage",
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
                <span className="text-sm font-bold text-slate-800 uppercase tracking-widest">Webdesign & Werbeagentur lokal</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[0.95] mb-6 max-w-5xl animate-reveal-up">
               <span className="font-sans font-black block">Modernes Webdesign & Homepages für </span>
               <span className="font-sans block text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 drop-shadow-sm pb-2">Steyr</span>
            </h1>
            
            <p className="font-body text-[#111827] text-lg leading-relaxed mb-8 max-w-3xl mx-auto animate-reveal-up reveal-delay-200">
               Heben Sie sich ab. Wir konzipieren als Werbeagentur Ihre hochmoderne Website – präzise zugeschnitten auf den Markt in und um Steyr.
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 animate-reveal-up reveal-delay-300">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/60 shadow-sm text-slate-700 font-bold text-[13px] sm:text-sm">
                    <Globe className="w-5 h-5 text-accent" />
                    <span>Konvertierende Websites</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/60 shadow-sm text-slate-700 font-bold text-[13px] sm:text-sm">
                    <Monitor className="w-5 h-5 text-accent" />
                    <span>Umfassende Homepages</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/60 shadow-sm text-slate-700 font-bold text-[13px] sm:text-sm">
                    <Rocket className="w-5 h-5 text-accent" />
                    <span>SEO & Sichtbarkeit</span>
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
                        BrainStorm KI Webagentur für Steyr
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4 text-slate-600">
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                <span><strong>Fokus:</strong> Premium Webdesign, automatisierte Homepages und vertriebsorientierte Landingpages.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                <span><strong>Standort:</strong> Direkte Erreichbarkeit in unter 30 Minuten für Betriebe in Steyr und Garsten.</span>
                            </li>
                        </ul>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                <span><strong>Qualität:</strong> Psychologisch fundierte Texte vereint mit neuester KI-Performance.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                <span><strong>Rezensionen:</strong> Exzellente Google-Bewertungen aus dem gesamten Umkreis.</span>
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
<span className="font-sans block">Digitaler Erfolg rund </span>
<span className="font-sans block text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 drop-shadow-sm pb-2">um die Eisenstadt</span>
</h2>
                  <p className="font-body text-[#111827] text-lg leading-relaxed mb-6">
                     Steyr ist ein traditionsreiches Wirtschaftszentrum. Vom Stadtplatz bis nach Garsten spürt man die hohe Innovationskraft dieser Region. Mit uns haben Sie nicht einfach "nur" eine Agentur, die schönen Code schreibt – sondern einen Partner, der Homepages kreiert, die Besucher magisch anziehen und in treue Kunden verwandeln.
                  </p>
                  <p className="font-body text-[#111827] text-lg leading-relaxed mb-8">
                     Wir setzen uns bei einem Video-Call, Web-Konferenz oder direkt bei Ihnen im Raum Steyr zusammen. Ganz flexibel nach Ihrem Kalender besprechen wir, was eine professionell erstellte Firmenwebseite heute wirklich liefern muss: Sichtbarkeit in Google, Top-Performance auf dem Smartphone und kristallklare Botschaften.
                  </p>
                  
                  <div className="flex flex-col gap-4 mb-10">
                     <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0">
                           <Monitor className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-900 text-lg font-sans">Einzigartiges Webdesign</h4>
                           <span className="font-body text-[#111827] text-sm">Präzise abgestimmt auf die Zielgruppen in der Region Steyr und Ennstal.</span>
                        </div>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0">
                           <Handshake className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-900 text-lg font-sans">Nahe & greifbar</h4>
                           <span className="font-body text-[#111827] text-sm">Persönliche Web-Meetings oder direkte Besuche vor Ort.</span>
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
                                src="/bilder/testimonial-steyr.jpg" 
                                alt="Christian Rohrhofer Kundenstimme" 
                                className="w-full h-full object-cover"
                             />
                         </div>
                         <div>
                             <div className="flex text-accent mb-1">
                                 {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-accent" />)}
                             </div>
                             <h4 className="font-bold text-slate-900 leading-tight">Christian Rohrhofer</h4>
                             <span className="text-sm text-slate-500">Verifizierte Kundenbewertung</span>
                         </div>
                     </div>

                     <blockquote className="font-body text-[#111827] text-lg leading-relaxed relative z-10">
                        "Da versteht jemand etwas von seinem Handwerk! Vor allem gibt es auch Dienstleistungen über die 'normale' Website hinaus, wie beispielsweise eCommerce und Social Media sowie deren Verbindung. BrainStorm kann ich weiterempfehlen!"
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
        <SteyrFAQ />
        <Contact />
      </main>
      <Footer />
      <AIAssistant />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </div>
  );
}

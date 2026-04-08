import { Metadata } from 'next';
import { ArrowRight, MapPin, Building2, TrendingUp, Handshake, Globe, Monitor, Rocket, Star, CheckCircle2, Quote, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { AIAssistant, Contact } from './DynamicComponents';
import LinzFAQ from './LinzFAQ';

export const metadata: Metadata = {
  title: "Werbeagentur Linz | High-Performance Webdesign & Landingpages",
  description: "Ihre KI-Webagentur für den Wirtschaftsraum Linz. Wir kreieren Business-Webseiten, die Besucher in Kunden und Fachkräfte verwandeln. Jetzt anfragen!",
  alternates: {
    canonical: "https://ki-marketingagentur.jetzt/werbeagentur-linz",
  },
};

export default function WerbeagenturLinz() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BrainStorm Webdesign & Werbeagentur Linz",
    "image": "https://ki-marketingagentur.jetzt/bilder/logo.png",
    "@id": "https://ki-marketingagentur.jetzt/werbeagentur-linz",
    "url": "https://ki-marketingagentur.jetzt/werbeagentur-linz",
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
        "latitude": 48.30,
        "longitude": 14.28
    },
    "serviceArea": {
      "@type": "Place",
      "name": "Linz"
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
                <span className="text-sm font-bold text-slate-800 uppercase tracking-widest">Die Webagentur der Zukunft</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] mb-6 max-w-5xl tracking-tight animate-reveal-up">
               Modernes Webdesign für den Zentralraum <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">Linz</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-700 mb-8 leading-relaxed max-w-3xl mx-auto animate-reveal-up reveal-delay-200">
               Von der Industriezeile bis Urfahr: Wir bauen hochmoderne Homepages, die für Ihre digitale Sichtbarkeit am OÖ-Markt den Unterschied machen.
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 animate-reveal-up reveal-delay-300">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 backdrop-blur-md border border-white border-b-2 shadow-sm text-slate-800 font-bold text-sm sm:text-base">
                    <Globe className="w-4 h-4 text-accent" />
                    <span>Konvertierende Websites</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 backdrop-blur-md border border-white border-b-2 shadow-sm text-slate-800 font-bold text-sm sm:text-base">
                    <Monitor className="w-4 h-4 text-accent" />
                    <span>B2B Landingpages</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 backdrop-blur-md border border-white border-b-2 shadow-sm text-slate-800 font-bold text-sm sm:text-base">
                    <Rocket className="w-4 h-4 text-accent" />
                    <span>Local SEO Leads</span>
                </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 items-center w-full sm:w-auto animate-reveal-up reveal-delay-500">
                <a href="#contact" className="w-full sm:w-auto px-10 py-5 bg-accent text-primary rounded-xl font-bold text-xl hover:bg-[#e5b510] hover:-translate-y-1 transition-all shadow-xl flex items-center justify-center gap-3">
                   Linzer Webprojekt starten
                   <ArrowRight className="w-6 h-6" />
                </a>
            </div>
          </div>
        </section>

        <section className="bg-white/50 backdrop-blur-sm border-y border-slate-200/60 py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-10">
                    <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <Star className="w-6 h-6 text-accent fill-accent" />
                        BrainStorm KI Webagentur für Linz
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4 text-slate-600">
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                <span><strong>Marktzugang:</strong> Spezialisiert auf anspruchsvolle B2B-Kunden und den Linzer Wirtschaftsraum.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                <span><strong>Geschwindigkeit:</strong> Ultraschnelle Ladezeiten als massives SEO-Doping für Google.</span>
                            </li>
                        </ul>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                <span><strong>Texte & KI:</strong> Keine leeren Phrasen. Wir schreiben verkaufspsychologisch optimierte Inhalte.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                <span><strong>Betreuung:</strong> Nahtlose Kommunikation über Video-Calls und persönliche Präsenz bei Bedarf.</span>
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
                  <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 leading-tight">Ihre Online-Auslage <br/>in der Stahlstadt</h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                     Linz ist ein Knotenpunkt für Innovation und Technologie. Sich hier digital zu behaupten, erfordert mehr als nette Bilder. Es erfordert eine intelligente, zielgerichtete Web-Infrastruktur, die aus puren Webseitenbesuchern tatsächliche Anfragen macht.
                  </p>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                     Über die A1 sind wir rasch in Linz vor Ort. Wir wissen, was der oberösterreichische Zentralraum braucht: Verlässlichkeit, Schnelligkeit und ein digitales Branding, das Vertrauen ausstrahlt. Ob KI-Integrationen, Recruting-Landingpages oder der komplette Relaunch Ihrer Unternehmenswebsite – wir sind Ihr starker Umsetzungspartner.
                  </p>
                  
                  <div className="flex flex-col gap-4 mb-10">
                     <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0">
                           <TrendingUp className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-900 text-lg">Konvertierendes Webdesign</h4>
                           <span className="text-slate-600 text-sm">Psychologisch durchdachte Nutzerführung (UX/UI).</span>
                        </div>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0">
                           <Globe className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-900 text-lg">Regionale Dominanz</h4>
                           <span className="text-slate-600 text-sm">Präzises Geo-SEO für Top-Platzierungen im Linzer Suchraum.</span>
                        </div>
                     </div>
                  </div>
               </ScrollReveal>

               <ScrollReveal animation="reveal-left" delay={200}>
                  <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-xl relative">
                     <Quote className="w-16 h-16 text-accent/20 absolute top-6 right-8 rotate-180" />
                     
                     <div className="flex items-center gap-4 mb-6">
                         <div className="w-20 h-20 rounded-full bg-slate-200 overflow-hidden shrink-0 border-4 border-white shadow-md relative">
                             <img 
                                src="/bilder/testimonial-linz.jpg" 
                                alt="Thomas Jungreuthmayer Kundenstimme" 
                                className="w-full h-full object-cover"
                             />
                         </div>
                         <div>
                             <div className="flex text-accent mb-1">
                                 {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-accent" />)}
                             </div>
                             <h4 className="font-bold text-slate-900 leading-tight">Thomas Jungreuthmayer</h4>
                             <span className="text-sm text-slate-500">Verifizierte Kundenbewertung</span>
                         </div>
                     </div>

                     <blockquote className="text-slate-700 leading-relaxed relative z-10 italic">
                        "Tolle, kompetente und zeitnahe Umsetzung unserer neuen Homepage mit der wir sehr zufrieden sind. Hat uns sehr professionell bei der Weiterentwicklung unserer Etiketten unterstützt. Waren mit der kundenorientierten Zusammenarbeit sehr zufrieden."
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
        <LinzFAQ />
        <Contact />
      </main>
      <Footer />
      <AIAssistant />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </div>
  );
}

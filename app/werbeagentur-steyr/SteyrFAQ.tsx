"use client";
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const STEYR_FAQS = [
  {
    question: "Warum sollte ein Steyrer Unternehmen auf eine professionelle Homepage setzen?",
    answer: "Weil die Konkurrenz im Raum Steyr extrem stark ist. Von der Eisenstraße über Garsten bis zum Stadtplatz: Konsumenten suchen online. Nur wenn Ihre Webseite modern ist und sofort überzeugt, konvertieren Sie hier Suchanfragen in echte Laufkundschaft oder B2B-Aufträge."
  },
  {
    question: "Können wir uns für das Web-Projekt in Steyr persönlich treffen?",
    answer: "Selbstverständlich! Wir haben unseren Sitz im nahen Mostviertel und sind in nur knapp 25 Minuten in Steyr. Wir lieben den direkten, unkomplizierten Kontakt vor Ort."
  },
  {
    question: "Bietet ihr Landingpages oder vollumfängliche Firmen-Webseiten an?",
    answer: "Ob ein kompakter, verkaufsstarker One-Pager für ein Event am Steyrer Stadtplatz oder eine umfassende Homepage für einen Industriebetrieb – wir realisieren Webseiten-Projekte in jeder Größe, immer mit Fokus auf KI und maximale Conversion."
  },
  {
    question: "Wie läuft der Support nach Live-Gang der Website ab?",
    answer: "Mit uns haben Sie aus der nahen Region einen verlässlichen Ansprechpartner. Wir kümmern uns um alle Updates, DSGVO-Anpassungen (Google Fonts, Cookies) und sind bei Rückfragen per kurzen Wegen in Steyr für Sie da."
  }
];

const SteyrFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="scroll-mt-32 py-32 bg-white border-t border-gray-200 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal className="mb-20 text-center sm:text-left flex flex-col items-center sm:items-start max-w-2xl mx-auto sm:mx-0">
                    <div className="inline-flex items-center px-6 py-2 rounded-full bg-transparent text-gray-600 font-bold text-xs mb-6 sm:mb-8 uppercase tracking-widest border border-gray-200">Fragen aus der Region
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[var(--font-playfair)] font-medium text-gray-900 tracking-tight leading-[1.1] py-1 uppercase">
                        <span className="block">Klarheit für</span>
                        <span className="block text-transparent bg-clip-text pb-2 sm:pb-4" style={{backgroundImage: 'linear-gradient(180deg, #111827 0%, #374151 28%, #111827 48%, #4b5563 75%, #000000 100%)'}}>Ihr Webprojekt.</span>
                    </h2>
                    
                </ScrollReveal>

                <div className="space-y-0 border-t border-gray-200">
                    {STEYR_FAQS.map((faq, index) => (
                        <ScrollReveal key={index} animation="reveal-up" delay={index * 50}>
                            <div className="group border-b border-gray-200">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full py-4 sm:py-6 flex items-center justify-between gap-6 text-left cursor-pointer focus:outline-none"
                                >
                                    <h3 className={`font-[var(--font-playfair)] font-medium text-lg sm:text-xl tracking-normal leading-snug transition-colors duration-200 ${openIndex === index ? 'text-[#F7C429]' : 'text-gray-900 group-hover:text-[#F7C429]'}`}>
                                        {faq.question}
                                    </h3>
                                    <div className={`shrink-0 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[#F7C429]' : 'text-gray-500 group-hover:text-[#F7C429]'}`}>
                                        <ChevronDown className="w-6 h-6" strokeWidth={2} />
                                    </div>
                                </button>
                                <div className={`grid transition-all duration-500 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 mb-6' : 'grid-rows-[0fr] opacity-0 mb-0'}`}>
                                    <div className="overflow-hidden">
                                        <div className="pb-4 sm:pb-6 text-gray-600 leading-relaxed font-body text-lg pr-8 sm:pr-24">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SteyrFAQ;

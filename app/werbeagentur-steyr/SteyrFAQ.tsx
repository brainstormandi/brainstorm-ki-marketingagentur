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
        <section id="faq" className="scroll-mt-32 py-24 sm:py-32 bg-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-50 text-slate-800 font-bold text-sm uppercase tracking-widest mb-6 border border-slate-100">
                        <HelpCircle className="w-4 h-4 text-accent" />
                        Fragen aus der Region
                    </div>
                    <h2 className="text-4xl sm:text-6xl font-display font-black text-slate-900 mb-6 tracking-tight leading-[1]">
                        Klarheit für  <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#e5b510]">Ihr Webprojekt.</span>
                    </h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        Die wichtigsten Fragen und Antworten zu Ihrer neuen Firmen-Homepage im Raum Steyr.
                    </p>
                </ScrollReveal>

                <div className="space-y-2">
                    {STEYR_FAQS.map((faq, index) => (
                        <ScrollReveal key={index} animation="reveal-up" delay={index * 50}>
                            <div className="group border-b border-slate-200/60 transition-colors hover:border-slate-300">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full py-6 sm:py-8 flex items-start justify-between gap-6 text-left cursor-pointer focus:outline-none"
                                >
                                    <h4 className={`font-display font-bold text-xl sm:text-2xl tracking-tight leading-snug transition-colors duration-300 ${openIndex === index ? 'text-accent' : 'text-slate-900 group-hover:text-slate-700'}`}>
                                        {faq.question}
                                    </h4>
                                    <div className={`shrink-0 flex items-center justify-center mt-1 transition-transform duration-500 ${openIndex === index ? 'rotate-180 text-accent' : 'text-slate-400 group-hover:text-slate-600'}`}>
                                        <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2} />
                                    </div>
                                </button>
                                <div className={`grid transition-all duration-500 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 mb-6' : 'grid-rows-[0fr] opacity-0 mb-0'}`}>
                                    <div className="overflow-hidden">
                                        <div className="text-slate-600 leading-relaxed text-lg pr-4 sm:pr-14 whitespace-pre-line pb-2">
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

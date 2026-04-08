"use client";
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const WIEN_FAQS = [
  {
    question: "Warum eine Werbeagentur aus Niederösterreich für ein Wiener Unternehmen?",
    answer: "Viele Webagenturen in Wien rufen hohe Großstadt-Stundensätze auf, bei gleichzeitig träger Projektbetreuung. Bei uns profitieren Sie vom perfekten Mix: Wir sind schnell, extrem innovativ durch KI-Technologien und bieten Ihnen oberste Qualität zu fairen Konditionen."
  },
  {
    question: "Können Web-Projekte rein digital abgewickelt werden?",
    answer: "Absolut. Unsere Video-Calls und digitalen Abstimmungstools laufen derart reibungslos, dass viele unserer Kunden – sei es in der Inneren Stadt, in Floridsdorf oder im Speckgürtel Mödling – unsere Performance schätzen, ohne zeitraubende Jour-Fixe Termine vor Ort in Wien wahrnehmen zu müssen. Dennoch stehen wir auf Wunsch für Kick-Offs physisch bereit."
  },
  {
    question: "Wie optimieren Sie für den umkämpften Wiener Suchmaschinen-Markt?",
    answer: "In Wien reicht 'ein bisschen SEO' nicht. Wir konzipieren Webseiten mit perfekter technischer Performance, Schema.org Local Business Implementierungen und semantisch extrem starken Inhalten. Ihre Seite kommuniziert direkt mit KIs wie ChatGPT und den Google Algorithmen, um Sie lokal sichtbar zu machen."
  },
  {
    question: "Bieten Sie auch die Erstellung von KI-Chatbots für Wiener KMUs an?",
    answer: "Ja, smarte Automatisierungen wie KI-Chatbots gehören zu unserer Kernkompetenz. Damit qualifizieren Sie Besucher Ihrer Homepage vor, beantworten Standardfragen automatisch und holen qualifizierte Leads für Ihr Unternehmen rein."
  }
];

const WienFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="scroll-mt-32 py-24 sm:py-32 bg-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-50 text-slate-800 font-bold text-sm uppercase tracking-widest mb-6 border border-slate-100">
                        <HelpCircle className="w-4 h-4 text-accent" />
                        Fragen aus der Metropolregion
                    </div>
                    <h2 className="text-4xl sm:text-6xl font-display font-black text-slate-900 mb-6 tracking-tight leading-[1]">
                        Exzellenz für <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#e5b510]">den Wiener Raum.</span>
                    </h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        Die wichtigsten Fragen und Antworten zu Ihrer Firmen-Homepage in Wien und Umgebung.
                    </p>
                </ScrollReveal>

                <div className="space-y-2">
                    {WIEN_FAQS.map((faq, index) => (
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

export default WienFAQ;

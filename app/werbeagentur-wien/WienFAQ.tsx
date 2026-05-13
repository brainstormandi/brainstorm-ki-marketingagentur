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
        <section id="faq" className="scroll-mt-32 py-32 bg-white border-t border-gray-200 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal className="mb-20 text-center sm:text-left flex flex-col items-center sm:items-start max-w-2xl mx-auto sm:mx-0">
                    <div className="inline-flex items-center px-6 py-2 rounded-full bg-transparent text-gray-600 font-bold text-xs mb-6 sm:mb-8 uppercase tracking-widest border border-gray-200">Fragen aus der Metropolregion
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[var(--font-playfair)] font-medium text-gray-900 tracking-tight leading-[1.1] py-1 uppercase">
                        <span className="block">Exzellenz für</span>
                        <span className="block text-transparent bg-clip-text pb-2 sm:pb-4" style={{backgroundImage: 'linear-gradient(180deg, #111827 0%, #374151 28%, #111827 48%, #4b5563 75%, #000000 100%)'}}>den Wiener Raum.</span>
                    </h2>
                    
                </ScrollReveal>

                <div className="space-y-0 border-t border-gray-200">
                    {WIEN_FAQS.map((faq, index) => (
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

export default WienFAQ;

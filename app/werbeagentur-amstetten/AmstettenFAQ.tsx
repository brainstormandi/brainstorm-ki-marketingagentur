"use client";
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const AMSTETTEN_FAQS = [
  {
    question: "Warum eine fokussierte Agentur für den Raum Amstetten beauftragen?",
    answer: "Regionale Nähe schafft Vertrauen. Ein persönliches Treffen vor Ort in Amstetten oder Umgebung ist für die strategische Planung enorm wichtig – speziell, wenn es um ein essenzielles Aushängeschild wie Ihre neue Firmen-Homepage geht."
  },
  {
    question: "Erstellt ihr 'nur' Landingpages oder gesamte Firmen-Webseiten?",
    answer: "Wir machen beides! Von einer verkaufsstarken Einzel-Landingpage über den eleganten Web-Auftritt (OnePager) bis hin zur tiefgehenden, mehrseitigen Homepage für große KMU setzen wir alles professionell um."
  },
  {
    question: "Sind Beratungen vor Ort im Mostviertel möglich?",
    answer: "Ja, absolut. Wir sind regelmäßig von Linz über Amstetten bis St. Pölten unterwegs. Wir kommen dorthin, wo unsere Kunden sind, um Ihr Webseiten-Projekt direkt vor Ort optimal zu besprechen."
  },
  {
    question: "Bis wann ist meine neue Webseite oder Homepage online?",
    answer: "Durch modernste Prozesse und KI-optimierte Erstellung realisieren wir die meisten Firmen-Webseiten innerhalb von 2 bis 4 Wochen ab dem Strategiegespräch – fertig getextet, designed und online."
  }
];

const AmstettenFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="scroll-mt-32 py-32 bg-[#F8FAFC] relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal className="mb-20 text-center sm:text-left flex flex-col items-center sm:items-start max-w-2xl mx-auto sm:mx-0">
                    <div className="inline-flex items-center px-6 py-2 rounded-full bg-slate-50 text-slate-800 font-bold text-xs mb-6 sm:mb-8 uppercase tracking-widest border border-slate-100">Fragen aus der Region
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight py-1">
                        <span className="font-sans block">Klarheit für  </span><span className="font-sans block text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 drop-shadow-sm pb-2 sm:pb-4">Ihre neue Website.</span>
                    </h2>
                    
                </ScrollReveal>

                <div className="space-y-0 border-t border-slate-200">
                    {AMSTETTEN_FAQS.map((faq, index) => (
                        <ScrollReveal
                            key={index}
                            animation="reveal-up"
                            delay={index * 50}
                        >
                            <div className="group border-b border-slate-200">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full py-4 sm:py-6 flex items-center justify-between gap-6 text-left cursor-pointer focus:outline-none"
                                    aria-expanded={openIndex === index}
                                    aria-controls={`faq-answer-${index}`}
                                >
                                    <h3 className={`font-sans font-medium text-lg sm:text-xl tracking-tight leading-snug transition-colors duration-200 ${openIndex === index ? 'text-accent' : 'text-[#111827] group-hover:text-accent'}`}>
                                        {faq.question}
                                    </h3>
                                    <div className={`shrink-0 flex items-center justify-center mt-1 transition-transform duration-500 ${openIndex === index ? 'rotate-180 text-accent' : 'text-slate-400 group-hover:text-slate-600'}`} aria-hidden="true">
                                        <ChevronDown className="w-6 h-6" strokeWidth={2} />
                                    </div>
                                </button>
                                <div
                                    id={`faq-answer-${index}`}
                                    role="region"
                                    className={`grid transition-all duration-500 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 mb-6' : 'grid-rows-[0fr] opacity-0 mb-0'}`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="pb-4 sm:pb-6 text-[#111827] leading-relaxed font-body text-lg pr-8 sm:pr-24">
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

export default AmstettenFAQ;

"use client";
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const PERG_FAQS = [
  {
    question: "Warum reicht eine günstige Baukasten-Homepage in der Region Perg heute oft nicht mehr?",
    answer: "Weil der Markt im Machland und Mühlviertel hart umkämpft ist. Potenzielle Kunden oder neue Mitarbeiter entscheiden online in Millisekunden. Wenn Ihre Webseite langsam lädt, auf Smartphones schlecht funktioniert oder unprofessionell wirkt, wechseln Besucher im Raum Perg sofort und unwiederbringlich zu Ihren Mitbewerbern."
  },
  {
    question: "Arbeiten Sie als Online Agentur auch persönlich mit Betrieben im Bezirk?",
    answer: "Ja! Virtuelle Effizienz ist gut, echte Nähe ist besser. Unser Außendienst ist im Gebiet Machland, Perg und bis nach Grein flexibel unterwegs. Wir lieben es, Webdesign-Ziele bei einem Kaffee direkt mit Ihnen am Tisch zu skizzieren oder effizient via Video-Call abzuklären."
  },
  {
    question: "Müssen wir die Texte für die neue Homepage selbst schreiben?",
    answer: "Nein, ganz im Gegenteil. Als KI-Vorreiter nutzen wir als Werbeagentur modernste Technologien, um verkaufspsychologisch optimierte und branchenspezifische Inhalte für Ihre Region zu kreieren. Wir nehmen Ihnen also die lästige Textarbeit vollständig ab."
  },
  {
    question: "Ich haben bereits eine in die Jahre gekommene Webseite. Bieten Sie Relaunches an?",
    answer: "Selbstverständlich. Wir analysieren Ihre alte Homepage, retten was für Google wichtig ist (Rankings), und verpacken den Rest in ein extrem schnelles, völlig neues und vor allem konvertierendes Web-Gewand."
  }
];

const PergFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="scroll-mt-32 py-24 sm:py-32 bg-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-50 text-slate-800 font-bold text-sm uppercase tracking-widest mb-6 border border-slate-100">
                        <HelpCircle className="w-4 h-4 text-accent" />
                        Transparenz für das Machland
                    </div>
                    <h2 className="text-4xl sm:text-6xl font-display font-black text-slate-900 mb-6 tracking-tight leading-[1]">
                        Fragen & Antworten  <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#e5b510]">zu Ihrer neuen Homepage.</span>
                    </h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        Wir klären die drängendsten Fragen zur Zusammenarbeit im Raum Perg.
                    </p>
                </ScrollReveal>

                <div className="space-y-2">
                    {PERG_FAQS.map((faq, index) => (
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

export default PergFAQ;

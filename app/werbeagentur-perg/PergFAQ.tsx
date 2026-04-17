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
        <section id="faq" className="scroll-mt-32 py-32 bg-[#F8FAFC] relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal className="mb-20 text-center sm:text-left flex flex-col items-center sm:items-start max-w-2xl mx-auto sm:mx-0">
                    <div className="inline-flex items-center px-6 py-2 rounded-full bg-slate-50 text-slate-800 font-bold text-xs mb-6 sm:mb-8 uppercase tracking-widest border border-slate-100">Transparenz für das Machland
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight py-1">
                        <span className="font-sans block">Fragen & Antworten  </span><span className="font-sans block text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 drop-shadow-sm pb-2 sm:pb-4">zu Ihrer neuen Homepage.</span>
                    </h2>
                    
                </ScrollReveal>

                <div className="space-y-0 border-t border-slate-200">
                    {PERG_FAQS.map((faq, index) => (
                        <ScrollReveal key={index} animation="reveal-up" delay={index * 50}>
                            <div className="group border-b border-slate-200">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full py-4 sm:py-6 flex items-center justify-between gap-6 text-left cursor-pointer focus:outline-none"
                                >
                                    <h3 className={`font-sans font-medium text-lg sm:text-xl tracking-tight leading-snug transition-colors duration-200 ${openIndex === index ? 'text-accent' : 'text-[#111827] group-hover:text-accent'}`}>
                                        {faq.question}
                                    </h3>
                                    <div className={`shrink-0 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-accent' : 'text-slate-400 group-hover:text-accent'}`}>
                                        <ChevronDown className="w-6 h-6" strokeWidth={2} />
                                    </div>
                                </button>
                                <div className={`grid transition-all duration-500 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 mb-6' : 'grid-rows-[0fr] opacity-0 mb-0'}`}>
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

export default PergFAQ;

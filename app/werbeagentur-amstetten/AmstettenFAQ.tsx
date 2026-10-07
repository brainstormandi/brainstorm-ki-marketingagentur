"use client";
import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

import { AMSTETTEN_FAQS } from './amstettenData';

const AmstettenFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="scroll-mt-32 py-24 sm:py-32 bg-white border-t border-gray-200 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal className="mb-14 text-center sm:text-left flex flex-col items-center sm:items-start max-w-2xl mx-auto sm:mx-0">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gray-100 text-gray-700 font-bold text-xs mb-6 uppercase tracking-widest border border-gray-200">
                        <Sparkles className="w-3.5 h-3.5 text-[#F7C429]" />
                        Fragen & Fakten für Amstetten
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[var(--font-playfair)] font-medium text-gray-900 tracking-tight leading-[1.15]">
                        <span className="block">Häufige Fragen zu</span>
                        <span className="block text-transparent bg-clip-text" style={{backgroundImage: 'linear-gradient(180deg, #111827 0%, #374151 28%, #111827 48%, #4b5563 75%, #000000 100%)'}}>
                            Webseite & Werbeagentur in Amstetten
                        </span>
                    </h2>
                    <p className="font-[var(--font-inter)] text-gray-600 text-base sm:text-lg mt-4 leading-relaxed">
                        Klare Antworten auf die wichtigsten Fragen zur Homepage-Erstellung, Preisen, Go-Live-Zeiten und Sichtbarkeit im Raum Amstetten.
                    </p>
                </ScrollReveal>

                <div className="space-y-0 border-t border-gray-200">
                    {AMSTETTEN_FAQS.map((faq, index) => (
                        <ScrollReveal
                            key={index}
                            animation="reveal-up"
                            delay={index * 40}
                        >
                            <div className="group border-b border-gray-200">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full py-5 sm:py-6 flex items-center justify-between gap-6 text-left cursor-pointer focus:outline-none"
                                    aria-expanded={openIndex === index}
                                    aria-controls={`faq-answer-${index}`}
                                >
                                    <h3 className={`font-[var(--font-playfair)] font-medium text-lg sm:text-xl tracking-normal leading-snug transition-colors duration-200 ${openIndex === index ? 'text-[#F7C429]' : 'text-gray-900 group-hover:text-[#F7C429]'}`}>
                                        {faq.question}
                                    </h3>
                                    <div className={`shrink-0 flex items-center justify-center mt-1 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-accent' : 'text-gray-400 group-hover:text-gray-600'}`} aria-hidden="true">
                                        <ChevronDown className="w-6 h-6" strokeWidth={2} />
                                    </div>
                                </button>
                                <div
                                    id={`faq-answer-${index}`}
                                    role="region"
                                    className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 mb-6' : 'grid-rows-[0fr] opacity-0 mb-0'}`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="pb-4 sm:pb-6 text-gray-700 leading-relaxed font-[var(--font-inter)] text-base sm:text-lg pr-4 sm:pr-16">
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

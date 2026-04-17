"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../constants';
import ScrollReveal from './ScrollReveal';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="scroll-mt-32 py-32 bg-[#F8FAFC]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal className="mb-20 text-center sm:text-left flex flex-col items-center sm:items-start max-w-2xl mx-auto sm:mx-0">
                    <div className="inline-flex items-center px-6 py-2 rounded-full bg-slate-50 text-slate-800 font-bold text-xs mb-6 sm:mb-8 uppercase tracking-widest border border-slate-100">Antworten</div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight py-1">
                        <span className="font-sans block">Häufige</span>
                        <span className="font-sans block text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 drop-shadow-sm pb-2 sm:pb-4">Fragen.</span>
                    </h2>
                </ScrollReveal>

                <div className="space-y-0 border-t border-slate-200">
                    {FAQS.map((faq, index) => (
                        <ScrollReveal key={index} delay={index * 50} animation="reveal-up">
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
                                    
                                    <div className={`shrink-0 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-accent' : 'text-slate-400 group-hover:text-accent'}`} aria-hidden="true">
                                        <ChevronDown className="w-6 h-6" strokeWidth={2} />
                                    </div>
                                </button>

                                <div
                                    id={`faq-answer-${index}`}
                                    role="region"
                                    className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
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

export default FAQ;

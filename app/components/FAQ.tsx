"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../constants';
import ScrollReveal from './ScrollReveal';

// ally.co style: clean accordion on cream
const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="scroll-mt-20 bg-[#F5EFE6] py-20 md:py-28">
            <div className="max-w-6xl mx-auto px-6 md:px-12">

                {/* ── HEADER ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
                    <ScrollReveal animation="reveal-right" className="lg:col-span-6">
                        <span className="font-[var(--font-inter)] text-[11px] font-bold uppercase tracking-[0.18em] text-[#1C1C1C]/40 mb-4 block">
                            Antworten
                        </span>
                        <h2
                            className="font-[var(--font-vollkorn)] font-semibold text-[#1C1C1C] leading-tight"
                            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
                        >
                            Häufige Fragen,{" "}
                            <span className="font-[var(--font-vollkorn)] italic font-normal text-[#1C1C1C]/50">
                                ehrlich beantwortet.
                            </span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal animation="reveal-left" delay={100} className="lg:col-span-6 flex items-end">
                        <p className="font-[var(--font-inter)] text-[#1C1C1C]/55 text-base leading-relaxed">
                            Du hast Fragen zu unserer Arbeitsweise oder zu KI-Marketing? Hier findest du klare Antworten.
                        </p>
                    </ScrollReveal>
                </div>

                {/* ── ACCORDION (flat editorial, ally-style) ── */}
                <div className="border-t border-[#1C1C1C]/10">
                    {FAQS.map((faq, index) => (
                        <ScrollReveal key={index} delay={index * 50} animation="reveal-up">
                            <div className="border-b border-[#1C1C1C]/10">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full py-6 flex items-center justify-between gap-6 text-left cursor-pointer focus:outline-none group"
                                    aria-expanded={openIndex === index}
                                    aria-controls={`faq-answer-${index}`}
                                >
                                    <h3 className={`font-[var(--font-vollkorn)] font-medium text-lg leading-snug transition-colors duration-200 ${
                                        openIndex === index ? 'text-[#1C1C1C]' : 'text-[#1C1C1C]/65 group-hover:text-[#1C1C1C]'
                                    }`}>
                                        {faq.question}
                                    </h3>
                                    <div className={`shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                                        openIndex === index
                                            ? 'bg-[#F7C429] border-[#F7C429] rotate-180'
                                            : 'bg-transparent border-[#1C1C1C]/20 group-hover:border-[#1C1C1C]/60'
                                    }`} aria-hidden="true">
                                        <ChevronDown className="w-4 h-4 text-[#1C1C1C]" strokeWidth={2.5} />
                                    </div>
                                </button>

                                <div
                                    id={`faq-answer-${index}`}
                                    role="region"
                                    className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="pb-6 font-[var(--font-inter)] text-[#1C1C1C]/65 text-base leading-relaxed pr-12">
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

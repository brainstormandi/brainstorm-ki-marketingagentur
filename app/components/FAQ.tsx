"use client";
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../constants';
import ScrollReveal from './ScrollReveal';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="scroll-mt-32 py-40 bg-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal className="text-center mb-32">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-50 text-slate-800 font-bold text-sm uppercase tracking-widest mb-6 border border-slate-100">
                        <HelpCircle className="w-4 h-4 text-accent" />
                        Antworten
                    </div>
                    <h2 className="text-5xl sm:text-7xl font-display font-black text-slate-900 mb-8 tracking-normal leading-[0.95]">
                        Klarheit für <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#e5b510]">Ihren Erfolg.</span>
                    </h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        Transparenz ist das Fundament unserer Zusammenarbeit. Hier finden Sie alle Details zu unserem Prozess.
                    </p>
                </ScrollReveal>

                <div className="space-y-2">
                    {FAQS.map((faq, index) => (
                        <ScrollReveal
                            key={index}
                            animation="reveal-up"
                            delay={index * 50} // Faster staggered animation
                        >
                            <div className="group border-b border-slate-200/60 transition-colors hover:border-slate-300">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full py-6 sm:py-8 flex items-start justify-between gap-6 text-left cursor-pointer focus:outline-none"
                                    aria-expanded={openIndex === index}
                                    aria-controls={`faq-answer-${index}`}
                                >
                                    <h4 className={`font-display font-bold text-xl sm:text-2xl tracking-tight leading-snug transition-colors duration-300 ${openIndex === index ? 'text-accent' : 'text-slate-900 group-hover:text-slate-700'}`}>
                                        {faq.question}
                                    </h4>
                                    <div className={`shrink-0 flex items-center justify-center mt-1 transition-transform duration-500 ${openIndex === index ? 'rotate-180 text-accent' : 'text-slate-400 group-hover:text-slate-600'}`} aria-hidden="true">
                                        <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2} />
                                    </div>
                                </button>
                                <div
                                    id={`faq-answer-${index}`}
                                    role="region"
                                    className={`grid transition-all duration-500 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 mb-6' : 'grid-rows-[0fr] opacity-0 mb-0'}`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="text-slate-600 leading-relaxed text-lg sm:text-xl pr-4 sm:pr-14 whitespace-pre-line pb-2">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal delay={500} className="mt-32">
                    <div className="relative flex flex-col items-center">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-accent/5 rounded-[4rem] blur-3xl -z-10" aria-hidden="true"></div>

                        <div className="text-center max-w-2xl">
                            <h3 className="text-3xl sm:text-4xl font-display font-black mb-6 tracking-normal text-slate-900">Noch mehr wissen?</h3>
                            <p className="text-xl text-slate-500 mb-12 leading-relaxed">
                                Unser KI-Experte Andi Sturm steht Ihnen für ein persönliches Strategie-Gespräch zur Verfügung. Überzeugen Sie sich selbst.
                            </p>

                            <a
                                href="#contact"
                                className="inline-flex items-center gap-6 px-12 py-7 bg-white border-2 border-slate-100 text-slate-900 rounded-[2rem] font-black uppercase tracking-widest hover:border-accent hover:shadow-2xl hover:shadow-accent/10 hover:scale-[1.03] transition-all group"
                            >
                                <span className="relative z-10 font-bold">Erstgespräch buchen</span>
                                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:rotate-12">
                                    <ChevronDown className="w-6 h-6 text-primary -rotate-90" />
                                </div>
                            </a>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default FAQ;

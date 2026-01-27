"use client";
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-40 bg-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-28 animate-reveal-up">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-50 text-primary font-bold text-sm uppercase tracking-widest mb-6 border border-slate-100">
                        <HelpCircle className="w-4 h-4 text-accent" />
                        Antworten
                    </div>
                    <h2 className="text-5xl sm:text-7xl font-display font-black text-slate-900 mb-8 tracking-tighter">
                        Häufige Fragen
                    </h2>
                    <p className="text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                        Alles, was Sie über unsere Zusammenarbeit wissen müssen. Klar und transparent.
                    </p>
                </div>

                <div className="space-y-6">
                    {FAQS.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-3xl border transition-all duration-500 overflow-hidden animate-reveal-up ${openIndex === index ? 'border-accent shadow-2xl shadow-accent/5' : 'border-slate-100 hover:border-slate-300'}`}
                            style={{ animationDelay: `${(index + 1) * 100}ms` }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-10 py-8 flex items-center justify-between gap-6 text-left cursor-pointer"
                            >
                                <span className={`font-black text-2xl tracking-tight transition-colors duration-300 ${openIndex === index ? 'text-slate-900' : 'text-slate-700'}`}>{faq.question}</span>
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${openIndex === index ? 'bg-accent text-primary rotate-180' : 'bg-slate-50 text-slate-400'}`}>
                                    <ChevronDown className="w-6 h-6" />
                                </div>
                            </button>
                            <div className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="px-10 pb-10 pt-0 text-slate-500 leading-relaxed text-lg">
                                    <div className="pt-6 border-t border-slate-50">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

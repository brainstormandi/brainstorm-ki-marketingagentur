"use client";
import React from 'react';
import { ADVANTAGES } from '../constants';
import ScrollReveal from './ScrollReveal';
import { CheckCircle2 } from 'lucide-react';

const stats = [
    { value: "492+", label: "Zufriedene KMUs" },
    { value: "32", label: "Jahre Erfahrung" },
    { value: "5.0", label: "Google Rating" },
    { value: "<7", label: "Tage Launch" },
];

const WhyUs = () => {
    return (
        <section id="philosophie" className="scroll-mt-32 py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal className="text-center mb-20 max-w-3xl mx-auto">
                    <div className="inline-flex items-center px-6 py-2 rounded-full bg-slate-50 text-slate-800 font-bold text-xs mb-6 sm:mb-8 uppercase tracking-widest border border-slate-100">Warum wir</div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[0.95]">
                        <span className="font-sans block">Ihre Agentur</span>
                        <span className="font-sans block text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 drop-shadow-sm pb-2">für Wachstum.</span>
                    </h2>
                </ScrollReveal>

                {/* Stats simple row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
                    {stats.map((s, i) => (
                        <ScrollReveal key={i} delay={i * 100} animation="reveal-up">
                            <div className="text-center border-l-2 border-slate-100 pl-4 py-2">
                                <div className="font-sans text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter mb-2">
                                    {s.value}
                                </div>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                    {s.label}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ADVANTAGES.map((adv, i) => (
                        <ScrollReveal key={i} delay={i * 100} animation="reveal-up" className="h-full">
                            <div className="relative bg-[#F8FAFC] rounded-3xl p-10 sm:p-12 border border-slate-200 group hover:border-slate-300 hover:shadow-xl transition-all duration-500 h-full flex flex-col overflow-hidden">
                                {/* Large number watermark */}
                                <div className="absolute right-0 bottom-0 pointer-events-none translate-x-[20%] translate-y-[20%] font-sans text-[12rem] font-black leading-none text-white group-hover:text-amber-50 group-hover:translate-x-[15%] transition-all duration-700">
                                    {i + 1}
                                </div>

                                <div className="flex flex-col relative z-10 flex-grow">
                                    <h3 className="font-sans text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
                                        {adv.title}
                                    </h3>
                                    <p className="text-[#111827] text-lg leading-relaxed font-body">
                                        {adv.description}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;

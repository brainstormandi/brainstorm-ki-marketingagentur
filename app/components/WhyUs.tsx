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
        <section id="philosophie" className="scroll-mt-32 py-32 bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal className="text-center mb-20 max-w-3xl mx-auto">
                    <div className="inline-flex items-center px-6 py-2 rounded-full bg-transparent text-gray-600 font-bold text-xs mb-6 sm:mb-8 uppercase tracking-widest border border-gray-200">Warum wir</div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[var(--font-playfair)] font-medium text-gray-900 tracking-tight leading-[1.1] py-1 uppercase">
                        <span className="block">Ihre Agentur</span>
                        <span className="block text-transparent bg-clip-text pb-2" style={{backgroundImage: 'linear-gradient(180deg, #111827 0%, #374151 28%, #111827 48%, #4b5563 75%, #000000 100%)'}}>für Wachstum.</span>
                    </h2>
                </ScrollReveal>

                {/* Stats simple row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
                    {stats.map((s, i) => (
                        <ScrollReveal key={i} delay={i * 100} animation="reveal-up">
                            <div className="text-center border-l border-gray-200 pl-4 py-2">
                                <div className="font-[var(--font-playfair)] text-4xl sm:text-5xl font-medium text-gray-900 tracking-tight mb-2">
                                    {s.value}
                                </div>
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                                    {s.label}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ADVANTAGES.map((adv, i) => (
                        <ScrollReveal key={i} delay={i * 100} animation="reveal-up" className="h-full">
                            <div className="relative bg-transparent rounded-3xl p-10 sm:p-12 border border-gray-200 backdrop-blur-sm group hover:border-[#F7C429]/50 hover:shadow-[0_4px_20px_rgba(247,196,41,0.3)] transition-all duration-500 h-full flex flex-col overflow-hidden">
                                {/* Large number watermark */}
                                <div className="absolute right-0 bottom-0 pointer-events-none translate-x-[20%] translate-y-[20%] font-sans text-[12rem] font-black leading-none text-[#00000005] group-hover:text-[#F7C429]/10 transition-all duration-700">
                                    {i + 1}
                                </div>

                                <div className="flex flex-col relative z-10 flex-grow">
                                    <h3 className="font-[var(--font-playfair)] text-2xl font-medium text-gray-900 mb-4 tracking-normal leading-tight">
                                        {adv.title}
                                    </h3>
                                    <p className="text-gray-600 text-lg leading-relaxed font-body">
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

"use client";
import React from 'react';
import ScrollReveal from './ScrollReveal';

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
                        <span className="block">Deine Agentur</span>
                        <span className="block text-transparent bg-clip-text pb-2" style={{backgroundImage: 'linear-gradient(180deg, #111827 0%, #374151 28%, #111827 48%, #4b5563 75%, #000000 100%)'}}>für Wachstum.</span>
                    </h2>
                </ScrollReveal>

                {/* Stats simple row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
            </div>
        </section>
    );
};

export default WhyUs;

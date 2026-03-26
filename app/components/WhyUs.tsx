"use client";
import React from 'react';
import { ADVANTAGES } from '../constants';
import { Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const WhyUs = () => {
    return (
        <section id="philosophie" className="py-40 bg-slate-50 relative overflow-hidden">
            {/* Soft decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-accent/3 rounded-full blur-[160px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal className="text-center mb-32">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white text-primary font-bold text-sm uppercase tracking-widest mb-6 border border-slate-200 shadow-sm">
                        <Sparkles className="w-4 h-4 text-accent" />
                        Unsere Philosophie
                    </div>
                    <h2 className="text-5xl sm:text-7xl font-display font-black text-slate-900 mb-8 tracking-normal">
                        Warum wir <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#e5b510]">Ihre Agentur sind.</span>
                    </h2>
                    <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                        Wir verbinden 32 Jahre Branchen-Know-how mit dem Pioniergeist von morgen.
                    </p>
                </ScrollReveal>

                <div className="grid lg:grid-cols-3 gap-8">
                    {ADVANTAGES.map((advantage, index) => (
                        <ScrollReveal
                            key={index}
                            animation="reveal-up"
                            delay={index * 150}
                            className="group"
                        >
                            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-accent/5 hover:-translate-y-2 transition-all duration-700 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-accent/10 transition-colors"></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-700 shadow-lg shadow-accent/20" aria-hidden="true">
                                        <div className="text-primary [&>svg]:w-7 [&>svg]:h-7 transition-transform duration-500 group-hover:scale-110">
                                            {advantage.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight group-hover:text-primary transition-colors">{advantage.title}</h3>
                                    <p className="text-slate-500 leading-relaxed text-lg">
                                        {advantage.description}
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

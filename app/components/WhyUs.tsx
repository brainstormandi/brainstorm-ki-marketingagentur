"use client";
import React from 'react';
import { ADVANTAGES } from '../constants';
import { Sparkles } from 'lucide-react';

const WhyUs = () => {
    return (
        <section className="py-40 bg-slate-50 relative overflow-hidden">
            {/* Soft decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-accent/3 rounded-full blur-[160px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-32 animate-reveal-up">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white text-primary font-bold text-sm uppercase tracking-widest mb-6 border border-slate-200 shadow-sm">
                        <Sparkles className="w-4 h-4 text-accent" />
                        Unsere Philosophie
                    </div>
                    <h2 className="text-5xl sm:text-8xl font-display font-black text-slate-900 mb-8 tracking-tighter">
                        Warum wir <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#e5b510]">Ihre Agentur sind.</span>
                    </h2>
                    <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                        Wir verbinden 32 Jahre Branchen-Know-how mit dem Pioniergeist von morgen.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {ADVANTAGES.map((advantage, index) => (
                        <div
                            key={index}
                            className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-accent/5 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden animate-reveal-up cursor-pointer"
                            style={{ animationDelay: `${(index + 1) * 150}ms` }}
                        >
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform duration-500 shadow-lg shadow-accent/20">
                                    <div className="text-primary [&>svg]:w-7 [&>svg]:h-7">
                                        {advantage.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight">{advantage.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-lg">
                                    {advantage.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;

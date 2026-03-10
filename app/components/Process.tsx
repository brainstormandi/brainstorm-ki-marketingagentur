"use client";
import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { Layout } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Process = () => {
    return (
        <section id="process" className="py-40 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal className="text-center mb-28">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white text-primary font-bold text-sm uppercase tracking-widest mb-6 border border-slate-200">
                        <Layout className="w-4 h-4 text-accent" />
                        Der Ablauf
                    </div>
                    <h2 className="text-5xl sm:text-7xl font-display font-black text-slate-900 tracking-tighter mb-8 leading-[1.1]">
                        Ihr Weg zum <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">digitalen Vorsprung.</span>
                    </h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        Schnell, unkompliziert und auf nachhaltiges Wachstum ausgelegt.
                    </p>
                </ScrollReveal>

                <div className="grid lg:grid-cols-3 gap-16 relative">
                    {/* Decorative path line */}
                    <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>

                    {PROCESS_STEPS.map((step, index) => (
                        <ScrollReveal
                            key={index}
                            animation="reveal-up"
                            delay={index * 200}
                        >
                            <div className="relative z-10 flex flex-col items-center text-center group">
                                <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center font-black text-3xl mb-10 shadow-xl shadow-slate-200/50 group-hover:scale-110 group-hover:bg-accent group-hover:text-primary transition-all duration-700 border border-white">
                                    {index + 1}
                                </div>
                                <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight group-hover:text-accent transition-colors">{step.title}</h3>
                                <p className="text-lg text-slate-500 leading-relaxed max-w-sm">
                                    {step.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;

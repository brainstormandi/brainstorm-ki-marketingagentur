"use client";
import React from 'react';
import { PROCESS_STEPS } from '../constants';
import ScrollReveal from './ScrollReveal';
import { ArrowRight } from 'lucide-react';

const Process = () => {
    return (
        <section id="process" className="scroll-mt-32 py-32 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal className="mb-20">
                    <div className="inline-flex items-center px-6 py-2 rounded-full bg-slate-50 text-slate-800 font-bold text-xs mb-6 sm:mb-8 uppercase tracking-widest border border-slate-100">Der Ablauf</div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[0.95]">
                        <span className="font-sans block">Ihr Projektstart</span>
                        <span className="font-sans block text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 drop-shadow-sm pb-2">in 7 Tagen.</span>
                    </h2>
                </ScrollReveal>

                <div className="grid lg:grid-cols-3 gap-8">
                    {PROCESS_STEPS.map((step, index) => (
                        <ScrollReveal
                            key={index}
                            animation="reveal-up"
                            delay={index * 150}
                        >
                            <div className="relative bg-white rounded-3xl p-10 sm:p-12 border border-slate-200 group hover:border-slate-300 hover:shadow-xl transition-all duration-500 h-full flex flex-col overflow-hidden">
                                {/* Large number watermark */}
                                <div className="absolute right-0 bottom-0 pointer-events-none translate-x-[20%] translate-y-[20%] font-sans text-[12rem] font-black leading-none text-slate-50 group-hover:text-amber-50 group-hover:translate-x-[15%] transition-all duration-700">
                                    {index + 1}
                                </div>

                                <h3 className="font-sans text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-5 relative z-10 flex items-center gap-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-primary text-sm tracking-normal">
                                        {index + 1}
                                    </span>
                                    {step.title}
                                </h3>
                                <p className="text-[#111827] text-lg leading-relaxed font-body flex-grow relative z-10">
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

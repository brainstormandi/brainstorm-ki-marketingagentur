"use client";
import React from 'react';
import { PROCESS_STEPS } from '../constants';
import ScrollReveal from './ScrollReveal';
import { ArrowRight } from 'lucide-react';

const Process = () => {
    return (
        <section id="process" className="scroll-mt-32 py-32 bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal className="mb-20">
                    <div className="inline-flex items-center px-6 py-2 rounded-full bg-transparent text-gray-600 font-bold text-xs mb-6 sm:mb-8 uppercase tracking-widest border border-gray-200">Der Ablauf</div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[var(--font-playfair)] font-medium text-gray-900 tracking-tight leading-[1.1] py-1 uppercase">
                        <span className="block">Ihr Projektstart</span>
                        <span className="block text-transparent bg-clip-text pb-2" style={{backgroundImage: 'linear-gradient(180deg, #111827 0%, #374151 28%, #111827 48%, #4b5563 75%, #000000 100%)'}}>in 7 Tagen.</span>
                    </h2>
                </ScrollReveal>

                <div className="grid lg:grid-cols-3 gap-8">
                    {PROCESS_STEPS.map((step, index) => (
                        <ScrollReveal
                            key={index}
                            animation="reveal-up"
                            delay={index * 150}
                        >
                            <div className="relative bg-transparent rounded-3xl p-10 sm:p-12 border border-gray-200 backdrop-blur-sm group hover:border-[#F7C429]/50 hover:shadow-[0_4px_20px_rgba(247,196,41,0.3)] transition-all duration-500 h-full flex flex-col overflow-hidden">
                                {/* Large number watermark */}
                                <div className="absolute right-0 bottom-0 pointer-events-none translate-x-[20%] translate-y-[20%] font-sans text-[12rem] font-black leading-none text-[#00000005] group-hover:text-[#F7C429]/10 transition-all duration-700">
                                    {index + 1}
                                </div>

                                <h3 className="font-[var(--font-playfair)] text-2xl sm:text-3xl font-medium text-gray-900 tracking-normal mb-5 relative z-10 flex items-center gap-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F7C429] border border-[#F7C429] text-black font-sans text-sm tracking-normal">
                                        {index + 1}
                                    </span>
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-lg leading-relaxed font-body flex-grow relative z-10">
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

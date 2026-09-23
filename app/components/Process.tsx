"use client";
import React from 'react';
import Link from 'next/link';
import { Rocket, Sparkles, TrendingUp, Check, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { PACKAGES } from '../constants';

const Process = () => {
    const icons = [
        <Rocket key="1" className="w-5.5 h-5.5 text-[#F7C429]" />,
        <Sparkles key="2" className="w-5.5 h-5.5 text-[#F7C429]" />,
        <TrendingUp key="3" className="w-5.5 h-5.5 text-[#F7C429]" />
    ];

    return (
        <section id="angebote" className="scroll-mt-20 bg-[#F5EFE6] py-24 md:py-32">
            <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">

                {/* ── HEADER ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-end">
                    <ScrollReveal animation="reveal-right" className="lg:col-span-7">
                        <span className="font-[var(--font-inter)] text-[11px] font-bold uppercase tracking-[0.18em] text-[#1C1C1C]/40 mb-4 block">
                            Transparente Fixpreise
                        </span>
                        <h2
                            className="font-[var(--font-vollkorn)] font-semibold text-[#1C1C1C] leading-tight"
                            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
                        >
                            Drei klare Angebote –{' '}
                            <span className="font-[var(--font-vollkorn)] italic font-normal text-[#1C1C1C]/50">
                                maximale Wirkung.
                            </span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal animation="reveal-left" delay={100} className="lg:col-span-5 flex items-end">
                        <p className="font-[var(--font-inter)] text-[#1C1C1C]/55 text-base leading-relaxed">
                            Kein Stundensatz-Dschungel, keine bösen Überraschungen. Wähle das System, das perfekt zu deinen Wachstumszielen passt.
                        </p>
                    </ScrollReveal>
                </div>

                {/* ── 3 OFFER CARDS ── */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                    {PACKAGES.map((pkg, index) => {
                        const isMiddle = pkg.highlight;
                        return (
                            <ScrollReveal key={index} delay={index * 120} animation="reveal-up" className="h-full">
                                <div className={`group relative h-full flex flex-col justify-between p-8 md:p-9 rounded-2xl border transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#F7C429] hover:shadow-[0_20px_40px_-15px_rgba(28,28,28,0.08)] ${
                                    isMiddle 
                                        ? 'bg-[#EDE7DB] border-[#F7C429]/50 shadow-md ring-1 ring-[#F7C429]/30' 
                                        : 'bg-white border-[#D6CFC5]'
                                }`}>
                                    {/* Giant watermark number in bottom-right */}
                                    <span className="absolute -bottom-10 -right-4 font-[var(--font-vollkorn)] text-[180px] font-black pointer-events-none select-none leading-none z-0 text-[#1C1C1C]/[0.02]">
                                        {index + 1}
                                    </span>

                                    <div className="relative z-10 flex flex-col h-full justify-between">
                                        <div>
                                            {/* Card Top Row: Badge & Icon */}
                                            <div className="flex items-center justify-between gap-3 mb-6">
                                                <div className="w-12 h-12 rounded-xl bg-white border border-[#D6CFC5]/40 flex items-center justify-center shadow-sm shrink-0">
                                                    {icons[index]}
                                                </div>
                                                <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                                                    isMiddle 
                                                        ? 'bg-[#F7C429] text-[#1C1C1C]' 
                                                        : 'bg-[#1C1C1C]/5 text-[#1C1C1C]/60'
                                                }`}>
                                                    {pkg.badge}
                                                </span>
                                            </div>

                                            {/* Title & Subtitle */}
                                            <h3 className="font-[var(--font-vollkorn)] text-2xl font-bold text-[#1C1C1C] leading-snug mb-1">
                                                {pkg.title}
                                            </h3>
                                            <p className="font-[var(--font-inter)] text-xs font-bold text-[#1C1C1C]/50 uppercase tracking-[0.12em] mb-4">
                                                {pkg.subtitle}
                                            </p>

                                            {/* Description */}
                                            <p className="font-[var(--font-inter)] text-[#1C1C1C]/75 text-[15px] leading-relaxed mb-6">
                                                {pkg.description}
                                            </p>

                                            {/* Features list */}
                                            <ul className="space-y-2.5 pt-5 border-t border-[#1C1C1C]/10 mb-8">
                                                {pkg.features.map((feat, fIdx) => (
                                                    <li key={fIdx} className="flex items-start gap-2.5 text-sm font-[var(--font-inter)] text-[#1C1C1C]/85">
                                                        <Check className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                                                        <span>{feat}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* CTA Button */}
                                        <div className="pt-2">
                                            <Link 
                                                href="/#kontakt" 
                                                className={`w-full py-3.5 px-3 sm:px-4 rounded-xl text-center text-[13px] sm:text-sm font-bold flex items-center justify-center gap-2 whitespace-nowrap !whitespace-nowrap transition-all duration-200 cursor-pointer shadow-sm hover:-translate-y-0.5 ${
                                                    isMiddle 
                                                        ? 'bg-[#F7C429] text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-[#F7C429] border-2 border-[#F7C429]' 
                                                        : 'bg-[#1C1C1C] text-white hover:bg-[#F7C429] hover:text-[#1C1C1C] border-2 border-[#1C1C1C] hover:border-[#F7C429]'
                                                }`}
                                            >
                                                <span className="whitespace-nowrap">{pkg.ctaText}</span>
                                                <ArrowRight className="w-4 h-4 shrink-0" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Process;

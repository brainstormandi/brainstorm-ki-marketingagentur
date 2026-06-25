"use client";
import React from 'react';
import { MessageSquare, Compass, Rocket } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Process = () => {
    const steps = [
        {
            title: "Das kostenlose Erstgespräch",
            description: "Wir lernen uns kennen, analysieren deine Engpässe und finden das größte Potenzial für deinen Betrieb.",
            icon: <MessageSquare className="w-5.5 h-5.5 text-[#F7C429]" />
        },
        {
            title: "Dein individueller KI-Fahrplan",
            description: "Du erhältst eine maßgeschneiderte Strategie, die genau auf deine Branche und Zielgruppe zugeschnitten ist.",
            icon: <Compass className="w-5.5 h-5.5 text-[#F7C429]" />
        },
        {
            title: "Livegang in 5-7 Werktagen",
            description: "Lehn dich zurück. Wir setzen alles um. Nach wenigen Tagen beginnt die KI für dich zu arbeiten.",
            icon: <Rocket className="w-5.5 h-5.5 text-[#F7C429]" />
        }
    ];

    return (
        <section id="process" className="scroll-mt-20 bg-[#F5EFE6] pt-10 md:pt-14 pb-20 md:pb-28">
            <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">

                {/* ── HEADER ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
                    <ScrollReveal animation="reveal-right" className="lg:col-span-6">
                        <span className="font-[var(--font-inter)] text-[11px] font-bold uppercase tracking-[0.18em] text-[#1C1C1C]/40 mb-4 block">
                            Der Ablauf
                        </span>
                        <h2
                            className="font-[var(--font-vollkorn)] font-semibold text-[#1C1C1C] leading-tight"
                            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
                        >
                            Dein Weg aus dem Chaos –{" "}
                            <span className="font-[var(--font-vollkorn)] italic font-normal text-[#1C1C1C]/50">
                                in nur 7 Tagen.
                            </span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal animation="reveal-left" delay={100} className="lg:col-span-6 flex items-end">
                        <p className="font-[var(--font-inter)] text-[#1C1C1C]/60 text-base leading-relaxed">
                            Der Start in deine digitale Zukunft ist einfacher, als du denkst. Keine monatelangen Projektlaufzeiten, keine versteckten Hürden.
                        </p>
                    </ScrollReveal>
                </div>

                {/* ── TIMELINE CARDS DECK ── */}
                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-14 left-[12%] right-[12%] h-[1px] border-t-2 border-dashed border-[#D6CFC5]" aria-hidden="true" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        {steps.map((step, index) => {
                            const isMiddle = index === 1;
                            return (
                                <ScrollReveal key={index} delay={index * 120} animation="reveal-up" className="h-full">
                                    <div className={`group relative h-full flex flex-col justify-between p-8 md:p-9 rounded-2xl border transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#F7C429] hover:shadow-[0_20px_40px_-15px_rgba(28,28,28,0.05)] ${
                                        isMiddle 
                                            ? 'bg-[#EDE7DB]/80 border-[#D6CFC5]' 
                                            : 'bg-white border-[#D6CFC5]'
                                    }`}>
                                        {/* Giant watermark number in bottom-right */}
                                        <span className="absolute -bottom-10 -right-4 font-[var(--font-vollkorn)] text-[180px] font-black pointer-events-none select-none leading-none z-0 text-[#1C1C1C]/[0.02]">
                                            {index + 1}
                                        </span>

                                        <div className="relative z-10">
                                            {/* Card Top Row */}
                                            <div className="mb-8">
                                                {/* Icon container */}
                                                <div className="w-12 h-12 rounded-xl bg-white border border-[#D6CFC5]/40 flex items-center justify-center shadow-sm shrink-0">
                                                    {step.icon}
                                                </div>
                                            </div>

                                            {/* Step Title */}
                                            <h3 className="font-[var(--font-vollkorn)] text-xl md:text-2xl font-bold text-[#1C1C1C] leading-snug mb-4">
                                                {step.title}
                                            </h3>

                                            {/* Step Description */}
                                            <p className="font-[var(--font-inter)] text-[#1C1C1C] text-base leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Process;

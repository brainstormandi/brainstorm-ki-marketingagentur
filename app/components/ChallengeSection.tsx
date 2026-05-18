"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Users, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ChallengeSection = () => {
    const cards = [
        {
            number: "1",
            title: "Fachkräftemangel",
            badge: "Bremse",
            description: "Gutes Personal ist rar, teuer und schwer zu halten. Offene Stellen bremsen dein tägliches Wachstum.",
            solution: "Die neue Regel: Eine KI-Website arbeitet 24/7 vollautomatisch.",
            icon: <Users className="w-6 h-6" />
        },
        {
            number: "2",
            title: "Konkurrenz im Netz",
            badge: "Gefahr",
            description: "Konzerne besetzen mit riesigen Budgets die Suchergebnisse und drängen traditionelle KMUs zurück.",
            solution: "Die neue Regel: Modernstes GEO & SEO macht dich unübersehbar.",
            icon: <TrendingUp className="w-6 h-6" />
        },
        {
            number: "3",
            title: "Massiver Zeitmangel",
            badge: "Verlust",
            description: "Du bist voll im Tagesgeschäft gefangen. Marketing bleibt auf der Strecke – und damit neue Kunden.",
            solution: "Die neue Regel: Automatisierte Leads kommen ganz ohne Zeitaufwand.",
            icon: <Clock className="w-6 h-6" />
        }
    ];

    return (
        <section id="spielregeln" className="scroll-mt-32 py-32 bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* ── GRID LAYOUT ── */}
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    
                    {/* ── LEFT COLUMN: Text Copy ── */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <ScrollReveal animation="reveal-right">
                            <div className="inline-flex items-center px-6 py-2 rounded-full bg-transparent text-gray-600 font-bold text-xs mb-6 sm:mb-8 uppercase tracking-widest border border-gray-200">
                                Neue Spielregeln
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="reveal-right" delay={100}>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 font-[var(--font-playfair)] font-medium tracking-tight leading-[1.1] py-1 uppercase mb-8">
                                <span className="block">Der Alltag frisst</span>
                                <span className="block text-transparent bg-clip-text pb-2" style={{backgroundImage: 'linear-gradient(180deg, #111827 0%, #374151 28%, #111827 48%, #4b5563 75%, #000000 100%)'}}>
                                    dich auf?
                                </span>
                                <span className="block text-gray-400 text-3xl sm:text-4xl font-sans font-light tracking-wide mt-4 normal-case italic">
                                    Zeit für neue Spielregeln.
                                </span>
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal animation="reveal-right" delay={200}>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-body">
                                <p>
                                    Als Einzelunternehmer oder KMU-Chef kämpfst du an vielen Fronten gleichzeitig. Der 
                                    <strong className="text-gray-900 font-semibold"> Fachkräftemangel</strong> bremst dich, die 
                                    <strong className="text-gray-900 font-semibold"> Konkurrenz im Netz</strong> wächst und für gutes Marketing fehlt schlichtweg die Zeit.
                                </p>
                                <p className="border-l-4 border-[#F7C429] pl-6 py-2 my-8 font-body italic text-gray-600 text-lg leading-relaxed">
                                    Die Wahrheit ist: Wer heute noch alles manuell macht, wird von großen Mitbewerbern abgehängt.
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* ── BIG SHIFT (QUESTION CARD) ── */}
                        <ScrollReveal animation="reveal-up" delay={300} className="mt-6">
                            <div className="relative bg-gray-50 rounded-3xl p-8 sm:p-10 border border-gray-200 overflow-hidden">
                                <div className="absolute right-0 bottom-0 pointer-events-none translate-x-[20%] translate-y-[20%] font-sans text-[10rem] font-black leading-none text-gray-100" />
                                <h3 className="font-[var(--font-playfair)] text-2xl font-medium text-gray-900 mb-4 tracking-normal leading-tight relative z-10">
                                    Aber was wäre, wenn...
                                </h3>
                                <p className="text-gray-600 text-lg leading-relaxed font-body mb-8 relative z-10">
                                    ...du die Arbeit einer ganzen Marketing-Abteilung in Bruchteilen von Sekunden erledigen lassen könntest?
                                </p>
                                <Link 
                                    href="/#contact" 
                                    className="group flex items-center justify-center gap-3 w-max bg-[#F7C429] text-black px-8 py-[22px] rounded-full font-bold uppercase tracking-[0.15em] text-[14px] sm:text-[15px] shadow-[0_10px_30px_rgba(247,196,41,0.25)] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-black hover:text-[#F7C429] hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 cursor-pointer relative z-10"
                                >
                                    Finde heraus wie
                                    <ArrowRight className="w-5 h-5 transition-transform duration-400 group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* ── RIGHT COLUMN: Core Challenges ── */}
                    <div className="lg:col-span-7 space-y-8">
                        {cards.map((card, index) => (
                            <ScrollReveal key={index} delay={index * 100} animation="reveal-left">
                                <div className="relative bg-transparent rounded-3xl p-8 sm:p-10 border border-gray-200 backdrop-blur-sm group hover:border-[#F7C429]/50 hover:shadow-[0_4px_20px_rgba(247,196,41,0.2)] transition-all duration-500 flex flex-col overflow-hidden">
                                    {/* Large watermark number */}
                                    <div className="absolute right-0 bottom-0 pointer-events-none translate-x-[20%] translate-y-[20%] font-sans text-[10rem] font-black leading-none text-[#00000003] group-hover:text-[#F7C429]/5 transition-all duration-700">
                                        {card.number}
                                    </div>
                                    
                                    <div className="flex items-center justify-between gap-4 mb-4 relative z-10">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-xl border border-gray-200 group-hover:border-[#F7C429] transition-colors bg-white">
                                                <div className="[&>svg]:w-6 [&>svg]:h-6 text-[#F7C429] transition-colors">
                                                    {card.icon}
                                                </div>
                                            </div>
                                            <h3 className="font-[var(--font-playfair)] text-xl sm:text-2xl font-medium text-gray-900 tracking-normal leading-tight">
                                                {card.title}
                                            </h3>
                                        </div>
                                        <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase px-3 py-1 rounded-full bg-gray-50 border border-gray-200">
                                            {card.badge}
                                        </span>
                                    </div>
                                    
                                    <p className="text-gray-600 text-lg leading-relaxed font-body mb-6 relative z-10">
                                        {card.description}
                                    </p>
                                    
                                    <div className="mt-2 pt-6 border-t border-gray-100 relative z-10 flex items-start gap-3 text-base sm:text-lg font-medium text-gray-900 font-body">
                                        <ShieldCheck className="w-5 h-5 text-[#F7C429] mt-0.5 flex-shrink-0" />
                                        <span>{card.solution}</span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ChallengeSection;

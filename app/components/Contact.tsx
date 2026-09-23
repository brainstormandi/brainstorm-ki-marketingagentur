"use client";
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
    return (
        <section id="kontakt" className="scroll-mt-20 bg-[#EDE7DB] py-20 md:py-28 lg:py-32 relative">
            <div id="contact" className="sr-only" aria-hidden="true" />
            <div className="max-w-6xl mx-auto px-6 md:px-12">

                {/* ── EXACT 50 / 50 BALANCED 2-COLUMN GRID (BOTTOM FLUSH ALIGNED) ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">

                    {/* ── LEFT: HEADER & DIRECT CONTACT CHANNELS (50%) ── */}
                    <ScrollReveal animation="reveal-right" className="w-full h-full flex flex-col">
                        <div className="bg-transparent flex flex-col justify-between h-full">
                            <div>
                                <span className="font-[var(--font-inter)] text-[11px] font-bold uppercase tracking-[0.18em] text-[#1C1C1C]/40 mb-4 block">
                                    KONTAKT &amp; ERSTGESPRÄCH
                                </span>
                                <h2
                                    className="font-[var(--font-vollkorn)] font-semibold text-[#1C1C1C] leading-tight mb-5"
                                    style={{ fontSize: 'clamp(2rem, 3.8vw, 3.25rem)' }}
                                >
                                    15 Minuten, die deinem Betrieb <span className="text-underline-yellow">Zeit und Kunden</span> bringen.
                                </h2>

                                <p className="font-[var(--font-inter)] text-[#1C1C1C]/65 text-base md:text-[17px] leading-relaxed mb-6">
                                    Kein Verkaufsdruck, kein Fachchinesisch. Wir werfen gemeinsam einen Blick auf deinen aktuellen Auftritt und zeigen dir die 2–3 Hebel, mit denen du sofort Zeit sparst und mehr Anfragen gewinnst.
                                </p>
                            </div>

                            {/* Direct contact buttons (untereinander: 1x Gelb, 1x 2. Button-Farbe Dunkel) */}
                            <div className="pt-6 border-t border-[#1C1C1C]/10 flex flex-col gap-3">
                                <p className="font-[var(--font-inter)] text-xs font-bold uppercase tracking-wider text-[#1C1C1C]/45 mb-1">
                                    Lieber direkt sprechen?
                                </p>
                                
                                {/* 1. Button: GELB */}
                                <a 
                                    href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                                    className="w-full py-3.5 px-6 rounded-xl font-[var(--font-inter)] font-bold text-base flex items-center justify-center gap-3 bg-[#F7C429] text-[#1C1C1C] border-2 border-[#F7C429] hover:bg-[#1C1C1C] hover:text-[#F7C429] hover:border-[#1C1C1C] transition-all duration-200 shadow-sm cursor-pointer"
                                >
                                    <Phone className="w-5 h-5 shrink-0" />
                                    <span>{CONTACT_INFO.phone} anrufen</span>
                                </a>

                                {/* 2. Button: 2te BUTTON-FARBE (Anthrazit / Dunkel) */}
                                <a 
                                    href={`mailto:${CONTACT_INFO.email}`}
                                    className="w-full py-3.5 px-6 rounded-xl font-[var(--font-inter)] font-bold text-base flex items-center justify-center gap-3 bg-[#1C1C1C] text-white border-2 border-[#1C1C1C] hover:bg-[#F7C429] hover:text-[#1C1C1C] hover:border-[#F7C429] transition-all duration-200 shadow-sm cursor-pointer"
                                >
                                    <Mail className="w-5 h-5 shrink-0" />
                                    <span>{CONTACT_INFO.email} schreiben</span>
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* ── RIGHT: FOCUSED BOOKING CARD (50%, BÜNDIG MIT LINKS) ── */}
                    <ScrollReveal animation="reveal-left" delay={150} className="w-full h-full flex flex-col">
                        <div className="bg-white p-7 sm:p-9 md:p-10 rounded-2xl border border-[#1C1C1C]/10 shadow-[0_10px_30px_-10px_rgba(28,28,28,0.06)] flex flex-col justify-between h-full">
                            
                            <div>
                                {/* Card Header with calendar icon & status */}
                                <div className="flex items-center justify-between mb-8 pb-5 border-b border-[#1C1C1C]/10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[#F7C429] flex items-center justify-center shrink-0">
                                            <Calendar className="w-5 h-5 text-[#1C1C1C]" />
                                        </div>
                                        <div>
                                            <h3 className="font-[var(--font-vollkorn)] font-bold text-lg text-[#1C1C1C] leading-none mb-1">
                                                Online-Kalender
                                            </h3>
                                            <p className="font-[var(--font-inter)] text-xs text-[#1C1C1C]/50">
                                                15 Minuten Erstgespräch
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 font-[var(--font-inter)] text-xs font-bold uppercase tracking-wider text-[#1C1C1C]/50">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                                        </span>
                                        Termine frei
                                    </div>
                                </div>

                                {/* Die 3 Punkte (kompakte Checkliste) */}
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-3.5">
                                        <CheckCircle2 className="w-5 h-5 text-[#F7C429] shrink-0 mt-0.5" />
                                        <p className="font-[var(--font-inter)] text-[#1C1C1C]/75 text-sm sm:text-base leading-relaxed">
                                            <strong className="font-bold text-[#1C1C1C]">15 Minuten:</strong> Kompakt, ehrlich und respektvoll mit deiner Zeit.
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3.5">
                                        <CheckCircle2 className="w-5 h-5 text-[#F7C429] shrink-0 mt-0.5" />
                                        <p className="font-[var(--font-inter)] text-[#1C1C1C]/75 text-sm sm:text-base leading-relaxed">
                                            <strong className="font-bold text-[#1C1C1C]">Konkreter Fahrplan:</strong> Du erfährst direkt, wo du aktuell Kunden oder Zeit verlierst.
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3.5">
                                        <CheckCircle2 className="w-5 h-5 text-[#F7C429] shrink-0 mt-0.5" />
                                        <p className="font-[var(--font-inter)] text-[#1C1C1C]/75 text-sm sm:text-base leading-relaxed">
                                            <strong className="font-bold text-[#1C1C1C]">Handschlagqualität:</strong> 100 % unverbindlich – direkt aus dem Mostviertel.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA-Button & Mikrotext (unten bündig) */}
                            <div className="pt-5 border-t border-[#1C1C1C]/10 flex flex-col gap-2.5">
                                <a 
                                    href={CONTACT_INFO.calendly} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="btn-primary w-full py-4 px-6 text-center text-base sm:text-lg font-bold flex items-center justify-center gap-3 shadow-sm hover:-translate-y-0.5 transition-all"
                                >
                                    <span>Jetzt 15-Minuten-Gespräch sichern</span>
                                    <ArrowRight className="w-5 h-5 shrink-0" />
                                </a>
                                <p className="font-[var(--font-inter)] text-xs text-[#1C1C1C]/60 text-center font-medium">
                                    Wähle direkt deinen Wunschtermin im Kalender
                                </p>
                            </div>

                        </div>
                    </ScrollReveal>

                </div>
            </div>
        </section>
    );
};

export default Contact;

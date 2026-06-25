"use client";
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

// ally.co footer-style "Get in touch with an Accessibility Expert"
const Contact = () => {
    return (
        <section id="contact" className="scroll-mt-20 bg-[#EDE7DB] py-20 md:py-28 lg:py-0 lg:min-h-screen lg:flex lg:flex-col lg:justify-center">
            <div className="max-w-6xl mx-auto px-6 md:px-12">

                <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">

                    {/* ── LEFT: HEADER + DIRECT CONTACTS (5 cols) ── */}
                    <ScrollReveal animation="reveal-right" className="lg:col-span-5">
                        <span className="font-[var(--font-inter)] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#1C1C1C]/40 mb-4 block">
                            Kontakt
                        </span>
                        <h2
                            className="font-[var(--font-vollkorn)] font-semibold text-[#1C1C1C] leading-tight mb-8"
                            style={{ fontSize: 'clamp(2.25rem, 4.5vw, 4rem)' }}
                        >
                            Bereit, die Spielregeln in deiner Branche zu{" "}
                            <span className="text-underline-yellow">ändern?</span>
                        </h2>

                        <p className="font-[var(--font-inter)] text-[#1C1C1C]/70 text-lg md:text-xl leading-relaxed mb-10">
                            Lass uns in einem kurzen, absolut ehrlichen Gespräch herausfinden, wo dein größtes, ungenutztes Potenzial liegt.
                        </p>

                        <div className="space-y-6">
                            <a href={`mailto:${CONTACT_INFO.email}`}
                                className="flex items-center gap-4 group text-[#1C1C1C]">
                                <div className="w-12 h-12 rounded-full border-2 border-[#1C1C1C]/20 flex items-center justify-center group-hover:border-[#F7C429] group-hover:bg-[#F7C429] transition-all shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <span className="font-[var(--font-inter)] text-base sm:text-lg font-bold group-hover:text-[#1C1C1C]/70 transition-colors">
                                    {CONTACT_INFO.email}
                                </span>
                            </a>
                            <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                                className="flex items-center gap-4 group text-[#1C1C1C]">
                                <div className="w-12 h-12 rounded-full border-2 border-[#1C1C1C]/20 flex items-center justify-center group-hover:border-[#F7C429] group-hover:bg-[#F7C429] transition-all shrink-0">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <span className="font-[var(--font-inter)] text-base sm:text-lg font-bold group-hover:text-[#1C1C1C]/70 transition-colors">
                                    {CONTACT_INFO.phone}
                                </span>
                            </a>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-[#1C1C1C]/10">
                            {['Kostenfreie Potenzialanalyse', 'Persönliche Beratung'].map((t) => (
                                <div key={t} className="flex items-center gap-2 font-[var(--font-inter)] text-xs sm:text-sm font-bold text-[#1C1C1C]/70 uppercase tracking-[0.12em]">
                                    <CheckCircle2 className="w-4 h-4 text-[#F7C429] shrink-0" /> {t}
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* ── RIGHT: CALENDAR CARD (7 cols) ── */}
                    <ScrollReveal animation="reveal-left" delay={150} className="lg:col-span-7">
                        <div className="bg-white p-10 md:p-12 rounded-2xl shadow-sm">
                            <div className="w-12 h-12 rounded-full bg-[#F7C429] flex items-center justify-center mb-8">
                                <Calendar className="w-6 h-6 text-[#1C1C1C]" />
                            </div>

                            <h3 className="font-[var(--font-vollkorn)] text-2xl md:text-3xl font-semibold text-[#1C1C1C] mb-4 leading-snug">
                                Der Wendepunkt für dein Business: Deine 15-Minuten-Strategie-Session
                            </h3>

                            <p className="font-[var(--font-inter)] text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#F7C429] mb-6">
                                Finde deinen stärksten Wachstumshebel – kompakt, ehrlich und auf den Punkt.
                            </p>

                            <p className="font-[var(--font-inter)] text-[#1C1C1C]/70 text-base md:text-lg leading-relaxed mb-8">
                                Du spürst, dass in deinem Betrieb mehr Potenzial steckt, aber der tägliche Kampf im Hamsterrad lässt dir keine Zeit. In einem kurzen, intensiven Erstgespräch blicken wir gemeinsam auf deinen Status quo und zeigen dir punktgenau, wo du wertvolle Zeit oder Kunden verlierst – und mit welchen smarten KI-Werkzeugen du das sofort ändern kannst.
                            </p>

                            <div className="space-y-4 mb-8">
                                {[
                                    { bold: '15 Minuten:', text: ' Kompakt und respektvoll gegenüber deiner Zeit.' },
                                    { bold: 'Röntgenblick:', text: ' Wir enttarnen deine größten, ungenutzten Wachstumspotenziale.' },
                                    { bold: 'Handschlagqualität:', text: ' 100% kostenlos, unverbindlich, direkt aus dem Mostviertel.' }
                                ].map((b, i) => (
                                    <div key={i} className="flex items-start gap-3 text-base">
                                        <CheckCircle2 className="w-5 h-5 text-[#F7C429] shrink-0 mt-0.5" />
                                        <span className="font-[var(--font-inter)] text-[#1C1C1C]/70 leading-relaxed">
                                            <strong className="font-bold text-[#1C1C1C]">{b.bold}</strong>{b.text}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn-primary text-base md:text-lg py-4 px-8">
                                Jetzt Fahrplan holen <ArrowRight className="w-5 h-5" />
                            </a>

                            <div className="mt-8 flex items-center gap-2 font-[var(--font-inter)] text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#1C1C1C]/40">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                                </span>
                                Termine verfügbar
                            </div>
                        </div>
                    </ScrollReveal>

                </div>
            </div>
        </section>
    );
};

export default Contact;

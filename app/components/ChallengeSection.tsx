"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Users, TrendingUp, Clock, ShieldCheck } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

// ally.co Section 2: "Because Access Matters." — massive display headline + stats
const ChallengeSection = () => {
    const stats = [
        { value: '492', sup: '+', label: 'erfolgreiche Kunden' },
        { value: '32',  sup: '',  label: 'Jahre Marketing-Erfahrung' },
        { value: '5.0', sup: '',  label: 'Google Rating' },
        { value: '<7',  sup: '',  label: 'Tage bis zu deinem Go-Live' },
    ];

    const challenges = [
        {
            n: '1',
            icon: <Users className="w-5 h-5 text-[#F7C429]" />,
            title: 'Fachkräftemangel',
            badge: 'Bremse',
            desc: 'Gutes Personal ist rar, teuer und schwer zu halten. Offene Stellen bremsen dein tägliches Wachstum.',
            rule: 'Eine KI-Website arbeitet 24/7 vollautomatisch.'
        },
        {
            n: '2',
            icon: <TrendingUp className="w-5 h-5 text-[#F7C429]" />,
            title: 'Konkurrenz im Netz',
            badge: 'Gefahr',
            desc: 'Konzerne besetzen mit riesigen Budgets die Suchergebnisse und drängen traditionelle KMUs zurück.',
            rule: 'Modernstes GEO & SEO macht dich unübersehbar.'
        },
        {
            n: '3',
            icon: <Clock className="w-5 h-5 text-[#F7C429]" />,
            title: 'Massiver Zeitmangel',
            badge: 'Verlust',
            desc: 'Du bist voll im Tagesgeschäft gefangen. Marketing bleibt auf der Strecke – und damit neue Kunden.',
            rule: 'Automatisierte Leads kommen ganz ohne Zeitaufwand.'
        }
    ];

    return (
        <section id="spielregeln" className="scroll-mt-20 bg-[#F5EFE6] py-20 md:py-28 lg:py-0 lg:min-h-screen lg:flex lg:flex-col lg:justify-center">
            <div className="max-w-6xl mx-auto px-6 md:px-12">

                {/* ── MASSIVE HEADLINE ── */}
                <ScrollReveal animation="reveal-up">
                    <h2
                        className="font-[var(--font-vollkorn)] font-semibold text-[#1C1C1C] leading-[1.05] mb-16"
                        style={{ fontSize: 'clamp(2rem, 7vw, 6rem)' }}
                    >
                        Weil <span className="text-underline-yellow">Wachstum</span> zählt.
                    </h2>
                </ScrollReveal>

                {/* ── WHY ROW ── */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start mb-20">

                    {/* Left: descriptive block */}
                    <ScrollReveal animation="reveal-right" className="md:col-span-5">
                        <span className="font-[var(--font-inter)] text-[11px] font-bold uppercase tracking-[0.18em] text-[#1C1C1C]/50 mb-4 block">
                            Warum?
                        </span>
                        <h3
                            className="font-[var(--font-vollkorn)] font-semibold text-[#1C1C1C] leading-snug mb-6"
                            style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}
                        >
                            Der Alltag ist keine Ausrede mehr — er ist dein Wettbewerbsvorteil.
                        </h3>
                        <p className="font-[var(--font-inter)] text-[#1C1C1C]/65 text-base leading-relaxed mb-8">
                            Als Einzelunternehmer oder KMU-Chef kämpfst du an vielen Fronten gleichzeitig.
                            Fachkräftemangel bremst dich, die Konkurrenz im Netz wächst und für gutes Marketing fehlt die Zeit.
                        </p>
                        <blockquote className="border-l-[3px] border-[#F7C429] pl-5 py-2">
                            <p className="font-[var(--font-vollkorn)] italic text-[#1C1C1C] text-lg leading-snug">
                                „Wer heute noch alles manuell macht, wird von Mitbewerbern abgehängt."
                            </p>
                        </blockquote>
                    </ScrollReveal>

                    {/* Right: 3 styled challenge items (no boxes, no numbers, no lines) */}
                    <div className="md:col-span-6 md:col-start-7 space-y-12">
                        {challenges.map((c, i) => (
                            <ScrollReveal key={i} delay={i * 100} animation="reveal-left">
                                <div className="relative z-10 flex flex-col gap-4">
                                    {/* Header Row */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            {/* Square icon wrapper */}
                                            <div className="w-10 h-10 rounded-xl border border-[#D6CFC5]/50 flex items-center justify-center bg-white/50 shrink-0">
                                                {c.icon}
                                            </div>
                                            <h4 className="font-[var(--font-inter)] text-lg font-bold text-[#1C1C1C]">
                                                {c.title}
                                            </h4>
                                        </div>
                                        {/* Chip/Badge */}
                                        <span className="font-[var(--font-inter)] text-[10px] font-bold uppercase tracking-wider text-[#1C1C1C]/45 bg-[#1C1C1C]/5 py-1 px-3 rounded-full">
                                            {c.badge}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="font-[var(--font-inter)] text-[#1C1C1C]/65 text-[15px] leading-relaxed">
                                        {c.desc}
                                    </p>

                                    {/* Footer Rule Row */}
                                    <div className="flex items-start gap-2.5">
                                        <ShieldCheck className="w-5 h-5 text-[#F7C429] shrink-0 mt-0.5" />
                                        <p className="font-[var(--font-inter)] text-[14px] text-[#1C1C1C] font-bold leading-relaxed">
                                            {c.rule}
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}

                        
                    </div>
                </div>

                {/* ── LARGE STATISTICS ── */}
                <div className="border-t border-[#1C1C1C]/10 pt-14 grid grid-cols-2 lg:grid-cols-4 gap-10">
                    {stats.map((s, i) => (
                        <ScrollReveal key={i} delay={i * 100} animation="reveal-up">
                            <div className="flex flex-col items-center text-center">
                                <div
                                    className="font-[var(--font-vollkorn)] font-bold text-[#1C1C1C] leading-none mb-3 flex items-baseline justify-center gap-1.5"
                                    style={{ fontSize: 'clamp(2.25rem, 7vw, 5.5rem)' }}
                                >
                                    {s.value}<sup className="text-[0.4em] align-super">{s.sup}</sup>
                                </div>
                                <p className="font-[var(--font-inter)] text-[#1C1C1C]/75 text-base md:text-lg leading-relaxed max-w-[220px] mx-auto">
                                    {s.label}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ChallengeSection;

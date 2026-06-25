"use client";
import React from 'react';
import { SERVICES } from '../constants';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { ArrowRight } from 'lucide-react';

// ally.co Section 3: "We handle Everything for you." — dark section, numbered cards
const Services = () => {
    const servicesSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": SERVICES.map((service, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Service",
                "name": service.title,
                "description": service.description,
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "BrainStorm KI Werbeagentur"
                }
            }
        }))
    };

    return (
        <section id="services" className="scroll-mt-20 bg-[#1C1C1C] text-white py-20 md:py-28 lg:py-0 lg:min-h-screen lg:flex lg:flex-col lg:justify-center">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />

            <div className="max-w-6xl mx-auto px-6 md:px-12">

                {/* ── HEADER ROW (ally: headline left, CTA right) ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
                    <ScrollReveal animation="reveal-right" className="lg:col-span-7">
                        <span className="font-[var(--font-inter)] text-[11px] font-bold uppercase tracking-[0.18em] text-white/40 mb-4 block">
                            Was wir für dich tun
                        </span>
                        <h2
                            className="font-[var(--font-vollkorn)] font-semibold text-white leading-tight"
                            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.75rem)' }}
                        >
                            Wir erledigen <span className="text-underline-yellow">alles</span> für dich.
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal animation="reveal-left" delay={150} className="lg:col-span-5 flex flex-col justify-end gap-6">
                        <p className="font-[var(--font-inter)] text-white/55 text-base leading-relaxed">
                            Zukunftsweisende KI-Technologien, kombiniert mit 32 Jahren Marketing-Handwerk. So eroberst du deinen Markt.
                        </p>
                        <Link href="/#contact" className="btn-secondary-light text-[15px] xl:text-[17px] py-2 px-5 w-max">
                            Finde heraus wie <ArrowRight className="w-4 h-4" />
                        </Link>
                    </ScrollReveal>
                </div>
                           {/* ── NUMBERED SERVICE CARDS (3 columns, 1 and 3 highlighted subtly, giant numbers bottom-right) ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {SERVICES.map((service, index) => {
                        const isHighlighted = index === 0 || index === 2;
                        return (
                            <ScrollReveal key={index} delay={index * 80} animation="reveal-up">
                                <div className={`relative overflow-hidden p-7 md:p-8 flex flex-col h-full min-h-[250px] rounded-2xl transition-all duration-200 ${
                                    isHighlighted
                                        ? 'bg-[#2D2D2D] border border-transparent text-white hover:bg-[#363636]'
                                        : 'bg-[#242424] border border-white/5 text-white hover:bg-[#2A2A2A] hover:border-white/10'
                                }`}>
                                    {/* Faint giant background number in bottom-right */}
                                    <span className="absolute -bottom-10 -right-6 font-[var(--font-vollkorn)] text-[220px] font-black pointer-events-none select-none leading-none z-0 text-white/[0.02]">
                                        {index + 1}
                                    </span>
 
                                    {/* Card Header with Icon & Title */}
                                    <div className="flex items-center gap-3.5 mb-5 relative z-10">
                                        <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 [&>svg]:w-5.5 [&>svg]:h-5.5 [&>svg]:text-[#F7C429] ${
                                            isHighlighted ? 'border-transparent bg-[#F7C429]/10' : 'border-white/10 bg-white/5'
                                        }`}>
                                            {service.icon}
                                        </div>
                                        <h3 className="font-[var(--font-vollkorn)] text-[17px] sm:text-lg font-bold leading-snug text-white">
                                            {service.title}
                                        </h3>
                                    </div>
 
                                    {/* Description */}
                                    <p className={`font-[var(--font-inter)] text-[15px] sm:text-base leading-relaxed flex-grow relative z-10 ${
                                        isHighlighted ? 'text-white/75' : 'text-white/60'
                                    }`}>
                                        {service.description}
                                    </p>
 
                                    {/* Stat Footer */}
                                    {service.stat && (
                                        <div className="mt-6 pt-4 border-t border-white/10 relative z-10">
                                            <span className="font-[var(--font-vollkorn)] text-2xl sm:text-3xl font-bold block text-[#F7C429]">
                                                {service.stat.value}
                                            </span>
                                            <span className={`font-[var(--font-inter)] text-xs sm:text-sm font-bold uppercase tracking-wider block mt-1 ${isHighlighted ? 'text-white/60' : 'text-white/50'}`}>
                                                {service.stat.label}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Services;

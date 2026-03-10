"use client";
import React from 'react';
import ScrollReveal from './ScrollReveal';

const industries = [
    "Gastronomie",
    "Handwerk",
    "Handel",
    "Industrie",
    "Dienstleistung",
    "Bauwesen",
    "Architekten",
    "Bauträger",
    "Arzt",
    "Arztpraxen",
    "Physiotherapeut",
    "Unternehmensberater",
    "Fahrschule",
    "Hotels",
    "Fotografie",
    "Steuerberater",
    "Recruiting",
    "IT-Dienstleister"
];

const IndustryMarquee = () => {
    // Array verdoppeln, um einen nahtlosen Loop für die Marquee-Animation zu erzeugen
    const marqueeItems = [...industries, ...industries];

    return (
        <ScrollReveal animation="zoom-in" className="py-6 sm:py-8 bg-slate-50 border-y border-slate-100 overflow-hidden relative flex flex-col items-center">
            <h2 id="marquee-heading" className="sr-only">Branchen, die wir betreuen</h2>
            <div className="sr-only">
                Wir betreuen folgende Branchen: {industries.join(', ')}
            </div>

            {/* Gradient Fades für weiche Übergänge an den Rändern */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-40 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-40 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

            <div aria-hidden="true" className="flex flex-nowrap w-max animate-marquee hover:[animation-play-state:paused] transition-all duration-300 items-center">
                {marqueeItems.map((industry, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center group"
                    >
                        <span className="font-sans font-black text-xl sm:text-2xl text-slate-300 uppercase tracking-widest whitespace-nowrap group-hover:text-accent transition-colors duration-300 cursor-default px-8 sm:px-12">
                            {industry}
                        </span>
                        {/* Dezenter Trenn-Punkt */}
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
                    </div>
                ))}
            </div>
        </ScrollReveal>
    );
};

export default IndustryMarquee;

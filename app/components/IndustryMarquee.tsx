"use client";
import React from 'react';

const items = [
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
    "IT-Dienstleister",
    "Amstetten",
    "Mostviertel",
    "Steyr",
    "Linz",
    "Salzburg",
    "Perg",
    "St. Pölten",
    "Wien",
    "Webagentur",
    "Werbeagentur",
    "Website",
    "Niederösterreich"
];

const IndustryMarquee = () => {
    return (
        <div className="py-6 bg-[#EDE7DB] border-y border-[#1C1C1C]/10 overflow-hidden relative flex flex-col items-center">
            <h2 id="marquee-heading" className="sr-only">Branchen & Fokus, die wir betreuen</h2>
            <div className="sr-only">
                Wir betreuen folgende Branchen und Regionen: {items.join(', ')}
            </div>

            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#EDE7DB] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#EDE7DB] to-transparent z-10 pointer-events-none"></div>

            <div aria-hidden="true" className="flex flex-nowrap w-max animate-marquee hover:[animation-play-state:paused] transition-all duration-300 items-center">
                {/* First Set of Items */}
                <div className="flex shrink-0 items-center gap-0">
                    {items.map((item, index) => (
                        <div key={`set1-${index}`} className="flex items-center justify-center group">
                            <span className="font-[var(--font-inter)] font-semibold text-sm text-[#1C1C1C]/35 uppercase tracking-[0.2em] whitespace-nowrap group-hover:text-[#1C1C1C]/70 transition-colors duration-300 cursor-default px-6 sm:px-10">
                                {item}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-[#1C1C1C]/20"></span>
                        </div>
                    ))}
                </div>
                {/* Second Set of Items for Seamless Infinite Loop */}
                <div className="flex shrink-0 items-center gap-0">
                    {items.map((item, index) => (
                        <div key={`set2-${index}`} className="flex items-center justify-center group">
                            <span className="font-[var(--font-inter)] font-semibold text-sm text-[#1C1C1C]/35 uppercase tracking-[0.2em] whitespace-nowrap group-hover:text-[#1C1C1C]/70 transition-colors duration-300 cursor-default px-6 sm:px-10">
                                {item}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-[#1C1C1C]/20"></span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IndustryMarquee;

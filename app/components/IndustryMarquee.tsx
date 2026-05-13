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
    const marqueeItems = [...industries, ...industries];

    return (
        <div className="py-5 bg-white border-y border-gray-200 overflow-hidden relative flex flex-col items-center">
            <h2 id="marquee-heading" className="sr-only">Branchen, die wir betreuen</h2>
            <div className="sr-only">
                Wir betreuen folgende Branchen: {industries.join(', ')}
            </div>

            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div aria-hidden="true" className="flex flex-nowrap w-max animate-marquee hover:[animation-play-state:paused] transition-all duration-300 items-center">
                {marqueeItems.map((industry, index) => (
                    <div key={index} className="flex items-center justify-center group">
                        <span className="font-body font-bold text-sm sm:text-base text-gray-500 uppercase tracking-[0.2em] whitespace-nowrap group-hover:text-[#F7C429] transition-colors duration-300 cursor-default px-6 sm:px-10">
                            {industry}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IndustryMarquee;

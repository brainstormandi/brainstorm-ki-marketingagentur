"use client";
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../constants';
import ScrollReveal from './ScrollReveal';

const categories = [
    { id: 'all', label: 'Alle Fragen' },
    { id: 'webseite', label: 'Webseite & Fixpreise' },
    { id: 'recruiting', label: 'Mitarbeitergewinnung' },
    { id: 'socialmedia', label: 'Social Media' },
    { id: 'ki', label: 'KI & Automatisierung' },
    { id: 'seo', label: 'SEO & Google' }
];

const FAQ = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [openQuestion, setOpenQuestion] = useState<string | null>(FAQS[0]?.question || null);

    const filteredFaqs = activeCategory === 'all' 
        ? FAQS 
        : FAQS.filter(f => f.category === activeCategory);

    // Two masonry columns on desktop for minimal vertical scrolling
    const leftCol = filteredFaqs.filter((_, i) => i % 2 === 0);
    const rightCol = filteredFaqs.filter((_, i) => i % 2 !== 0);

    const renderCard = (faq: typeof FAQS[0]) => {
        const isOpen = openQuestion === faq.question;
        return (
            <div
                key={faq.question}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen 
                        ? 'bg-white border-[#F7C429] shadow-sm' 
                        : 'bg-white/80 border-[#1C1C1C]/10 hover:bg-white hover:border-[#1C1C1C]/25'
                }`}
            >
                <button
                    onClick={() => setOpenQuestion(isOpen ? null : faq.question)}
                    className="w-full py-4 px-5 sm:px-6 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none group"
                    aria-expanded={isOpen}
                >
                    <h3 className={`font-[var(--font-vollkorn)] font-bold text-base sm:text-[17px] leading-snug transition-colors duration-200 ${
                        isOpen ? 'text-[#1C1C1C]' : 'text-[#1C1C1C]/80 group-hover:text-[#1C1C1C]'
                    }`}>
                        {faq.question}
                    </h3>
                    <div className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 ${
                        isOpen
                            ? 'bg-[#F7C429] border-[#F7C429] rotate-180 text-[#1C1C1C]'
                            : 'bg-transparent border-[#1C1C1C]/15 group-hover:border-[#1C1C1C]/40 text-[#1C1C1C]/60'
                    }`} aria-hidden="true">
                        <ChevronDown className="w-4 h-4" strokeWidth={2.5} />
                    </div>
                </button>

                <div
                    role="region"
                    className={`grid transition-all duration-200 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                >
                    <div className="overflow-hidden">
                        <div className="px-5 sm:px-6 pb-5 pt-1 font-[var(--font-inter)] text-[#1C1C1C]/75 text-[14px] sm:text-[15px] leading-relaxed border-t border-[#1C1C1C]/5">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section id="faq" className="scroll-mt-20 bg-[#F5EFE6] py-20 md:py-28">
            <div className="max-w-6xl mx-auto px-6 md:px-12">

                {/* ── HEADER ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10 items-end">
                    <ScrollReveal animation="reveal-right" className="lg:col-span-6">
                        <span className="font-[var(--font-inter)] text-[11px] font-bold uppercase tracking-[0.18em] text-[#1C1C1C]/40 mb-4 block">
                            Antworten
                        </span>
                        <h2
                            className="font-[var(--font-vollkorn)] font-semibold text-[#1C1C1C] leading-tight"
                            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
                        >
                            Häufige Fragen,{" "}
                            <span className="font-[var(--font-vollkorn)] italic font-normal text-[#1C1C1C]/50">
                                ehrlich beantwortet.
                            </span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal animation="reveal-left" delay={100} className="lg:col-span-6 flex items-end">
                        <p className="font-[var(--font-inter)] text-[#1C1C1C]/55 text-base leading-relaxed">
                            Alles, was du über unsere Zusammenarbeit, Kosten, Mitarbeitergewinnung und KI-Webseiten wissen musst.
                        </p>
                    </ScrollReveal>
                </div>

                {/* ── CATEGORY FILTER CHIPS ── */}
                <ScrollReveal animation="reveal-up" className="mb-10">
                    <div className="flex flex-wrap gap-2 sm:gap-2.5">
                        {categories.map((cat) => {
                            const isActive = activeCategory === cat.id;
                            const count = cat.id === 'all' 
                                ? FAQS.length 
                                : FAQS.filter(f => f.category === cat.id).length;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => {
                                        setActiveCategory(cat.id);
                                        setOpenQuestion(null);
                                    }}
                                    className={`px-4 py-2 rounded-full font-[var(--font-inter)] text-xs sm:text-[13px] font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                                        isActive
                                            ? 'bg-[#1C1C1C] text-white shadow-sm'
                                            : 'bg-white/70 text-[#1C1C1C]/70 hover:bg-white hover:text-[#1C1C1C] border border-[#1C1C1C]/10'
                                    }`}
                                >
                                    <span>{cat.label}</span>
                                    <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                                        isActive ? 'bg-white/20 text-white' : 'bg-[#1C1C1C]/5 text-[#1C1C1C]/50'
                                    }`}>
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </ScrollReveal>

                {/* ── 2-COLUMN MASONRY FAQ ACCORDION (Cuts scroll height by 50%) ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 items-start">
                    <div className="flex flex-col gap-4">
                        {leftCol.map(renderCard)}
                    </div>
                    <div className="flex flex-col gap-4">
                        {rightCol.map(renderCard)}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FAQ;

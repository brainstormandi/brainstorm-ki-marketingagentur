"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS, GOOGLE_REVIEW_LINK } from '../constants';

const TestimonialSlider = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId: number;
        let scrollPos = scrollContainer.scrollTop;

        const scroll = () => {
            if (!isHovered) {
                scrollPos += 0.5;
                if (scrollPos >= scrollContainer.scrollHeight / 2) {
                    scrollPos -= scrollContainer.scrollHeight / 2;
                }
                scrollContainer.scrollTop = scrollPos;
            } else {
                scrollPos = scrollContainer.scrollTop;
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isHovered]);

    const doubledTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

    return (
        <div 
            className="relative h-[800px] overflow-hidden group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
        >
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none z-20" aria-hidden="true"></div>

            <div 
                ref={scrollRef} 
                className="h-full space-y-8 px-4 py-8 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] cursor-ns-resize touch-pan-y"
            >
                {doubledTestimonials.map((t, i) => (
                    <a
                        key={i}
                        href={GOOGLE_REVIEW_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-8 sm:p-10 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group/card relative focus-visible:ring-2 focus-visible:ring-accent outline-none"
                        aria-label={`Bewertung von ${t.name} auf Google ansehen: ${t.quote}`}
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-slate-50 text-slate-700 font-bold flex items-center justify-center border border-slate-200 text-lg">
                                    {t.name.charAt(0)}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-base font-bold text-slate-900 leading-tight font-sans">{t.name}</span>
                                    <span className="text-xs text-slate-500 font-medium">Local Guide</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1" aria-hidden="true">
                                {/* Google "G" standard star icon colors */}
                                <svg className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                            </div>
                        </div>

                        <div className="flex gap-1 mb-6" aria-hidden="true">
                            {[...Array(5)].map((_, s) => (
                                <Star key={s} className="w-5 h-5 fill-accent text-accent" />
                            ))}
                        </div>

                        <div className="relative">
                            <Quote className="absolute -top-3 -left-3 w-8 h-8 text-slate-100 fill-slate-50 -z-10" aria-hidden="true" />
                            <p className="text-[#111827] leading-relaxed font-body text-lg">{t.quote}</p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-50 flex justify-between items-center">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Google Rezension</span>
                            <span className="text-sm font-medium text-accent opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center gap-1">
                                Öffnen
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </span>
                        </div>
                    </a>
                ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-20" aria-hidden="true"></div>
        </div>
    );
};

export default TestimonialSlider;

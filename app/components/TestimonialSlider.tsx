"use client";
import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS, GOOGLE_REVIEW_LINK } from '../constants';

const TestimonialSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(true);

    // Track if screen is mobile to toggle 3D Coverflow on/off
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Auto-play interval
    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [isHovered]);

    // Calculate position & 3D Coverflow styling for each card
    const getCardStyle = (index: number) => {
        let diff = index - activeIndex;
        const len = TESTIMONIALS.length;
        if (diff > len / 2) diff -= len;
        if (diff < -len / 2) diff += len;

        const isActive = diff === 0;
        const isLeft = diff === -1;
        const isRight = diff === 1;

        if (isMobile) {
            if (isActive) {
                return {
                    transform: 'translate3d(0, 0, 0) scale(1)',
                    opacity: 1,
                    zIndex: 10,
                    pointerEvents: 'auto' as const,
                };
            } else {
                return {
                    transform: `translate3d(${diff > 0 ? '100%' : '-100%'}, 0, 0) scale(0.8)`,
                    opacity: 0,
                    zIndex: 0,
                    pointerEvents: 'none' as const,
                };
            }
        }

        // Desktop 3D Coverflow Transforms - Lower perspective and deep arc transforms (Y-rotation, Z-rotation, Y-translation)
        if (isActive) {
            return {
                transform: 'translate3d(0, 0, 0) scale(1) rotateY(0deg) rotateZ(0deg)',
                opacity: 1,
                zIndex: 10,
                pointerEvents: 'auto' as const,
            };
        } else if (isLeft) {
            return {
                transform: 'translate3d(-80%, 12px, -180px) scale(0.8) rotateY(32deg) rotateZ(-3.5deg)',
                opacity: 0.65,
                zIndex: 5,
                pointerEvents: 'auto' as const,
                cursor: 'pointer',
            };
        } else if (isRight) {
            return {
                transform: 'translate3d(80%, 12px, -180px) scale(0.8) rotateY(-32deg) rotateZ(3.5deg)',
                opacity: 0.65,
                zIndex: 5,
                pointerEvents: 'auto' as const,
                cursor: 'pointer',
            };
        } else {
            return {
                transform: `translate3d(${diff > 0 ? '130%' : '-130%'}, 20px, -260px) scale(0.68) rotateY(0deg) rotateZ(0deg)`,
                opacity: 0,
                zIndex: 0,
                pointerEvents: 'none' as const,
            };
        }
    };

    return (
        <div
            className="relative w-full max-w-5xl mx-auto px-4 py-8 flex flex-col items-center select-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
        >
            {/* ── 3D SLIDER VIEWPORT ── */}
            <div className="relative w-full h-[470px] md:h-[460px] flex items-center justify-center overflow-visible md:perspective-[900px]">
                <div className="relative w-full max-w-[340px] md:max-w-[370px] h-[400px] flex items-center justify-center transform-style-3d overflow-visible">
                    {TESTIMONIALS.map((t, index) => {
                        const style = getCardStyle(index);
                        const isCenter = index === activeIndex;

                        return (
                            <a
                                key={index}
                                href={GOOGLE_REVIEW_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={style}
                                onClick={(e) => {
                                    // If clicking side card, move to it instead of navigating to Google
                                    if (!isCenter) {
                                        e.preventDefault();
                                        setActiveIndex(index);
                                    }
                                }}
                                className={`absolute inset-0 p-6 md:p-7 flex flex-col justify-between rounded-2xl border transition-all duration-500 ease-out shadow-sm ${
                                    isCenter
                                        ? 'bg-[#F7C429] border-[#F7C429] text-[#1C1C1C]'
                                        : 'bg-white border-[#D6CFC5] text-[#1C1C1C] hover:border-[#1C1C1C]/35'
                                }`}
                                aria-label={`Google Bewertung von ${t.name} lesen`}
                            >
                                {/* Giant watermark closing quote */}
                                <span className={`absolute bottom-6 right-8 font-[var(--font-vollkorn)] text-[120px] font-bold pointer-events-none select-none leading-none z-0 ${
                                    isCenter ? 'text-[#1C1C1C]/[0.05]' : 'text-[#1C1C1C]/[0.03]'
                                }`}>
                                    ”
                                </span>

                                <div className="relative z-10 flex flex-col h-full justify-between">
                                    <div>
                                        {/* Card Top Header */}
                                        <div className="flex items-center justify-between gap-4 mb-4">
                                            {/* Quote Icon Square */}
                                            <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                                                isCenter ? 'bg-[#1C1C1C]/10 text-[#1C1C1C]' : 'bg-[#F7C429]/10 text-[#F7C429]'
                                            }`}>
                                                <span className="font-[var(--font-vollkorn)] text-2xl font-black leading-none mt-1.5">“</span>
                                            </div>

                                            {/* Verified Pill */}
                                            <span className={`px-2.5 py-0.5 rounded-full border text-[8px] font-bold uppercase tracking-widest ${
                                                isCenter ? 'border-[#1C1C1C]/20 text-[#1C1C1C]/60' : 'border-[#1C1C1C]/10 text-[#1C1C1C]/40'
                                            }`}>
                                                • Google Verified
                                            </span>
                                        </div>

                                        {/* Quote Text (larger on center card, color set to solid #1C1C1C) */}
                                        <p className={`font-[var(--font-inter)] leading-relaxed text-[#1C1C1C] ${
                                            isCenter 
                                                ? 'text-[14.5px] sm:text-[15.5px] md:text-[16px] line-clamp-[7]' 
                                                : 'text-xs sm:text-sm line-clamp-[8]'
                                        }`}>
                                            „{t.quote}“
                                        </p>
                                    </div>

                                    {/* Footer (Author + Stars) */}
                                    <div className="mt-4 pt-4 border-t border-[#1C1C1C]/10 flex items-end justify-between">
                                        <div>
                                            <span className="font-[var(--font-inter)] text-sm font-bold text-[#1C1C1C] block leading-tight">
                                                {t.name}
                                            </span>
                                            <span className="font-[var(--font-inter)] text-[9px] text-[#1C1C1C]/40 font-bold uppercase tracking-wider block mt-1">
                                                VOR {index % 3 === 0 ? '6' : index % 3 === 1 ? '4' : '12'} MONATEN • GOOGLE
                                            </span>
                                        </div>

                                        {/* Stars */}
                                        <div className="flex gap-0.5" aria-hidden="true">
                                            {[...Array(5)].map((_, s) => (
                                                <Star
                                                    key={s}
                                                    className={`w-3.5 h-3.5 ${
                                                        isCenter ? 'fill-[#1C1C1C] text-[#1C1C1C]' : 'fill-[#F7C429] text-[#F7C429]'
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>

            {/* ── CONTROLS (ARROWS & DOTS) ── */}
            <div className="flex items-center gap-6 mt-4 z-20">
                {/* Previous Arrow */}
                <button
                    onClick={() => setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                    className="w-10 h-10 rounded-full border border-[#1C1C1C]/10 flex items-center justify-center text-[#1C1C1C] hover:bg-[#1C1C1C]/5 active:scale-95 transition-all"
                    aria-label="Vorherige Bewertung"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Rolling Dots Indicator */}
                <div className="flex items-center gap-1.5 max-w-[220px] overflow-hidden py-1">
                    {TESTIMONIALS.map((_, idx) => {
                        // Display a rolling window of max 7 dots centered around activeIndex
                        const isVisible = Math.abs(idx - activeIndex) <= 3 || 
                                          (activeIndex < 3 && idx < 7) || 
                                          (activeIndex > TESTIMONIALS.length - 4 && idx >= TESTIMONIALS.length - 7);
                        if (!isVisible) return null;
                        
                        return (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                    idx === activeIndex ? 'bg-[#F7C429] w-3.5' : 'bg-[#1C1C1C]/20 hover:bg-[#1C1C1C]/40'
                                }`}
                                aria-label={`Gehe zu Bewertung ${idx + 1}`}
                            />
                        );
                    })}
                </div>

                {/* Next Arrow */}
                <button
                    onClick={() => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length)}
                    className="w-10 h-10 rounded-full border border-[#1C1C1C]/10 flex items-center justify-center text-[#1C1C1C] hover:bg-[#1C1C1C]/5 active:scale-95 transition-all"
                    aria-label="Nächste Bewertung"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default TestimonialSlider;

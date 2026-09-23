"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="w-full bg-[#F5EFE6] overflow-hidden flex flex-col relative pt-28 sm:pt-32 lg:pt-0 lg:h-[calc(100vh-80px)] lg:min-h-[650px]">
            
            {/* Video Background - full screen on desktop, flows above text on mobile */}
            <div className="relative w-full aspect-video lg:absolute lg:inset-0 lg:w-full lg:h-full lg:aspect-auto z-0 order-1 lg:order-none">
                <video
                    autoPlay muted playsInline preload="metadata"
                    aria-hidden="true"
                    className="w-full h-full object-cover object-[75%_center] sm:object-center"
                >
                    <source src="/video/werbeagentur-ki-video-3.webm" type="video/webm" />
                </video>
                {/* linear gradient overlay: left solid cream #F5EFE5 fading to transparent right (desktop only) */}
                <div 
                    className="hidden lg:block absolute inset-0" 
                    style={{ 
                        background: 'linear-gradient(to right, #F5EFE5 0%, #F5EFE5 30%, rgba(245, 239, 229, 0.95) 45%, rgba(245, 239, 229, 0.6) 70%, transparent 100%)' 
                    }} 
                />
                {/* Subtle indicator bottom right: KI-generiert */}
                <span className="absolute bottom-3 right-3 sm:bottom-4 sm:right-6 px-2 py-0.5 rounded bg-black/35 backdrop-blur-xs text-[10px] font-[var(--font-inter)] font-normal text-white/65 border border-white/10 tracking-wider select-none z-10 pointer-events-none">
                    KI-generiert
                </span>
            </div>

            {/* Content Container (vertically centered on desktop, flows naturally on mobile) */}
            <div className="relative z-10 w-full px-6 md:px-12 flex flex-col justify-start pt-8 pb-16 lg:absolute lg:inset-0 lg:h-full lg:justify-center lg:py-0 order-2 lg:order-none">
                <div className="max-w-4xl lg:pl-16 xl:pl-24">
                    <h1
                        className="font-[var(--font-vollkorn)] font-bold text-[#1C1C1C] leading-[1.08] mb-6"
                        style={{ fontSize: 'clamp(1.85rem, 5.8vw, 5rem)' }}
                    >
                        Mehr Zeit. <br />
                        <span className="whitespace-nowrap">Mehr Anfragen.</span> <br />
                        Werde die <span className="text-underline-yellow">#1</span> in deiner Region.
                    </h1>
                    <p className="font-[var(--font-inter)] text-[#1C1C1C]/80 text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed mb-10 max-w-2xl">
                        Große Konzerne haben riesige Marketing-Budgets. <strong className="font-bold text-[#1C1C1C]">Du hast uns.</strong> Wir bauen Webseiten, die wie <strong className="font-bold text-[#1C1C1C]">dein bester Verkäufer</strong> rund um die Uhr verlässlich <strong className="font-bold text-[#1C1C1C]">neue Kunden und Mitarbeiter bringen</strong>. Modernste Technologie kombiniert mit <strong className="font-bold text-[#1C1C1C]">32 Jahren Marketing-Erfahrung</strong> und echter <strong className="font-bold text-[#1C1C1C]">Handschlagqualität</strong> – <strong className="font-bold text-[#1C1C1C]">schlüsselfertig in wenigen Tagen</strong>.
                    </p>
                    
                    <div className="flex flex-col items-center sm:items-start gap-2.5">
                        <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                            <Link href="/#gratis-check" className="btn-primary text-center !whitespace-normal sm:!whitespace-nowrap text-sm sm:text-base py-4 px-6 sm:px-8 flex items-center justify-center gap-3 w-full sm:w-auto">
                                <span>Kostenlosen Webseiten-Check sichern</span> <ArrowRight className="w-5 h-5 shrink-0" />
                            </Link>
                        </div>
                        <p className="text-xs sm:text-[13px] text-[#1C1C1C]/70 font-[var(--font-inter)] font-medium text-center sm:text-left">
                            Erhalte in 24h die 3 Hebel für mehr Anfragen
                        </p>
                    </div>

                    {/* Trust Elements */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center flex-wrap gap-5 sm:gap-6 mt-10 pt-6 border-t border-[#1C1C1C]/10 font-[var(--font-inter)] text-[13px] xl:text-[14px] font-bold uppercase tracking-[0.08em] text-[#1C1C1C]/60">
                        <div className="flex items-center gap-2.5">
                            <div className="flex text-[#F7C429] gap-0.5 text-[15px]">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                            <span className="text-[#1C1C1C] font-extrabold text-[15px]">5.0</span>
                            <span>Google Rezensionen</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-[#10b981] flex items-center justify-center text-white text-[11px] shrink-0 font-sans">✓</div>
                            <span>100% DSGVO</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                            <span className="text-[#1C1C1C] font-extrabold text-[15px]">32</span>
                            <span>Jahre Erfahrung</span>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;

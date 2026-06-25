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
                    autoPlay muted playsInline loop preload="auto"
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
            </div>

            {/* Content Container (vertically centered on desktop, flows naturally on mobile) */}
            <div className="relative z-10 w-full px-6 md:px-12 flex flex-col justify-start pt-8 pb-16 lg:absolute lg:inset-0 lg:h-full lg:justify-center lg:py-0 order-2 lg:order-none">
                <div className="max-w-4xl lg:pl-16 xl:pl-24">
                    <h1
                        className="font-[var(--font-vollkorn)] font-semibold text-[#1C1C1C] leading-[1.05] mb-6"
                        style={{ fontSize: 'clamp(1.85rem, 7vw, 6rem)' }}
                    >
                        Gewinne deine Zeit zurück und <br className="hidden sm:inline" />
                        <span className="text-underline-yellow">dominiere</span> deinen lokalen Markt.
                    </h1>
                    <p className="font-[var(--font-inter)] text-[#1C1C1C]/80 text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed mb-10 max-w-2xl">
                        Große Konzerne haben riesige Abteilungen. Du hast jetzt Künstliche Intelligenz. Wir rüsten deinen Betrieb mit intelligenten, automatisierten Webseiten aus, die wie ein digitaler Top-Verkäufer rund um die Uhr für dich arbeiten – ohne Technik-Chaos, mit echter Handschlagqualität. <strong className="text-[#1C1C1C] font-bold">Finde heraus, wie viel Zeit du verlierst.</strong>
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                        <Link href="/#website-check" className="btn-primary text-center !whitespace-normal sm:!whitespace-nowrap text-sm sm:text-base py-4 px-6 sm:px-8 flex items-center justify-center gap-3 w-full sm:w-auto">
                            <span>Hol dir den kostenlosen Webseiten-Check</span> <ArrowRight className="w-5 h-5 shrink-0" />
                        </Link>
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

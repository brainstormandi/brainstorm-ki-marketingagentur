"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
    const [isHovered, setIsHovered] = React.useState(false);
    return (
        <section className="relative w-full flex flex-col lg:block bg-white lg:h-screen lg:min-h-[640px] lg:overflow-hidden text-[#111827]">
            
            {/* ── BACKGROUND VIDEO & GRADIENTS ── */}
            <div className="relative w-full lg:absolute lg:inset-0 lg:z-0">
                {/* On mobile: show full landscape aspect ratio. On desktop: cover the entire viewport */}
                <div className="relative w-full aspect-video lg:w-full lg:h-full lg:aspect-none overflow-hidden bg-gray-100">
                    <video
                        src="/video/werbeagentur-ki-video-3.mp4"
                        autoPlay
                        muted
                        playsInline
                        aria-hidden="true"
                        className="w-full h-full object-cover"
                        style={{ objectPosition: 'center' }}
                    />
                </div>
                
                {/* Desktop horizontal blend gradient */}
                <div className="hidden lg:block absolute inset-0" style={{
                    background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 30%, rgba(255,255,255,0.6) 55%, rgba(255,255,255,0) 75%)',
                }} />
                
                {/* Desktop and Mobile bottom fade (gentle blend to white background below) */}
                <div className="absolute bottom-0 left-0 right-0 h-20 lg:h-full bg-gradient-to-t from-white to-transparent lg:from-transparent lg:to-transparent" />
                <div className="hidden lg:block absolute inset-0" style={{
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 15%, rgba(255,255,255,0) 75%, rgba(255,255,255,0.95) 100%)',
                }} />
            </div>

            {/* ── VERTICAL TEXT LEFT ── */}
            <div className="hidden lg:block" style={{
                position: 'absolute', 
                left: 32, 
                top: '55%', 
                transform: 'translate(-50%, -50%) rotate(-90deg)',
                fontFamily: 'var(--font-inter), sans-serif', 
                fontSize: 10,
                fontWeight: 600, 
                letterSpacing: '0.35em', 
                textTransform: 'uppercase',
                color: '#6b7280', 
                whiteSpace: 'nowrap',
                zIndex: 20
            }}>
                Kreativität ist unsere Intelligenz.
            </div>

            {/* ── VERTICAL TEXT RIGHT ── */}
            <div className="hidden lg:block" style={{
                position: 'absolute', 
                right: 32, 
                top: '30%', 
                transform: 'translate(50%, -50%) rotate(90deg)',
                fontFamily: 'var(--font-inter), sans-serif', 
                fontSize: 11,
                fontWeight: 700, 
                letterSpacing: '0.35em', 
                textTransform: 'uppercase',
                color: '#111827', 
                textShadow: '0px 0px 8px rgba(255, 255, 255, 0.9), 0px 0px 4px rgba(255, 255, 255, 0.9)',
                whiteSpace: 'nowrap',
                zIndex: 35
            }}>
                KI getrieben, Mensch gemacht.
            </div>

            {/* ── MAIN HERO CONTENT ── */}
            <div className="relative z-10 flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-[8%] w-full max-w-[1200px] lg:absolute lg:inset-0 lg:mt-10">
                {/* Headline */}
                <h1 style={{
                    fontFamily: 'var(--font-playfair), Didot, "Bodoni MT", serif',
                    fontSize: 'clamp(44px, 6vw, 84px)',
                    fontWeight: 500,
                    lineHeight: 1.05,
                    color: '#111827',
                    marginBottom: '32px',
                    maxWidth: '850px',
                    letterSpacing: '-0.02em'
                }}>
                    Ihre Webseite ist jetzt <br />
                    <span style={{ 
                        color: '#F7C429',
                        display: 'inline-block',
                        position: 'relative'
                    }}>
                        intelligent.
                        <span style={{
                            content: '""',
                            position: 'absolute',
                            bottom: '10%',
                            left: 0,
                            right: 0,
                            height: '25%',
                            backgroundColor: 'rgba(247, 196, 41, 0.2)',
                            zIndex: -1,
                            transform: 'skewX(-15deg)'
                        }} />
                    </span>
                </h1>
                
                {/* Subtext */}
                <p style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: 'clamp(16px, 1.5vw, 20px)',
                    lineHeight: 1.6,
                    color: '#4b5563',
                    marginBottom: '48px',
                    maxWidth: '650px',
                    fontWeight: 400
                }}>
                    Wir bauen keine gewöhnlichen Webseiten. Wir erschaffen psychologisch optimierte Vertriebs-Webseiten und Landingpages, die dank KI-Präzision und Suchmaschinenoptimierung genau die Kunden anziehen, die Sie wirklich wollen.
                </p>

                {/* CTA Button */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
                    <Link href="/#website-check" 
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        style={{
                        display: 'flex', alignItems: 'center', gap: 12,
                        padding: '18px 36px', borderRadius: 9999,
                        backgroundColor: isHovered ? '#000000' : '#F7C429',
                        color: isHovered ? '#F7C429' : '#000000', textDecoration: 'none',
                        fontFamily: 'var(--font-inter), sans-serif', fontSize: 13,
                        fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
                        boxShadow: isHovered ? '0 10px 30px rgba(0,0,0,0.2)' : '0 10px 30px rgba(247, 196, 41, 0.4)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)'
                    }}>
                        Kostenloser Webseiten-Check
                        <ArrowUpRight style={{ 
                            width: 18, height: 18,
                            transform: isHovered ? 'translate(2px, -2px)' : 'translate(0, 0)',
                            transition: 'transform 0.4s ease'
                        }} />
                    </Link>
                </div>

                {/* Trust Elements */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center flex-wrap gap-5 sm:gap-8 mt-12 sm:mt-16 font-[var(--font-inter),sans-serif] text-[12px] font-semibold text-[#6b7280] uppercase tracking-[0.05em]">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ display: 'flex', color: '#F7C429', gap: '2px', fontSize: '14px' }}>
                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>
                        <span style={{ color: '#111827', fontWeight: 800 }}>5.0</span>
                        <span>Google Rezensionen</span>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: 16, height: 16, borderRadius: '50%', backgroundColor: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 10 }}>✓</div>
                        <span>100% DSGVO</span>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: '#111827', fontWeight: 800 }}>32</span>
                        <span>Jahre Erfahrung</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

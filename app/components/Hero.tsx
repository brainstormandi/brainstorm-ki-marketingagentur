"use client";
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { ArrowRight, Star, Mic, Volume2, Brain, Target, Zap, Rocket, Search, Cpu, Globe, MousePointer2, Sparkles, Layout, Smartphone, ShieldCheck, Trophy } from 'lucide-react';
import { GOOGLE_REVIEW_LINK } from '../constants';

// Define types for window extensions
declare global {
    interface Window {
        isVoiceAssistantActive?: () => boolean;
        isVoiceAssistantSpeaking?: () => boolean;
        stopVoiceAssistant?: () => void;
        startVoiceAssistant?: (silent?: boolean) => void;
    }
}

const Hero = () => {
    const [isActive, setIsActive] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [variantIndex, setVariantIndex] = useState<number | null>(null);

    const variants = useMemo(() => [
        {
            title: "Ihre Marketing-Zukunft, ist jetzt intelligent",
            text: "Wir bauen keine gewöhnlichen Webseiten. Wir erschaffen psychologisch optimierte Vertriebs-Webseiten und Landingpages, die dank KI-Präzision genau die Kunden anziehen, die Sie wirklich wollen.",
            keywords: [
                { icon: <Layout className="w-4 h-4" />, label: "Premium Webseite" },
                { icon: <Target className="w-4 h-4" />, label: "High-Converting Landingpage" },
                { icon: <Brain className="w-4 h-4" />, label: "KI-Präzision" }
            ]
        },
        {
            title: "KI-Marketing gewinnt, Kunden automatisch",
            text: "Wir bauen Ihre verkaufsstarke Webseite, Landingpage und automatisierte Prozesse. Sichtbar bei Google & ChatGPT.",
            keywords: [
                { icon: <Zap className="w-4 h-4" />, label: "Verkaufs-Landingpage" },
                { icon: <Search className="w-4 h-4" />, label: "SEO / GEO" },
                { icon: <Rocket className="w-4 h-4" />, label: "Automation" }
            ]
        },
        {
            title: "Schluss mit mühsamem, manuellem Marketing",
            text: "Wir automatisieren Ihre Kundengewinnung mit intelligenten Webseiten, Landingpages und KI-gestützter Suche.",
            keywords: [
                { icon: <Globe className="w-4 h-4" />, label: "Smarte Webseite" },
                { icon: <MousePointer2 className="w-4 h-4" />, label: "Landingpages" },
                { icon: <Sparkles className="w-4 h-4" />, label: "KI-Suche" }
            ]
        }
    ], []);

    useEffect(() => {
        // Set fixed random index on mount to avoid hydration mismatch while still being "random" per session
        setVariantIndex(Math.floor(Math.random() * variants.length));
    }, [variants.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            const active = window.isVoiceAssistantActive?.() || false;
            const speaking = window.isVoiceAssistantSpeaking?.() || false;
            if (active !== isActive) setIsActive(active);
            if (speaking !== isSpeaking) setIsSpeaking(speaking);
        }, 150);
        return () => clearInterval(interval);
    }, [isActive, isSpeaking]);

    const handleToggle = useCallback(async () => {
        if (isActive) {
            window.stopVoiceAssistant?.();
        } else {
            window.startVoiceAssistant?.(false);
        }
    }, [isActive]);

    // Use current variant or fall back to silent default for SSR
    const currentVariant = variantIndex !== null ? variants[variantIndex] : null;

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-48 sm:pt-40 pb-12">
            {/* Background Video */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-hidden="true"
                    className="w-full h-full object-cover scale-[1.25] object-[30%_center] md:object-[0%_center]"
                >
                    <source src="/video/ki-werbeagentur-brainstorm-hero-video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC]/80 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/80 backdrop-blur-md border border-white/50 mb-6 animate-reveal-down shadow-lg">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                    </span>
                    <span className="text-sm font-bold text-slate-800 uppercase tracking-widest">Premium Digital-Berater & KI-Pionier</span>
                </div>

                <div className="min-h-[220px] sm:min-h-[260px] lg:min-h-[300px] flex flex-col items-center justify-center mt-4">
                    {currentVariant && (
                        <>
                            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[0.95] mb-6 max-w-5xl tracking-normal animate-reveal-up">
                                {currentVariant.title.includes(',') ? (
                                    currentVariant.title.split(',').map((part, i) => (
                                        <React.Fragment key={i}>
                                            {i === 0 ? part : <><br /><span className="text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 drop-shadow-sm">{part.trim()}</span></>}
                                        </React.Fragment>
                                    ))
                                ) : (
                                    currentVariant.title
                                )}
                            </h1>

                            <p className="text-xl sm:text-2xl text-[#111827] mb-6 leading-relaxed max-w-2xl mx-auto animate-reveal-up reveal-delay-200">
                                {currentVariant.text}
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 animate-reveal-up reveal-delay-300">
                                {currentVariant.keywords.map((kw, i) => (
                                    <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/40 backdrop-blur-sm border border-white/60 shadow-sm text-slate-700 font-bold text-sm sm:text-base">
                                        <div className="text-accent">{kw.icon}</div>
                                        <span>{kw.label}</span>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>

                <div className="relative w-full max-w-md h-40 sm:h-48 flex items-center justify-center mt-12 mb-12 animate-zoom-in reveal-delay-400">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute w-48 h-48 border-[2px] border-accent/20 rounded-full animate-ripple-1"></div>
                        <div className="absolute w-48 h-48 border-[2px] border-accent/20 rounded-full animate-ripple-2"></div>
                        <div className="absolute w-48 h-48 border-[2px] border-accent/20 rounded-full animate-ripple-3"></div>
                        <div className="absolute w-80 h-80 border border-slate-200/50 rounded-full opacity-30"></div>
                    </div>

                    <button
                        onClick={handleToggle}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        aria-label={isActive ? "KI-Sprachassistent beenden" : "KI-Sprachassistent starten"}
                        className={`relative z-20 w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center transition-all duration-700 ${isActive ? 'scale-110 shadow-[0_0_100px_-10px_rgba(247,196,41,0.6)]' : 'hover:scale-110 shadow-[0_30px_60px_-10px_rgba(247,196,41,0.4)]'}`}
                    >
                        <div className={`absolute inset-0 rounded-full transition-all duration-700 ${isActive ? 'bg-gradient-to-br from-accent to-[#e5b510]' : 'bg-accent'}`}></div>
                        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-b from-white/60 to-transparent rounded-full blur-[2px]"></div>
                        <div className={`relative text-primary transition-transform duration-500 ${isHovered ? 'scale-110' : ''}`}>
                            {isActive ? (
                                isSpeaking ? <Volume2 className="w-10 h-10 animate-pulse" /> : (
                                    <div className="flex gap-1.5 items-end h-6">
                                        <div className="w-1.5 h-4 bg-primary rounded-full animate-[bounce_0.8s_infinite]"></div>
                                        <div className="w-1.5 h-6 bg-primary rounded-full animate-[bounce_0.8s_0.1s_infinite]"></div>
                                        <div className="w-1.5 h-5 bg-primary rounded-full animate-[bounce_0.8s_0.2s_infinite]"></div>
                                        <div className="w-1.5 h-3 bg-primary rounded-full animate-[bounce_0.8s_0.3s_infinite]"></div>
                                    </div>
                                )
                            ) : (
                                <Mic className="w-10 h-10" />
                            )}
                        </div>
                    </button>
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <span className={`text-sm font-black tracking-[0.2em] uppercase transition-all duration-500 ${isActive ? 'text-accent opacity-100' : 'text-[#111827] opacity-100'}`}>
                            {isActive ? (isSpeaking ? 'Agent spricht...' : 'Zuhören...') : 'zum sprechen klicken'}
                        </span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 items-center animate-reveal-up reveal-delay-500 w-full sm:w-auto px-4 mt-12">
                    <a href="#contact" className="w-full sm:w-auto px-12 py-8 bg-accent text-primary rounded-2xl font-black text-xl sm:text-2xl hover:bg-[#e5b510] hover:scale-105 hover:-rotate-1 transition-all shadow-[0_20px_40px_-10px_rgba(247,196,41,0.5)] flex items-center justify-center gap-4 group">
                        Kostenlose Potenzialanalyse
                        <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
                    </a>
                    <a href="#services" className="w-full sm:w-auto px-16 py-8 bg-white/50 backdrop-blur-md text-primary border-2 border-white rounded-2xl font-bold text-2xl hover:bg-white/80 hover:scale-105 transition-all flex items-center justify-center gap-4 shadow-sm group">
                        Leistungen
                        <div className="w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform"></div>
                    </a>
                </div>

                <div className="mt-12 w-full max-w-5xl mx-auto bg-white/5 backdrop-blur-sm border border-white/20 shadow-sm rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 animate-reveal-up reveal-delay-600">
                    
                    <a href={GOOGLE_REVIEW_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 sm:gap-6 group hover:scale-105 transition-transform duration-300">
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <span className="text-slate-600 font-bold text-xs sm:text-sm tracking-widest uppercase mb-1">Google Rezensionen</span>
                            <div className="flex items-center gap-2 sm:gap-3">
                                <span className="text-3xl sm:text-4xl font-black text-slate-900 group-hover:text-accent transition-colors">5.0</span>
                                <div className="flex gap-0.5 sm:gap-1">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 sm:w-6 sm:h-6 fill-accent text-accent drop-shadow-sm" />)}
                                </div>
                            </div>
                        </div>
                    </a>

                    <div className="hidden md:block w-px h-16 bg-slate-300/50"></div>

                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                         <span className="text-slate-600 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">Zertifizierte Expertise</span>
                         <div className="flex flex-wrap justify-center gap-6 sm:gap-8 items-center text-slate-800">
                             <div className="flex items-center gap-2 font-black tracking-tight text-sm sm:text-base">
                                 <ShieldCheck className="w-6 h-6 text-accent" />
                                 100% DSGVO
                             </div>
                             <div className="flex items-center gap-2 font-black tracking-tight text-sm sm:text-base">
                                 <Trophy className="w-6 h-6 text-accent" />
                                 32 Jahre
                             </div>
                             <div className="flex items-center gap-2 font-black tracking-tight text-sm sm:text-base">
                                 <Sparkles className="w-6 h-6 text-accent" />
                                 Modernste KI
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

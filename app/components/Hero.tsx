"use client";
import React, { useEffect, useState, useCallback } from 'react';
import { ArrowRight, Star, Mic, Volume2 } from 'lucide-react';
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

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh-gradient pt-32 sm:pt-20">
            {/* Background blobs for depth */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] animate-pulse-slow delay-1000"></div>

            <div className="hidden xl:block absolute -right-[138px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] 2xl:w-[800px] 2xl:h-[800px] z-0 pointer-events-none animate-float">
                <iframe
                    src="https://my.spline.design/genkubgreetingrobot-ipOEalSv2ZcyzfVN9684visP/"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                    className="w-full h-full scale-110"
                    title="3D Robot"
                    loading="lazy"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/80 backdrop-blur-md border border-white/50 mb-8 animate-reveal-up shadow-lg">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                    </span>
                    <span className="text-sm font-bold text-slate-800 uppercase tracking-widest">Premium Digital-Berater & KI-Pionier</span>
                </div>

                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[0.95] mb-8 max-w-5xl tracking-tighter animate-reveal-up reveal-delay-100">
                    Online-Erfolg,<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 drop-shadow-sm">der begeistert.</span>
                </h1>

                <p className="text-xl sm:text-2xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto animate-reveal-up reveal-delay-200">
                    Wir verwandeln Ihre digitale Präsenz in einen Kundenmagneten. Modern, psychologisch optimiert und messbar erfolgreich.
                </p>

                <div className="relative w-full max-w-md h-56 sm:h-72 flex items-center justify-center mb-10 animate-reveal-up reveal-delay-300">
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
                        className={`relative z-20 w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center transition-all duration-700 ${isActive ? 'scale-110 shadow-[0_0_100px_-10px_rgba(247,196,41,0.6)]' : 'hover:scale-110 shadow-[0_30px_60px_-10px_rgba(247,196,41,0.4)]'}`}
                    >
                        <div className={`absolute inset-0 rounded-full transition-all duration-700 ${isActive ? 'bg-gradient-to-br from-accent to-[#e5b510]' : 'bg-accent'}`}></div>
                        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-b from-white/60 to-transparent rounded-full blur-[2px]"></div>
                        <div className={`relative text-primary transition-transform duration-500 ${isHovered ? 'scale-110' : ''}`}>
                            {isActive ? (
                                isSpeaking ? <Volume2 className="w-14 h-14 animate-pulse" /> : (
                                    <div className="flex gap-1.5 items-end h-8">
                                        <div className="w-1.5 h-6 bg-primary rounded-full animate-[bounce_0.8s_infinite]"></div>
                                        <div className="w-1.5 h-10 bg-primary rounded-full animate-[bounce_0.8s_0.1s_infinite]"></div>
                                        <div className="w-1.5 h-8 bg-primary rounded-full animate-[bounce_0.8s_0.2s_infinite]"></div>
                                        <div className="w-1.5 h-4 bg-primary rounded-full animate-[bounce_0.8s_0.3s_infinite]"></div>
                                    </div>
                                )
                            ) : (
                                <Mic className="w-14 h-14" />
                            )}
                        </div>
                    </button>
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <span className={`text-sm font-black tracking-[0.2em] uppercase transition-all duration-500 ${isActive ? 'text-accent opacity-100' : 'text-slate-400 opacity-60'}`}>
                            {isActive ? (isSpeaking ? 'Agent spricht...' : 'Zuhören...') : 'Klicken zum Sprechen'}
                        </span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 items-center animate-reveal-up reveal-delay-400 w-full sm:w-auto px-4 mt-12">
                    <a href="#contact" className="w-full sm:w-auto px-16 py-8 bg-accent text-primary rounded-2xl font-black text-2xl hover:bg-[#e5b510] hover:scale-105 hover:-rotate-1 transition-all shadow-[0_20px_40px_-10px_rgba(247,196,41,0.5)] flex items-center justify-center gap-4 group">
                        Termin buchen
                        <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
                    </a>
                    <a href="#services" className="w-full sm:w-auto px-16 py-8 bg-white/50 backdrop-blur-md text-primary border-2 border-white rounded-2xl font-bold text-2xl hover:bg-white/80 hover:scale-105 transition-all flex items-center justify-center gap-4 shadow-sm group">
                        Leistungen
                        <div className="w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform"></div>
                    </a>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-200/30 flex flex-wrap justify-center gap-10 md:gap-20 animate-reveal-up reveal-delay-500">
                    <a href={GOOGLE_REVIEW_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer hover:bg-white/40 p-3 rounded-2xl transition-all">
                        <div className="flex -space-x-1.5">
                            {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-6 h-6 fill-accent text-accent" />)}
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-xl font-black text-slate-900 group-hover:text-accent transition-colors">5.0 Sterne</span>
                            <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">Google Rezensionen</span>
                        </div>
                    </a>
                    <div className="hidden sm:block w-px h-12 bg-slate-200"></div>
                    <div className="flex items-center gap-4 py-3">
                        <div className="text-4xl font-black text-slate-900 tracking-tighter">32+</div>
                        <div className="flex flex-col text-left">
                            <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">Jahre</span>
                            <span className="text-xl font-black text-slate-900 tracking-tight">Erfahrung</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

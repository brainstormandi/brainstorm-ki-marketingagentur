"use client";
import React, { useEffect, useState, useMemo } from 'react';
import { ArrowRight, Star, Brain, Target, Zap, Rocket, Search, Globe, MousePointer2, Sparkles, Layout, ShieldCheck, Trophy } from 'lucide-react';
import { GOOGLE_REVIEW_LINK } from '../constants';

declare global {
    interface Window {
        isVoiceAssistantActive?: () => boolean;
        isVoiceAssistantSpeaking?: () => boolean;
        stopVoiceAssistant?: () => void;
        startVoiceAssistant?: (silent?: boolean) => void;
    }
}

const Hero = () => {
    const [variantIndex, setVariantIndex] = useState<number | null>(null);

    const variants = useMemo(() => [
        {
            line1: "Ihre Marketing-Zukunft",
            line2: "ist jetzt intelligent",
            text: "Wir bauen keine gewöhnlichen Webseiten. Wir erschaffen psychologisch optimierte Vertriebs-Webseiten und Landingpages, die dank KI-Präzision genau die Kunden anziehen, die Sie wirklich wollen.",
            keywords: [
                { icon: <Layout className="w-4 h-4" />, label: "Premium Webseite" },
                { icon: <Target className="w-4 h-4" />, label: "High-Converting Landingpage" },
                { icon: <Brain className="w-4 h-4" />, label: "KI-Präzision" }
            ]
        },
        {
            line1: "KI-Marketing gewinnt",
            line2: "Kunden automatisch",
            text: "Wir bauen Ihre verkaufsstarke Webseite, Landingpage und automatisierte Prozesse. Sichtbar bei Google & ChatGPT.",
            keywords: [
                { icon: <Zap className="w-4 h-4" />, label: "Verkaufs-Landingpage" },
                { icon: <Search className="w-4 h-4" />, label: "SEO / GEO" },
                { icon: <Rocket className="w-4 h-4" />, label: "Automation" }
            ]
        },
        {
            line1: "Schluss mit mühsamem",
            line2: "manuellem Marketing",
            text: "Wir automatisieren Ihre Kundengewinnung mit intelligenten Webseiten, Landingpages und KI-gestützter Suche.",
            keywords: [
                { icon: <Globe className="w-4 h-4" />, label: "Smarte Webseite" },
                { icon: <MousePointer2 className="w-4 h-4" />, label: "Landingpages" },
                { icon: <Sparkles className="w-4 h-4" />, label: "KI-Suche" }
            ]
        }
    ], []);

    useEffect(() => {
        setVariantIndex(Math.floor(Math.random() * variants.length));
    }, [variants.length]);

    const v = variantIndex !== null ? variants[variantIndex] : null;

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-32 sm:pt-28 pb-20">
            {/* Background video with clean white left fade */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    autoPlay
                    muted
                    playsInline
                    aria-hidden="true"
                    className="w-full h-full object-cover scale-[1.25] object-center md:object-[0%_center]"
                >
                    <source src="/video/werbeagentur-ki-video-3.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC]/80 via-white/80 to-white/30 sm:to-white/10"></div>
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="max-w-2xl xl:max-w-3xl">
                    {/* Subheadline Pill */}
                    <div className="inline-flex items-center px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm text-slate-800 font-bold text-xs mb-6 sm:mb-8 uppercase tracking-widest border border-slate-200 shadow-sm animate-reveal-down">
                        Ihre KI-Werbeagentur: Mehr Kunden, weniger Aufwand.
                    </div>

                    {/* MIN-HEIGHT prevents layout shift while variant loads */}
                    <div className="min-h-[320px] sm:min-h-[400px] flex flex-col justify-center">
                        {v && (
                            <>
                                {/* Headline - Inter first part, Playfair italic second part */}
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] py-1 mb-6 animate-reveal-up">
                                    <span className="font-sans font-black block">{v.line1}</span>
                                    <span className="font-sans block text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 drop-shadow-sm pb-2">{v.line2}</span>
                                </h1>

                                {/* Subtext */}
                                <p className="font-body text-[#111827] text-lg leading-relaxed max-w-lg mb-8 animate-reveal-up reveal-delay-200">
                                    {v.text}
                                </p>

                                {/* Tag pills */}
                                <div className="flex flex-wrap gap-2 mb-10 animate-reveal-up reveal-delay-300">
                                    {v.keywords.map((kw, i) => (
                                        <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/60 shadow-sm text-slate-700 font-bold text-[13px] sm:text-sm">
                                            <span className="text-accent">{kw.icon}</span>
                                            {kw.label}
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 animate-reveal-up reveal-delay-500">
                         <a href="#website-check" className="w-full sm:w-auto px-12 py-6 bg-accent text-primary rounded-2xl font-black text-lg sm:text-xl hover:bg-[#e5b510] hover:scale-105 transition-all shadow-[0_20px_40px_-10px_rgba(247,196,41,0.5)] flex items-center justify-center gap-4 group">
                             Kostenloser Webseiten-Check
                             <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                         </a>
                    </div>

                    {/* Trust bar */}
                    <div className="mt-14 flex flex-wrap items-center gap-6 sm:gap-10 animate-reveal-up reveal-delay-600">
                        <a href={GOOGLE_REVIEW_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 group">
                            <span className="text-slate-600 font-bold text-xs sm:text-sm tracking-widest uppercase hidden sm:block">Google Rezensionen</span>
                            <div className="flex gap-0.5 ml-2">
                                {[...Array(5)].map((_, s) => (
                                    <Star key={s} className="w-4 h-4 fill-accent text-accent" />
                                ))}
                            </div>
                            <span className="text-sm font-bold text-slate-900 group-hover:text-accent transition-colors">
                                <strong>5.0</strong>
                            </span>
                        </a>
                        <div className="w-px h-4 bg-slate-300 hidden sm:block"></div>
                        <div className="flex items-center gap-2 text-[13px] font-semibold text-slate-800">
                            <ShieldCheck className="w-4 h-4 text-accent" />
                            100% DSGVO
                        </div>
                        <div className="flex items-center gap-2 text-[13px] font-semibold text-slate-800">
                            <Trophy className="w-4 h-4 text-accent" />
                            32 Jahre
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

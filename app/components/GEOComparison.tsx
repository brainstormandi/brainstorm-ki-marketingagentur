"use client";
import React from 'react';
import { Check, X } from 'lucide-react';

const GEOComparison = () => {
    return (
        <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(247,196,41,0.05),transparent)] pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20 animate-reveal-up">
                    <h2 className="text-4xl sm:text-5xl font-sans font-black mb-6 tracking-normal">
                        Was ist <span className="text-accent">GEO</span> & warum brauchen Sie es?
                    </h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Die Welt der Suche verändert sich. Während klassisches SEO für Google optimiert, sorgt GEO (Generative Engine Optimization) dafür, dass Sie von KIs wie ChatGPT und Perplexity empfohlen werden.
                    </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-[3rem] border border-white/10 overflow-hidden animate-reveal-up transition-all hover:border-accent/30">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="px-8 py-10 font-bold text-lg text-slate-400">Strategie</th>
                                    <th className="px-8 py-10 font-black text-2xl tracking-tight">Klassisches Marketing</th>
                                    <th className="px-8 py-10 font-black text-2xl tracking-tight text-accent">BrainStorm KI & GEO</th>
                                </tr>
                            </thead>
                            <tbody className="text-lg">
                                <tr className="border-b border-white/5">
                                    <td className="px-8 py-8 font-bold text-slate-300">Zielgruppe</td>
                                    <td className="px-8 py-8 text-slate-500">Breite Streuung</td>
                                    <td className="px-8 py-8 flex items-center gap-3"><Check className="text-emerald-400 shrink-0" /> Exakt vor-qualifizierte Leads</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-8 py-8 font-bold text-slate-300">Sichtbarkeit</td>
                                    <td className="px-8 py-8 text-slate-500">Hoffen auf Google-Klicks</td>
                                    <td className="px-8 py-8 flex items-center gap-3"><Check className="text-emerald-400 shrink-0" /> Top-Empfehlung in KI-Antworten</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-8 py-8 font-bold text-slate-300">Geschwindigkeit</td>
                                    <td className="px-8 py-8 text-slate-500">Monatelange Projekte</td>
                                    <td className="px-8 py-8 flex items-center gap-3"><Check className="text-emerald-400 shrink-0" /> Live-Gang in 5 - 7 Werktagen</td>
                                </tr>
                                <tr>
                                    <td className="px-8 py-8 font-bold text-slate-300">Effizienz</td>
                                    <td className="px-8 py-8 text-slate-500 flex items-center gap-3"><X className="text-rose-400 shrink-0" /> Manuelle Prozesse</td>
                                    <td className="px-8 py-8 flex items-center gap-3"><Check className="text-emerald-400 shrink-0" /> Intelligente Automatisierung</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-16 grid sm:grid-cols-2 gap-8 animate-reveal-up reveal-delay-300">
                    <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10">
                        <h4 className="font-bold text-xl mb-4 text-white">Entity Recognition</h4>
                        <p className="text-slate-400">Durch saubere Schema.org Daten erkennt die KI Ihr Unternehmen als vertrauenswürdige Autorität in Ihrer Region.</p>
                    </div>
                    <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10">
                        <h4 className="font-bold text-xl mb-4 text-white">Citation Strategy</h4>
                        <p className="text-slate-400">Wir optimieren Ihre Inhalte so, dass sie von KI-Modellen als Primärdatenquelle zitiert werden.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GEOComparison;

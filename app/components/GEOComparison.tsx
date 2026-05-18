"use client";
import React from 'react';
import { Check, X } from 'lucide-react';

const GEOComparison = () => {
    return (
        <section className="py-32 bg-white text-gray-900 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(247, 196, 41,0.05),transparent)] pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20 animate-reveal-up">
                    <h2 className="text-4xl sm:text-5xl font-[var(--font-playfair)] font-medium mb-6 tracking-wide bg-gradient-to-br from-white to-[#404040] bg-clip-text text-transparent">
                        Was ist <span className="text-[#F7C429] [-webkit-text-fill-color:#F7C429]">GEO</span> & warum brauchst du es?
                    </h2>
                    <p className="text-xl text-gray-600 font-body max-w-3xl mx-auto leading-relaxed">
                        Die Welt der Suche verändert sich. Während klassisches SEO für Google optimiert, sorgt GEO (Generative Engine Optimization) dafür, dass du von KIs wie ChatGPT und Perplexity empfohlen wirst.
                    </p>
                </div>

                <div className="bg-gray-50/50 backdrop-blur-sm rounded-[3rem] border border-gray-200 overflow-hidden animate-reveal-up transition-all hover:border-[#F7C429]/50 hover:shadow-[0_0_30px_rgba(247, 196, 41,0.05)]">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="px-8 py-10 font-bold font-sans text-lg text-gray-600">Strategie</th>
                                    <th className="px-8 py-10 font-bold font-sans text-2xl tracking-normal text-gray-900">Klassisches Marketing</th>
                                    <th className="px-8 py-10 font-bold font-[var(--font-playfair)] text-2xl tracking-wide text-[#F7C429]">BrainStorm KI & GEO</th>
                                </tr>
                            </thead>
                            <tbody className="text-lg">
                                <tr className="border-b border-gray-200">
                                    <td className="px-8 py-8 font-bold font-sans text-[#e4e4e7]">Zielgruppe</td>
                                    <td className="px-8 py-8 text-gray-500 font-body">Breite Streuung</td>
                                    <td className="px-8 py-8 flex items-center gap-3 font-body"><Check className="text-[#F7C429] shrink-0" /> Exakt vor-qualifizierte Leads</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="px-8 py-8 font-bold font-sans text-[#e4e4e7]">Sichtbarkeit</td>
                                    <td className="px-8 py-8 text-gray-500 font-body">Hoffen auf Google-Klicks</td>
                                    <td className="px-8 py-8 flex items-center gap-3 font-body"><Check className="text-[#F7C429] shrink-0" /> Top-Empfehlung in KI-Antworten</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="px-8 py-8 font-bold font-sans text-[#e4e4e7]">Geschwindigkeit</td>
                                    <td className="px-8 py-8 text-gray-500 font-body">Monatelange Projekte</td>
                                    <td className="px-8 py-8 flex items-center gap-3 font-body"><Check className="text-[#F7C429] shrink-0" /> Live-Gang in 5 - 7 Werktagen</td>
                                </tr>
                                <tr>
                                    <td className="px-8 py-8 font-bold font-sans text-[#e4e4e7]">Effizienz</td>
                                    <td className="px-8 py-8 text-gray-500 font-body flex items-center gap-3"><X className="text-gray-500 shrink-0" /> Manuelle Prozesse</td>
                                    <td className="px-8 py-8 flex items-center gap-3 font-body"><Check className="text-[#F7C429] shrink-0" /> Intelligente Automatisierung</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-16 grid sm:grid-cols-2 gap-8 animate-reveal-up reveal-delay-300">
                    <div className="p-8 rounded-[2rem] bg-gray-50/50 border border-gray-200">
                        <h4 className="font-[var(--font-playfair)] font-medium text-2xl tracking-wide mb-4 text-gray-900">Entity Recognition</h4>
                        <p className="text-gray-600 font-body leading-relaxed">Durch saubere Schema.org Daten erkennt die KI dein Unternehmen als vertrauenswürdige Autorität in deiner Region.</p>
                    </div>
                    <div className="p-8 rounded-[2rem] bg-gray-50/50 border border-gray-200">
                        <h4 className="font-[var(--font-playfair)] font-medium text-2xl tracking-wide mb-4 text-gray-900">Citation Strategy</h4>
                        <p className="text-gray-600 font-body leading-relaxed">Wir optimieren deine Inhalte so, dass sie von KI-Modellen als Primärdatenquelle zitiert werden.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GEOComparison;

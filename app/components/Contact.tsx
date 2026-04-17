"use client";
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import Image from 'next/image';

const Contact = () => {
    return (
        <section id="contact" className="scroll-mt-32 py-32 relative overflow-hidden bg-white">
            {/* Background Image Container */}
            <div className="absolute inset-y-0 right-0 w-full lg:w-[60%] z-0">
                <Image
                    src="/bilder/ki-agentur-hg-andi.webp"
                    alt="Andi Sturm BrainStorm KI"
                    fill
                    className="object-cover object-right opacity-[0.8]"
                    priority
                    unoptimized
                />
                {/* Gradient overlap */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <ScrollReveal animation="reveal-right">
                        <div className="inline-flex items-center px-6 py-2 rounded-full bg-slate-50 text-slate-800 font-bold text-xs mb-6 sm:mb-8 uppercase tracking-widest border border-slate-100">Kontakt</div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] py-1 mb-8">
                            <span className="font-sans block">Bereit für</span>
                            <span className="font-sans block text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 drop-shadow-sm pb-2 sm:pb-4">Ihren Erfolg?</span>
                        </h2>
                        
                        <p className="text-[#111827] text-lg leading-relaxed mb-12 max-w-lg font-body">
                            Ob Erstgespräch oder konkretes Projekt – in einem kurzen Call klären wir Ihre Potenziale. Kein Druck, nur ehrliche Beratung.
                        </p>

                        <div className="space-y-6 mb-12">
                            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-5 group">
                                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 bg-white group-hover:bg-accent group-hover:border-accent transition-all duration-300 shrink-0">
                                    <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
                                </div>
                                <div className="text-lg font-bold text-slate-900 group-hover:text-accent transition-colors">
                                    {CONTACT_INFO.email}
                                </div>
                            </a>
                            <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="flex items-center gap-5 group">
                                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 bg-white group-hover:bg-accent group-hover:border-accent transition-all duration-300 shrink-0">
                                    <Phone className="w-5 h-5 group-hover:text-primary transition-colors" />
                                </div>
                                <div className="text-lg font-bold text-slate-900 group-hover:text-accent transition-colors">
                                    {CONTACT_INFO.phone}
                                </div>
                            </a>
                        </div>
                        
                        {/* Trust signals */}
                        <div className="flex flex-wrap gap-5">
                            {["Kostenfreie Potenzialanalyse", "Persönliche Beratung"].map((t, i) => (
                                <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                                    <CheckCircle2 className="w-4 h-4 text-accent" />
                                    {t}
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="reveal-left" delay={200}>
                        <div className="bg-white rounded-3xl p-10 sm:p-12 shadow-sm border border-slate-200 relative overflow-hidden">
                            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                                <Calendar className="w-8 h-8 text-primary" />
                            </div>
                            
                            <h3 className="font-sans text-3xl font-black text-slate-900 mb-4 tracking-tight">Strategie-Session</h3>
                            <p className="text-[#111827] text-lg leading-relaxed mb-10 font-body">
                                Sichern Sie sich Ihr kostenloses 15-Minuten Erstgespräch. Wir analysieren Ihren Status quo und zeigen konkrete Wachstumspotenziale.
                            </p>

                            <a
                                href={CONTACT_INFO.calendly}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between w-full bg-accent text-primary font-black uppercase tracking-widest text-sm px-8 py-5 rounded-2xl hover:bg-[#e5b510] transition-all group shadow-lg"
                                aria-label="Termin buchen"
                            >
                                Termin buchen
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </a>

                            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400 font-bold uppercase tracking-widest">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                </span>
                                Termine verfügbar
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Contact;

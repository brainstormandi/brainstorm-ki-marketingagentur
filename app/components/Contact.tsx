"use client";
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, Calendar, ArrowRight, CheckCircle2, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import Image from 'next/image';

const Contact = () => {
    return (
        <section id="contact" className="scroll-mt-32 py-32 relative overflow-hidden bg-white border-t border-gray-200">
            {/* Background Image Container */}
            <div className="absolute inset-y-0 right-0 w-full lg:w-[60%] z-0">
                <Image
                    src="/bilder/ki-agentur-hg-andi.webp"
                    alt="Andi Sturm BrainStorm KI"
                    fill
                    className="object-cover object-right opacity-[0.45]"
                    priority
                    unoptimized
                />
                {/* Gradient overlap */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/20"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <ScrollReveal animation="reveal-right">
                        <div className="inline-flex items-center px-6 py-2 rounded-full bg-transparent text-gray-600 font-bold text-xs mb-6 sm:mb-8 uppercase tracking-widest border border-gray-200">Kontakt</div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[var(--font-playfair)] font-medium text-gray-900 tracking-tight leading-[1.1] py-1 mb-8 uppercase">
                            <span className="block">Bereit für</span>
                            <span className="block text-transparent bg-clip-text pb-2 sm:pb-4" style={{backgroundImage: 'linear-gradient(180deg, #111827 0%, #374151 28%, #111827 48%, #4b5563 75%, #000000 100%)'}}>Ihren Erfolg?</span>
                        </h2>
                        
                        <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-lg font-body">
                            Ob Erstgespräch oder konkretes Projekt – in einem kurzen Call klären wir Ihre Potenziale. Kein Druck, nur ehrliche Beratung.
                        </p>

                        <div className="space-y-6 mb-12">
                            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-5 group">
                                <div className="w-12 h-12 rounded-full border border-[#F7C429] flex items-center justify-center text-[#F7C429] bg-white group-hover:bg-[#F7C429] group-hover:text-black transition-all duration-300 shrink-0">
                                    <Mail className="w-5 h-5 transition-colors" />
                                </div>
                                <div className="text-lg font-bold text-gray-900 group-hover:text-[#F7C429] transition-colors">
                                    {CONTACT_INFO.email}
                                </div>
                            </a>
                            <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="flex items-center gap-5 group">
                                <div className="w-12 h-12 rounded-full border border-[#F7C429] flex items-center justify-center text-[#F7C429] bg-white group-hover:bg-[#F7C429] group-hover:text-black transition-all duration-300 shrink-0">
                                    <Phone className="w-5 h-5 transition-colors" />
                                </div>
                                <div className="text-lg font-bold text-gray-900 group-hover:text-[#F7C429] transition-colors">
                                    {CONTACT_INFO.phone}
                                </div>
                            </a>
                        </div>
                        
                        {/* Trust signals */}
                        <div className="flex flex-wrap gap-x-8 gap-y-4 mt-4">
                            {["Kostenfreie Potenzialanalyse", "Persönliche Beratung"].map((t, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm sm:text-base font-bold text-gray-800 uppercase tracking-[0.15em]">
                                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#F7C429]" />
                                    {t}
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="reveal-left" delay={200}>
                        <div className="bg-transparent backdrop-blur-md rounded-3xl p-10 sm:p-12 shadow-sm border border-gray-200 relative overflow-hidden group hover:border-[#F7C429]/50 hover:shadow-[0_4px_20px_rgba(247,196,41,0.3)] transition-all duration-500">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 border border-[#F7C429]">
                                <Calendar className="w-8 h-8 text-[#F7C429]" />
                            </div>
                            
                            <h3 className="font-[var(--font-playfair)] text-3xl font-medium text-gray-900 mb-4 tracking-normal">Strategie-Session</h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-10 font-body">
                                Sichern Sie sich Ihr kostenloses 15-Minuten Erstgespräch. Wir analysieren Ihren Status quo und zeigen konkrete Wachstumspotenziale.
                            </p>

                            <a
                                href={CONTACT_INFO.calendly}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-3 w-full bg-[#F7C429] text-black px-8 py-[22px] rounded-full font-bold uppercase tracking-[0.15em] text-[14px] sm:text-[15px] shadow-[0_10px_30px_rgba(247,196,41,0.4)] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-black hover:text-[#F7C429] hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 cursor-pointer"
                                aria-label="Termin buchen"
                            >
                                Termin buchen
                                <ArrowUpRight className="w-[20px] h-[20px] transition-transform duration-400 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </a>

                            <div className="mt-8 flex items-center justify-center gap-2 text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F7C429] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F7C429]"></span>
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

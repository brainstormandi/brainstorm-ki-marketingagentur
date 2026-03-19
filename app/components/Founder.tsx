"use client";
import React from 'react';
import Image from 'next/image';
import { Quote, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Founder = () => {
    return (
        <section className="py-40 bg-white relative overflow-hidden">
            {/* Soft decorative background blobs */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-slate-50 rounded-full blur-[120px] -ml-48 -mt-48 opacity-50" aria-hidden="true"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
                    <ScrollReveal animation="reveal-right" className="relative order-2 lg:order-1">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-accent/5 rounded-full blur-[100px] animate-pulse-gentle" aria-hidden="true"></div>
                        <div className="relative">
                            {/* Decorative frames */}
                            <div className="absolute inset-0 bg-slate-900 rounded-[4rem] rotate-3 opacity-5 translate-x-6 translate-y-6" aria-hidden="true"></div>
                            <div className="absolute inset-0 bg-accent rounded-[4rem] -rotate-2 opacity-10 translate-x-3 translate-y-3" aria-hidden="true"></div>

                            <div className="relative rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[12px] border-white aspect-[4/5] lg:aspect-[4/5] group bg-white">
                                <Image
                                    src="/bilder/andi-sturm.png"
                                    alt="Andi Sturm - BrainStorm Werbeagentur"
                                    width={800}
                                    height={1000}
                                    className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-slate-900/90 to-transparent backdrop-blur-[2px]">
                                    <h4 className="text-white font-display font-black text-4xl tracking-normal mb-2">Andi Sturm</h4>
                                    <p className="text-accent text-lg uppercase tracking-[0.3em] font-black">Gründer & Visionär</p>
                                </div>
                            </div>

                            {/* Experience Badge */}
                            <div className="absolute -top-6 -right-4 sm:-top-10 sm:-right-10 bg-accent text-primary p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(247,196,41,0.5)] rotate-12 hover:rotate-0 transition-all duration-500 cursor-default group z-20 animate-float">
                                <div className="flex flex-col items-center leading-none">
                                    <span className="text-4xl sm:text-6xl font-black tracking-tighter group-hover:scale-110 transition-transform">32+</span>
                                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mt-2 sm:mt-3 whitespace-nowrap">Jahre Erfahrung</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="reveal-left" delay={200} className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-slate-50 text-slate-800 font-bold text-sm mb-10 uppercase tracking-widest border border-slate-100">
                            <Sparkles className="w-4 h-4 text-accent" />
                            Der Macher hinter BrainStorm
                        </div>
                        <h2 className="text-5xl sm:text-7xl font-display font-black text-slate-900 mb-10 tracking-normal leading-[1.05]">
                            Unsere Mission <br />
                            ist <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#e5b510] relative">Ihr Erfolg.</span>
                        </h2>

                        <div className="space-y-8 text-lg text-slate-500 leading-relaxed">
                            <p className="first-letter:text-7xl first-letter:font-black first-letter:text-slate-900 first-letter:mr-4 first-letter:float-left first-letter:leading-[0.8]">
                                Seit über drei Jahrzehnten begleite ich Unternehmer dabei, ihre Visionen in messbare Erfolge zu verwandeln. Bei BrainStorm verbinden wir diese tiefe Erfahrung mit modernster KI-Technologie.
                            </p>
                            <p>
                                Wir schaffen keine Standardlösungen, sondern digitale Unikate, die Ihre Auftragslage sichern und Ihnen wieder mehr Freiheit für Ihr Kerngeschäft geben. Ehrlich, direkt und mit echter Handschlagqualität.
                            </p>
                        </div>

                        <div className="mt-16 pt-16 border-t border-slate-100">
                            <div className="flex items-start gap-8">
                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0" aria-hidden="true">
                                    <Quote className="w-8 h-8 text-accent" />
                                </div>
                                <div className="space-y-4">
                                    <p className="text-3xl font-display font-black text-slate-900 tracking-normal leading-snug">
                                        &quot;Sichtbarkeit schafft Erfolg. Aber nur Relevanz schafft Vertrauen.&quot;
                                    </p>
                                    <div className="font-bold text-slate-400 text-xl tracking-tight">
                                        — Andi Sturm
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Founder;

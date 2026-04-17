"use client";
import React from 'react';
import Image from 'next/image';
import { Quote, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Founder = () => {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Andi Sturm",
        "jobTitle": "Gründer & Visionär",
        "worksFor": {
            "@type": "Organization",
            "name": "BrainStorm KI Werbeagentur"
        },
        "sameAs": [
            "https://www.linkedin.com/in/brainstorm-andi/"
        ],
        "knowsAbout": [
            "Generative Engine Optimization (GEO)",
            "Web Development",
            "Digital Marketing",
            "Automation"
        ]
    };

    return (
        <section id="about" className="scroll-mt-32 py-32 bg-white relative overflow-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
                    <ScrollReveal animation="reveal-right" className="relative order-2 lg:order-1">
                        <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-[4/5] group bg-white">
                                <Image
                                    src="/bilder/andi-sturm.png"
                                    alt="Andi Sturm - BrainStorm Werbeagentur"
                                    width={800}
                                    height={1000}
                                    className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-slate-900/90 to-transparent">
                                    <h4 className="text-white font-sans font-black text-3xl tracking-tight mb-2">Andi Sturm</h4>
                                    <p className="text-accent text-sm uppercase tracking-[0.2em] font-bold">Gründer & Visionär</p>
                                </div>
                            </div>

                            {/* Experience Badge */}
                            <div className="absolute -top-6 -right-4 sm:-top-8 sm:-right-8 bg-accent text-primary p-6 sm:p-8 rounded-3xl shadow-xl rotate-6 group hover:rotate-0 transition-transform duration-500 z-20">
                                <div className="flex flex-col items-center leading-none">
                                    <span className="text-4xl sm:text-5xl font-black tracking-tighter">32+</span>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] mt-2 whitespace-nowrap">Jahre Erfahrung</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="reveal-left" delay={200} className="order-1 lg:order-2">
                        <div className="inline-flex items-center px-6 py-2 rounded-full bg-slate-50 text-slate-800 font-bold text-xs mb-8 uppercase tracking-widest border border-slate-100">
                            Der Macher hinter BrainStorm
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-10 tracking-tight leading-tight py-1">
                            <span className="font-sans block">Unsere Mission</span>
                            <span className="font-sans block text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#e5b510] pb-2">ist Ihr Erfolg.</span>
                        </h2>

                        <div className="space-y-6 text-[#111827] text-lg lg:text-xl leading-relaxed font-body">
                            <p>
                                Seit über drei Jahrzehnten begleite ich Unternehmer dabei, ihre Visionen in messbare Erfolge zu verwandeln. Bei BrainStorm verbinden wir diese tiefe Erfahrung mit modernster KI-Technologie.
                            </p>
                            <p>
                                Wir schaffen keine Standardlösungen, sondern digitale Unikate, die Ihre Auftragslage sichern und Ihnen wieder mehr Freiheit für Ihr Kerngeschäft geben. Ehrlich, direkt und mit echter Handschlagqualität.
                            </p>
                        </div>

                        <div className="mt-12 pt-12 border-t border-slate-200">
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                                    <Quote className="w-6 h-6 text-accent" />
                                </div>
                                <div className="space-y-3 pt-1">
                                    <p className="text-2xl font-sans font-black text-slate-900 tracking-tight leading-snug">
                                        &quot;Sichtbarkeit schafft Erfolg. Aber nur Relevanz schafft Vertrauen.&quot;
                                    </p>
                                    <div className="font-bold text-slate-400 text-sm uppercase tracking-widest">
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

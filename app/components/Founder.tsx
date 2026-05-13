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
        <section id="about" className="scroll-mt-32 py-32 bg-white border-t border-gray-200 relative overflow-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
                    <ScrollReveal animation="reveal-right" className="relative order-2 lg:order-1">
                        <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-2xl group bg-white flex flex-col">
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    <Image
                                        src="/bilder/andi-sturm.png"
                                        alt="Andi Sturm - BrainStorm Werbeagentur"
                                        width={800}
                                        height={1000}
                                        className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                                        priority
                                    />
                                </div>
                                <div className="bg-white p-8 sm:p-10 border-t border-gray-50">
                                    <h4 className="text-gray-900 font-[var(--font-playfair)] font-medium text-3xl tracking-normal mb-2">Andi Sturm</h4>
                                    <p className="text-[#F7C429] text-[10px] uppercase tracking-[0.2em] font-bold">Gründer & Visionär</p>
                                </div>
                            </div>

                            {/* Experience Badge */}
                            <div className="absolute -top-6 -right-4 sm:-top-8 sm:-right-8 bg-white border border-[#F7C429]/30 text-[#F7C429] p-6 sm:p-8 rounded-3xl shadow-xl rotate-6 group hover:rotate-0 transition-transform duration-500 z-20 backdrop-blur-sm">
                                <div className="flex flex-col items-center leading-none">
                                    <span className="text-gray-900 font-[var(--font-playfair)] text-4xl sm:text-5xl font-medium tracking-tight">32+</span>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] mt-2 whitespace-nowrap">Jahre Erfahrung</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="reveal-left" delay={200} className="order-1 lg:order-2">
                        <div className="inline-flex items-center px-6 py-2 rounded-full bg-transparent text-gray-600 font-bold text-xs mb-8 uppercase tracking-widest border border-gray-200">
                            Der Macher hinter BrainStorm
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[var(--font-playfair)] font-medium text-gray-900 mb-10 tracking-tight leading-[1.1] py-1 uppercase">
                            <span className="block">Unsere Mission</span>
                            <span className="block text-transparent bg-clip-text pb-2" style={{backgroundImage: 'linear-gradient(180deg, #111827 0%, #374151 28%, #111827 48%, #4b5563 75%, #000000 100%)'}}>ist Ihr Erfolg.</span>
                        </h2>

                        <div className="space-y-6 text-gray-600 text-lg lg:text-xl leading-relaxed font-body">
                            <p>
                                KI ist ein Werkzeug, aber Marketing ist Handwerk. Seit 32 Jahren begleite ich Betriebe in Österreich dabei, sichtbarer und erfolgreicher zu werden.
                            </p>
                            <p>
                                Mit meiner Werbeagentur BrainStorm bringe ich heute das Beste aus zwei Welten zusammen:<br />
                                Die Verlässlichkeit eines erfahrenen Partners und die enorme Geschwindigkeit moderner KI-Automatisierung. Ich nenne das: KI mit Handschlagqualität.
                            </p>
                        </div>

                        <div className="mt-12 pt-12 border-t border-gray-200">
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 border border-gray-200 rounded-full flex items-center justify-center shrink-0">
                                    <Quote className="w-6 h-6 text-[#F7C429]" />
                                </div>
                                <div className="space-y-3 pt-1">
                                    <p className="text-2xl font-[var(--font-playfair)] font-medium text-gray-900 tracking-normal leading-snug">
                                        &quot;Sichtbarkeit schafft Erfolg. Aber nur Relevanz schafft Vertrauen.&quot;
                                    </p>
                                    <div className="font-bold text-gray-500 text-[10px] uppercase tracking-[0.2em]">
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

"use client";
import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Services = () => {
    const servicesSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": SERVICES.map((service, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Service",
                "name": service.title,
                "description": service.description,
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "BrainStorm KI Werbeagentur"
                }
            }
        }))
    };

    return (
        <section id="services" className="scroll-mt-32 py-32 bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-20">
                    <div>
                        <div className="inline-flex items-center px-6 py-2 rounded-full bg-transparent text-gray-600 font-bold text-xs mb-6 sm:mb-8 uppercase tracking-widest border border-gray-200">Was wir für Sie tun</div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 font-[var(--font-playfair)] font-medium tracking-tight leading-[1.1] py-1 uppercase">
                            <span className="block">Digitale</span>
                            <span className="block text-transparent bg-clip-text pb-2" style={{backgroundImage: 'linear-gradient(180deg, #111827 0%, #374151 28%, #111827 48%, #4b5563 75%, #000000 100%)'}}>Lösungen.</span>
                        </h2>
                    </div>
                    <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-[400px] font-body">
                        Zukunftsweisende Technologien, kombiniert mit 32 Jahren Erfahrung im Marketing – für Ergebnisse, die messbar sind.
                    </p>
                </ScrollReveal>

                {/* Service Grid - Same style as Process */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => (
                        <ScrollReveal key={index} delay={index * 100} animation="reveal-up">
                            <div className="relative bg-transparent rounded-3xl p-10 sm:p-12 border border-gray-200 backdrop-blur-sm group hover:border-[#F7C429]/50 hover:shadow-[0_4px_20px_rgba(247,196,41,0.3)] transition-all duration-500 h-full flex flex-col overflow-hidden">
                                {/* Large number watermark */}
                                <div className="absolute right-0 bottom-0 pointer-events-none translate-x-[20%] translate-y-[20%] font-sans text-[12rem] font-black leading-none text-[#00000005] group-hover:text-[#F7C429]/10 transition-all duration-700">
                                    {index + 1}
                                </div>

                                {/* Icon + Title Row */}
                                <div className="flex items-center gap-4 mb-5 relative z-10">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-xl border border-gray-200 group-hover:border-[#F7C429] transition-colors">
                                        <div className="[&>svg]:w-6 [&>svg]:h-6 [&>svg]:text-[#F7C429] transition-colors">
                                           {service.icon}
                                        </div>
                                    </div>
                                    <h3 className="font-[var(--font-playfair)] text-2xl font-medium text-gray-900 tracking-normal leading-tight">
                                        {service.title}
                                    </h3>
                                </div>

                                <p className="text-gray-600 text-lg leading-relaxed font-body flex-grow relative z-10">
                                    {service.description}
                                </p>

                                {/* Metric Bottom Row */}
                                {service.stat && (
                                    <div className="mt-8 pt-6 border-t border-gray-200 relative z-10">
                                        <div className="font-[var(--font-playfair)] font-medium text-3xl text-gray-900 tracking-tight leading-none mb-1">
                                            {service.stat.value}
                                        </div>
                                        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-2">
                                            {service.stat.label}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

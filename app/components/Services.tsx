"use client";
import React from 'react';
import { SERVICES } from '../constants';
import { Sparkles, ArrowRight } from 'lucide-react';
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
        <section id="services" className="scroll-mt-32 py-40 bg-white relative overflow-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50 rounded-full blur-[120px] -mr-96 -mt-96 opacity-60"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-50 text-primary font-bold text-sm uppercase tracking-widest mb-6 border border-slate-100">
                        <Sparkles className="w-4 h-4 text-accent" />
                        Expertise
                    </div>
                    <h2 className="text-5xl sm:text-7xl font-display font-black text-slate-900 tracking-normal mb-8 leading-[1.1]">
                        Ganzheitliche <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">digitale Exzellenz.</span>
                    </h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        Von der ersten Vision bis zum messbaren Erfolg – wir begleiten Sie auf jedem Schritt.
                    </p>
                </ScrollReveal>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {SERVICES.map((service, index) => (
                        <ScrollReveal
                            key={index}
                            animation="reveal-up"
                            delay={index * 150}
                            className="h-full"
                        >
                            <div className="relative p-10 lg:p-12 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(229,181,16,0.15)] transition-all duration-500 flex flex-col h-full group overflow-hidden hover:-translate-y-2">
                                {/* Ambient glow on hover */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -mr-32 -mt-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none"></div>
                                
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200/60 flex items-center justify-center mb-8 shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-500 relative">
                                        <div className="absolute inset-0 bg-accent/20 rounded-[1.5rem] blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="relative z-10 text-slate-700 group-hover:text-primary transition-colors duration-300">
                                            {service.icon}
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 transition-all duration-300">{service.title}</h3>
                                    
                                    <p className="text-slate-500 leading-relaxed flex-grow text-base lg:text-lg mb-8">
                                        {service.description}
                                    </p>
                                    
                                    {service.stat && (
                                        <div className="mt-auto pt-6 border-t border-slate-100/80 group-hover:border-accent/30 transition-colors duration-500 flex items-end justify-between">
                                            <div className="flex flex-col">
                                                <span className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tighter group-hover:text-primary transition-colors duration-500">{service.stat.value}</span>
                                                <span className="text-[10px] lg:text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{service.stat.label}</span>
                                            </div>
                                            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-accent group-hover:-rotate-45 transition-all duration-500 shadow-sm border border-slate-100 group-hover:border-accent">
                                                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors duration-200" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

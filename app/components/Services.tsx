"use client";
import React from 'react';
import { SERVICES } from '../constants';
import { Sparkles } from 'lucide-react';

const Services = () => {
    return (
        <section id="services" className="py-40 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50 rounded-full blur-[120px] -mr-96 -mt-96 opacity-60"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-24 animate-reveal-up">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-50 text-primary font-bold text-sm uppercase tracking-widest mb-6 border border-slate-100">
                        <Sparkles className="w-4 h-4 text-accent" />
                        Expertise
                    </div>
                    <h2 className="text-5xl sm:text-7xl font-display font-black text-slate-900 tracking-tighter mb-8 leading-[1.1]">
                        Ganzheitliche <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">digitale Exzellenz.</span>
                    </h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        Von der ersten Vision bis zum messbaren Erfolg – wir begleiten Sie auf jedem Schritt.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {SERVICES.map((service, index) => (
                        <div
                            key={index}
                            className={`premium-card p-12 flex flex-col h-full animate-reveal-up`}
                            style={{ animationDelay: `${(index + 1) * 150}ms` }}
                        >
                            <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-slate-100">
                                <div className="text-slate-900">
                                    {service.icon}
                                </div>
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">{service.title}</h3>
                            <p className="text-lg text-slate-500 leading-relaxed flex-grow">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

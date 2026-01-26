"use client";
import React from 'react';
import { Mail, Phone, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact = () => {
    return (
        <section id="contact" className="py-40 bg-white relative overflow-hidden">
            {/* Soft decorative elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] -mr-48 -mt-48 opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -ml-44 -mb-44 opacity-60"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">
                    <div className="animate-reveal-up">
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-slate-50 text-slate-800 font-bold text-sm uppercase tracking-widest mb-10 border border-slate-100">
                            👋 Dialog starten
                        </div>
                        <h3 className="text-5xl lg:text-7xl font-display font-black text-slate-900 mb-10 leading-[1.05] tracking-tighter">
                            Ihr Weg zum <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#e5b510]">Online-Erfolg.</span>
                        </h3>
                        <p className="text-xl text-slate-500 mb-16 leading-relaxed max-w-xl">
                            Ob Erstgespräch oder konkretes Projekt – wir freuen uns darauf, Sie kennenzulernen. In einem kurzen Call klären wir Ihre Potenziale.
                        </p>

                        <div className="grid sm:grid-cols-1 gap-6">
                            {[
                                { icon: <Mail />, label: 'E-Mail', val: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
                                { icon: <Phone />, label: 'Telefon', val: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}` },
                            ].map((item, idx) => (
                                <a key={idx} href={item.href} className="flex items-center gap-6 p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 border border-slate-100 group">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-accent group-hover:text-primary transition-all shrink-0">
                                        {React.cloneElement(item.icon as React.ReactElement<any>, { className: "w-6 h-6" })}
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{item.label}</div>
                                        <div className="font-display font-black text-lg sm:text-xl text-slate-900 tracking-tight">
                                            {item.val}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="relative animate-reveal-up reveal-delay-300 lg:sticky lg:top-32">
                        <div className="absolute inset-0 bg-accent rounded-[3.5rem] rotate-2 opacity-5 translate-x-4 translate-y-4"></div>
                        <div className="relative bg-white rounded-[3.5rem] p-12 sm:p-16 text-center text-slate-900 overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] border border-slate-100">
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mb-10 border border-slate-100 shadow-sm animate-bounce-slow">
                                    <Calendar className="w-10 h-10 text-accent" />
                                </div>
                                <h4 className="text-4xl font-display font-black mb-6 tracking-tighter">Strategie-Session</h4>
                                <p className="text-lg text-slate-500 mb-12 leading-relaxed">
                                    Sichern Sie sich Ihr kostenloses 15-Minuten Erstgespräch und klären wir offene Fragen.
                                </p>
                                <a
                                    href={CONTACT_INFO.calendly}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full group flex items-center justify-center gap-4 px-10 py-8 bg-slate-900 text-white rounded-[2rem] font-black text-xl hover:bg-slate-800 hover:scale-[1.02] active:scale-95 transition-all shadow-2xl shadow-slate-900/20 uppercase tracking-widest"
                                >
                                    Termin buchen
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                </a>
                                <div className="mt-10 flex items-center gap-3 text-xs text-slate-400 font-bold uppercase tracking-widest justify-center">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                    </span>
                                    Termine verfügbar
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

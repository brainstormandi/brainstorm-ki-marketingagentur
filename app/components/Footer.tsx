"use client";
import React from 'react';
import { Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-12 lg:gap-20 mb-20">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-8">
                            <img
                                src="/bilder/logo.png"
                                alt="BrainStorm Logo"
                                className="h-10 w-auto object-contain grayscale opacity-80"
                            />
                            <span className="font-display font-bold text-2xl tracking-tight text-slate-900">BrainStorm</span>
                        </div>
                        <p className="text-lg text-slate-500 max-w-sm mb-8 leading-relaxed">
                            Wir begleiten österreichische KMUs in die digitale Zukunft. Mit Herz, Verstand und modernster Technologie.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-display font-bold text-slate-900 mb-6 text-lg">Agentur</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="#services" className="text-slate-500 hover:text-primary transition-colors flex items-center gap-1 group">
                                    Leistungen
                                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                            <li>
                                <a href="#process" className="text-slate-500 hover:text-primary transition-colors flex items-center gap-1 group">
                                    Ablauf
                                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-slate-500 hover:text-primary transition-colors flex items-center gap-1 group">
                                    Kontakt
                                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-bold text-slate-900 mb-6 text-lg">Rechtliches</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-slate-500 hover:text-primary transition-colors">Impressum</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-primary transition-colors">Datenschutz</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-primary transition-colors">AGB</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm font-medium">
                    <p>&copy; {new Date().getFullYear()} BrainStorm KI Werbeagentur. Alle Rechte vorbehalten.</p>
                    <p>Hergestellt mit ❤️ in Seitenstetten, Österreich.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

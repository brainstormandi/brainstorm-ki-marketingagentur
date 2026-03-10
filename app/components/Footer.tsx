"use client";
import React from 'react';
import { Linkedin, Facebook, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-12 lg:gap-20 mb-20">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-8">
                            <img
                                src="/bilder/logo.png"
                                alt=""
                                aria-hidden="true"
                                className="h-10 w-auto object-contain grayscale opacity-80"
                            />
                            <span className="font-sans font-bold text-2xl tracking-tight text-slate-900">BrainStorm</span>
                        </div>
                        <p className="text-lg text-slate-500 max-w-sm mb-8 leading-relaxed">
                            Wir begleiten österreichische KMUs in die digitale Zukunft. Mit Herz, Verstand und modernster Technologie.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.linkedin.com/in/andreas-sturm-b9282966/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                            >
                                <Linkedin className="w-5 h-5" aria-hidden="true" />
                            </a>
                            <a
                                href="https://www.facebook.com/BrainStorm.Werbeagentur"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                            >
                                <Facebook className="w-5 h-5" aria-hidden="true" />
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
                            <li><a href="/impressum" className="text-slate-500 hover:text-primary transition-colors">Impressum</a></li>
                            <li><a href="/datenschutz" className="text-slate-500 hover:text-primary transition-colors">Datenschutz</a></li>
                            <li><a href="/bilder/AGB%20BrainStorm.pdf" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors">AGB</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-3 pt-12 mt-12 border-t border-slate-100 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <h5 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-widest">Standort</h5>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Am+Ziegelfeld+8,+3353+Seitenstetten"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-500 hover:text-primary transition-colors leading-neutral block"
                            >
                                Am Ziegelfeld 8<br />
                                3353 Seitenstetten<br />
                                Niederösterreich, AT
                            </a>
                        </div>
                        <div>
                            <h5 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-widest">Region</h5>
                            <ul className="text-slate-500 space-y-1">
                                <li>Bezirk Amstetten</li>
                                <li>Mostviertel</li>
                                <li>Linz • St. Pölten</li>
                                <li>Wien • Österreichweit</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-widest">Kontakt</h5>
                            <ul className="text-slate-500 space-y-1">
                                <li>
                                    <a href="mailto:info@brainstorm-werbeagentur.at" className="hover:text-primary transition-colors">
                                        info@brainstorm-werbeagentur.at
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+436605203171" className="hover:text-primary transition-colors">
                                        +43 660 520 3171
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-widest">Spezialisierung</h5>
                            <ul className="text-slate-500 space-y-1">
                                <li>KI Werbeagentur</li>
                                <li>SEO & GEO</li>
                                <li>Website KMU</li>
                                <li>Automatisierung</li>
                            </ul>
                        </div>
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

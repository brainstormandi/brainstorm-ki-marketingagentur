"use client";
import React from 'react';
import { Linkedin, Facebook, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-white relative overflow-hidden border-t border-gray-200">
            {/* Main footer content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 xl:gap-12 mb-16">
                    
                    {/* Brand Col */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-8">
                            <img
                                src="/bilder/logo.png"
                                alt="BrainStorm Logo"
                                className="h-10 w-auto object-contain"
                            />
                            <div className="flex flex-col leading-none text-left">
                                <span className="font-body font-black text-lg sm:text-xl tracking-wide text-gray-900 leading-none mb-1">
                                    BrainStorm
                                </span>
                                <span className="font-body text-xs sm:text-sm font-medium tracking-[0.15em] text-gray-600">KI Werbeagentur</span>
                            </div>
                        </div>
                        <p className="text-gray-600 text-base leading-relaxed mb-8 font-body">
                            Wir begleiten österreichische KMUs in die digitale Zukunft. Mit Herz, Verstand und modernster Technologie für maximale Sichtbarkeit.
                        </p>
                        <div className="flex gap-4 items-center mt-auto">
                            {[
                                { href: "https://www.linkedin.com/in/brainstorm-andi/", label: "LinkedIn", icon: <Linkedin className="w-5 h-5" /> },
                                { href: "https://www.facebook.com/BrainStorm.Werbeagentur", label: "Facebook", icon: <Facebook className="w-5 h-5" /> }
                            ].map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-black hover:bg-[#F7C429] hover:border-[#F7C429] shadow-sm hover:shadow-[0_4px_20px_rgba(247,196,41,0.3)] transition-all duration-300"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Nav Cols */}
                    <div className="lg:pl-8 xl:pl-16">
                        <h4 className="text-[13px] sm:text-sm font-black text-gray-900 uppercase tracking-[0.15em] mb-6">Navigation</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Leistungen', href: '#services' },
                                { name: 'Philosophie', href: '#philosophie' },
                                { name: 'Ablauf', href: '#process' },
                                { name: 'FAQ', href: '#faq' },
                                { name: 'Kontakt', href: '#contact' }
                            ].map((l) => (
                                <li key={l.name}>
                                    <a href={l.href} className="text-base text-gray-600 hover:text-[#F7C429] font-medium transition-colors inline-flex items-center gap-1 group font-body">
                                        {l.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Regions Col */}
                    <div>
                        <h4 className="text-[13px] sm:text-sm font-black text-gray-900 uppercase tracking-[0.15em] mb-6">Regionale Agentur</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Amstetten & Mostviertel', href: '/werbeagentur-amstetten' },
                                { name: 'Steyr & Ennstal', href: '/werbeagentur-steyr' },
                                { name: 'Linz & Zentralraum OÖ', href: '/werbeagentur-linz' },
                                { name: 'Salzburg & Umland', href: '/werbeagentur-salzburg' },
                                { name: 'Perg & Machland', href: '/werbeagentur-perg' },
                                { name: 'St. Pölten & NÖ Mitte', href: '/werbeagentur-st-poelten' },
                                { name: 'Wien & Umgebung', href: '/werbeagentur-wien' }
                            ].map((r) => (
                                <li key={r.name}>
                                    <a href={r.href} className="text-base text-gray-600 hover:text-[#F7C429] font-medium transition-colors group font-body">
                                        {r.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info Col */}
                    <div>
                        <h4 className="text-[13px] sm:text-sm font-black text-gray-900 uppercase tracking-[0.15em] mb-6">Kontakt</h4>
                        <ul className="space-y-5">
                            <li>
                                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-start gap-4 text-gray-600 hover:text-[#F7C429] transition-colors group">
                                    <Mail className="w-5 h-5 mt-0.5 text-gray-400 group-hover:text-[#F7C429] transition-colors shrink-0" />
                                    <span className="text-base font-medium font-body break-words leading-snug">{CONTACT_INFO.email}</span>
                                </a>
                            </li>
                            <li>
                                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 text-gray-600 hover:text-[#F7C429] transition-colors group">
                                    <Phone className="w-5 h-5 text-gray-400 group-hover:text-[#F7C429] transition-colors shrink-0" />
                                    <span className="text-base font-medium font-body">{CONTACT_INFO.phone}</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.google.com/maps/search/?api=1&query=Am+Ziegelfeld+8,+3353+Seitenstetten" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 text-gray-600 hover:text-[#F7C429] transition-colors group">
                                    <MapPin className="w-5 h-5 mt-1 text-gray-400 group-hover:text-[#F7C429] transition-colors shrink-0" />
                                    <span className="text-base font-medium leading-relaxed font-body">
                                        Am Ziegelfeld 8<br />
                                        3353 Seitenstetten, AT
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Legal bar */}
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
                        <p className="text-sm text-gray-500 font-medium font-body">
                            © {year} BrainStorm KI Werbeagentur. Alle Rechte vorbehalten.
                        </p>
                        <span className="hidden md:inline text-gray-300">•</span>
                        <p className="text-sm text-gray-500 font-medium font-body">
                            Hergestellt mit ❤️ in Seitenstetten, Österreich.
                        </p>
                    </div>
                    <div className="flex gap-6 items-center">
                        <a href="/impressum" className="text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors font-body">Impressum</a>
                        <a href="/datenschutz" className="text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors font-body">Datenschutz</a>
                        <a href="/bilder/AGB%20BrainStorm.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors font-body">AGB</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

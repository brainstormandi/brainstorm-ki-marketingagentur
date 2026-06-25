"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Facebook, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

// ally.co Footer: headshot CTA + nav columns + copyright
const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#F5EFE6] border-t border-[#1C1C1C]/10 text-[#1C1C1C]">

            {/* ── MAIN FOOTER ── */}
            <div className="max-w-6xl mx-auto px-6 md:px-12 py-14">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Brand */}
                    <div className="lg:col-span-4">
                        <Link href="/" className="block mb-5 w-full max-w-[280px] group">
                            <div className="relative w-full aspect-[953/525] shrink-0">
                                <Image 
                                    src="/logo/logo.webp" 
                                    alt="BrainStorm Webagentur - Website Werbeagentur Niederösterreich" 
                                    fill 
                                    className="object-contain object-left" 
                                />
                            </div>
                        </Link>
                        <p className="font-[var(--font-inter)] text-[#1C1C1C]/55 text-sm leading-relaxed mb-6 max-w-xs">
                            Wir begleiten österreichische KMUs in die digitale Zukunft. Mit Herz, Verstand und modernster Technologie.
                        </p>
                        <div className="flex gap-2">
                            {[
                                { href: 'https://www.linkedin.com/in/brainstorm-andi/', label: 'LinkedIn', icon: <Linkedin className="w-4 h-4" /> },
                                { href: 'https://www.facebook.com/BrainStorm.Werbeagentur', label: 'Facebook', icon: <Facebook className="w-4 h-4" /> }
                            ].map((s) => (
                                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                                    className="w-9 h-9 rounded-full border-2 border-[#1C1C1C]/15 flex items-center justify-center text-[#1C1C1C] hover:border-[#F7C429] hover:bg-[#F7C429] transition-all">
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Nav columns */}
                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-[var(--font-inter)] text-[10px] font-bold uppercase tracking-[0.18em] text-[#1C1C1C]/35 mb-4">Navigation</h4>
                            <ul className="space-y-2.5">
                                {[
                                    { name: 'Leistungen', href: '/#services' },
                                    { name: 'Über uns', href: '/#about' },
                                    { name: 'Ablauf', href: '/#process' },
                                    { name: 'FAQ', href: '/#faq' },
                                    { name: 'Kontakt', href: '/#contact' }
                                ].map((l) => (
                                    <li key={l.name}>
                                        <Link href={l.href} className="font-[var(--font-inter)] text-sm text-[#1C1C1C]/55 hover:text-[#1C1C1C] font-medium transition-colors">
                                            {l.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-[var(--font-inter)] text-[10px] font-bold uppercase tracking-[0.18em] text-[#1C1C1C]/35 mb-4">Regionen</h4>
                            <ul className="space-y-2.5">
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
                                        <Link href={r.href} className="font-[var(--font-inter)] text-sm text-[#1C1C1C]/55 hover:text-[#1C1C1C] font-medium transition-colors">
                                            {r.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-[var(--font-inter)] text-[10px] font-bold uppercase tracking-[0.18em] text-[#1C1C1C]/35 mb-4">Kontakt</h4>
                            <ul className="space-y-3">
                                <li>
                                    <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-start gap-2 text-[#1C1C1C]/55 hover:text-[#1C1C1C] transition-colors group">
                                        <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                                        <span className="font-[var(--font-inter)] text-sm font-medium break-words">{CONTACT_INFO.email}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-[#1C1C1C]/55 hover:text-[#1C1C1C] transition-colors">
                                        <Phone className="w-4 h-4 shrink-0" />
                                        <span className="font-[var(--font-inter)] text-sm font-medium">{CONTACT_INFO.phone}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.google.com/maps/search/?api=1&query=Am+Ziegelfeld+8,+3353+Seitenstetten"
                                        target="_blank" rel="noopener noreferrer"
                                        className="flex items-start gap-2 text-[#1C1C1C]/55 hover:text-[#1C1C1C] transition-colors">
                                        <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                                        <span className="font-[var(--font-inter)] text-sm font-medium leading-relaxed">Am Ziegelfeld 8<br />3353 Seitenstetten, AT</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* ── COPYRIGHT ── */}
                <div className="border-t border-[#1C1C1C]/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <span className="font-[var(--font-inter)] text-xs text-[#1C1C1C]/40">
                        © {year} BrainStorm KI Werbeagentur. Alle Rechte vorbehalten.
                    </span>
                    <div className="flex gap-5 font-[var(--font-inter)] text-xs text-[#1C1C1C]/40">
                        <a href="/impressum" className="hover:text-[#1C1C1C] transition-colors">Impressum</a>
                        <a href="/datenschutz" className="hover:text-[#1C1C1C] transition-colors">Datenschutz</a>
                        <a href="/bilder/AGB%20BrainStorm.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[#1C1C1C] transition-colors">AGB</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

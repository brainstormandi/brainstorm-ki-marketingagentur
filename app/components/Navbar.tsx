"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6 text-center">
                <div className={`mx-auto max-w-6xl backdrop-blur-xl bg-white/75 rounded-full border border-white/60 px-6 sm:px-8 h-16 sm:h-20 flex justify-between items-center transition-all duration-500 ${scrolled ? 'shadow-[0_8px_32px_rgba(0,0,0,0.08)] scale-[0.98] sm:scale-[0.99] translate-y-1' : 'shadow-sm'}`}>
                    <Link href="/" className="flex items-center gap-3 sm:gap-4 hover:opacity-80 transition-opacity cursor-pointer group">
                        <img
                            src="/bilder/logo.png"
                            alt="BrainStorm Logo"
                            className="h-9 sm:h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="flex flex-col leading-none text-left">
                            <span className="font-body font-black text-lg sm:text-xl tracking-wide text-[#0E172B] leading-none mb-1">
                                BrainStorm
                            </span>
                            <span className="font-body text-xs sm:text-sm font-medium tracking-[0.15em] text-[#0E172B]">KI Werbeagentur</span>
                        </div>
                    </Link>

                    <div className="hidden lg:flex items-center gap-8">
                        {[
                            { name: 'Leistungen', href: '/#services' },
                            { name: 'Erfolge', href: '/#success' },
                            { name: 'Ablauf', href: '/#process' },
                            { name: 'Wir', href: '/#philosophie' },
                            { name: 'FAQs', href: '/#faq' },
                            { name: 'Blog', href: '/#blog' },
                            { name: 'Kontakt', href: '/#contact' }
                        ].map((item, idx) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-[14px] font-semibold uppercase tracking-widest text-[#111827] hover:text-accent transition-all cursor-pointer relative group"
                            >
                                {item.name}
                            </a>
                        ))}
                        
                        <div className="w-[1px] h-6 bg-slate-200/80 mx-2"></div>

                        <a
                            href="/#website-check"
                            className="px-6 py-2.5 bg-slate-900 text-white text-[12px] rounded-full font-black uppercase tracking-widest hover:bg-accent hover:text-slate-900 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                        >
                            Gratis-Check
                        </a>
                    </div>

                    <button
                        className="lg:hidden p-2 text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all border border-slate-200 cursor-pointer"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Menü öffnen"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <Menu className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} aria-hidden="true"></div>
                    <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col p-8 animate-reveal-up border-l border-slate-100">
                        <div className="flex justify-between items-center mb-12">
                            <div className="flex items-center gap-4">
                                <img src="/bilder/logo.png" alt="BrainStorm Logo" className="h-8 w-auto object-contain" />
                                <div className="flex flex-col leading-none">
                                    <span className="font-sans font-black text-xl tracking-wide text-[#0E172B]">BrainStorm</span>
                                    <span className="text-[11px] font-semibold tracking-[0.12em] text-slate-500 mt-0.5">KI Werbeagentur</span>
                                </div>
                            </div>
                            <button
                                className="p-2 text-slate-900 bg-slate-50 rounded-xl border border-slate-100 cursor-pointer"
                                onClick={() => setIsMobileMenuOpen(false)}
                                aria-label="Menü schließen"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex flex-col gap-6">
                            {[
                                { name: 'Leistungen', href: '/#services' },
                                { name: 'Erfolge', href: '/#success' },
                                { name: 'Ablauf', href: '/#process' },
                                { name: 'Wir', href: '/#philosophie' },
                                { name: 'FAQs', href: '/#faq' },
                                { name: 'Blog', href: '/#blog' },
                                { name: 'Kontakt', href: '/#contact' }
                            ].map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-3xl font-bold text-slate-900 uppercase tracking-tighter hover:text-accent transition-colors cursor-pointer"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        <div className="mt-auto">
                            <a
                                href="/#website-check"
                                className="inline-flex items-center justify-center w-full py-5 bg-accent text-primary text-lg rounded-2xl font-black uppercase tracking-widest shadow-[0_12px_24px_rgba(247,196,41,0.4)] hover:bg-[#e5b510] transition-all active:scale-95 cursor-pointer"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Gratis-Check
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

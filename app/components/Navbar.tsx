"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6">
                <div className="bg-white/70 backdrop-blur-xl rounded-full border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] px-6 sm:px-8 h-16 sm:h-20 flex justify-between items-center transition-all duration-700 animate-reveal-down">
                    <Link href="/" className="flex items-center gap-3 sm:gap-4 hover:opacity-80 transition-opacity cursor-pointer group">
                        <img
                            src="/bilder/logo.png"
                            alt="BrainStorm Logo"
                            className="h-8 sm:h-9 w-auto object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                        />
                        <div className="flex flex-col leading-none">
                            <span className="font-sans font-black text-xl sm:text-2xl tracking-wide text-[#0E172B]">
                                BrainStorm
                            </span>
                            <span className="text-[12px] sm:text-[14px] font-medium tracking-[0.1em] text-[#0E172B] mt-1">KI Werbeagentur</span>
                        </div>
                    </Link>

                    <div className="hidden lg:flex items-center gap-8">
                        {[
                            { name: 'Leistungen', href: '/#services' },
                            { name: 'Ablauf', href: '/#process' },
                            { name: 'FAQs', href: '/#faq' },
                            { name: 'Blog', href: '/#blog' },
                            { name: 'Kontakt', href: '/#contact' }
                        ].map((item, idx) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-[14px] font-bold uppercase tracking-widest text-slate-600 hover:text-slate-900 transition-all cursor-pointer relative group animate-reveal-down"
                                style={{ animationDelay: `${(idx + 1) * 100 + 300}ms` }}
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                        <a
                            href="/#website-check"
                            className="ml-2 px-6 py-2.5 bg-slate-900 text-[14px] text-white rounded-full font-bold uppercase tracking-widest hover:bg-slate-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer animate-reveal-down"
                            style={{ animationDelay: '800ms' }}
                        >
                            Gratis-Check
                        </a>
                    </div>

                    <button
                        className="lg:hidden p-2 text-slate-900 bg-white/50 hover:bg-white/90 rounded-full transition-all border border-slate-200/50 shadow-sm cursor-pointer"
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
                    {/* Backdrop */}
                    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-md" onClick={() => setIsMobileMenuOpen(false)} aria-hidden="true"></div>

                    {/* Menu Content */}
                    <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col p-10 animate-reveal-up border-l border-slate-100">
                        <div className="flex justify-between items-center mb-16">
                            <div className="flex items-center gap-4">
                                <img
                                    src="/bilder/logo.png"
                                    alt="BrainStorm Logo"
                                    className="h-8 w-auto object-contain"
                                />
                                <div className="flex flex-col leading-none">
                                    <span className="font-sans font-black text-xl tracking-wide text-[#0E172B]">
                                        BrainStorm
                                    </span>
                                    <span className="text-[12px] font-medium tracking-[0.1em] text-[#0E172B] mt-1">KI Werbeagentur</span>
                                </div>
                            </div>
                            <button
                                className="p-3 text-slate-900 bg-slate-50 rounded-2xl border border-slate-100 cursor-pointer"
                                onClick={() => setIsMobileMenuOpen(false)}
                                aria-label="Menü schließen"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex flex-col gap-8">
                            {[
                                { name: 'Leistungen', href: '/#services' },
                                { name: 'Ablauf', href: '/#process' },
                                { name: 'FAQs', href: '/#faq' },
                                { name: 'Blog', href: '/#blog' },
                                { name: 'Kontakt', href: '/#contact' }
                            ].map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-2xl font-black text-slate-900 uppercase tracking-tighter hover:text-accent transition-colors cursor-pointer"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        <div className="mt-auto">
                            <a
                                href="/#website-check"
                                className="inline-flex items-center justify-center w-full py-6 bg-slate-900 text-white text-lg rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-slate-800 transition-all active:scale-95 cursor-pointer"
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

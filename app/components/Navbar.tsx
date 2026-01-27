"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mt-4">
                <div className="glass-morphism rounded-[2rem] border border-white/40 shadow-2xl px-8 h-24 flex justify-between items-center premium-shadow">
                    <Link href="/" className="flex items-center gap-5 hover:opacity-80 transition-opacity">
                        <img
                            src="/bilder/logo.png"
                            alt="BrainStorm Logo"
                            className="h-10 w-auto object-contain"
                        />
                        <div className="flex flex-col leading-none">
                            <span className="font-display font-black text-2xl sm:text-3xl tracking-tighter text-slate-900 uppercase">
                                BrainStorm
                            </span>
                            <span className="text-[10px] sm:text-[12px] font-black uppercase tracking-[0.2em] text-slate-500 mt-1">KI Werbeagentur</span>
                        </div>
                    </Link>

                    <div className="hidden lg:flex items-center gap-10">
                        <a href="/#services" className="text-base font-black uppercase tracking-widest text-slate-600 hover:text-primary transition-colors">Leistungen</a>
                        <a href="/#process" className="text-base font-black uppercase tracking-widest text-slate-600 hover:text-primary transition-colors">Ablauf</a>
                        <a href="/#faq" className="text-base font-black uppercase tracking-widest text-slate-600 hover:text-primary transition-colors">FAQs</a>
                        <a href="/#contact" className="text-base font-black uppercase tracking-widest text-slate-600 hover:text-primary transition-colors">Kontakt</a>
                        <a href="/#contact" className="px-8 py-4 bg-slate-900 text-sm text-white rounded-xl font-black uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl hover:scale-105 active:scale-95">Erstberatung</a>
                    </div>

                    <button
                        className="lg:hidden p-3 text-slate-900 bg-slate-50 rounded-2xl transition-all z-50 border border-slate-100 shadow-sm"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                    {/* Backdrop */}
                    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-md" onClick={() => setIsMobileMenuOpen(false)}></div>

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
                                    <span className="font-display font-black text-xl tracking-tighter text-slate-900 uppercase">
                                        BrainStorm
                                    </span>
                                </div>
                            </div>
                            <button
                                className="p-3 text-slate-900 bg-slate-50 rounded-2xl border border-slate-100"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex flex-col gap-8">
                            {[
                                { name: 'Leistungen', href: '/#services' },
                                { name: 'Ablauf', href: '/#process' },
                                { name: 'FAQs', href: '/#faq' },
                                { name: 'Kontakt', href: '/#contact' }
                            ].map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-2xl font-black text-slate-900 uppercase tracking-tighter hover:text-accent transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        <div className="mt-auto">
                            <a
                                href="/#contact"
                                className="inline-flex items-center justify-center w-full py-6 bg-slate-900 text-white text-lg rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-slate-800 transition-all active:scale-95"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Erstberatung
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface NavbarProps {
    theme?: 'light' | 'dark';
}

const Navbar = ({ theme = 'light' }: NavbarProps) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menuItems = [
        { name: 'Probleme', href: '/#probleme' },
        { name: 'Lösungen', href: '/#loesungen' },
        { name: 'Agentur', href: '/#agentur' },
        { name: 'Erfolgsgeschichten', href: '/#erfolge' },
        { name: 'Angebote', href: '/#angebote' },
        { name: 'Gratis-Check', href: '/#gratis-check' },
        { name: 'FAQ', href: '/#faq' },
        { name: 'Blog', href: '/#blog' }
    ];

    const isDark = theme === 'dark';

    return (
        <>
            {/* ── SLEEK EDITORIAL HEADER (Ally.co style) ── */}
            <header className={`relative w-full z-40 py-5 px-6 md:px-12 transition-colors ${
                isDark ? 'bg-[#1C1C1C] text-white' : 'bg-[#F5EFE6] text-[#1C1C1C]'
            }`}>
                <div className="w-full flex justify-between items-center">
                    
                    {/* Left: Brand logo & line graphic */}
                    {/* Left: Brand logo */}
                    <Link 
                        href="/" 
                        className="relative h-10 w-44 sm:w-56 lg:ml-16 xl:ml-24 group hover:opacity-90 transition-opacity cursor-pointer no-underline z-50"
                    >
                        <div className="absolute -top-1 sm:-top-2 left-0 h-28 w-52 sm:h-36 sm:w-64 shrink-0">
                            <Image 
                                src="/logo/logo.webp" 
                                alt="BrainStorm Webagentur - deine Webagentur & Werbeagentur in Niederösterreich" 
                                fill 
                                className="object-contain object-left" 
                                priority
                            />
                        </div>
                    </Link>

                    {/* Right: Navigation menu, CTA & Mobile Hamburger */}
                    <div className="flex items-center gap-4 lg:gap-8 xl:gap-10">
                        {/* Navigation menu */}
                        <nav className="hidden lg:flex gap-5 xl:gap-7 items-center">
                            {menuItems.map(item => (
                                <Link 
                                    key={item.name} 
                                    href={item.href} 
                                    className={`font-[var(--font-inter)] font-semibold text-[15px] xl:text-[17px] tracking-[0.08em] no-underline transition-colors py-1 cursor-pointer whitespace-nowrap`}
                                >
                                    <span className={isDark ? 'text-white hover:text-white/80' : 'text-[#1C1C1C] hover:text-[#1C1C1C]/70'}>
                                        {item.name}
                                    </span>
                                </Link>
                            ))}
                        </nav>

                        {/* Call to Action */}
                        <div className="hidden sm:flex items-center">
                            <Link 
                                href="/#kontakt" 
                                className="btn-primary py-2 px-6 text-[15px] xl:text-[17px] whitespace-nowrap"
                            >
                                Kontakt
                            </Link>
                        </div>

                        {/* Hamburger menu */}
                        <button 
                            onClick={() => setIsMobileMenuOpen(true)}
                            className={`lg:hidden p-2 rounded-full border border-[#1C1C1C]/15 hover:border-[#1C1C1C]/40 transition-all cursor-pointer`}
                            aria-label="Menü öffnen"
                        >
                            <Menu className="w-5 h-5 text-[#1C1C1C]" />
                        </button>
                    </div>
                </div>
                {/* Gradient divider line at the bottom */}
                <div className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r ${
                    isDark ? 'from-[#1C1C1C] to-white/10' : 'from-[#F5EFE5] to-[#1C1C1C]/10'
                }`} />
            </header>

            {/* ── MOBILE MENU DRAWER ── */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 animate-fade-in flex">
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-[#111827]/40 backdrop-blur-sm" 
                        onClick={() => setIsMobileMenuOpen(false)} 
                        aria-hidden="true"
                    />
                    
                    {/* Drawer Content */}
                    <div className="relative ml-auto w-full max-w-[380px] h-[100dvh] bg-[#F5EFE6] border-l border-[#1C1C1C]/10 flex flex-col p-5 sm:p-8 overflow-y-auto shadow-2xl justify-between">
                        
                        {/* Top Area: Logo and Close */}
                        <div className="flex justify-between items-center pb-3 sm:pb-4 border-b border-[#1C1C1C]/10 shrink-0">
                            <Link 
                                href="/"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative h-[68px] w-60 sm:h-20 sm:w-72 select-none shrink-0"
                            >
                                <Image 
                                    src="/logo/logo.webp" 
                                    alt="BrainStorm KI" 
                                    fill 
                                    className="object-contain object-left" 
                                    priority
                                />
                            </Link>
                            <button 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 sm:p-2.5 text-[#1C1C1C] rounded-full border border-[#1C1C1C]/15 hover:bg-[#F7C429] hover:border-[#F7C429] transition-all cursor-pointer shrink-0"
                                aria-label="Menü schließen"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Middle Area: Links list */}
                        <div className="flex flex-col gap-2 sm:gap-3 py-2 sm:py-4 my-auto">
                            {menuItems.map((item) => (
                                <Link 
                                    key={item.name} 
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="font-[var(--font-vollkorn)] font-semibold text-[22px] sm:text-2xl tracking-tight text-[#1C1C1C] hover:text-[#F7C429] hover:translate-x-1 transition-all cursor-pointer leading-tight"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link 
                                href="/#kontakt"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="font-[var(--font-vollkorn)] font-semibold text-[22px] sm:text-2xl tracking-tight text-[#1C1C1C] hover:text-[#F7C429] hover:translate-x-1 transition-all cursor-pointer leading-tight"
                            >
                                Kontakt
                            </Link>
                        </div>

                        {/* Contact Info Buttons (Phone & Email) - styled like desktop version, no icons */}
                        <div className="flex flex-col gap-2 sm:gap-2.5 pt-3 sm:pt-4 border-t border-[#1C1C1C]/10 font-[var(--font-inter)] shrink-0">
                            <a 
                                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} 
                                className="w-full py-2.5 sm:py-3 px-4 rounded-xl font-[var(--font-inter)] font-bold text-sm sm:text-base flex items-center justify-center bg-[#F7C429] text-[#1C1C1C] border-2 border-[#F7C429] hover:bg-[#1C1C1C] hover:text-[#F7C429] hover:border-[#1C1C1C] transition-all duration-200 shadow-sm cursor-pointer whitespace-nowrap"
                            >
                                <span>{CONTACT_INFO.phone}</span>
                            </a>
                            <a 
                                href={`mailto:${CONTACT_INFO.email}`} 
                                className="w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl font-[var(--font-inter)] font-bold text-[13px] sm:text-sm md:text-base flex items-center justify-center bg-[#1C1C1C] text-white border-2 border-[#1C1C1C] hover:bg-[#F7C429] hover:text-[#1C1C1C] hover:border-[#F7C429] transition-all duration-200 shadow-sm cursor-pointer whitespace-nowrap tracking-tight sm:tracking-normal"
                            >
                                <span>{CONTACT_INFO.email}</span>
                            </a>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;

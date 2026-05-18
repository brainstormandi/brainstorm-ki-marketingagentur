"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
    theme?: 'light' | 'dark';
}

const Navbar = ({ theme = 'light' }: NavbarProps) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menuItems = [
        { name: 'Herausforderungen', href: '/#spielregeln' },
        { name: 'Lösungen', href: '/#services' },
        { name: 'Dein Partner', href: '/#about' },
        { name: 'Erfolgsgeschichten', href: '/#success' },
        { name: 'Fahrplan', href: '/#process' },
        { name: 'Gratis Check', href: '/#website-check' },
        { name: 'Wissen', href: '/#blog' },
        { name: 'Erstgespräch', href: '/#contact' }
    ];

    const isDark = theme === 'dark';

    return (
        <>
            {/* ── SLEEK EDITORIAL TOP NAV ── */}
            <nav className="absolute top-0 left-0 right-0 z-40 py-8 sm:py-10 px-6 md:px-12 flex justify-between items-center select-none">
                {/* Left Side: Brand Link */}
                <Link 
                    href="/" 
                    className="flex items-center gap-3 sm:gap-4 group hover:opacity-80 transition-opacity cursor-pointer no-underline"
                >
                    <div className={`hidden sm:block w-[30px] h-[1px] transition-colors ${
                        isDark ? 'bg-white/30 group-hover:bg-[#F7C429]' : 'bg-gray-300 group-hover:bg-[#F7C429]'
                     }`} />
                    <span className={`font-[var(--font-inter),sans-serif] font-bold text-[13px] sm:text-[15px] tracking-[0.2em] sm:tracking-[0.25em] uppercase transition-colors ${
                        isDark ? 'text-white' : 'text-[#374151]'
                    }`}>
                        Brainstorm KI Werbeagentur
                    </span>
                </Link>

                {/* Right Side: Desktop Links */}
                <div className="hidden lg:flex gap-2 xl:gap-4 2xl:gap-5 items-center">
                    {menuItems.map(item => (
                        <Link 
                            key={item.name} 
                            href={item.href} 
                            className={`font-[var(--font-inter),sans-serif] font-semibold text-[10px] xl:text-[12px] 2xl:text-[13px] tracking-[0.05em] xl:tracking-[0.1em] 2xl:tracking-[0.2em] uppercase no-underline transition-colors cursor-pointer ${
                                isDark 
                                    ? 'text-white/90 hover:text-[#F7C429]' 
                                    : 'text-[#374151] hover:text-[#F7C429]'
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Trigger */}
                <button 
                    onClick={() => setIsMobileMenuOpen(true)}
                    className={`lg:hidden p-2 transition-colors focus:outline-none cursor-pointer rounded-lg ${
                        isDark ? 'text-white hover:text-[#F7C429]' : 'text-[#374151] hover:text-[#F7C429]'
                    }`}
                    aria-label="Menü öffnen"
                >
                    <Menu className="w-6 h-6" />
                </button>
            </nav>

            {/* ── RESPONSIVE MOBILE MENU DRAWER ── */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 animate-fade-in">
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-white/95 backdrop-blur-lg" 
                        onClick={() => setIsMobileMenuOpen(false)} 
                        aria-hidden="true"
                    />
                    
                    {/* Menu Content */}
                    <div className="fixed inset-0 flex flex-col p-8 sm:p-12 justify-center items-center">
                        {/* Close button */}
                        <button 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-8 right-8 p-3 text-gray-900 border border-gray-200 rounded-full hover:border-black hover:text-black transition-all cursor-pointer hover:scale-105 bg-white shadow-sm"
                            aria-label="Menü schließen"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        {/* Brand Top */}
                        <div className="absolute top-11 left-6 sm:left-10 flex items-center gap-3 select-none">
                            <div className="w-[25px] h-[1px] bg-gray-300" />
                            <span className="font-[var(--font-inter),sans-serif] font-bold text-[13px] tracking-[0.2em] uppercase text-[#374151]">
                                Brainstorm KI Werbeagentur
                            </span>
                        </div>

                        {/* Centered Links List */}
                        <div className="flex flex-col gap-6 sm:gap-8 items-center text-center max-w-md w-full">
                            {menuItems.map((item, idx) => (
                                <Link 
                                    key={item.name} 
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="font-[var(--font-playfair)] font-medium text-3xl sm:text-4xl tracking-tight uppercase text-gray-900 hover:text-[#F7C429] transition-all hover:scale-105 cursor-pointer"
                                    style={{ animationDelay: `${idx * 50}ms` }}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>


                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;

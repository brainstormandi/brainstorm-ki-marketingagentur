"use client";
import { PhoneCall } from 'lucide-react';
import React from 'react';

const StickyCTA = () => {
  return (
    <div className="fixed bottom-4 left-4 z-40 sm:hidden pointer-events-none flex">
      <a 
        href="/#contact" 
        className="pointer-events-auto flex items-center justify-center gap-2 w-max max-w-full bg-accent text-primary font-black py-4 px-5 rounded-[1.5rem] shadow-[0_15px_30px_-10px_rgba(247,196,41,0.5)] border border-white/40 active:scale-95 transition-transform"
      >
        <PhoneCall className="w-5 h-5 flex-shrink-0" />
        <span className="truncate tracking-tight">Kostenloses Erstgespräch</span>
      </a>
    </div>
  );
};
export default StickyCTA;

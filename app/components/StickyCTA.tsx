"use client";
import React, { useState, useEffect } from 'react';
import { PhoneCall } from 'lucide-react';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Show when the section is in view or has been scrolled past
      setIsVisible(entry.isIntersecting || entry.boundingClientRect.top < 0);
    }, { threshold: 0 });

    const target = document.getElementById('philosophie');
    if (target) {
      observer.observe(target);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`fixed bottom-4 left-4 z-40 sm:hidden pointer-events-none flex transition-all duration-700 ease-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
    }`}>
      <a 
        href="/#contact" 
        className="pointer-events-auto flex items-center justify-center gap-2 w-max max-w-full bg-white text-[#F7C429] border border-[#F7C429] font-bold py-4 px-6 rounded-full shadow-[0_4px_20px_rgba(247,196,41,0.3)] active:scale-95 transition-transform"
      >
        <PhoneCall className="w-5 h-5 flex-shrink-0" />
        <span className="truncate tracking-[0.1em] uppercase text-[11px]">Kostenloses Erstgespräch</span>
      </a>
    </div>
  );
};
export default StickyCTA;

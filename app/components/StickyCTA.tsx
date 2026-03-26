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
        className="pointer-events-auto flex items-center justify-center gap-2 w-max max-w-full bg-accent text-primary font-black py-4 px-5 rounded-[1.5rem] shadow-[0_15px_30px_-10px_rgba(247,196,41,0.5)] border border-white/40 active:scale-95 transition-transform"
      >
        <PhoneCall className="w-5 h-5 flex-shrink-0" />
        <span className="truncate tracking-tight">Kostenloses Erstgespräch</span>
      </a>
    </div>
  );
};
export default StickyCTA;

"use client";
import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, Loader2, ArrowUpRight } from 'lucide-react';

const LeadMagnet = () => {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetUrl: url, clientEmail: email }),
      });
      if (res.ok) {
        setSuccess(true);
        setUrl('');
        setEmail('');
      } else {
        alert('Ein Fehler ist aufgetreten. Bitte senden Sie uns eine klassische E-Mail.');
      }
    } catch {
      alert('Sende-Fehler. Bitte prüfen Sie Ihre Verbindung.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="website-check" className="scroll-mt-32 py-32 bg-white border-t border-gray-200 relative overflow-hidden">
      {/* Subtle yellow glow top-right */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#F7C429] rounded-full opacity-8 blur-[100px]" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#F7C429] rounded-full opacity-5 blur-[120px]" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center px-6 py-2 rounded-full bg-transparent text-gray-600 font-bold text-xs mb-6 sm:mb-8 uppercase tracking-widest border border-gray-200">
          Kostenloser Webseiten-Check
        </div>
        
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[var(--font-playfair)] font-medium text-gray-900 tracking-tight leading-[1.1] py-1 mb-6 uppercase">
          <span className="block">Verliert Ihre aktuelle Webseite</span>
          <span className="block text-transparent bg-clip-text pb-2" style={{backgroundImage: 'linear-gradient(180deg, #111827 0%, #374151 28%, #111827 48%, #4b5563 75%, #000000 100%)'}}>täglich Kunden?</span>
        </h2>
        
        <p className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto font-body">
          Nutzen Sie unseren kostenlosen Webseiten-Check. Wir senden Ihnen in 24 Stunden eine technische und verkaufspsychologische Analyse Ihrer aktuellen Seite und decken klare Conversion-Bremsen auf.
        </p>

        {success ? (
          <div className="max-w-xl mx-auto bg-emerald-50 text-emerald-900 p-8 rounded-2xl border border-emerald-200 mb-8 text-center">
             <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
             <h3 className="text-xl font-black mb-2 text-emerald-900">Anfrage erfolgreich!</h3>
             <p className="font-medium text-sm text-emerald-800">Wir haben Ihre Daten erhalten und melden uns in Kürze mit Ihrer Analyse.</p>
          </div>
        ) : (
          <form className="max-w-xl mx-auto bg-transparent backdrop-blur-md p-4 rounded-2xl border border-gray-200 flex flex-col gap-3 mb-8" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="url" 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Ihre Webseite (https://...)" 
                required
                className="flex-1 w-full bg-transparent rounded-xl text-gray-900 px-5 py-3.5 outline-none placeholder:text-gray-500 font-medium border border-gray-200 focus:border-[#F7C429] transition-colors text-sm font-body"
              />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ihre E-Mail für die Analyse" 
                required
                className="flex-1 w-full bg-transparent rounded-xl text-gray-900 px-5 py-3.5 outline-none placeholder:text-gray-500 font-medium border border-gray-200 focus:border-[#F7C429] transition-colors text-sm font-body"
              />
            </div>
            <button disabled={isSubmitting} type="submit" className="group flex items-center justify-center gap-4 w-full px-8 py-[22px] rounded-full bg-[#F7C429] text-black font-[var(--font-inter)] text-[14px] sm:text-[15px] font-bold tracking-[0.15em] uppercase shadow-[0_10px_30px_rgba(247,196,41,0.4)] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-black hover:text-[#F7C429] hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 cursor-pointer disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:bg-[#F7C429] disabled:hover:text-black">
              {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : (
                <>
                  <span className="flex flex-col sm:flex-row items-center justify-center text-center leading-snug sm:leading-normal">
                    <span className="flex flex-col sm:flex-row items-center justify-center">
                      <span className="block sm:inline">Kostenloser</span>
                      <span className="block sm:inline sm:ml-1.5">Webseiten-Check</span>
                    </span>
                    <span className="opacity-75 font-black text-[10px] sm:text-[11px] mt-1 sm:mt-0 sm:ml-2 tracking-[0.1em] shrink-0 block sm:inline-block">
                      (Wert 197 €)
                    </span>
                  </span>
                  <ArrowUpRight className="w-[20px] h-[20px] transition-transform duration-400 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" />
                </>
              )}
            </button>
          </form>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs text-gray-500 font-bold uppercase tracking-widest">
          <span className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-3.5 h-3.5 text-[#F7C429]" /> 100% kostenlos</span>
          <span className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-3.5 h-3.5 text-[#F7C429]" /> Detailversierte Analyse</span>
          <span className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-3.5 h-3.5 text-[#F7C429]" /> Keine versteckten Kosten</span>
        </div>
      </div>
    </section>
  );

};

export default LeadMagnet;

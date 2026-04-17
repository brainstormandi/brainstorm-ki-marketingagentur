"use client";
import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';

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
    <section id="website-check" className="scroll-mt-32 py-32 bg-primary relative overflow-hidden">
      {/* Subtle yellow glow top-right */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-accent rounded-full opacity-8 blur-[100px]" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent rounded-full opacity-5 blur-[120px]" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center px-6 py-2 rounded-full bg-white/5 text-white font-bold text-xs mb-6 sm:mb-8 uppercase tracking-widest border border-white/10">
          Kostenloser Webseiten-Check
        </div>
        
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight py-1 mb-6">
          <span className="font-sans block">Verliert Ihre aktuelle Webseite</span>
          <span className="font-sans block text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-100 to-slate-400 drop-shadow-sm pb-2">täglich Kunden?</span>
        </h2>
        
        <p className="text-lg sm:text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto font-body">
          Nutzen Sie unseren kostenlosen Webseiten-Check. Wir senden Ihnen in 24 Stunden eine technische und verkaufspsychologische Analyse Ihrer aktuellen Seite und decken klare Conversion-Bremsen auf.
        </p>

        {success ? (
          <div className="max-w-xl mx-auto bg-emerald-500/10 text-emerald-100 p-8 rounded-2xl border border-emerald-500/20 mb-8">
             <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
             <h3 className="text-xl font-black mb-2">Anfrage erfolgreich!</h3>
             <p className="font-medium text-sm">Wir haben Ihre Daten erhalten und melden uns in Kürze mit Ihrer Analyse.</p>
          </div>
        ) : (
          <form className="max-w-xl mx-auto bg-white/5 p-4 rounded-2xl border border-white/10 flex flex-col gap-3 mb-8" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="url" 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Ihre Webseite (https://...)" 
                required
                className="flex-1 w-full bg-white/8 rounded-xl text-white px-5 py-3.5 outline-none placeholder:text-slate-500 font-medium border border-white/10 focus:border-accent/50 transition-colors text-sm font-body"
              />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ihre E-Mail für die Analyse" 
                required
                className="flex-1 w-full bg-white/8 rounded-xl text-white px-5 py-3.5 outline-none placeholder:text-slate-500 font-medium border border-white/10 focus:border-accent/50 transition-colors text-sm font-body"
              />
            </div>
            <button disabled={isSubmitting} type="submit" className="w-full bg-accent text-primary font-black px-8 py-4 rounded-xl hover:bg-[#e5b510] transition-all flex items-center justify-center gap-2 group shadow-[0_12px_24px_rgba(247,196,41,0.25)] disabled:opacity-70 text-sm uppercase tracking-wider">
              {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                <>
                  Kostenlosen Check anfordern
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs text-slate-500 font-semibold uppercase tracking-widest">
          <span className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-3.5 h-3.5 text-accent" /> 100% kostenlos</span>
          <span className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-3.5 h-3.5 text-accent" /> Detailversierte Analyse</span>
          <span className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-3.5 h-3.5 text-accent" /> Keine versteckten Kosten</span>
        </div>
      </div>
    </section>
  );

};

export default LeadMagnet;

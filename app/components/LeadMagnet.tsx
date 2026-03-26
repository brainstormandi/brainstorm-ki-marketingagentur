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
    <section id="website-check" className="scroll-mt-32 py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent rounded-full opacity-10 blur-[120px]" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 text-white font-bold text-sm uppercase tracking-widest">
          <Mail className="w-4 h-4 text-accent" />
          Kostenloser Webseiten-Check
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-display font-black text-white mb-6">
          Verliert Ihre aktuelle Webseite täglich Kunden?
        </h2>
        
        <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
          Nutzen Sie unseren kostenlosen Webseiten-Check. Wir senden Ihnen in 24 Stunden eine technische und verkaufspsychologische Analyse Ihrer aktuellen Seite und decken klare Conversion-Bremsen auf.
        </p>

        {success ? (
          <div className="max-w-xl mx-auto bg-emerald-500/20 text-emerald-100 p-8 rounded-3xl border border-emerald-500/30 mb-8 backdrop-blur-md animate-in fade-in zoom-in">
             <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
             <h3 className="text-2xl font-bold mb-2">Anfrage erfolgreich!</h3>
             <p className="font-medium">Wir haben Ihre Daten erhalten und melden uns in Kürze mit Ihrer Analyse.</p>
          </div>
        ) : (
          <form className="max-w-xl mx-auto bg-white/5 p-4 rounded-3xl border border-white/10 flex flex-col gap-3 backdrop-blur-sm mb-8" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="url" 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Ihre Webseite (https://...)" 
                required
                className="flex-1 w-full bg-white/10 rounded-xl text-white px-6 py-4 outline-none placeholder:text-slate-400 font-medium border border-white/5 focus:border-accent/50 transition-colors"
              />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ihre E-Mail für die Analyse" 
                required
                className="flex-1 w-full bg-white/10 rounded-xl text-white px-6 py-4 outline-none placeholder:text-slate-400 font-medium border border-white/5 focus:border-accent/50 transition-colors"
              />
            </div>
            <button disabled={isSubmitting} type="submit" className="w-full bg-accent text-primary font-bold px-8 py-4 rounded-xl hover:bg-[#e5b510] transition-colors flex items-center justify-center gap-2 group shadow-[0_10px_20px_-10px_rgba(247,196,41,0.5)] disabled:opacity-70">
              {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                <>
                  Kostenlosen Check anfordern
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-slate-400 font-medium">
          <span className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-4 h-4 text-accent" /> 100% kostenlos</span>
          <span className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-4 h-4 text-accent" /> Detailversierte Analyse</span>
          <span className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-4 h-4 text-accent" /> Keine versteckten Kosten</span>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;

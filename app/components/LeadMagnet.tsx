"use client";
import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';

// ally.co: clean dark section for important CTA
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
            if (res.ok) { setSuccess(true); setUrl(''); setEmail(''); }
            else alert('Ein Fehler ist aufgetreten. Bitte sende uns eine klassische E-Mail.');
        } catch {
            alert('Sende-Fehler. Bitte prüfe deine Verbindung.');
        } finally { setIsSubmitting(false); }
    };

    return (
        <section id="website-check" className="scroll-mt-20 bg-[#1C1C1C] py-20 md:py-28 lg:py-0 lg:min-h-screen lg:flex lg:flex-col lg:justify-center">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    <div className="lg:col-span-6">
                        <span className="font-[var(--font-inter)] text-[11px] font-bold uppercase tracking-[0.18em] text-[#F7C429] mb-4 block">
                            Kostenloser Webseiten-Check
                        </span>
                        <h2
                            className="font-[var(--font-vollkorn)] font-semibold text-white leading-[1.1] mb-8"
                            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.75rem)' }}
                        >
                            Ist deine Webseite dein bester{' '}
                            <span className="text-underline-yellow">Verkäufer</span> – oder dein teuerster Fehler?
                        </h2>
                        <p className="font-[var(--font-inter)] text-white/50 text-base leading-relaxed mb-4">
                            Viele Betriebe kämpfen täglich härter als nötig, weil ihre Webseite im Hintergrund heimlich Kunden an die Konkurrenz verliert.
                        </p>
                        <p className="font-[var(--font-inter)] text-white/50 text-base leading-relaxed">
                            Wir analysieren deinen aktuellen Auftritt in 24 Stunden tiefgehend auf technische und verkaufspsychologische Hürden. Du erhältst klare Fakten – ohne Risiko, ohne Fachchinesisch.
                        </p>
                    </div>

                    <div className="lg:col-span-6 w-full">
                        {success ? (
                            <div className="border border-[#F7C429]/30 bg-[#F7C429]/10 p-10 text-center max-w-xl mx-auto rounded-2xl">
                                <CheckCircle2 className="w-10 h-10 text-[#F7C429] mx-auto mb-4" />
                                <h3 className="font-[var(--font-vollkorn)] text-xl font-semibold text-white mb-2">Anfrage erfolgreich!</h3>
                                <p className="font-[var(--font-inter)] text-white/60 text-sm">Wir haben deine Daten erhalten und melden uns in Kürze mit deiner Analyse.</p>
                            </div>
                        ) : (
                            <form className="bg-white/5 border border-white/10 p-5 sm:p-8 md:p-10 rounded-3xl" onSubmit={handleSubmit}>
                                <div className="space-y-4 mb-6">
                                    <input
                                        type="url" value={url} onChange={(e) => setUrl(e.target.value)}
                                        placeholder="Deine Webseite (https://...)" required
                                        className="w-full bg-white/5 border border-white/15 text-white px-5 py-4 outline-none placeholder:text-white/25 font-[var(--font-inter)] text-sm focus:border-[#F7C429] transition-colors rounded-xl"
                                    />
                                    <input
                                        type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Deine E-Mail für die Analyse" required
                                        className="w-full bg-white/5 border border-white/15 text-white px-5 py-4 outline-none placeholder:text-white/25 font-[var(--font-inter)] text-sm focus:border-[#F7C429] transition-colors rounded-xl"
                                    />
                                </div>
                                <button disabled={isSubmitting} type="submit" className="w-full btn-primary text-sm sm:text-base py-4 px-6 flex justify-center items-center gap-2 disabled:opacity-60 !whitespace-normal">
                                    {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : (
                                        <span className="flex items-center justify-center gap-2 flex-wrap text-center">
                                            <span className="text-center">Kostenloser Webseiten-Check anfragen</span> <ArrowRight className="w-4 h-4 shrink-0" />
                                        </span>
                                    )}
                                </button>
                                <div className="flex flex-col gap-3 mt-8 pt-6 border-t border-white/10">
                                    {['100% kostenlos', 'Analyse in 24 Stunden', 'Keine versteckten Kosten'].map((item) => (
                                        <span key={item} className="flex items-center gap-2 font-[var(--font-inter)] text-[11px] font-bold text-white/35 uppercase tracking-[0.12em]">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-[#F7C429]" /> {item}
                                        </span>
                                    ))}
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadMagnet;

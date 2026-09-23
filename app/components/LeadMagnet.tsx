"use client";
import React, { useState, useEffect } from 'react';
import { CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';

// ally.co: clean dark section for important CTA
const LeadMagnet = () => {
    const [url, setUrl] = useState('');
    const [email, setEmail] = useState('');
    // Honeypot fields (hidden from humans, filled by bots)
    const [honeypotFax, setHoneypotFax] = useState('');
    const [honeypotCheck, setHoneypotCheck] = useState('');
    const [loadedAt, setLoadedAt] = useState<number>(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        setLoadedAt(Date.now());
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');
        
        // Normalize URL if protocol is omitted by user
        const normalizedUrl = url.trim().startsWith('http://') || url.trim().startsWith('https://')
            ? url.trim()
            : `https://${url.trim()}`;

        try {
            const res = await fetch('/api/lead-magnet', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    targetUrl: normalizedUrl, 
                    clientEmail: email,
                    company_fax: honeypotFax,
                    hp_check: honeypotCheck,
                    loadedAt
                }),
            });
            const data = await res.json().catch(() => ({}));
            if (res.ok && data.success) { 
                setSuccess(true); 
                setUrl(''); 
                setEmail(''); 
            } else {
                setErrorMessage(data.error || 'Ein Fehler ist aufgetreten. Bitte prüfe deine Angaben.');
            }
        } catch {
            setErrorMessage('Verbindungsfehler. Bitte prüfe deine Internetverbindung.');
        } finally { 
            setIsSubmitting(false); 
        }
    };

    return (
        <section id="gratis-check" className="scroll-mt-20 bg-[#1C1C1C] py-24 md:py-32 lg:py-36 relative">
            <div id="website-check" className="sr-only" aria-hidden="true" />
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
                        <p className="font-[var(--font-inter)] text-white/70 text-base leading-relaxed mb-5">
                            Viele Betriebe kämpfen täglich härter als nötig, weil ihre Webseite im Hintergrund heimlich wertvolle Kunden und Anfragen verliert.
                        </p>
                        <p className="font-[var(--font-inter)] text-white/70 text-base leading-relaxed">
                            <strong className="text-white font-bold">Kein 50-seitiger technischer PDF-Müll:</strong> Du erhältst <strong className="text-white font-bold">3 konkrete Punkte</strong>, wo deine Seite heute Kunden verliert – und wie du das <strong className="text-white font-bold">in wenigen Tagen behebst</strong>.
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
                                {/* Anti-Spam Honeypots (100% invisible to humans, auto-filled by automated scrapers/bots) */}
                                <div style={{ position: 'absolute', opacity: 0, zIndex: -1, width: 0, height: 0, overflow: 'hidden', pointerEvents: 'none' }} aria-hidden="true">
                                    <label htmlFor="company_fax">Firmen-Fax (leer lassen)</label>
                                    <input
                                        id="company_fax"
                                        type="text"
                                        name="company_fax"
                                        tabIndex={-1}
                                        autoComplete="off"
                                        value={honeypotFax}
                                        onChange={(e) => setHoneypotFax(e.target.value)}
                                    />
                                    <label htmlFor="hp_check">Zusätzliche Prüfung (leer lassen)</label>
                                    <input
                                        id="hp_check"
                                        type="text"
                                        name="hp_check"
                                        tabIndex={-1}
                                        autoComplete="off"
                                        value={honeypotCheck}
                                        onChange={(e) => setHoneypotCheck(e.target.value)}
                                    />
                                </div>

                                <div className="space-y-4 mb-6">
                                    <input
                                        type="text" value={url} onChange={(e) => setUrl(e.target.value)}
                                        placeholder="Deine Webseite (z. B. www.meine-seite.at)" required
                                        className="w-full bg-white/5 border border-white/15 text-white px-5 py-4 outline-none placeholder:text-white/25 font-[var(--font-inter)] text-sm focus:border-[#F7C429] transition-colors rounded-xl"
                                    />
                                    <input
                                        type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Deine E-Mail für die Analyse" required
                                        className="w-full bg-white/5 border border-white/15 text-white px-5 py-4 outline-none placeholder:text-white/25 font-[var(--font-inter)] text-sm focus:border-[#F7C429] transition-colors rounded-xl"
                                    />
                                </div>

                                {errorMessage && (
                                    <div className="mb-6 p-3.5 bg-red-500/10 border border-red-500/30 rounded-xl text-red-300 text-xs sm:text-sm font-[var(--font-inter)] text-center">
                                        {errorMessage}
                                    </div>
                                )}
                                <button disabled={isSubmitting} type="submit" className="w-full btn-primary text-sm sm:text-base py-4 px-6 flex justify-center items-center gap-2 disabled:opacity-60 !whitespace-normal sm:!whitespace-nowrap">
                                    {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : (
                                        <span className="flex items-center justify-center gap-2 flex-wrap sm:flex-nowrap text-center">
                                            <span className="text-center">Kostenlosen Webseiten-Check sichern</span> <ArrowRight className="w-4 h-4 shrink-0" />
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

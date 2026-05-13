"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ImpressumPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="pt-40 pb-20">
                <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">
                    <div className="mb-12">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#F7C429] transition-colors font-bold uppercase tracking-widest text-sm"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Zurück zur Startseite
                        </Link>
                    </div>

                    <header className="mb-16">
                        <div className="inline-flex items-center px-6 py-2 rounded-full bg-transparent text-gray-600 font-bold text-xs mb-8 uppercase tracking-widest border border-gray-200">
                            Rechtliches
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-[var(--font-playfair)] font-medium text-gray-900 mb-4 uppercase tracking-tight">
                            Impressum
                        </h1>
                        <p className="text-xl text-gray-500 font-body">
                            Rechtliche Informationen & Kontakt
                        </p>
                    </header>

                    <div className="space-y-16">
                        {/* Kontakt Sektion */}
                        <section className="premium-card p-8 sm:p-12">
                            <h2 className="text-2xl font-sans font-bold text-slate-900 mb-8">Kontakt</h2>
                            <div className="grid sm:grid-cols-2 gap-10">
                                <div>
                                    <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Unternehmen</h3>
                                    <p className="text-lg text-slate-700 leading-relaxed">
                                        BrainStorm Werbeagentur / Webagentur<br />
                                        Am Ziegelfeld 8<br />
                                        3333 Seitenstetten<br />
                                        Bezirk Amstetten in Niederösterreich
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Direktkontakt</h3>
                                    <p className="text-lg text-slate-700 leading-relaxed">
                                        E-Mail: <a href="mailto:info@brainstorm-werbeagentur.at" className="text-primary font-bold hover:underline">info@brainstorm-werbeagentur.at</a><br />
                                        Tel: <a href="tel:+436605203171" className="text-primary font-bold hover:underline">+43 (0) 660 520 31 71</a>
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Rechtliche Hinweise */}
                        <section className="space-y-12">
                            <div>
                                <h2 className="text-xl font-sans font-bold text-slate-900 mb-4">Haftungsausschluss</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Die bereitgestellten Informationen auf dieser Website wurden sorgfältig geprüft und werden regelmäßig aktualisiert. Jedoch kann keine Garantie dafür übernommen werden, dass alle Angaben zu jeder Zeit vollständig, richtig und in letzter Aktualität dargestellt sind. Alle Angaben können ohne Ankündigung ergänzt, entfernt oder geändert werden.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-sans font-bold text-slate-900 mb-4">Hinweis zum Gleichbehandlungsgesetz</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Aus Gründen der leichteren Lesbarkeit wird auf dieser Website die geschlechtsspezifische Differenzierung, wie z.B. TeilnehmerInnen, nicht durchgehend berücksichtigt. Entsprechende Begriffe gelten im Sinne der Gleichbehandlung für beide Geschlechter.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-sans font-bold text-slate-900 mb-4">Copyright – Hinweis</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Inhalt, Gestaltung, Texte und Bildmaterial dieser Website unterliegen dem Copyright. Reproduktion aller Inhalte, auch auszugsweise, ausschließlich nur mit formeller Zustimmung durch den Websitebetreiber.
                                    <br /><br />
                                    Bildnachweis: BrainStorm Werbeagentur / Webagentur
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-sans font-bold text-slate-900 mb-4">Rechtlicher Hinweis zur Streitbeilegung</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Die EU hat ein Online-Verfahren zur Beilegung von Streitigkeiten zwischen Unternehmern und Verbrauchern geschaffen. Informationen dazu finden Sie unter <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">https://ec.europa.eu/consumers/odr/</a>.
                                    <br /><br />
                                    Sinzinger Schilfdachdeckungen beteiligt sich nicht an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle.
                                </p>
                            </div>
                        </section>

                        <section className="pt-12 border-t border-slate-100">
                            <p className="text-sm text-slate-400 italic">
                                Webseite Werbeagentur Homepage Landingpage Social Media Linz Wien Amstetten
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

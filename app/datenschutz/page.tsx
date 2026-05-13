"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DatenschutzPage() {
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
                            Datenschutz&shy;erklärung
                        </h1>
                        <p className="text-xl text-gray-500 font-body">
                            Informationen über die Verarbeitung Ihrer personenbezogenen Daten
                        </p>
                    </header>

                    <div className="prose prose-slate max-w-none space-y-12 text-slate-600 leading-relaxed">
                        <section>
                            <p>
                                Wir freuen uns sehr über Ihr Interesse an unserer Webseite. Datenschutz hat einen besonders hohen Stellenwert für BrainStorm Werbeagentur. Eine Nutzung der Internetseiten ist grundsätzlich ohne jede Angabe personenbezogener Daten möglich. Sofern eine betroffene Person besondere Services unseres Vereins über unsere Internetseite in Anspruch nehmen möchte, könnte jedoch eine Verarbeitung personenbezogener Daten erforderlich werden. Ist die Verarbeitung personenbezogener Daten erforderlich und besteht für eine solche Verarbeitung keine gesetzliche Grundlage, holen wir generell eine Einwilligung der betroffenen Person ein.
                            </p>
                            <p className="mt-4">
                                Die Verarbeitung personenbezogener Daten, beispielsweise des Namens, der Anschrift, E-Mail-Adresse oder Telefonnummer einer betroffenen Person, erfolgt stets im Einklang mit der Datenschutz-Grundverordnung und in Übereinstimmung mit den für BrainStorm Werbeagentur geltenden landesspezifischen Datenschutzbestimmungen. Mittels dieser Datenschutzerklärung möchte unser Verein die Öffentlichkeit über Art, Umfang und Zweck der von uns erhobenen, genutzten und verarbeiteten personenbezogenen Daten informieren. Ferner werden betroffene Personen mittels dieser Datenschutzerklärung über die ihnen zustehenden Rechte aufgeklärt.
                            </p>
                            <p className="mt-4">
                                BrainStorm Werbeagentur hat als für die Verarbeitung Verantwortlicher zahlreiche technische und organisatorische Maßnahmen umgesetzt, um einen möglichst lückenlosen Schutz der über diese Internetseite verarbeiteten personenbezogenen Daten sicherzustellen. Dennoch können Internetbasierte Datenübertragungen grundsätzlich Sicherheitslücken aufweisen, sodass ein absoluter Schutz nicht gewährleistet werden kann. Aus diesem Grund steht es jeder betroffenen Person frei, personenbezogene Daten auch auf alternativen Wegen, beispielsweise telefonisch, an uns zu übermitteln.
                            </p>
                        </section>

                        <section className="premium-card p-8 sm:p-12 not-prose">
                            <h2 className="text-2xl font-sans font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">Verantwortlicher</h2>
                            <div className="grid sm:grid-cols-2 gap-10">
                                <div>
                                    <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Anschrift</h3>
                                    <p className="text-lg text-slate-700 leading-relaxed font-medium">
                                        BrainStorm Werbeagentur<br />
                                        Am Ziegelfeld 8<br />
                                        3353 Seitenstetten
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Kontakt</h3>
                                    <p className="text-lg text-slate-700 leading-relaxed">
                                        E-Mail: <a href="mailto:info@brainstorm-werbeagentur.at" className="text-primary font-bold hover:underline">info@brainstorm-werbeagentur.at</a><br />
                                        Tel: <a href="tel:+436605203171" className="text-primary font-bold hover:underline">0660/5203171</a>
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-sans font-bold text-slate-900 mb-6">1. Begriffsbestimmungen</h2>
                            <p className="mb-6">Die Datenschutzerklärung der "BrainStorm Werbeagentur" beruht auf den Begrifflichkeiten, die durch den Europäischen Richtlinien- und Verordnungsgeber beim Erlass der Datenschutz-Grundverordnung (DS-GVO) verwendet wurden. Wir verwenden unter anderem die folgenden Begriffe:</p>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">a) Personenbezogene Daten</h3>
                                    <p>Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">b) Betroffene Person</h3>
                                    <p>Jede identifizierte oder identifizierbare natürliche Person, deren personenbezogene Daten verarbeitet werden.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">c) Verarbeitung</h3>
                                    <p>Jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang im Zusammenhang mit personenbezogenen Daten.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">d) Einwilligung</h3>
                                    <p>Jede freiwillig für den bestimmten Fall in informierter Weise und unmissverständlich abgegebene Willensbekundung.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-sans font-bold text-slate-900 mb-6">2. Cookies</h2>
                            <p>
                                Die Internetseiten der "BrainStorm Werbeagentur" verwenden Cookies. Cookies sind Textdateien, welche über einen Internetbrowser auf einem Computersystem abgelegt und gespeichert werden. Durch den Einsatz von Cookies kann BrainStorm Werbeagentur den Nutzern dieser Internetseite nutzerfreundlichere Services bereitstellen.
                            </p>
                            <p className="mt-4">
                                Die betroffene Person kann die Setzung von Cookies durch unsere Internetseite jederzeit mittels einer entsprechenden Einstellung des genutzten Internetbrowsers verhindern und damit der Setzung von Cookies dauerhaft widersprechen.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-sans font-bold text-slate-900 mb-6">3. Erfassung von allgemeinen Daten und Informationen</h2>
                            <p>
                                Unsere Internetseite erfasst mit jedem Aufruf eine Reihe von allgemeinen Daten und Informationen, die in den Logfiles des Servers gespeichert werden. Erfasst werden können Browsertypen, Betriebssystem, IP-Adresse, Datum und Uhrzeit des Zugriffs sowie sonstige ähnliche Daten zur Gefahrenabwehr im Falle von Angriffen.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-sans font-bold text-slate-900 mb-6">4. Kontaktmöglichkeit</h2>
                            <p>
                                Sofern eine betroffene Person per E-Mail oder über ein Kontaktformular den Kontakt mit uns aufnimmt, werden die übermittelten personenbezogenen Daten automatisch gespeichert. Diese Daten werden für Zwecke der Bearbeitung oder der Kontaktaufnahme gespeichert. Es erfolgt keine Weitergabe dieser Daten an Dritte.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-sans font-bold text-slate-900 mb-6">5. Rechte der betroffenen Person</h2>
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                    <h3 className="font-bold text-slate-900 mb-2">Recht auf Auskunft</h3>
                                    <p className="text-sm italic">Sie haben das Recht, jederzeit unentgeltliche Auskunft über Ihre gespeicherten Daten zu erhalten.</p>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                    <h3 className="font-bold text-slate-900 mb-2">Recht auf Berichtigung</h3>
                                    <p className="text-sm italic">Sie können die unverzügliche Berichtigung unrichtiger Daten verlangen.</p>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                    <h3 className="font-bold text-slate-900 mb-2">Recht auf Löschung</h3>
                                    <p className="text-sm italic">Sie haben das Recht auf Löschung Ihrer Daten (Recht auf Vergessenwerden).</p>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                    <h3 className="font-bold text-slate-900 mb-2">Recht auf Widerspruch</h3>
                                    <p className="text-sm italic">Sie können jederzeit gegen die Verarbeitung Widerspruch einlegen.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-sans font-bold text-slate-900 mb-6">6. Analyse-Tools & Drittanbieter</h2>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Google Analytics</h3>
                                    <p className="text-sm">Wir nutzen Google Analytics (mit Anonymisierungsfunktion) zur Analyse der Besucherströme. Betreibergesellschaft ist Google Inc., USA. Sie können die Erfassung durch Installation eines Browser-Add-Ons verhindern.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Google AdWords</h3>
                                    <p className="text-sm">Wir setzen Google AdWords zur Bewerbung unserer Seite ein. Dabei werden Conversion-Cookies verwendet, die nach 30 Tagen verfallen.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Facebook</h3>
                                    <p className="text-sm">Auf dieser Seite sind Komponenten von Facebook integriert. Durch den Aufruf von Seiten mit Facebook-Plugins kann Facebook Informationen über Ihren Besuch erhalten.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Weitere Dienste</h3>
                                    <p className="text-sm">Wir setzen zur Optimierung unserer Services Dienste wie Agendize (Terminvereinbarung), Wipe Analytics (Web-Analyse) sowie golocal/Meinungsmeister (Reputations-Widget) ein.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

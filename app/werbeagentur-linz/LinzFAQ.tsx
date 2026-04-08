"use client";
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const LINZ_FAQS = [
  {
    question: "Warum BrainStorm KI statt einer lokalen Linzer Werbeagentur?",
    answer: "In Linz gibt es viele klassische Agenturen. Was uns unterscheidet, ist die konsequente Einbindung von künstlicher Intelligenz in den Webdesign-Prozess. Dadurch sind wir nicht nur schneller, sondern bauen Homepages, die bei Google extrem gut ranken und durch konvertierungsoptimerte Texte mehr Anfragen generieren als klassische Websites."
  },
  {
    question: "Wo liegt der Schwerpunkt Ihrer Webprojekte im Raum Linz?",
    answer: "Wir betreuen vom hochspezialisierten KMU in der Linzer Industriezeile bis hin zum modernen Dienstleister in Urfahr. Jeder Betrieb braucht heute eine digitale Infrastruktur, die Leads qualifiziert und Mitarbeiter anzieht. Genau das bauen wir."
  },
  {
    question: "Bieten Sie auch regelmäßige Vor-Ort-Meetings im Zentralraum OÖ?",
    answer: "Ja. Dank unserer Nähe (aus dem Mostviertel via A1) sind wir rasch in Linz. Viele unserer Kunden schätzen die Kombination aus effizienten Video-Calls für das Tagesgeschäft und strategischen, tiefgreifenden Terminen direkt an deren Firmenstandort."
  },
  {
    question: "Was bringt mir eine KI-Agentur bei der Suche nach Fachkräften in Linz?",
    answer: "Der Fachkräftemangel in Linz ist massiv. Wir konzipieren dezidierte Recruiting-Funnel und Karriere-Websites. Durch psychologisch fundiertes Copwriting und moderne Bewerbungsprozesse (z.B. One-Click-Bewerber-Bots) holen wir Ihre Traumkandidaten direkt auf Ihr Smartphone."
  }
];

const LinzFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="scroll-mt-32 py-24 sm:py-32 bg-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-50 text-slate-800 font-bold text-sm uppercase tracking-widest mb-6 border border-slate-100">
                        <HelpCircle className="w-4 h-4 text-accent" />
                        Ihr Vorsprung in OÖ
                    </div>
                    <h2 className="text-4xl sm:text-6xl font-display font-black text-slate-900 mb-6 tracking-tight leading-[1]">
                        Häufige Fragen <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#e5b510]">für den Linzer Markt.</span>
                    </h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        Wie wir Linzer Unternehmen digital messbar erfolgreicher machen.
                    </p>
                </ScrollReveal>

                <div className="space-y-2">
                    {LINZ_FAQS.map((faq, index) => (
                        <ScrollReveal key={index} animation="reveal-up" delay={index * 50}>
                            <div className="group border-b border-slate-200/60 transition-colors hover:border-slate-300">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full py-6 sm:py-8 flex items-start justify-between gap-6 text-left cursor-pointer focus:outline-none"
                                >
                                    <h4 className={`font-display font-bold text-xl sm:text-2xl tracking-tight leading-snug transition-colors duration-300 ${openIndex === index ? 'text-accent' : 'text-slate-900 group-hover:text-slate-700'}`}>
                                        {faq.question}
                                    </h4>
                                    <div className={`shrink-0 flex items-center justify-center mt-1 transition-transform duration-500 ${openIndex === index ? 'rotate-180 text-accent' : 'text-slate-400 group-hover:text-slate-600'}`}>
                                        <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2} />
                                    </div>
                                </button>
                                <div className={`grid transition-all duration-500 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 mb-6' : 'grid-rows-[0fr] opacity-0 mb-0'}`}>
                                    <div className="overflow-hidden">
                                        <div className="text-slate-600 leading-relaxed text-lg pr-4 sm:pr-14 whitespace-pre-line pb-2">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LinzFAQ;

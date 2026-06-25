"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { ArrowRight } from 'lucide-react';

// ally.co Section 4: "We believe making accessibility simple..." — BRIGHT YELLOW SECTION
const Founder = () => {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Andi Sturm",
        "jobTitle": "Gründer & Visionär",
        "worksFor": {
            "@type": "Organization",
            "name": "BrainStorm KI Werbeagentur"
        },
        "sameAs": ["https://www.linkedin.com/in/brainstorm-andi/"],
        "knowsAbout": ["Generative Engine Optimization (GEO)", "Web Development", "Digital Marketing", "Automation", "SEO Agentur Niederösterreich", "Werbeagentur Website", "Website Werbeagentur", "Suchmaschinenoptimierung Niederösterreich", "Webagentur"]
    };

    return (
        <section id="about" className="scroll-mt-20 bg-[#F7C429] text-[#1C1C1C] lg:min-h-screen lg:flex lg:flex-col lg:justify-between pb-0">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

            {/* ── TOP: BIG BELIEF STATEMENT ── */}
            <div className="max-w-6xl mx-auto px-6 md:px-12 pt-20 lg:pt-28 pb-12">
                <ScrollReveal animation="reveal-up">
                    <h2
                        className="font-[var(--font-vollkorn)] font-semibold text-[#1C1C1C] leading-[1.1] max-w-4xl"
                        style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
                    >
                        KI ist das Werkzeug,<br />
                        <span className="italic font-normal text-[#1C1C1C]/60">Marketing bleibt unser Handwerk.</span>
                    </h2>
                </ScrollReveal>
            </div>

            {/* ── BOTTOM: FOUNDER PHOTO + BIO (photo aligned at absolute bottom) ── */}
            <div className="max-w-6xl mx-auto px-6 md:px-12 pb-0">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">

                    {/* Photo - self-end and pb-0 makes it align with the bottom margin of the section */}
                    <ScrollReveal animation="reveal-right" className="md:col-span-5 self-end">
                        <div className="relative aspect-[3/4] overflow-hidden rounded-t-2xl">
                            <Image
                                src="/bilder/andi-sturm.png"
                                alt="Andi Sturm – Gründer BrainStorm KI Werbeagentur"
                                fill
                                className="object-cover object-top"
                                priority
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                    </ScrollReveal>

                    {/* Bio column - elements stacked vertically (untereinander) */}
                    <div className="md:col-span-6 md:col-start-7 flex flex-col gap-6 pb-16 md:pb-24">
                        <ScrollReveal animation="reveal-left" delay={100} className="flex flex-col gap-6">
                            <div>
                                <h3 className="font-[var(--font-vollkorn)] text-xl font-semibold text-[#1C1C1C] mb-1">
                                    Andi Sturm
                                </h3>
                                <p className="font-[var(--font-inter)] text-[10px] font-bold uppercase tracking-[0.18em] text-[#1C1C1C]/50 mb-5">
                                    Gründer &amp; Visionär
                                </p>
                                <p className="font-[var(--font-inter)] text-[#1C1C1C] text-base leading-relaxed mb-6">
                                    Hallo, ich bin Andi Sturm. Seit über 32 Jahren begleite ich Betriebe in Österreich dabei, sichtbarer und erfolgreicher zu werden.
                                </p>
                                <p className="font-[var(--font-inter)] text-[#1C1C1C] text-base leading-relaxed mb-8">
                                    Künstliche Intelligenz wirkt oft komplex oder gar bedrohlich. Doch du brauchst absolut kein technisches Vorwissen. Mein Team und ich übersetzen diese komplexe Technologie für dich in einfache, reibungslose Abläufe. Ich nenne das: <strong className="font-extrabold text-[#1C1C1C]">KI mit Handschlagqualität</strong>.
                                </p>
                            </div>
                            <Link href="/#contact" className="btn-dark text-[15px] xl:text-[17px] py-2.5 px-6 w-max">
                                Kontakt aufnehmen <ArrowRight className="w-4 h-4" />
                            </Link>
                        </ScrollReveal>

                        <ScrollReveal animation="reveal-left" delay={200}>
                            <div className="border-l-2 border-[#1C1C1C]/20 pl-6 py-2 mt-8">
                                <p className="font-[var(--font-vollkorn)] italic text-[#1C1C1C] text-xl leading-relaxed">
                                    „Sichtbarkeit schafft Erfolg. Aber nur Relevanz schafft Vertrauen.“
                                </p>
                                <span className="font-[var(--font-inter)] text-xs font-bold uppercase tracking-widest text-[#1C1C1C]/60 mt-3 block">
                                    — Andi Sturm
                                </span>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founder;

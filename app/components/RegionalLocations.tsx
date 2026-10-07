"use client";
import React from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight, Building, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const REGIONS = [
  {
    city: "Amstetten & Mostviertel",
    href: "/werbeagentur-amstetten",
    title: "Werbeagentur Amstetten",
    desc: "Moderne Webseiten, High-End Webdesign & Social Recruiting für KMUs und Handwerk im Bezirk Amstetten.",
    isPrimary: true,
    tag: "Vor-Ort-Service"
  },
  {
    city: "Steyr & Ennstal",
    href: "/werbeagentur-steyr",
    title: "Werbeagentur Steyr",
    desc: "Verkaufsstarke Firmen-Homepages & KI-Marketing für erfolgreiche Betriebe im Raum Steyr und Ennstal.",
    tag: "Region Steyr"
  },
  {
    city: "Linz & Zentralraum OÖ",
    href: "/werbeagentur-linz",
    title: "Werbeagentur Linz",
    desc: "Sprint-Webseiten in 7 Tagen, SEO Platz 1 & Lead-Automatisierung für Unternehmen im Großraum Linz.",
    tag: "Zentralraum OÖ"
  },
  {
    city: "St. Pölten & NÖ Mitte",
    href: "/werbeagentur-st-poelten",
    title: "Werbeagentur St. Pölten",
    desc: "Digitale Vertriebsmaschinen, barrierefreie Webauftritte und Mitarbeitergewinnung in der Landeshauptstadt.",
    tag: "NÖ Mitte"
  },
  {
    city: "Perg & Machland",
    href: "/werbeagentur-perg",
    title: "Werbeagentur Perg",
    desc: "Maßgeschneiderte Homepages und regionale Sichtbarkeit bei Google für Gewerbe und Mittelstand.",
    tag: "Machland"
  },
  {
    city: "Wien & Umgebung",
    href: "/werbeagentur-wien",
    title: "Werbeagentur Wien",
    desc: "High-Performance Webentwicklung, GEO-Optimierung für KI-Assistenten und strategisches Marketing.",
    tag: "Metropolregion"
  }
];

export default function RegionalLocations() {
  return (
    <section id="standorte" className="scroll-mt-20 py-20 md:py-28 bg-[#EDE7DB] border-y border-[#1C1C1C]/10 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
          <ScrollReveal animation="reveal-right" className="lg:col-span-7">
            <span className="font-[var(--font-inter)] text-[11px] font-bold uppercase tracking-[0.18em] text-[#1C1C1C]/45 mb-4 inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#F7C429]" />
              Regionale Nähe &amp; Handschlagqualität
            </span>
            <h2
              className="font-[var(--font-vollkorn)] font-bold text-[#1C1C1C] leading-tight"
              style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)' }}
            >
              Deine Werbeagentur vor Ort – <br className="hidden sm:block" />
              <span className="text-[#1C1C1C]/60 italic font-normal">persönlich im Mostviertel &amp; darüber hinaus.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="reveal-left" delay={100} className="lg:col-span-5">
            <p className="font-[var(--font-inter)] text-[#1C1C1C]/65 text-base leading-relaxed">
              Wir beraten dich persönlich bei dir vor Ort im Betrieb oder flexibel per Video-Call. Wähle deine Region für maßgeschneiderte Lösungen und lokale Google-Platzierungen:
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REGIONS.map((region, idx) => (
            <ScrollReveal key={region.href} animation="reveal-up" delay={idx * 40}>
              <Link
                href={region.href}
                className={`group block p-6 rounded-2xl border transition-all duration-300 no-underline h-full flex flex-col justify-between ${
                  region.isPrimary
                    ? 'bg-white border-[#F7C429]/60 shadow-md ring-2 ring-[#F7C429]/20 hover:border-[#F7C429] hover:shadow-lg'
                    : 'bg-white/80 border-[#1C1C1C]/10 hover:bg-white hover:border-[#1C1C1C]/25 hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#1C1C1C]/50 bg-[#F5EFE6] px-2.5 py-1 rounded-md">
                      {region.tag}
                    </span>
                    {region.isPrimary && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#1C1C1C] bg-[#F7C429] px-2.5 py-1 rounded-md">
                        <Sparkles className="w-3 h-3" /> Fokus-Standort
                      </span>
                    )}
                  </div>
                  <h3 className="font-[var(--font-vollkorn)] font-bold text-xl text-[#1C1C1C] group-hover:text-[#F7C429] transition-colors mb-2">
                    {region.title}
                  </h3>
                  <p className="font-[var(--font-inter)] text-[#1C1C1C]/60 text-sm leading-relaxed mb-4">
                    {region.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#1C1C1C]/5 flex items-center justify-between text-xs font-bold text-[#1C1C1C] group-hover:text-[#F7C429] transition-colors">
                  <span>Webseite &amp; Leistungen ansehen</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

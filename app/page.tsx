"use client";
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { GOOGLE_REVIEW_LINK } from './constants';
import { ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChallengeSection from './components/ChallengeSection';
import IndustryMarquee from './components/IndustryMarquee';
import Services from './components/Services';
import Founder from './components/Founder';
import Process from './components/Process';
import LeadMagnet from './components/LeadMagnet';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

const AIAssistant = dynamic(() => import('./components/AIAssistant'), { ssr: false });
const TestimonialSlider = dynamic(() => import('./components/TestimonialSlider'), { ssr: false });
const FAQ = dynamic(() => import('./components/FAQ'), { ssr: false });
const Blog = dynamic(() => import('./components/Blog'), { ssr: false });
const Contact = dynamic(() => import('./components/Contact'), { ssr: false });

const customerFaces = [
  "/bilder/testimonial-salzbug.png",
  "/bilder/testimonial-linz.jpg",
  "/bilder/testimonial-wien.jpg",
  "/bilder/testimonial-steyr.jpg",
  "/bilder/testimonial-amstetten.jpg",
  "/bilder/testimonial-perg.jpg"
];

export default function Home() {
  return (
    <div className="min-h-screen relative bg-[#F5EFE6]">
      <Navbar />
      <main>
        <Hero />
        <ChallengeSection />

        <Services />
        <Founder />

        {/* ── ERFOLGE SECTION (ally: "Trusted by Industry Leaders") ── */}
        <section id="success" className="scroll-mt-20 bg-[#F5EFE6] pt-20 md:pt-28 pb-10 md:pb-14">
          <div className="max-w-6xl mx-auto px-6 md:px-12">

            {/* Header row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
              <ScrollReveal animation="reveal-right" className="lg:col-span-6">
                <span className="font-[var(--font-inter)] text-[11px] font-bold uppercase tracking-[0.18em] text-[#1C1C1C]/40 mb-4 block">
                  Erfolgsgeschichten
                </span>
                <h2
                  className="font-[var(--font-vollkorn)] font-semibold text-[#1C1C1C] leading-tight"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
                >
                  Reale Projekte.{" "}
                  <span className="font-[var(--font-vollkorn)] italic font-normal text-[#1C1C1C]/50">
                    Echte Ergebnisse.
                  </span>
                </h2>
              </ScrollReveal>
              <ScrollReveal animation="reveal-left" delay={100} className="lg:col-span-6 flex flex-col justify-end gap-6">
                <p className="font-[var(--font-inter)] text-[#1C1C1C]/55 text-base leading-relaxed">
                  Über 50 kleine und mittlere Betriebe haben sich in den letzten 12 Monaten mit uns an die Spitze gesetzt.
                </p>

                {/* Testimonial faces + CTA */}
                <div className="flex flex-wrap items-center gap-5">
                  <div className="flex -space-x-3" aria-hidden="true">
                    {customerFaces.map((src, i) => (
                      <div key={i} className="w-9 h-9 rounded-full border-2 border-[#F5EFE6] overflow-hidden relative shrink-0">
                        <Image
                          src={src} alt=""
                          fill className="object-cover object-top"
                          sizes="36px"
                        />
                      </div>
                    ))}
                  </div>
                  <a
                    href={GOOGLE_REVIEW_LINK}
                    target="_blank" rel="noopener noreferrer"
                    className="btn-secondary text-[15px] xl:text-[17px] py-2 px-5"
                  >
                    Google Rezensionen <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Testimonial slider */}
            <ScrollReveal animation="reveal-up" delay={100}>
              <TestimonialSlider />
            </ScrollReveal>
          </div>
        </section>

        <Process />
        <LeadMagnet />
        <FAQ />
        <Blog />
        <Contact />
        <IndustryMarquee />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}

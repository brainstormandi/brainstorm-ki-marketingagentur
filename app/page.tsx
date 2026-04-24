"use client";
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { GOOGLE_REVIEW_LINK } from './constants';
import { ExternalLink } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IndustryMarquee from './components/IndustryMarquee';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
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
    <div className="min-h-screen">

      <Navbar />
      <main>
        <Hero />

        <IndustryMarquee />

        <Services />

        <section id="success" className="scroll-mt-32 py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal animation="reveal-right">
                <div className="inline-flex items-center px-6 py-2 rounded-full bg-slate-50 text-slate-800 font-bold text-xs mb-6 sm:mb-8 uppercase tracking-widest border border-slate-100">
                  Erfolge
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] py-1 mb-5">
                  <span className="font-sans block">Überzeugte KMUs</span>
                  <span className="font-sans block text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 drop-shadow-sm pb-2">in ganz Österreich</span>
                </h2>
                <p className="text-[#111827] text-lg sm:text-xl mb-10 leading-relaxed font-body max-w-md">
                  Wir sind stolz darauf, lokale Betriebe bei ihrer digitalen Transformation zu begleiten. Unsere Lösungen sind praxiserprobt und psychologisch optimiert für maximale Conversion.
                </p>

                <div className="flex flex-col items-start gap-6">
                  <div className="flex items-center gap-5" aria-hidden="true">
                    <div className="flex -space-x-3">
                      {customerFaces.map((src, i) => (
                        <ScrollReveal
                          key={i}
                          animation="zoom-in"
                          delay={i * 100}
                          className="w-11 h-11 rounded-full border-[3px] border-white overflow-hidden shadow-md relative"
                        >
                          <Image
                            src={src}
                            alt=""
                            fill
                            className="object-cover object-top"
                            sizes="44px"
                          />
                        </ScrollReveal>
                      ))}
                    </div>
                    <div className="text-sm font-body">
                      <span className="text-slate-900 font-black text-base block">50+ zufriedene Betriebe</span>
                      <span className="text-slate-400 font-medium">in den letzten 12 Monaten</span>
                    </div>
                  </div>

                  <a href={GOOGLE_REVIEW_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-4 bg-white border border-slate-200 rounded-2xl font-bold text-sm text-slate-700 shadow-sm hover:border-accent hover:shadow-[0_8px_24px_rgba(247,196,41,0.15)] transition-all group ct-card">
                    Alle Rezensionen auf Google lesen
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-accent transition-colors group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                  </a>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="reveal-left" delay={200}>
                <TestimonialSlider />
              </ScrollReveal>
            </div>
          </div>
        </section>


        <WhyUs />
        <Founder />
        <Process />
        <LeadMagnet />

        <FAQ />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}

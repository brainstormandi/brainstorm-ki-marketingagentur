"use client";
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { GOOGLE_REVIEW_LINK } from './constants';
import { ArrowUpRight } from 'lucide-react';
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
    <div className="min-h-screen relative bg-white">
      <Navbar />
      <main>
        <Hero />
        <ChallengeSection />

        <Services />
        <Founder />

        <section id="success" className="scroll-mt-32 py-32 bg-white overflow-hidden border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal animation="reveal-right">
                <div className="inline-flex items-center px-6 py-2 rounded-full bg-white text-gray-500 font-bold text-xs mb-6 sm:mb-8 uppercase tracking-widest border border-gray-200">
                  Erfolge
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[var(--font-playfair)] font-medium text-gray-900 tracking-tight leading-[1.1] py-1 mb-5 uppercase">
                  <span className="block">Kunden aus deiner Region,</span>
                  <span className="block text-transparent bg-clip-text pb-2" style={{backgroundImage: 'linear-gradient(180deg, #111827 0%, #374151 28%, #111827 48%, #4b5563 75%, #000000 100%)'}}>die bereits gewonnen haben.</span>
                </h2>
                <p className="text-gray-600 text-lg sm:text-xl mb-10 leading-relaxed font-body max-w-md">
                  Über 50 kleine und mittlere Betriebe haben sich in den letzten 12 Monaten mit uns an die Spitze gesetzt.
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
                      <span className="text-gray-900 font-[var(--font-playfair)] text-xl block">Echte Partnerschaften</span>
                      <span className="text-gray-500 font-medium">für messbaren Erfolg</span>
                    </div>
                  </div>

                  <a href={GOOGLE_REVIEW_LINK} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 w-max bg-[#F7C429] text-black px-8 py-[22px] rounded-full font-bold uppercase tracking-[0.15em] text-[14px] sm:text-[15px] shadow-[0_10px_30px_rgba(247,196,41,0.4)] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-black hover:text-[#F7C429] hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 cursor-pointer">
                    Alle Rezensionen auf Google lesen
                    <ArrowUpRight className="w-[20px] h-[20px] transition-transform duration-400 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                  </a>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="reveal-left" delay={200}>
                <TestimonialSlider />
              </ScrollReveal>
            </div>
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

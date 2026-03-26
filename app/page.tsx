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
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64&q=80"
];

export default function Home() {
  return (
    <div className="min-h-screen">

      <Navbar />
      <main>
        <Hero />

        <IndustryMarquee />

        <Services />

        <WhyUs />
        <Founder />
        <Process />
        
        <LeadMagnet />

        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal animation="reveal-right">
                <h2 className="text-base font-bold text-primary uppercase tracking-widest mb-3">Erfolge</h2>
                <h3 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 mb-6">
                  Überzeugte KMUs <br />
                  in ganz Österreich
                </h3>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                  Wir sind stolz darauf, lokale Betriebe bei ihrer digitalen Transformation zu begleiten. Unsere Lösungen sind praxiserprobt und psychologisch optimiert für maximale Conversion.
                </p>

                <div className="flex flex-col items-start gap-8">
                  <div className="flex items-center gap-6" aria-hidden="true">
                    <div className="flex -space-x-4">
                      {customerFaces.map((src, i) => (
                        <ScrollReveal
                          key={i}
                          animation="zoom-in"
                          delay={i * 100}
                          className="w-14 h-14 rounded-full border-[3px] border-white overflow-hidden shadow-md relative"
                        >
                          <Image
                            src={src}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="56px"
                          />
                        </ScrollReveal>
                      ))}
                    </div>
                    <div className="text-base font-medium text-slate-500">
                      <span className="text-slate-900 font-bold block text-lg">50+ zufriedene Betriebe</span>
                      in den letzten 12 Monaten
                    </div>
                  </div>

                  <a href={GOOGLE_REVIEW_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-slate-200 rounded-xl font-bold text-lg text-slate-700 shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all group scale-100 hover:scale-105">
                    Alle Rezensionen auf Google lesen
                    <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="reveal-left" delay={200}>
                <TestimonialSlider />
              </ScrollReveal>
            </div>
          </div>
        </section>

        <FAQ />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}

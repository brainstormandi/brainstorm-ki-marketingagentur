"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { blogPosts } from '../data/blogData';
import { ArrowRight, ArrowUpRight, Calendar } from 'lucide-react';

const Blog = () => {
  // Zeige nur die 2 neuesten Beiträge (wir nehmen einfach die ersten beiden aus dem Array)
  const recentPosts = blogPosts.slice(0, 2);

  return (
    <section id="blog" className="scroll-mt-32 py-24 bg-white border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="reveal-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-6 py-2 rounded-full bg-transparent text-gray-600 font-bold text-xs mb-6 sm:mb-8 uppercase tracking-widest border border-gray-200">
              BrainStorm Blog
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[var(--font-playfair)] font-medium text-gray-900 tracking-tight leading-[1.1] py-1 mb-6 uppercase">
              <span className="block">Insights &</span>
              <span className="block text-transparent bg-clip-text pb-2 sm:pb-4" style={{backgroundImage: 'linear-gradient(180deg, #111827 0%, #374151 28%, #111827 48%, #4b5563 75%, #000000 100%)'}}>KI-Trends.</span>
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed font-body">
              Wissen, das Sie weiterbringt. Lesen Sie die neuesten Artikel über KI im Marketing, Automatisierung und digitale Strategien.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10">
          {recentPosts.map((post, index) => (
            <ScrollReveal 
              key={post.slug} 
              animation="reveal-up" 
              delay={index * 150}
            >
              <Link 
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full bg-transparent rounded-3xl overflow-hidden backdrop-blur-sm border border-gray-200 hover:border-[#F7C429]/50 hover:shadow-[0_4px_20px_rgba(247,196,41,0.3)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image 
                    src={post.imageUrl} 
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent opacity-60"></div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-sm text-gray-500 font-medium mb-4">
                    <Calendar className="w-4 h-4 text-[#F7C429]" />
                    <span>{post.date}</span>
                    <span className="mx-2 text-[#52525b]">•</span>
                    <span>{post.author}</span>
                  </div>
                  
                  <h4 className="text-2xl font-[var(--font-playfair)] font-medium text-gray-900 mb-4 tracking-normal leading-[1.1] group-hover:opacity-80 transition-opacity line-clamp-2">
                    {post.title}
                  </h4>
                  
                  <p className="text-gray-600 text-lg font-body mb-8 flex-grow line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto flex items-center text-gray-900 text-base font-semibold group-hover:opacity-70 transition-opacity">
                    Artikel lesen
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform text-[#F7C429]" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal animation="reveal-up" delay={400} className="mt-16 text-center">
          <Link 
            href="/blog"
            className="group inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-[#F7C429] text-black font-[var(--font-inter)] text-[13px] font-bold tracking-[0.15em] uppercase shadow-[0_10px_30px_rgba(247,196,41,0.4)] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-black hover:text-[#F7C429] hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 cursor-pointer"
          >
            Alle Artikel ansehen
            <ArrowUpRight className="w-[18px] h-[18px] transition-transform duration-400 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Blog;

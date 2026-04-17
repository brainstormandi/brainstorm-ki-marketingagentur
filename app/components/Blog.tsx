"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { blogPosts } from '../data/blogData';
import { ArrowRight, Calendar } from 'lucide-react';

const Blog = () => {
  // Zeige nur die 2 neuesten Beiträge (wir nehmen einfach die ersten beiden aus dem Array)
  const recentPosts = blogPosts.slice(0, 2);

  return (
    <section id="blog" className="scroll-mt-32 py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="reveal-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-6 py-2 rounded-full bg-white text-slate-800 font-bold text-xs mb-6 sm:mb-8 uppercase tracking-widest border border-slate-200">
              BrainStorm Blog
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] py-1 mb-6">
              <span className="font-sans block">Insights &</span>
              <span className="font-sans block text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 drop-shadow-sm pb-2 sm:pb-4">KI-Trends.</span>
            </h2>
            <p className="text-[#111827] text-lg sm:text-xl leading-relaxed font-body">
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
                className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/60 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image 
                    src={post.imageUrl} 
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-sm text-slate-500 font-medium mb-4">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span>{post.date}</span>
                    <span className="mx-2 text-slate-300">•</span>
                    <span>{post.author}</span>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-slate-900 mb-4 font-sans tracking-tight leading-[1] group-hover:opacity-80 transition-opacity line-clamp-2">
                    {post.title}
                  </h4>
                  
                  <p className="text-[#111827] text-lg font-sans mb-8 flex-grow line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto flex items-center text-[#111827] font-sans font-bold tracking-widest uppercase text-xs group-hover:opacity-70 transition-opacity">
                    Artikel lesen
                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal animation="reveal-up" delay={400} className="mt-16 text-center">
          <Link 
            href="/blog"
            className="inline-flex px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold uppercase tracking-widest text-xs hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm items-center justify-center gap-2 group"
          >
            Alle Artikel ansehen
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Blog;

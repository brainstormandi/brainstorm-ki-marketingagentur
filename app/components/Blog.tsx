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
    <section id="blog" className="py-24 bg-slate-50 relative border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="reveal-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-base font-bold text-accent uppercase tracking-widest mb-3">
              BrainStorm Blog
            </h2>
            <h3 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 mb-6">
              Insights & KI-Trends
            </h3>
            <p className="text-xl text-slate-600">
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
                  
                  <h4 className="text-2xl font-bold text-slate-900 mb-4 font-display group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  
                  <p className="text-slate-600 mb-8 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto flex items-center text-primary font-bold group-hover:text-accent transition-colors">
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
            className="inline-flex py-4 px-10 border border-slate-300 hover:border-accent text-slate-700 hover:text-accent font-bold rounded-xl transition-all shadow-sm hover:shadow-md bg-white hover:bg-slate-50 items-center justify-center gap-3 group"
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

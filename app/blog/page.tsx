import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { FAQS } from '../constants';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogPosts } from '../data/blogData';
import { ArrowRight, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | BrainStorm KI Werbeagentur',
  description: 'Aktuelle Artikel, Insights und Trends zu Künstlicher Intelligenz im Marketing, Automatisierung und generativer Suchmaschinenoptimierung (GEO).',
  alternates: {
    canonical: 'https://ki-marketingagentur.jetzt/blog',
  },
};

export default function BlogIndex() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Startseite",
        "item": "https://ki-marketingagentur.jetzt/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://ki-marketingagentur.jetzt/blog"
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5EFE6] text-[#1C1C1C]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 bg-[#F5EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-6 py-2 rounded-full bg-transparent text-[#1C1C1C]/40 font-bold text-xs mb-8 uppercase tracking-widest border border-[#1C1C1C]/15">
              Wissen & Insights
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[var(--font-vollkorn)] font-semibold text-[#1C1C1C] tracking-tight leading-[1.1] py-1 mb-6 uppercase">
              <span className="block">BrainStorm</span>
              <span className="block text-[#F7C429] pb-2 sm:pb-4">Blog.</span>
            </h1>
            <p className="text-xl text-[#1C1C1C]/70 font-[var(--font-inter)]">
              Insights, Strategien & Expertenwissen für deinen digitalen Vorsprung durch KI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-[#1C1C1C]/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image 
                    src={post.imageUrl} 
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-102"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/50 via-transparent to-transparent opacity-60"></div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1C1C1C]/50 mb-3 font-[var(--font-inter)]">
                    <Calendar className="w-3.5 h-3.5 text-[#F7C429]" />
                    <span>{post.date}</span>
                  </div>
                  
                  <h2 className="text-xl font-[var(--font-vollkorn)] font-bold text-[#1C1C1C] mb-3 tracking-tight leading-snug group-hover:text-[#1C1C1C]/80 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-[#1C1C1C]/70 text-sm font-[var(--font-inter)] mb-6 flex-grow line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto flex items-center text-[#1C1C1C] text-sm font-bold uppercase tracking-wider group-hover:text-[#F7C429] transition-colors">
                    Artikel lesen
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1.5 transition-transform text-[#F7C429]" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

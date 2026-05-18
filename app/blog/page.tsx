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
        "name": "Home",
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
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-6 py-2 rounded-full bg-transparent text-gray-600 font-bold text-xs mb-8 uppercase tracking-widest border border-gray-200">
              Wissen & Insights
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[var(--font-playfair)] font-medium text-gray-900 tracking-tight leading-[1.1] py-1 mb-6 uppercase">
              <span className="block">BrainStorm</span>
              <span className="block text-transparent bg-clip-text pb-2 sm:pb-4" style={{backgroundImage: 'linear-gradient(180deg, #111827 0%, #374151 28%, #111827 48%, #4b5563 75%, #000000 100%)'}}>Blog.</span>
            </h1>
            <p className="text-xl text-gray-600 font-body">
              Insights, Strategien & Expertenwissen für deinen digitalen Vorsprung durch KI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image 
                    src={post.imageUrl} 
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-sm text-gray-500 font-medium mb-4">
                    <Calendar className="w-4 h-4 text-[#F7C429]" />
                    <span>{post.date}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight leading-tight group-hover:opacity-80 transition-opacity line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 text-base font-body mb-8 flex-grow line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto flex items-center text-gray-900 text-base font-semibold group-hover:opacity-70 transition-opacity">
                    Artikel lesen
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform text-[#F7C429]" />
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

import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { blogPosts } from '../../data/blogData';
import { ArrowLeft, Calendar, User } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(props: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const params = await props.params;
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return { title: 'Blog Post Not Found' };
  }

  return {
    title: `${post.title} | BrainStorm KI Werbeagentur`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl],
      type: 'article',
      authors: [post.author],
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl],
    }
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage(props: Props) {
  const params = await props.params;
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 
        Die Navbar hat standardmäßig eine Hintergrundunschärfe, 
        sodass sie auch über dem Hero-Bild gut aussieht.
      */}
      <Navbar />

      <main className="flex-grow">
        {/* Article Header & Hero Image */}
        <div className="relative w-full h-[50vh] min-h-[400px] sm:h-[60vh]">
          <Image 
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
          
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full translate-y-8 sm:translate-y-12">
              <Link 
                href="/blog" 
                className="inline-flex items-center text-white/80 hover:text-white font-semibold transition-colors mb-6 group"
              >
                <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                Zurück zur Übersicht
              </Link>
              
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight drop-shadow-md">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm sm:text-base font-medium">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <time>{post.date}</time>
                </div>
                <div className="hidden sm:block text-white/40">•</div>
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{post.author}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div 
            className="prose prose-lg prose-slate sm:prose-xl max-w-none 
                       prose-headings:font-display prose-headings:font-bold prose-headings:text-slate-900 
                       prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                       prose-strong:text-slate-900 prose-strong:font-bold
                       prose-li:marker:text-accent
                       selection:bg-accent/20 selection:text-slate-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <hr className="my-16 border-slate-200" />
          
          {/* CTA Box am Ende des Artikels */}
          <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200 text-center shadow-sm">
            <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">
              Mehr als nur Lesen?
            </h3>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto text-lg">
              Lassen Sie uns gemeinsam prüfen, wie Sie KI für Ihr Marketing und Ihre Prozesse einsetzen können. Unverbindlich und direkt aus der Praxis.
            </p>
            <Link 
              href="/#contact"
              className="inline-flex py-4 px-10 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg"
            >
              Erstgespräch buchen
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

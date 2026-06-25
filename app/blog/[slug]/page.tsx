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
    alternates: {
      canonical: `https://ki-marketingagentur.jetzt/blog/${post.slug}`,
    },
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://ki-marketingagentur.jetzt/blog/${post.slug}`
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": [post.imageUrl],
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://www.linkedin.com/in/brainstorm-andi/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BrainStorm Werbeagentur",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ki-marketingagentur.jetzt/bilder/logo.png"
      }
    },
    "description": post.excerpt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://ki-marketingagentur.jetzt/blog/${post.slug}`
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5EFE6] text-[#1C1C1C]">
      <script
        id="blog-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="blog-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar theme="dark" />

      <main className="flex-grow">
        {/* Article Header & Hero Image */}
        <div className="relative w-full h-[50vh] min-h-[420px] sm:h-[60vh]">
          <Image 
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#1C1C1C]/80 mix-blend-multiply"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5EFE6] to-transparent"></div>
          
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full translate-y-8 sm:translate-y-12">
              <div className="inline-flex items-center px-6 py-2 rounded-full bg-transparent text-white/70 font-bold text-xs uppercase tracking-widest border border-white/20 mb-8">
                Blog Artikel
              </div>

              <Link 
                href="/blog" 
                className="flex items-center text-[#F7C429] hover:text-white font-bold uppercase tracking-widest text-[11px] transition-colors mb-6 group w-fit"
              >
                <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                Zurück zur Übersicht
              </Link>
              
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-[var(--font-vollkorn)] font-semibold text-white mb-6 leading-[1.1] py-1 drop-shadow-md uppercase tracking-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm sm:text-base font-semibold uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#F7C429]" />
                  <time>{post.date}</time>
                </div>
                <div className="hidden sm:block text-white/20">|</div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[#F7C429]" />
                  <span>Von {post.author}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div 
            className="prose prose-lg max-w-none font-[var(--font-inter)] text-[#1C1C1C]/85 
                       prose-headings:font-[var(--font-vollkorn)] prose-headings:font-bold prose-headings:text-[#1C1C1C]
                       prose-a:text-[#F7C429] prose-a:font-bold hover:prose-a:text-[#1C1C1C] prose-a:no-underline prose-a:transition-colors
                       prose-strong:text-[#1C1C1C] prose-strong:font-bold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />


        </article>
      </main>

      <Footer />
    </div>
  );
}

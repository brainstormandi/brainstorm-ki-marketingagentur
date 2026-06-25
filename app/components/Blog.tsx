"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { blogPosts } from '../data/blogData';
import { ArrowRight } from 'lucide-react';

// ally.co: "Trusted by Industry Leaders" — cream section with editorial cards
const Blog = () => {
    const recentPosts = blogPosts.slice(0, 2);

    return (
        <section id="blog" className="scroll-mt-20 bg-[#F5EFE6] py-20 md:py-28 lg:py-0 lg:min-h-screen lg:flex lg:flex-col lg:justify-center">
            <div className="max-w-6xl mx-auto px-6 md:px-12">

                {/* ── HEADER ROW ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
                    <ScrollReveal animation="reveal-right" className="lg:col-span-6">
                        <span className="font-[var(--font-inter)] text-[11px] font-bold uppercase tracking-[0.18em] text-[#1C1C1C]/40 mb-4 block">
                            BrainStorm Blog
                        </span>
                        <h2
                            className="font-[var(--font-vollkorn)] font-semibold text-[#1C1C1C] leading-tight"
                            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
                        >
                            Das Werkzeug für{" "}
                            <span className="text-underline-yellow">deinen Vorsprung.</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal animation="reveal-left" delay={100} className="lg:col-span-6 flex flex-col justify-end gap-5">
                        <p className="font-[var(--font-inter)] text-[#1C1C1C]/55 text-base leading-relaxed">
                            Insights &amp; KI-Strategien direkt aus der Praxis – genau die Erkenntnisse, die regionale Betriebe stark machen.
                        </p>
                        <Link href="/blog" className="btn-secondary text-[15px] xl:text-[17px] py-2 px-5 w-max">
                            Alle Artikel <ArrowRight className="w-4 h-4" />
                        </Link>
                    </ScrollReveal>
                </div>

                {/* ── BLOG CARDS (minimal ally-style) ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 bg-transparent">
                    {recentPosts.map((post, index) => (
                        <ScrollReveal key={post.slug} animation="reveal-up" delay={index * 120}>
                            <Link href={`/blog/${post.slug}`}
                                className="group flex flex-col h-full bg-[#F5EFE6] border border-[#D6CFC5] rounded-2xl overflow-hidden hover:bg-[#EDE7DB] hover:border-[#1C1C1C]/25 transition-all duration-200">
                                {/* Image */}
                                <div className="relative h-52 w-full overflow-hidden">
                                    <Image
                                        src={post.imageUrl} alt={post.title} fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="font-[var(--font-inter)] text-[10px] font-bold uppercase tracking-[0.15em] text-[#1C1C1C]/40">
                                            {post.date}
                                        </span>
                                        <span className="w-1 h-1 rounded-full bg-[#1C1C1C]/20" />
                                        <span className="font-[var(--font-inter)] text-[10px] font-bold uppercase tracking-[0.15em] text-[#1C1C1C]/40">
                                            {post.author}
                                        </span>
                                    </div>
                                    <h4 className="font-[var(--font-vollkorn)] text-xl font-semibold text-[#1C1C1C] mb-3 leading-snug line-clamp-2 flex-grow">
                                        {post.title}
                                    </h4>
                                    <p className="font-[var(--font-inter)] text-[#1C1C1C]/55 text-sm mb-5 line-clamp-2 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center font-[var(--font-inter)] text-[12px] font-bold uppercase tracking-[0.1em] text-[#1C1C1C] border-t border-[#1C1C1C]/10 pt-4">
                                        Artikel lesen <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1 text-[#F7C429]" />
                                    </div>
                                </div>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;

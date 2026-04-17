"use client";
import dynamic from 'next/dynamic';

export const AIAssistant = dynamic(() => import('../components/AIAssistant'), { ssr: false });
export const Contact = dynamic(() => import('../components/Contact'), { ssr: false });

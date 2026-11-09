import { NextRequest, NextResponse } from 'next/server';
import { blogPosts } from '../../data/blogData';
import { getClientIp, rateLimit } from '../../lib/securityUtils';

const INDEXNOW_KEY = process.env.INDEXNOW_KEY || 'b79f1d4a721ee4b2b7b53fa718a819a0';
const HOST = 'ki-marketingagentur.jetzt';
const BASE_URL = `https://${HOST}`;

async function handleIndexNow(req: NextRequest) {
    const ip = getClientIp(req);
    if (!rateLimit(`indexnow:${ip}`, 3, 10 * 60 * 1000)) {
        return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    // Optionaler Schutz über Authorization Header oder ?secret= Parameter, falls INDEXNOW_SECRET in Vercel gesetzt ist
    const configuredSecret = process.env.INDEXNOW_SECRET;
    if (configuredSecret) {
        const authHeader = req.headers.get('authorization');
        const querySecret = req.nextUrl.searchParams.get('secret');
        if (authHeader !== `Bearer ${configuredSecret}` && querySecret !== configuredSecret) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
    }

    const regionalCities = [
        'amstetten',
        'steyr',
        'linz',
        'perg',
        'st-poelten',
        'salzburg',
        'wien',
    ];

    const urlList = [
        `${BASE_URL}/`,
        ...regionalCities.map((city) => `${BASE_URL}/werbeagentur-${city}`),
        `${BASE_URL}/blog`,
        ...blogPosts.map((post) => `${BASE_URL}/blog/${post.slug}`),
        `${BASE_URL}/llms.txt`,
        `${BASE_URL}/llms-full.txt`,
    ];

    try {
        const response = await fetch('https://api.indexnow.org/indexnow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify({
                host: HOST,
                key: INDEXNOW_KEY,
                keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
                urlList,
            }),
        });

        return NextResponse.json({
            success: response.ok,
            status: response.status,
            message: response.ok
                ? 'Alle Seiten wurden erfolgreich per IndexNow an Bing, ChatGPT Search, Copilot, Perplexity & Yandex übermittelt.'
                : `IndexNow hat mit Status ${response.status} geantwortet.`,
            submittedUrls: urlList.length,
            urls: urlList,
        });
    } catch {
        return NextResponse.json(
            { error: 'IndexNow Übermittlung fehlgeschlagen.' },
            { status: 502 }
        );
    }
}

/**
 * IndexNow Instant-Indexing Endpoint für Bing, ChatGPT Search (OAI-SearchBot),
 * Microsoft Copilot, Perplexity & Yandex.
 * Unterstützt sowohl direkten Browser-Aufruf (GET) als auch Webhook-Aufrufe (POST).
 */
export async function GET(req: NextRequest) {
    return handleIndexNow(req);
}

export async function POST(req: NextRequest) {
    return handleIndexNow(req);
}

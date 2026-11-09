import { NextResponse } from 'next/server';
import { getClientIp, isValidOrigin, rateLimit } from '../../lib/securityUtils';

export async function GET(req: Request) {
    // Prevent unauthorized exposure of GEMINI_API_KEY while Susi Voice Assistant is disabled
    if (process.env.ENABLE_VOICE_ASSISTANT !== 'true') {
        return NextResponse.json({ error: 'Voice assistant is currently disabled' }, { status: 403 });
    }

    if (!isValidOrigin(req)) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const ip = getClientIp(req);
    if (!rateLimit(`voice_${ip}`, 5, 60000)) {
        return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return NextResponse.json({ error: 'Voice service not configured' }, { status: 500 });
    }

    return NextResponse.json(
        { token: apiKey },
        {
            headers: {
                'Cache-Control': 'no-store, no-cache, must-revalidate, private',
                'Pragma': 'no-cache',
            },
        }
    );
}

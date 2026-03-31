import { NextResponse } from 'next/server';

export async function GET() {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        return NextResponse.json({ error: 'Voice service not configured' }, { status: 500 });
    }

    // Key delivered securely over HTTPS at runtime
    // Never embedded in client source code or GitHub
    return NextResponse.json({ token: apiKey });
}

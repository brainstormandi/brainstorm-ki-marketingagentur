import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { rateLimit, sanitize } from '../../lib/securityUtils';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    // Strictly require valid certs for production security
    tls: {
        rejectUnauthorized: process.env.NODE_ENV === 'development' ? false : true
    }
});

export async function POST(req: Request) {
    if (req.method !== 'POST') {
        return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
    }

    try {
        // Get client IP for rate limiting
        const ip = req.headers.get('x-forwarded-for') || 'unknown';
        if (!rateLimit(ip, 3)) {
            return NextResponse.json({ error: 'Too many requests. Please wait a minute.' }, { status: 429 });
        }

        const body = await req.json();
        const { targetUrl: rawUrl, clientEmail: rawEmail } = body;

        // Sanitize inputs
        const targetUrl = sanitize(rawUrl || '');
        const clientEmail = sanitize(rawEmail || '');

        if (!targetUrl || !clientEmail) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Email to Agency
        const agencyMailOptions = {
            from: `"${process.env.SMTP_FROM_NAME || 'Brainstorm Lead-System'}" <${process.env.SMTP_FROM}>`,
            to: 'brainstorm.werbeagentur@gmail.com',
            subject: `🔥 Neuer Website-Check Lead: ${targetUrl}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px;">
                    <h2 style="color: #111827;">Neue Anfrage für Website-Check</h2>
                    <p style="font-size: 16px;">Ein Interessent hat soeben einen technischen und verkaufspsychologischen Website-Check angefordert.</p>
                    <br>
                    <p style="font-size: 16px;"><strong>Angeforderte URL (Webseite):</strong> <a href="${targetUrl}">${targetUrl}</a></p>
                    <p style="font-size: 16px;"><strong>E-Mail Adresse des Interessenten:</strong> <a href="mailto:${clientEmail}">${clientEmail}</a></p>
                    <hr style="border: 1px solid #eee; margin: 20px 0;">
                    <p style="color: #666; font-size: 12px;">Generiert über das Lead-Magnet Formular (Startseite).</p>
                </div>
            `,
        };

        await transporter.sendMail(agencyMailOptions);

        return NextResponse.json({ success: true, message: 'Lead sent successfully' }, { status: 200 });
    } catch (error: any) {
        console.error('SMTP Error (Lead Magnet):', error);
        return NextResponse.json({
            error: 'Lead delivery failed',
            details: error.message
        }, { status: 500 });
    }
}

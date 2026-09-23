import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { 
    rateLimit, 
    sanitize, 
    isHoneypotTriggered, 
    isTimingValid, 
    isDisposableEmail, 
    isValidEmail, 
    isSpamContent 
} from '../../lib/securityUtils';

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
        const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
        if (!rateLimit(ip, 3)) {
            return NextResponse.json({ error: 'Zu viele Anfragen. Bitte warte einen Moment.' }, { status: 429 });
        }

        const body = await req.json();
        const { 
            targetUrl: rawUrl, 
            clientEmail: rawEmail,
            company_fax,     // Honeypot field 1
            hp_check,        // Honeypot field 2
            loadedAt,        // Form load timestamp
        } = body;

        // 1. INVISIBLE DEFENSE: Honeypot trap check
        if (isHoneypotTriggered(company_fax) || isHoneypotTriggered(hp_check)) {
            console.warn(`[AntiSpam Blocked] Honeypot triggered from IP ${ip}`);
            // Return fake 200 OK so bots think they succeeded without alerting the spammer
            return NextResponse.json({ success: true, message: 'Lead sent successfully' }, { status: 200 });
        }

        // 2. INVISIBLE DEFENSE: Submission Timing check (must take > 1.5s)
        if (!isTimingValid(loadedAt, 1.5)) {
            console.warn(`[AntiSpam Blocked] Impossibly fast submission from IP ${ip} (automated bot)`);
            return NextResponse.json({ success: true, message: 'Lead sent successfully' }, { status: 200 });
        }

        // Sanitize inputs
        const targetUrl = sanitize(rawUrl || '').trim();
        const clientEmail = sanitize(rawEmail || '').trim().toLowerCase();

        if (!targetUrl || !clientEmail) {
            return NextResponse.json({ error: 'Bitte fülle alle Pflichtfelder aus.' }, { status: 400 });
        }

        // 3. INVISIBLE DEFENSE: Strict email structure check
        if (!isValidEmail(clientEmail)) {
            return NextResponse.json({ error: 'Bitte gib eine gültige E-Mail-Adresse ein.' }, { status: 400 });
        }

        // 4. INVISIBLE DEFENSE: Disposable / Burner email domains
        if (isDisposableEmail(clientEmail)) {
            console.warn(`[AntiSpam Blocked] Disposable email domain detected: ${clientEmail} from IP ${ip}`);
            return NextResponse.json({ success: true, message: 'Lead sent successfully' }, { status: 200 });
        }

        // 5. INVISIBLE DEFENSE: Spam keywords & code patterns in URL or Email
        if (isSpamContent(targetUrl) || isSpamContent(clientEmail)) {
            console.warn(`[AntiSpam Blocked] Spam payload detected in URL/Email from IP ${ip}`);
            return NextResponse.json({ success: true, message: 'Lead sent successfully' }, { status: 200 });
        }

        // 6. Plausible URL check (must contain a dot, valid domain format)
        const cleanUrl = targetUrl.replace(/^https?:\/\//i, '').split('/')[0];
        if (!cleanUrl.includes('.') || cleanUrl.length < 4) {
            return NextResponse.json({ error: 'Bitte gib eine gültige Webseiten-URL ein (z. B. www.meine-seite.at).' }, { status: 400 });
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

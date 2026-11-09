import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import {
    getClientIp,
    isValidOrigin,
    rateLimit,
    sanitize,
    sanitizeHttpUrl,
    stripHeaderInjection,
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
    tls: {
        rejectUnauthorized: process.env.NODE_ENV === 'development' ? false : true
    }
});

export async function POST(req: Request) {
    if (req.method !== 'POST') {
        return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
    }

    if (!isValidOrigin(req)) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    try {
        const ip = getClientIp(req);
        if (!rateLimit(`lead_${ip}`, 3, 60000)) {
            return NextResponse.json({ error: 'Zu viele Anfragen. Bitte warte einen Moment.' }, { status: 429 });
        }

        const body = await req.json();
        const {
            targetUrl: rawUrl,
            clientEmail: rawEmail,
            company_fax,
            hp_check,
            loadedAt,
        } = body || {};

        // 1. INVISIBLE DEFENSE: Honeypot trap check
        if (isHoneypotTriggered(company_fax) || isHoneypotTriggered(hp_check)) {
            console.warn(`[AntiSpam Blocked] Honeypot triggered from IP ${ip}`);
            return NextResponse.json({ success: true, message: 'Lead sent successfully' }, { status: 200 });
        }

        // 2. INVISIBLE DEFENSE: Submission Timing check (must take > 1.5s)
        if (!isTimingValid(loadedAt, 1.5)) {
            console.warn(`[AntiSpam Blocked] Impossibly fast submission from IP ${ip}`);
            return NextResponse.json({ success: true, message: 'Lead sent successfully' }, { status: 200 });
        }

        const rawUrlStr = typeof rawUrl === 'string' ? rawUrl.trim() : '';
        const rawEmailStr = typeof rawEmail === 'string' ? rawEmail.trim().toLowerCase() : '';

        if (!rawUrlStr || !rawEmailStr) {
            return NextResponse.json({ error: 'Bitte fülle alle Pflichtfelder aus.' }, { status: 400 });
        }

        // 3. INVISIBLE DEFENSE: Strict email structure check
        if (!isValidEmail(rawEmailStr)) {
            return NextResponse.json({ error: 'Bitte gib eine gültige E-Mail-Adresse ein.' }, { status: 400 });
        }

        // 4. INVISIBLE DEFENSE: Disposable / Burner email domains
        if (isDisposableEmail(rawEmailStr)) {
            console.warn(`[AntiSpam Blocked] Disposable email domain detected from IP ${ip}`);
            return NextResponse.json({ success: true, message: 'Lead sent successfully' }, { status: 200 });
        }

        // 5. INVISIBLE DEFENSE: Spam keywords & code patterns in URL or Email
        if (isSpamContent(rawUrlStr) || isSpamContent(rawEmailStr)) {
            console.warn(`[AntiSpam Blocked] Spam payload detected in URL/Email from IP ${ip}`);
            return NextResponse.json({ success: true, message: 'Lead sent successfully' }, { status: 200 });
        }

        // 6. Strict HTTP/HTTPS URL validation & normalization (prevents javascript: URI XSS in email)
        const validatedUrl = sanitizeHttpUrl(rawUrlStr);
        if (!validatedUrl) {
            return NextResponse.json({ error: 'Bitte gib eine gültige Webseiten-URL ein (z. B. www.meine-seite.at).' }, { status: 400 });
        }

        const safeUrlDisplay = sanitize(validatedUrl, 300);
        const safeSubjectUrl = stripHeaderInjection(validatedUrl, 120);
        const safeEmail = sanitize(rawEmailStr, 254);

        const agencyMailOptions = {
            from: `"${stripHeaderInjection(process.env.SMTP_FROM_NAME || 'Brainstorm Lead-System', 80)}" <${process.env.SMTP_FROM}>`,
            to: 'brainstorm.werbeagentur@gmail.com',
            subject: `🔥 Neuer Website-Check Lead: ${safeSubjectUrl}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px;">
                    <h2 style="color: #111827;">Neue Anfrage für Website-Check</h2>
                    <p style="font-size: 16px;">Ein Interessent hat soeben einen technischen und verkaufspsychologischen Website-Check angefordert.</p>
                    <br>
                    <p style="font-size: 16px;"><strong>Angeforderte URL (Webseite):</strong> <a href="${safeUrlDisplay}">${safeUrlDisplay}</a></p>
                    <p style="font-size: 16px;"><strong>E-Mail Adresse des Interessenten:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
                    <hr style="border: 1px solid #eee; margin: 20px 0;">
                    <p style="color: #666; font-size: 12px;">Generiert über das Lead-Magnet Formular (Startseite).</p>
                </div>
            `,
        };

        await transporter.sendMail(agencyMailOptions);

        return NextResponse.json({ success: true, message: 'Lead sent successfully' }, { status: 200 });
    } catch (error: unknown) {
        console.error('SMTP Error (Lead Magnet):', error);
        return NextResponse.json({
            error: 'Anfrage konnte derzeit nicht gesendet werden. Bitte versuche es später erneut.'
        }, { status: 500 });
    }
}

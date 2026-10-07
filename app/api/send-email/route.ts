import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { rateLimit, sanitize } from '../../lib/securityUtils';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'alfa3062.alfahosting-server.de',
    port: Number(process.env.SMTP_PORT) || 465,
    secure: Number(process.env.SMTP_PORT || 465) === 465,
    auth: {
        user: process.env.SMTP_USER || 'web1802p3',
        pass: process.env.SMTP_PASS || 'vtLyhHni',
    },
    tls: {
        rejectUnauthorized: false
    }
});

export async function POST(req: Request) {
    if (req.method !== 'POST') {
        return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
    }

    try {
        // Rate limiting (relaxed in dev for testing)
        const ip = req.headers.get('x-forwarded-for') || 'unknown';
        if (process.env.NODE_ENV !== 'development' && !rateLimit(ip, 15)) {
            return NextResponse.json({ error: 'Too many requests. Please wait a minute.' }, { status: 429 });
        }

        const body = await req.json();
        const { 
            clientName: rawName, 
            clientEmail: rawEmail, 
            appointmentDateTime: rawTime, 
            topic: rawTopic,
            meetingType: rawMeetingType,
            phoneNumber: rawPhone
        } = body;

        // Sanitize and apply reliable defaults
        const clientName = sanitize(rawName || '').trim() || 'Interessent';
        const clientEmail = sanitize(rawEmail || '').trim();
        const appointmentDateTime = sanitize(rawTime || '').trim() || 'Nach persönlicher Absprache';
        const topic = sanitize(rawTopic || '').trim() || 'Kostenloses Strategiegespräch mit Andi Sturm';
        const meetingType = sanitize(rawMeetingType || 'online').toLowerCase().trim();
        const phoneNumber = sanitize(rawPhone || '').trim();

        if (!clientEmail) {
            return NextResponse.json({ error: 'E-Mail-Adresse fehlt' }, { status: 400 });
        }

        const isOnline = meetingType.includes('online') || (!meetingType.includes('phone') && !meetingType.includes('telefon'));
        const meetLink = 'https://meet.google.com/xng-wott-wnc';

        const senderFrom = `"${process.env.SMTP_FROM_NAME || 'Brainstorm KI Marketingagentur'}" <${process.env.SMTP_FROM || 'info@brainstorm-werbeagentur.at'}>`;

        // 1. Email to Agency (Andi Sturm)
        const agencyMailOptions = {
            from: senderFrom,
            to: 'brainstorm.werbeagentur@gmail.com',
            replyTo: clientEmail,
            subject: `📆 Neuer KI-Termin (${isOnline ? 'Online Google Meet' : 'Telefontermin'}): ${clientName}`,
            html: `
                <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 24px; color: #1C1C1C; max-width: 600px; background: #ffffff; border-radius: 12px; border: 1px solid #e5e7eb;">
                    <div style="border-bottom: 2px solid #F7C429; padding-bottom: 16px; margin-bottom: 20px;">
                        <h2 style="color: #1C1C1C; margin: 0 0 6px 0; font-size: 22px;">Neuer Termin über Susi KI vereinbart</h2>
                        <p style="color: #6b7280; margin: 0; font-size: 14px;">Eingegangen über den AI-Assistenten auf brainstorm-werbeagentur.at</p>
                    </div>

                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px; width: 140px;">Kunde:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold; font-size: 15px; color: #111827;">${clientName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">E-Mail:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 15px;"><a href="mailto:${clientEmail}" style="color: #2563eb; text-decoration: none;">${clientEmail}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Wunschtermin:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold; font-size: 15px; color: #047857;">${appointmentDateTime}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Thema:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 15px; color: #111827;">${topic}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Format:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; font-size: 15px; color: #111827;">${isOnline ? '🎥 Online-Meeting (Google Meet)' : '📞 Telefontermin'}</td>
                        </tr>
                        ${phoneNumber ? `
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Telefonnummer:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold; font-size: 16px;"><a href="tel:${phoneNumber}" style="color: #047857; text-decoration: none;">${phoneNumber}</a></td>
                        </tr>
                        ` : ''}
                    </table>

                    ${isOnline ? `
                    <div style="margin: 20px 0; padding: 16px; background: #ecfdf5; border-left: 4px solid #10b981; border-radius: 8px;">
                        <p style="margin: 0 0 6px 0; font-weight: bold; color: #065f46; font-size: 14px;">Google Meet Konferenz-Link für diesen Termin:</p>
                        <a href="${meetLink}" style="color: #047857; font-weight: bold; font-size: 15px; text-decoration: underline;">${meetLink}</a>
                    </div>
                    ` : `
                    <div style="margin: 20px 0; padding: 16px; background: #eff6ff; border-left: 4px solid #3b82f6; border-radius: 8px;">
                        <p style="margin: 0 0 4px 0; font-weight: bold; color: #1e40af; font-size: 14px;">Rückruf-Information:</p>
                        <p style="margin: 0; color: #1e3a8a; font-size: 14px;">Bitte rufe den Kunden zum vereinbarten Zeitpunkt unter <strong>${phoneNumber || 'der genannten Rufnummer'}</strong> an.</p>
                    </div>
                    `}

                    <p style="color: #9ca3af; font-size: 12px; margin-top: 24px; border-top: 1px solid #f3f4f6; pt-4;">
                        Automatisch generiert durch Susi KI • BrainStorm Werbeagentur
                    </p>
                </div>
            `,
        };

        // 2. Confirmation to Client
        const clientMailOptions = {
            from: senderFrom,
            to: clientEmail,
            replyTo: 'brainstorm.werbeagentur@gmail.com',
            subject: `Terminbestätigung: Dein Strategiegespräch mit Andi Sturm (${isOnline ? 'Online' : 'Telefon'})`,
            html: `
                <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1C1C1C; padding: 28px; border: 1px solid #e5e7eb; border-radius: 16px; max-width: 600px; background: #ffffff; box-shadow: 0 4px 12px rgba(0,0,0,0.04);">
                    <div style="margin-bottom: 24px; border-bottom: 2px solid #F7C429; padding-bottom: 16px;">
                        <h2 style="margin: 0 0 8px 0; color: #1C1C1C; font-size: 24px;">Terminbestätigung</h2>
                        <p style="margin: 0; color: #6b7280; font-size: 15px;">Hallo ${clientName}, vielen Dank für deine Terminanfrage über unsere KI-Assistentin Susi!</p>
                    </div>

                    <p style="font-size: 15px; line-height: 1.6; color: #374151;">
                        Dein persönliches Strategiegespräch mit Andi Sturm wurde erfolgreich fixiert. Hier sind alle Details zu deinem Termin im Überblick:
                    </p>

                    <div style="background: #F5EFE6; padding: 20px; border-radius: 12px; margin: 20px 0; border: 1px solid #e7ded0;">
                        <p style="margin: 6px 0; font-size: 15px; color: #1C1C1C;"><strong>Wann:</strong> <span style="color: #047857; font-weight: bold;">${appointmentDateTime}</span></p>
                        <p style="margin: 6px 0; font-size: 15px; color: #1C1C1C;"><strong>Thema:</strong> ${topic}</p>
                        <p style="margin: 6px 0; font-size: 15px; color: #1C1C1C;"><strong>Format:</strong> ${isOnline ? 'Online-Meeting (Google Meet)' : 'Telefontermin'}</p>
                        ${phoneNumber ? `<p style="margin: 6px 0; font-size: 15px; color: #1C1C1C;"><strong>Deine Rufnummer:</strong> ${phoneNumber}</p>` : ''}
                        
                        ${isOnline ? `
                        <div style="margin-top: 20px; padding: 16px; background: #ffffff; border-radius: 10px; border: 1px solid #dcd3c3; text-align: center;">
                            <p style="margin: 0 0 12px 0; font-weight: bold; color: #1C1C1C; font-size: 14px;">Dein direkter Link zum Google Meet Raum:</p>
                            <a href="${meetLink}" style="display: inline-block; background: #1C1C1C; color: #F5EFE6; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px; box-shadow: 0 2px 6px rgba(0,0,0,0.15);">
                                Jetzt Google Meet beitreten →
                            </a>
                            <p style="margin: 10px 0 0 0; font-size: 12px; color: #6b7280;">Link: <a href="${meetLink}" style="color: #2563eb; text-decoration: underline;">${meetLink}</a></p>
                        </div>
                        ` : `
                        <div style="margin-top: 16px; padding: 14px; background: #eff6ff; border-radius: 8px; border-left: 4px solid #3b82f6;">
                            <p style="margin: 0; color: #1e40af; font-size: 14px;">Andi Sturm wird dich zum vereinbarten Termin pünktlich unter <strong>${phoneNumber || 'deiner Rufnummer'}</strong> anrufen.</p>
                        </div>
                        `}
                    </div>

                    <p style="font-size: 15px; line-height: 1.6; color: #374151;">
                        Wir freuen uns sehr auf den gemeinsamen Austausch mit dir! Sollte dir etwas dazwischenkommen, antworte einfach direkt auf diese E-Mail.
                    </p>

                    <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #f3f4f6;">
                        <p style="font-size: 15px; margin: 0; color: #1C1C1C; font-weight: 600;">Andi Sturm & das BrainStorm Team</p>
                        <p style="font-size: 13px; color: #6b7280; margin: 4px 0 0 0;">BrainStorm Werbeagentur • www.brainstorm-werbeagentur.at</p>
                    </div>
                </div>
            `,
        };

        let agencySent = false;
        let clientSent = false;
        let agencyError: string | null = null;
        let clientError: string | null = null;

        try {
            const info = await transporter.sendMail(agencyMailOptions);
            agencySent = true;
            console.log('Agency email sent successfully:', info.messageId);
        } catch (agencyErr: any) {
            agencyError = agencyErr?.message || 'Agency email failed';
            console.error('Agency Mail Error:', agencyErr);
        }

        try {
            const info = await transporter.sendMail(clientMailOptions);
            clientSent = true;
            console.log('Client email sent successfully:', info.messageId);
        } catch (clientErr: any) {
            clientError = clientErr?.message || 'Client email failed';
            console.warn('Client Confirmation Mail Error:', clientErr);
        }

        return NextResponse.json({ 
            success: true, 
            message: 'Emails processed',
            agencySent,
            clientSent,
            agencyError,
            clientError
        }, { status: 200 });

    } catch (error: any) {
        console.error('SMTP Processing Error:', error);
        return NextResponse.json({
            error: 'Mail dispatch error',
            details: error?.message || 'Unknown error'
        }, { status: 500 });
    }
}

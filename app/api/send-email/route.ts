import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for 587
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    tls: {
        // Do not fail on invalid certs
        rejectUnauthorized: false
    }
});

export async function POST(req: Request) {
    if (req.method !== 'POST') {
        return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
    }

    try {
        const body = await req.json();
        const { clientName, clientEmail, appointmentDateTime, topic } = body;

        if (!clientName || !clientEmail || !appointmentDateTime || !topic) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Email to Agency
        const agencyMailOptions = {
            from: `"${process.env.SMTP_FROM_NAME || 'Brainstorm AI'}" <${process.env.SMTP_FROM}>`,
            to: 'brainstorm.werbeagentur@gmail.com',
            subject: `📆 Neuer KI-Termin: ${clientName}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px;">
                    <h2 style="color: #111827;">Neuer Termin vereinbart</h2>
                    <p style="font-size: 16px;"><strong>Kunde:</strong> ${clientName}</p>
                    <p style="font-size: 16px;"><strong>Email:</strong> ${clientEmail}</p>
                    <p style="font-size: 16px;"><strong>Zeitpunkt:</strong> ${appointmentDateTime}</p>
                    <p style="font-size: 16px;"><strong>Thema:</strong> ${topic}</p>
                    <hr style="border: 1px solid #eee; margin: 20px 0;">
                    <p style="color: #666; font-size: 12px;">Diese Buchung wurde automatisch über den BrainStorm AI Assistant generiert.</p>
                </div>
            `,
        };

        // Confirmation to Client
        const clientMailOptions = {
            from: `"${process.env.SMTP_FROM_NAME || 'Brainstorm Werbeagentur'}" <${process.env.SMTP_FROM}>`,
            to: clientEmail,
            subject: `Terminbestätigung: Ihr Gespräch mit Brainstorm`,
            html: `
                <div style="font-family: sans-serif; color: #111827; padding: 20px; border: 1px solid #eee; border-radius: 12px;">
                    <h2 style="margin-bottom: 24px;">Hallo ${clientName},</h2>
                    <p style="font-size: 16px; line-height: 1.6;">vielen Dank für das Gespräch mit unserem AI Assistant.</p>
                    <p style="font-size: 16px; line-height: 1.6;">Hiermit bestätigen wir Ihren Termin:</p>
                    <div style="background: #f9fafb; padding: 16px; border-radius: 8px; margin: 20px 0;">
                        <p style="margin: 8px 0;"><strong>Wann:</strong> ${appointmentDateTime}</p>
                        <p style="margin: 8px 0;"><strong>Thema:</strong> ${topic}</p>
                    </div>
                    <p style="font-size: 16px; line-height: 1.6;">Wir freuen uns darauf, Sie digital nach vorne zu bringen.</p>
                    <br>
                    <p style="font-size: 16px;">Mit freundlichen Grüßen,<br><strong>Ihr Brainstorm Team</strong></p>
                </div>
            `,
        };

        // Send emails
        await Promise.all([
            transporter.sendMail(agencyMailOptions),
            transporter.sendMail(clientMailOptions)
        ]);

        return NextResponse.json({ success: true, message: 'Emails sent successfully via SMTP' }, { status: 200 });
    } catch (error: any) {
        console.error('SMTP Error:', error);
        return NextResponse.json({
            error: 'Mail delivery failed',
            details: error.message
        }, { status: 500 });
    }
}

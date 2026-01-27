import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: Request) {
    if (req.method !== 'POST') {
        return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
    }

    const body = await req.json();
    const { clientName, clientEmail, appointmentDateTime, topic } = body;

    if (!clientName || !clientEmail || !appointmentDateTime || !topic) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Resend Flow (Preferred)
    if (resend && process.env.RESEND_API_KEY && !process.env.RESEND_API_KEY.includes('your_key')) {
        try {
            console.log("Attempting to send emails via Resend...");

            // Note: with onboarding@resend.dev you can only send to the email you signed up with.
            // If the user wants to send to ANY email, they MUST verify a domain in Resend.

            // E-Mail an die Agentur (Sie)
            const agencyMail = await resend.emails.send({
                from: 'Brainstorm AI <info@ki-marketingagentur.jetzt>',
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
            });

            console.log("Agency email status:", agencyMail);

            // Bestätigung an den Kunden 
            // WICHTIG: Erfordert verifizierte Domain in Resend!
            const clientMail = await resend.emails.send({
                from: 'Brainstorm Werbeagentur <info@ki-marketingagentur.jetzt>',
                to: clientEmail,
                cc: 'brainstorm.werbeagentur@gmail.com', // Sicherheits-Kopie an Sie
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
            });

            console.log("Client email sent status:", clientMail.data?.id ? "SUCCESS" : "FAILED", clientMail);

            return NextResponse.json({ success: true, message: 'Emails processed' }, { status: 200 });
        } catch (error: unknown) {
            console.error('Resend Exception:', error);
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            return NextResponse.json({ error: 'Mail delivery exception', details: errorMessage }, { status: 500 });
        }
    }

    // 2. Simulation Mode (Fallback for Demo)
    console.log("--- EMAIL SIMULATION MODE (SUCCESS) ---");
    console.log("To:", clientEmail);
    console.log("Subject: Terminbestätigung");
    console.log("Content:", { clientName, appointmentDateTime, topic });
    console.log("---------------------------------------");

    return NextResponse.json({
        success: true,
        message: 'Email simulated successfully (No API Key provided)',
        isSimulation: true
    }, { status: 200 });
}

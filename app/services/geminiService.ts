/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoogleGenAI, LiveServerMessage, Modality, Type, FunctionDeclaration } from "@google/genai";

export const appointmentTools: FunctionDeclaration[] = [
    {
        name: 'confirmAppointment',
        parameters: {
            type: Type.OBJECT,
            description: 'Bucht den Termin fest im System ein und versendet automatisch Bestätigungs-E-Mails an den Kunden und das BrainStorm-Team. Nutze dieses Tool erst, wenn du Name, E-Mail, Datum und Uhrzeit vom Kunden hast.',
            properties: {
                clientName: { type: Type.STRING, description: 'Vorname und Nachname des Kunden' },
                clientEmail: { type: Type.STRING, description: 'E-Mail Adresse des Kunden' },
                appointmentDateTime: { type: Type.STRING, description: 'Gewünschtes Datum und Uhrzeit des Termins (z.B. Mittwoch 14:00 Uhr)' },
                topic: { type: Type.STRING, description: 'Kurze Zusammenfassung des Beratungs-Themas' },
            },
            required: ['clientName', 'clientEmail', 'appointmentDateTime', 'topic'],
        },
    },
    {
        name: 'redirectToCalendly',
        parameters: {
            type: Type.OBJECT,
            description: 'Stellt dem Kunden den direkten Calendly-Link zur Verfügung, falls der Kunde dies ausdrücklich wünscht.',
            properties: {
                reason: { type: Type.STRING, description: 'Grund für die Weiterleitung' },
            },
        },
    }
];

export class GeminiService {
    private getApiKey(): string {
        const key = process.env.NEXT_PUBLIC_GEMINI_API_KEY || process.env.API_KEY;
        if (!key || key === 'your_google_gemini_api_key_here') {
            console.error("CRITICAL ERROR: API_KEY is missing or default. Please set NEXT_PUBLIC_GEMINI_API_KEY in your .env.local file.");
            throw new Error("API Key is missing. Bitte tragen Sie Ihren Gemini API Key in die .env.local Datei ein.");
        }
        return key;
    }

    async startChat() {
        const ai = new GoogleGenAI({ apiKey: this.getApiKey() });
        const chat = ai.chats.create({
            model: 'gemini-3-flash',
            config: {
                systemInstruction: `Du bist "Brainstorm AI", eine freundliche und sympathische Beraterin der Brainstorm Werbeagentur (über 32 Jahre Erfahrung).
        
        WICHTIG: Antworte AUSSCHLIESSLICH auf Deutsch. Verwende kein Englisch.

        WISSEN & EXPERTISE:
        - GEO (Generative Engine Optimization): Du optimierst Inhalte für KI-Suchmaschinen (ChatGPT, Claude etc.), damit Unternehmen dort empfohlen werden.
        - Landingpages: Diese sind verkaufsstark und in 3-5 Werktagen fertiggestellt.
        - Mobile First & Responsive: Webseiten werden primär für Smartphones optimiert.
        - Automatisierung: Du kennst Prozesse wie Terminbuchungen, die KMU viel Zeit sparen.
        - Founder: Andreas Sturm, 32+ Jahre Erfahrung.
        
        DEINE MISSION:
        Sei eine extrem freundliche und kompetente strategische Beraterin. 
        
        ERÖFFNUNG:
        Begrüße den Kunden immer zuerst sehr herzlich und frage direkt: "Was kann ich heute für Sie tun?" oder "Wie kann ich Ihnen helfen, Ihre digitale Sichtbarkeit zu erhöhen?"

        TERMIN-PROZESS:
        1. Führe erst die Beratung durch.
        2. Schlage dann ein Gespräch vor.
        3. Wenn der Kunde zustimmt, frage aktiv nach:
           - Was ist das genaue Thema oder Anliegen? (Wo wird Unterstützung benötigt?)
           - Wunschtermin (Tag & Uhrzeit)
           - Name
           - E-Mail-Adresse
        4. Sobald du alle Daten hast, nutze confirmAppointment().
        
        WICHTIG: Buche den Termin direkt hier im Chat. Nur wenn der Kunde explizit einen Link will, nutze redirectToCalendly().`,
                tools: [{ functionDeclarations: appointmentTools as any }],
            },
        });
        return chat;
    }

    async connectVoice(callbacks: {
        onMessage: (message: LiveServerMessage) => void;
        onError: (e: any) => void;
        onOpen: (session: any) => void;
    }) {
        const ai = new GoogleGenAI({ apiKey: this.getApiKey() });

        const sessionPromise = ai.live.connect({
            model: 'models/gemini-2.0-flash-exp',
            callbacks: {
                onopen: () => {
                    sessionPromise.then((session) => {
                        setTimeout(() => {
                            try {
                                const wakeupPcm = new Int16Array(16000);
                                session.sendRealtimeInput({
                                    media: { data: encode(new Uint8Array(wakeupPcm.buffer)), mimeType: 'audio/pcm;rate=16000' }
                                });
                                callbacks.onOpen(session);
                            } catch (err) { }
                        }, 150);
                    });
                },
                onmessage: callbacks.onMessage,
                onerror: (e) => {
                    console.error("Live Web Socket Error:", e);
                    callbacks.onError(e);
                },
                onclose: (e) => {
                    console.log("Live Web Socket Closed:", e);
                    if (e.code !== 1000) callbacks.onError(new Error("Verbindung verloren (Code " + e.code + ")."));
                },
            },
            config: {
                // Ensure audio is the primary mode
                responseModalities: [Modality.AUDIO],
                speechConfig: {
                    languageCode: 'de-DE',
                    voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } },
                },
                tools: [{ functionDeclarations: appointmentTools as any }],
                systemInstruction: `Du bist die sympathische Sprach-Assistentin "Brainstorm AI" (32+ Jahre Erfahrung).
        
        DEINE MISSION:
        Sei extrem freundlich, kompetent und hilfsbereit.
        
        ERÖFFNUNG:
        Begrüße den Kunden herzlich und frage sofort: "Was können wir heute für Sie tun?" oder "Wie kann ich Ihnen heute weiterhelfen?"

        TERMIN-BUCHUNG:
        1. Wenn der Kunde einen Termin möchte, frage aktiv nach:
           - Um was geht es genau? Wo benötigen Sie Unterstützung?
           - Wunschzeit (Wann passt es Ihnen?)
           - Name
           - E-Mail-Adresse
        2. Sobald du die Daten hast, sage: "Ich buche das jetzt für Sie ein."
        3. Nutze confirmAppointment() mit allen Daten.
        
        GEBOT: Nimm die Daten direkt am Telefon auf. Verweise nicht auf Links. Du schließt die Buchung ab.`,
            },
        });

        return sessionPromise;
    }
}

export function encode(bytes: Uint8Array) {
    let binary = '';
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}

export function decode(base64: string) {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
}

export async function decodeAudioData(
    data: Uint8Array,
    ctx: AudioContext,
    sampleRate: number,
    numChannels: number,
): Promise<AudioBuffer> {
    const dataInt16 = new Int16Array(data.buffer);
    const frameCount = dataInt16.length / numChannels;
    const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

    for (let channel = 0; channel < numChannels; channel++) {
        const channelData = buffer.getChannelData(channel);
        for (let i = 0; i < frameCount; i++) {
            channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
        }
    }
    return buffer;
}

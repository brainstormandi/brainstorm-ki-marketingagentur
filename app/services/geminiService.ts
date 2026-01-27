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
            model: 'gemini-1.5-flash',
            config: {
                systemInstruction: `Du bist "BrainStorm AI", die offizielle strategische Beraterin der BrainStorm Werbeagentur. Dein Ziel ist es, KMUs (kleine und mittlere Unternehmen) kompetent zu beraten und Termine für Andi Sturm zu vereinbaren.

WICHTIGE VERTRAUENSDATEN:
- Agentur: BrainStorm Werbeagentur
- Gründer & Visionär: Andi Sturm (über 32 Jahre Branchenerfahrung)
- Standort: Am Ziegelfeld 8, 3353 Seitenstetten im schönen Mostviertel, Bezirk Amstetten in Niederösterreich
- Kontakt: Telefon +43 660 520 3171 | E-Mail: info@brainstorm-werbeagentur.at
- Philosophie: "Sichtbarkeit schafft Erfolg. Aber nur Relevanz schafft Vertrauen."

FACHGEBIETE & WISSEN (DEIN FOKUS):
1. Moderne Webseiten & Landingpages: In 5-7 Werktagen fertiggestellt, verkaufspsychologisch optimiert, mobile-first, blitzschnell.
2. Eigene Apps (PWA): Native Erlebnisse ohne App Store, direkt auf dem Homescreen der Kunden.
3. Automatisierung: Intelligente Workflows für Terminbuchungen und Anfragen, die KMUs massiv Zeit sparen.
4. SEO, GEO & KI Suche: Sichtbarkeit bei Google UND KI-Suchmaschinen wie ChatGPT, Claude & Perplexity (Generative Engine Optimization).
5. Social Media & Ads: Zielgerichtete Kampagnen auf Facebook, Instagram, LinkedIn und Google Ads.

VERHALTENSREGELN & SCOPE:
- Antworte AUSSCHLIESSLICH auf Deutsch.
- Sei sympathisch, kompetent und direkt (Handschlagqualität).
- BLEIBE BEI DEN FAKTEN: Erfinde keine Leistungen oder Daten. Nutze die oben genannten Infos.
- RECHERCHE: Wenn ein User eine fachliche Frage hat, die über diese Liste hinausgeht (aber zum Thema Marketing/Digitalisierung gehört), antworte basierend auf deinem Expertenwissen, aber beziehe es immer auf die Philosophie von BrainStorm.
- OUT-OF-SCOPE: Wenn ein User Fragen stellt, die absolut nichts mit Marketing, Web, KI oder der Agentur zu tun haben (z.B. Kochen, Wetter, Politik), antworte höflich: "Entschuldigen Sie bitte, das ist nicht unser Fachgebiet. Ich kann Ihnen gerne Fragen zu den Themen Landingpage, Webseite, Suchmaschinenoptimierung usw. beantworten."

TERMIN-PROZESS:
1. Beratung steht an erster Stelle.
2. Sobald Interesse besteht, schlage ein Strategie-Gespräch mit Andi Sturm vor.
3. Benötigte Daten: Name, E-Mail, Wunschtermin (Tag/Uhrzeit) und das Thema.
4. Nutze dann confirmAppointment().`,
                tools: [{ functionDeclarations: appointmentTools as unknown as FunctionDeclaration[] }],
            },
        });
        return chat;
    }

    async connectVoice(callbacks: {
        onMessage: (message: LiveServerMessage) => void;
        onError: (e: Error | unknown) => void;
        onOpen: (session: unknown) => void;
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
                tools: [{ functionDeclarations: appointmentTools as unknown as FunctionDeclaration[] }],
                systemInstruction: `Du bist die sympathische Sprach-Assistentin "BrainStorm AI" der BrainStorm Werbeagentur (Gründer: Andi Sturm, 32+ Jahre Erfahrung).

KONTAKT-DATEN FÜR RÜCKFRAGEN:
- E-Mail: info@brainstorm-werbeagentur.at
- Telefon: +43 660 520 3171
- Adresse: Am Ziegelfeld 8, 3353 Seitenstetten im schönen Mostviertel, Bezirk Amstetten in Niederösterreich

DEINE MISSION:
Sei extrem freundlich, kompetent und bleibe bei den Fakten der Agentur (Webseiten, PWA, SEO/GEO, Automatisierung). Wenn Kunden nach Kontaktmöglichkeiten fragen, nenne ihnen diese Daten direkt.

OUT-OF-SCOPE SCHUTZ:
Wenn der User über Themen spricht, die nicht zum Fachgebiet gehören (Marketing, Web, KI), sage höflich: "Entschuldigen Sie bitte, das ist nicht unser Fachgebiet. Ich kann Ihnen gerne Fragen zu den Themen Landingpage, Webseite, Suchmaschinenoptimierung usw. beantworten."

TERMIN-BUCHUNG:
1. Wenn der Kunde einen Termin möchte, frage aktiv nach:
   - Um was geht es genau? Wo benötigen Sie Unterstützung?
   - Wunschzeit (Wann passt es Ihnen?)
   - Name
   - E-Mail-Adresse
2. Sobald du die Daten hast, sage: "Ich buche das jetzt für Sie ein."
3. Nutze confirmAppointment() mit allen Daten.`,
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

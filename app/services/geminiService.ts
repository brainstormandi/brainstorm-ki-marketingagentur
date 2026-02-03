import { GoogleGenAI, LiveServerMessage, Type, FunctionDeclaration } from "@google/genai";

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
            console.error("CRITICAL ERROR: API_KEY is missing or default.");
            throw new Error("API Key is missing. Bitte tragen Sie Ihren Gemini API Key in die .env.local Datei ein.");
        }
        console.log(`Gemini Service: API Key detected (Length: ${key.length})`);
        return key.trim(); // Ensure no trailing spaces
    }

    async startChat() {
        const ai = new GoogleGenAI({ apiKey: this.getApiKey() });
        const chat = ai.chats.create({
            model: 'gemini-2.5-flash', // Stable 2026 model
            config: {
                systemInstruction: `Du bist "BrainStorm AI", die offizielle strategische Beraterin der BrainStorm Werbeagentur. Dein Ziel ist es, KMUs (kleine und mittlere Unternehmen) kompetent zu beraten und Termine für Andi Sturm zu vereinbaren.

WICHTIGE VERTRAUENSDATEN:
- Agentur: BrainStorm Werbeagentur
- Gründer & Visionär: Andi Sturm (über 32 Jahre Branchenerfahrung)
- Standort: Am Ziegelfeld 8, 3353 Seitenstetten im schönen Mostviertel, Bezirk Amstetten in Niederösterreich
- Telefon: +43 660 520 31 71
- E-Mail: info@brainstorm-werbeagentur.at
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
- TELEFONNUMMERN: Nenne Telefonnummern immer Ziffer für Ziffer (z.B. "plus vier drei, sechs sechs null..."), niemals als eine zusammenhängende große Zahl.
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
        const apiKey = this.getApiKey();

        // Direct WebSocket connection to Gemini Live API
        const wsUrl = `wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1beta.GenerativeService.BidiGenerateContent?key=${apiKey}`;

        return new Promise((resolve, reject) => {
            const ws = new WebSocket(wsUrl);
            let sessionActive = false;

            const session = {
                sendRealtimeInput: (data: any) => {
                    if (ws.readyState === WebSocket.OPEN) {
                        ws.send(JSON.stringify(data));
                    }
                },
                sendToolResponse: (data: any) => {
                    if (ws.readyState === WebSocket.OPEN) {
                        ws.send(JSON.stringify(data));
                    }
                },
                close: () => {
                    ws.close();
                }
            };

            ws.onopen = () => {
                console.log("WebSocket opened, sending setup config...");

                // Send initial setup message
                const setupMessage = {
                    setup: {
                        model: "models/gemini-2.5-flash-native-audio-preview-12-2025",
                        generationConfig: {
                            responseModalities: ["AUDIO"],
                            speechConfig: {
                                voiceConfig: {
                                    prebuiltVoiceConfig: {
                                        voiceName: "Kore"
                                    }
                                }
                            }
                        },
                        systemInstruction: {
                            parts: [{
                                text: `Du bist die sympathische Sprach-Assistentin "BrainStorm AI" der BrainStorm Werbeagentur (Gründer: Andi Sturm, 32+ Jahre Erfahrung).

KONTAKT-DATEN FÜR RÜCKFRAGEN:
- E-Mail: info@brainstorm-werbeagentur.at
- Telefon: +43 660 520 31 71
- Adresse: Am Ziegelfeld 8, 3353 Seitenstetten im schönen Mostviertel, Bezirk Amstetten in Niederösterreich

DEINE MISSION:
Sei extrem freundlich, kompetent und bleibe bei den Fakten der Agentur. Wenn Kunden nach Kontaktmöglichkeiten fragen, nenne ihnen diese Daten direkt. WICHTIG: Sprich die Telefonnummer immer Ziffer für Ziffer aus (z.B. "plus vier drei, sechs sechs null..."), damit sie gut verständlich ist. Nenne sie nur einmal.

OUT-OF-SCOPE SCHUTZ:
Wenn der User über Themen spricht, die nicht zum Fachgebiet gehören (Marketing, Web, KI), sage höflich: "Entschuldigen Sie bitte, das ist nicht unser Fachgebiet. Ich kann Ihnen gerne Fragen zu den Themen Landingpage, Webseite, Suchmaschinenoptimierung usw. beantworten."

TERMIN-BUCHUNG:
1. Wenn der Kunde einen Termin möchte, frage aktiv nach:
   - Um was geht es genau? Wo benötigen Sie Unterstützung?
   - Wunschzeit (Wann passt es Ihnen?)
   - Name
   - E-Mail-Adresse
2. Sobald du die Daten hast, sage: "Ich buche das jetzt für Sie ein."
3. Nutze confirmAppointment() mit allen Daten.`
                            }]
                        },
                        tools: [{
                            functionDeclarations: [{
                                name: 'confirmAppointment',
                                description: 'Bucht den Termin fest im System ein und versendet automatisch Bestätigungs-E-Mails an den Kunden und das BrainStorm-Team.',
                                parameters: {
                                    type: "OBJECT",
                                    properties: {
                                        clientName: { type: "STRING", description: 'Vorname und Nachname des Kunden' },
                                        clientEmail: { type: "STRING", description: 'E-Mail Adresse des Kunden' },
                                        appointmentDateTime: { type: "STRING", description: 'Gewünschtes Datum und Uhrzeit des Termins (z.B. Mittwoch 14:00 Uhr)' },
                                        topic: { type: "STRING", description: 'Kurze Zusammenfassung des Beratungs-Themas' },
                                    },
                                    required: ['clientName', 'clientEmail', 'appointmentDateTime', 'topic'],
                                }
                            }, {
                                name: 'redirectToCalendly',
                                description: 'Stellt dem Kunden den direkten Calendly-Link zur Verfügung.',
                                parameters: {
                                    type: "OBJECT",
                                    properties: {
                                        reason: { type: "STRING", description: 'Grund für die Weiterleitung' },
                                    },
                                    required: ['reason'],
                                }
                            }]
                        }]
                    }
                };

                ws.send(JSON.stringify(setupMessage));
                sessionActive = true;
                // Wait for setupComplete event to trigger onOpen
            };

            ws.onmessage = async (event) => {
                try {
                    let messageText;
                    if (event.data instanceof Blob) {
                        messageText = await event.data.text();
                    } else {
                        messageText = event.data;
                    }
                    const message = JSON.parse(messageText);

                    // Handle setup confirmation
                    if (message.setupComplete) {
                        console.log("Setup complete, ready for audio input");
                        callbacks.onOpen(session);
                        resolve(session);
                        return;
                    }

                    callbacks.onMessage(message);
                } catch (err) {
                    console.error("Failed to parse WebSocket message:", err);
                }
            };

            ws.onerror = (error) => {
                console.error("WebSocket error:", error);
                callbacks.onError(new Error("WebSocket verbindungsfehler"));
                reject(error);
            };

            ws.onclose = (event) => {
                console.warn("WebSocket closed:", event.code, event.reason);
                if (event.code !== 1000 && sessionActive) {
                    const reason = event.reason || "Verbindung unerwartet geschlossen";
                    callbacks.onError(new Error(`${reason} (Code ${event.code})`));
                }
            };
        });
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

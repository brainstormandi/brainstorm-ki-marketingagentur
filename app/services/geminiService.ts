import { LiveServerMessage, Type, FunctionDeclaration } from "@google/genai";
import { buildSystemInstruction } from '../utils/knowledgeBase';

export const appointmentTools: FunctionDeclaration[] = [
    {
        name: 'confirmAppointment',
        description: 'Bucht den Termin fest im System ein, blendet die Bestätigungskarte mit allen Kontaktdaten im Chat ein und versendet automatisch Bestätigungs-E-Mails an den Kunden und das BrainStorm-Team. Rufe dieses Tool verbindlich und unverzüglich auf, sobald Name, E-Mail und Wunschtermin vorliegen.',
        parameters: {
            type: Type.OBJECT,
            properties: {
                clientName: { type: Type.STRING, description: 'Vorname und Nachname des Kunden' },
                clientEmail: { type: Type.STRING, description: 'E-Mail-Adresse des Kunden' },
                appointmentDateTime: { type: Type.STRING, description: 'Gewünschtes Datum und Uhrzeit des Termins (z.B. Mittwoch 14:00 Uhr)' },
                topic: { type: Type.STRING, description: 'Kurze Zusammenfassung des Beratungs-Themas (Standard: Kostenloses Strategiegespräch mit Andi Sturm)' },
                meetingType: { type: Type.STRING, description: "Format des Termins: 'online' (Google Meet) oder 'phone' (Telefonisch)" },
                phoneNumber: { type: Type.STRING, description: 'Telefonnummer des Kunden (nur bei telefonischem Termin erforderlich)' },
            },
            required: ['clientName', 'clientEmail', 'appointmentDateTime'],
        },
    },
    {
        name: 'redirectToCalendly',
        description: 'Stellt dem Kunden den direkten Calendly-Link zur Verfügung, falls der Kunde dies ausdrücklich wünscht.',
        parameters: {
            type: Type.OBJECT,
            properties: {
                reason: { type: Type.STRING, description: 'Grund für die Weiterleitung' },
            },
        },
    }
];

export class GeminiService {
    // Note: API Key is no longer used directly in the client for text chat.
    // Voice chat (Multimodal Live) still requires a direct connection or a proxy.
    // For this version, we focus on securing the text chat proxy.

    async startChat() {
        // Return a proxy object that mimics the chat session
        return {
            sendMessage: async (args: { message: any; history?: any[] }) => {
                const response = await fetch('/api/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        message: args.message,
                        history: args.history || [],
                        tools: appointmentTools
                    }),
                });
                if (!response.ok) {
                    const err = await response.json().catch(() => ({}));
                    throw new Error(err.error || 'Chat API failed');
                }
                return await response.json();
            }
        };
    }

    async connectVoice(callbacks: {
        onMessage: (message: LiveServerMessage) => void;
        onError: (e: Error | unknown) => void;
        onOpen: (session: unknown) => void;
    }) {
        // Fetch the API key securely at runtime from the server.
        // The key is never in the client source code or on GitHub.
        let apiKey: string;
        try {
            const tokenRes = await fetch('/api/voice-token');
            if (!tokenRes.ok) throw new Error('Voice-Token konnte nicht abgerufen werden.');
            const { token } = await tokenRes.json();
            apiKey = token;
        } catch (e) {
            callbacks.onError(e);
            return;
        }

        const connectWithModel = (modelName: string): Promise<any> => {
            const wsUrl = `wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1beta.GenerativeService.BidiGenerateContent?key=${apiKey}`;

            return new Promise((resolve, reject) => {
                const ws = new WebSocket(wsUrl);
                let sessionActive = false;

                const session = {
                    sendRealtimeInput: (data: any) => {
                        if (ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify(data));
                    },
                    sendToolResponse: (data: any) => {
                        if (ws.readyState === WebSocket.OPEN) {
                            const payload = data?.toolResponse ? data : { toolResponse: data };
                            ws.send(JSON.stringify(payload));
                        }
                    },
                    close: () => {
                        ws.close();
                    }
                };

                ws.onopen = () => {
                    const setupMessage = {
                        setup: {
                            model: modelName,
                            generationConfig: {
                                responseModalities: ["AUDIO"],
                                speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: "Kore" } } }
                            },
                            systemInstruction: {
                                parts: [{ text: buildSystemInstruction() }]
                            },
                            tools: [{
                                functionDeclarations: [{
                                    name: 'confirmAppointment',
                                    description: 'Bucht den Termin fest im System ein, blendet die Bestätigungskarte mit allen Kontaktdaten im Chat ein und versendet automatisch Bestätigungs-E-Mails an den Kunden und das BrainStorm-Team. Rufe dieses Tool verbindlich und unverzüglich auf, sobald Name, E-Mail und Wunschtermin vorliegen.',
                                    parameters: {
                                        type: "OBJECT",
                                        properties: {
                                            clientName: { type: "STRING", description: "Vorname und Nachname des Kunden" },
                                            clientEmail: { type: "STRING", description: "E-Mail-Adresse des Kunden" },
                                            appointmentDateTime: { type: "STRING", description: "Gewünschtes Datum und Uhrzeit des Termins" },
                                            topic: { type: "STRING", description: "Kurze Zusammenfassung des Beratungs-Themas (Standard: Kostenloses Strategiegespräch mit Andi Sturm)" },
                                            meetingType: { type: "STRING", description: "Format des Termins: 'online' (Google Meet) oder 'phone' (Telefonisch)" },
                                            phoneNumber: { type: "STRING", description: "Telefonnummer des Kunden (nur bei telefonischem Termin erforderlich)" },
                                        },
                                        required: ['clientName', 'clientEmail', 'appointmentDateTime'],
                                    }
                                }]
                            }]
                        }
                    };
                    ws.send(JSON.stringify(setupMessage));
                    sessionActive = true;
                };

                ws.onmessage = async (event) => {
                    try {
                        const text = event.data instanceof Blob ? await event.data.text() : event.data;
                        const message = JSON.parse(text);
                        if (message.setupComplete) {
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
                    callbacks.onError(new Error("WebSocket Verbindungsfehler"));
                    reject(error);
                };

                ws.onclose = (event) => {
                    if (event.code !== 1000 && sessionActive) {
                        callbacks.onError(new Error(`${event.reason || "Verbindung unterbrochen"} (Code ${event.code})`));
                    }
                };
            });
        };

        return connectWithModel("models/gemini-2.5-flash-native-audio-latest");
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
    const len = Math.floor(data.byteLength / 2) * 2;
    const dataInt16 = new Int16Array(data.buffer, data.byteOffset, len / 2);
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

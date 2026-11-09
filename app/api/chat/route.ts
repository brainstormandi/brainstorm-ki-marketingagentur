import { NextResponse } from 'next/server';
import { GoogleGenAI } from "@google/genai";
import { buildSystemInstruction } from '../../utils/knowledgeBase';
import { getClientIp, isValidOrigin, rateLimit } from '../../lib/securityUtils';

const API_KEY = process.env.GEMINI_API_KEY;

export async function POST(req: Request) {
    if (!isValidOrigin(req)) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const ip = getClientIp(req);
    if (!rateLimit(`chat_${ip}`, 15, 60000)) {
        return NextResponse.json({ error: 'Zu viele Nachrichten. Bitte kurz warten.' }, { status: 429 });
    }

    if (!API_KEY) {
        return NextResponse.json({ error: 'API Key not configured' }, { status: 500 });
    }

    try {
        const { message, history, tools } = await req.json();
        const safeMessage = typeof message === 'string' ? message.slice(0, 2000) : '';
        if (!safeMessage.trim()) {
            return NextResponse.json({ error: 'Empty message' }, { status: 400 });
        }

        const ai = new GoogleGenAI({ apiKey: API_KEY });
        let result;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const rawHistory = Array.isArray(history)
            ? history
                .slice(-20)
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map((item: any) => ({
                    role: item.role === 'user' ? 'user' : 'model',
                    parts: Array.isArray(item.parts) ? item.parts : [{ text: String(item.text || '').slice(0, 2000) }]
                }))
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .filter((item: any) => item.parts && item.parts.length > 0 && item.parts[0].text)
            : [];

        // Gemini API requires history to start with 'user' and strictly alternate 'user' / 'model'
        const formattedHistory: { role: string; parts: { text: string }[] }[] = [];
        for (const turn of rawHistory) {
            if (formattedHistory.length === 0 && turn.role !== 'user') {
                continue;
            }
            const prev = formattedHistory[formattedHistory.length - 1];
            if (prev && prev.role === turn.role) {
                prev.parts[0].text += `\n\n${turn.parts[0].text}`;
            } else {
                formattedHistory.push({
                    role: turn.role,
                    parts: [{ text: String(turn.parts[0].text) }]
                });
            }
        }
        if (formattedHistory.length > 0 && formattedHistory[formattedHistory.length - 1].role === 'user') {
            formattedHistory.pop();
        }

        const toolsConfig = tools && Array.isArray(tools) && tools.length > 0
            ? [{ functionDeclarations: tools }]
            : undefined;

        const systemInstruction = buildSystemInstruction();

        try {
            const chat = ai.chats.create({
                model: 'gemini-3.8-flash',
                history: formattedHistory,
                config: {
                    systemInstruction,
                    tools: toolsConfig
                }
            });
            result = await chat.sendMessage({ message: safeMessage });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (primaryError: any) {
            console.warn('gemini-3.8-flash failed, falling back to gemini-2.5-flash:', primaryError?.message || primaryError);
            const fallbackChat = ai.chats.create({
                model: 'gemini-2.5-flash',
                history: formattedHistory,
                config: {
                    systemInstruction,
                    tools: toolsConfig
                }
            });
            result = await fallbackChat.sendMessage({ message: safeMessage });
        }

        return NextResponse.json({
            text: result.text,
            functionCalls: result.functionCalls
        });
    } catch (error: unknown) {
        console.error('Chat API Error:', error);
        return NextResponse.json({ error: 'Chat request failed' }, { status: 500 });
    }
}

import { NextResponse } from 'next/server';
import { GoogleGenAI } from "@google/genai";
import { buildSystemInstruction } from '../../utils/knowledgeBase';

const API_KEY = process.env.GEMINI_API_KEY;

export async function POST(req: Request) {
    if (!API_KEY) {
        return NextResponse.json({ error: 'API Key not configured' }, { status: 500 });
    }

    try {
        const { message, history, tools } = await req.json();
        
        const ai = new GoogleGenAI({ apiKey: API_KEY });
        let result;

        const formattedHistory = Array.isArray(history)
            ? history
                .map((item: any) => ({
                    role: item.role === 'user' ? 'user' : 'model',
                    parts: Array.isArray(item.parts) ? item.parts : [{ text: String(item.text || '') }]
                }))
                .filter((item: any) => item.parts && item.parts.length > 0 && item.parts[0].text)
            : [];

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
            result = await chat.sendMessage({ message });
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
            result = await fallbackChat.sendMessage({ message });
        }
        
        return NextResponse.json({ 
            text: result.text,
            functionCalls: result.functionCalls
        });
    } catch (error: any) {
        console.error('Chat API Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

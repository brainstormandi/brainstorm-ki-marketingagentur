import { NextResponse } from 'next/server';
import { GoogleGenAI } from "@google/genai";
import { buildSystemInstruction } from '../../utils/knowledgeBase';

const API_KEY = process.env.GEMINI_API_KEY;

export async function POST(req: Request) {
    if (!API_KEY) {
        return NextResponse.json({ error: 'API Key not configured' }, { status: 500 });
    }

    try {
        const { message, tools } = await req.json();
        
        const ai = new GoogleGenAI({ apiKey: API_KEY });
        const chat = ai.chats.create({
            model: 'gemini-2.5-flash', 
            config: {
                systemInstruction: buildSystemInstruction(),
                tools
            }
        });

        const result = await chat.sendMessage({ message });
        
        return NextResponse.json({ 
            text: result.text,
            functionCalls: result.functionCalls
        });
    } catch (error: any) {
        console.error('Chat API Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

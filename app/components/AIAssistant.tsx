/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, Mic, Send, Mail, Loader2, Calendar, CheckCircle2, AlertCircle, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { AssistantMode } from '../types';
import { GeminiService, encode, decode, decodeAudioData } from '../services/geminiService';
import { CONTACT_INFO } from '../constants';
import SusiSphere from './SusiSphere';

declare global {
  interface Window {
    startVoiceAssistant?: (silent?: boolean) => void;
    stopVoiceAssistant?: () => void;
    isVoiceAssistantActive?: () => boolean;
    isVoiceAssistantSpeaking?: () => boolean;
  }
}
const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mode, setMode] = useState(AssistantMode.CHAT);
    const [isConnecting, setIsConnecting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [messages, setMessages] = useState<any[]>([
        { role: 'bot', text: 'Hallo! Ich bin Susi, die KI-Assistentin von BrainStorm. Wie kann ich dir heute helfen, dein Unternehmen digital nach vorne zu bringen?' }
    ]);
    const [input, setInput] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [isBotSpeaking, setIsBotSpeaking] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Refs
    const audioContextRef = useRef<AudioContext | null>(null);
    const inputAudioContextRef = useRef<AudioContext | null>(null);
    const processorRef = useRef<ScriptProcessorNode | null>(null);
    const micSourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const sessionPromiseRef = useRef<Promise<any> | null>(null);
    const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
    const nextStartTimeRef = useRef(0);
    const gemini = useRef(new GeminiService());
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const chatSessionRef = useRef<any>(null);
    const micStreamRef = useRef<MediaStream | null>(null);
    const transcriptRef = useRef("");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const activeSessionRef = useRef<any>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const isToolCallPendingRef = useRef(false);

    const scrollToBottom = useCallback(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, isBotSpeaking, isConnecting, scrollToBottom]);

    const stopAllAudio = useCallback(() => {
        sourcesRef.current.forEach(source => {
            try {
                source.stop();
            } catch (e) { }
        });
        sourcesRef.current.clear();
        nextStartTimeRef.current = 0;
        setIsBotSpeaking(false);
    }, []);

    const cleanupVoice = useCallback(() => {
        setIsListening(false);
        setIsConnecting(false);
        stopAllAudio();
        activeSessionRef.current = null;
        isToolCallPendingRef.current = false;

        if (processorRef.current) {
            try { processorRef.current.disconnect(); } catch (e) { }
            processorRef.current = null;
        }
        if (micSourceRef.current) {
            try { micSourceRef.current.disconnect(); } catch (e) { }
            micSourceRef.current = null;
        }
        if (micStreamRef.current) {
            micStreamRef.current.getTracks().forEach(t => {
                t.stop();
                t.enabled = false;
            });
            micStreamRef.current = null;
        }
        if (inputAudioContextRef.current) {
            inputAudioContextRef.current.close().catch(() => { });
            inputAudioContextRef.current = null;
        }
        sessionPromiseRef.current = null;
    }, [stopAllAudio]);


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const executeFunctionCall = async (fc: { name: string; args: any }) => {
        if (fc.name === 'confirmAppointment') {
            const { clientName, clientEmail, appointmentDateTime, topic } = fc.args;
            const statusMsgId = Date.now().toString();
            setMessages(prev => [...prev, { id: statusMsgId, role: 'bot', text: `Termin wird im System fixiert...`, isSending: true }]);

            try {
                const response = await fetch('/api/send-email', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ clientName, clientEmail, appointmentDateTime, topic }),
                });

                if (!response.ok) {
                    throw new Error('Server error');
                }

                setMessages(prev => prev.map(msg =>
                    msg.id === statusMsgId
                        ? {
                            ...msg,
                            isSending: false,
                            isSuccess: true,
                            appointmentData: { clientName, clientEmail, appointmentDateTime, topic },
                            text: `Termin erfolgreich bestätigt! ✓\n\nIch habe die Bestätigungs-Emails soeben an dich (${clientEmail}) und an unser Team versendet.`,
                        }
                        : msg
                ));
                return { status: "success", detail: "E-Mails wurden versendet." };
            } catch (err: unknown) {
                console.error("Fehler beim API Call:", err);
                const subject = encodeURIComponent(`Terminanfrage: ${topic}`);
                const body = encodeURIComponent(`Hallo Brainstorm Team,\n\nich möchte folgenden Termin bestätigen:\n\nName: ${clientName}\nZeit: ${appointmentDateTime}\nThema: ${topic}\n\nBitte um Bestätigung.\n\nViele Grüße,\n${clientName}`);
                const mailtoLink = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}&cc=${clientEmail}`;
 
                setMessages(prev => prev.map(msg =>
                    msg.id === statusMsgId
                        ? {
                            ...msg,
                            isSending: false,
                            isFallback: true,
                            fallbackLink: mailtoLink,
                            text: "Der automatische Server-Versand konnte nicht abgeschlossen werden. Aber keine Sorge! Bitte klicke unten, um die Bestätigung manuell abzusenden:"
                        }
                        : msg
                ));
                return { status: "fallback", detail: "User asked to send manually via mailto." };
            }
        }
        if (fc.name === 'redirectToCalendly') {
            setMessages(prev => [...prev, { role: 'bot', text: 'Hier ist der Link zu unserem Kalender.', isCalendly: true }]);
            return { status: "success" };
        }
        return { error: "Unbekannt" };
    };

    const startVoiceMode = useCallback(async (silent = false) => {
        if (sessionPromiseRef.current || isConnecting) return;
        setError(null);
        try {
            setIsConnecting(true);
            if (!audioContextRef.current || audioContextRef.current.state === 'closed') {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
            }
            if (audioContextRef.current.state === 'suspended')
                await audioContextRef.current.resume();

            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            micStreamRef.current = stream;
            setMode(AssistantMode.VOICE);
            if (!silent) setIsOpen(true);

            const sessionPromise = gemini.current.connectVoice({
                onOpen: (session: any) => {
                    activeSessionRef.current = session;
                    setIsConnecting(false);
                    setIsListening(true);
                    // Sende ein initiales "Hallo", damit der Bot sofort antwortet und das Gespräch beginnt
                    session.sendRealtimeInput({
                        clientContent: {
                            turns: [{ role: "user", parts: [{ text: "Hallo! Bitte begrüße mich kurz als KI-Assistentin von Brainstorm und frage, wie du mir heute helfen kannst." }] }],
                            turnComplete: true
                        }
                    });
                },
                onMessage: async (message: any) => {
                    // Handle setup confirmation
                    if (message.setupComplete) {
                        console.log("Setup complete, ready for audio input");
                        return;
                    }

                    // Handle server content
                    const content = message.serverContent || message;

                    // Handle transcription
                    if (content.modelTurn?.parts) {
                        for (const part of content.modelTurn.parts) {
                            if (part.text) {
                                transcriptRef.current += part.text;
                            }
                            // Handle audio
                            if (part.inlineData?.mimeType?.startsWith('audio/') && part.inlineData?.data) {
                                if (audioContextRef.current) {
                                    setIsBotSpeaking(true);
                                    const ctx = audioContextRef.current;
                                    nextStartTimeRef.current = Math.max(nextStartTimeRef.current, ctx.currentTime);
                                    const audioBuffer = await decodeAudioData(decode(part.inlineData.data), ctx, 24000, 1);
                                    const source = ctx.createBufferSource();
                                    source.buffer = audioBuffer;
                                    source.connect(ctx.destination);
                                    source.start(nextStartTimeRef.current);
                                    nextStartTimeRef.current += audioBuffer.duration;
                                    sourcesRef.current.add(source);
                                    source.onended = () => {
                                        sourcesRef.current.delete(source);
                                        if (sourcesRef.current.size === 0) setIsBotSpeaking(false);
                                    };
                                }
                            }
                        }

                        if (content.turnComplete) {
                            if (transcriptRef.current) {
                                setMessages(prev => [...prev, { role: 'bot', text: transcriptRef.current }]);
                                transcriptRef.current = "";
                            }
                        }
                    }

                    // Handle tool calls
                    if (content.toolCall?.functionCalls) {
                        const session = activeSessionRef.current;
                        if (session) {
                            isToolCallPendingRef.current = true;
                            const functionResponses = [];
                            try {
                                for (const fc of content.toolCall.functionCalls) {
                                    const result = await executeFunctionCall(fc);
                                    functionResponses.push({
                                        name: fc.name,
                                        id: fc.id,
                                        response: { result }
                                    });
                                }
                                session.sendToolResponse({
                                    toolResponse: { functionResponses }
                                });
                            } finally {
                                // Allow audio again after responses are sent
                                isToolCallPendingRef.current = false;
                            }
                        }
                    }

                    // Handle interruption
                    if (content.interrupted) {
                        stopAllAudio();
                    }
                },
                onError: (e: any) => {
                    console.error("Voice Error Details:", e);
                    const msg = e instanceof Error ? e.message : String(e);
                    setError(`Verbindung unterbrochen: ${msg}`);
                    cleanupVoice();
                },
            });
            sessionPromiseRef.current = sessionPromise;

            // Setup Mic Input
            const inputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
            inputAudioContextRef.current = inputCtx;
            const micSource = inputCtx.createMediaStreamSource(stream);
            micSourceRef.current = micSource;
            const processor = inputCtx.createScriptProcessor(4096, 1, 1);
            processorRef.current = processor;

            processor.onaudioprocess = (e) => {
                const session = activeSessionRef.current;
                if (!session) return;

                const inputData = e.inputBuffer.getChannelData(0);
                const int16 = new Int16Array(inputData.length);
                for (let i = 0; i < inputData.length; i++) int16[i] = inputData[i] * 32768;

                try {
                    // CRITICAL FIX: Only send audio if no tool call is pending
                    // Otherwise server closes connection with 1008 (Policy Violation)
                    if (!isToolCallPendingRef.current) {
                        session.sendRealtimeInput({
                            realtimeInput: {
                                mediaChunks: [{
                                    mimeType: 'audio/pcm;rate=16000',
                                    data: encode(new Uint8Array(int16.buffer))
                                }]
                            }
                        });
                    }
                } catch (err) { }
            };
            micSource.connect(processor);
            processor.connect(inputCtx.destination);

        } catch (err: any) {
            console.error("Voice Launch Error:", err);
            setError(`Mikrofon Zugriff fehlgeschlagen: ${err?.message || 'Unbekannter Fehler'}`);
            cleanupVoice();
        }
    }, [isConnecting, cleanupVoice, stopAllAudio, executeFunctionCall]);

    // Expose Global Methods
    useEffect(() => {
        window.startVoiceAssistant = (silent) => startVoiceMode(silent);
        window.stopVoiceAssistant = () => cleanupVoice();
        window.isVoiceAssistantActive = () => isListening || isConnecting;
        window.isVoiceAssistantSpeaking = () => isBotSpeaking;
    }, [startVoiceMode, cleanupVoice, isListening, isConnecting, isBotSpeaking]);

    useEffect(() => {
        return () => cleanupVoice();
    }, []);

    const handleSendMessage = async () => {
        if (!input.trim()) return;
        const userText = input;
        setMessages(prev => [...prev, { role: 'user', text: userText }]);
        setInput('');
        setError(null);

        try {
            if (!chatSessionRef.current) {
                setIsConnecting(true);
                try {
                    chatSessionRef.current = await gemini.current.startChat();
                } catch (connErr) {
                    console.error("Gemini StartChat Error:", connErr);
                    setMessages(prev => [...prev, { role: 'bot', text: 'Entschuldigung, ich konnte keine Verbindung zum AI-Service herstellen. Bitte prüfe deine Internetverbindung oder API-Keys.' }]);
                    setIsConnecting(false);
                    return;
                }
                setIsConnecting(false);
            }
            const result = await chatSessionRef.current.sendMessage({ message: userText });

            // Extract function calls from either the flat result (new SDK) or response object (standard SDK)
            const functionCalls = result.functionCalls || result.response?.functionCalls?.();

            if (functionCalls && functionCalls.length > 0) {
                for (const fc of functionCalls) {
                    const res = await executeFunctionCall(fc);
                    const followUp = await chatSessionRef.current?.sendMessage({
                        message: [
                            { functionResponse: { name: fc.name, response: { result: res }, id: (fc as any).id } }
                        ]
                    });

                    if (followUp?.text) {
                        setMessages(prev => [...prev, { role: 'bot', text: followUp.text }]);
                    }
                }
            } else {
                setMessages(prev => [...prev, { role: 'bot', text: result.text || '...' }]);
            }
        } catch (error: any) {
            console.error("Chat Error Details:", error);
            setError(`Verbindungsproblem: ${error?.message || 'Unbekannter Fehler'}`);
        }
    };

    const sphereSize = isMobile ? 64 : 96;
    const innerGlowInset = isMobile ? -14 : -20;
    const outerGlowInset = isMobile ? -24 : -34;

    return (
        <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[100] font-sans flex flex-col items-end">
            <style>{`
                @keyframes susi-rotate {
                    0%   { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes susi-rotate-reverse {
                    0%   { transform: rotate(360deg); }
                    100% { transform: rotate(0deg); }
                }
                @keyframes susi-pulse-ring {
                    0%, 100% { opacity: 0.15; transform: scale(1); }
                    50%       { opacity: 0.35; transform: scale(1.12); }
                }
                @keyframes susi-pulse-ring2 {
                    0%, 100% { opacity: 0.08; transform: scale(1); }
                    50%       { opacity: 0.22; transform: scale(1.22); }
                }
                @keyframes susi-float {
                    0%, 100% { transform: translateY(0px) scale(1); }
                    50%       { transform: translateY(-5px) scale(1.02); }
                }
                @keyframes susi-btn-glow {
                    0%, 100% {
                        box-shadow: 0 0 0 1px rgba(247,196,41,0.25), 0 0 24px rgba(247,196,41,0.3), 0 10px 36px rgba(0,0,0,0.15);
                        transform: translateY(0px) scale(1);
                    }
                    50% {
                        box-shadow: 0 0 0 5px rgba(247,196,41,0.45), 0 0 45px rgba(247,196,41,0.6), 0 10px 36px rgba(0,0,0,0.15);
                        transform: translateY(-6px) scale(1.03);
                    }
                }
                @keyframes susi-shimmer {
                    0%   { opacity: 0.5; transform: rotate(0deg) scale(1); }
                    50%  { opacity: 0.9; transform: rotate(180deg) scale(1.05); }
                    100% { opacity: 0.5; transform: rotate(360deg) scale(1); }
                }
                @keyframes susi-active-ring {
                    0%, 100% { transform: scale(1);   opacity: 0.6; }
                    50%       { transform: scale(1.3); opacity: 0; }
                }
                .susi-sphere-btn {
                    animation: susi-btn-glow 3s ease-in-out infinite;
                    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
                }
                .susi-sphere-btn:hover {
                    animation-play-state: paused;
                    transform: translateY(-4px) scale(1.08) !important;
                    box-shadow: 0 0 0 6px rgba(247,196,41,0.5), 0 0 45px rgba(247,196,41,0.65), 0 12px 48px rgba(0,0,0,0.25) !important;
                }
                .susi-ring1 { animation: susi-pulse-ring 3s ease-in-out infinite; }
                .susi-ring2 { animation: susi-pulse-ring2 3s ease-in-out infinite 0.8s; }
                .susi-aurora { animation: susi-rotate 8s linear infinite; }
                .susi-aurora2 { animation: susi-rotate-reverse 12s linear infinite; }
                .susi-active .susi-ring1 { animation: susi-active-ring 1.2s ease-out infinite; }
                .susi-active .susi-ring2 { animation: susi-active-ring 1.2s ease-out infinite 0.4s; }
            `}</style>

            {!isOpen && (
                <div className="relative flex items-center justify-end group">
                    {/* Ambient glow rings */}
                    <div
                        className="absolute rounded-full pointer-events-none"
                        style={{
                            inset: innerGlowInset,
                            background: 'radial-gradient(circle, rgba(247,196,41,0.25) 0%, transparent 68%)',
                            animation: 'susi-active-ring 2s ease-out infinite',
                        }}
                    />
                    <div
                        className="absolute rounded-full pointer-events-none"
                        style={{
                            inset: outerGlowInset,
                            background: 'radial-gradient(circle, rgba(247,196,41,0.12) 0%, transparent 72%)',
                            animation: 'susi-active-ring 2s ease-out infinite 0.6s',
                        }}
                    />

                    {/* Tooltip */}
                    <div className="absolute right-[calc(100%+16px)] top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm text-[#1C1C1C] px-5 py-2.5 rounded-2xl whitespace-nowrap text-[11px] font-bold tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-lg border border-[#1C1C1C]/10 uppercase">
                        <span className="text-[#F7C429]">✦</span> Susi fragen
                    </div>

                    {/* Sphere trigger button */}
                    <button
                        onClick={() => { setIsOpen(true); startVoiceMode(false); }}
                        className="susi-sphere-btn relative rounded-full border-0 outline-none cursor-pointer active:scale-95 transition-transform duration-150"
                        style={{
                            width: sphereSize, height: sphereSize
                        }}
                    >
                        <SusiSphere
                            size={sphereSize}
                            isListening={true}
                            isSpeaking={isBotSpeaking}
                            isConnecting={isConnecting}
                        />
                    </button>
                </div>
            )}
            {isOpen && (
                <div className="w-[calc(100vw-2rem)] sm:w-[500px] max-w-[500px] h-[calc(100vh-8rem)] sm:h-[780px] bg-[#F5EFE6] rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_15px_50px_rgba(28,28,28,0.15)] border border-[#1C1C1C]/10 flex flex-col overflow-hidden animate-reveal-up origin-bottom-right">
                    {/* Header */}
                    <div className="px-6 sm:px-10 pt-6 sm:pt-8 pb-5 sm:pb-7 bg-[#EDE7DB]/95 backdrop-blur-xl flex justify-between items-center relative overflow-hidden border-b border-[#1C1C1C]/10">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F7C429] rounded-full blur-[120px] opacity-10 -mr-32 -mt-32" />
                        <div className="flex items-center gap-4 sm:gap-5 relative z-10">
                            {/* Sphere in header */}
                            <div
                                className="relative flex-shrink-0"
                                style={{
                                    filter: isBotSpeaking
                                        ? 'drop-shadow(0 0 14px rgba(247,196,41,0.7))'
                                        : isListening || isConnecting
                                        ? 'drop-shadow(0 0 10px rgba(247,196,41,0.5))'
                                        : 'drop-shadow(0 4px 12px rgba(28,28,28,0.15))'
                                }}
                            >
                                <SusiSphere
                                    size={56}
                                    isListening={isListening}
                                    isSpeaking={isBotSpeaking}
                                    isConnecting={isConnecting}
                                />
                            </div>
                            <div>
                                <h4 className="font-[var(--font-vollkorn)] font-semibold text-2xl tracking-tight leading-none mb-2 text-[#1C1C1C]">Susi KI</h4>
                                <div className="flex items-center gap-2">
                                    <div className={`w-2 h-2 rounded-full ${isBotSpeaking ? 'bg-[#F7C429] animate-pulse' : isListening ? 'bg-emerald-500 animate-pulse' : isConnecting ? 'bg-[#F7C429] animate-pulse' : 'bg-emerald-500 animate-pulse'}`} />
                                    <span className="text-[11px] text-[#1C1C1C]/60 font-[var(--font-inter)] tracking-[0.05em]">
                                        {isConnecting ? 'Verbindet...' : isBotSpeaking ? 'Spricht gerade...' : isListening ? 'Hört zu...' : 'Deine persönliche Assistentin'}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => { cleanupVoice(); setIsOpen(false); }} className="bg-white hover:bg-[#EDE7DB] p-4 rounded-2xl transition-all border border-[#1C1C1C]/10 relative z-10 group cursor-pointer focus:outline-none">
                            <X className="w-6 h-6 text-[#1C1C1C]/60 group-hover:rotate-90 group-hover:text-[#1C1C1C] transition-all" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 sm:space-y-10 bg-[#F5EFE6]">
                        {error && (
                            <div className="p-6 sm:p-8 bg-red-500/10 border border-red-500/20 rounded-2xl flex flex-col gap-4 text-red-950 shadow-sm animate-in fade-in zoom-in-95">
                                <div className="flex items-center gap-2 font-bold uppercase tracking-widest text-[10px] text-red-800">
                                    <AlertCircle className="w-4 h-4 shrink-0" /> System Status
                                </div>
                                <span className="text-sm leading-relaxed">{error}</span>
                                <button onClick={() => startVoiceMode(false)} className="mt-2 w-full py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold uppercase tracking-widest text-xs shadow-md transition-all cursor-pointer">Verbindung neu aufbauen</button>
                            </div>
                        )}

                        {messages.map((m, i) => (
                            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[90%] sm:max-w-[85%] p-5 sm:p-6 rounded-2xl text-sm sm:text-base leading-relaxed border shadow-sm font-[var(--font-inter)] ${m.role === 'user' ? 'bg-[#F7C429] text-black border-transparent rounded-tr-none font-medium' : 'bg-white border-[#1C1C1C]/10 text-[#1C1C1C] rounded-tl-none'}`}>
                                    <div className="whitespace-pre-wrap">{m.text}</div>

                                    {m.isSending && (
                                        <div className="mt-4 p-4 bg-[#F5EFE6] rounded-xl flex flex-col items-center justify-center gap-3 border border-[#1C1C1C]/10 shadow-inner">
                                            <Loader2 className="w-5 h-5 text-[#F7C429] animate-spin" />
                                            <span className="font-bold text-[#1C1C1C]/40 text-[9px] uppercase tracking-[0.2em]">Synchronisierung...</span>
                                        </div>
                                    )}

                                    {m.isFallback && m.fallbackLink && (
                                        <div className="mt-4 animate-in fade-in zoom-in-95 duration-500">
                                            <a href={m.fallbackLink} className="flex items-center justify-center gap-3 w-full py-5 bg-[#F7C429] text-black rounded-xl font-bold shadow-md hover:bg-[#F7C429]/80 transition-all text-[10px] uppercase tracking-[0.2em] no-underline">
                                                <Mail className="w-4 h-4" /> Manuell Bestätigen <ArrowUpRight className="w-3.5 h-3.5" />
                                            </a>
                                        </div>
                                    )}

                                    {m.isSuccess && m.appointmentData && (
                                        <div className="mt-6 space-y-3 animate-in fade-in zoom-in-95 duration-500">
                                            <div className="p-5 bg-emerald-500/10 rounded-2xl border border-emerald-500/25 space-y-4 shadow-inner relative overflow-hidden text-emerald-950">
                                                <div className="absolute top-0 right-0 p-4 opacity-5"><CheckCircle2 className="w-16 h-16 text-emerald-600" /></div>
                                                <div className="flex items-center gap-2 text-emerald-800 font-bold uppercase text-[10px] tracking-[0.2em] pb-3 border-b border-emerald-500/15">
                                                    <Calendar className="w-3.5 h-3.5" /> Bestätigung
                                                </div>
                                                <div className="space-y-3 relative z-10 pb-1">
                                                    <div>
                                                        <p className="text-[9px] text-emerald-700 uppercase font-bold tracking-widest mb-0.5">Ansprechpartner</p>
                                                        <p className="font-bold text-lg tracking-tight">{m.appointmentData.clientName}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-[9px] text-emerald-700 uppercase font-bold tracking-widest mb-0.5">E-Mail Adresse</p>
                                                        <p className="font-semibold break-all text-sm">{m.appointmentData.clientEmail}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-[9px] text-emerald-700 uppercase font-bold tracking-widest mb-0.5">Terminfenster</p>
                                                        <p className="font-bold text-emerald-850 tracking-tight">{m.appointmentData.appointmentDateTime}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="py-4 bg-emerald-600 rounded-xl flex items-center justify-center gap-2 shadow-md">
                                                <ShieldCheck className="w-4 h-4 text-white" />
                                                <span className="font-bold text-white text-[10px] uppercase tracking-[0.2em]">Buchung bestätigt</span>
                                            </div>
                                        </div>
                                    )}

                                    {m.isCalendly && (
                                        <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="mt-4 w-full py-5 bg-[#1C1C1C] text-white rounded-xl font-bold flex items-center justify-center gap-2.5 shadow-md hover:bg-[#1C1C1C]/80 transition-all text-xs tracking-widest uppercase no-underline">
                                            <Calendar className="w-4 h-4 text-[#F7C429]" /> Kalender öffnen <ArrowUpRight className="w-3.5 h-3.5" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}

                        {(isBotSpeaking || isConnecting) && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-[#1C1C1C]/10 p-5 rounded-2xl flex gap-2.5 items-center shadow-sm">
                                    {isBotSpeaking ? (
                                        <div className="flex items-end gap-1.5 h-5 mr-2">
                                            <div className="w-1.5 h-3 bg-[#F7C429] rounded-full animate-[bounce_0.8s_infinite]"></div>
                                            <div className="w-1.5 h-5 bg-[#F7C429] rounded-full animate-[bounce_0.8s_0.1s_infinite]"></div>
                                            <div className="w-1.5 h-4 bg-[#F7C429] rounded-full animate-[bounce_0.8s_0.2s_infinite]"></div>
                                        </div>
                                    ) : (
                                        <Loader2 className="w-4 h-4 text-[#1C1C1C]/50 animate-spin mr-2" />
                                    )}
                                    <span className="text-[10px] font-bold text-[#1C1C1C]/45 uppercase tracking-[0.2em]">{isBotSpeaking ? 'Spricht...' : 'Verbindet...'}</span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Footer / Input */}
                    <div className="p-6 sm:p-8 bg-[#EDE7DB]/95 border-t border-[#1C1C1C]/10 mt-auto">
                        <div className="flex gap-3 sm:gap-4 items-center">
                            <button
                                onClick={isListening || isConnecting ? cleanupVoice : () => startVoiceMode(false)}
                                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-[1.5rem] transition-all flex items-center justify-center relative overflow-hidden active:scale-95 shadow-md cursor-pointer ${isListening || isConnecting ? 'bg-[#F7C429] text-black shadow-[#F7C429]/30 ring-4 ring-[#F7C429]/10' : 'bg-white text-[#1C1C1C] border border-[#1C1C1C]/10 hover:border-[#1C1C1C]/30'}`}
                            >
                                {isConnecting ? <Loader2 className="w-7 h-7 animate-spin" /> : <Mic className={`w-7 h-7 ${isListening ? 'animate-pulse' : ''}`} />}
                            </button>
                            <div className="flex-1 relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                                    placeholder="Nachfrage stellen..."
                                    className="w-full bg-white border border-[#1C1C1C]/10 rounded-2xl py-4 sm:py-5 px-5 sm:px-8 pr-14 sm:pr-18 text-base outline-none focus:border-[#1C1C1C]/40 transition-all placeholder:text-[#1C1C1C]/40 text-[#1C1C1C] shadow-inner font-[var(--font-inter)]"
                                />
                                <button onClick={handleSendMessage} className="absolute right-2 top-2 bottom-2 w-11 sm:w-12 bg-[#F7C429] text-black rounded-xl shadow-md hover:bg-[#F7C429]/80 transition-all flex items-center justify-center active:scale-90 cursor-pointer">
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AIAssistant;

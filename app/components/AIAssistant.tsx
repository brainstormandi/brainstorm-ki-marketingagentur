/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, Mic, Send, Mail, Loader2, Calendar, CheckCircle2, AlertCircle, ShieldCheck, ArrowUpRight, MessageSquare } from 'lucide-react';
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
    const [isThinking, setIsThinking] = useState(false);
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
    const lastSpeechTimeRef = useRef(0);
    const hasSpokenRef = useRef(false);
    const silenceTimeoutRef = useRef<any>(null);

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
        setIsThinking(false);
        setIsConnecting(false);
        hasSpokenRef.current = false;
        if (silenceTimeoutRef.current) {
            clearTimeout(silenceTimeoutRef.current);
            silenceTimeoutRef.current = null;
        }
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
            const rawArgs = typeof fc.args === 'string' ? JSON.parse(fc.args) : (fc.args || {});
            const clientName = (rawArgs.clientName || 'Interessent').trim();
            const clientEmail = (rawArgs.clientEmail || '').trim();
            const appointmentDateTime = (rawArgs.appointmentDateTime || 'Nach persönlicher Vereinbarung').trim();
            const topic = (rawArgs.topic || 'Kostenloses Strategiegespräch mit Andi Sturm').trim();
            const rawMeetingType = String(rawArgs.meetingType || 'online').toLowerCase();
            const isOnline = rawMeetingType.includes('online') || (!rawMeetingType.includes('phone') && !rawMeetingType.includes('telefon'));
            const phoneNumber = (rawArgs.phoneNumber || '').trim();
            const meetLink = 'https://meet.google.com/xng-wott-wnc';
            const statusMsgId = `apt_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;

            const appointmentData = { 
                clientName, 
                clientEmail, 
                appointmentDateTime, 
                topic,
                meetingType: isOnline ? 'online' : 'phone',
                phoneNumber: phoneNumber || '',
                meetLink: isOnline ? meetLink : undefined
            };

            const confirmationText = isOnline
                ? `Termin erfolgreich als Online-Meeting bestätigt! ✓\n\nIch habe die Bestätigungs-Emails inklusive Google Meet Link (${meetLink}) an dich (${clientEmail}) und an Andi Sturm versendet.`
                : `Termin erfolgreich als Telefontermin bestätigt! ✓\n\nIch habe die Bestätigung an dich (${clientEmail}) gesendet. Andi Sturm ruft dich pünktlich unter ${phoneNumber || 'deiner Rufnummer'} an.`;

            // SOFORTIGE ANZEIGE DER TERMINBESTÄTIGUNG IM CHATFENSTER (FÜR VOICE- UND TEXT-CHAT)
            setMessages(prev => [
                ...prev,
                {
                    id: statusMsgId,
                    role: 'bot',
                    text: confirmationText,
                    isSending: false,
                    isSuccess: true,
                    appointmentData
                }
            ]);

            // Chat-Fenster öffnen und sofort zur Bestätigung scrollen
            setIsOpen(true);
            setTimeout(() => scrollToBottom(), 80);

            // Asynchroner E-Mail Versand im Hintergrund an Agentur & Kunde
            try {
                const response = await fetch('/api/send-email', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 
                        clientName, 
                        clientEmail, 
                        appointmentDateTime, 
                        topic,
                        meetingType: isOnline ? 'online' : 'phone',
                        phoneNumber: phoneNumber || ''
                    }),
                });

                const emailResult = await response.json().catch(() => ({}));
                console.log("Email dispatch result:", emailResult);
            } catch (err: unknown) {
                console.error("Fehler beim API Call send-email:", err);
            }

            return { 
                status: "success", 
                detail: isOnline 
                    ? `Online-Meeting gebucht für ${clientName} am ${appointmentDateTime}. Meet-Link: ${meetLink}. Bestätigungskarte wurde im Chat eingeblendet.` 
                    : `Telefontermin gebucht für ${clientName} am ${appointmentDateTime}. Rufnummer: ${phoneNumber || 'notiert'}. Bestätigungskarte wurde im Chat eingeblendet.` 
            };
        }
        if (fc.name === 'redirectToCalendly') {
            setMessages(prev => [...prev, { role: 'bot', text: 'Hier ist der Link zu unserem Kalender.', isCalendly: true }]);
            setIsOpen(true);
            setTimeout(() => scrollToBottom(), 80);
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
                            if (part.text && !part.thought) {
                                transcriptRef.current += part.text;
                            }
                            // Handle audio
                            if (part.inlineData?.mimeType?.startsWith('audio/') && part.inlineData?.data) {
                                setIsThinking(false);
                                if (audioContextRef.current) {
                                    setIsBotSpeaking(true);
                                    const ctx = audioContextRef.current;
                                    nextStartTimeRef.current = Math.max(nextStartTimeRef.current, ctx.currentTime);
                                    const rateMatch = part.inlineData.mimeType.match(/rate=(\d+)/);
                                    const sampleRate = rateMatch ? parseInt(rateMatch[1], 10) : 24000;
                                    const audioBuffer = await decodeAudioData(decode(part.inlineData.data), ctx, sampleRate, 1);
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
                            setIsThinking(false);
                            if (transcriptRef.current) {
                                setMessages(prev => [...prev, { role: 'bot', text: transcriptRef.current }]);
                                transcriptRef.current = "";
                            }
                        }
                    }

                    // Handle tool calls
                    const toolCall = message.toolCall || message.serverContent?.toolCall || content.toolCall;
                    const functionCalls = toolCall?.functionCalls ? [...toolCall.functionCalls] : [];
                    if (functionCalls.length === 0 && content.modelTurn?.parts) {
                        for (const part of content.modelTurn.parts) {
                            if (part.functionCall) {
                                functionCalls.push(part.functionCall);
                            }
                        }
                    }

                    if (functionCalls.length > 0) {
                        setIsThinking(false);
                        const session = activeSessionRef.current;
                        if (session) {
                            isToolCallPendingRef.current = true;
                            const functionResponses = [];
                            try {
                                for (const fc of functionCalls) {
                                    const result = await executeFunctionCall(fc);
                                    functionResponses.push({
                                        name: fc.name,
                                        id: fc.id || 'call_' + Date.now(),
                                        response: { output: result }
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
                        setIsThinking(false);
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
                let sum = 0;
                for (let i = 0; i < inputData.length; i++) {
                    const sample = inputData[i];
                    sum += sample * sample;
                    const s = Math.max(-1, Math.min(1, sample));
                    int16[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
                }

                // Volume / Speech Detection for instantaneous thinking state
                const rms = Math.sqrt(sum / inputData.length);
                if (rms > 0.015) {
                    hasSpokenRef.current = true;
                    lastSpeechTimeRef.current = Date.now();
                    if (silenceTimeoutRef.current) {
                        clearTimeout(silenceTimeoutRef.current);
                        silenceTimeoutRef.current = null;
                    }
                    setIsThinking(false);
                } else if (hasSpokenRef.current && Date.now() - lastSpeechTimeRef.current > 350) {
                    // User finished speaking and paused for > 350ms -> activate thinking state
                    hasSpokenRef.current = false;
                    setIsThinking(true);
                }

                try {
                    // Only send audio if no tool call is pending
                    if (!isToolCallPendingRef.current) {
                        const fromRate = inputCtx.sampleRate || 16000;
                        let int16_16k: Int16Array;
                        if (fromRate === 16000) {
                            int16_16k = int16;
                        } else {
                            const ratio = fromRate / 16000;
                            const newLen = Math.round(inputData.length / ratio);
                            int16_16k = new Int16Array(newLen);
                            for (let i = 0; i < newLen; i++) {
                                const srcIdx = Math.min(Math.floor(i * ratio), inputData.length - 1);
                                const s = Math.max(-1, Math.min(1, inputData[srcIdx]));
                                int16_16k[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
                            }
                        }

                        session.sendRealtimeInput({
                            realtimeInput: {
                                mediaChunks: [{
                                    mimeType: 'audio/pcm;rate=16000',
                                    data: encode(new Uint8Array(int16_16k.buffer))
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
        const userText = input.trim();
        setInput('');
        setError(null);

        // Snapshot history before adding the new user message
        const historySnapshot = messages
            .filter(m => m.text && !m.isSending)
            .map(m => ({
                role: m.role === 'user' ? 'user' : 'model',
                parts: [{ text: m.text }]
            }));

        setMessages(prev => [...prev, { role: 'user', text: userText }]);

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
            const result = await chatSessionRef.current.sendMessage({ 
                message: userText,
                history: historySnapshot
            });

            // Extract function calls from either the flat result (new SDK) or response object (standard SDK)
            const functionCalls = result.functionCalls || result.response?.functionCalls?.();

            if (functionCalls && functionCalls.length > 0) {
                for (const fc of functionCalls) {
                    await executeFunctionCall(fc);
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
                @keyframes susi-capsule-glow {
                    0%, 100% {
                        box-shadow: 0 0 0 1px rgba(247,196,41,0.3), 0 0 20px rgba(247,196,41,0.2), 0 10px 32px rgba(28,28,28,0.12);
                        transform: translateY(0px);
                    }
                    50% {
                        box-shadow: 0 0 0 3px rgba(247,196,41,0.45), 0 0 32px rgba(247,196,41,0.35), 0 14px 40px rgba(28,28,28,0.18);
                        transform: translateY(-3px);
                    }
                }
                .susi-capsule {
                    animation: susi-capsule-glow 3.5s ease-in-out infinite;
                }
                .susi-capsule:hover {
                    animation-play-state: paused;
                    transform: translateY(-4px) scale(1.02);
                    box-shadow: 0 0 0 4px rgba(247,196,41,0.5), 0 0 40px rgba(247,196,41,0.4), 0 16px 44px rgba(28,28,28,0.22) !important;
                }
                .susi-ring1 { animation: susi-pulse-ring 3s ease-in-out infinite; }
                .susi-ring2 { animation: susi-pulse-ring2 3s ease-in-out infinite 0.8s; }
                .susi-aurora { animation: susi-rotate 8s linear infinite; }
                .susi-aurora2 { animation: susi-rotate-reverse 12s linear infinite; }
                .susi-active .susi-ring1 { animation: susi-active-ring 1.2s ease-out infinite; }
                .susi-active .susi-ring2 { animation: susi-active-ring 1.2s ease-out infinite 0.4s; }
            `}</style>

            {!isOpen && (
                <div className="relative flex items-center justify-end">
                    {/* Ambient subtle glow behind the capsule */}
                    <div
                        className="absolute rounded-full pointer-events-none"
                        style={{
                            inset: -8,
                            background: 'radial-gradient(circle, rgba(247,196,41,0.22) 0%, transparent 72%)',
                            animation: 'susi-pulse-ring 3s ease-in-out infinite',
                        }}
                    />

                    {/* Option A: Hybrid Capsule */}
                    <div
                        onClick={() => { setIsOpen(true); startVoiceMode(false); }}
                        className="susi-capsule relative flex items-center gap-2.5 sm:gap-3.5 pl-2 sm:pl-2.5 pr-3 sm:pr-4 py-2 bg-[#EDE7DB]/95 hover:bg-white/95 backdrop-blur-xl rounded-full border border-[#1C1C1C]/15 hover:border-[#F7C429]/60 shadow-[0_10px_32px_rgba(28,28,28,0.14)] transition-all duration-300 cursor-pointer group select-none active:scale-[0.98]"
                        role="button"
                        tabIndex={0}
                        aria-label="Mit KI-Assistentin Susi sprechen oder chatten"
                    >
                        {/* Left: Glowing mini-SusiSphere */}
                        <div className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                            <SusiSphere
                                size={isMobile ? 44 : 52}
                                isListening={true}
                                isSpeaking={isBotSpeaking}
                                isConnecting={isConnecting}
                                isThinking={isThinking}
                            />
                            <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-white"></span>
                            </span>
                        </div>

                        {/* Center: Typography */}
                        <div className="flex flex-col text-left">
                            <div className="flex items-center gap-1.5">
                                <span className="font-semibold text-xs sm:text-sm text-[#1C1C1C] tracking-tight leading-tight">
                                    Mit Susi sprechen
                                </span>
                                <span className="text-[#F7C429] text-[10px]">✦</span>
                            </div>
                            <span className="text-[10px] sm:text-[11px] text-[#1C1C1C]/60 font-medium tracking-wide">
                                Sprechen & Chatten
                            </span>
                        </div>

                        {/* Right: Quick Action Buttons (Microphone + Chat Bubble) */}
                        <div className="flex items-center gap-1.5 pl-1.5 sm:pl-2 border-l border-[#1C1C1C]/10">
                            <button
                                type="button"
                                className="p-1.5 sm:p-2 rounded-full bg-[#F7C429]/25 hover:bg-[#F7C429] text-[#1C1C1C] transition-colors cursor-pointer border-0"
                                title="Sprachmodus starten"
                                aria-label="Mit Susi sprechen"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsOpen(true);
                                    startVoiceMode(false);
                                }}
                            >
                                <Mic className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1C1C1C]" />
                            </button>
                            <button
                                type="button"
                                className="p-1.5 sm:p-2 rounded-full bg-white/90 hover:bg-[#1C1C1C] text-[#1C1C1C] hover:text-white transition-colors cursor-pointer border-0"
                                title="Text-Chat öffnen"
                                aria-label="Mit Susi chatten"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setMode(AssistantMode.CHAT);
                                    setIsOpen(true);
                                }}
                            >
                                <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </button>
                        </div>
                    </div>
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
                                        : isThinking
                                        ? 'drop-shadow(0 0 12px rgba(251,191,36,0.65))'
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
                                    isThinking={isThinking}
                                />
                            </div>
                            <div>
                                <h4 className="font-[var(--font-vollkorn)] font-semibold text-2xl tracking-tight leading-none mb-2 text-[#1C1C1C]">Susi KI</h4>
                                <div className="flex items-center gap-2">
                                    <div className={`w-2 h-2 rounded-full ${isBotSpeaking ? 'bg-[#F7C429] animate-pulse' : isThinking ? 'bg-amber-500 animate-ping' : isListening ? 'bg-emerald-500 animate-pulse' : isConnecting ? 'bg-[#F7C429] animate-pulse' : 'bg-emerald-500 animate-pulse'}`} />
                                    <span className="text-[11px] text-[#1C1C1C]/60 font-[var(--font-inter)] tracking-[0.05em]">
                                        {isConnecting ? 'Verbindet...' : isBotSpeaking ? 'Spricht gerade...' : isThinking ? 'Susi überlegt...' : isListening ? 'Hört zu...' : 'Deine persönliche Assistentin'}
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
                                            <div className="p-5 sm:p-6 bg-emerald-500/10 rounded-2xl border border-emerald-500/30 space-y-4 shadow-sm relative overflow-hidden text-emerald-950">
                                                <div className="absolute top-0 right-0 p-4 opacity-5"><CheckCircle2 className="w-20 h-20 text-emerald-600" /></div>
                                                <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20">
                                                    <div className="flex items-center gap-2 text-emerald-900 font-bold uppercase text-[10px] tracking-[0.2em]">
                                                        <Calendar className="w-4 h-4 text-emerald-700" /> Terminbestätigung
                                                    </div>
                                                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-600/15 text-emerald-800 border border-emerald-600/20">
                                                        ✓ Fixiert
                                                    </span>
                                                </div>
                                                <div className="space-y-3.5 relative z-10 pb-1">
                                                    <div>
                                                        <p className="text-[10px] text-emerald-800 uppercase font-bold tracking-widest mb-0.5">Ansprechpartner</p>
                                                        <p className="font-bold text-lg text-emerald-950 tracking-tight">{m.appointmentData.clientName}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] text-emerald-800 uppercase font-bold tracking-widest mb-0.5">E-Mail Adresse</p>
                                                        <p className="font-semibold break-all text-sm text-emerald-900">{m.appointmentData.clientEmail}</p>
                                                    </div>
                                                    {m.appointmentData.phoneNumber && (
                                                        <div>
                                                            <p className="text-[10px] text-emerald-800 uppercase font-bold tracking-widest mb-0.5">Telefonnummer</p>
                                                            <p className="font-semibold text-sm text-emerald-900">{m.appointmentData.phoneNumber}</p>
                                                        </div>
                                                    )}
                                                    <div>
                                                        <p className="text-[10px] text-emerald-800 uppercase font-bold tracking-widest mb-0.5">Terminfenster</p>
                                                        <p className="font-bold text-base text-emerald-950 tracking-tight">{m.appointmentData.appointmentDateTime}</p>
                                                    </div>
                                                    {m.appointmentData.topic && (
                                                        <div>
                                                            <p className="text-[10px] text-emerald-800 uppercase font-bold tracking-widest mb-0.5">Thema / Anliegen</p>
                                                            <p className="font-medium text-sm text-emerald-950 leading-snug">{m.appointmentData.topic}</p>
                                                        </div>
                                                    )}
                                                    <div>
                                                        <p className="text-[10px] text-emerald-800 uppercase font-bold tracking-widest mb-0.5">Format</p>
                                                        <p className="font-semibold text-sm text-emerald-900">
                                                            {m.appointmentData.meetingType === 'online' ? '🎥 Online via Google Meet' : `📞 Telefonisch (${m.appointmentData.phoneNumber || 'Rufnummer notiert'})`}
                                                        </p>
                                                    </div>
                                                    {m.appointmentData.meetLink && (
                                                        <div className="pt-2">
                                                            <a 
                                                                href={m.appointmentData.meetLink} 
                                                                target="_blank" 
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#1C1C1C] hover:bg-black text-[#F5EFE6] rounded-xl text-xs font-semibold transition-all no-underline shadow-sm"
                                                            >
                                                                Google Meet Raum beitreten <ArrowUpRight className="w-3.5 h-3.5 text-[#F7C429]" />
                                                            </a>
                                                            <p className="text-[10px] text-emerald-800/70 text-center mt-1.5 break-all">
                                                                Link: {m.appointmentData.meetLink}
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="py-3.5 px-4 bg-emerald-600 rounded-xl flex items-center justify-center gap-2 shadow-sm text-white">
                                                <ShieldCheck className="w-4 h-4 text-white" />
                                                <span className="font-bold text-[10px] uppercase tracking-[0.15em]">Buchung im System fixiert & E-Mail versendet ✓</span>
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

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MessageCircle, X, Mic, Send, Mail, Loader2, Sparkles, Volume2, Calendar, ExternalLink, CheckCircle2, AlertCircle, User, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { AssistantMode } from '../types';
import { GeminiService, encode, decode, decodeAudioData } from '../services/geminiService';
import { CONTACT_INFO } from '../constants';

const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mode, setMode] = useState(AssistantMode.CHAT);
    const [isConnecting, setIsConnecting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [messages, setMessages] = useState<any[]>([
        { role: 'bot', text: 'Guten Tag! Willkommen bei Brainstorm. Wie kann ich Ihnen heute helfen, Ihr Unternehmen digital nach vorne zu bringen?' }
    ]);
    const [input, setInput] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [isBotSpeaking, setIsBotSpeaking] = useState(false);

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
                            text: `Termin erfolgreich bestätigt! ✓\n\nIch habe die Bestätigungs-Emails soeben an Sie (${clientEmail}) und an unser Team versendet.`,
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
                            text: "Der automatische Server-Versand konnte nicht abgeschlossen werden. Aber keine Sorge! Bitte klicken Sie unten, um die Bestätigung manuell abzusenden:"
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
                            const functionResponses = [];
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
                    session.sendRealtimeInput({
                        realtimeInput: {
                            mediaChunks: [{
                                mimeType: 'audio/pcm;rate=16000',
                                data: encode(new Uint8Array(int16.buffer))
                            }]
                        }
                    });
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
                    setMessages(prev => [...prev, { role: 'bot', text: 'Entschuldigung, ich konnte keine Verbindung zum AI-Service herstellen. Bitte prüfen Sie Ihre Internetverbindung oder API-Keys.' }]);
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

    return (
        <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[100] font-sans flex flex-col items-end">
            {!isOpen && (
                <button
                    onClick={() => { setIsOpen(true); startVoiceMode(false); }}
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-accent rounded-[1.5rem] sm:rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(247,196,41,0.5)] flex items-center justify-center text-primary hover:scale-110 hover:rotate-3 transition-all relative group overflow-hidden"
                >
                    {(isListening || isConnecting) && (
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    )}
                    <div className="relative z-10">
                        <Mic className={`w-10 h-10 transition-all duration-500 ${isListening || isConnecting ? 'scale-125 animate-pulse' : 'group-hover:scale-110'}`} />
                    </div>
                    {/* Tooltip */}
                    <div className="absolute right-24 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-6 py-3 rounded-2xl whitespace-nowrap text-sm font-black tracking-wider opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-white/10 uppercase">
                        Berater rufen
                    </div>
                </button>
            )}

            {isOpen && (
                <div className="w-[calc(100vw-2rem)] sm:w-[500px] max-w-[500px] h-[calc(100vh-8rem)] sm:h-[780px] bg-white rounded-[2.5rem] sm:rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col overflow-hidden animate-reveal-up origin-bottom-right">
                    {/* Header */}
                    <div className="p-6 sm:p-10 pb-6 sm:pb-8 bg-white/90 backdrop-blur-xl flex justify-between items-center relative overflow-hidden border-b border-slate-50">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-[120px] opacity-10 -mr-32 -mt-32"></div>
                        <div className="flex items-center gap-5 relative z-10">
                            <div className="w-16 h-16 bg-accent rounded-[1.5rem] flex items-center justify-center shadow-lg shadow-accent/20">
                                <Mic className="w-9 h-9 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-sans font-black text-2xl tracking-wide leading-none mb-2 text-[#0E172B]">Susi KI</h4>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                    <span className="text-[11px] text-[#0E172B] font-medium tracking-[0.05em]">Ihre persönliche Assistentin</span>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => { cleanupVoice(); setIsOpen(false); }} className="bg-slate-50 hover:bg-slate-100 p-4 rounded-2xl transition-all border border-slate-100 relative z-10 group">
                            <X className="w-6 h-6 text-slate-400 group-hover:rotate-90 transition-transform" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 sm:space-y-10 bg-mesh-gradient">
                        {error && (
                            <div className="p-6 sm:p-8 bg-red-50 border border-red-100 rounded-[2.5rem] flex flex-col gap-4 text-red-700 shadow-sm animate-in fade-in zoom-in-95">
                                <div className="flex items-center gap-2 font-black uppercase tracking-widest text-xs">
                                    <AlertCircle className="w-5 h-5 shrink-0" /> System Status
                                </div>
                                <span className="text-[16px] leading-relaxed">{error}</span>
                                <button onClick={() => startVoiceMode(false)} className="mt-2 w-full py-5 bg-red-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-red-700 shadow-lg shadow-red-600/20 transition-all">Verbindung neu aufbauen</button>
                            </div>
                        )}

                        {messages.map((m, i) => (
                            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[90%] sm:max-w-[85%] p-6 sm:p-8 rounded-[2.5rem] text-[15px] sm:text-[16px] leading-relaxed shadow-sm ${m.role === 'user' ? 'bg-slate-900 text-white rounded-tr-lg' : 'bg-white border border-slate-100 text-slate-800 rounded-tl-lg shadow-xl shadow-slate-200/40'}`}>
                                    <div className="whitespace-pre-wrap">{m.text}</div>

                                    {m.isSending && (
                                        <div className="mt-6 p-6 bg-slate-50 rounded-2xl flex flex-col items-center justify-center gap-4 border border-slate-100 shadow-inner">
                                            <Loader2 className="w-6 h-6 text-accent animate-spin" />
                                            <span className="font-black text-slate-400 text-xs uppercase tracking-[0.15em]">Synchronisierung...</span>
                                        </div>
                                    )}

                                    {m.isFallback && m.fallbackLink && (
                                        <div className="mt-6 animate-in fade-in zoom-in-95 duration-500">
                                            <a href={m.fallbackLink} className="flex items-center justify-center gap-3 w-full py-6 bg-accent text-primary rounded-2xl font-black shadow-[0_20px_40px_-10px_rgba(247,196,41,0.5)] hover:scale-[1.02] transition-all text-sm border border-accent/20 uppercase tracking-widest">
                                                <Mail className="w-5 h-5" /> Manuell Bestätigen <ArrowUpRight className="w-4 h-4" />
                                            </a>
                                        </div>
                                    )}

                                    {m.isSuccess && m.appointmentData && (
                                        <div className="mt-8 space-y-4 animate-in fade-in zoom-in-95 duration-500">
                                            <div className="p-6 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 space-y-6 shadow-inner relative overflow-hidden">
                                                <div className="absolute top-0 right-0 p-4 opacity-5"><CheckCircle2 className="w-16 h-16 text-emerald-600" /></div>
                                                <div className="flex items-center gap-3 text-emerald-700 font-black uppercase text-xs tracking-[0.2em] pb-4 border-b border-emerald-100/50">
                                                    <Calendar className="w-4 h-4" /> Bestätigung
                                                </div>
                                                <div className="space-y-4 relative z-10 pb-2">
                                                    <div>
                                                        <p className="text-[10px] text-emerald-600 uppercase font-bold tracking-widest mb-1">Ansprechpartner</p>
                                                        <p className="font-black text-2xl text-slate-900 tracking-tight">{m.appointmentData.clientName}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-emerald-600 uppercase font-bold tracking-widest mb-1">E-Mail Adresse</p>
                                                        <p className="font-bold text-slate-700 break-all">{m.appointmentData.clientEmail}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] text-emerald-600 uppercase font-bold tracking-widest mb-1">Terminfenster</p>
                                                        <p className="font-bold text-slate-700 text-xl tracking-tight">{m.appointmentData.appointmentDateTime}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="py-5 bg-emerald-600 rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-emerald-600/20">
                                                <ShieldCheck className="w-5 h-5 text-white" />
                                                <span className="font-black text-white text-xs uppercase tracking-[0.2em]">Buchung bestätigt</span>
                                            </div>
                                        </div>
                                    )}

                                    {m.isCalendly && (
                                        <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="mt-4 w-full py-6 bg-slate-900 text-white rounded-2xl font-black flex items-center justify-center gap-3 shadow-2xl hover:bg-slate-800 transition-all text-sm tracking-widest uppercase">
                                            <Calendar className="w-5 h-5 text-accent" /> Kalender öffnen <ArrowUpRight className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}

                        {(isBotSpeaking || isConnecting) && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-slate-100 p-6 rounded-[2rem] flex gap-2 items-center shadow-xl shadow-slate-200/50">
                                    {isBotSpeaking ? (
                                        <div className="flex items-end gap-1.5 h-6 mr-3">
                                            <div className="w-1 h-3 bg-accent rounded-full animate-[bounce_0.8s_infinite]"></div>
                                            <div className="w-1 h-5 bg-accent rounded-full animate-[bounce_0.8s_0.1s_infinite]"></div>
                                            <div className="w-1 h-4 bg-accent rounded-full animate-[bounce_0.8s_0.2s_infinite]"></div>
                                        </div>
                                    ) : (
                                        <Loader2 className="w-5 h-5 text-slate-300 animate-spin mr-3" />
                                    )}
                                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{isBotSpeaking ? 'Spricht...' : 'Verbindet...'}</span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Footer / Input */}
                    <div className="p-6 sm:p-10 bg-white border-t border-slate-50 mt-auto">
                        <div className="flex gap-3 sm:gap-4 items-center">
                            <button
                                onClick={isListening || isConnecting ? cleanupVoice : () => startVoiceMode(false)}
                                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-[1.5rem] sm:rounded-[1.8rem] transition-all flex items-center justify-center relative overflow-hidden active:scale-95 shadow-lg ${isListening || isConnecting ? 'bg-emerald-600 text-white shadow-emerald-600/30 ring-8 ring-emerald-50' : 'bg-slate-50 text-slate-400 hover:text-slate-900 border border-slate-100 hover:border-slate-200'}`}
                            >
                                {isConnecting ? <Loader2 className="w-8 h-8 animate-spin" /> : <Mic className={`w-8 h-8 ${isListening ? 'animate-pulse' : ''}`} />}
                            </button>
                            <div className="flex-1 relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                                    placeholder="Nachfrage stellen..."
                                    className="w-full bg-slate-50 border-none rounded-[1.5rem] sm:rounded-[1.8rem] py-4 sm:py-7 px-6 sm:px-10 pr-16 sm:pr-20 text-md sm:text-lg focus:ring-8 focus:ring-accent/10 transition-all placeholder:text-slate-300 text-slate-900 shadow-inner"
                                />
                                <button onClick={handleSendMessage} className="absolute right-2 sm:right-3 top-2 sm:top-3 bottom-2 sm:bottom-3 w-12 sm:w-14 bg-slate-900 text-white rounded-[1rem] sm:rounded-[1.2rem] shadow-xl hover:bg-slate-800 transition-all flex items-center justify-center active:scale-90">
                                    <Send className="w-5 h-5 sm:w-6 h-6" />
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

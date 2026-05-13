"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X, ArrowUpRight } from "lucide-react";

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            const timer = setTimeout(() => {
                setShowBanner(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptAll = () => {
        localStorage.setItem("cookie-consent", "all");
        setShowBanner(false);
    };

    const declineAll = () => {
        localStorage.setItem("cookie-consent", "essential");
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-6 left-6 right-6 z-[100] md:left-auto md:max-w-md animate-in fade-in slide-in-from-bottom-5 duration-500">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl p-6 overflow-hidden relative">
                {/* Background Accent */}
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[#F7C429]/10 rounded-full blur-2xl" />

                <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl shrink-0">
                        <Cookie className="w-6 h-6 text-[#F7C429]" />
                    </div>
                    <div className="flex-1 pr-6">
                        <h3 className="text-lg font-[var(--font-playfair)] tracking-wide font-medium text-gray-900 mb-1">
                            Cookie-Einstellungen
                        </h3>
                        <p className="text-sm text-gray-600 font-body leading-relaxed">
                            Wir nutzen Cookies, um unsere Website für Sie optimal zu gestalten und fortlaufend zu verbessern.
                            Weitere Informationen finden Sie in unserer{" "}
                            <Link href="/datenschutz" className="text-[#F7C429] hover:underline font-medium">
                                Datenschutzerklärung
                            </Link>.
                        </p>
                    </div>
                    <button
                        onClick={() => setShowBanner(false)}
                        className="text-gray-500 hover:text-gray-900 transition-colors p-1"
                        aria-label="Schließen"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                    <button
                        onClick={acceptAll}
                        className="group flex items-center justify-center gap-2 flex-1 bg-[#F7C429] text-black px-6 py-3 rounded-full font-bold uppercase tracking-[0.15em] text-[11px] shadow-[0_10px_30px_rgba(247,196,41,0.4)] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-black hover:text-[#F7C429] hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 cursor-pointer"
                    >
                        Alle akzeptieren
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                    <button
                        onClick={declineAll}
                        className="flex-1 bg-gray-50 border border-gray-200 text-gray-600 px-6 py-3 rounded-xl font-medium hover:bg-[#27272a] hover:text-gray-900 transition-all active:scale-[0.98]"
                    >
                        Nur essenzielle
                    </button>
                </div>
            </div>
        </div>
    );
}

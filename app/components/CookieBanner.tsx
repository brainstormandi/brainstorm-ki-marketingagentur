"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

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
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />

                <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-accent/10 rounded-xl shrink-0">
                        <Cookie className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1 pr-6">
                        <h3 className="text-lg font-sans font-bold text-primary mb-1">
                            Cookie-Einstellungen
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Wir nutzen Cookies, um unsere Website für Sie optimal zu gestalten und fortlaufend zu verbessern.
                            Weitere Informationen finden Sie in unserer{" "}
                            <Link href="/datenschutz" className="text-accent hover:underline font-medium">
                                Datenschutzerklärung
                            </Link>.
                        </p>
                    </div>
                    <button
                        onClick={() => setShowBanner(false)}
                        className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                        aria-label="Schließen"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                    <button
                        onClick={acceptAll}
                        className="flex-1 bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/10 active:scale-[0.98]"
                    >
                        Alle akzeptieren
                    </button>
                    <button
                        onClick={declineAll}
                        className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition-all active:scale-[0.98]"
                    >
                        Nur essenzielle
                    </button>
                </div>
            </div>
        </div>
    );
}

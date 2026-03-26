import React from 'react';
import { Star, ShieldCheck, Trophy, Sparkles } from 'lucide-react';
import { GOOGLE_REVIEW_LINK } from '../constants';

const TrustBar = () => {
    return (
        <section className="py-6 sm:py-8 bg-slate-50 border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-center sm:justify-between gap-8 md:gap-12 flex-wrap">
                    
                    <a href={GOOGLE_REVIEW_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 sm:gap-6 group">
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <span className="text-slate-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-1">Google Rezensionen</span>
                            <div className="flex items-center gap-2 sm:gap-3">
                                <span className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-accent transition-colors">5.0</span>
                                <div className="flex gap-0.5 sm:gap-1">
                                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-accent text-accent" />)}
                                </div>
                            </div>
                        </div>
                    </a>

                    <div className="hidden md:block w-px h-16 bg-slate-200"></div>

                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                         <span className="text-slate-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-2">Ausgezeichnet & Zertifiziert</span>
                         <div className="flex gap-6 sm:gap-8 items-center text-slate-700">
                             <div className="flex items-center gap-1.5 font-bold tracking-tight text-sm sm:text-base">
                                 <ShieldCheck className="w-5 h-5 text-emerald-500" />
                                 100% DSGVO
                             </div>
                             <div className="flex items-center gap-1.5 font-bold tracking-tight text-sm sm:text-base">
                                 <Trophy className="w-5 h-5 text-accent" />
                                 32 Jahre
                             </div>
                             <div className="flex items-center gap-1.5 font-bold tracking-tight text-sm sm:text-base">
                                 <Sparkles className="w-5 h-5 text-blue-500" />
                                 Modernste KI
                             </div>
                         </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
export default TrustBar;

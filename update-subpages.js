const fs = require('fs');
const path = require('path');

const targetDirs = [
    'werbeagentur-amstetten',
    'werbeagentur-linz',
    'werbeagentur-perg',
    'werbeagentur-st-poelten',
    'werbeagentur-steyr'
];

targetDirs.forEach(dir => {
    const file = path.join(__dirname, 'app', dir, 'page.tsx');
    if (!fs.existsSync(file)) {
        console.error('File not found:', file);
        return;
    }

    let content = fs.readFileSync(file, 'utf8');

    // Make target replacements:

    // 1. H1 class and restructure spans
    // This is tricky because the text content varies.
    // We will match the H1 opening tag until the closing tag.
    content = content.replace(
        /<h1 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-\[1\.05\] mb-6 max-w-5xl tracking-tight animate-reveal-up">\s*([^<]+)\s*<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">([^<]+)<\/span>\s*<\/h1>/g,
        `<h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[0.95] mb-6 max-w-5xl animate-reveal-up">
               <span className="font-sans font-black block">$1</span>
               <span className="font-sans block text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 drop-shadow-sm pb-2">$2</span>
            </h1>`
    );

    // 2. Paragraph class
    content = content.replace(
        /<p className="text-xl sm:text-2xl text-slate-700 mb-8 leading-relaxed max-w-3xl mx-auto animate-reveal-up reveal-delay-200">/g,
        '<p className="font-body text-[#111827] text-lg leading-relaxed mb-8 max-w-3xl mx-auto animate-reveal-up reveal-delay-200">'
    );

    // 3. Keyword pills wrapper padding? No, just the pills
    content = content.replace(
        /px-4 py-2 rounded-xl bg-white\/80 backdrop-blur-md border border-white border-b-2 shadow-sm text-slate-800 font-bold text-sm sm:text-base/g,
        'px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/60 shadow-sm text-slate-700 font-bold text-[13px] sm:text-sm'
    );

    // 4. Keyword pill icons (w-4 h-4 text-accent)
    // Be careful, only inside the pill. We know they are Globe, Monitor, Rocket in that block.
    content = content.replace(
        /<Globe className="w-4 h-4 text-accent" \/>/g,
        '<Globe className="w-5 h-5 text-accent" />'
    );
    content = content.replace(
        /<Monitor className="w-4 h-4 text-accent" \/>/g,
        '<Monitor className="w-5 h-5 text-accent" />'
    );
    content = content.replace(
        /<Rocket className="w-4 h-4 text-accent" \/>/g,
        '<Rocket className="w-5 h-5 text-accent" />'
    );

    // 5. CTA Wrapper
    content = content.replace(
        /<div className="flex flex-col sm:flex-row gap-6 items-center w-full sm:w-auto animate-reveal-up reveal-delay-500">/g,
        '<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-reveal-up reveal-delay-500 w-full sm:w-auto">'
    );

    // 6. CTA Button
    content = content.replace(
        /className="w-full sm:w-auto px-10 py-5 bg-accent text-primary rounded-xl font-bold text-xl hover:bg-\[#e5b510\] hover:-translate-y-1 transition-all shadow-xl flex items-center justify-center gap-3"/g,
        'className="w-full sm:w-auto px-12 py-6 bg-accent text-primary rounded-2xl font-black text-lg sm:text-xl hover:bg-[#e5b510] hover:scale-105 transition-all shadow-[0_20px_40px_-10px_rgba(247,196,41,0.5)] flex items-center justify-center gap-4 group"'
    );

    // 7. Arrow Right in CTA Button
    content = content.replace(
        /<ArrowRight className="w-6 h-6" \/>/g,
        '<ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />'
    );

    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated', file);
});

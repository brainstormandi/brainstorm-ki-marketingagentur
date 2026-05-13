const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..', 'app');
const REGIONS = [
    'werbeagentur-amstetten',
    'werbeagentur-linz',
    'werbeagentur-perg',
    'werbeagentur-salzburg',
    'werbeagentur-st-poelten',
    'werbeagentur-steyr',
    'werbeagentur-wien'
];

REGIONS.forEach(region => {
    const filePath = path.join(BASE_DIR, region, 'page.tsx');
    if (!fs.existsSync(filePath)) {
        console.log(`❌ File not found: ${filePath}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;

    // 1. Update Hero Video Background Gradients
    content = content.replace(
        /<div className="absolute inset-0 bg-gradient-to-r from-\[#F8FAFC\]\/80 via-white\/80 to-white\/30 sm:to-white\/10"><\/div>\s*<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"><\/div>/g,
        `{/* Clean Horizontal Blending Gradient */}\n                <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 30%, rgba(255,255,255,0.6) 55%, rgba(255,255,255,0) 75%)' }} />\n                {/* Gentle Bottom Fade */}\n                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 15%, rgba(255,255,255,0) 75%, rgba(255,255,255,0.95) 100%)' }} />`
    );

    // 2. Update H1 Hero Headline with Playfair & Inline Yellow Highlight
    // Match:
    // <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] py-1 mb-6 animate-reveal-up">
    //    <span className="font-sans font-black block">Premium Webdesign</span>
    //    <span className="font-sans block text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 drop-shadow-sm pb-2">für Linz & OÖ</span>
    // </h1>
    const h1Regex = /<h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-\[1\.1\] py-1 mb-6 animate-reveal-up">[\s\S]*?<span className="font-sans font-black block">([\s\S]*?)<\/span>[\s\S]*?<span className="font-sans block text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 drop-shadow-sm pb-2">([\s\S]*?)<\/span>[\s\S]*?<\/h1>/;
    
    const match = content.match(h1Regex);
    if (match) {
        const line1 = match[1].trim();
        const line2 = match[2].trim();
        const newH1 = `<h1 className="text-4xl sm:text-5xl lg:text-[64px] font-[var(--font-playfair)] font-medium text-gray-900 tracking-tight leading-[1.05] mb-6 animate-reveal-up">
                       ${line1} <br />
                       <span className="text-[#F7C429] relative inline-block">
                           ${line2}
                           <span className="absolute bottom-[10%] left-0 right-0 h-[25%] bg-[#F7C429]/20 -z-10 skew-x-[-15deg]" />
                       </span>
                    </h1>`;
        content = content.replace(h1Regex, newH1);
    }

    // 3. Update Slate classes to Gray
    // Let's replace all text-slate, bg-slate, border-slate classes safely
    content = content.replace(/\btext-slate-(\d+)\b/g, 'text-gray-$1');
    content = content.replace(/\bbg-slate-(\d+)\b/g, 'bg-gray-$1');
    content = content.replace(/\bborder-slate-(\d+)\b/g, 'border-gray-$1');
    
    // Fix border-slate-200/60 -> border-gray-200/60, etc
    content = content.replace(/\bborder-slate-(\d+)\/(\d+)\b/g, 'border-gray-$1/$2');
    content = content.replace(/\bbg-slate-(\d+)\/(\d+)\b/g, 'bg-gray-$1/$2');

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Updated design for ${region}`);
    } else {
        console.log(`⚠️ No changes made to ${region} (regex might need check)`);
    }
});

console.log("--- Done updating all regional pages ---");

const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..', 'app');
const CITIES = [
    { folder: 'werbeagentur-amstetten', file: 'AmstettenFAQ.tsx', city: 'Amstetten', target: 'für den Amstettner Markt' },
    { folder: 'werbeagentur-linz', file: 'LinzFAQ.tsx', city: 'Linz', target: 'für den Linzer Markt' },
    { folder: 'werbeagentur-perg', file: 'PergFAQ.tsx', city: 'Perg', target: 'für den Perger Markt' },
    { folder: 'werbeagentur-salzburg', file: 'SalzburgFAQ.tsx', city: 'Salzburg', target: 'für den Salzburger Markt' },
    { folder: 'werbeagentur-st-poelten', file: 'StPoeltenFAQ.tsx', city: 'St. Pölten', target: 'für St. Pölten' },
    { folder: 'werbeagentur-steyr', file: 'SteyrFAQ.tsx', city: 'Steyr', target: 'für Steyr & Umland' },
    { folder: 'werbeagentur-wien', file: 'WienFAQ.tsx', city: 'Wien', target: 'für den Wiener Markt' }
];

CITIES.forEach(({ folder, file, city, target }) => {
    const filePath = path.join(BASE_DIR, folder, file);
    if (!fs.existsSync(filePath)) {
        console.log(`❌ File not found: ${filePath}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;

    // 1. Update Section BG and border
    content = content.replace(
        /<section id="faq" className="scroll-mt-32 py-32 bg-\[#F8FAFC\] relative overflow-hidden">/g,
        `<section id="faq" className="scroll-mt-32 py-32 bg-white border-t border-gray-200 relative overflow-hidden">`
    );

    // 2. Update Badge styling
    // bg-slate-50 text-slate-800 ... border border-slate-100
    content = content.replace(
        /className="inline-flex items-center px-6 py-2 rounded-full bg-slate-50 text-slate-800 font-bold text-xs mb-6 sm:mb-8 uppercase tracking-widest border border-slate-100"/g,
        `className="inline-flex items-center px-6 py-2 rounded-full bg-transparent text-gray-600 font-bold text-xs mb-6 sm:mb-8 uppercase tracking-widest border border-gray-200"`
    );

    // 3. Update H2 with Playfair Uppercase style
    const h2Regex = /<h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-\[1\.1\] py-1">[\s\S]*?<span className="font-sans block">([\s\S]*?)<\/span><span className="font-sans block text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 drop-shadow-sm pb-2 sm:pb-4">([\s\S]*?)<\/span>[\s\S]*?<\/h2>/;
    
    const match = content.match(h2Regex);
    if (match) {
        const line1 = match[1].trim(); // Häufige Fragen
        const line2 = match[2].trim(); // für den Linzer Markt
        
        const newH2 = `<h2 className="text-4xl sm:text-5xl lg:text-6xl font-[var(--font-playfair)] font-medium text-gray-900 tracking-tight leading-[1.1] py-1 uppercase">
                        <span className="block">${line1}</span>
                        <span className="block text-transparent bg-clip-text pb-2 sm:pb-4" style={{backgroundImage: 'linear-gradient(180deg, #111827 0%, #374151 28%, #111827 48%, #4b5563 75%, #000000 100%)'}}>${line2}.</span>
                    </h2>`;
        content = content.replace(h2Regex, newH2);
    }

    // 4. Update question list H3 to Playfair & unified accent color
    content = content.replace(
        /className={`font-sans font-medium text-lg sm:text-xl tracking-tight leading-snug transition-colors duration-200 \${openIndex === index \? 'text-accent' : 'text-\[#111827\] group-hover:text-accent'}`}/g,
        `className={\`font-[var(--font-playfair)] font-medium text-lg sm:text-xl tracking-normal leading-snug transition-colors duration-200 \${openIndex === index ? 'text-[#F7C429]' : 'text-gray-900 group-hover:text-[#F7C429]'}\`}`
    );

    // 5. Update Chevron colors and rotation
    content = content.replace(
        /className={`shrink-0 flex items-center justify-center transition-transform duration-300 \${openIndex === index \? 'rotate-180 text-accent' : 'text-slate-400 group-hover:text-accent'}`}/g,
        `className={\`shrink-0 flex items-center justify-center transition-transform duration-300 \${openIndex === index ? 'rotate-180 text-[#F7C429]' : 'text-gray-500 group-hover:text-[#F7C429]'}\`}`
    );

    // 6. Update Answer text color to gray-600
    content = content.replace(
        /className="pb-4 sm:pb-6 text-\[#111827\] leading-relaxed font-body text-lg pr-8 sm:pr-24"/g,
        `className="pb-4 sm:pb-6 text-gray-600 leading-relaxed font-body text-lg pr-8 sm:pr-24"`
    );

    // 7. Convert generic slate classes to gray
    content = content.replace(/\btext-slate-(\d+)\b/g, 'text-gray-$1');
    content = content.replace(/\bbg-slate-(\d+)\b/g, 'bg-gray-$1');
    content = content.replace(/\bborder-slate-(\d+)\b/g, 'border-gray-$1');

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Unified design for ${file}`);
    } else {
        console.log(`⚠️ No changes made to ${file} (check file state)`);
    }
});

console.log("--- Done updating all regional FAQs ---");

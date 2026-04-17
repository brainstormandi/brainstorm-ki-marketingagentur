const fs = require('fs');
const path = require('path');

const targetDirs = [
    'werbeagentur-amstetten',
    'werbeagentur-linz',
    'werbeagentur-perg',
    'werbeagentur-st-poelten',
    'werbeagentur-steyr',
    'werbeagentur-wien'
];

targetDirs.forEach(dir => {
    // Find the FAQ file in this directory. Wait, it's named AmstettenFAQ.tsx etc.
    // Let's just find any file ending with FAQ.tsx.
    const folderPath = path.join(__dirname, 'app', dir);
    if (!fs.existsSync(folderPath)) return;
    
    const files = fs.readdirSync(folderPath);
    const faqFile = files.find(f => f.endsWith('FAQ.tsx'));
    if (!faqFile) return;

    const file = path.join(folderPath, faqFile);
    let content = fs.readFileSync(file, 'utf8');

    // Make target replacements

    // 1. FAQ Section Background matches F8FAFC and padding
    content = content.replace(
        /<section id="faq" className="scroll-mt-32 py-24 sm:py-32 bg-[^"]+ relative overflow-hidden">/,
        '<section id="faq" className="scroll-mt-32 py-32 bg-[#F8FAFC] relative overflow-hidden">'
    );

    // 2. Alignment of Title block: text-center -> text-center sm:text-left flex flex-col items-center sm:items-start max-w-2xl mx-auto sm:mx-0
    content = content.replace(
        /<ScrollReveal className="text-center mb-24">/,
        '<ScrollReveal className="mb-20 text-center sm:text-left flex flex-col items-center sm:items-start max-w-2xl mx-auto sm:mx-0">'
    );

    // 3. The Pill at the top
    content = content.replace(
        /<div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-50 text-slate-800 font-bold text-sm uppercase tracking-widest mb-6 border border-slate-100">\s*<HelpCircle [^>]+>\s*([^<]+)\s*<\/div>/g,
        '<div className="inline-flex items-center px-6 py-2 rounded-full bg-slate-50 text-slate-800 font-bold text-xs mb-6 sm:mb-8 uppercase tracking-widest border border-slate-100">$1</div>'
    );

    // 4. The H2 Style
    // E.g. <h2 className="text-4xl sm:text-6xl font-sans font-black text-slate-900 mb-6 tracking-tight leading-[1]">
    content = content.replace(
        /<h2 className="text-4xl sm:text-6xl font-sans font-black text-slate-900 mb-6 tracking-tight leading-\[1\]">/g,
        '<h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[0.95]">'
    );

    // 5. The H2 inner spans. Some have <br /> so we wrap lines in bloc spans.
    content = content.replace(
        /([^<]*)(<br \/>)?\s*<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-\[#e5b510\]">([^<]+)<\/span>/g,
        '<span className="font-sans block">$1</span><span className="font-sans block text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 drop-shadow-sm pb-2 sm:pb-4">$3</span>'
    );
    // remove any dangling <br /> resulting from it
    content = content.replace(/<span className="font-sans block">\s*<br \/>\s*<\/span>/g, '');
    
    // 6. Subtitle paragraph
    // <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
    // Actually the new FAQ.tsx doesn't have a paragraph underneath. Let's just hide it or remove it.
    content = content.replace(
        /<p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">\s*[^<]+\s*<\/p>/g,
        ''
    );

    // 7. Space-y wrapper and borders
    content = content.replace(
        /<div className="space-y-2">/g,
        '<div className="space-y-0 border-t border-slate-200">'
    );

    // 8. FAQ Item border
    content = content.replace(
        /<div className="group border-b border-slate-200\/60 transition-colors hover:border-slate-300">/g,
        '<div className="group border-b border-slate-200">'
    );

    // 9. FAQ item button
    content = content.replace(
        /className="w-full py-6 sm:py-8 flex items-start justify-between gap-6 text-left cursor-pointer focus:outline-none"/g,
        'className="w-full py-4 sm:py-6 flex items-center justify-between gap-6 text-left cursor-pointer focus:outline-none"'
    );

    // 10. FAQ Item Heading
    // <h4 className={`font-sans font-bold text-xl sm:text-2xl tracking-tight leading-snug transition-colors duration-300 ${openIndex === index ? 'text-accent' : 'text-slate-900 group-hover:text-slate-700'}`}>
    content = content.replace(
        /<h4 className={`font-sans font-bold text-xl sm:text-2xl tracking-tight leading-snug transition-colors duration-300 \$\{openIndex === index \? 'text-accent' : 'text-slate-900 group-hover:text-slate-700'}`}>\s*\{faq.question\}\s*<\/h4>/g,
        `<h3 className={\`font-sans font-medium text-lg sm:text-xl tracking-tight leading-snug transition-colors duration-200 \${openIndex === index ? 'text-accent' : 'text-[#111827] group-hover:text-accent'}\`}>
                                        {faq.question}
                                    </h3>`
    );

    // 11. FAQ chevron wrapper
    content = content.replace(
        /<div className={`shrink-0 flex items-center justify-center mt-1 transition-transform duration-500 \$\{openIndex === index \? 'rotate-180 text-accent' : 'text-slate-400 group-hover:text-slate-600'}`}>/g,
        '<div className={`shrink-0 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? \'rotate-180 text-accent\' : \'text-slate-400 group-hover:text-accent\'}`}>'
    );

    // 12. FAQ Chevron symbol
    content = content.replace(
        /<ChevronDown className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth=\{2\} \/>/g,
        '<ChevronDown className="w-6 h-6" strokeWidth={2} />'
    );

    // 13. FAQ answer text
    content = content.replace(
        /<div className="text-slate-600 leading-relaxed text-lg pr-4 sm:pr-14 whitespace-pre-line pb-2">/g,
        '<div className="pb-4 sm:pb-6 text-[#111827] leading-relaxed font-body text-lg pr-8 sm:pr-24">'
    );

    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated', file);
});

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
    const file = path.join(__dirname, 'app', dir, 'page.tsx');
    if (!fs.existsSync(file)) return;
    
    let content = fs.readFileSync(file, 'utf8');

    // Make target replacements

    // 1. the H2 in section B
    content = content.replace(
        /<h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 leading-tight">([^<]+)(?:<br\/>|<br \/>)([^<]+)<\/h2>/g,
        '<h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[0.95] mb-8">\n<span className="font-sans block">$1</span>\n<span className="font-sans block text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 drop-shadow-sm pb-2">$2</span>\n</h2>'
    );

    // 2. The paragraph texts
    content = content.replace(
        /<p className="text-lg text-slate-600 mb-6 leading-relaxed">/g,
        '<p className="font-body text-[#111827] text-lg leading-relaxed mb-6">'
    );
    content = content.replace(
        /<p className="text-lg text-slate-600 mb-8 leading-relaxed">/g,
        '<p className="font-body text-[#111827] text-lg leading-relaxed mb-8">'
    );

    // 3. The inner H4 mapping
    content = content.replace(
        /<h4 className="font-bold text-slate-900 text-lg">/g,
        '<h4 className="font-bold text-slate-900 text-lg font-sans">'
    );
    // and its subtext
    content = content.replace(
        /<span className="text-slate-600 text-sm">/g,
        '<span className="font-body text-[#111827] text-sm">'
    );
    
    // 4. Testimonial Box Styling
    content = content.replace(
        /<div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-xl relative">/g,
        '<div className="bg-slate-50/80 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-slate-200/60 shadow-xl relative">'
    );

    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated Section B for', file);
});

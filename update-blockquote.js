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

    // Replace the blockquote styling
    content = content.replace(
        /<blockquote className="text-slate-700 leading-relaxed relative z-10 italic">/g,
        '<blockquote className="font-body text-[#111827] text-lg leading-relaxed relative z-10">'
    );

    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed blockquote formatting for', file);
});

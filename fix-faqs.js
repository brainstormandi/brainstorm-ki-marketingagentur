const fs = require('fs');
const path = require('path');

const filesToFix = [
    'app/werbeagentur-amstetten/AmstettenFAQ.tsx',
    'app/werbeagentur-linz/LinzFAQ.tsx',
    'app/werbeagentur-verg/PergFAQ.tsx', // oops it's werbeagentur-perg
    'app/werbeagentur-perg/PergFAQ.tsx',
    'app/werbeagentur-st-poelten/StPoeltenFAQ.tsx',
    'app/werbeagentur-steyr/SteyrFAQ.tsx',
    'app/werbeagentur-wien/WienFAQ.tsx'
];

filesToFix.forEach(relPath => {
    const file = path.join(__dirname, relPath);
    if (!fs.existsSync(file)) return;

    let content = fs.readFileSync(file, 'utf8');

    // Regex to fix the malformed H2 block caused by greedy replacement
    // We search for:
    // <<span className="font-sans block">h2 className="text-4xl... leading-[0.95]">
    // \s*(AnyTextHere)\s*</span>
    // 
    // And replace it with:
    // <h2 className="text-4xl... leading-[0.95]">
    //     <span className="font-sans block">AnyTextHere </span>
    content = content.replace(
        /<<span className="font-sans block">h2 className="text-4xl([^"]+)">\s*([^<]+)<\/span>/g,
        '<h2 className="text-4xl$1">\n                        <span className="font-sans block">$2</span>'
    );

    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed', file);
});

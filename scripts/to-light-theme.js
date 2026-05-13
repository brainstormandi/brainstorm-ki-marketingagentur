const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, '../app/components');

const replacements = [
    [/bg-black\b/g, 'bg-white'],
    [/bg-\[#000000\]/g, 'bg-[#ffffff]'],
    [/bg-\[#18181b\]/g, 'bg-gray-50'],
    [/text-white\b/g, 'text-gray-900'],
    [/text-\[#a1a1aa\]/g, 'text-gray-600'],
    [/text-\[#71717a\]/g, 'text-gray-500'],
    [/border-\[#52525b\]/g, 'border-gray-200'],
    [/from-black/g, 'from-white'],
    [/to-black/g, 'to-white'],
    [/via-black/g, 'via-white'],
    [/linear-gradient\(180deg, #ffffff 0%, #cccccc 28%, #404040 48%, #c4c4c4 75%, #ffffff 100%\)/g, 'linear-gradient(180deg, #111827 0%, #374151 28%, #111827 48%, #4b5563 75%, #000000 100%)'],
    [/border-white\/10/g, 'border-gray-200'],
    [/bg-white\/10/g, 'bg-gray-50'],
    [/text-\[#ffffff\]/g, 'text-gray-900'],
];

// Iterate over components
fs.readdir(directory, (err, files) => {
    if (err) return console.error(err);
    
    files.forEach(file => {
        if (path.extname(file) !== '.tsx') return;
        
        // Skip Hero because it was already manually refined for the video
        if (file === 'Hero.tsx') return;

        const filePath = path.join(directory, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;
        
        replacements.forEach(([regex, replacement]) => {
            content = content.replace(regex, replacement);
        });
        
        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated ${file}`);
        }
    });
});

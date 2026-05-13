const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'app');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Replace hex versions
    content = content.replace(/#c9a227/gi, '#F7C429');
    
    // Replace rgb components if they exist separately
    // Matches 201, 162, 39 or variations with differing spaces
    content = content.replace(/201,\s*162,\s*39/g, '247, 196, 41');

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

function traverse(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverse(fullPath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css') || file.endsWith('.js')) {
            replaceInFile(fullPath);
        }
    });
}

console.log('Applying new accent color (#F7C429) globally across the components directory...');
traverse(targetDir);

// Also check tailwind config just in case, although it's already correct.
const twConfigPath = path.join(__dirname, '..', 'tailwind.config.ts');
if (fs.existsSync(twConfigPath)) {
    replaceInFile(twConfigPath);
}
console.log('Done!');

const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'app', 'components');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Global string swaps for Tailwind pattern inversion
    
    // 1. Step 1: Temporarily encode existing strings to prevent cross-swaps
    // We want: 
    // bg-white -> bg-[#F7C429]
    // border-[#F7C429] -> border-[#F7C429] (stays)
    // text-[#F7C429] -> text-black
    // hover:bg-[#F7C429] -> hover:bg-white
    // hover:text-black -> hover:text-[#F7C429]
    
    content = content.replace(/bg-white border border-\[#F7C429\] text-\[#F7C429\]/g, 'bg-[#F7C429] border border-[#F7C429] text-black');
    content = content.replace(/hover:bg-\[#F7C429\] hover:text-black/g, 'hover:bg-white hover:text-[#F7C429]');

    // Optional shadow enhancement to make it stand out more as solid button
    content = content.replace(/shadow-\[0_0_15px_rgba\(247, 196, 41,0\.15\)\]/g, 'shadow-[0_4px_20px_rgba(247,196,41,0.3)]');

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Inverted buttons in: ${filePath}`);
    }
}

const files = fs.readdirSync(targetDir);
files.forEach(file => {
    const fullPath = path.join(targetDir, file);
    if (fs.statSync(fullPath).isFile() && file.endsWith('.tsx')) {
        replaceInFile(fullPath);
    }
});

console.log('Global Button Inversion Complete!');

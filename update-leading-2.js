const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory() && !file.includes('node_modules') && !file.includes('.next') && !file.includes('.git')) { 
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./app');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    // Replace leading-tight py-1 (which we just added) with leading-[1.1] py-1
    if (content.includes('leading-tight py-1')) {
        content = content.replace(/leading-tight py-1/g, 'leading-[1.1] py-1');
        fs.writeFileSync(file, content);
        console.log("Updated leading in", file);
    }
});

const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'app');
const dirs = fs.readdirSync(baseDir).filter(name => name.startsWith('werbeagentur-'));

const replacements = [
    // Complex contextual/grammatical phrases
    { pattern: /\bdamit Sie (.+?) gefunden werden\b/gi, replacement: 'damit du $1 gefunden wirst' },
    { pattern: /\bSie (.+?) gefunden werden\b/gi, replacement: 'du $1 gefunden wirst' },

    // Verbs and specific phrases
    { pattern: /\bprofitieren Sie\b/g, replacement: 'profitierst du' },
    { pattern: /\bProfitieren Sie\b/g, replacement: 'Profitiere' },
    { pattern: /\bStechen Sie\b/g, replacement: 'Stich' },
    { pattern: /\bstechen Sie\b/g, replacement: 'stich' },
    { pattern: /\bBeeindrucken Sie\b/g, replacement: 'Beeindrucke' },
    { pattern: /\bbeeindrucken Sie\b/g, replacement: 'beeindrucke' },
    { pattern: /\bHolen Sie sich\b/g, replacement: 'Hol dir' },
    { pattern: /\bholen Sie sich\b/g, replacement: 'hol dir' },
    { pattern: /\bHolen Sie\b/g, replacement: 'Hol' },
    { pattern: /\bholen Sie\b/g, replacement: 'hol' },
    { pattern: /\bWerden Sie\b/g, replacement: 'Werde' },
    { pattern: /\bwerden Sie\b/g, replacement: 'wirst du' },
    { pattern: /\bHeben Sie sich\b/g, replacement: 'Hebe dich' },
    { pattern: /\bheben Sie sich\b/g, replacement: 'hebe dich' },
    { pattern: /\bHeben Sie\b/g, replacement: 'Hebe' },
    { pattern: /\bheben Sie\b/g, replacement: 'hebe' },
    { pattern: /\bÜberflügeln Sie\b/g, replacement: 'Überflügle' },
    { pattern: /\büberflügeln Sie\b/g, replacement: 'überflügle' },
    { pattern: /\bNutzen Sie\b/g, replacement: 'Nutze' },
    { pattern: /\bnutzen Sie\b/g, replacement: 'nutze' },
    { pattern: /\bBesuchen Sie\b/g, replacement: 'Besuche' },
    { pattern: /\bbesuchen Sie\b/g, replacement: 'besuche' },
    { pattern: /\bKennen Sie\b/g, replacement: 'Kennst du' },
    { pattern: /\bkennen Sie\b/g, replacement: 'kennst du' },
    { pattern: /\bArbeiten Sie\b/g, replacement: 'Arbeitest du' },
    { pattern: /\barbeiten Sie\b/g, replacement: 'arbeitest du' },
    { pattern: /\bBieten Sie\b/g, replacement: 'Bietest du' },
    { pattern: /\bbieten Sie\b/g, replacement: 'bietest du' },
    { pattern: /\bqualifizieren Sie\b/g, replacement: 'qualifizierst du' },
    { pattern: /\bkonkurrieren Sie\b/g, replacement: 'konkurrierst du' },
    { pattern: /\bSie konkurrieren\b/g, replacement: 'du konkurrierst' },
    { pattern: /\bkonvertieren Sie\b/g, replacement: 'konvertierst du' },
    { pattern: /\bMachen Sie\b/g, replacement: 'Mach' },
    { pattern: /\bmachen Sie\b/g, replacement: 'machst du' },
    { pattern: /\boptimieren Sie\b/g, replacement: 'optimierst du' },
    { pattern: /\bbieten Ihnen\b/g, replacement: 'bieten dir' },
    { pattern: /\bbieten wir Ihnen\b/g, replacement: 'bieten wir dir' },
    { pattern: /\bBieten wir Ihnen\b/g, replacement: 'Bieten wir dir' },
    { pattern: /\bSichern Sie sich\b/g, replacement: 'Sichere dir' },
    { pattern: /\bsichern Sie sich\b/g, replacement: 'sichere dir' },
    { pattern: /\bSchaffen Sie\b/g, replacement: 'Schaffe' },
    { pattern: /\bschaffen Sie\b/g, replacement: 'schaffe' },
    { pattern: /\bSteigern Sie\b/g, replacement: 'Steigere' },
    { pattern: /\bsteigern Sie\b/g, replacement: 'steigere' },
    { pattern: /\bsparen Sie\b/g, replacement: 'sparst du' },
    { pattern: /\bSparen Sie\b/g, replacement: 'Spare' },
    { pattern: /\bbetreuen wir Sie\b/g, replacement: 'betreuen wir dich' },
    { pattern: /\bum Sie\b/g, replacement: 'um dich' },
    { pattern: /\bfür Sie\b/g, replacement: 'für dich' },
    { pattern: /\bmit Ihnen\b/g, replacement: 'mit dir' },
    { pattern: /\bWir nehmen Ihnen\b/g, replacement: 'Wir nehmen dir' },
    { pattern: /\bnehmen Ihnen\b/g, replacement: 'nehmen dir' },
    { pattern: /\bWir senden Ihnen\b/g, replacement: 'Wir senden dir' },
    { pattern: /\bsenden Ihnen\b/g, replacement: 'senden dir' },
    { pattern: /\bbei Ihnen\b/g, replacement: 'bei dir' },
    { pattern: /\bvon Ihnen\b/g, replacement: 'von dir' },
    { pattern: /\bvor Ihnen\b/g, replacement: 'vor dir' },
    { pattern: /\bzu Ihnen\b/g, replacement: 'zu dir' },
    { pattern: /\ban Sie\b/g, replacement: 'an dich' },
    { pattern: /\bnach Ihnen\b/g, replacement: 'nach dir' },
    { pattern: /\bauf Sie\b/g, replacement: 'auf dich' },

    // Possessive Pronouns
    { pattern: /\bIhr\b/g, replacement: 'dein' },
    { pattern: /\bIhre\b/g, replacement: 'deine' },
    { pattern: /\bIhren\b/g, replacement: 'deinen' },
    { pattern: /\bIhrer\b/g, replacement: 'deiner' },
    { pattern: /\bIhrem\b/g, replacement: 'deinem' },
    { pattern: /\bIhres\b/g, replacement: 'deines' },
    
    // Pronoun Sie standalone (case-sensitive)
    { pattern: /\bSie\b/g, replacement: 'du' }
];

console.log('Analyzing subpages under werbeagentur-* directories...\n');

dirs.forEach(dir => {
    const dirPath = path.join(baseDir, dir);
    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.tsx') && !f.startsWith('DynamicComponents'));
    
    files.forEach(file => {
        const filePath = path.join(dirPath, file);
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        
        lines.forEach((line, index) => {
            if (/\b(Sie|Ihr|Ihnen|Ihre|Ihren|Ihrer|Ihrem|Ihres)\b/.test(line)) {
                let proposedLine = line;
                replacements.forEach(rep => {
                    proposedLine = proposedLine.replace(rep.pattern, rep.replacement);
                });
                console.log(`[${dir}/${file} L${index + 1}]`);
                console.log(`- Original: ${line.trim()}`);
                console.log(`+ Proposed: ${proposedLine.trim()}`);
                console.log('------------------------------------');
            }
        });
    });
});

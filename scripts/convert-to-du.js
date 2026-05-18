const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'app');
const dirs = fs.readdirSync(baseDir).filter(name => name.startsWith('werbeagentur-'));

const replacements = [
    // Complex contextual/grammatical phrases
    { pattern: /\bdamit\s+Sie\s+(.+?)\s+gefunden\s+werden\b/gi, replacement: 'damit du $1 gefunden wirst' },
    { pattern: /\bSie\s+(.+?)\s+gefunden\s+werden\b/gi, replacement: 'du $1 gefunden wirst' },

    // Verbs and specific phrases
    { pattern: /\bprofitieren\s+Sie\b/gi, replacement: 'profitierst du' },
    { pattern: /\bProfitieren\s+Sie\b/gi, replacement: 'Profitiere' },
    { pattern: /\bStechen\s+Sie\b/gi, replacement: 'Stich' },
    { pattern: /\bstechen\s+Sie\b/gi, replacement: 'stich' },
    { pattern: /\bBeeindrucken\s+Sie\b/gi, replacement: 'Beeindrucke' },
    { pattern: /\bbeeindrucken\s+Sie\b/gi, replacement: 'beeindrucke' },
    { pattern: /\bHolen\s+Sie\s+sich\b/gi, replacement: 'Hol dir' },
    { pattern: /\bholen\s+Sie\s+sich\b/gi, replacement: 'hol dir' },
    { pattern: /\bHolen\s+Sie\b/gi, replacement: 'Hol' },
    { pattern: /\bholen\s+Sie\b/gi, replacement: 'hol' },
    { pattern: /\bWerden\s+Sie\b/gi, replacement: 'Werde' },
    { pattern: /\bwerden\s+Sie\b/gi, replacement: 'wirst du' },
    { pattern: /\bHeben\s+Sie\s+sich\b/gi, replacement: 'Hebe dich' },
    { pattern: /\bheben\s+Sie\s+sich\b/gi, replacement: 'hebe dich' },
    { pattern: /\bHeben\s+Sie\b/gi, replacement: 'Hebe' },
    { pattern: /\bheben\s+Sie\b/gi, replacement: 'hebe' },
    { pattern: /\bÜberflügeln\s+Sie\b/gi, replacement: 'Überflügle' },
    { pattern: /\büberflügeln\s+Sie\b/gi, replacement: 'überflügle' },
    { pattern: /\bNutzen\s+Sie\b/gi, replacement: 'Nutze' },
    { pattern: /\bnutzen\s+Sie\b/gi, replacement: 'nutze' },
    { pattern: /\bBesuchen\s+Sie\b/gi, replacement: 'Besuche' },
    { pattern: /\bbesuchen\s+Sie\b/gi, replacement: 'besuche' },
    { pattern: /\bKennen\s+Sie\b/gi, replacement: 'Kennst du' },
    { pattern: /\bkennen\s+Sie\b/gi, replacement: 'kennst du' },
    { pattern: /\bArbeiten\s+Sie\b/gi, replacement: 'Arbeitest du' },
    { pattern: /\barbeiten\s+Sie\b/gi, replacement: 'arbeitest du' },
    { pattern: /\bBieten\s+Sie\b/gi, replacement: 'Bietest du' },
    { pattern: /\bbieten\s+Sie\b/gi, replacement: 'bietest du' },
    { pattern: /\bqualifizieren\s+Sie\b/gi, replacement: 'qualifizierst du' },
    { pattern: /\bkonkurrieren\s+Sie\b/gi, replacement: 'konkurrierst du' },
    { pattern: /\bSie\s+konkurrieren\b/gi, replacement: 'du konkurrierst' },
    { pattern: /\bkonvertieren\s+Sie\b/gi, replacement: 'konvertierst du' },
    { pattern: /\bMachen\s+Sie\b/gi, replacement: 'Mach' },
    { pattern: /\bmachen\s+Sie\b/gi, replacement: 'machst du' },
    { pattern: /\boptimieren\s+Sie\b/gi, replacement: 'optimierst du' },
    { pattern: /\bbieten\s+Ihnen\b/gi, replacement: 'bieten dir' },
    { pattern: /\bbieten\s+wir\s+Ihnen\b/gi, replacement: 'bieten wir dir' },
    { pattern: /\bBieten\s+wir\s+Ihnen\b/gi, replacement: 'Bieten wir dir' },
    { pattern: /\bSichern\s+Sie\s+sich\b/gi, replacement: 'Sichere dir' },
    { pattern: /\bsichern\s+Sie\s+sich\b/gi, replacement: 'sichere dir' },
    { pattern: /\bSchaffen\s+Sie\b/gi, replacement: 'Schaffe' },
    { pattern: /\bschaffen\s+Sie\b/gi, replacement: 'schaffe' },
    { pattern: /\bSteigern\s+Sie\b/gi, replacement: 'Steigere' },
    { pattern: /\bsteigern\s+Sie\b/gi, replacement: 'steigere' },
    { pattern: /\bsparen\s+Sie\b/gi, replacement: 'sparst du' },
    { pattern: /\bSparen\s+Sie\b/gi, replacement: 'Spare' },
    { pattern: /\bhaben\s+Sie\b/gi, replacement: 'hast du' },
    { pattern: /\bHaben\s+Sie\b/gi, replacement: 'Hast du' },
    { pattern: /\bbetreuen\s+wir\s+Sie\b/gi, replacement: 'betreuen wir dich' },
    { pattern: /\bum\s+Sie\b/gi, replacement: 'um dich' },
    { pattern: /\bfür\s+Sie\b/gi, replacement: 'für dich' },
    { pattern: /\bmit\s+Ihnen\b/gi, replacement: 'mit dir' },
    { pattern: /\bWir\s+nehmen\s+Ihnen\b/gi, replacement: 'Wir nehmen dir' },
    { pattern: /\bnehmen\s+Ihnen\b/gi, replacement: 'nehmen dir' },
    { pattern: /\bWir\s+senden\s+Ihnen\b/gi, replacement: 'Wir senden dir' },
    { pattern: /\bsenden\s+Ihnen\b/gi, replacement: 'senden dir' },
    { pattern: /\bbei\s+Ihnen\b/gi, replacement: 'bei dir' },
    { pattern: /\bvon\s+Ihnen\b/gi, replacement: 'von dir' },
    { pattern: /\bvor\s+Ihnen\b/gi, replacement: 'vor dir' },
    { pattern: /\bzu\s+Ihnen\b/gi, replacement: 'zu dir' },
    { pattern: /\ban\s+Sie\b/gi, replacement: 'an dich' },
    { pattern: /\bnach\s+Ihnen\b/gi, replacement: 'nach dir' },
    { pattern: /\bauf\s+Sie\b/gi, replacement: 'auf dich' },

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

console.log('Starting conversion of all werbeagentur-* directories...\n');

dirs.forEach(dir => {
    const dirPath = path.join(baseDir, dir);
    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.tsx') && !f.startsWith('DynamicComponents'));
    
    files.forEach(file => {
        const filePath = path.join(dirPath, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let original = content;
        
        replacements.forEach(rep => {
            content = content.replace(rep.pattern, rep.replacement);
        });

        if (content !== original) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ Converted and updated: ${dir}/${file}`);
        } else {
            console.log(`ℹ️ No changes needed: ${dir}/${file}`);
        }
    });
});

console.log('\nAll done!');

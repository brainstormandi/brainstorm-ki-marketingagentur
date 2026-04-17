const fs = require('fs');

let data = fs.readFileSync('app/data/blogData.ts', 'utf8');

// Replace generic unstyled tags with fully styled tailwind utility blocks
data = data.replace(/<p>/g, '<p class="font-body text-[#111827] leading-relaxed mb-6 text-lg sm:text-xl">');
data = data.replace(/<h2>/g, '<h2 class="text-2xl sm:text-3xl font-black text-slate-900 mb-6 font-sans tracking-tight leading-[0.95] mt-12">');
data = data.replace(/<ul>/g, '<ul class="list-disc pl-6 sm:pl-8 mb-8 space-y-4 font-body text-[#111827] marker:text-slate-400 text-lg sm:text-xl">');
data = data.replace(/<ol>/g, '<ol class="list-decimal pl-6 sm:pl-8 mb-8 space-y-4 font-body text-[#111827] text-lg sm:text-xl">');

// There are also <li> tags that might need basic text sizing or they will inherit from ul. They inherit from ul, so it's fine.

fs.writeFileSync('app/data/blogData.ts', data);
console.log("Done fixing blogData.ts!");

let pageData = fs.readFileSync('app/blog/[slug]/page.tsx', 'utf8');
// remove prose class entirely as it suppresses our explicit classes without plugin, or conflicts
pageData = pageData.replace(/className="prose[^"]*"/, 'className="max-w-none"');
fs.writeFileSync('app/blog/[slug]/page.tsx', pageData);
console.log("Done fixing page.tsx!");

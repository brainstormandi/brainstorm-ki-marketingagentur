const fs = require('fs');

let data = fs.readFileSync('app/data/blogData.ts', 'utf8');

data = data.replace(/<h2 class="text-2xl font-bold text-slate-900 mb-6 font-display">/g, '<h2>');

data = data.replace(/<p class="mb-6">/g, '<p>');
data = data.replace(/<p class="mb-4">/g, '<p>');
data = data.replace(/<p class="mb-10">/g, '<p>');

data = data.replace(/<ul class="list-disc pl-6 mb-6 space-y-3">/g, '<ul>');
data = data.replace(/<ul class="list-disc pl-6 mb-10 space-y-3">/g, '<ul>');
data = data.replace(/<ul class="list-decimal pl-6 mb-10 space-y-4">/g, '<ol>');
data = data.replace(/<\/ul>/g, '</ul>'); 

data = data.replace(/<p class="mb-6 border-l-4 border-accent pl-4 italic">([\s\S]*?)<\/p>/g, '<blockquote class="border-l-4 border-slate-200 pl-6 my-8 font-body text-slate-600">$1</blockquote>');
data = data.replace(/<p class="mb-10 border-l-4 border-slate-300 pl-4">([\s\S]*?)<\/p>/g, '<blockquote class="border-l-4 border-slate-200 pl-6 my-8 font-body text-slate-600">$1</blockquote>');

data = data.replace(/<div class="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200(?: mt-10)?">/g, 
  '<div class="not-prose bg-[#111827] p-8 sm:p-12 rounded-3xl mt-16 mb-8 relative overflow-hidden shadow-2xl">');
  
data = data.replace(/<p class="text-xl font-bold text-slate-900 mb-4">/g, 
  '<p class="text-2xl sm:text-3xl font-black text-white font-sans tracking-tight mb-4 leading-[0.95]">');
  
data = data.replace(/<a href="(.*?)" class="inline-block bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-primary\/90 transition-colors">/g, 
  '<a href="$1" class="inline-block mt-4 bg-white text-[#111827] font-semibold font-sans tracking-widest text-xs uppercase py-4 px-8 rounded-full hover:bg-slate-100 transition-all">');

data = data.replace(/class="text-primary hover:underline font-bold"/g, 'class="font-semibold text-[#111827] underline decoration-slate-300 hover:decoration-[#111827]"');
data = data.replace(/class="text-accent hover:underline font-bold"/g, 'class="font-semibold text-[#111827] underline decoration-slate-300 hover:decoration-[#111827]"');

data = data.replace(/<ul class="list-decimal(.*?)>/g, '<ol>');
data = data.replace(/<p class="text-xl font-bold text-slate-900 mb-4">/g, '<p class="text-2xl sm:text-3xl font-black text-white font-sans tracking-tight mb-4 leading-[0.95]">');

// Now, fix the inner p tags around CTA that got changed to <p> without styling but we need them grey
data = data.replace(/<p class="mb-6">Buchen/g, '<p class="text-slate-300 font-body mb-8 text-base">Buchen');
data = data.replace(/<div class="not-prose(.*?)">([\s\S]*?)<p>Gefühlt/g, '<div class="not-prose$1">$2<p class="text-slate-300 font-body mb-8 text-base">Gefühlt');
data = data.replace(/<div class="not-prose(.*?)">([\s\S]*?)<p>Buchen/g, '<div class="not-prose$1">$2<p class="text-slate-300 font-body mb-8 text-base">Buchen');
data = data.replace(/<div class="not-prose(.*?)">([\s\S]*?)<p>Wir analysieren/g, '<div class="not-prose$1">$2<p class="text-slate-300 font-body mb-8 text-base">Wir analysieren');
data = data.replace(/<div class="not-prose(.*?)">([\s\S]*?)<p>Sie schaffen/g, '<div class="not-prose$1">$2<p class="text-slate-300 font-body mb-8 text-base">Sie schaffen');
data = data.replace(/<div class="not-prose(.*?)">([\s\S]*?)<p>Unser Expertenteam/g, '<div class="not-prose$1">$2<p class="text-slate-300 font-body mb-8 text-base">Unser Expertenteam');
data = data.replace(/<div class="not-prose(.*?)">([\s\S]*?)<p>Wir bauen/g, '<div class="not-prose$1">$2<p class="text-slate-300 font-body mb-8 text-base">Wir bauen');
data = data.replace(/<div class="not-prose(.*?)">([\s\S]*?)<p>Wir machen/g, '<div class="not-prose$1">$2<p class="text-slate-300 font-body mb-8 text-base">Wir machen');
data = data.replace(/<div class="not-prose(.*?)">([\s\S]*?)<p>Wir bringen/g, '<div class="not-prose$1">$2<p class="text-slate-300 font-body mb-8 text-base">Wir bringen');
data = data.replace(/<div class="not-prose(.*?)">([\s\S]*?)<p>Wir befreien/g, '<div class="not-prose$1">$2<p class="text-slate-300 font-body mb-8 text-base">Wir befreien');
data = data.replace(/<div class="not-prose(.*?)">([\s\S]*?)<p>Wir verwandeln/g, '<div class="not-prose$1">$2<p class="text-slate-300 font-body mb-8 text-base">Wir verwandeln');


fs.writeFileSync('app/data/blogData.ts', data);
console.log("Done updating blogData.ts!");

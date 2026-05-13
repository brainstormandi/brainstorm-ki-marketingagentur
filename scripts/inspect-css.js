async function test() {
  try {
    const resp = await fetch('http://localhost:3000');
    const html = await resp.text();
    const matches = html.match(/href="([^"]+\.css)"/g);
    if (!matches) {
      console.log("No CSS found in HTML");
      return;
    }
    for (let m of matches) {
      const url = m.slice(6, -1);
      console.log("Fetching CSS from:", url);
      const cssResp = await fetch('http://localhost:3000' + url);
      const css = await cssResp.text();
      console.log("Length:", css.length);
      console.log("Contains 'bg-white'?", css.includes('bg-white'));
      console.log("Contains 'background'?", css.includes('background'));
      console.log("First 300 chars:", css.substring(0, 300));
      if (css.includes('prefers-color-scheme')) {
        console.log("WARNING: FOUND PREFERS-COLOR-SCHEME");
      }
    }
  } catch (e) {
    console.error(e);
  }
}
test();

import { chromium } from 'playwright';
import fs from 'node:fs'; import path from 'node:path';
const dir = process.argv[2], out = process.argv[3], fmt = process.argv[4] || 'mobile', only = (process.argv[5]||'').split(',').filter(Boolean);
fs.mkdirSync(out, { recursive: true });
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: 1200, height: 1400 } });
p.on('pageerror', e => console.log('ERR', e.message)); p.on('console', m => { if (m.type() === 'error') console.log('CONSOLE', m.text()); });
await p.goto('file://' + path.resolve(dir, 'storyboard.html'));
await p.waitForFunction(() => window.ready || window.initError, null, { timeout: 180000 });
const err = await p.evaluate(() => window.initError); if (err) { console.log(err); process.exit(1); }
await p.evaluate(f => setFormat(f), fmt);
const ids = only.length ? only : await p.evaluate(() => shotIds);
for (const id of ids) {
  const data = await p.evaluate(id => { renderShot(id); return { url: document.getElementById('film').toDataURL('image/png'), bounds: window.infoBounds }; }, id);
  fs.writeFileSync(path.join(out, `${fmt}-${id}.png`), Buffer.from(data.url.split(',')[1], 'base64'));
  const over = data.bounds.filter(x => x.x + x.w > (fmt === 'mobile' ? 1080 : 1920) - 56);
  console.log(id, over.length ? 'TEKST FOR LANG: ' + over.map(o => o.t).join(' | ') : 'ok');
}
await b.close();

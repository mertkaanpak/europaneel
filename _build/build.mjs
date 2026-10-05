// Seitengenerator europaneel.de – erzeugt fertiges HTML (GitHub Pages liefert es 1:1 aus).
// Aufruf: node _build/build.mjs
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { ROOT, USED_ICONS, SPRITE_V, setCtx, renderDocument } from './lib.mjs';
import { SITE, REDIRECTS } from './site.config.mjs';

const t0 = Date.now();
const hash = (buf) => crypto.createHash('md5').update(buf).digest('hex').slice(0, 8);
const read = (p) => fs.readFileSync(path.join(ROOT, p));
const write = (p, s) => { fs.mkdirSync(path.dirname(path.join(ROOT, p)), { recursive: true }); fs.writeFileSync(path.join(ROOT, p), s); };
const outFile = (p) => (p.endsWith('/') ? p.slice(1) + 'index.html' : p.slice(1));

/* 1) Asset-Versionen (Cache-Busting – GitHub Pages cacht fest 10 Minuten) */
const V = {};
for (const a of ['assets/css/site.css', 'assets/css/calc.css', 'assets/js/main.js', 'assets/js/calc.js', 'assets/js/calc-ui.js']) {
  if (fs.existsSync(path.join(ROOT, a))) V[a] = hash(read(a));
}

/* 2) Seiten laden & rendern */
const dir = path.join(ROOT, '_build/pages');
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mjs')).sort();
const pages = [];
for (const f of files) {
  const mod = await import(pathToFileURL(path.join(dir, f)).href);
  for (const page of [].concat(mod.default)) pages.push(page);
}
const rendered = [];
for (const page of pages) {
  const ctx = { page, preloads: [], faqItems: [], consent: false, crumbsDone: false };
  setCtx(ctx);
  const main = await page.render();
  setCtx(null);
  rendered.push({ page, html: renderDocument(page, main, ctx, V) });
}

/* 3) Icon-Sprite aus tatsächlich verwendeten Icons */
const symbols = [...USED_ICONS].sort().map((name) => {
  const svg = fs.readFileSync(path.join(ROOT, '_build/icons', `${name}.svg`), 'utf8');
  const vb = (svg.match(/viewBox="([^"]+)"/) || [, '0 0 24 24'])[1];
  const inner = svg.replace(/<!--[\s\S]*?-->/g, '').replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '').replace(/<title>[\s\S]*?<\/title>/, '').replace(/\s*\n\s*/g, '');
  const attrs = name === 'whatsapp' ? ' fill="currentColor" stroke="none"' : '';
  return `<symbol id="i-${name}" viewBox="${vb}"${attrs}>${inner}</symbol>`;
});
const sprite = `<svg xmlns="http://www.w3.org/2000/svg"><!-- Icons: Lucide (ISC, https://lucide.dev/license) · WhatsApp-Logo: Simple Icons (CC0) -->${symbols.join('')}</svg>\n`;
write('assets/icons.svg', sprite);
const spriteV = hash(sprite);

/* 4) Seiten schreiben */
const out = new Map();
for (const r of rendered) {
  const html = r.html.replaceAll(SPRITE_V, spriteV);
  const file = outFile(r.page.path);
  write(file, html);
  out.set(file, { ...r, html });
}

/* 5) Weiterleitungen (Meta-Refresh + Canonical) */
for (const rd of REDIRECTS) {
  const target = SITE.url + rd.to;
  write(rd.from, `<!DOCTYPE html>
<html lang="de"><head><meta charset="utf-8">
<title>Weitergeleitet: ${rd.title} | Europaneel</title>
<link rel="canonical" href="${target}">
<meta http-equiv="refresh" content="0; url=${rd.to}">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script>location.replace(${JSON.stringify(rd.to)} + location.hash);</script>
</head><body><p>Diese Seite ist umgezogen: <a href="${rd.to}">${rd.title}</a></p></body></html>
`);
}

/* 6) Sitemap, robots.txt, Manifest, Jekyll-Konfiguration */
const indexable = pages.filter((p) => p.robots !== 'noindex' && p.sitemap !== false);
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable.map((p) => `  <url><loc>${SITE.url}${p.path}</loc><lastmod>${p.updated}</lastmod></url>`).join('\n')}
</urlset>
`);
write('robots.txt', `# europaneel.de\nUser-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`);
write('site.webmanifest', JSON.stringify({
  name: 'Europaneel GmbH – Kühlzellen & Kühlraumbau', short_name: 'Europaneel', lang: 'de', start_url: '/', display: 'browser',
  background_color: '#ffffff', theme_color: '#16191f',
  icons: [{ src: '/assets/img/icon-192.png', sizes: '192x192', type: 'image/png' }, { src: '/assets/img/icon-512.png', sizes: '512x512', type: 'image/png' }],
}, null, 2) + '\n');
write('_config.yml', `# GitHub Pages: Die Seiten sind fertiges HTML (erzeugt mit node _build/build.mjs).\n# Jekyll liefert nur aus. Interne Ordner werden nie veröffentlicht.\nexclude:\n  - _build\n  - _intern\n  - "*.md"\n  - package.json\n  - node_modules\n`);

/* 7) Qualitätsprüfung */
const errors = [], warns = [];
const titles = new Map(), descs = new Map();
const exists = (rel) => out.has(rel) || fs.existsSync(path.join(ROOT, rel)) || REDIRECTS.some((r) => r.from === rel);
const idsOf = (html) => new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
for (const [file, { page, html }] of out) {
  const tag = `[${page.path}]`;
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) errors.push(`${tag} ${h1}× <h1> (erwartet: genau 1)`);
  if (page.robots !== 'noindex') {
    if (titles.has(page.title)) errors.push(`${tag} doppelter Title (auch ${titles.get(page.title)})`); else titles.set(page.title, page.path);
    if (descs.has(page.description)) errors.push(`${tag} doppelte Description`); else descs.set(page.description, page.path);
    if (page.title.length > 65 || page.title.length < 25) warns.push(`${tag} Title-Länge ${page.title.length}`);
    if (page.description.length > 160 || page.description.length < 90) warns.push(`${tag} Description-Länge ${page.description.length}`);
    if (!html.includes('rel="canonical"')) errors.push(`${tag} kein Canonical`);
  }
  for (const bad of ['CONTENT_REQUIRED', 'TODO', 'lorem', 'undefined', 'NaN', '[object Object]']) if (html.includes(bad)) errors.push(`${tag} enthält „${bad}“`);
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt="/.test(m[0])) errors.push(`${tag} <img> ohne alt`);
    if (!/\bwidth="/.test(m[0]) || !/\bheight="/.test(m[0])) errors.push(`${tag} <img> ohne width/height: ${m[0].slice(0, 80)}`);
  }
  const ids = idsOf(html);
  for (const m of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    const u = m[1];
    if (u.startsWith('#')) { if (u.length > 1 && !ids.has(u.slice(1))) errors.push(`${tag} Anker fehlt: ${u}`); continue; }
    if (!u.startsWith('/') || u.startsWith('//')) continue;
    const [p, frag] = u.split('#'); const clean = p.split('?')[0];
    const rel = clean.endsWith('/') ? clean.slice(1) + 'index.html' : clean.slice(1);
    if (!exists(rel)) errors.push(`${tag} Ziel fehlt: ${u}`);
    else if (frag && out.has(rel) && !idsOf(out.get(rel).html).has(frag)) errors.push(`${tag} Anker fehlt auf Zielseite: ${u}`);
  }
  for (const m of html.matchAll(/(?:srcset|imagesrcset)="([^"]+)"/g)) for (const part of m[1].split(',')) {
    const u = part.trim().split(' ')[0]; if (u.startsWith('/') && !exists(u.slice(1))) errors.push(`${tag} Bild fehlt: ${u}`);
  }
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { try { JSON.parse(m[1]); } catch (e) { errors.push(`${tag} JSON-LD ungültig: ${e.message}`); } }
}
for (const name of USED_ICONS) if (!fs.existsSync(path.join(ROOT, '_build/icons', `${name}.svg`))) errors.push(`Icon fehlt: ${name}`);

console.log(`Build: ${out.size} Seiten, ${REDIRECTS.length} Weiterleitungen, ${USED_ICONS.size} Icons, Sitemap ${indexable.length} URLs – ${Date.now() - t0} ms`);
if (warns.length) { console.log(`\nHinweise (${warns.length}):`); warns.forEach((w) => console.log('  · ' + w)); }
const uniq = [...new Set(errors)];
if (uniq.length) { console.log(`\nFEHLER (${uniq.length}):`); uniq.forEach((e) => console.log('  ✗ ' + e)); process.exitCode = 1; }
else console.log('\nPrüfung: keine Fehler ✓');

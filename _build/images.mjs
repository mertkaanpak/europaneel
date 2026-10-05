// Bild-Pipeline: erzeugt aus den Originalen in _build/src-img/ optimierte
// AVIF-/WebP-Varianten (srcset), Logo-Varianten, Favicons und das Social-Image.
// Aufruf: node _build/images.mjs   (benötigt ImageMagick 7 im PATH: `magick`)
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, '_build/src-img');
const OUT = path.join(ROOT, 'assets/img');
const MANIFEST = path.join(ROOT, '_build/images.json');
const WIDTHS = [480, 800, 1200, 1600];

// Fotos: Dateiname (ohne Endung) → sachliche Standard-Bildbeschreibung (Alt-Text).
// Beschreibungen zeigen nur, was zu sehen ist – keine erfundenen Orte oder Kunden.
export const PHOTOS = {
  'kuehlzellen-schiebetueren-halle': 'Zwei große weiße Kühlzellen mit Kühlhaus-Schiebetüren in einer Industriehalle',
  'kuehlzelle-anthrazit-schiebetuer': 'Kühlzelle mit anthrazitfarbenen Paneelen und weißer Schiebetür',
  'kuehlanlage-mehrzellig-hochformat': 'Langgestreckte mehrzellige Kühlanlage mit drei Schiebetüren in einer Halle',
  'kuehlanlage-mehrzellig-montage': 'Mehrzellige Kühlanlage während der Montage mit geöffneten Schiebetüren und Hubarbeitsbühne',
  'kuehlanlage-monoblock-aggregate': 'Kühlanlage mit an der Wand montierten Kälteaggregaten, Schiebetüren und Auffahrrampen',
  'kuehlanlage-aggregat-schiebetueren': 'Front einer Kühlanlage mit Kälteaggregat und zwei Schiebetüren',
  'kuehlzelle-drehtuer-auffahrrampe': 'Kompakte weiße Kühlzelle mit Drehtür und Auffahrrampe aus Riffelblech',
  'kuehlzelle-anthrazit-fliesenboden': 'Anthrazitfarbene Kühlzelle mit weißer Schiebetür auf gefliestem Boden',
  'kuehlzelle-monoblock-werkstatt': 'Anthrazitfarbene Kühlzelle mit Kälteaggregat neben der Tür',
  'europaneel-lager-bottrop': 'Lagerhalle der Europaneel GmbH in Bottrop mit gestapelten Sandwichpaneelen',
  'europaneel-werkstatt-bottrop': 'Werkstatthalle der Europaneel GmbH in Bottrop',
  'europaneel-standort-bottrop': 'Firmengelände der Europaneel GmbH am Rhein-Herne-Kanal in Bottrop',
};

const magick = (...args) => execFileSync('magick', args, { stdio: ['ignore', 'pipe', 'pipe'] });
const dims = (file) => magick('identify', '-format', '%w %h', file).toString().trim().split(' ').map(Number);
const fresh = (out, src) => fs.existsSync(out) && fs.statSync(out).mtimeMs >= fs.statSync(src).mtimeMs;

fs.mkdirSync(OUT, { recursive: true });
const manifest = { photos: {}, generated: new Date().toISOString().slice(0, 10) };

// 1) Fotos → AVIF + WebP in mehreren Breiten
for (const [name, alt] of Object.entries(PHOTOS)) {
  const src = path.join(SRC, `${name}.jpeg`);
  const [w, h] = dims(src);
  const widths = WIDTHS.filter((x) => x < w);
  widths.push(Math.min(w, 1600));
  const unique = [...new Set(widths)].sort((a, b) => a - b);
  for (const width of unique) {
    for (const [ext, q] of [['avif', '52'], ['webp', '76']]) {
      const out = path.join(OUT, `${name}-${width}.${ext}`);
      if (fresh(out, src)) continue;
      magick(src, '-auto-orient', '-strip', '-filter', 'Lanczos', '-resize', `${width}x`,
        '-unsharp', '0x0.5+0.4+0.008', '-quality', q, out);
    }
  }
  manifest.photos[name] = { width: w, height: h, widths: unique, alt };
  console.log(`✓ ${name}  ${w}×${h}  → ${unique.join('/')}`);
}

// 2) Logo: zugeschnitten (ohne 69 % Leerraum) + helle Variante für dunkle Flächen
const logoSrc = path.join(SRC, 'europaneel-logo-original.webp');
const logoTrim = path.join(OUT, 'europaneel-logo.png');
magick(logoSrc, '-trim', '+repage', '-bordercolor', 'none', '-border', '6', logoTrim);
magick(logoTrim, '-resize', '720x', '-quality', '90', path.join(OUT, 'europaneel-logo.webp'));
// helle Variante: entsättigte (graue) Bildanteile → hell, Markenrot bleibt
const logoLight = path.join(OUT, 'europaneel-logo-light.png');
magick(logoTrim, '-channel', 'RGB', '-fx', 'saturation < 0.35 ? 0.93 : u', '+channel', logoLight);
magick(logoLight, '-resize', '720x', '-quality', '90', path.join(OUT, 'europaneel-logo-light.webp'));
const [lw, lh] = dims(logoTrim);
manifest.logo = { width: lw, height: lh };
// Alt-URL /logo.png (in externen Verweisen/Caches) mit dem sauberen Logo aktualisieren
fs.copyFileSync(logoTrim, path.join(ROOT, 'logo.png'));
console.log(`✓ Logo ${lw}×${lh} (+ hell)`);

// 3) Favicons & App-Icons aus dem Emblem
const emb = path.join(SRC, 'europaneel-emblem.jpeg');
const embSq = path.join(OUT, '_emblem-square.png');
magick(emb, '-crop', '640x640+195+95', '+repage', embSq);
magick(embSq, '-resize', '180x180', path.join(ROOT, 'apple-touch-icon.png'));
magick(embSq, '-resize', '192x192', path.join(OUT, 'icon-192.png'));
magick(embSq, '-resize', '512x512', path.join(OUT, 'icon-512.png'));
magick(embSq, '-define', 'icon:auto-resize=48,32,16', path.join(ROOT, 'favicon.ico'));
fs.unlinkSync(embSq);
console.log('✓ Favicons (ico 16/32/48, apple-touch 180, 192, 512)');

// 4) Social-Image 1200×630 (OpenGraph / X)
const og = path.join(OUT, 'og-europaneel.jpg');
const ogBase = path.join(SRC, 'kuehlanlage-mehrzellig-montage.jpeg');
magick(ogBase, '-resize', '1200x630^', '-gravity', 'center', '-extent', '1200x630',
  '(', '-size', '1200x630', 'gradient:rgba(17,19,24,0.0)-rgba(17,19,24,0.94)', ')', '-compose', 'over', '-composite',
  '(', path.join(OUT, 'europaneel-logo-light.png'), '-resize', '440x', ')', '-gravity', 'southwest', '-geometry', '+56+52', '-compose', 'over', '-composite',
  '-strip', '-quality', '84', og);
console.log('✓ Social-Image 1200×630');

fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2));
console.log(`\nManifest → ${path.relative(ROOT, MANIFEST)}`);

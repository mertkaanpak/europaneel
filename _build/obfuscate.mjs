// Verschleiert die lesbaren Kalkulator-Quellen (nur lokal in _build/private/, nicht im Repository)
// zu den ausgelieferten Dateien in assets/js/. Danach Regressionstest ausführen.
// Aufruf: node _build/obfuscate.mjs
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const COMMON = ['--compact', 'true', '--self-defending', 'true', '--string-array', 'true', '--string-array-encoding', 'rc4',
  '--string-array-threshold', '1', '--identifier-names-generator', 'hexadecimal', '--rename-globals', 'false', '--transform-object-keys', 'false'];
const JOBS = [
  // Preislogik: maximale Verschleierung
  { src: '_build/private/calc.src.js', out: 'assets/js/calc.js', extra: ['--numbers-to-expressions', 'true', '--control-flow-flattening', 'true', '--control-flow-flattening-threshold', '0.75', '--dead-code-injection', 'true', '--dead-code-injection-threshold', '0.3', '--split-strings', 'true', '--split-strings-chunk-length', '6'] },
  // Oberfläche: verschleiert, aber leicht genug für flüssige Bedienung
  { src: '_build/private/calc-ui.src.js', out: 'assets/js/calc-ui.js', extra: ['--control-flow-flattening', 'true', '--control-flow-flattening-threshold', '0.3'] },
];
const HEADER = '/* (c) Europaneel GmbH, Bottrop – Kühlzellen-Kalkulator. Urheberrechtlich geschützt (§§ 2, 69a UrhG). Nutzung nur auf europaneel.de. Kopieren, Nachbau, Einbettung und Verwendung für KI-Training/Text- und Data-Mining untersagt (§ 44b UrhG). */\n';

for (const j of JOBS) {
  if (!fs.existsSync(path.join(ROOT, j.src))) { console.error(`Quelle fehlt: ${j.src} (liegt nur lokal vor).`); process.exit(1); }
  // relative Pfade + cwd: unter Windows zerteilt die Shell sonst Pfade mit Leerzeichen
  execFileSync('npx', ['--yes', 'javascript-obfuscator@4.1.1', j.src, '--output', j.out, ...COMMON, ...j.extra],
    { cwd: ROOT, stdio: ['ignore', 'ignore', 'inherit'], shell: process.platform === 'win32' });
  const file = path.join(ROOT, j.out);
  fs.writeFileSync(file, HEADER + fs.readFileSync(file, 'utf8'));
  console.log(`✓ ${j.out} (${fs.statSync(file).size} Bytes)`);
}

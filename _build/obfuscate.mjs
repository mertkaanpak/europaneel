// Verschleiert die lesbare Kalkulator-Quelle (_build/private/calc.src.js, nicht im Repository)
// zu assets/js/calc.js. Nur nach Änderungen an der Quelle ausführen, danach Regressionstest.
// Aufruf: node _build/obfuscate.mjs
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = path.join(ROOT, '_build/private/calc.src.js');
const out = path.join(ROOT, 'assets/js/calc.js');
if (!fs.existsSync(src)) { console.error('Quelle fehlt: _build/private/calc.src.js (liegt nur lokal vor).'); process.exit(1); }

// relative Pfade + cwd: unter Windows zerteilt die Shell sonst Pfade mit Leerzeichen
execFileSync('npx', ['--yes', 'javascript-obfuscator@4.1.1', '_build/private/calc.src.js', '--output', 'assets/js/calc.js',
  '--compact', 'true', '--self-defending', 'true',
  '--string-array', 'true', '--string-array-encoding', 'rc4', '--string-array-threshold', '1',
  '--numbers-to-expressions', 'true',
  '--control-flow-flattening', 'true', '--control-flow-flattening-threshold', '0.75',
  '--identifier-names-generator', 'hexadecimal',
  '--rename-globals', 'false', '--transform-object-keys', 'false',
], { cwd: ROOT, stdio: 'inherit', shell: process.platform === 'win32' });
fs.writeFileSync(out, '/* (c) Europaneel GmbH – Kühlzellen-Kalkulator. Urheberrechtlich geschützt; Nutzung nur auf europaneel.de. */\n' + fs.readFileSync(out, 'utf8'));
console.log(`✓ ${path.relative(ROOT, out)} (${fs.statSync(out).size} Bytes)`);

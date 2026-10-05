// Rechtstexte: Wortlaut unverändert aus der bisherigen Website übernommen (nur Darstellung:
// eigene URL, Überschriften-Hierarchie). Inhaltliche Änderungen nur nach juristischer Prüfung.
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, pageHero } from '../lib.mjs';

const T = JSON.parse(fs.readFileSync(path.join(ROOT, '_build/legal-texts.json'), 'utf8'));
const h3toh2 = (h) => h.replace(/<h3>/g, '<h2>').replace(/<\/h3>/g, '</h2>');

const legal = (key, p) => ({
  path: p.path, title: p.title, description: p.description, updated: '2026-10-02', sitemap: false, crumbs: [[p.h1, p.path]],
  render: () => `${pageHero({ title: p.h1, lead: p.lead, ctas: false })}
<section class="sec--sm"><div class="container container--narrow"><div class="prose legal">${h3toh2(T[key])}</div></div></section>`,
});

export default [
  legal('impressum', { path: '/impressum/', h1: 'Impressum', title: 'Impressum | Europaneel GmbH', description: 'Impressum der Europaneel GmbH, Am Rhein-Herne-Kanal 10, 46242 Bottrop: Vertretung, Registereintrag, Umsatzsteuer-ID und Kontaktdaten.', lead: 'Angaben gemäß § 5 DDG.' }),
  legal('datenschutz', { path: '/datenschutz/', h1: 'Datenschutzerklärung', title: 'Datenschutzerklärung | Europaneel GmbH', description: 'Datenschutzerklärung der Europaneel GmbH: welche Daten beim Besuch der Website und bei Anfragen verarbeitet werden und welche Rechte Sie haben.', lead: 'Informationen zur Verarbeitung personenbezogener Daten auf europaneel.de.' }),
  legal('agb', { path: '/agb/', h1: 'Allgemeine Geschäftsbedingungen', title: 'Allgemeine Geschäftsbedingungen (AGB) | Europaneel GmbH', description: 'Allgemeine Geschäftsbedingungen der Europaneel GmbH für Lieferungen und Leistungen an Unternehmer im Sinne des § 14 BGB.', lead: 'Für Verträge, Lieferungen und Leistungen der Europaneel GmbH.' }),
];

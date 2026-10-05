// Rechtstexte: Wortlaut unverändert aus der bisherigen Website übernommen (nur Darstellung:
// eigene URL, Überschriften-Hierarchie). Inhaltliche Änderungen nur nach juristischer Prüfung.
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, pageHero } from '../lib.mjs';

const T = JSON.parse(fs.readFileSync(path.join(ROOT, '_build/legal-texts.json'), 'utf8'));
// Ergänzung auf Wunsch des Inhabers (05.10.2026) – vom Anwalt prüfen lassen.
const NUTZUNG = `<h2>Urheberrecht und Nutzungsvorbehalt</h2>
<p>Sämtliche Inhalte dieser Website – Texte, Fotos, Grafiken, Gestaltung sowie der Kühlzellen-Kalkulator einschließlich Quellcode und Berechnungslogik – sind urheberrechtlich geschützt (§§ 2, 69a UrhG). Jede Vervielfältigung, Bearbeitung, Nachbildung oder Einbettung ohne schriftliche Zustimmung der Europaneel GmbH ist untersagt.</p>
<p>Nutzungsvorbehalt nach § 44b Abs. 3 UrhG: Die Europaneel GmbH behält sich die Nutzung ihrer Inhalte für Text und Data Mining ausdrücklich vor. Eine Verwendung zum Training oder Betrieb von KI-Systemen ist nicht gestattet. Der Vorbehalt ist zusätzlich maschinenlesbar in der robots.txt und per TDM-Reservation hinterlegt.</p>`;
const h3toh2 = (h) => h.replace(/<h3>/g, '<h2>').replace(/<\/h3>/g, '</h2>');

const legal = (key, p) => ({
  path: p.path, title: p.title, description: p.description, updated: '2026-10-05', sitemap: false, crumbs: [[p.h1, p.path]],
  render: () => `${pageHero({ title: p.h1, lead: p.lead, ctas: false })}
<section class="sec--sm"><div class="container container--narrow"><div class="prose legal">${h3toh2(T[key])}${key === 'impressum' ? NUTZUNG : ''}</div></div></section>`,
});

export default [
  legal('impressum', { path: '/impressum/', h1: 'Impressum', title: 'Impressum | Europaneel GmbH', description: 'Impressum der Europaneel GmbH, Am Rhein-Herne-Kanal 10, 46242 Bottrop: Vertretung, Registereintrag, Umsatzsteuer-ID und Kontaktdaten.', lead: 'Angaben gemäß § 5 DDG.' }),
  legal('datenschutz', { path: '/datenschutz/', h1: 'Datenschutzerklärung', title: 'Datenschutzerklärung | Europaneel GmbH', description: 'Datenschutzerklärung der Europaneel GmbH: welche Daten beim Besuch der Website und bei Anfragen verarbeitet werden und welche Rechte Sie haben.', lead: 'Informationen zur Verarbeitung personenbezogener Daten auf europaneel.de.' }),
  legal('agb', { path: '/agb/', h1: 'Allgemeine Geschäftsbedingungen', title: 'Allgemeine Geschäftsbedingungen (AGB) | Europaneel GmbH', description: 'Allgemeine Geschäftsbedingungen der Europaneel GmbH für Lieferungen und Leistungen an Unternehmer im Sinne des § 14 BGB.', lead: 'Für Verträge, Lieferungen und Leistungen der Europaneel GmbH.' }),
];

import { icon, fig, pageHero, secHead, points, spec, related, ctaBand } from '../lib.mjs';
import { SITE } from '../site.config.mjs';

// CONTENT_REQUIRED (intern): Gründungsjahr, Geschichte, Teamgröße, Fertigungstiefe, Zertifikate,
// Ansprechpartner mit Foto – erst nach Freigabe ergänzen. Kennzahlen nur, wenn SITE.facts bestätigt.
const confirmed = Object.values(SITE.facts).filter((f) => f.confirmed);

export default {
  path: '/unternehmen/',
  title: 'Über uns: Europaneel GmbH, Kühlraumbau in Bottrop',
  description: 'Europaneel aus Bottrop plant, liefert und montiert Kühlzellen, Kühlhäuser, Isoliertüren und Paneele – mit Lager und Werkstatt am Rhein-Herne-Kanal.',
  updated: '2026-10-05',
  pageType: 'AboutPage',
  crumbs: [['Unternehmen', '/unternehmen/']],
  ogPhoto: 'europaneel-standort-bottrop',
  render() {
    return `${pageHero({
      eyebrow: 'Unternehmen',
      title: 'Europaneel – Isoliertüren und Kühlraumbau aus Bottrop',
      lead: 'Wir planen, liefern und montieren Kühlzellen, Tiefkühlzellen und Kühlhäuser für Gewerbe und Industrie. Unser Standort am Rhein-Herne-Kanal vereint Lager, Werkstatt und Beratung – und ist Ausgangspunkt für Projekte in ganz Deutschland.',
      photo: 'europaneel-standort-bottrop', cap: 'Firmengelände der Europaneel GmbH in Bottrop',
      ctas: { lead: 'secondary' },
    })}

${confirmed.length ? `<section class="sec--facts" aria-label="Kennzahlen"><div class="container"><div class="stats">${confirmed.map((f) => `<div class="stat"><b>${f.value.replace('+', '<span>+</span>')}</b><small>${f.label}</small></div>`).join('')}</div></div></section>` : ''}

<section class="sec" aria-labelledby="wer-t">
  <div class="container split">
    <div>${secHead({ eyebrow: 'Wer wir sind', id: 'wer-t', title: 'Ein Fachbetrieb für alles, was kalt bleiben muss', stack: true, text: 'Unser Logo trägt den Zusatz „Isoliertüren & Kühlraumbau“ – und genau das ist unser Kern: die gedämmte Hülle, die Tür und die Technik, die sie kalt hält.' })}</div>
    <div data-reveal>${points([
      ['Kühlzellen und Kühlhäuser', 'Von der einzelnen Zelle bis zur mehrzelligen Anlage – geplant nach Maß, montiert durch unser Team.'],
      ['Isoliertüren', 'Dreh- und Schiebetüren für Kühl- und Tiefkühlräume, in gängigen Formaten ab Lager.'],
      ['Sandwichpaneele', 'Viele Stärken, Formate und Oberflächen kurzfristig verfügbar – für Projekte oder zur Abholung.'],
      ['Kältetechnik', 'Aggregate als Huckepack-, Monoblock- oder Split-Lösung, abgestimmt auf die Zelle.'],
    ])}</div>
  </div>
</section>

<section class="sec sec--surface" aria-labelledby="ort-t">
  <div class="container">
    ${secHead({ eyebrow: 'Standort', id: 'ort-t', title: 'Lager, Werkstatt und Beratung an einem Ort', text: 'Kurze Wege zwischen Material, Bearbeitung und Auslieferung – und die Möglichkeit, Ware direkt abzuholen.' })}
    <div class="grid g-3">
      ${fig('europaneel-lager-bottrop', { n: 2, cap: 'Lagerhalle mit Sandwichpaneelen', ratio: '34', reveal: true, sizes: '(min-width: 1024px) 400px, 100vw' })}
      ${fig('europaneel-werkstatt-bottrop', { n: 3, cap: 'Werkstatthalle am Standort', ratio: '34', reveal: true, sizes: '(min-width: 1024px) 400px, 100vw' })}
      ${fig('europaneel-standort-bottrop', { n: 4, cap: 'Zufahrt und Hof am Rhein-Herne-Kanal', ratio: '34', reveal: true, sizes: '(min-width: 1024px) 400px, 100vw' })}
    </div>
  </div>
</section>

<section class="sec" aria-labelledby="arbeit-t">
  <div class="container split split--rev">
    <div>${secHead({ eyebrow: 'Arbeitsweise', id: 'arbeit-t', title: 'Woran Sie die Zusammenarbeit erkennen', stack: true })}</div>
    <div data-reveal>${points([
      ['Preise, bevor Sie fragen müssen', 'Unser Kalkulator zeigt einen Netto-Richtpreis ohne Registrierung. Das schriftliche Angebot listet alle Positionen einzeln auf.'],
      ['Ein fester Ansprechpartner', 'Von der ersten Frage bis zur Übergabe sprechen Sie mit denselben Menschen.'],
      ['Ehrliche Beratung', 'Ob eine Erweiterung, ein Boden oder ein größeres Aggregat sinnvoll ist, sagen wir Ihnen auch dann, wenn die Antwort „nein“ lautet.'],
    ])}</div>
  </div>
</section>

<section class="sec sec--surface" aria-labelledby="daten-t">
  <div class="container split">
    <div>${secHead({ eyebrow: 'Unternehmensdaten', id: 'daten-t', title: 'Auf einen Blick', stack: true })}</div>
    <div data-reveal>${spec([
      ['Firma', SITE.legalName],
      ['Anschrift', `${SITE.address.street}, ${SITE.address.zip} ${SITE.address.city}`],
      ['Geschäftsführer', 'Mehmet Pak'],
      ['Handelsregister', 'HRB 24252, Amtsgericht Duisburg'],
      ['Telefon', `<a href="${SITE.phone.href}">${SITE.phone.display}</a>`],
      ['E-Mail', `<a href="mailto:${SITE.email}">${SITE.email}</a>`],
      ['Erreichbarkeit', `${SITE.hours.text}, ${SITE.hours.sat}`],
      ['Einsatzgebiet', 'Deutschland, Österreich, Schweiz, Niederlande'],
    ])}</div>
  </div>
</section>

<section class="sec--sm"><div class="container">${related([
  { href: '/referenzen/', tag: 'Referenzen', title: 'Projekte aus der Praxis', text: 'Echte Fotos unserer Anlagen.' },
  { href: '/kuehlzellen-montage/', tag: 'Service', title: 'Planung & Montage', text: 'So läuft ein Projekt ab.' },
  { href: '/kontakt.html', tag: 'Kontakt', title: 'Anfahrt & Kontakt', text: 'Besuch nach Vereinbarung.' },
])}</div></section>

${ctaBand()}`;
  },
};

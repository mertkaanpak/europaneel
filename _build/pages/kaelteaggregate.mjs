import { icon, fig, pageHero, secHead, facts, cmp, points, faq, related, ctaBand, note } from '../lib.mjs';

export default {
  path: '/kaelteaggregate/',
  title: 'Kälteaggregate für Kühlzellen: Monoblock & Split | Europaneel',
  description: 'Kälteaggregate für Kühl- und Tiefkühlzellen: Huckepack, Monoblock und Split im Vergleich – Aufstellung, Abwärme und Kältemittel nach F-Gase-Verordnung.',
  updated: '2026-10-05',
  crumbs: [['Kälteaggregate', '/kaelteaggregate/']],
  service: { name: 'Kälteaggregate für Kühlzellen', type: 'Lieferung von Kälteaggregaten für Kühl- und Tiefkühlzellen' },
  ogPhoto: 'kuehlanlage-aggregat-schiebetueren',
  render() {
    return `${pageHero({
      eyebrow: 'Kältetechnik',
      title: 'Kälteaggregate für Kühlzellen und Kühlhäuser',
      lead: 'Ohne Kältetechnik ist eine Kühlzelle nur ein gut gedämmter Raum. Wir bieten Aggregate in den gängigen Bauformen Huckepack, Monoblock und Split an – abgestimmt auf Zellengröße, Temperatur und Aufstellort.',
      photo: 'kuehlanlage-aggregat-schiebetueren', cap: 'Kälteaggregat über der Front einer mehrzelligen Anlage',
      ctas: { lead: 'secondary' },
    })}

<section class="sec--facts" aria-label="Eckdaten"><div class="container">${facts([
  ['Bauformen', 'Huckepack, Monoblock, Split'],
  ['Einsatz', 'Kühlung und Tiefkühlung'],
  ['Abstimmung', 'Volumen, Temperatur, Aufstellort'],
  ['Kältemittel', 'nach F-Gase-VO (EU) 2024/573'],
])}</div></section>

<section class="sec" aria-labelledby="bauf-t">
  <div class="container">
    ${secHead({ eyebrow: 'Bauformen', id: 'bauf-t', title: 'Huckepack, Monoblock oder Split – die Unterschiede', text: 'Alle drei kühlen zuverlässig. Sie unterscheiden sich darin, wo die Technik sitzt, wohin die Abwärme geht und wie aufwendig die Installation ist.' })}
    <div data-reveal>${cmp(['', 'Huckepack', 'Monoblock', 'Split'], [
      ['Aufbau', 'steckerfertiges Gerät, das in die Zellenwand eingehängt wird', 'kompaktes Gerät mit werkseitig gefülltem, geschlossenem Kältekreis', 'Verflüssigungssatz außerhalb, Verdampfer in der Zelle, verbunden über Kältemittelleitungen'],
      ['Abwärme', 'in den Aufstellraum', 'in den Aufstellraum', 'dort, wo der Verflüssigungssatz steht – z. B. im Freien'],
      ['Installation', 'gering, keine Kältemittelleitungen vor Ort', 'gering, keine Kältemittelleitungen vor Ort', 'höher: Leitungen werden vor Ort von zertifiziertem Fachpersonal verlegt'],
      ['Typisch für', 'kleinere und mittlere Zellen', 'kleinere und mittlere Zellen', 'großen Kältebedarf, warme Aufstellräume, Kühlhäuser'],
    ], { label: 'Vergleich der Aggregat-Bauformen', note: 'Deckenaggregate sind eine eigene Bauform: Sie sitzen auf der Zellendecke, die dafür gegebenenfalls verstärkt werden muss.' })}</div>
  </div>
</section>

<section class="sec sec--surface" aria-labelledby="ausw-t">
  <div class="container split">
    <div>${secHead({ eyebrow: 'Auswahl', id: 'ausw-t', title: 'Woran sich die Wahl des Aggregats entscheidet', stack: true })}
      ${fig('kuehlanlage-monoblock-aggregate', { n: 2, cap: 'An der Zellenwand montierte Aggregate', reveal: true, sizes: '(min-width: 1024px) 480px, 100vw' })}</div>
    <div data-reveal>${points([
      ['Kältebedarf', 'Volumen, Solltemperatur, Häufigkeit der Türöffnungen und die Menge täglich eingelagerter Ware bestimmen, wie viel Kälteleistung nötig ist – plus Reserve für warme Tage.'],
      ['Aufstellort und Abwärme', 'Steckerfertige Geräte geben ihre Wärme an den Raum ab, in dem die Zelle steht. Der Raum muss gut belüftet sein, sonst heizt er sich auf und das Aggregat arbeitet ineffizient.'],
      ['Geräusch und Platz', 'Wo es leise sein muss oder kein Platz für die Abwärme ist, kann ein außen aufgestellter Verflüssigungssatz die bessere Lösung sein.'],
      ['Tiefkühlung', 'Tiefkühlaggregate müssen den Verdampfer regelmäßig abtauen. Das gehört zur Auslegung genauso wie die Wahl des Kältemittels.'],
    ])}</div>
  </div>
</section>

<section class="sec" aria-labelledby="fgas-t">
  <div class="container split split--rev">
    <div data-reveal>
      <p class="eyebrow">Kältemittel</p>
      <h2 id="fgas-t">Was die F-Gase-Verordnung bedeutet</h2>
      <div class="prose mt-m">
        <p>Die EU-Verordnung über fluorierte Treibhausgase (EU) 2024/573 begrenzt den Einsatz klimaschädlicher Kältemittel schrittweise. Für Kühlzellen ist vor allem relevant:</p>
        <ul>
          <li>Neue <strong>in sich geschlossene</strong> Kälteanlagen mit fluorierten Gasen mit einem Treibhauspotenzial (GWP) von 150 oder mehr dürfen seit dem 1. Januar 2025 nicht mehr in Verkehr gebracht werden.</li>
          <li>Für weitere Anlagen wie Split-Systeme gelten Verbote für GWP ≥ 150 erst ab 2030.</li>
          <li>Bestehende Anlagen dürfen weiter betrieben werden; für die Wartung mit frischen Kältemitteln mit sehr hohem GWP gelten seit 2025 Einschränkungen.</li>
        </ul>
        <p>In steckerfertigen Geräten kommen deshalb zunehmend natürliche Kältemittel wie Propan (R290) zum Einsatz.</p>
      </div>
    </div>
    <div data-reveal data-reveal-d="1">${note('Hinweis', 'Diese Übersicht ersetzt keine Rechtsberatung. Welche Vorgaben für Ihre Anlage gelten – etwa beim Austausch eines älteren Aggregats –, besprechen wir im Projekt.', '', 'scale')}</div>
  </div>
</section>

<section class="sec sec--surface" aria-labelledby="faq-t">
  <div class="container split">
    <div>${secHead({ eyebrow: 'FAQ', id: 'faq-t', title: 'Fragen zu Kälteaggregaten', stack: true })}</div>
    ${faq([
      { q: 'Welches Aggregat passt zu meiner Kühlzelle?', a: 'Für kleinere und mittlere Zellen sind steckerfertige Huckepack- oder Monoblock-Geräte meist die einfachste Lösung. Bei großem Kältebedarf, warmen Aufstellräumen oder wenn die Abwärme nach draußen soll, ist eine Split-Lösung sinnvoll. Wir legen das Aggregat anhand von Volumen, Temperatur und Nutzung aus.' },
      { q: 'Wohin geht die Abwärme?', a: 'Bei Huckepack- und Monoblock-Geräten in den Raum, in dem die Zelle steht – er muss daher gut belüftet sein. Bei Split-Anlagen dorthin, wo der Verflüssigungssatz aufgestellt wird, zum Beispiel im Freien.' },
      { q: 'Ist das Aggregat im Kalkulator-Preis enthalten?', a: 'Nein. Der Kalkulator zeigt einen Richtpreis für Paneele und Tür. Das passende Aggregat bieten wir separat an.' },
      { q: 'Kann ein vorhandenes Aggregat weiter genutzt werden?', a: 'Das hängt von Zustand, Leistung und Kältemittel ab. Bestehende Anlagen dürfen grundsätzlich weiter betrieben werden; ob das Gerät zur neuen oder erweiterten Zelle passt, prüfen wir im Einzelfall.' },
    ])}
  </div>
</section>

<section class="sec--sm"><div class="container">${related([
  { href: '/kuehlzellen/', tag: 'Lösungen', title: 'Kühlzellen nach Maß', text: 'Zelle und Kältetechnik aus einer Hand.' },
  { href: '/tiefkuehlzellen/', tag: 'Minusbereich', title: 'Tiefkühlzellen', text: 'Aggregate mit Abtaufunktion.' },
  { href: '/kuehlzellen-montage/', tag: 'Service', title: 'Planung & Montage', text: 'Aufstellort und Abwärme vorab klären.' },
])}</div></section>

${ctaBand({ lead: 'secondary', title: 'Welches Aggregat passt zu Ihrer Zelle?', text: 'Nennen Sie uns Zellenmaße, Temperatur und Aufstellort – wir schlagen Ihnen eine passende Kältelösung vor.' })}`;
  },
};

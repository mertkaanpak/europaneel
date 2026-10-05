import { icon, fig, pageHero, secHead, facts, spec, cmp, checks, steps, faq, related, ctaBand, note, linkArrow } from '../lib.mjs';

export default {
  path: '/kuehlzellen/',
  title: 'Kühlzellen nach Maß – planen, liefern, montieren | Europaneel',
  description: 'Begehbare Kühlzellen nach Maß für Gastronomie, Handel und Industrie: mit oder ohne Boden, Dreh- oder Schiebetür, Kältetechnik und Montage. Richtpreis online.',
  updated: '2026-10-05',
  crumbs: [['Kühlzellen', '/kuehlzellen/']],
  service: { name: 'Kühlzellen nach Maß', type: 'Planung, Lieferung und Montage von Kühlzellen' },
  ogPhoto: 'kuehlzelle-anthrazit-fliesenboden',
  render() {
    return `${pageHero({
      eyebrow: 'Pluskühlung · begehbare Kühlzellen',
      title: 'Kühlzellen nach Maß für Gewerbe und Lebensmittelbetriebe',
      lead: 'Von der kompakten Zelle für die Gastronomieküche bis zum mehrzelligen Kühlraum im Lager: Wir planen Abmessungen, Boden, Paneelstärke, Türen und Kältetechnik passend zu Temperatur und Nutzung – und montieren deutschlandweit.',
      photo: 'kuehlzelle-anthrazit-fliesenboden', cap: 'Kühlzelle mit anthrazitfarbenen Paneelen und Schiebetür',
    })}

<section class="sec--facts" aria-label="Eckdaten"><div class="container">${facts([
  ['Bauweise', 'Modular aus Sandwichpaneelen'],
  ['Boden', 'Mit Bodenelement oder auf vorhandenem Boden'],
  ['Raumhöhen im Kalkulator', '2,10 bis 4,70 m in 50-cm-Schritten'],
  ['Türen ab Lager', '9 Drehtür- und 14 Schiebetürformate'],
])}</div></section>

<section class="sec" aria-labelledby="was-t">
  <div class="container split">
    <div data-reveal>
      <p class="eyebrow">Aufbau</p>
      <h2 id="was-t">Was eine Kühlzelle ausmacht</h2>
      <div class="prose mt-m">
        <p>Eine Kühlzelle ist ein begehbarer Kühlraum aus vorgefertigten <a href="/sandwichpaneele/">Sandwichpaneelen</a>: Zwei beschichtete Deckschichten umschließen einen Dämmkern, die Elemente werden an den Stößen dicht miteinander verbunden. Wände und Decke bilden so eine geschlossene, gedämmte Hülle – auf Wunsch mit eigenem Bodenelement.</p>
        <p>Die Temperatur hält ein <a href="/kaelteaggregate/">Kälteaggregat</a>, das auf Volumen, Solltemperatur und Aufstellort abgestimmt ist. Weil die Zelle modular aufgebaut ist, lässt sie sich exakt an Raum und Abläufe anpassen; eine spätere Erweiterung ist je nach baulicher Situation grundsätzlich möglich.</p>
        <p>Die Begriffe <strong>Kühlzelle</strong> und <strong>Kühlraum</strong> werden im Alltag oft gleich verwendet. Gemeint ist in beiden Fällen ein gedämmter, gekühlter Raum – bei der Kühlzelle als eigenständige Paneelkonstruktion. Welche Variante für ein bestehendes Gebäude sinnvoll ist, erklären wir im Ratgeber <a href="/ratgeber/kuehlraum-bauen/">Kühlraum bauen</a>.</p>
      </div>
    </div>
    <div data-reveal data-reveal-d="1">${spec([
      ['Hülle', 'Sandwichpaneele für Wände und Decke, optional Boden'],
      ['Kühlbereich', 'Pluskühlung – für den Minusbereich siehe <a href="/tiefkuehlzellen/">Tiefkühlzellen</a>'],
      ['Boden', 'Isoliertes Bodenelement inkl. Siebdruckplatte oder Aufstellung auf vorhandenem, ebenem Boden'],
      ['Raumhöhen (Kalkulator)', 'ohne Boden 2,10–4,60 m · mit Boden 2,20–4,70 m'],
      ['Grundfläche', 'nach Ihren Wunschmaßen – alle Größen möglich'],
      ['Türen', 'Drehtüren 75 × 175 bis 120 × 220 cm, Schiebetüren für breite Öffnungen; Anschlag links oder rechts, mit oder ohne Schwelle'],
      ['Kältetechnik', 'Huckepack-, Monoblock- oder Split-Aggregat'],
      ['Leistung', 'Beratung, Aufmaß, Lieferung, Montage – oder Selbstabholung in Bottrop'],
    ], 'Kühlzelle im Überblick')}</div>
  </div>
</section>

<section class="sec sec--surface" aria-labelledby="boden-t">
  <div class="container">
    ${secHead({ eyebrow: 'Entscheidung 1', id: 'boden-t', title: 'Mit oder ohne Boden?', text: 'Die Bodenfrage entscheidet über Dämmung, Zugang und Montage. Bei Pluskühlung sind beide Varianten möglich.' })}
    <div class="grid g-3">
      <article class="card" data-reveal><span class="card__icon">${icon('move-horizontal')}</span><h3>Ohne Bodenelement</h3><p>Die Wände stehen in Bodenprofilen direkt auf dem vorhandenen Hallen- oder Küchenboden. Vorteil: ebenerdiger Zugang ohne Rampe, ideal für Rollwagen. Voraussetzung ist ein ebener, tragfähiger Untergrund.</p></article>
      <article class="card" data-reveal data-reveal-d="1"><span class="card__icon">${icon('layers')}</span><h3>Mit Bodenelement</h3><p>Ein isoliertes Bodenelement – bei Europaneel mit Siebdruckplatte als Lauffläche – schließt die Dämmhülle nach unten. Der Zugang erfolgt über eine Auffahrrampe oder Schwelle.</p></article>
      ${fig('kuehlzelle-drehtuer-auffahrrampe', { n: 2, cap: 'Zelle mit Bodenelement und Auffahrrampe aus Riffelblech', ratio: '43', pos: 'center 70%', reveal: true, sizes: '(min-width: 1024px) 400px, 100vw' })}
    </div>
    <div class="mt-l" data-reveal>${note('Im Kalkulator', '<p>Für Tiefkühlzellen ist ein isolierter Boden immer vorgesehen – der Kalkulator berücksichtigt ihn dort automatisch. Bei Pluskühlung wählen Sie selbst.</p>', '', 'calculator')}</div>
  </div>
</section>

<section class="sec" aria-labelledby="temp-t">
  <div class="container split">
    <div data-reveal>
      <p class="eyebrow">Entscheidung 2</p>
      <h2 id="temp-t">Die Ware bestimmt die Temperatur</h2>
      <p class="lead mt-s">Für viele Lebensmittel schreibt das Lebensmittelrecht Höchsttemperaturen vor. Sie gelten für die Ware selbst – die Raumtemperatur der Zelle wird deshalb in der Praxis darunter eingestellt.</p>
      <p class="mt-m">Lagern Sie unterschiedliche Produkte, lohnt sich oft eine Aufteilung in mehrere Zellen oder eine Kombination aus Kühl- und <a href="/tiefkuehlzellen/">Tiefkühlzelle</a>.</p>
    </div>
    <div data-reveal data-reveal-d="1">${cmp(['Ware', 'Höchsttemperatur der Ware', 'Grundlage'], [
      ['Fleisch (Huftiere)', '+7 °C', 'VO (EG) 853/2004'],
      ['Geflügel', '+4 °C', 'VO (EG) 853/2004'],
      ['Hackfleisch', '+2 °C (Kerntemperatur)', 'VO (EG) 853/2004'],
      ['Konsummilch', '+8 °C', 'DIN 10508 (Norm)'],
      ['Tiefkühlware', '−18 °C oder kälter', 'TLMV § 2'],
    ], { label: 'Lagertemperaturen ausgewählter Lebensmittel', note: 'Auszug, ohne Gewähr; maßgeblich sind die jeweils geltenden Vorschriften. Weitere Werte für Fleisch und Wurst im Bereich <a href="/branchen/metzgerei/">Metzgerei</a>.' })}</div>
  </div>
</section>

<section class="sec sec--surface" aria-labelledby="komp-t">
  <div class="container">
    ${secHead({ eyebrow: 'Entscheidung 3', id: 'komp-t', title: 'Tür und Kältetechnik passend zum Alltag', text: 'Wie oft die Tür geöffnet wird und wohin die Abwärme abgeführt werden kann, beeinflusst Energiebedarf und Bedienkomfort mehr als jedes Prospektdetail.' })}
    <div class="grid g-2">
      <article class="card" data-reveal><span class="card__icon">${icon('door-open')}</span><h3>Drehtür oder Schiebetür</h3><p>Drehtüren eignen sich für kleinere Zellen und Personenverkehr. Für breite Öffnungen, Rollwagen und Hubwagen ist eine Schiebetür oft die bessere Wahl. Wir führen beide Bauarten in gängigen Formaten ab Lager – mit Anschlag links oder rechts, mit oder ohne Schwelle.</p>${linkArrow('Kühlhaustüren', '/kuehlhaustueren/')}</article>
      <article class="card" data-reveal data-reveal-d="1"><span class="card__icon">${icon('fan')}</span><h3>Huckepack, Monoblock oder Split</h3><p>Steckerfertige Aggregate geben ihre Abwärme an den Aufstellraum ab und sind schnell in Betrieb. Bei großem Kältebedarf oder warmen Räumen kann eine Split-Lösung mit außen aufgestelltem Verflüssigungssatz sinnvoller sein.</p>${linkArrow('Kälteaggregate', '/kaelteaggregate/')}</article>
    </div>
  </div>
</section>

<section class="sec" aria-labelledby="plan-t">
  <div class="container split split--rev">
    <div data-reveal>
      <p class="eyebrow">Vorbereitung</p>
      <h2 id="plan-t">Was wir für Planung und Angebot wissen müssen</h2>
      <p class="lead mt-s">Je vollständiger diese Punkte geklärt sind, desto genauer wird das Angebot – und desto reibungsloser die Montage.</p>
      ${checks([
        'Gewünschte Innen- oder Außenmaße und die verfügbare Raumhöhe',
        'Welche Ware gelagert wird und welche Temperatur nötig ist',
        'Untergrund: eben, tragfähig, mit oder ohne Bodenelement',
        'Türposition, Anschlagseite und benötigte Durchgangsbreite',
        'Aufstellort des Aggregats und Abführung der Abwärme',
        'Stromanschluss und Zugangsweg für die Paneele',
      ])}
      <p class="mt-m">${linkArrow('Ausführliche Planungs-Checkliste', '/ratgeber/kuehlzelle-planen/')}</p>
    </div>
    ${fig('kuehlanlage-aggregat-schiebetueren', { n: 3, cap: 'Kühlanlage mit Kälteaggregat und zwei Schiebetüren', reveal: true, sizes: '(min-width: 1024px) 700px, 100vw' })}
  </div>
</section>

<section class="sec sec--surface" aria-labelledby="ablauf-t">
  <div class="container">
    ${secHead({ eyebrow: 'Ablauf', id: 'ablauf-t', title: 'So entsteht Ihre Kühlzelle', text: 'Vom Richtpreis bis zur Übergabe mit einem festen Ansprechpartner.' })}
    ${steps([
      ['Richtpreis oder Anfrage', 'Mit dem Kalkulator erhalten Sie in wenigen Schritten einen Netto-Richtpreis – oder Sie schildern uns Ihr Projekt direkt.'],
      ['Beratung & Aufmaß', 'Wir klären Temperatur, Boden, Tür und Kältetechnik und nehmen die Maße vor Ort oder anhand Ihrer Angaben auf.'],
      ['Schriftliches Angebot', 'Alle Positionen transparent: Zelle, Tür, Aggregat, Lieferung und Montage.'],
      ['Lieferung & Montage', 'Lieferung ab Bottrop, fachgerechter Aufbau – übliche Zellengrößen meist an einem Tag.'],
    ])}
  </div>
</section>

<section class="sec" aria-labelledby="ref-t">
  <div class="container">
    ${secHead({ eyebrow: 'Referenzen', id: 'ref-t', title: 'Kühlzellen aus unserer Montagepraxis', text: 'Echte Projekte statt Renderings – weitere Einblicke finden Sie auf der Referenzseite.' })}
    <div class="grid g-3">
      ${fig('kuehlzelle-drehtuer-auffahrrampe', { n: 4, cap: 'Kompakte Zelle mit Drehtür', reveal: true, pos: 'center 35%', sizes: '(min-width: 1024px) 400px, 100vw' })}
      ${fig('kuehlzelle-anthrazit-schiebetuer', { n: 5, cap: 'Zelle in Anthrazit mit Schiebetür', reveal: true, sizes: '(min-width: 1024px) 400px, 100vw' })}
      ${fig('kuehlzellen-schiebetueren-halle', { n: 6, cap: 'Zwei Zellen mit Schiebetüren in einer Halle', reveal: true, sizes: '(min-width: 1024px) 400px, 100vw' })}
    </div>
    <p class="mt-m">${linkArrow('Alle Referenzen', '/referenzen/')}</p>
  </div>
</section>

<section class="sec sec--surface" aria-labelledby="faq-t">
  <div class="container split">
    <div>${secHead({ eyebrow: 'FAQ', id: 'faq-t', title: 'Fragen zu Kühlzellen', stack: true })}</div>
    ${faq([
      { q: 'Was kostet eine Kühlzelle?', a: '<p>Der Preis hängt vor allem von Größe, Boden, Tür und Kältetechnik ab. Einen Netto-Richtpreis für Paneele und Tür zeigt Ihnen unser <a href="/kalkulator.html">Kühlzellen-Kalkulator</a> sofort. Kälteaggregat, Lieferung und Montage bieten wir separat an. Welche Posten im Detail zusammenkommen, erklärt der Ratgeber <a href="/ratgeber/kuehlzelle-kosten/">Was kostet eine Kühlzelle?</a></p>' },
      { q: 'Brauche ich einen Boden für meine Kühlzelle?', a: 'Bei Pluskühlung ist beides möglich: ohne Bodenelement auf einem ebenen, tragfähigen Untergrund oder mit isoliertem Bodenelement inklusive Siebdruckplatte. Für Tiefkühlung sehen wir immer einen isolierten Boden vor.' },
      { q: 'Wie lange dauert die Montage?', a: 'In den meisten Fällen montieren wir eine Kühlzelle an einem Tag. Größere Anlagen planen wir individuell.' },
      { q: 'Kann eine Kühlzelle später erweitert werden?', a: 'Grundsätzlich ja, abhängig von der vorhandenen Zelle und den baulichen Gegebenheiten. Wir sehen uns die Situation an und beraten Sie ehrlich.' },
      { q: 'Kühlzelle oder Kühlraum – was ist der Unterschied?', a: '<p>Im Alltag meinen beide Begriffe einen gedämmten, gekühlten Raum. Eine Kühlzelle ist eine eigenständige Konstruktion aus Sandwichpaneelen, die in einen vorhandenen Raum oder eine Halle gestellt wird. Mehr dazu im Ratgeber <a href="/ratgeber/kuehlraum-bauen/">Kühlraum bauen</a>.</p>' },
      { q: 'Liefert Europaneel auch außerhalb Deutschlands?', a: 'Ja. Neben ganz Deutschland sind wir auch in Nachbarländern wie Österreich, der Schweiz und den Niederlanden tätig.' },
    ])}
  </div>
</section>

<section class="sec--sm"><div class="container">${related([
  { href: '/tiefkuehlzellen/', tag: 'Minusbereich', title: 'Tiefkühlzellen', text: 'Mit isoliertem Boden und Tiefkühltür.' },
  { href: '/kuehlhaustueren/', tag: 'Komponenten', title: 'Kühlhaustüren ab Lager', text: 'Dreh- und Schiebetüren in vielen Formaten.' },
  { href: '/ratgeber/kuehlzelle-kosten/', tag: 'Ratgeber', title: 'Was kostet eine Kühlzelle?', text: 'Preisfaktoren und Richtpreis im Überblick.' },
])}</div></section>

${ctaBand()}`;
  },
};

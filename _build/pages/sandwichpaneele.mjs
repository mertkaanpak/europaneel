import { icon, fig, pageHero, secHead, facts, cmp, points, checks, faq, related, ctaBand, linkArrow } from '../lib.mjs';

// Schnittzeichnung eines Sandwichpaneels (schematisch, nicht maßstäblich)
const DIAGRAM = `<figure class="diagram" data-reveal>
<svg viewBox="0 0 700 300" role="img" aria-labelledby="dg-t dg-d">
<title id="dg-t">Schnitt durch ein Sandwichpaneel</title>
<desc id="dg-d">Zwei beschichtete Stahlbleche als Deckschichten, dazwischen ein Dämmkern aus PUR oder PIR; am Rand eine Nut-Feder-Verbindung zum nächsten Paneel.</desc>
<defs><pattern id="core" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="10" stroke="#cfd4db" stroke-width="2"/></pattern></defs>
<rect x="60" y="90" width="430" height="120" fill="#f3f4f6"/><rect x="60" y="90" width="430" height="120" fill="url(#core)"/>
<path d="M490 90 h40 v30 h18 v60 h-18 v30 h-40 z" fill="#f3f4f6" stroke="#a9b0bb" stroke-dasharray="4 4"/>
<rect x="60" y="84" width="470" height="6" fill="#3e4652"/><rect x="60" y="210" width="470" height="6" fill="#3e4652"/>
<line x1="40" y1="84" x2="40" y2="216" stroke="#dd0312" stroke-width="1.5"/><line x1="34" y1="84" x2="46" y2="84" stroke="#dd0312" stroke-width="1.5"/><line x1="34" y1="216" x2="46" y2="216" stroke="#dd0312" stroke-width="1.5"/>
<text x="26" y="155" font-size="15" font-weight="700" fill="#dd0312" text-anchor="middle" transform="rotate(-90 26 155)">d</text>
<g font-family="Inter, Arial, sans-serif" font-size="14" fill="#101216">
<line x1="150" y1="84" x2="150" y2="40" stroke="#5b6570"/><text x="158" y="38">Deckschicht: beschichtetes Stahlblech</text>
<text x="200" y="156" font-weight="600">Dämmkern PUR / PIR</text>
<line x1="548" y1="150" x2="572" y2="150" stroke="#5b6570"/><text x="578" y="146">Nut-Feder-</text><text x="578" y="164">Stoß</text>
<line x1="380" y1="216" x2="380" y2="262" stroke="#5b6570"/><text x="388" y="270">Innenseite: glatt, abwaschbar</text>
</g></svg>
<figcaption><b>Abb. 02</b><span>Schematischer Schnitt, nicht maßstäblich. d = Paneelstärke.</span></figcaption></figure>`;

export default {
  path: '/sandwichpaneele/',
  title: 'Sandwichpaneele für Kühlhaus & Kühlzelle | Europaneel',
  description: 'Sandwichpaneele für Kühlzellen und Kühlhäuser: Isolierpaneele für Wand, Decke und Boden, viele Stärken kurzfristig ab Lager Bottrop verfügbar.',
  updated: '2026-10-05',
  crumbs: [['Sandwichpaneele', '/sandwichpaneele/']],
  service: { name: 'Sandwichpaneele für Kühlräume', type: 'Lieferung von Sandwichpaneelen für Kühlzellen und Kühlhäuser' },
  ogPhoto: 'europaneel-lager-bottrop',
  render() {
    return `${pageHero({
      eyebrow: 'Isolierpaneele · Kühlhauspaneele',
      title: 'Sandwichpaneele für Kühlzellen und Kühlhäuser',
      lead: 'Sandwichpaneele sind das Grundmaterial jeder Kühlzelle: zwei beschichtete Deckschichten mit einem Dämmkern dazwischen. Wir halten viele Stärken, Formate und Oberflächen am Lager in Bottrop vor – für Ihr Projekt mit Montage oder zur Abholung.',
      photo: 'europaneel-lager-bottrop', cap: 'Paneellager der Europaneel GmbH in Bottrop', ratio: '43', pos: 'center 62%',
      ctas: { lead: 'secondary' },
    })}

<section class="sec--facts" aria-label="Eckdaten"><div class="container">${facts([
  ['Lager', 'Bottrop – Lieferung oder Abholung'],
  ['Verfügbarkeit', 'viele Stärken und Formate kurzfristig'],
  ['Einsatz', 'Wand, Decke, Boden, Trennwände'],
  ['Oberflächen in Projekten', 'u. a. Weiß und Anthrazit'],
])}</div></section>

<section class="sec" aria-labelledby="aufbau-t">
  <div class="container split split--center">
    <div data-reveal>
      <p class="eyebrow">Aufbau</p>
      <h2 id="aufbau-t">So ist ein Kühlhauspaneel aufgebaut</h2>
      <div class="prose mt-m">
        <p>Ein Sandwichpaneel verbindet zwei dünne Deckschichten – meist beschichtetes Stahlblech – über einen geschäumten Dämmkern zu einem steifen, leichten Bauteil. Die Dämmwirkung kommt fast vollständig aus dem Kern; die Deckschichten liefern Stabilität und eine glatte, abwaschbare Oberfläche.</p>
        <p>An den Längsseiten greifen die Paneele über Nut und Feder ineinander und werden mit Verschlüssen zusammengezogen. So entsteht eine geschlossene Hülle mit wenigen Wärmebrücken, die sich auch wieder demontieren und erweitern lässt.</p>
      </div>
    </div>
    ${DIAGRAM}
  </div>
</section>

<section class="sec sec--surface" aria-labelledby="kern-t">
  <div class="container">
    ${secHead({ eyebrow: 'Dämmkern', id: 'kern-t', title: 'PUR, PIR oder Mineralwolle?', text: 'Der Kern bestimmt Dämmwirkung und Brandverhalten. Maßgeblich sind immer die Angaben im Datenblatt des konkreten Paneels.' })}
    <div data-reveal>${cmp(['Kern', 'Wärmeleitfähigkeit λ', 'Brandverhalten (Paneel)', 'Typischer Einsatz'], [
      ['PUR (Polyurethan)', 'ca. 0,022–0,025 W/(m·K)', 'je nach Produkt etwa Euroklasse E bis B', 'häufigster Kern für Kühl- und Tiefkühlzellen'],
      ['PIR (Polyisocyanurat)', 'etwas besser als PUR', 'bis B-s1,d0 – verkohlt statt zu schmelzen', 'bei erhöhten Brandschutzanforderungen'],
      ['Mineralwolle', 'ca. 0,039 W/(m·K)', 'A2-s1,d0 (nichtbrennbar)', 'Brandabschnitte, Trennwände mit Feuerwiderstand'],
    ], { label: 'Vergleich der Dämmkerne', note: 'Richtwerte aus Herstellerangaben; je nach Produkt abweichend. Für den gleichen U-Wert muss ein Mineralwollpaneel deutlich dicker sein als ein PUR- oder PIR-Paneel.' })}</div>
  </div>
</section>

<section class="sec" aria-labelledby="staerke-t">
  <div class="container split">
    <div data-reveal>
      <p class="eyebrow">Paneelstärke</p>
      <h2 id="staerke-t">Stärke und U-Wert</h2>
      <p class="lead mt-s">Je größer der Temperaturunterschied zwischen innen und außen, desto dicker das Paneel. Der U-Wert zeigt, wie viel Wärme pro Quadratmeter und Kelvin durch das Bauteil dringt – kleiner ist besser.</p>
      <p class="mt-m">${linkArrow('Welche Stärke für welche Temperatur? Zum Ratgeber', '/ratgeber/paneelstaerke-kuehlzelle/')}</p>
    </div>
    <div data-reveal data-reveal-d="1">${cmp(['Paneelstärke', 'U-Wert (Größenordnung)'], [
      ['80 mm', 'ca. 0,23–0,27 W/(m²·K)'],
      ['100 mm', 'ca. 0,18–0,22 W/(m²·K)'],
      ['120 mm', 'ca. 0,17–0,18 W/(m²·K)'],
      ['150 mm', 'ca. 0,12–0,15 W/(m²·K)'],
    ], { label: 'Paneelstärke und U-Wert', note: 'Spannweiten aus technischen Datenblättern mehrerer Paneelhersteller; Werte unterscheiden sich je nach Kern, Fugenausbildung und Berechnungsmethode.' })}</div>
  </div>
</section>

<section class="sec sec--surface" aria-labelledby="hyg-t">
  <div class="container split split--rev">
    <div>${secHead({ eyebrow: 'Oberfläche & Hygiene', id: 'hyg-t', title: 'Oberflächen für den Lebensmittelbereich', stack: true, text: 'Nach dem EU-Lebensmittelhygienerecht müssen Wände und Böden in Lebensmittelbetrieben leicht zu reinigen, wasserundurchlässig und abriebfest sein.' })}
      ${fig('kuehlzelle-anthrazit-schiebetuer', { n: 3, cap: 'Paneele in Anthrazit mit weißer Schiebetür', reveal: true, sizes: '(min-width: 1024px) 480px, 100vw' })}</div>
    <div data-reveal>${points([
      ['Glatte, beschichtete Deckschichten', 'Beschichtete Stahlbleche sind glatt und abwaschbar. Für den Lebensmittelbereich gibt es Beschichtungen, die für den Kontakt mit Lebensmitteln geeignet sind.'],
      ['Feuchte und nasse Bereiche', 'Wo regelmäßig nass gereinigt wird oder Wasser auf den Oberflächen steht, empfehlen Hersteller robustere Oberflächen wie Edelstahl.'],
      ['Ecken und Übergänge', 'Gerundete Innenecken und Hohlkehlen am Boden erleichtern die Reinigung und vermeiden Schmutzecken.'],
      ['HACCP liegt beim Betreiber', 'HACCP ist das Eigenkontrollsystem des Lebensmittelbetriebs. Die Zelle unterstützt es mit reinigungsfreundlichen Flächen und einer stabilen Temperatur.'],
    ])}</div>
  </div>
</section>

<section class="sec" aria-labelledby="anfrage-t">
  <div class="container split">
    <div>${secHead({ eyebrow: 'Anfrage', id: 'anfrage-t', title: 'Paneele anfragen – das brauchen wir', stack: true, text: 'Für Material ohne Montage genauso wie für komplette Zellen.' })}</div>
    <div data-reveal>${checks([
      'Einsatz: Kühlung, Tiefkühlung oder Trennwand – oder direkt die gewünschte Stärke',
      'Längen und Stückzahl oder die Maße der geplanten Zelle',
      'Gewünschte Oberfläche bzw. Farbe',
      'Lieferung an Ihre Adresse oder Abholung in Bottrop',
      'Gewünschter Termin',
    ])}</div>
  </div>
</section>

<section class="sec sec--surface" aria-labelledby="faq-t">
  <div class="container split">
    <div>${secHead({ eyebrow: 'FAQ', id: 'faq-t', title: 'Fragen zu Sandwichpaneelen', stack: true })}</div>
    ${faq([
      { q: 'Welche Paneelstärke brauche ich?', a: '<p>Das hängt von der Solltemperatur und den Vorgaben des Paneelherstellers ab: Für Tiefkühlung sind deutlich dickere Paneele nötig als für Pluskühlung. Eine Übersicht mit U-Werten finden Sie im Ratgeber <a href="/ratgeber/paneelstaerke-kuehlzelle/">Paneelstärke</a>.</p>' },
      { q: 'Kann ich Paneele ohne Montage kaufen?', a: 'Ja. Sie können Paneele zur Lieferung bestellen oder direkt an unserem Lager in Bottrop abholen.' },
      { q: 'Was ist besser – PUR oder PIR?', a: 'Beide dämmen sehr gut. PIR-Paneele erreichen ein besseres Brandverhalten und kommen daher bei höheren Brandschutzanforderungen zum Einsatz. Welcher Kern sinnvoll ist, hängt vom Projekt und den Vorgaben vor Ort ab.' },
      { q: 'Welche Farben sind möglich?', a: 'In unseren Projekten setzen wir unter anderem weiße und anthrazitfarbene Paneele ein. Die aktuell verfügbaren Oberflächen nennen wir Ihnen mit dem Angebot.' },
    ])}
  </div>
</section>

<section class="sec--sm"><div class="container">${related([
  { href: '/ratgeber/paneelstaerke-kuehlzelle/', tag: 'Ratgeber', title: 'Welche Paneelstärke?', text: 'Stärke, U-Wert und Kernmaterial.' },
  { href: '/kuehlzellen/', tag: 'Lösungen', title: 'Kühlzellen nach Maß', text: 'Komplett geplant und montiert.' },
  { href: '/kuehlhausbau/', tag: 'Projekte', title: 'Kühlhausbau', text: 'Paneele für mehrzellige Anlagen.' },
])}</div></section>

${ctaBand({ lead: 'secondary', title: 'Paneele für Ihr Projekt anfragen', text: 'Nennen Sie uns Stärke, Mengen und Oberfläche – oder die Maße Ihrer Zelle. Wir melden uns mit Verfügbarkeit und Angebot.' })}`;
  },
};

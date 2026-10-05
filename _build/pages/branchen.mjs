import { icon, fig, pageHero, secHead, cmp, points, checks, faq, related, ctaBand, note, linkArrow } from '../lib.mjs';

const TEMP_NOTE = 'Höchsttemperaturen der Ware nach VO (EG) 853/2004, Tier-LMHV, TLMV bzw. DIN 10508 (zusammengefasst im Merkblatt des LAVES Niedersachsen). Auszug ohne Gewähr – maßgeblich sind die jeweils geltenden Vorschriften.';

/* ------------------------------------------------------------ Hub */
const SECTIONS = [
  { id: 'gastronomie', icon: 'chef-hat', title: 'Gastronomie, Hotel & Catering', link: '/branchen/gastronomie/', text: 'Wenig Platz, viele Warengruppen und tägliche Anlieferungen: In Restaurants und Hotels arbeiten Kühl- und Tiefkühlzelle meist Hand in Hand. Entscheidend sind kurze Wege zur Küche, eine Tür, die den Betrieb nicht ausbremst, und ein Aggregat, das die Küche nicht zusätzlich aufheizt.' },
  { id: 'metzgerei', icon: 'beef', title: 'Metzgerei & Fleischerei', link: '/branchen/metzgerei/', text: 'Für Fleisch, Hackfleisch und Fleischzubereitungen gelten unterschiedliche gesetzliche Höchsttemperaturen. Daraus ergibt sich, ob eine Zelle genügt oder mehrere Temperaturzonen sinnvoll sind – dazu kommen reinigungsfreundliche Oberflächen und belastbare Böden.' },
  { id: 'baeckerei', icon: 'croissant', title: 'Bäckerei & Konditorei', text: 'Tiefgekühlte Teiglinge und Halbfabrikate verlangen eine Tiefkühlzelle, Sahne, Cremes und Füllungen eine zuverlässige Pluskühlung. Weil in Backstuben viel gereinigt wird und Mehlstaub anfällt, zählen glatte, abwaschbare Oberflächen und dichte Anschlüsse.' },
  { id: 'handel', icon: 'store', title: 'Lebensmittelhandel & Märkte', text: 'Hinter der Verkaufsfläche lagern Molkereiprodukte, Fleisch, Obst und Gemüse und Tiefkühlware – jeweils mit eigenen Temperaturanforderungen. Häufige Türöffnungen beim Auffüllen machen Türschließer und Streifenvorhänge zu einem echten Energiethema.' },
  { id: 'produktion', icon: 'factory', title: 'Lebensmittelproduktion', text: 'In der Produktion werden Rohware, Zwischen- und Fertigprodukte oft getrennt gekühlt. Hygienerechtlich müssen Wände und Böden leicht zu reinigen und abriebfest sein; wo nass gereinigt wird, empfehlen Hersteller robuste Oberflächen wie Edelstahl.' },
  { id: 'logistik', icon: 'forklift', title: 'Logistik & Lager', text: 'Kühllager für Paletten brauchen breite Schiebetüren, Auffahrrampen und Böden, die Hubwagen und Stapler tragen. Bei Tiefkühlbereichen auf der Bodenplatte gehört der Schutz gegen Frost im Untergrund in die Planung.' },
  { id: 'pharma', icon: 'pill', title: 'Pharma & Apotheken', text: 'Viele kühlpflichtige Arzneimittel werden zwischen 2 und 8 °C gelagert. Für den pharmazeutischen Großhandel gelten zusätzlich die GDP-Leitlinien mit Anforderungen an Temperaturüberwachung und -nachweis – diese Pflichten liegen beim Betreiber und gehören von Anfang an in die Planung.' },
  { id: 'catering', icon: 'utensils', title: 'Catering & Großküchen', text: 'Großküchen trennen Rohware und zubereitete Speisen, um Kreuzkontaminationen zu vermeiden. Mehrere kleinere Zellen oder eine mehrzellige Anlage mit getrennten Türen sind deshalb oft sinnvoller als ein großer Raum.' },
];

const hub = {
  path: '/branchen/',
  title: 'Kühlzellen für Gastronomie, Handel & Industrie | Europaneel',
  description: 'Kühl- und Tiefkühlzellen für Gastronomie, Metzgerei, Bäckerei, Handel, Produktion, Logistik und Pharma: was jede Branche an Temperatur und Hygiene braucht.',
  updated: '2026-10-05',
  pageType: 'CollectionPage',
  crumbs: [['Branchen', '/branchen/']],
  render: () => `${pageHero({
    eyebrow: 'Branchen',
    title: 'Kühlzellen für Betriebe, in denen die Kühlkette zählt',
    lead: 'Lebensmittelrecht, Warenfluss und Platz unterscheiden sich je Branche. Deshalb planen wir Zelle, Tür und Kältetechnik nach Ihrem Betrieb – nicht nach einem Katalog.',
  })}
<section class="sec" aria-label="Branchen im Überblick"><div class="container">
  <nav class="ind" aria-label="Branchen-Sprungmarken">${SECTIONS.map((s) => `<a href="${s.link || '#' + s.id}">${icon(s.icon)}<b>${s.title}</b><small>${s.link ? 'Eigene Seite' : 'Abschnitt'}</small><span class="more">${s.link ? 'Ansehen' : 'Lesen'}${icon('arrow-right')}</span></a>`).join('')}</nav>
</div></section>
${SECTIONS.map((s, i) => `<section class="sec${i % 2 ? '' : ' sec--surface'}" id="${s.id}" aria-labelledby="${s.id}-t"><div class="container split">
  <div data-reveal><p class="eyebrow">Branche</p><h2 id="${s.id}-t">${s.title}</h2></div>
  <div data-reveal data-reveal-d="1"><p class="lead">${s.text}</p>${s.link ? `<p class="mt-m">${linkArrow(`Mehr zu ${s.title.split(/[,&]/)[0].trim()}`, s.link)}</p>` : `<p class="mt-m">${linkArrow('Kühlzellen nach Maß', '/kuehlzellen/')}</p>`}</div>
</div></section>`).join('')}
${ctaBand()}`,
};

/* ------------------------------------------------------------ Gastronomie */
const gastro = {
  path: '/branchen/gastronomie/',
  title: 'Kühlzelle für Gastronomie, Hotel & Catering | Europaneel',
  description: 'Kühl- und Tiefkühlzellen für Restaurants, Hotels und Catering: Platz, Lagertemperaturen, Tür und Aggregat richtig planen – Richtpreis online berechnen.',
  updated: '2026-10-05',
  crumbs: [['Branchen', '/branchen/'], ['Gastronomie & Hotel', '/branchen/gastronomie/']],
  service: { name: 'Kühlzellen für die Gastronomie', type: 'Kühl- und Tiefkühlzellen für Restaurants, Hotels und Catering' },
  ogPhoto: 'kuehlzelle-anthrazit-fliesenboden',
  render: () => `${pageHero({
    eyebrow: 'Branche · Gastronomie & Hotel',
    title: 'Kühlzellen für Gastronomie, Hotel und Catering',
    lead: 'In der Gastronomie ist Kühlfläche immer knapp und die Tür ständig in Bewegung. Wir planen Kühl- und Tiefkühlzellen, die in Keller, Lager oder Küchennähe passen, alle Warengruppen sicher temperieren und den Küchenbetrieb nicht ausbremsen.',
    photo: 'kuehlzelle-anthrazit-fliesenboden', cap: 'Kühlzelle mit Schiebetür auf gefliestem Boden',
  })}

<section class="sec" aria-labelledby="bedarf-t"><div class="container split">
  <div>${secHead({ eyebrow: 'Anforderungen', id: 'bedarf-t', title: 'Was eine Gastro-Kühlzelle können muss', stack: true })}</div>
  <div data-reveal>${points([
    ['Mehrere Warengruppen, unterschiedliche Grenzwerte', 'Fleisch, Geflügel, Fisch, Molkereiprodukte und vorbereitete Speisen haben unterschiedliche Höchsttemperaturen. Oft ist eine Aufteilung in eine Kühl- und eine Tiefkühlzelle – oder in zwei Kühlbereiche – die sauberste Lösung.'],
    ['Platz optimal nutzen', 'Kühlzellen werden nach Maß gebaut und passen auch in Nischen und Kellerräume. Die Höhe richtet sich nach dem Raum: ohne Bodenelement ab 2,10 m, mit Bodenelement ab 2,20 m.'],
    ['Eine Tür für den Stoßbetrieb', 'Ohne Bodenelement und mit schwellenloser Tür fahren Rollwagen ebenerdig in die Zelle. Türschließer und Streifenvorhang halten bei häufigem Öffnen die Kälte drin.'],
    ['Abwärme nicht in die Küche', 'Steckerfertige Aggregate geben ihre Wärme an den Aufstellraum ab. Ist das die ohnehin warme Küche, kann eine Split-Lösung mit außen aufgestelltem Verflüssigungssatz die bessere Wahl sein.'],
  ])}</div>
</div></section>

<section class="sec sec--surface" aria-labelledby="temp-t"><div class="container">
  ${secHead({ eyebrow: 'Lebensmittelrecht', id: 'temp-t', title: 'Lagertemperaturen typischer Gastro-Waren', text: 'Die Werte gelten für die Ware selbst. Die Zelle wird deshalb kälter eingestellt, damit die Grenzen auch beim Öffnen und Einräumen sicher eingehalten werden.' })}
  <div data-reveal>${cmp(['Ware', 'Höchsttemperatur der Ware'], [
    ['Hackfleisch', '+2 °C (Kerntemperatur)'],
    ['Frischer Fisch', 'annähernd Schmelzeistemperatur, max. +2 °C'],
    ['Geflügel', '+4 °C'],
    ['Fleischzubereitungen', '+4 °C'],
    ['Fleisch (Huftiere)', '+7 °C'],
    ['Feinkost, Desserts', '+7 °C'],
    ['Konsummilch', '+8 °C'],
    ['Milcherzeugnisse, Käse (außer Hartkäse)', '+10 °C'],
    ['Tiefkühlware', '−18 °C oder kälter'],
  ], { label: 'Lagertemperaturen Gastronomie', note: TEMP_NOTE })}</div>
</div></section>

<section class="sec" aria-labelledby="plan-t"><div class="container split split--rev">
  <div data-reveal>
    <p class="eyebrow">Planung</p><h2 id="plan-t">Vor dem Aufmaß klären</h2>
    ${checks([
      'Welche Warengruppen in welchen Mengen gelagert werden – und wie oft geliefert wird',
      'Ob eine Kühl- und eine Tiefkühlzelle nötig sind und wie sie zueinander stehen',
      'Einbringweg in Keller oder Lager: Türbreiten, Treppen, Kurven',
      'Raumhöhe und Untergrund am Aufstellort',
      'Wohin die Abwärme des Aggregats abgeführt werden kann',
    ])}
    <p class="mt-m">${linkArrow('Ausführliche Planungs-Checkliste', '/ratgeber/kuehlzelle-planen/')}</p>
  </div>
  ${fig('kuehlzelle-drehtuer-auffahrrampe', { n: 2, cap: 'Kompakte Zelle mit Drehtür und Auffahrrampe', pos: 'center 40%', reveal: true, sizes: '(min-width: 1024px) 600px, 100vw' })}
</div></section>

<section class="sec sec--surface" aria-labelledby="faq-t"><div class="container split">
  <div>${secHead({ eyebrow: 'FAQ', id: 'faq-t', title: 'Fragen aus der Gastronomie', stack: true })}</div>
  ${faq([
    { q: 'Kann eine Kühlzelle im Keller aufgebaut werden?', a: 'Ja. Die Zelle wird aus einzelnen Paneelen vor Ort montiert – entscheidend ist, dass die Paneele durch Türen und Treppen passen. Das prüfen wir beim Aufmaß.' },
    { q: 'Lassen sich Kühl- und Tiefkühlzelle kombinieren?', a: 'Ja, als zwei getrennte Zellen oder als mehrzellige Anlage. Wichtig sind dann Türanordnung und die Abwärme beider Aggregate.' },
    { q: 'Wie wird die Temperatur für HACCP dokumentiert?', a: 'Die Eigenkontrolle nach HACCP liegt beim Betrieb. Üblich sind Thermometer oder Datenlogger in der Zelle. Für die Lagerung tiefgefrorener Lebensmittel verlangt die TLMV zudem eine regelmäßige Überwachung der Lufttemperatur.' },
    { q: 'Was kostet eine Kühlzelle für ein Restaurant?', a: '<p>Das hängt von Größe, Boden, Tür und Kältetechnik ab. Einen Netto-Richtpreis für Paneele und Tür sehen Sie sofort im <a href="/kalkulator.html">Kühlzellen-Kalkulator</a>.</p>' },
  ])}
</div></section>

<section class="sec--sm"><div class="container">${related([
  { href: '/kuehlzellen/', tag: 'Lösungen', title: 'Kühlzellen nach Maß', text: 'Mit oder ohne Boden, Dreh- oder Schiebetür.' },
  { href: '/tiefkuehlzellen/', tag: 'Minusbereich', title: 'Tiefkühlzellen', text: 'Für Vorräte, Eis und Halbfabrikate.' },
  { href: '/kaelteaggregate/', tag: 'Kältetechnik', title: 'Kälteaggregate', text: 'Abwärme und Aufstellort richtig planen.' },
])}</div></section>
${ctaBand()}`,
};

/* ------------------------------------------------------------ Metzgerei */
const metzgerei = {
  path: '/branchen/metzgerei/',
  title: 'Kühlzelle für Metzgerei & Fleischerei | Europaneel',
  description: 'Kühlräume für Metzgereien: gesetzliche Lagertemperaturen für Fleisch, Hackfleisch und Geflügel, Temperaturzonen, Hygiene und Türen richtig planen.',
  updated: '2026-10-05',
  crumbs: [['Branchen', '/branchen/'], ['Metzgerei & Fleischerei', '/branchen/metzgerei/']],
  service: { name: 'Kühlräume für Metzgereien', type: 'Kühl- und Tiefkühlzellen für Metzgereien und Fleischereien' },
  ogPhoto: 'kuehlzellen-schiebetueren-halle',
  render: () => `${pageHero({
    eyebrow: 'Branche · Metzgerei & Fleischerei',
    title: 'Kühlräume für Metzgereien und Fleischereien',
    lead: 'Für Fleisch schreibt das Lebensmittelrecht genaue Höchsttemperaturen vor – für Hackfleisch strenger als für Teilstücke, für Geflügel anders als für Rind und Schwein. Wir planen Kühlzellen und Temperaturzonen so, dass jede Ware sicher im Grenzwert bleibt.',
    photo: 'kuehlzellen-schiebetueren-halle', cap: 'Zwei Kühlzellen mit Schiebetüren für breite Durchgänge',
  })}

<section class="sec" aria-labelledby="temp-t"><div class="container split">
  <div data-reveal>
    <p class="eyebrow">Lebensmittelrecht</p><h2 id="temp-t">Höchsttemperaturen für Fleisch und Fleischerzeugnisse</h2>
    <p class="lead mt-s">Die Grenzwerte gelten für die Ware – bei Hackfleisch sogar für die Kerntemperatur. Lagern Sie mehrere Produktgruppen in einer Zelle, richtet sich die Einstellung nach dem strengsten Wert.</p>
  </div>
  <div data-reveal data-reveal-d="1">${cmp(['Ware', 'Höchsttemperatur der Ware'], [
    ['Hackfleisch', '+2 °C (Kerntemperatur)'],
    ['Nebenprodukte der Schlachtung (Innereien)', '+3 °C'],
    ['Fleischzubereitungen', '+4 °C'],
    ['Geflügel, Hasentiere, Kleinwild', '+4 °C'],
    ['Fleisch von Huftieren, Großwild', '+7 °C'],
    ['Gefrorenes Fleisch', '−18 °C oder kälter'],
  ], { label: 'Lagertemperaturen Fleisch', note: TEMP_NOTE })}</div>
</div></section>

<section class="sec sec--surface" aria-labelledby="zonen-t"><div class="container split split--rev">
  <div>${secHead({ eyebrow: 'Planung', id: 'zonen-t', title: 'Zonen, Hygiene und Abläufe', stack: true })}
    ${fig('kuehlzelle-anthrazit-schiebetuer', { n: 2, cap: 'Schiebetür für Rollwagen und breite Durchgänge', reveal: true, sizes: '(min-width: 1024px) 480px, 100vw' })}</div>
  <div data-reveal>${points([
    ['Temperaturzonen statt Kompromiss', 'Hackfleisch und Zubereitungen brauchen kältere Bedingungen als Teilstücke. Zwei Zellen – oder eine geteilte Anlage – vermeiden, dass die gesamte Ware auf den strengsten Wert gekühlt werden muss.'],
    ['Reinigungsfreundliche Flächen', 'Wände und Böden müssen leicht zu reinigen und abriebfest sein. Wo regelmäßig nass gereinigt wird, empfehlen Hersteller Edelstahloberflächen; Hohlkehlen am Boden erleichtern die Reinigung.'],
    ['Belastbarer Boden', 'Rollwagen, Kisten und Hubwagen belasten den Zellenboden. Die Bodenausführung wird auf diese Lasten abgestimmt.'],
    ['Lasten an der Decke', 'Sollen Rohrbahnen oder Haken an der Decke befestigt werden, müssen Decke und Aufhängung dafür ausgelegt sein – das gehört in die Planung, bevor die Paneele bestellt werden.'],
  ])}</div>
</div></section>

<section class="sec" aria-labelledby="tuer-t"><div class="container">
  ${secHead({ eyebrow: 'Türen', id: 'tuer-t', title: 'Tür und Warenfluss', text: 'In der Metzgerei wird die Kühlzelle oft im Minutentakt geöffnet. Breite Schiebetüren erleichtern das Ein- und Ausfahren, Streifenvorhänge und Türschließer begrenzen die Kälteverluste.' })}
  <div class="grid g-2">
    <article class="card" data-reveal><span class="card__icon">${icon('door-open')}</span><h3>Drehtür</h3><p>Für kleinere Zellen und Personenverkehr. Ab Lager in Breiten von 75 bis 120 cm.</p>${linkArrow('Drehtüren ansehen', '/kuehlhaustueren/#drehtueren')}</article>
    <article class="card" data-reveal data-reveal-d="1"><span class="card__icon">${icon('move-horizontal')}</span><h3>Schiebetür</h3><p>Für Rollwagen und breite Durchgänge. Ab Lager in Breiten von 150 bis 250 cm.</p>${linkArrow('Schiebetüren ansehen', '/kuehlhaustueren/#schiebetueren')}</article>
  </div>
</div></section>

<section class="sec sec--surface" aria-labelledby="faq-t"><div class="container split">
  <div>${secHead({ eyebrow: 'FAQ', id: 'faq-t', title: 'Fragen aus Metzgerei und Fleischerei', stack: true })}</div>
  ${faq([
    { q: 'Bei welcher Temperatur muss Hackfleisch gelagert werden?', a: 'Hackfleisch darf eine Kerntemperatur von +2 °C nicht überschreiten (VO (EG) 853/2004). Die Zelle wird entsprechend kälter eingestellt.' },
    { q: 'Kann ich Fleisch und Wurst in einer Zelle lagern?', a: 'Ja, dann richtet sich die Einstellung nach der empfindlichsten Ware. Bei größeren Mengen lohnt sich oft eine zweite Zelle, damit nicht alles auf den strengsten Wert gekühlt werden muss.' },
    { q: 'Brauche ich Edelstahl in der Kühlzelle?', a: 'Wo regelmäßig nass gereinigt wird oder Wasser auf den Flächen steht, empfehlen Paneelhersteller Edelstahloberflächen. Für trockene Lagerbereiche genügen in der Regel beschichtete Stahlbleche.' },
    { q: 'Brauche ich zusätzlich eine Tiefkühlzelle?', a: '<p>Wenn Sie Fleisch einfrieren: Gefrorenes Fleisch muss bei −18 °C oder kälter gelagert werden. Was dabei technisch anders ist, lesen Sie unter <a href="/tiefkuehlzellen/">Tiefkühlzellen</a>.</p>' },
  ])}
</div></section>

<section class="sec--sm"><div class="container">${related([
  { href: '/kuehlzellen/', tag: 'Lösungen', title: 'Kühlzellen nach Maß', text: 'Aufbau, Boden, Tür und Temperatur.' },
  { href: '/tiefkuehlzellen/', tag: 'Minusbereich', title: 'Tiefkühlzellen', text: 'Für gefrorenes Fleisch bei −18 °C.' },
  { href: '/kuehlhaustueren/', tag: 'Komponenten', title: 'Kühlhaustüren', text: 'Dreh- und Schiebetüren ab Lager.' },
])}</div></section>
${ctaBand()}`,
};

export default [hub, gastro, metzgerei];

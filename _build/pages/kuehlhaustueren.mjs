import { icon, fig, pageHero, secHead, facts, cmp, points, faq, related, ctaBand, note, linkArrow } from '../lib.mjs';

// Lagerliste (Quelle: bisherige Türen-Seite / interne Lagerliste). Maße Breite × Höhe in cm.
const DREH = ['75 × 175', '75 × 190', '80 × 190', '90 × 190', '110 × 190', '100 × 200', '100 × 220', '120 × 200', '120 × 220'];
const SCHIEBE = ['150 × 200', '150 × 220', '150 × 230', '150 × 240', '150 × 250', '160 × 240', '180 × 240', '180 × 300', '190 × 300', '200 × 250', '200 × 270', '240 × 180', '250 × 180', '250 × 250'];
const list = (items) => `<ul class="door-list">${items.map((d) => `<li><span class="tnum">${d}</span> cm</li>`).join('')}</ul>`;

export default {
  path: '/kuehlhaustueren/',
  title: 'Kühlhaustüren & Isoliertüren ab Lager | Europaneel',
  description: 'Kühlhaustüren ab Lager Bottrop: 9 Drehtür- und 14 Schiebetürformate, Anschlag links oder rechts, mit oder ohne Schwelle – für Kühl- und Tiefkühlräume.',
  updated: '2026-10-05',
  crumbs: [['Kühlhaustüren', '/kuehlhaustueren/']],
  service: { name: 'Kühlhaustüren und Isoliertüren', type: 'Lieferung und Montage von Kühlhaustüren' },
  ogPhoto: 'kuehlzelle-anthrazit-schiebetuer',
  render() {
    return `${pageHero({
      eyebrow: 'Isoliertüren · Dreh- & Schiebetüren',
      title: 'Kühlhaustüren ab Lager – Dreh- und Schiebetüren für Kühl- und Tiefkühlräume',
      lead: 'Die Tür ist das meistgenutzte Bauteil einer Kühlzelle – und die größte Schwachstelle für Kälteverluste. Wir führen Dreh- und Schiebetüren in gängigen Formaten am Lager in Bottrop, jeweils mit Anschlag links oder rechts und mit oder ohne Schwelle.',
      photo: 'kuehlzelle-anthrazit-schiebetuer', cap: 'Kühlhaus-Schiebetür in weißer Ausführung an einer Zelle in Anthrazit',
      ctas: { lead: 'secondary' },
    })}

<section class="sec--facts" aria-label="Eckdaten"><div class="container">${facts([
  ['Drehtüren ab Lager', '9 Formate'],
  ['Schiebetüren ab Lager', '14 Formate'],
  ['Anschlag', 'links oder rechts'],
  ['Schwelle', 'mit oder ohne'],
])}</div></section>

<section class="sec" aria-labelledby="lager-t">
  <div class="container">
    ${secHead({ eyebrow: 'Lagerliste', id: 'lager-t', title: 'Aktuell verfügbare Formate', text: 'Maße als Breite × Höhe. Der Bestand ändert sich – bitte fragen Sie die Verfügbarkeit mit Ihrem Wunschformat an. Sondermaße auf Anfrage.' })}
    <div class="grid g-2">
      <article class="card" id="drehtueren" data-reveal><span class="card__icon">${icon('door-open')}</span><h3>Kühlhaus-Drehtüren</h3><p>Für Plus- und Minusbereiche. Drehtüren lassen sich im <a href="/kalkulator.html">Kühlzellen-Kalkulator</a> direkt einpreisen.</p>${list(DREH)}</article>
      <article class="card" id="schiebetueren" data-reveal data-reveal-d="1"><span class="card__icon">${icon('move-horizontal')}</span><h3>Kühlhaus-Schiebetüren</h3><p>Für breite Öffnungen und komfortablen Warenfluss – Preise auf Anfrage.</p>${list(SCHIEBE)}</article>
    </div>
  </div>
</section>

<section class="sec sec--surface" aria-labelledby="wahl-t">
  <div class="container">
    ${secHead({ eyebrow: 'Auswahl', id: 'wahl-t', title: 'Drehtür oder Schiebetür?', text: 'Entscheidend sind Öffnungsbreite, Platz vor der Zelle und was durch die Tür bewegt wird.' })}
    <div data-reveal>${cmp(['', 'Drehtür', 'Schiebetür'], [
      ['Öffnung', 'schwenkt nach außen', 'gleitet seitlich an der Wand entlang'],
      ['Platzbedarf', 'Schwenkbereich vor der Tür', 'freie Wandfläche neben der Öffnung'],
      ['Typische Breiten (ab Lager)', '75 bis 120 cm', '150 bis 250 cm'],
      ['Verkehr', 'Personen, Rollwagen', 'Rollwagen, Hubwagen, Stapler'],
      ['Typischer Einsatz', 'kleinere und mittlere Zellen', 'Kühllager, Kühlhäuser, mehrzellige Anlagen'],
    ], { label: 'Vergleich Drehtür und Schiebetür' })}</div>
  </div>
</section>

<section class="sec" aria-labelledby="tech-t">
  <div class="container split">
    <div>${secHead({ eyebrow: 'Technik', id: 'tech-t', title: 'Worauf es bei Kühlraumtüren ankommt', stack: true, text: 'Eine gute Tür hält die Kälte drin, öffnet zuverlässig – auch von innen – und übersteht den täglichen Betrieb.' })}
      ${fig('kuehlzelle-drehtuer-auffahrrampe', { n: 2, cap: 'Drehtür an einer Zelle mit Bodenelement und Auffahrrampe', ratio: '43', pos: 'center 40%', reveal: true, sizes: '(min-width: 1024px) 480px, 100vw' })}</div>
    <div data-reveal>${points([
      ['Anschlag links oder rechts', 'Der Anschlag bezeichnet die Seite, an der die Türbänder sitzen. Geben Sie am besten an, auf welcher Seite die Tür – von außen gesehen – angeschlagen sein soll. Wir liefern beide Varianten.'],
      ['Mit oder ohne Schwelle', 'Eine Schwelle verbessert den unteren Abschluss. Wo Rollwagen und Hubwagen durchfahren, ist eine schwellenlose Ausführung oft praktischer.'],
      ['Tiefkühltüren', 'Für den Minusbereich werden Türen üblicherweise mit Rahmenheizung ausgeführt, damit Dichtungen nicht anfrieren. Dazu gehört ein Druckausgleichsventil in der Zelle.'],
      ['Öffnung von innen', 'Nach DIN 8986 müssen sich Kühlraumtüren jederzeit von innen öffnen lassen – auch wenn sie von außen verschlossen sind.'],
      ['Weniger Kälteverlust', 'Türen und Fugen gehören zu den größten Wärmeeinträgen einer Kühlzelle. Intakte Dichtungen, Türschließer und Streifenvorhänge reduzieren die Verluste spürbar.'],
    ])}</div>
  </div>
</section>

<section class="sec sec--surface" aria-labelledby="faq-t">
  <div class="container split">
    <div>${secHead({ eyebrow: 'FAQ', id: 'faq-t', title: 'Fragen zu Kühlhaustüren', stack: true })}</div>
    ${faq([
      { q: 'Kann ich eine Kühlhaustür einzeln kaufen?', a: 'Ja. Sie können Türen aus unserer Lagerliste auch ohne Zelle anfragen – zur Lieferung oder zur Abholung in Bottrop.' },
      { q: 'Welche Maße haben die Türen?', a: 'Ab Lager führen wir Drehtüren von 75 × 175 bis 120 × 220 cm und Schiebetüren von 150 × 200 bis 250 × 250 cm (Breite × Höhe). Den aktuellen Bestand und Sondermaße nennen wir Ihnen auf Anfrage.' },
      { q: 'Was bedeutet Anschlag links oder rechts?', a: 'Der Anschlag gibt an, auf welcher Seite die Türbänder sitzen. Am eindeutigsten ist die Angabe von außen gesehen: Sitzen die Bänder links, ist die Tür links angeschlagen.' },
      { q: 'Brauche ich für eine Tiefkühlzelle eine besondere Tür?', a: 'Ja. Tiefkühltüren sind für den Minusbereich ausgelegt und werden üblicherweise mit Rahmenheizung ausgeführt, damit Dichtungen nicht anfrieren.' },
      { q: 'Sind Türen im Kalkulator enthalten?', a: 'Drehtüren können Sie im Kalkulator direkt auswählen und einpreisen. Schiebetüren bieten wir auf Anfrage an.' },
    ])}
  </div>
</section>

<section class="sec--sm"><div class="container">${related([
  { href: '/kuehlzellen/', tag: 'Lösungen', title: 'Kühlzellen nach Maß', text: 'Zelle und Tür als Einheit planen.' },
  { href: '/kuehlhausbau/', tag: 'Projekte', title: 'Kühlhausbau', text: 'Schiebetüren für Kühllager.' },
  { href: '/ratgeber/kuehlzelle-planen/', tag: 'Ratgeber', title: 'Kühlzelle planen', text: 'Türposition, Breite und Anschlag festlegen.' },
])}</div></section>

${ctaBand({ lead: 'secondary', title: 'Passende Tür gefunden?', text: 'Nennen Sie uns Format, Anschlagseite und ob Sie eine Schwelle wünschen – wir prüfen die Verfügbarkeit und melden uns mit einem Angebot.' })}`;
  },
};

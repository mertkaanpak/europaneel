import { icon, fig, pageHero, secHead, facts, steps, checks, faq, related, ctaBand, linkArrow } from '../lib.mjs';
import { SITE } from '../site.config.mjs';

export default {
  path: '/kuehlzellen-montage/',
  title: 'Kühlzellen-Montage & Planung deutschlandweit | Europaneel',
  description: 'Aufmaß, Planung, Lieferung und Montage von Kühlzellen und Kühlhäusern – deutschlandweit. Übliche Zellen meist an einem Tag montiert.',
  updated: '2026-10-05',
  crumbs: [['Planung & Montage', '/kuehlzellen-montage/']],
  service: { name: 'Planung und Montage von Kühlzellen', type: 'Aufmaß, Planung, Lieferung und Montage von Kühlzellen und Kühlhäusern' },
  ogPhoto: 'kuehlanlage-mehrzellig-montage',
  render() {
    return `${pageHero({
      eyebrow: 'Service · Aufmaß · Montage',
      title: 'Planung, Lieferung und Montage von Kühlzellen',
      lead: 'Eine Kühlzelle ist so gut wie ihre Planung und ihr Aufbau. Wir nehmen Maße und Anschlüsse auf, planen Zelle, Tür und Kältetechnik, liefern ab Bottrop und montieren deutschlandweit – übliche Zellengrößen in den meisten Fällen an einem Tag.',
      photo: 'kuehlzellen-schiebetueren-halle', cap: 'Zwei Kühlzellen mit Schiebetüren nach der Montage',
      ctas: { lead: 'secondary' },
    })}

<section class="sec--facts" aria-label="Eckdaten"><div class="container">${facts([
  ['Einsatzgebiet', 'Deutschland, Österreich, Schweiz, Niederlande'],
  ['Montagedauer', 'meist ein Tag bei üblichen Zellengrößen'],
  ['Lieferung', 'ab Lager Bottrop'],
  ['Alternativ', 'Selbstabholung in Bottrop'],
])}</div></section>

<section class="sec" aria-labelledby="leist-t">
  <div class="container">
    ${secHead({ eyebrow: 'Leistungen', id: 'leist-t', title: 'Alles aus einer Hand – oder nur das, was Sie brauchen', text: 'Von der ersten Beratung bis zur Übergabe begleitet Sie ein fester Ansprechpartner.' })}
    <div class="grid g-3">
      ${[
        ['clipboard-list', 'Beratung', 'Wir klären Ware, Temperatur, Platz und Abläufe – telefonisch oder vor Ort – und empfehlen Zelle, Tür und Kältetechnik.'],
        ['ruler', 'Aufmaß', 'Maße, Untergrund, Türposition, Stromanschluss und Aufstellort des Aggregats werden präzise erfasst.'],
        ['pencil-ruler', 'Planung & Angebot', 'Sie erhalten ein schriftliches Angebot mit allen Positionen – nachvollziehbar und ohne versteckte Kosten.'],
        ['truck', 'Lieferung', 'Paneele, Türen und Technik kommen ab unserem Lager in Bottrop. Alternativ holen Sie die Ware selbst ab.'],
        ['hard-hat', 'Montage', 'Unser Team baut die Zelle fachgerecht auf – übliche Zellengrößen stehen meist an einem Tag.'],
        ['fan', 'Kältetechnik', 'Auf Wunsch liefern wir das passende Aggregat als Huckepack-, Monoblock- oder Split-Lösung.'],
      ].map(([ic, t, p], i) => `<article class="card card--compact" data-reveal${i % 3 ? ` data-reveal-d="${i % 3}"` : ''}><span class="card__icon">${icon(ic)}</span><h3>${t}</h3><p>${p}</p></article>`).join('')}
    </div>
  </div>
</section>

<section class="sec sec--surface" aria-labelledby="ablauf-t">
  <div class="container">
    ${secHead({ eyebrow: 'Ablauf', id: 'ablauf-t', title: 'So läuft Ihr Projekt ab', text: 'Klare Schritte, klare Zuständigkeiten.' })}
    ${steps([
      ['Anfrage', 'Per Telefon, E-Mail, WhatsApp oder über den Kalkulator mit Richtpreis.'],
      ['Beratung & Aufmaß', 'Gemeinsame Klärung aller Anforderungen, Aufmaß vor Ort oder nach Ihren Angaben.'],
      ['Angebot & Termin', 'Schriftliches Angebot; nach Auftrag stimmen wir Liefer- und Montagetermin ab.'],
      ['Montage & Übergabe', 'Aufbau von Zelle und Tür, auf Wunsch mit Kältetechnik – und Übergabe an Sie.'],
    ])}
  </div>
</section>

<section class="sec" aria-labelledby="vorb-t">
  <div class="container split">
    <div data-reveal>
      <p class="eyebrow">Vorbereitung</p>
      <h2 id="vorb-t">Damit der Montagetag reibungslos läuft</h2>
      <p class="lead mt-s">Diese Punkte sollten vor dem Termin geklärt sein. Die ausführliche Erklärung finden Sie in unserer Planungs-Checkliste.</p>
      <p class="mt-m">${linkArrow('Zur Planungs-Checkliste', '/ratgeber/kuehlzelle-planen/')}</p>
    </div>
    <div data-reveal data-reveal-d="1">${checks([
      'Aufstellfläche frei, eben und tragfähig',
      'Zugang für die Paneele – Türbreiten, Treppen, Aufzug',
      'Zufahrt für das Lieferfahrzeug',
      'Stromanschluss für Aggregat und Beleuchtung vorbereitet',
      'Aufstellort und Lüftung für die Abwärme des Aggregats',
    ])}</div>
  </div>
</section>

<section class="sec sec--surface" aria-labelledby="praxis-t">
  <div class="container">
    ${secHead({ eyebrow: 'Aus der Praxis', id: 'praxis-t', title: 'Montage in der Halle', text: 'Mehrzellige Anlagen bauen wir abschnittsweise auf – hier mit Hubarbeitsbühne und geöffneten Schiebetüren.' })}
    <div class="grid g-2">
      ${fig('kuehlanlage-mehrzellig-montage', { n: 2, cap: 'Mehrzellige Kühlanlage in der Montagephase', reveal: true, sizes: '(min-width: 1024px) 600px, 100vw' })}
      ${fig('kuehlanlage-monoblock-aggregate', { n: 3, cap: 'Fertige Anlage mit Aggregaten und Auffahrrampen', reveal: true, sizes: '(min-width: 1024px) 600px, 100vw' })}
    </div>
  </div>
</section>

<section class="sec" aria-labelledby="faq-t">
  <div class="container split">
    <div>${secHead({ eyebrow: 'FAQ', id: 'faq-t', title: 'Fragen zu Planung und Montage', stack: true })}</div>
    ${faq([
      { q: 'Wie lange dauert die Montage einer Kühlzelle?', a: 'In den meisten Fällen montieren wir eine Kühlzelle an einem Tag. Größere Anlagen und Kühlhäuser planen wir individuell.' },
      { q: 'In welchen Regionen montiert Europaneel?', a: 'Deutschlandweit – von unserem Standort in Bottrop aus. Darüber hinaus sind wir in Nachbarländern wie Österreich, der Schweiz und den Niederlanden tätig.' },
      { q: 'Muss für das Aufmaß jemand vor Ort sein?', a: 'Für ein Aufmaß vor Ort vereinbaren wir einen Termin mit Ihnen. Bei einfachen Projekten genügen oft auch Ihre Maße, Fotos und eine Skizze.' },
      { q: 'Kann ich das Material selbst abholen?', a: 'Ja. Neben Lieferung und Montage ist die Selbstabholung ab unserem Lager am Rhein-Herne-Kanal in Bottrop möglich.' },
    ])}
  </div>
</section>

<section class="sec--sm"><div class="container">${related([
  { href: '/ratgeber/kuehlzelle-planen/', tag: 'Ratgeber', title: 'Kühlzelle planen: Checkliste', text: 'Alles, was vor dem Aufmaß geklärt sein sollte.' },
  { href: '/kuehlzellen/', tag: 'Lösungen', title: 'Kühlzellen nach Maß', text: 'Aufbau, Boden, Türen, Temperatur.' },
  { href: '/referenzen/', tag: 'Referenzen', title: 'Projekte aus der Praxis', text: 'Fotos aus unserer Montagepraxis.' },
])}</div></section>

${ctaBand({ lead: 'secondary', title: 'Montagetermin oder Aufmaß anfragen', text: `Schildern Sie uns Ihr Projekt – oder rufen Sie direkt an: ${SITE.phone.display}.` })}`;
  },
};

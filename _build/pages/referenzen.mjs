import { icon, pic, imgSrc, imgAlt, pageHero, secHead, related, ctaBand } from '../lib.mjs';

// Nur echte Projektfotos; Beschreibungen zeigen ausschließlich, was zu sehen ist.
// CONTENT_REQUIRED (intern): Branche, Ort, Maße, Temperatur, Dauer je Projekt → dann Case Studies unter /referenzen/<projekt>/
const GROUPS = [
  { id: 'anlagen', title: 'Mehrzellige Kühlanlagen', text: 'Anlagen mit mehreren Zellen, Schiebetüren und Auffahrrampen in Industriehallen.', items: [
    ['kuehlanlage-mehrzellig-montage', 'Mehrzellige Anlage in der Montagephase', 'Drei Zellen mit Schiebetüren, Hubarbeitsbühne für den Deckenanschluss.'],
    ['kuehlanlage-mehrzellig-hochformat', 'Langgestreckte Anlage mit drei Schiebetüren', 'Blick entlang der Front in der Halle.'],
    ['kuehlanlage-monoblock-aggregate', 'Anlage mit wandmontierten Aggregaten', 'Schiebetüren, Auffahrrampen und Kälteaggregate an der Außenwand.'],
    ['kuehlanlage-aggregat-schiebetueren', 'Front mit Kälteaggregat', 'Zwei Schiebetüren und ein Aggregat über der Zellenwand.'],
  ] },
  { id: 'zellen', title: 'Kühlzellen mit Schiebe- und Drehtüren', text: 'Einzelne Zellen in verschiedenen Größen und Oberflächen.', items: [
    ['kuehlzellen-schiebetueren-halle', 'Zwei Zellen mit Schiebetüren', 'Große weiße Zellen in einer Industriehalle.'],
    ['kuehlzelle-anthrazit-schiebetuer', 'Zelle in Anthrazit mit Schiebetür', 'Dunkle Paneele mit weißer Kühlhaus-Schiebetür.'],
    ['kuehlzelle-anthrazit-fliesenboden', 'Zelle in Anthrazit auf Fliesenboden', 'Schiebetür in einem gefliesten Innenraum.'],
    ['kuehlzelle-drehtuer-auffahrrampe', 'Kompakte Zelle mit Drehtür', 'Bodenelement mit Auffahrrampe aus Riffelblech.'],
    ['kuehlzelle-monoblock-werkstatt', 'Zelle mit Kälteaggregat neben der Tür', 'Anthrazitfarbene Zelle mit seitlich montiertem Aggregat.'],
  ] },
];

let n = 0;
const card = ([slug, title, text]) => {
  n += 1;
  return `<figure><button type="button" data-lb="${imgSrc(slug, 1600)}" data-alt="${imgAlt(slug)}" data-cap="Abb. ${String(n).padStart(2, '0')} – ${title}" aria-label="Großansicht: ${title}">${pic(slug, { sizes: '(min-width: 1024px) 400px, (min-width: 520px) 50vw, 100vw' })}</button>`
    + `<figcaption><b>Abb. ${String(n).padStart(2, '0')} · ${title}</b><br>${text}</figcaption></figure>`;
};

export default {
  path: '/referenzen/',
  title: 'Referenzen: Kühlzellen- & Kühlhausprojekte | Europaneel',
  description: 'Projekte von Europaneel: mehrzellige Kühlanlagen, Kühlzellen mit Schiebe- und Drehtüren und montierte Kälteaggregate – echte Fotos aus der Praxis.',
  updated: '2026-10-05',
  pageType: 'CollectionPage',
  crumbs: [['Referenzen', '/referenzen/']],
  ogPhoto: 'kuehlanlage-mehrzellig-montage',
  render() {
    n = 0;
    return `${pageHero({
      eyebrow: 'Referenzen',
      title: 'Kühlzellen und Kühlanlagen aus unserer Praxis',
      lead: 'Hier zeigen wir echte Projekte – fotografiert auf der Baustelle, nicht gerendert. Von der kompakten Zelle mit Drehtür bis zur mehrzelligen Anlage mit Schiebetüren und Kältetechnik.',
      ctas: { lead: 'secondary' },
    })}
${GROUPS.map((g, gi) => `<section class="sec${gi % 2 ? ' sec--surface' : ''}" aria-labelledby="${g.id}-t"><div class="container">
  ${secHead({ eyebrow: `${g.items.length} Projekteinblicke`, id: `${g.id}-t`, title: g.title, text: g.text })}
  <div class="gallery" data-reveal>${g.items.map(card).join('')}</div>
</div></section>`).join('')}

<section class="sec--sm"><div class="container">${related([
  { href: '/kuehlhausbau/', tag: 'Projekte', title: 'Kühlhausbau', text: 'Mehrzellige Anlagen planen.' },
  { href: '/kuehlzellen/', tag: 'Lösungen', title: 'Kühlzellen nach Maß', text: 'Einzelne Zellen für Ihren Betrieb.' },
  { href: '/kuehlzellen-montage/', tag: 'Service', title: 'Planung & Montage', text: 'So läuft ein Projekt ab.' },
])}</div></section>

<dialog class="lightbox" id="lightbox" aria-label="Bildansicht">
  <div class="lightbox__in">
    <div class="lightbox__top"><span class="lightbox__count tnum"></span><button class="lb-btn lb-close" type="button" aria-label="Schließen">${icon('x')}</button></div>
    <div class="lightbox__stage"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACw=" width="1600" height="1200" alt=""></div>
    <p class="lightbox__cap"></p>
    <button class="lb-btn lb-nav lb-prev" type="button" aria-label="Vorheriges Bild">${icon('chevron-left')}</button>
    <button class="lb-btn lb-nav lb-next" type="button" aria-label="Nächstes Bild">${icon('chevron-right')}</button>
  </div>
</dialog>

${ctaBand({ lead: 'secondary', title: 'Ein ähnliches Projekt geplant?', text: 'Erzählen Sie uns, was Sie kühlen möchten – wir zeigen Ihnen gern weitere Beispiele aus unserer Praxis.' })}`;
  },
};

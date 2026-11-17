import { icon, pic, fig, btn, facts, secHead, points, faq, related, ctaBand, linkArrow } from '../lib.mjs';
import { SITE, CTA } from '../site.config.mjs';

const tile = (h, t, k, p, text, cap) => `<a class="cinema-service" href="${h}" data-reveal><div>${pic(p, { sizes: '(min-width:1360px) 33vw,100vw' })}</div><span>${k}</span><h3>${t}</h3><p>${text}</p><small class="cinema-service__cap">Foto: ${cap}</small><b>${t} ansehen ${icon('arrow-right')}</b></a>`;

export default {
  path: '/',
  bodyClass: 'home-cinema',
  title: 'Kühlraumbau bundesweit: Kühlzellen & Kühlhäuser | Europaneel',
  description: 'Europaneel plant, liefert und montiert Kühlzellen, Tiefkühlzellen und Kühlhäuser deutschlandweit – in der Regel in 1–2 Wochen. Richtpreis online berechnen.',
  updated: '2026-11-18',
  pageType: 'WebPage',
  ogPhoto: 'kuehlanlage-rot-praxis',
  render() {
    return `
<section class="cinema-hero" aria-labelledby="hero-t"><div class="cinema-hero__photo">${pic('kuehlanlage-rot-praxis', { eager: true, sizes: '100vw' })}</div><div class="cinema-hero__shade"></div><div class="cinema-hero__grid" aria-hidden="true"></div><div class="container cinema-hero__content" data-hero-enter><p class="eyebrow">Europaneel · Kühlraumbau</p><h1 id="hero-t">Kühlräume,<br><em>die funktionieren.</em></h1><h2 class="cinema-hero__sub">Kühlzellen, Tiefkühlzellen und Kühlhäuser nach Maß – bundesweit.</h2><p>Wir planen Abmessungen, Paneelstärke, Boden, Türen und Kältetechnik passend zu Ihrem Betrieb, liefern ab unserem Lager in Bottrop und montieren deutschlandweit.</p><div class="btn-row"><a class="btn btn--primary" href="${CTA.secondary.href}">Projekt anfragen${icon('arrow-right')}</a>${btn('Kühlzelle konfigurieren', CTA.primary.href, { variant: 'ghost-light', icon: false })}</div></div><a class="cinema-scroll" href="#fakten">Scrollen <i></i></a></section>
<section id="fakten" class="cinema-facts" aria-label="Eckdaten"><div class="container">${facts([['18+', 'Jahre Erfahrung'], ['1.000+', 'montierte Kühlzellen'], ['Deutschland', 'Montage bundesweit'], ['1–2 Wochen', 'in der Regel Lieferung & Montage']], 'cinema-facts__in')}</div></section>
<section class="cinema-practice" aria-labelledby="praxis-t"><div class="container">${secHead({ eyebrow: 'Aus der Praxis', id: 'praxis-t', title: 'Anlagen, die den Raum prägen.', text: 'Echte Kühlanlagen – sachlich dokumentiert.' })}</div><div class="cinema-practice__wide" data-reveal>${fig('kuehlanlage-gruen-praxis', { n: 1, cap: 'Kühlanlage mit außenliegenden Aggregaten', ratio: 'wide', sizes: '100vw' })}</div><div class="container cinema-practice__pair"><div data-reveal>${fig('kuehlzelle-tuerreihe-praxis', { n: 2, cap: 'Weiße Kühlzelle mit mehreren Türen', ratio: 'wide', sizes: '(min-width:1360px) 50vw,100vw' })}</div><div data-reveal data-reveal-d="2">${fig('kuehlanlage-dunkel-praxis', { n: 3, cap: 'Dunkle Kühlzelle unter einem Glasdach', ratio: 'wide', sizes: '(min-width:1360px) 50vw,100vw' })}</div></div><div class="container"><p class="cinema-practice__more">${linkArrow('Alle Referenzen ansehen', '/referenzen/')}</p></div></section>

<section class="cinema-services" aria-labelledby="leist-t"><div class="container">
  ${secHead({ eyebrow: 'Leistungen', id: 'leist-t', title: 'Vom Kühlraum für die Küche bis zum mehrzelligen Kühllager', text: 'Jede Anlage entsteht aus Sandwichpaneelen, Türen und Kältetechnik – abgestimmt auf Temperatur, Nutzung und den verfügbaren Platz.' })}
  <div class="cinema-services__grid">
    ${tile('/kuehlzellen/', 'Kühlzellen', 'Pluskühlung', 'kuehlzelle-offene-tuer-praxis', 'Begehbare Kühlzellen nach Maß – mit oder ohne Bodenelement, mit Dreh- oder Schiebetür und passendem Kälteaggregat.', 'Kühlzelle mit geöffneter Tür in einer Halle')}
    ${tile('/tiefkuehlzellen/', 'Tiefkühlzellen', 'Minusbereich', 'kuehlanlage-dunkel-praxis', 'Für Tiefkühlware, die bei −18 °C oder kälter gelagert werden muss: mit isoliertem Boden, Tiefkühltür und abgestimmter Kältetechnik.', 'Kühlzelle unter einem Glasdach (Beispielfoto)')}
    ${tile('/kuehlhausbau/', 'Kühlhausbau', 'Große Projekte', 'kuehlanlage-rot-praxis', 'Mehrzellige Kühlanlagen und Kühllager in Hallen – als Gesamtprojekt mit Schiebetüren, Auffahrrampen und Kältetechnik.', 'Mehrteilige Kühlanlage mit roten Paneelen in einer Halle')}
  </div>
  <div class="ind cinema-parts">
    ${[
      ['/sandwichpaneele/', 'layers', 'Sandwichpaneele', 'Isolierpaneele für Wand, Decke und Boden – viele Stärken ab Lager.'],
      ['/kuehlhaustueren/', 'door-closed', 'Kühlhaustüren', 'Dreh- und Schiebetüren, Anschlag links oder rechts, mit oder ohne Schwelle.'],
      ['/kaelteaggregate/', 'fan', 'Kälteaggregate', 'Monoblock-, Huckepack- und Split-Lösungen passend zur Zelle.'],
      ['/kuehlzellen-montage/', 'hard-hat', 'Planung & Montage', 'Aufmaß vor Ort, Planung, Lieferung und fachgerechter Aufbau.'],
    ].map(([h, ic, t, p], i) => `<a href="${h}" data-reveal${i ? ` data-reveal-d="${i}"` : ''}>${icon(ic)}<b>${t}</b><small>${p}</small></a>`).join('')}
  </div>
</div></section>

<section class="sec cinema-why" aria-labelledby="why-t"><div class="container split">
  <div>${secHead({ eyebrow: 'Warum Europaneel', id: 'why-t', title: 'Kühlraumbau mit kurzen Wegen und klaren Preisen', stack: true })}</div>
  <div data-reveal>${points([
    ['Richtpreis, bevor Sie anfragen', 'Unser Kalkulator zeigt den Netto-Richtpreis für Paneele und Tür sofort – ohne Registrierung. So wissen Sie früh, in welcher Größenordnung Ihr Projekt liegt.'],
    ['Ein Ansprechpartner bis zur Übergabe', 'Beratung, Aufmaß, Planung, Lieferung und Montage aus einer Hand – auf Wunsch inklusive Kältetechnik als Huckepack-, Monoblock- oder Split-Lösung.'],
    ['Material ab Lager in Bottrop', 'Viele Paneelstärken, Formate und Oberflächen sowie Kühlhaustüren sind kurzfristig verfügbar. Ihre Ware können Sie auch direkt bei uns abholen.'],
    ['Maßanfertigung statt Katalog', 'Abmessungen, Boden, Türposition und Anschlag richten sich nach Ihrem Raum und Ihren Abläufen. Bestehende Zellen lassen sich je nach baulicher Situation erweitern.'],
  ])}</div>
</div></section>

<section class="sec sec--surface cinema-tech" aria-labelledby="tech-t"><div class="container">
  ${secHead({ eyebrow: 'Technik', id: 'tech-t', title: 'Worauf es bei einer Kühlzelle technisch ankommt', text: 'Drei Entscheidungen bestimmen Funktion, Energiebedarf und Alltagstauglichkeit Ihrer Zelle.' })}
  <ol class="cinema-tech__grid">
    <li data-reveal><b>01</b><h3>Dämmstärke nach Temperatur</h3><p>Tiefkühlung braucht deutlich mehr Dämmung als Pluskühlung. Welche Paneelstärke sinnvoll ist, hängt von Solltemperatur, Umgebung und Paneelsystem ab.</p>${linkArrow('Ratgeber Paneelstärke', '/ratgeber/paneelstaerke-kuehlzelle/')}</li>
    <li data-reveal data-reveal-d="1"><b>02</b><h3>Tür nach Warenfluss</h3><p>Drehtüren für kleinere Zellen und Personenverkehr, Schiebetüren für breite Öffnungen und Rollwagen. Tiefkühltüren werden üblicherweise mit Rahmenheizung ausgeführt.</p>${linkArrow('Kühlhaustüren', '/kuehlhaustueren/')}</li>
    <li data-reveal data-reveal-d="2"><b>03</b><h3>Aggregat nach Raum und Abwärme</h3><p>Monoblock, Huckepack oder Split: Entscheidend sind Kältebedarf, Aufstellort und wohin die Abwärme abgeführt werden kann.</p>${linkArrow('Kälteaggregate', '/kaelteaggregate/')}</li>
  </ol>
</div></section>

<section class="sec cinema-ind" aria-labelledby="ind-t"><div class="container">
  ${secHead({ eyebrow: 'Branchen', id: 'ind-t', title: 'Kühlräume für Betriebe, in denen die Kühlkette zählt', text: 'Lebensmittelrecht, Warenfluss und Platz unterscheiden sich je Branche. Wir planen die Zelle danach – nicht umgekehrt.' })}
  <div class="ind" data-reveal>
    ${[
      ['/branchen/gastronomie/', 'chef-hat', 'Gastronomie & Hotel', 'Kühl- und Tiefkühlzellen für Küche, Lager und Catering.'],
      ['/branchen/metzgerei/', 'beef', 'Metzgerei & Fleischerei', 'Kühlräume für Fleisch, Wurst und Zubereitungen.'],
      ['/branchen/baeckerei-konditorei/', 'croissant', 'Bäckerei & Konditorei', 'Tiefkühlung für Teiglinge, Kühlung für Füllungen.'],
      ['/branchen/lebensmittelhandel-hofladen/', 'store', 'Lebensmittelhandel & Hofladen', 'Lagerkühlung hinter Verkaufsflächen und Märkten.'],
      ['/branchen/#produktion', 'factory', 'Lebensmittelproduktion', 'Kühlräume für Rohware, Zwischen- und Fertigprodukte.'],
      ['/branchen/#logistik', 'forklift', 'Logistik & Lager', 'Kühllager mit Schiebetüren und Auffahrrampen.'],
      ['/branchen/#pharma', 'pill', 'Pharma & Apotheken', 'Gekühlte Lagerbereiche für temperaturgeführte Ware.'],
      ['/branchen/#catering', 'utensils', 'Catering & Großküchen', 'Getrennte Kühlzonen für Rohware und Fertiges.'],
    ].map(([h, ic, t, s]) => `<a href="${h}">${icon(ic)}<b>${t}</b><small>${s}</small></a>`).join('')}
  </div>
</div></section>

<section class="cinema-flow" aria-labelledby="ablauf-t"><div class="container">${secHead({ eyebrow: 'Ablauf', id: 'ablauf-t', title: 'Präzise geplant. Klar umgesetzt.', text: 'Vom ersten Gespräch bis zur betriebsbereiten Zelle – mit einem festen Ansprechpartner.' })}<ol class="cinema-flow__steps" data-reveal>
  <li><b>01</b><h3>Beratung</h3><p>Per Telefon, E-Mail, WhatsApp oder vor Ort. Wir nehmen alle Maße und Anschlüsse präzise auf.</p></li>
  <li><b>02</b><h3>Planung</h3><p>Sie erhalten ein schriftliches Angebot mit allen Positionen – Zelle, Tür, Kältetechnik, Lieferung und Montage.</p></li>
  <li><b>03</b><h3>Lieferung</h3><p>Ab unserem Lager in Bottrop – deutschlandweit an Ihren Standort.</p></li>
  <li><b>04</b><h3>Montage</h3><p>Lieferung und Montage in der Regel innerhalb von 1–2 Wochen. Übliche Zellengrößen stehen meist an einem Tag.</p></li>
</ol></div></section>

<section class="cinema-calc" aria-labelledby="calc-t" data-track-pos="calc-teaser"><div class="container"><p class="eyebrow">Kühlzellen-Kalkulator</p><h2 id="calc-t">Richtpreis in <em>4 Schritten.</em></h2><p>Kühlart wählen, Boden festlegen, Maße eingeben, Tür auswählen: Der Netto-Richtpreis für Paneele und Tür erscheint sofort – ohne Registrierung. Wenn er passt, übernehmen wir Ihre Konfiguration direkt in die Anfrage.</p><ol class="cinema-calc__steps"><li>01 Kühlart (Plus/Tief)</li><li>02 Boden</li><li>03 Maße</li><li>04 Tür &amp; Preis</li></ol><p class="cinema-calc__note">${icon('info')}Kälteaggregat, Lieferung und Montage sind nicht im Richtpreis enthalten – wir bieten sie auf Wunsch separat an.</p>${btn('Kühlzelle konfigurieren', CTA.primary.href)}</div></section>

<section class="sec sec--surface cinema-know" aria-labelledby="rat-t"><div class="container">
  ${secHead({ eyebrow: 'Ratgeber', id: 'rat-t', title: 'Fachwissen für Ihre Entscheidung', text: 'Antworten auf die Fragen, die vor jedem Kühlzellen-Projekt stehen – sachlich und ohne Verkaufsfloskeln.' })}
  <div class="related-4">${related([
    { href: '/ratgeber/kuehlzelle-kosten/', tag: 'Kosten', title: 'Was kostet eine Kühlzelle?', text: 'Welche Posten den Preis bestimmen – und was im Richtpreis steckt.' },
    { href: '/ratgeber/kuehlzelle-planen/', tag: 'Planung', title: 'Kühlzelle planen: Checkliste', text: 'Maße, Untergrund, Strom, Tür und Aggregat – vor dem Aufmaß klären.' },
    { href: '/ratgeber/paneelstaerke-kuehlzelle/', tag: 'Technik', title: 'Welche Paneelstärke braucht eine Kühlzelle?', text: 'Dämmstärke, U-Wert und Kernmaterial im Überblick.' },
    { href: '/ratgeber/kuehlraum-bauen/', tag: 'Grundlagen', title: 'Kühlraum bauen: Raum dämmen oder Kühlzelle?', text: 'Dämmung, Feuchteschutz, Hygiene und Aufwand im Vergleich.' },
  ], 'Ratgeber-Artikel')}</div>
</div></section>

<section class="sec cinema-faq" aria-labelledby="faq-t"><div class="container split">
  <div>${secHead({ eyebrow: 'FAQ', id: 'faq-t', title: 'Häufige Fragen', text: 'Ihre Frage ist nicht dabei? Rufen Sie uns an – wir antworten direkt.', stack: true })}
    <p data-reveal><a class="tel-line" href="${SITE.phone.href}">${icon('phone')}${SITE.phone.display}</a></p></div>
  <div>${faq([
    { q: 'Wie lange dauert die Montage einer Kühlzelle?', a: 'Das hängt von den Maßen ab – in den meisten Fällen montieren wir eine Kühlzelle an einem Tag. Größere Anlagen und Kühlhäuser planen wir individuell.' },
    { q: 'Liefert und montiert Europaneel bundesweit?', a: 'Ja. Wir liefern und montieren deutschlandweit und sind auch in Nachbarländern wie Österreich, der Schweiz und den Niederlanden tätig.' },
    { q: 'Was ist im Preis des Kalkulators enthalten?', a: 'Der Kalkulator berechnet einen Netto-Richtpreis für die Kühlzelle selbst – Sandwichpaneele und Tür, bei gewähltem Boden inklusive Siebdruckplatte. Kälteaggregat, Lieferung und Montage bieten wir auf Wunsch separat an.' },
    { q: 'Welche Kühlzellen-Größen sind möglich?', a: 'Alle Größen sind möglich. Wir fertigen Kühlzellen nach Ihren Wunschmaßen – von der kleinen Zelle für die Gastronomie bis zum großen Kühllager.' },
    { q: 'Kann eine bestehende Kühlzelle erweitert werden?', a: 'Grundsätzlich ja, abhängig von den baulichen Gegebenheiten vor Ort. Wir sehen uns die Situation an und beraten Sie ehrlich.' },
    { q: 'Bietet Europaneel auch Kälteaggregate an?', a: 'Ja – in den gängigen Bauformen Huckepack, Monoblock und Split. So erhalten Sie Zelle und Kältetechnik aufeinander abgestimmt aus einer Hand.' },
    { q: 'Kann ich Material selbst in Bottrop abholen?', a: 'Ja. Neben Lieferung und Montage ist auch die Selbstabholung ab unserem Lager am Rhein-Herne-Kanal in Bottrop möglich.' },
  ])}</div>
</div></section>

<section class="sec sec--surface cinema-site" aria-labelledby="ort-t"><div class="container split split--center">
  <div data-reveal>
    <p class="eyebrow">Standort Bottrop</p>
    <h2 id="ort-t">Lager, Werkstatt und Beratung am Rhein-Herne-Kanal</h2>
    <p class="lead mt-s">Besuchen Sie uns nach Vereinbarung: Wir beraten Sie persönlich, zeigen Paneele und Türen – oder Sie holen Ihre Ware direkt ab.</p>
    <div class="contact-strip contact-strip--stack mt-l">
      <div>${icon('map-pin')}<span><small>Adresse</small><b>${SITE.legalName}<br>${SITE.address.street}, ${SITE.address.zip} ${SITE.address.city}</b></span></div>
      <a class="contact-strip__i" href="${SITE.phone.href}" data-track-pos="home-contact">${icon('phone')}<span><small>Telefon</small><b>${SITE.phone.display}</b></span></a>
      <div>${icon('clock')}<span><small>Erreichbarkeit</small><b>${SITE.hours.text} · ${SITE.hours.sat}</b></span></div>
    </div>
    <div class="btn-row mt-m"><a class="btn btn--dark" href="${SITE.mapsLink}" target="_blank" rel="noopener">${icon('navigation')}Route planen</a>${btn(CTA.secondary.label, CTA.secondary.href, { variant: 'outline', icon: false })}</div>
  </div>
  ${fig('europaneel-standort-bottrop', { n: 4, cap: 'Firmengelände der Europaneel GmbH in Bottrop', reveal: true, sizes: '(min-width: 1024px) 640px, 100vw' })}
</div></section>

<section class="cinema-close"><div class="container"><p class="eyebrow">Ihr Projekt</p><h2>Starten wir mit einer klaren Anfrage.</h2><p>Wir prüfen Ihre Angaben und melden uns nach Sichtung zurück.</p><div class="btn-row"><a class="btn btn--primary" href="${CTA.secondary.href}">Projekt anfragen${icon('arrow-right')}</a><a class="btn btn--ghost-light" href="${SITE.phone.href}">${icon('phone')}Anrufen</a></div></div></section>${ctaBand({ lead: 'secondary', title: 'Ihre Kühlzelle. Präzise geplant.', text: 'Konfigurieren Sie vorab oder sprechen Sie direkt mit uns.' })}`;
  },
};

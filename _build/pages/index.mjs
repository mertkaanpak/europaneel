import { icon, pic, fig, btn, secHead, points, checks, faq, related, ctaBand, linkArrow } from '../lib.mjs';
import { SITE, CTA } from '../site.config.mjs';

const tile = (h, t, k, p, text, cap) => `<a class="cinema-service" href="${h}" data-reveal><div>${pic(p, { sizes: '(min-width:1360px) 33vw,100vw' })}</div><span>${k}</span><h3>${t}</h3><p>${text}</p><small class="cinema-service__cap">Foto: ${cap}</small><b>${t} ansehen ${icon('arrow-right')}</b></a>`;

export default {
  path: '/',
  bodyClass: 'home-cinema',
  title: 'Kühlraumbau bundesweit: Kühlzellen & Kühlhäuser | Europaneel',
  description: 'Europaneel plant, liefert und montiert Kühlzellen, Tiefkühlzellen und Kühlhäuser deutschlandweit – in der Regel in 1–2 Wochen. Richtpreis online berechnen.',
  updated: '2026-11-17',
  pageType: 'WebPage',
  ogPhoto: 'kuehlanlage-rot-praxis',
  render() {
    return `
<section class="cinema-hero" aria-labelledby="hero-t"><div class="cinema-hero__photo">${pic('kuehlanlage-rot-praxis', { eager: true, sizes: '100vw' })}</div><div class="cinema-hero__shade"></div><div class="cinema-hero__grid" aria-hidden="true"></div>
<div class="container cinema-hero__content"><div class="cinema-hero__text" data-hero-enter>
  <p class="eyebrow">Europaneel · Kühlraumbau aus Bottrop</p>
  <h1 id="hero-t">Kühlzellen nach Maß. <em>Geplant, geliefert, montiert.</em></h1>
  <p class="cinema-hero__lead">Kühlzellen, Tiefkühlzellen und Kühlhäuser für Gastronomie, Handel und Gewerbe: Wir planen Maße, Paneelstärke, Boden, Türen und Kältetechnik passend zu Ihrem Betrieb – und montieren bundesweit.</p>
  <div class="btn-row"><a class="btn btn--primary" href="${CTA.secondary.href}" data-track-pos="hero">Projekt anfragen${icon('arrow-right')}</a>${btn('Kühlzelle konfigurieren', CTA.primary.href, { variant: 'ghost-light', icon: false, attrs: 'data-track-pos="hero"' })}</div>
  <p class="cinema-hero__tel" data-track-pos="hero">oder direkt anrufen: <a href="${SITE.phone.href}">${icon('phone')}${SITE.phone.display}</a></p>
</div>
<a class="hero-calc" href="${CTA.primary.href}" data-hero-media><span class="hero-calc__lbl">${icon('calculator')}Online-Kalkulator</span><span class="hero-calc__dims" aria-hidden="true"><i>L</i>×<i>B</i>×<i>H</i></span><span class="hero-calc__txt">Maße, Boden und Tür wählen – Netto-Richtpreis sofort, ohne Registrierung.</span><span class="hero-calc__go">Richtpreis berechnen${icon('arrow-right')}</span></a>
</div>
<div class="cinema-hero__proof"><div class="container"><dl class="proof" id="fakten" aria-label="Eckdaten">
  <div><dt>Erfahrung</dt><dd><b>18+</b> Jahre</dd></div>
  <div><dt>Montiert</dt><dd><b>1.000+</b> Kühlzellen</dd></div>
  <div><dt>Lieferung &amp; Montage</dt><dd>in der Regel <b>1–2</b> Wochen</dd></div>
  <div><dt>Einsatzgebiet</dt><dd><b>bundesweit</b></dd></div>
</dl></div></div></section>
<section class="cinema-practice" aria-labelledby="praxis-t"><div class="container">${secHead({ eyebrow: 'Aus der Praxis', id: 'praxis-t', title: 'Anlagen, die den Raum prägen.', text: 'Echte Kühlanlagen – sachlich dokumentiert.' })}</div><div class="cinema-practice__wide" data-reveal>${fig('kuehlanlage-gruen-praxis', { n: 1, cap: 'Kühlanlage mit außenliegenden Aggregaten', ratio: 'wide', sizes: '100vw' })}</div><div class="container cinema-practice__pair"><div data-reveal>${fig('kuehlzelle-tuerreihe-praxis', { n: 2, cap: 'Weiße Kühlzelle mit mehreren Türen', ratio: 'wide', sizes: '(min-width:1360px) 50vw,100vw' })}</div><div data-reveal data-reveal-d="2">${fig('kuehlanlage-dunkel-praxis', { n: 3, cap: 'Dunkle Kühlzelle unter einem Glasdach', ratio: 'wide', sizes: '(min-width:1360px) 50vw,100vw' })}</div></div><div class="container"><p class="cinema-practice__more">${linkArrow('Alle Referenzen ansehen', '/referenzen/')}</p></div></section>

<section class="cinema-services" aria-labelledby="leist-t"><div class="container">
  ${secHead({ eyebrow: 'Leistungen', id: 'leist-t', title: 'Vom Kühlraum für die Küche bis zum mehrzelligen Kühllager', text: 'Jede Anlage entsteht aus Sandwichpaneelen, Türen und Kältetechnik – abgestimmt auf Temperatur, Nutzung und den verfügbaren Platz.' })}
  <div class="cinema-services__grid">
    ${tile('/kuehlzellen/', 'Kühlzellen', 'Pluskühlung', 'kuehlzelle-offene-tuer-praxis', 'Begehbare Kühlzellen nach Maß – mit oder ohne Bodenelement, mit Dreh- oder Schiebetür und passendem Kälteaggregat.', 'Kühlzelle mit geöffneter Tür in einer Halle')}
    ${tile('/tiefkuehlzellen/', 'Tiefkühlzellen', 'Minusbereich', 'kuehlzelle-monoblock-werkstatt', 'Für Tiefkühlware, die bei −18 °C oder kälter gelagert werden muss: mit isoliertem Boden, Tiefkühltür und abgestimmter Kältetechnik.', 'Zelle mit Kälteaggregat neben der Tür (Beispielfoto)')}
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

<section class="sec route" aria-labelledby="route-t" data-track-pos="home-route"><div class="container">
  ${secHead({ eyebrow: 'Ihr Weg zum Angebot', id: 'route-t', title: 'Drei Wege zu Ihrem Angebot', text: 'Ob eine einzelne Kühlzelle für die Küche oder ein mehrzelliges Kühllager: Wählen Sie den Einstieg, der zu Ihrem Vorhaben passt.' })}
  <div class="route__grid">
    <article class="route__card" data-reveal><span class="route__n">01</span><h3>Richtpreis selbst ermitteln</h3><p>Für einzelne Kühl- und Tiefkühlzellen: Kühlart, Boden, Maße und Tür wählen – der Netto-Richtpreis erscheint sofort. Die Konfiguration senden Sie mit einem Klick als Anfrage.</p>${btn('Kühlzelle konfigurieren', CTA.primary.href, { variant: 'outline' })}</article>
    <article class="route__card route__card--lead" data-reveal data-reveal-d="1"><span class="route__n">02</span><h3>Kühlhaus oder Mehrzellenanlage planen</h3><p>Für größere Anlagen, mehrere Temperaturzonen oder besondere Einbausituationen planen wir individuell. Hilfreich für ein schnelles Angebot:</p>
      ${checks(['Grundriss, Skizze oder Fotos des Aufstellorts', 'Ungefähre Maße und verfügbare Raumhöhe', 'Ware und gewünschte Temperatur je Bereich', 'Standort und Wunschtermin'])}
      ${btn('Großprojekt anfragen', '/kontakt.html?projekt=kuehlhaus#anfrage', { variant: 'primary' })}</article>
    <article class="route__card" data-reveal data-reveal-d="2"><span class="route__n">03</span><h3>Direkt mit uns sprechen</h3><p>Sie sind unsicher, welche Lösung passt? Rufen Sie an oder schreiben Sie uns per WhatsApp – Fotos und Skizzen gern direkt mitschicken.</p>
      <ul class="route__direct"><li><a href="${SITE.phone.href}">${icon('phone')}${SITE.phone.display}</a></li><li><a href="${SITE.whatsapp}" target="_blank" rel="noopener">${icon('whatsapp', 'icon--fill')}WhatsApp-Nachricht</a></li><li><a href="mailto:${SITE.email}">${icon('mail')}${SITE.email}</a></li></ul>
      <p class="route__hours">${SITE.hours.text}</p></article>
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

<section class="cinema-calc" aria-labelledby="calc-t" data-track-pos="calc-teaser"><div class="container cinema-calc__in"><div><p class="eyebrow">Kühlzellen-Kalkulator</p><h2 id="calc-t">Richtpreis in <em>4 Schritten.</em></h2><p>Kühlart wählen, Boden festlegen, Maße eingeben, Tür auswählen: Der Netto-Richtpreis für Paneele und Tür erscheint sofort – ohne Registrierung. Wenn er passt, übernehmen wir Ihre Konfiguration direkt in die Anfrage.</p><ol class="cinema-calc__steps"><li>01 Kühlart</li><li>02 Boden</li><li>03 Maße</li><li>04 Tür &amp; Preis</li></ol><p class="cinema-calc__note">${icon('info')}Kälteaggregat, Lieferung und Montage sind nicht im Richtpreis enthalten – wir bieten sie auf Wunsch separat an.</p>${btn('Kühlzelle konfigurieren', CTA.primary.href)}</div>
<a class="calc-mock" href="${CTA.primary.href}" tabindex="-1" aria-hidden="true" data-reveal data-reveal-d="1"><span class="calc-mock__bar"><i></i><i></i><i></i><small>Schematische Darstellung</small></span><span class="calc-mock__body"><span class="calc-mock__steps"><span class="on"></span><span class="on"></span><span class="on"></span><span></span></span><span class="calc-mock__lbl">Maße Ihrer Kühlzelle</span><span class="calc-mock__row"><span class="calc-mock__f"><small>Länge</small><b>L m</b></span><span class="calc-mock__f"><small>Breite</small><b>B m</b></span><span class="calc-mock__f"><small>Höhe</small><b>H m</b></span></span><span class="calc-mock__f calc-mock__door"><small>Tür</small><b>Drehtür oder Schiebetür</b></span><span class="calc-mock__res"><span><small>Richtpreis netto</small><b>sofort sichtbar</b></span>${icon('arrow-right')}</span></span></a>
</div></section>

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

${ctaBand({ lead: 'secondary', title: 'Starten wir mit Ihrem Projekt.', text: 'Schildern Sie uns Ihr Vorhaben – wir prüfen Ihre Angaben und melden uns mit einem schriftlichen Angebot. Oder ermitteln Sie vorab selbst einen Richtpreis.' })}`;
  },
};

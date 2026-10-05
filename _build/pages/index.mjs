import { icon, pic, fig, btn, ctas, secHead, facts, points, steps, faq, related, ctaBand, linkArrow } from '../lib.mjs';
import { SITE, CTA } from '../site.config.mjs';

const FACTS = Object.values(SITE.facts).filter((f) => f.confirmed);

export default {
  path: '/',
  title: 'Kühlraumbau aus Bottrop: Kühlzellen & Kühlhäuser | Europaneel',
  description: 'Europaneel plant, liefert und montiert Kühlzellen, Tiefkühlzellen und Kühlhäuser für Gewerbe und Industrie. Richtpreis online berechnen, Türen ab Lager.',
  updated: '2026-10-05',
  pageType: 'WebPage',
  ogPhoto: 'kuehlanlage-mehrzellig-montage',
  render() {
    return `
<section class="hero blueprint" aria-labelledby="hero-t">
  <div class="container hero__grid">
    <div class="hero__text">
      <p class="eyebrow">Kühlzellen · Tiefkühlzellen · Kühlhausbau</p>
      <h1 id="hero-t">Kühlräume nach Maß – <em>für Gewerbe und Industrie</em></h1>
      <p class="lead">Europaneel ist Ihr Fachbetrieb für Kühlraumbau aus Bottrop. Wir planen Abmessungen, Paneelstärke, Boden, Türen und Kältetechnik passend zu Ihrem Betrieb, liefern ab unserem Lager und montieren deutschlandweit. Den Richtpreis für Ihre Kühlzelle sehen Sie online in wenigen Schritten.</p>
      ${ctas()}
      <ul class="hero__proof">
        <li>${icon('circle-check')}Richtpreis sofort online – ohne Registrierung</li>
        <li>${icon('circle-check')}Kühlhaustüren und Paneele ab Lager Bottrop</li>
        <li>${icon('circle-check')}Montage in den meisten Fällen an einem Tag</li>
      </ul>
    </div>
    <div class="hero__media">
      ${fig('kuehlanlage-mehrzellig-montage', { n: 1, cap: 'Mehrzellige Kühlanlage mit Schiebetüren während der Montage', eager: true, corners: true, sizes: '(min-width: 1240px) 700px, (min-width: 1024px) 56vw, 100vw' })}
      <a class="hero__calc" href="${CTA.primary.href}">
        <span class="lbl">${icon('calculator')}Kühlzellen-Kalkulator</span>
        <span class="dims tnum">3,00 <i>×</i> 2,50 <i>×</i> 2,10 <i>m</i></span>
        <span class="go">Richtpreis berechnen${icon('arrow-right')}</span>
      </a>
    </div>
  </div>
</section>

<section class="sec--facts" aria-label="Eckdaten">
  <div class="container">
    ${facts([
      ['Richtpreis', 'Online, sofort, ohne Registrierung'],
      ['Türen ab Lager', '9 Drehtür- &amp; 14 Schiebetürformate'],
      ['Raumhöhen im Kalkulator', '2,10 bis 4,70 m'],
      ['Einsatzgebiet', 'Deutschland, Österreich, Schweiz, Niederlande'],
    ])}
  </div>
</section>

<section class="sec" aria-labelledby="loes-t">
  <div class="container">
    ${secHead({ eyebrow: 'Leistungsspektrum', id: 'loes-t', title: 'Vom Kühlraum für die Küche bis zum mehrzelligen Kühllager', text: 'Jede Anlage entsteht aus Sandwichpaneelen, Türen und Kältetechnik – abgestimmt auf Temperatur, Nutzung und den verfügbaren Platz.' })}
    <div class="grid g-3">
      <a class="sol" href="/kuehlzellen/" data-reveal>
        <div class="sol__img">${pic('kuehlzelle-drehtuer-auffahrrampe', { sizes: '(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw', pos: 'center 40%' })}</div>
        <div class="sol__body"><span class="sol__tag">Pluskühlung</span><h3>Kühlzellen</h3>
        <p>Begehbare Kühlzellen nach Maß – mit oder ohne Bodenelement, mit Dreh- oder Schiebetür und passendem Kälteaggregat.</p>
        <span class="link-arrow">Kühlzellen ansehen${icon('arrow-right')}</span></div>
      </a>
      <a class="sol" href="/tiefkuehlzellen/" data-reveal data-reveal-d="1">
        <div class="sol__img">${pic('kuehlzelle-monoblock-werkstatt', { sizes: '(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw', pos: 'center 45%' })}</div>
        <div class="sol__body"><span class="sol__tag">Minusbereich</span><h3>Tiefkühlzellen</h3>
        <p>Für Tiefkühlware, die bei −18 °C oder kälter gelagert werden muss: mit isoliertem Boden, Tiefkühltür und abgestimmter Kältetechnik.</p>
        <span class="link-arrow">Tiefkühlzellen ansehen${icon('arrow-right')}</span></div>
      </a>
      <a class="sol" href="/kuehlhausbau/" data-reveal data-reveal-d="2">
        <div class="sol__img">${pic('kuehlanlage-mehrzellig-hochformat', { sizes: '(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw', pos: 'center 60%' })}</div>
        <div class="sol__body"><span class="sol__tag">Projekte</span><h3>Kühlhausbau</h3>
        <p>Mehrzellige Kühlanlagen und Kühllager in Hallen – als Gesamtprojekt mit Schiebetüren, Auffahrrampen und Kältetechnik.</p>
        <span class="link-arrow">Kühlhausbau ansehen${icon('arrow-right')}</span></div>
      </a>
    </div>
    <div class="grid g-4 mt-l">
      ${[
        ['/sandwichpaneele/', 'layers', 'Sandwichpaneele', 'Isolierpaneele für Wand, Decke und Boden – viele Stärken ab Lager.'],
        ['/kuehlhaustueren/', 'door-closed', 'Kühlhaustüren', 'Dreh- und Schiebetüren, Anschlag links oder rechts, mit oder ohne Schwelle.'],
        ['/kaelteaggregate/', 'fan', 'Kälteaggregate', 'Monoblock-, Huckepack- und Split-Lösungen passend zur Zelle.'],
        ['/kuehlzellen-montage/', 'hard-hat', 'Planung & Montage', 'Aufmaß vor Ort, Planung, Lieferung und fachgerechter Aufbau.'],
      ].map(([h, ic, t, p], i) => `<a class="card card--compact" href="${h}" data-reveal${i ? ` data-reveal-d="${i}"` : ''}><span class="card__icon">${icon(ic)}</span><h3>${t}</h3><p>${p}</p></a>`).join('')}
    </div>
  </div>
</section>

<section class="sec sec--surface" aria-labelledby="proj-t">
  <div class="container">
    ${secHead({ eyebrow: 'Aus unseren Projekten', id: 'proj-t', title: 'Gebaut, nicht gerendert.', text: 'Echte Anlagen aus unserer Montagepraxis – von der kompakten Kühlzelle mit Drehtür bis zur mehrzelligen Anlage mit Schiebetüren und Aggregaten.' })}
    <div class="mosaic" data-reveal>
      <figure class="m-a">${pic('kuehlanlage-mehrzellig-montage', { sizes: '(min-width: 1024px) 700px, 100vw' })}<figcaption>Mehrzellige Kühlanlage in der Montage</figcaption></figure>
      <figure class="m-b">${pic('kuehlzelle-anthrazit-schiebetuer', { sizes: '(min-width: 1024px) 500px, 50vw' })}<figcaption>Anthrazit-Paneele mit Schiebetür</figcaption></figure>
      <figure class="m-c">${pic('kuehlanlage-monoblock-aggregate', { sizes: '(min-width: 1024px) 500px, 50vw' })}<figcaption>Aggregate an der Zellenwand</figcaption></figure>
      <figure class="m-d">${pic('kuehlzelle-drehtuer-auffahrrampe', { sizes: '(min-width: 1024px) 400px, 50vw', pos: 'center 35%' })}<figcaption>Drehtür mit Auffahrrampe</figcaption></figure>
      <figure class="m-e">${pic('kuehlzellen-schiebetueren-halle', { sizes: '(min-width: 1024px) 300px, 50vw' })}<figcaption>Zwei Zellen mit Schiebetüren</figcaption></figure>
    </div>
    <p class="mt-m">${linkArrow('Alle Referenzen ansehen', '/referenzen/')}</p>
  </div>
</section>

<section class="sec" aria-labelledby="why-t">
  <div class="container split split--rev">
    <div>
      ${secHead({ eyebrow: 'Warum Europaneel', id: 'why-t', title: 'Kühlraumbau mit kurzen Wegen und klaren Preisen', stack: true })}
      ${FACTS.length ? `<div class="stats stats--inline" data-reveal>${FACTS.map((f) => `<div class="stat"><b>${f.value.replace('+', '<span>+</span>')}</b><small>${f.label}</small></div>`).join('')}</div>` : ''}
      <div data-reveal>${points([
        ['Richtpreis, bevor Sie anfragen', 'Unser Kalkulator zeigt den Netto-Richtpreis für Paneele und Tür sofort – ohne Registrierung. So wissen Sie früh, in welcher Größenordnung Ihr Projekt liegt.'],
        ['Ein Ansprechpartner bis zur Übergabe', 'Beratung, Aufmaß, Planung, Lieferung und Montage aus einer Hand – auf Wunsch inklusive Kältetechnik als Huckepack-, Monoblock- oder Split-Lösung.'],
        ['Material ab Lager in Bottrop', 'Viele Paneelstärken, Formate und Oberflächen sowie Kühlhaustüren sind kurzfristig verfügbar. Ihre Ware können Sie auch direkt bei uns abholen.'],
        ['Maßanfertigung statt Katalog', 'Abmessungen, Boden, Türposition und Anschlag richten sich nach Ihrem Raum und Ihren Abläufen. Bestehende Zellen lassen sich je nach baulicher Situation erweitern.'],
      ])}</div>
    </div>
    <div class="grid g-2" style="align-self:center">
      ${fig('europaneel-lager-bottrop', { n: 2, cap: 'Paneellager in Bottrop', ratio: '34', reveal: true, sizes: '(min-width: 1024px) 300px, 50vw' })}
      ${fig('europaneel-werkstatt-bottrop', { n: 3, cap: 'Werkstatthalle am Standort', ratio: '34', reveal: true, sizes: '(min-width: 1024px) 300px, 50vw', cls: 'mt-xl' })}
    </div>
  </div>
</section>

<section class="sec sec--dark" aria-labelledby="calc-t" data-track-pos="calc-teaser">
  <div class="container calc-band">
    <div data-reveal>
      <p class="eyebrow">Kühlzellen-Kalkulator</p>
      <h2 id="calc-t">In vier Schritten zum Richtpreis – ohne Registrierung.</h2>
      <p class="lead mt-s">Kühlart wählen, Boden festlegen, Maße eingeben, Tür auswählen: Der Netto-Richtpreis erscheint sofort. Wenn er passt, übernehmen wir Ihre Konfiguration direkt in die Anfrage.</p>
      <div class="incl">
        <div class="yes"><h3>Im Richtpreis enthalten</h3><ul><li>${icon('check')}Sandwichpaneele für Wände und Decke</li><li>${icon('check')}Boden inkl. Siebdruckplatte, falls gewählt</li><li>${icon('check')}Kühlhaustür nach Auswahl</li></ul></div>
        <div class="no"><h3>Separat angeboten</h3><ul><li>${icon('minus')}Kälteaggregat</li><li>${icon('minus')}Lieferung</li><li>${icon('minus')}Montage</li></ul></div>
      </div>
      <div class="btn-row mt-l">${btn(CTA.primary.label, CTA.primary.href)}</div>
    </div>
    <div class="calc-mock" aria-hidden="true" data-reveal data-reveal-d="1">
      <div class="calc-mock__bar"><i></i><i></i><i></i></div>
      <div class="calc-mock__body">
        <div class="calc-mock__steps"><span class="on"></span><span class="on"></span><span class="on"></span><span></span></div>
        <div class="calc-mock__row">
          <div class="calc-mock__f"><small>Länge</small><b>3,00 m</b></div>
          <div class="calc-mock__f"><small>Breite</small><b>2,50 m</b></div>
          <div class="calc-mock__f"><small>Höhe</small><b>2,10 m</b></div>
        </div>
        <div class="calc-mock__f calc-mock__door"><small>Tür</small><b>Drehtür 90 × 190 cm</b></div>
        <div class="calc-mock__res"><span><small>Richtpreis netto</small><br><b>sofort sichtbar</b></span>${icon('calculator')}</div>
      </div>
    </div>
  </div>
</section>

<section class="sec" aria-labelledby="ind-t">
  <div class="container">
    ${secHead({ eyebrow: 'Branchen', id: 'ind-t', title: 'Kühlräume für Betriebe, in denen die Kühlkette zählt', text: 'Lebensmittelrecht, Warenfluss und Platz unterscheiden sich je Branche. Wir planen die Zelle danach – nicht umgekehrt.' })}
    <div class="ind" data-reveal>
      ${[
        ['/branchen/gastronomie/', 'chef-hat', 'Gastronomie & Hotel', 'Kühl- und Tiefkühlzellen für Küche, Lager und Catering.'],
        ['/branchen/metzgerei/', 'beef', 'Metzgerei & Fleischerei', 'Kühlräume für Fleisch, Wurst und Zubereitungen.'],
        ['/branchen/#baeckerei', 'croissant', 'Bäckerei & Konditorei', 'Tiefkühlung für Teiglinge, Kühlung für Füllungen.'],
        ['/branchen/#handel', 'store', 'Lebensmittelhandel', 'Lagerkühlung hinter Verkaufsflächen und Märkten.'],
        ['/branchen/#produktion', 'factory', 'Lebensmittelproduktion', 'Kühlräume für Rohware, Zwischen- und Fertigprodukte.'],
        ['/branchen/#logistik', 'forklift', 'Logistik & Lager', 'Kühllager mit Schiebetüren und Auffahrrampen.'],
        ['/branchen/#pharma', 'pill', 'Pharma & Apotheken', 'Gekühlte Lagerbereiche für temperaturgeführte Ware.'],
        ['/branchen/#catering', 'utensils', 'Catering & Großküchen', 'Getrennte Kühlzonen für Rohware und Fertiges.'],
      ].map(([h, ic, t, s]) => `<a href="${h}">${icon(ic)}<b>${t}</b><small>${s}</small></a>`).join('')}
    </div>
  </div>
</section>

<section class="sec sec--surface" aria-labelledby="ablauf-t">
  <div class="container">
    ${secHead({ eyebrow: 'Ablauf', id: 'ablauf-t', title: 'Von der Anfrage bis zur betriebsbereiten Zelle', text: 'Ein klarer Ablauf in vier Schritten – mit einem festen Ansprechpartner.' })}
    ${steps([
      ['Anfrage oder Kalkulator', 'Per Telefon, E-Mail, WhatsApp oder über den Kalkulator – mit Richtpreis als erster Orientierung.'],
      ['Beratung & Aufmaß', 'Wir beraten Sie telefonisch oder vor Ort und nehmen alle Maße und Anschlüsse präzise auf.'],
      ['Angebot & Planung', 'Sie erhalten ein schriftliches Angebot mit allen Positionen – Zelle, Tür, Kältetechnik, Lieferung und Montage.'],
      ['Lieferung & Montage', 'Wir liefern ab Bottrop und montieren fachgerecht. Übliche Zellengrößen stehen meist an einem Tag.'],
    ])}
  </div>
</section>

<section class="sec" aria-labelledby="tech-t">
  <div class="container">
    ${secHead({ eyebrow: 'Technik', id: 'tech-t', title: 'Worauf es bei einer Kühlzelle technisch ankommt', text: 'Drei Entscheidungen bestimmen Funktion, Energiebedarf und Alltagstauglichkeit Ihrer Zelle.' })}
    <div class="grid g-3">
      <article class="card" data-reveal><span class="card__icon">${icon('layers')}</span><h3>Dämmstärke nach Temperatur</h3><p>Tiefkühlung braucht deutlich mehr Dämmung als Pluskühlung. Welche Paneelstärke sinnvoll ist, hängt von Solltemperatur, Umgebung und Paneelsystem ab.</p>${linkArrow('Ratgeber Paneelstärke', '/ratgeber/paneelstaerke-kuehlzelle/')}</article>
      <article class="card" data-reveal data-reveal-d="1"><span class="card__icon">${icon('door-open')}</span><h3>Tür nach Warenfluss</h3><p>Drehtüren für kleinere Zellen und Personenverkehr, Schiebetüren für breite Öffnungen und Rollwagen. Tiefkühltüren werden üblicherweise mit Rahmenheizung ausgeführt.</p>${linkArrow('Kühlhaustüren', '/kuehlhaustueren/')}</article>
      <article class="card" data-reveal data-reveal-d="2"><span class="card__icon">${icon('fan')}</span><h3>Aggregat nach Raum & Abwärme</h3><p>Monoblock, Huckepack oder Split: Entscheidend sind Kältebedarf, Aufstellort und wohin die Abwärme abgeführt werden kann.</p>${linkArrow('Kälteaggregate', '/kaelteaggregate/')}</article>
    </div>
  </div>
</section>

<section class="sec sec--surface" aria-labelledby="rat-t">
  <div class="container">
    ${secHead({ eyebrow: 'Ratgeber', id: 'rat-t', title: 'Fachwissen für Ihre Entscheidung', text: 'Antworten auf die Fragen, die vor jedem Kühlzellen-Projekt stehen – sachlich und ohne Verkaufsfloskeln.' })}
    ${related([
      { href: '/ratgeber/kuehlzelle-kosten/', tag: 'Kosten', title: 'Was kostet eine Kühlzelle?', text: 'Welche Posten den Preis bestimmen – und was im Richtpreis steckt.' },
      { href: '/ratgeber/paneelstaerke-kuehlzelle/', tag: 'Technik', title: 'Welche Paneelstärke braucht eine Kühlzelle?', text: 'Dämmstärke, U-Wert und Kernmaterial im Überblick.' },
      { href: '/ratgeber/kuehlzelle-planen/', tag: 'Planung', title: 'Kühlzelle planen: Checkliste', text: 'Maße, Untergrund, Strom, Tür und Aggregat – vor dem Aufmaß klären.' },
    ], 'Ratgeber-Artikel')}
  </div>
</section>

<section class="sec" aria-labelledby="faq-t">
  <div class="container split">
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
  </div>
</section>

<section class="sec sec--surface" aria-labelledby="ort-t">
  <div class="container split split--center">
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
  </div>
</section>

${ctaBand()}`;
  },
};

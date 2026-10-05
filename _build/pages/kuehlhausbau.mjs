import { icon, fig, pageHero, secHead, facts, points, steps, faq, related, ctaBand, linkArrow } from '../lib.mjs';

export default {
  path: '/kuehlhausbau/',
  title: 'Kühlhausbau: Kühlhäuser planen & bauen lassen | Europaneel',
  description: 'Kühlhausbau für Industrie, Logistik und Lebensmittelbetriebe: mehrzellige Kühlanlagen und Kühllager in Hallen – geplant, geliefert und montiert.',
  updated: '2026-10-05',
  crumbs: [['Kühlhausbau', '/kuehlhausbau/']],
  service: { name: 'Kühlhausbau', type: 'Planung und Bau von Kühlhäusern und mehrzelligen Kühlanlagen' },
  ogPhoto: 'kuehlanlage-monoblock-aggregate',
  render() {
    return `${pageHero({
      eyebrow: 'Kühlhausbau · Kühlraumbau',
      title: 'Kühlhausbau – Kühlanlagen und Kühllager als Gesamtprojekt',
      lead: 'Wenn eine einzelne Zelle nicht reicht: Wir planen mehrzellige Kühlanlagen und Kühllager in bestehenden Hallen – mit getrennten Temperaturzonen, Schiebetüren für den Warenfluss, Auffahrrampen und abgestimmter Kältetechnik.',
      photo: 'kuehlanlage-monoblock-aggregate', cap: 'Mehrzellige Kühlanlage mit Aggregaten, Schiebetüren und Auffahrrampen',
      ctas: { lead: 'secondary' },
    })}

<section class="sec--facts" aria-label="Eckdaten"><div class="container">${facts([
  ['Projektart', 'Mehrzellige Anlagen, Kühllager'],
  ['Schiebetüren ab Lager', 'bis 250 × 250 und 190 × 300 cm'],
  ['Temperaturzonen', 'Plus- und Minusbereiche kombinierbar'],
  ['Einsatz', 'Neubau, Umbau, Erweiterung'],
])}</div></section>

<section class="sec" aria-labelledby="wann-t">
  <div class="container split">
    <div data-reveal>
      <p class="eyebrow">Einordnung</p>
      <h2 id="wann-t">Wann aus der Kühlzelle ein Kühlhaus wird</h2>
      <div class="prose mt-m">
        <p>Technisch besteht ein Kühlhaus aus denselben Bausteinen wie eine Kühlzelle: <a href="/sandwichpaneele/">Sandwichpaneele</a>, <a href="/kuehlhaustueren/">Kühlhaustüren</a> und <a href="/kaelteaggregate/">Kältetechnik</a>. Der Unterschied liegt in der Planung. Mehrere Zellen teilen sich Wände, Temperaturzonen müssen sauber getrennt werden, und der Warenfluss mit Rollwagen, Hubwagen oder Stapler bestimmt Türen, Rampen und Wege.</p>
        <p>Typische Projekte sind Kühllager in bestehenden Hallen, Anlagen mit getrennten Bereichen für Frischware und Tiefkühlware oder die Erweiterung eines vorhandenen Kühlraums um zusätzliche Zellen.</p>
      </div>
      <p class="mt-m">${linkArrow('Einzelne Kühlzelle statt Anlage? Kühlzellen ansehen', '/kuehlzellen/')}</p>
    </div>
    ${fig('kuehlanlage-mehrzellig-hochformat', { n: 2, cap: 'Langgestreckte Anlage mit drei Schiebetüren in einer Industriehalle', ratio: '34', reveal: true, pos: 'center 60%', sizes: '(min-width: 1024px) 560px, 100vw' })}
  </div>
</section>

<section class="sec sec--surface" aria-labelledby="plan-t">
  <div class="container split split--rev">
    <div>${secHead({ eyebrow: 'Planung', id: 'plan-t', title: 'Fünf Themen, die ein Kühlhausprojekt entscheiden', text: 'Je größer die Anlage, desto teurer werden Planungsfehler im Betrieb. Diese Punkte klären wir vor dem Angebot.', stack: true })}</div>
    <div data-reveal>${points([
      ['Warenfluss und Zonen', 'Welche Ware wird bei welcher Temperatur gelagert, wie oft wird ein- und ausgelagert, und welche Bereiche müssen getrennt sein? Daraus ergeben sich Zellenaufteilung und Türpositionen.'],
      ['Boden und Lasten', 'Paletten, Hubwagen und Stapler belasten den Boden. Bei Tiefkühlbereichen auf einer Bodenplatte muss zudem verhindert werden, dass Frost in den Untergrund zieht – sonst drohen Hebungen. Dafür sind Bodendämmung und gegebenenfalls eine Unterfrierschutzheizung vorzusehen.'],
      ['Türen und Verkehrswege', 'Schiebetüren eignen sich für breite Öffnungen und Fahrzeugverkehr, Drehtüren für Personenzugänge. Bei häufigen Öffnungen reduzieren Streifenvorhänge oder Schnelllauftore die Kälteverluste.'],
      ['Kältetechnik und Abwärme', 'Bei hohem Kältebedarf arbeiten oft Split-Anlagen mit außen aufgestelltem Verflüssigungssatz. Kältemittel richten sich nach der F-Gase-Verordnung (EU) 2024/573.'],
      ['Sicherheit', 'Türen müssen sich nach DIN 8986 jederzeit von innen öffnen lassen; je nach Größe und Temperatur sind Notruf, Beleuchtung und Alarmeinrichtungen vorzusehen.'],
    ])}</div>
  </div>
</section>

<section class="sec" aria-labelledby="proj-t">
  <div class="container">
    ${secHead({ eyebrow: 'Projekteinblicke', id: 'proj-t', title: 'Kühlanlagen aus unserer Montagepraxis', text: 'Mehrzellige Anlagen in Industriehallen – mit Schiebetüren, Auffahrrampen und montierten Aggregaten.' })}
    <div class="grid g-2">
      ${fig('kuehlanlage-mehrzellig-montage', { n: 3, cap: 'Montagephase: Zellen stehen, Schiebetüren geöffnet', reveal: true, sizes: '(min-width: 1024px) 600px, 100vw' })}
      ${fig('kuehlanlage-aggregat-schiebetueren', { n: 4, cap: 'Front mit Kälteaggregat und zwei Schiebetüren', reveal: true, sizes: '(min-width: 1024px) 600px, 100vw' })}
    </div>
    <p class="mt-m">${linkArrow('Alle Referenzen', '/referenzen/')}</p>
  </div>
</section>

<section class="sec sec--surface" aria-labelledby="ablauf-t">
  <div class="container">
    ${secHead({ eyebrow: 'Ablauf', id: 'ablauf-t', title: 'Vom Bedarf bis zur betriebsbereiten Anlage', text: 'Größere Projekte planen wir individuell – mit einem festen Ansprechpartner.' })}
    ${steps([
      ['Bedarf & Bestand', 'Ware, Temperaturen, Mengen, Abläufe und die vorhandene Halle – telefonisch und vor Ort.'],
      ['Aufmaß & Planung', 'Zellenaufteilung, Türen, Rampen, Kältetechnik und Anschlüsse werden festgelegt.'],
      ['Angebot', 'Schriftlich und transparent mit allen Positionen – von Paneelen bis Montage.'],
      ['Lieferung & Montage', 'Lieferung ab Bottrop und fachgerechter Aufbau der Anlage.'],
    ])}
  </div>
</section>

<section class="sec" aria-labelledby="faq-t">
  <div class="container split">
    <div>${secHead({ eyebrow: 'FAQ', id: 'faq-t', title: 'Fragen zum Kühlhausbau', stack: true })}</div>
    ${faq([
      { q: 'Was ist der Unterschied zwischen Kühlzelle und Kühlhaus?', a: 'Beide bestehen aus gedämmten Paneelen, Türen und Kältetechnik. Ein Kühlhaus umfasst meist mehrere Zellen oder größere Volumina mit getrennten Temperaturzonen und einem auf Paletten oder Fahrzeuge ausgelegten Warenfluss.' },
      { q: 'Kann ein Kühlhaus in einer bestehenden Halle gebaut werden?', a: 'Ja, das ist ein typischer Fall. Entscheidend sind Raumhöhe, Bodenbeschaffenheit, Zufahrten und der Platz für die Kältetechnik. Wir sehen uns die Halle vor Ort an.' },
      { q: 'Welche Türen eignen sich für Hubwagen und Stapler?', a: 'Für Fahrzeugverkehr sind Schiebetüren mit ausreichender Breite die übliche Lösung. Am Lager führen wir Schiebetüren unter anderem in 250 × 250 cm und 190 × 300 cm.' },
      { q: 'Liefert Europaneel auch die Kältetechnik?', a: 'Ja. Wir bieten Kälteaggregate in den Bauformen Huckepack, Monoblock und Split an und stimmen sie auf die Anlage ab.' },
      { q: 'Wie lange dauert ein Kühlhausprojekt?', a: 'Das hängt von Größe und Umfang ab. Größere Projekte planen wir individuell und nennen Ihnen mit dem Angebot einen realistischen Zeitrahmen.' },
    ])}
  </div>
</section>

<section class="sec--sm"><div class="container">${related([
  { href: '/kuehlzellen-montage/', tag: 'Service', title: 'Planung & Montage', text: 'Aufmaß, Lieferung und Aufbau.' },
  { href: '/kuehlhaustueren/', tag: 'Komponenten', title: 'Schiebetüren ab Lager', text: 'Formate für breite Öffnungen.' },
  { href: '/tiefkuehlzellen/', tag: 'Minusbereich', title: 'Tiefkühlzellen', text: 'Boden, Tür und Druckausgleich.' },
])}</div></section>

${ctaBand({ lead: 'secondary', title: 'Sie planen ein Kühlhaus oder eine mehrzellige Anlage?', text: 'Schildern Sie uns Ware, Temperaturen und Halle – wir melden uns für Beratung und Aufmaß. Für einzelne Zellen sehen Sie den Richtpreis direkt im Kalkulator.' })}`;
  },
};

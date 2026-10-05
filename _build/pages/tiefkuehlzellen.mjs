import { icon, fig, pageHero, secHead, facts, cmp, points, checks, faq, related, ctaBand, note, linkArrow } from '../lib.mjs';

export default {
  path: '/tiefkuehlzellen/',
  title: 'Tiefkühlzellen nach Maß für Gewerbe & Gastronomie | Europaneel',
  description: 'Tiefkühlzellen mit isoliertem Boden, Tiefkühltür und passender Kältetechnik – geplant für Ware bei −18 °C und kälter. Richtpreis online berechnen.',
  updated: '2026-10-05',
  crumbs: [['Tiefkühlzellen', '/tiefkuehlzellen/']],
  service: { name: 'Tiefkühlzellen nach Maß', type: 'Planung, Lieferung und Montage von Tiefkühlzellen' },
  ogPhoto: 'kuehlzelle-monoblock-werkstatt',
  render() {
    return `${pageHero({
      eyebrow: 'Minusbereich · Tiefkühlung',
      title: 'Tiefkühlzellen nach Maß',
      lead: 'Tiefgefrorene Lebensmittel müssen ständig bei −18 °C oder kälter gehalten werden. Dafür braucht eine Zelle mehr als dickere Wände: einen gedämmten Boden, eine Tür, die nicht festfriert, und Kältetechnik mit ausreichender Reserve. Wir planen das als System.',
      photo: 'kuehlzelle-monoblock-werkstatt', cap: 'Anthrazitfarbene Zelle mit Kälteaggregat neben der Tür', pos: 'center 55%',
      ctas: { primaryHref: '/kalkulator.html#tiefkuehlung' },
    })}

<section class="sec--facts" aria-label="Eckdaten"><div class="container">${facts([
  ['Lagerpflicht Tiefkühlware', '−18 °C oder kälter (TLMV)'],
  ['Boden', 'immer mit isoliertem Bodenelement'],
  ['Raumhöhen im Kalkulator', '2,20 bis 4,70 m'],
  ['Kältetechnik', 'Huckepack, Monoblock oder Split'],
])}</div></section>

<section class="sec" aria-labelledby="anders-t">
  <div class="container split">
    <div>${secHead({ eyebrow: 'Technik', id: 'anders-t', title: 'Was eine Tiefkühlzelle anders macht als eine Kühlzelle', text: 'Zwischen Zelleninnerem und Umgebung liegen bei Tiefkühlung oft 40 Kelvin und mehr. Jede Schwachstelle der Hülle zeigt sich dann – als Eis, als Stromverbrauch oder am Boden.', stack: true })}</div>
    <div data-reveal>${points([
      ['Mehr Dämmung in Wand und Decke', 'Die nötige Paneelstärke steigt mit der Temperaturdifferenz. Welche Stärke für welche Temperatur zugelassen ist, legt der Paneelhersteller fest – wir planen nach diesen Vorgaben.'],
      ['Ein gedämmter Boden ist Pflicht', 'Ohne Bodendämmung zieht der Frost in den Untergrund. Hersteller verlangen bei Minustemperaturen deshalb Bodenelemente als Unterfrierschutz; bei größeren Anlagen auf der Bodenplatte kommt eine Unterfrierschutzheizung hinzu.'],
      ['Eine Tür, die nicht festfriert', 'Tiefkühltüren werden üblicherweise mit Rahmenheizung ausgeführt, damit die Dichtungen nicht anfrieren. Die Tür muss sich jederzeit von innen öffnen lassen.'],
      ['Druckausgleich', 'Nach dem Schließen kühlt die eingeströmte Luft ab und zieht sich zusammen – in der Zelle entsteht Unterdruck. Ein beheiztes Druckausgleichsventil sorgt dafür, dass sich die Tür trotzdem leicht öffnen lässt und die Hülle nicht belastet wird.'],
    ])}</div>
  </div>
</section>

<section class="sec sec--surface" aria-labelledby="vgl-t">
  <div class="container">
    ${secHead({ eyebrow: 'Vergleich', id: 'vgl-t', title: 'Kühlzelle und Tiefkühlzelle im direkten Vergleich', text: 'Die wichtigsten Unterschiede auf einen Blick – Details klären wir im Projekt.' })}
    <div data-reveal>${cmp(['Merkmal', 'Kühlzelle (Plus)', 'Tiefkühlzelle (Minus)'], [
      ['Typischer Einsatz', 'Frischware, Getränke, Molkereiprodukte', 'Tiefkühlware, Teiglinge, Eis, Vorräte'],
      ['Boden', 'mit oder ohne Bodenelement', 'immer isolierter Boden, bei großen Anlagen zusätzlich Unterfrierschutz'],
      ['Paneelstärke', 'geringer', 'deutlich höher – je nach Hersteller und Temperatur'],
      ['Tür', 'Kühlraumtür (Dreh- oder Schiebetür)', 'Tiefkühltür, üblicherweise mit Rahmenheizung'],
      ['Druckausgleich', '–', 'beheiztes Druckausgleichsventil'],
      ['Kältetechnik', 'Normalkühlaggregat', 'Tiefkühlaggregat mit Abtaufunktion'],
    ], { label: 'Vergleich Kühlzelle und Tiefkühlzelle' })}</div>
    <div class="mt-m" data-reveal>${linkArrow('Welche Paneelstärke wofür? Zum Ratgeber', '/ratgeber/paneelstaerke-kuehlzelle/')}</div>
  </div>
</section>

<section class="sec" aria-labelledby="sich-t">
  <div class="container split split--rev">
    <div data-reveal>
      <p class="eyebrow">Sicherheit & Recht</p>
      <h2 id="sich-t">Worauf Betreiber achten müssen</h2>
      <div class="prose mt-m">
        <p>Die Verordnung über tiefgefrorene Lebensmittel (TLMV) schreibt vor, dass Tiefkühlware an allen Punkten ständig bei <strong>−18 °C oder kälter</strong> gehalten wird. Die Raumtemperatur der Zelle wird deshalb so eingestellt, dass diese Grenze auch beim Be- und Entladen sicher eingehalten bleibt.</p>
        <p>Für Kühlräume gilt außerdem die DIN 8986 mit baulichen Sicherheitsanforderungen: Türen müssen sich jederzeit von innen öffnen lassen; je nach Größe und Temperatur kommen Notruf- und Beleuchtungseinrichtungen hinzu. Die DIN EN 378-1 sieht für Kühlräume über 10 m³ unter 0 °C eine Alarmeinrichtung vor.</p>
      </div>
      <div class="mt-m">${note('Hinweis', 'Temperaturüberwachung und Dokumentation liegen in der Verantwortung des Betreibers. Welche Anforderungen für Ihre Zelle konkret gelten, klären wir in der Planung gemeinsam.', 'frost', 'thermometer-snowflake')}</div>
    </div>
    ${fig('kuehlanlage-monoblock-aggregate', { n: 2, cap: 'Mehrzellige Anlage mit Aggregaten und Auffahrrampen', reveal: true, sizes: '(min-width: 1024px) 700px, 100vw' })}
  </div>
</section>

<section class="sec sec--surface" aria-labelledby="einsatz-t">
  <div class="container">
    ${secHead({ eyebrow: 'Einsatzbereiche', id: 'einsatz-t', title: 'Wo Tiefkühlzellen gebraucht werden', text: 'Häufig in Kombination mit einer Kühlzelle – als zwei getrennte Zellen oder als mehrzellige Anlage mit gemeinsamer Wand.' })}
    <div class="ind" data-reveal>
      ${[
        ['/branchen/gastronomie/', 'chef-hat', 'Gastronomie & Hotel', 'Vorräte, Eis, vorbereitete Komponenten.'],
        ['/branchen/#baeckerei', 'croissant', 'Bäckerei & Konditorei', 'Tiefgekühlte Teiglinge und Halbfabrikate.'],
        ['/branchen/#handel', 'store', 'Lebensmittelhandel', 'TK-Lager hinter der Verkaufsfläche.'],
        ['/branchen/#logistik', 'forklift', 'Logistik & Lager', 'Tiefkühllager mit Schiebetüren.'],
      ].map(([h, ic, t, s]) => `<a href="${h}">${icon(ic)}<b>${t}</b><small>${s}</small></a>`).join('')}
    </div>
  </div>
</section>

<section class="sec" aria-labelledby="vorb-t">
  <div class="container split">
    <div>${secHead({ eyebrow: 'Vorbereitung', id: 'vorb-t', title: 'Vor dem Aufmaß klären', stack: true, text: 'Diese Punkte bestimmen Paneelstärke, Boden und Aggregat.' })}</div>
    <div data-reveal>${checks([
      'Welche Ware, welche Lagertemperatur und welche Menge',
      'Wie oft die Tür geöffnet und wie viel Ware täglich eingelagert wird',
      'Untergrund: ebene Bodenplatte? Aufstellung im Gebäude oder im Freien unter Dach?',
      'Wohin die Abwärme des Aggregats abgeführt werden kann',
      'Ob zusätzlich eine Kühlzelle gebraucht wird – dann gemeinsam planen',
    ])}
    <p class="mt-m">${linkArrow('Zur Planungs-Checkliste', '/ratgeber/kuehlzelle-planen/')}</p></div>
  </div>
</section>

<section class="sec sec--surface" aria-labelledby="faq-t">
  <div class="container split">
    <div>${secHead({ eyebrow: 'FAQ', id: 'faq-t', title: 'Fragen zu Tiefkühlzellen', stack: true })}</div>
    ${faq([
      { q: 'Welche Temperatur braucht eine Tiefkühlzelle?', a: 'Tiefgefrorene Lebensmittel müssen nach TLMV an allen Punkten ständig bei −18 °C oder kälter gehalten werden. Die Raumtemperatur wird in der Praxis so eingestellt, dass diese Produkttemperatur auch bei Türöffnungen und Einlagerung sicher gehalten wird.' },
      { q: 'Braucht eine Tiefkühlzelle immer einen Boden?', a: 'Ja. Ohne gedämmten Boden friert der Untergrund durch. Unser Kalkulator berücksichtigt bei Tiefkühlung deshalb automatisch ein isoliertes Bodenelement. Bei größeren Anlagen auf einer Bodenplatte kann zusätzlich eine Unterfrierschutzheizung nötig sein.' },
      { q: 'Wozu dient die Heizung an der Tiefkühltür?', a: 'Die Rahmenheizung verhindert, dass Dichtungen und Rahmen anfrieren. So bleibt die Tür leicht zu öffnen und schließt dauerhaft dicht.' },
      { q: 'Was ist ein Druckausgleichsventil?', a: 'Strömt beim Öffnen warme Luft in die Zelle, kühlt sie nach dem Schließen ab und zieht sich zusammen – es entsteht Unterdruck. Das beheizte Ventil gleicht ihn aus, damit sich die Tür leicht öffnen lässt und die Paneele nicht belastet werden.' },
      { q: 'Kann ich Kühl- und Tiefkühlzelle kombinieren?', a: 'Ja. Beide Bereiche lassen sich als getrennte Zellen oder als mehrzellige Anlage planen. Wichtig sind dann Türanordnung, Wege und die Abwärme beider Aggregate.' },
    ])}
  </div>
</section>

<section class="sec--sm"><div class="container">${related([
  { href: '/kuehlzellen/', tag: 'Pluskühlung', title: 'Kühlzellen nach Maß', text: 'Mit oder ohne Boden, Dreh- oder Schiebetür.' },
  { href: '/kaelteaggregate/', tag: 'Kältetechnik', title: 'Kälteaggregate', text: 'Monoblock, Huckepack oder Split im Vergleich.' },
  { href: '/ratgeber/paneelstaerke-kuehlzelle/', tag: 'Ratgeber', title: 'Welche Paneelstärke?', text: 'Dämmstärke und U-Wert nach Temperatur.' },
])}</div></section>

${ctaBand({ title: 'Ihre Tiefkühlzelle – Richtpreis in wenigen Schritten.', primaryHref: '/kalkulator.html#tiefkuehlung' })}`;
  },
};

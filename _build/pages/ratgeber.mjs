// Ratgeber-Hub + Fachartikel. Fakten: siehe _intern/FAKTENBASIS.md. Keine Preisformel veröffentlichen.
import { icon, pageHero, articleBody, readingTime, cmp, checks, note, faq, related, ctaBand, secHead } from '../lib.mjs';

const PUB = '2026-10-05';
const meta = (html) => `<p class="meta-line"><span>${icon('clock')}${readingTime(html)} Min. Lesezeit</span><span>${icon('calendar-check')}Stand: Oktober 2026</span><span>${icon('building-2')}Europaneel GmbH</span></p>`;

function article(o) {
  return {
    path: o.path, title: o.title, description: o.description, updated: PUB, readProgress: true, ogPhoto: o.photo,
    crumbs: [['Ratgeber', '/ratgeber/'], [o.short, o.path]],
    article: { published: PUB, headline: o.h1 },
    render() {
      const body = o.body();
      return `${pageHero({ eyebrow: `Ratgeber · ${o.topic}`, title: o.h1, lead: o.lead, ctas: false, after: meta(body) })}
${articleBody(body)}
${o.faq ? `<section class="sec sec--surface" aria-labelledby="faq-t"><div class="container split"><div>${secHead({ eyebrow: 'FAQ', id: 'faq-t', title: 'Häufige Fragen zum Thema', stack: true })}</div>${faq(o.faq)}</div></section>` : ''}
<section class="sec--sm"><div class="container">${related(o.related)}</div></section>
${ctaBand()}`;
    },
  };
}

/* ------------------------------------------------------------------ 1 Kosten */
const kosten = article({
  path: '/ratgeber/kuehlzelle-kosten/', short: 'Was kostet eine Kühlzelle?', topic: 'Kosten', photo: 'kuehlzellen-schiebetueren-halle',
  title: 'Was kostet eine Kühlzelle? Preise & Nebenkosten | Europaneel',
  description: 'Was eine Kühlzelle kostet und warum: Paneele, Boden, Tür, Kältetechnik, Lieferung, Montage und Betrieb – mit Tipps zum Sparen und dem Weg zum Richtpreis.',
  h1: 'Was kostet eine Kühlzelle? Preisfaktoren, Richtpreis und Nebenkosten',
  lead: 'Die ehrliche Antwort lautet: Es kommt darauf an – aber nicht auf Zufall. Der Preis einer Kühlzelle setzt sich aus klar benennbaren Posten zusammen. Wer sie kennt, kann Angebote vergleichen und gezielt sparen, ohne an der falschen Stelle zu kürzen.',
  body: () => `
${note('Kurz gesagt', '<p>Der größte Kostenblock ist die gedämmte Hülle aus Sandwichpaneelen – ihr Preis folgt der Paneelfläche und -stärke. Dazu kommen Boden, Tür, Kälteaggregat, Lieferung und Montage sowie bauseitige Anschlüsse. Einen Netto-Richtpreis für Paneele und Tür zeigt unser <a href="/kalkulator.html">Kühlzellen-Kalkulator</a> sofort, ohne Registrierung.</p>', 'red', 'info')}
<h2 id="ueberblick">Die Kosten im Überblick</h2>
<p>Jede Kühlzelle besteht aus denselben Bausteinen. Wie teuer sie wird, hängt davon ab, wie groß, wie kalt und wie gut erreichbar sie ist.</p>
${cmp(['Posten', 'Wovon der Preis abhängt', 'Im Kalkulator?'], [
  ['Paneele für Wände und Decke', 'Außenmaße, Höhe, Paneelstärke', 'ja'],
  ['Boden', 'Bodenelement ja oder nein', 'ja, inkl. Siebdruckplatte'],
  ['Tür', 'Bauart und Format', 'ja (Drehtüren)'],
  ['Kälteaggregat', 'Volumen, Temperatur, Bauform', 'nein – separates Angebot'],
  ['Lieferung', 'Entfernung und Menge', 'nein'],
  ['Montage', 'Größe und Zugänglichkeit', 'nein'],
  ['Bauseitige Leistungen', 'Elektroanschluss, Untergrund, Lüftung', 'nein – bauseits'],
], { label: 'Kostenposten einer Kühlzelle' })}
<h2 id="huelle">Die Hülle: Es zählt die Fläche, nicht das Volumen</h2>
<p>Paneele werden nach Fläche eingesetzt. Für den Preis der Hülle ist deshalb entscheidend, wie viele Quadratmeter Wand und Decke – und gegebenenfalls Boden – zusammenkommen. Eine Zelle mit 3,00 × 2,50 m Grundfläche und 2,10 m Höhe hat rund 23 m² Wandfläche und 7,5 m² Decke, zusammen also gut 30 m² Paneel.</p>
<p>Daraus folgen zwei praktische Regeln: Wird die Zelle höher, steigt vor allem die Wandfläche. Und weil Wandfläche und Grundfläche nicht im gleichen Verhältnis wachsen, kostet eine größere Zelle pro Kubikmeter Kühlraum in der Regel weniger als eine kleine. Dickere Paneele für Tiefkühlung bedeuten mehr Material pro Quadratmeter – deshalb ist eine Tiefkühlzelle bei gleichen Maßen teurer.</p>
<h2 id="boden">Boden: mit oder ohne Bodenelement</h2>
<p>Bei Pluskühlung kann die Zelle ohne Bodenelement direkt auf einem ebenen, tragfähigen Untergrund stehen. Das spart den Boden und ermöglicht einen ebenerdigen Zugang. Mit isoliertem Bodenelement – bei uns inklusive Siebdruckplatte als Lauffläche – ist die Zelle auch nach unten gedämmt. Für Tiefkühlung ist ein gedämmter Boden immer nötig, damit der Frost nicht in den Untergrund zieht.</p>
<h2 id="tuer">Tür: kleiner Posten, große Wirkung</h2>
<p>Die Tür ist im Verhältnis zur Hülle ein überschaubarer Posten. Im Kalkulator liegen die Drehtüren aus unserem Lagerprogramm je nach Format zwischen 550 € und 1.000 € netto; Schiebetüren bieten wir auf Anfrage an. Wichtiger als der Anschaffungspreis ist, dass die Tür zum Alltag passt: Eine zu schmale Tür bremst jeden Arbeitstag, eine schlecht schließende Tür kostet dauerhaft Energie.</p>
<h2 id="kaelte">Kältetechnik: abhängig von Volumen und Temperatur</h2>
<p>Das Aggregat richtet sich nach dem Kältebedarf: Volumen, Solltemperatur, Häufigkeit der Türöffnungen und die Menge der täglich eingelagerten Ware. Steckerfertige Huckepack- und Monoblock-Geräte sind schnell installiert; Split-Anlagen mit außen aufgestelltem Verflüssigungssatz sind aufwendiger, aber bei großem Kältebedarf oder warmen Aufstellräumen oft sinnvoll. Deshalb bieten wir die Kältetechnik separat und passend zur Zelle an – mehr unter <a href="/kaelteaggregate/">Kälteaggregate</a>.</p>
<h2 id="montage">Lieferung und Montage</h2>
<p>Die Kosten für Lieferung und Montage hängen vor allem von der Entfernung, der Größe der Anlage und der Zugänglichkeit ab: Ein ebenerdiger Lagerraum mit breiter Zufahrt ist schneller bestückt als ein Keller mit engem Treppenhaus. Übliche Zellengrößen montieren wir in den meisten Fällen an einem Tag. Wer Material selbst in Bottrop abholt, spart die Lieferung.</p>
<h2 id="bauseits">Bauseitige Kosten nicht vergessen</h2>
<ul>
  <li><strong>Elektroanschluss</strong> für Aggregat und Beleuchtung – ausgeführt durch eine Elektrofachkraft.</li>
  <li><strong>Untergrund:</strong> Bodenelemente brauchen eine ebene, waagerechte Fläche; ein unebener Boden muss vorher ausgeglichen werden.</li>
  <li><strong>Lüftung und Abwärme:</strong> Steckerfertige Aggregate geben ihre Wärme an den Aufstellraum ab. Ist er klein oder schlecht belüftet, sind zusätzliche Maßnahmen nötig.</li>
  <li><strong>Aufstellung im Freien:</strong> Witterungsschutz und gegebenenfalls baurechtliche Fragen klären Sie am besten frühzeitig mit dem zuständigen Bauamt.</li>
</ul>
<h2 id="betrieb">Betriebskosten: der Strom über die Jahre</h2>
<p>Über die Nutzungsdauer kann der Stromverbrauch den Anschaffungspreis deutlich relativieren. Er hängt vor allem von der Dämmung, der Umgebungstemperatur und den Türöffnungen ab. Türen und Fugen gehören zu den größten Wärmeeinträgen einer Kühlzelle. Steigt die Temperatur im Aufstellraum um nur ein Kelvin, braucht die Kühlung je nach Anwendung grob 1,5 bis 3 Prozent mehr Energie.</p>
<h2 id="sparen">Sparen, ohne am Falschen zu sparen</h2>
<ul>
  <li><strong>Standardhöhen nutzen:</strong> Die Höhen im Kalkulator entsprechen den verfügbaren Paneelhöhen in 50-cm-Schritten.</li>
  <li><strong>Größe ehrlich planen:</strong> Jeder Quadratmeter Paneel kostet – jeder fehlende Kubikmeter auch.</li>
  <li><strong>Paneelstärke nicht unterdimensionieren:</strong> Zu dünne Paneele sparen einmalig und kosten danach jedes Jahr Strom.</li>
  <li><strong>Tür und Abläufe:</strong> Türschließer und Streifenvorhang zahlen sich bei häufigem Öffnen aus.</li>
  <li><strong>Aggregat gut belüftet aufstellen:</strong> Ein kühler, belüfteter Aufstellort verbessert die Effizienz.</li>
  <li><strong>Selbstabholung:</strong> Wer in Bottrop abholt, spart die Lieferkosten.</li>
</ul>
<h2 id="richtpreis">So kommen Sie zu Ihrem Richtpreis</h2>
<p>Im <a href="/kalkulator.html">Kühlzellen-Kalkulator</a> wählen Sie Kühlart, Boden, Maße und Tür – der Netto-Richtpreis für Paneele und Tür erscheint sofort. Passt die Größenordnung, senden Sie uns die Konfiguration mit einem Klick; wir ergänzen Kältetechnik, Lieferung und Montage im schriftlichen Angebot.</p>`,
  faq: [
    { q: 'Ist der Preis aus dem Kalkulator verbindlich?', a: 'Nein. Der Kalkulator zeigt einen Netto-Richtpreis für Paneele und Tür als Orientierung. Verbindlich ist das schriftliche Angebot nach Klärung aller Details.' },
    { q: 'Warum ist eine Tiefkühlzelle teurer als eine Kühlzelle?', a: 'Weil sie dickere Paneele, immer einen gedämmten Boden, eine Tiefkühltür mit Rahmenheizung und ein Tiefkühlaggregat braucht.' },
    { q: 'Lohnt sich eine gebrauchte Kühlzelle?', a: 'Das kann sein, birgt aber Risiken: Zustand von Paneelen und Dichtungen, Passgenauigkeit für den neuen Raum und das Kältemittel des Aggregats, für das seit der F-Gase-Verordnung strengere Regeln gelten. Lassen Sie eine gebrauchte Anlage vor dem Kauf prüfen.' },
  ],
  related: [
    { href: '/kalkulator.html', tag: 'Tool', title: 'Richtpreis berechnen', text: 'Kühlzelle konfigurieren, ohne Registrierung.' },
    { href: '/ratgeber/paneelstaerke-kuehlzelle/', tag: 'Ratgeber', title: 'Welche Paneelstärke?', text: 'Dämmstärke, U-Wert und Kernmaterial.' },
    { href: '/kuehlzellen/', tag: 'Lösungen', title: 'Kühlzellen nach Maß', text: 'Aufbau, Optionen und Ablauf.' },
  ],
});

/* ------------------------------------------------------------------ 2 Paneelstärke */
const staerke = article({
  path: '/ratgeber/paneelstaerke-kuehlzelle/', short: 'Paneelstärke', topic: 'Technik', photo: 'europaneel-lager-bottrop',
  title: 'Welche Paneelstärke braucht eine Kühlzelle? | Europaneel',
  description: 'Welche Paneelstärke für Kühl- und Tiefkühlzellen sinnvoll ist: Richtwerte nach Temperatur, U-Wert verständlich erklärt, PUR oder PIR, Kondensat und Boden.',
  h1: 'Welche Paneelstärke braucht eine Kühlzelle?',
  lead: 'Die Paneelstärke entscheidet über Energiebedarf, Oberflächentemperatur und darüber, ob die Zelle ihre Temperatur dauerhaft hält. Es gibt Richtwerte – verbindlich ist aber immer die Freigabe des Paneelherstellers für Ihre Temperatur.',
  body: () => `
${note('Kurz gesagt', '<p>Für Pluskühlung sind häufig 60 bis 100 mm üblich, für Tiefkühlung meist 100 bis 150 mm, für noch tiefere Temperaturen mehr. Entscheidend ist die Temperaturdifferenz zwischen Zelle und Umgebung – und welche Stärke der Hersteller für Ihre Solltemperatur zulässt.</p>', 'red', 'info')}
<h2 id="differenz">Es zählt die Temperaturdifferenz</h2>
<p>Ein Paneel muss nicht „die Kälte“ halten, sondern den Wärmestrom von außen nach innen bremsen. Dieser Wärmestrom wächst mit dem Temperaturunterschied. Eine Tiefkühlzelle mit −20 °C in einem 20 °C warmen Lager arbeitet gegen 40 Kelvin Differenz; steht dieselbe Zelle neben einer 30 °C warmen Küche, sind es 50 Kelvin. Deshalb gehört die Umgebung genauso in die Planung wie die Solltemperatur.</p>
<h2 id="richtwerte">Richtwerte nach Temperaturbereich</h2>
${cmp(['Temperaturbereich (Raum)', 'Übliche Paneelstärken', 'Hinweis'], [
  ['Pluskühlung, ca. 0 bis +8 °C', '60 – 100 mm', 'je nach Umgebung und Nutzung'],
  ['Tiefkühlung, ca. −18 bis −25 °C', '100 – 150 mm', 'manche Systeme sind mit 80 mm bis −20 °C freigegeben'],
  ['Tiefere Temperaturen, unter −25 °C', '120 mm und mehr', 'nach Herstellerfreigabe'],
], { label: 'Paneelstärke nach Temperaturbereich', note: 'Richtwerte aus technischen Datenblättern mehrerer Paneelhersteller. Welche Stärke für welche Temperatur zugelassen ist, legt der jeweilige Hersteller fest.' })}
<h2 id="uwert">Was der U-Wert aussagt – mit Beispielrechnung</h2>
<p>Der U-Wert (Wärmedurchgangskoeffizient) gibt an, wie viel Wärme pro Quadratmeter und Kelvin Temperaturunterschied durch ein Bauteil fließt – in W/(m²·K). Je kleiner, desto besser. Bei Kühlhauspaneelen liegen 100 mm in der Größenordnung von 0,2 W/(m²·K), 150 mm bei etwa 0,14 W/(m²·K).</p>
<p>Ein Beispiel macht den Unterschied greifbar: Bei 40 Kelvin Differenz lässt ein Paneel mit U = 0,20 rund <strong>8 W pro Quadratmeter</strong> durch (0,20 × 40). Mit U = 0,14 sind es etwa <strong>5,6 W</strong>. Bei 30 m² Paneelfläche sind das 240 W gegenüber 168 W – und zwar rund um die Uhr. Diesen Unterschied muss das Aggregat jahrelang zusätzlich abführen.</p>
<h2 id="kondensat">Zu dünn heißt: Kondensat und Eis</h2>
<p>Ist ein Paneel für die Temperaturdifferenz zu dünn, sinkt die Oberflächentemperatur auf der warmen Außenseite. Fällt sie unter den Taupunkt der Raumluft, bildet sich Kondensat – an Fugen und Anschlüssen auch Eis. Das ist nicht nur ein Energieproblem: Feuchte an den Außenflächen und an angrenzenden Bauteilen ist auch ein Hygiene- und Bauschadensrisiko.</p>
<h2 id="kern">Kernmaterial: PUR, PIR oder Mineralwolle</h2>
<p>Kühlhauspaneele haben meist einen Kern aus Polyurethan (PUR) oder Polyisocyanurat (PIR). Beide dämmen sehr gut; PIR erreicht ein besseres Brandverhalten und kommt deshalb bei höheren Brandschutzanforderungen zum Einsatz. Mineralwolle ist nichtbrennbar, dämmt aber deutlich schlechter – für denselben U-Wert muss das Paneel erheblich dicker sein. Einen Vergleich finden Sie unter <a href="/sandwichpaneele/">Sandwichpaneele</a>.</p>
<h2 id="boden-decke">Boden und Decke nicht vergessen</h2>
<p>Bei Tiefkühlung ist ein gedämmter Boden Pflicht, damit der Frost nicht in den Untergrund zieht; größere Anlagen auf einer Bodenplatte brauchen zusätzlich einen Unterfrierschutz. Die Decke wird bei großen Spannweiten gegebenenfalls abgehängt. Und zur Gebäudewand und -decke sehen Hersteller einen Abstand vor – zum Beispiel mindestens 50 mm bei Plus- und 100 mm bei Minustemperaturen –, damit Luft zirkulieren kann.</p>
<h2 id="fazit">Fazit</h2>
<p>Die richtige Paneelstärke ergibt sich aus Solltemperatur, Umgebung und den Freigaben des Paneelsystems. Lieber eine Stufe dicker als zu knapp: Der Mehrpreis fällt einmal an, die Ersparnis bei Energie und Betriebssicherheit jedes Jahr. Wir legen die Stärke im Projekt nach diesen Kriterien fest.</p>`,
  faq: [
    { q: 'Reichen 80 mm für eine Tiefkühlzelle?', a: 'Manche Paneelsysteme sind mit 80 mm bis −20 °C freigegeben. Häufig werden für Tiefkühlung aber 100 mm und mehr eingesetzt – abhängig von Hersteller, Solltemperatur und Umgebung.' },
    { q: 'Sind dickere Paneele immer besser?', a: 'Sie lassen weniger Wärme durch, kosten aber mehr und nehmen innen etwas Platz. Der Gewinn je zusätzlichem Zentimeter wird kleiner, je dicker das Paneel bereits ist. Sinnvoll ist die Stärke, die zu Temperatur und Umgebung passt.' },
    { q: 'Kann eine Kühlzelle später auf Tiefkühlung umgerüstet werden?', a: 'Nur, wenn Paneelstärke, Boden und Tür dafür geeignet sind. Bei einer Pluskühlzelle ohne gedämmten Boden ist das in der Regel nicht ohne Umbau möglich.' },
  ],
  related: [
    { href: '/sandwichpaneele/', tag: 'Komponenten', title: 'Sandwichpaneele', text: 'Aufbau, Kernmaterial und Oberflächen.' },
    { href: '/tiefkuehlzellen/', tag: 'Minusbereich', title: 'Tiefkühlzellen', text: 'Boden, Tür und Druckausgleich.' },
    { href: '/ratgeber/kuehlzelle-kosten/', tag: 'Ratgeber', title: 'Was kostet eine Kühlzelle?', text: 'Preisfaktoren im Überblick.' },
  ],
});

/* ------------------------------------------------------------------ 3 Planen */
const planen = article({
  path: '/ratgeber/kuehlzelle-planen/', short: 'Kühlzelle planen', topic: 'Planung', photo: 'kuehlanlage-mehrzellig-montage',
  title: 'Kühlzelle planen: Checkliste von Maß bis Aggregat | Europaneel',
  description: 'Kühlzelle richtig planen: Bedarf, Standort, Untergrund, Maße, Boden, Tür, Kältetechnik, Stromanschluss und Einbringweg – die Checkliste vor dem Aufmaß.',
  h1: 'Kühlzelle planen: Checkliste von Maß bis Aggregat',
  lead: 'Die meisten Probleme mit Kühlzellen entstehen nicht bei der Montage, sondern Wochen vorher – in der Planung. Mit dieser Checkliste klären Sie alles, was für ein belastbares Angebot und einen reibungslosen Aufbau nötig ist.',
  body: () => `
<h2 id="bedarf">1. Bedarf: Was soll gekühlt werden?</h2>
<p>Am Anfang steht die Ware. Welche Produkte lagern Sie, bei welcher Temperatur und in welcher Menge? Für viele Lebensmittel gibt das Lebensmittelrecht Höchsttemperaturen vor – etwa +7 °C für Fleisch oder −18 °C für Tiefkühlware. Ebenso wichtig ist der Rhythmus: Wie oft wird geliefert, wie oft die Tür geöffnet, und wird Ware warm eingelagert? All das erhöht den Kältebedarf.</p>
<h2 id="standort">2. Standort und Untergrund</h2>
<p>Steht die Zelle im Gebäude oder im Freien? Im Freien brauchen Zelle und Technik Schutz vor Witterung und direkter Sonne; baurechtliche Fragen klären Sie am besten frühzeitig mit dem Bauamt. Der Untergrund muss eben und tragfähig sein – Bodenelemente dürfen nur auf einer ebenen, waagerechten Fläche stehen. Zu Gebäudewänden und Decke sehen Hersteller einen Abstand vor, zum Beispiel mindestens 50 mm bei Plus- und 100 mm bei Minustemperaturen.</p>
<h2 id="masse">3. Maße: Außen- und Innenmaß</h2>
<p>Unterscheiden Sie zwischen Außenmaß (was der Raum hergeben muss) und Innenmaß (was Sie nutzen). Innen fehlen auf jeder Seite die Paneelstärke, bei 100-mm-Paneelen also 20 cm in Länge und Breite. Für die Höhe gilt: Raumhöhe minus Abstand zur Decke. Unser Kalkulator rechnet mit Außenmaßen und den verfügbaren Paneelhöhen von 2,10 bis 4,70 m.</p>
<h2 id="boden">4. Boden</h2>
<p>Für Pluskühlung können Sie zwischen Bodenelement und Aufstellung auf dem vorhandenen Boden wählen. Ohne Bodenelement fahren Rollwagen ebenerdig hinein; mit Bodenelement ist die Zelle auch nach unten gedämmt und braucht eine Rampe oder Schwelle. Für Tiefkühlung ist ein gedämmter Boden immer nötig. Planen Sie außerdem die Bodenlast: Regale, Hubwagen und Paletten müssen getragen werden.</p>
<h2 id="tuer">5. Tür: Position, Breite, Anschlag</h2>
<p>Wo liegt der kürzeste Weg zur Küche oder zum Lager? Was muss durch die Tür – Personen mit Kisten, Rollwagen oder Hubwagen? Danach richten sich Bauart und Breite: Drehtüren für kleinere Zellen, Schiebetüren für breite Öffnungen. Geben Sie die Anschlagseite von außen gesehen an und entscheiden Sie, ob eine Schwelle stören würde. Kühlraumtüren müssen sich nach DIN 8986 jederzeit von innen öffnen lassen.</p>
<h2 id="kaelte">6. Kältetechnik, Strom und Abwärme</h2>
<p>Das Aggregat braucht einen Platz, Luft und Strom. Steckerfertige Geräte geben ihre Wärme an den Aufstellraum ab – er muss gut belüftet sein. Bei Split-Anlagen steht der Verflüssigungssatz außerhalb, dafür werden Kältemittelleitungen verlegt. Der Verdampfer erzeugt Kondenswasser, das abgeleitet werden muss. Den Stromanschluss nach den Anforderungen des Aggregats stellt eine Elektrofachkraft her.</p>
<h2 id="einbringung">7. Einbringweg und Montage</h2>
<p>Die Paneele werden einzeln angeliefert und vor Ort montiert. Prüfen Sie deshalb den Weg vom Lieferfahrzeug zum Aufstellort: Zufahrt, Türbreiten, Treppen, Kurven, Aufzug. Eine freie Fläche zum Ablegen der Paneele beschleunigt die Montage. Übliche Zellengrößen stehen in den meisten Fällen an einem Tag.</p>
<h2 id="betrieb">8. Betrieb und Sicherheit</h2>
<p>Denken Sie an den Alltag nach der Übergabe: Temperaturüberwachung und Dokumentation gehören zum HACCP-Konzept des Betreibers; für Tiefkühlware verlangt die TLMV eine regelmäßige Überwachung der Lufttemperatur. Die DIN EN 378-1 sieht für Kühlräume über 10 m³ unter 0 °C eine Alarmeinrichtung vor; je nach Größe und Temperatur kommen nach DIN 8986 Notruf- und Beleuchtungseinrichtungen hinzu.</p>
<h2 id="checkliste">Die Checkliste zum Abhaken</h2>
${checks([
  'Ware, Solltemperatur und Menge festgelegt',
  'Liefer- und Öffnungsrhythmus abgeschätzt',
  'Aufstellort: innen oder außen, Untergrund eben und tragfähig',
  'Außenmaße, Raumhöhe und Abstände geprüft',
  'Boden: mit oder ohne Bodenelement, Lasten bekannt',
  'Tür: Bauart, Breite, Anschlagseite, Schwelle',
  'Aggregat: Aufstellort, Lüftung, Kondenswasser, Stromanschluss',
  'Einbringweg und Zufahrt geprüft',
  'Temperaturüberwachung und Sicherheitseinrichtungen eingeplant',
])}
<p>Sie müssen nicht alle Punkte allein lösen. Für einen ersten Richtpreis genügen Kühlart, Boden, Maße und Tür im <a href="/kalkulator.html">Kalkulator</a> – den Rest klären wir gemeinsam beim Aufmaß. Wie Planung und Montage bei uns ablaufen, lesen Sie unter <a href="/kuehlzellen-montage/">Planung &amp; Montage</a>.</p>`,
  faq: [
    { q: 'Muss ich alle Punkte vor der Anfrage geklärt haben?', a: 'Nein. Für einen Richtpreis reichen Kühlart, Boden, Maße und Tür. Alles Weitere klären wir im Gespräch und beim Aufmaß.' },
    { q: 'Brauche ich für eine Kühlzelle eine Baugenehmigung?', a: 'Für Kühlzellen in einem Gebäude ist das selten ein Thema. Bei Aufstellung im Freien hängt es von Größe, Standort und Landesbauordnung ab – klären Sie das frühzeitig mit dem zuständigen Bauamt.' },
  ],
  related: [
    { href: '/kuehlzellen-montage/', tag: 'Service', title: 'Planung & Montage', text: 'So läuft ein Projekt bei uns ab.' },
    { href: '/kuehlhaustueren/', tag: 'Komponenten', title: 'Kühlhaustüren', text: 'Formate, Anschlag und Schwelle.' },
    { href: '/kaelteaggregate/', tag: 'Kältetechnik', title: 'Kälteaggregate', text: 'Bauformen und Abwärme.' },
  ],
});

/* ------------------------------------------------------------------ 4 Kühlraum bauen */
const kuehlraum = article({
  path: '/ratgeber/kuehlraum-bauen/', short: 'Kühlraum bauen', topic: 'Grundlagen', photo: 'kuehlzelle-anthrazit-fliesenboden',
  title: 'Kühlraum bauen: Raum dämmen oder Kühlzelle? | Europaneel',
  description: 'Kühlraum bauen: Raum dämmen oder Kühlzelle aus Paneelen? Dämmung, Feuchteschutz, Hygiene und Aufwand im Vergleich – plus Hinweise für Selbstbauer.',
  h1: 'Kühlraum bauen: Raum dämmen oder Kühlzelle aus Paneelen?',
  lead: 'Wer einen gewerblichen Kühlraum braucht, hat zwei Wege: einen vorhandenen Raum nachträglich dämmen und mit Kältetechnik ausstatten – oder eine Kühlzelle aus Sandwichpaneelen in den Raum stellen. Beide funktionieren, unterscheiden sich aber deutlich in Aufwand, Risiko und Hygiene.',
  body: () => `
<h2 id="begriffe">Kühlraum oder Kühlzelle – was ist was?</h2>
<p>Im Alltag werden beide Begriffe oft gleich verwendet. Gemeint ist ein gedämmter, aktiv gekühlter Raum. Eine <strong>Kühlzelle</strong> ist dabei eine eigenständige Konstruktion aus vorgefertigten <a href="/sandwichpaneele/">Sandwichpaneelen</a>, die in einen Raum oder eine Halle gestellt wird. Ein <strong>ausgebauter Kühlraum</strong> nutzt dagegen die vorhandenen Wände, Decken und Böden des Gebäudes, die nachträglich gedämmt werden.</p>
<h2 id="raum">Weg 1: Einen vorhandenen Raum ausbauen</h2>
<p>Beim Ausbau wird der Raum von innen gedämmt und mit Kühlraumtür und Aggregat ausgestattet. Klingt einfach, verlangt aber Sorgfalt an mehreren Stellen:</p>
<ul>
  <li><strong>Feuchteschutz:</strong> Wasserdampf wandert von warm nach kalt. Ohne dichte Dampfbremse auf der warmen Seite kann Feuchte in die Dämmung und ins Mauerwerk gelangen – mit dem Risiko von Durchfeuchtung, Schimmel und Eis.</li>
  <li><strong>Wärmebrücken:</strong> Anschlüsse an Decke, Boden und Innenwände sind schwer lückenlos zu dämmen.</li>
  <li><strong>Boden:</strong> Gerade bei Minustemperaturen muss auch der Boden gedämmt werden, sonst zieht der Frost in den Untergrund.</li>
  <li><strong>Hygiene:</strong> Im Lebensmittelbereich müssen Wände und Böden leicht zu reinigen, wasserundurchlässig und abriebfest sein – die Oberflächen müssen also zusätzlich hergestellt werden.</li>
</ul>
<h2 id="zelle">Weg 2: Eine Kühlzelle aus Sandwichpaneelen</h2>
<p>Bei der Kühlzelle kommen Dämmung, Feuchteschutz und Oberfläche aus einem Bauteil: Das Paneel hat einen definierten U-Wert, die Deckschichten aus beschichtetem Stahlblech sind dampfdicht und abwaschbar, die Elemente werden über Nut und Feder dicht verbunden. Die Zelle steht mit Abstand zu den Gebäudewänden und lässt sich bei Bedarf erweitern oder wieder demontieren.</p>
<h2 id="vergleich">Beide Wege im Vergleich</h2>
${cmp(['Kriterium', 'Raum ausbauen', 'Kühlzelle aus Paneelen'], [
  ['Dämmwirkung', 'abhängig von Ausführung und Wärmebrücken', 'definiert durch Paneel und Fugen'],
  ['Feuchteschutz', 'Dampfbremse nötig, fehleranfällig', 'Stahldeckschichten dampfdicht'],
  ['Hygiene', 'Oberflächen müssen nachgerüstet werden', 'glatte, abwaschbare Oberflächen'],
  ['Aufwand', 'mehrere Gewerke nacheinander', 'Montage aus einer Hand, übliche Größen meist an einem Tag'],
  ['Rückbau, Umzug, Erweiterung', 'kaum möglich', 'demontierbar und erweiterbar'],
], { label: 'Vergleich Raumausbau und Kühlzelle' })}
<h2 id="selbst">Selbst bauen? Was Sie beachten müssen</h2>
<p>Paneele zu montieren ist mechanische Arbeit. Anders sieht es bei der Technik aus: Arbeiten an Kältekreisläufen mit fluorierten Kältemitteln – etwa das Verlegen und Befüllen von Leitungen bei Split-Anlagen – sind nach der F-Gase-Verordnung zertifiziertem Fachpersonal vorbehalten. Steckerfertige Aggregate kommen dagegen werkseitig befüllt. Den elektrischen Anschluss stellt eine Elektrofachkraft her. Und unabhängig davon, wer baut: Die Tür muss sich nach DIN 8986 jederzeit von innen öffnen lassen.</p>
<h2 id="profi">Wann der Fachbetrieb die bessere Wahl ist</h2>
<p>Je kälter, größer und hygienisch anspruchsvoller der Kühlraum ist, desto mehr spricht für eine fachgerecht geplante Kühlzelle: bei Tiefkühlung, bei Lebensmittelbetrieben mit amtlicher Kontrolle, bei mehreren Temperaturzonen oder wenn der Betrieb nicht lange stillstehen darf. Wie wir dabei vorgehen, lesen Sie unter <a href="/kuehlzellen/">Kühlzellen nach Maß</a> und <a href="/kuehlhausbau/">Kühlhausbau</a>.</p>`,
  faq: [
    { q: 'Kann ich einen kühlen Keller als Kühlraum nutzen?', a: 'Ein kühler Keller allein hält keine definierte Temperatur – für Lebensmittel mit gesetzlichen Höchsttemperaturen braucht es aktive Kühlung. Eine Kühlzelle lässt sich aber gut in einem Keller aufbauen, sofern die Paneele durch Türen und Treppen passen.' },
    { q: 'Was ist günstiger: Raum ausbauen oder Kühlzelle?', a: '<p>Der Raumausbau wirkt auf den ersten Blick oft günstiger, verteilt sich aber auf mehrere Gewerke und birgt Feuchterisiken. Einen Richtpreis für eine Kühlzelle sehen Sie sofort im <a href="/kalkulator.html">Kalkulator</a>.</p>' },
  ],
  related: [
    { href: '/kuehlzellen/', tag: 'Lösungen', title: 'Kühlzellen nach Maß', text: 'Der Weg mit Sandwichpaneelen.' },
    { href: '/ratgeber/kuehlzelle-planen/', tag: 'Ratgeber', title: 'Kühlzelle planen', text: 'Checkliste vor dem Aufmaß.' },
    { href: '/kuehlhausbau/', tag: 'Projekte', title: 'Kühlhausbau', text: 'Mehrzellige Anlagen und Kühllager.' },
  ],
});

/* ------------------------------------------------------------------ Hub */
const ARTICLES = [kosten, staerke, planen, kuehlraum];
const GLOSSAR = [
  ['U-Wert', 'Wärmedurchgangskoeffizient in W/(m²·K): wie viel Wärme pro Quadratmeter und Kelvin Temperaturunterschied durch ein Bauteil fließt. Kleiner ist besser.'],
  ['Sandwichpaneel', 'Bauelement aus zwei Deckschichten, meist beschichtetes Stahlblech, und einem Dämmkern aus PUR, PIR oder Mineralwolle.'],
  ['Unterfrierschutz', 'Maßnahmen, die verhindern, dass bei Tiefkühlung Frost in den Untergrund zieht – etwa gedämmte Bodenelemente oder eine Bodenheizung.'],
  ['Druckausgleichsventil', 'Beheiztes Ventil in Tiefkühlzellen, das den Unterdruck nach dem Schließen der Tür ausgleicht.'],
  ['Rahmenheizung', 'Heizung im Türrahmen von Tiefkühltüren, die verhindert, dass Dichtungen anfrieren.'],
  ['Huckepack-Aggregat', 'Steckerfertiges Kälteaggregat, das in die Zellenwand eingehängt wird.'],
  ['Monoblock', 'Kompaktes Kälteaggregat mit werkseitig gefülltem, geschlossenem Kältekreis.'],
  ['Split-Anlage', 'Kältetechnik mit getrenntem Verflüssigungssatz (außen) und Verdampfer (in der Zelle), verbunden über Kältemittelleitungen.'],
];
const hub = {
  path: '/ratgeber/', title: 'Kühlzellen-Ratgeber: Kosten, Technik, Planung | Europaneel',
  description: 'Fachwissen zu Kühlzellen und Kühlräumen: was eine Kühlzelle kostet, welche Paneelstärke sinnvoll ist, wie man richtig plant – sachlich erklärt von Europaneel.',
  updated: PUB, pageType: 'CollectionPage', crumbs: [['Ratgeber', '/ratgeber/']],
  render: () => `${pageHero({ eyebrow: 'Ratgeber', title: 'Fachwissen rund um Kühlzellen und Kühlräume', lead: 'Antworten auf die Fragen, die vor jedem Kühlzellen-Projekt stehen – sachlich, nachvollziehbar und ohne Verkaufsfloskeln.', ctas: false })}
<section class="sec" aria-labelledby="art-t"><div class="container">
  ${secHead({ eyebrow: 'Artikel', id: 'art-t', title: 'Aktuelle Ratgeber' })}
  <div class="grid g-2">${ARTICLES.map((a, i) => `<a class="card card--link art-card" href="${a.path}" data-reveal${i % 2 ? ' data-reveal-d="1"' : ''}><span class="sol__tag">${a.crumbs[1][0]}</span><h3>${a.article.headline}</h3><p>${a.description}</p><span class="link-arrow">Artikel lesen${icon('arrow-right')}</span></a>`).join('')}</div>
</div></section>
<section class="sec sec--surface" aria-labelledby="glos-t"><div class="container split">
  <div>${secHead({ eyebrow: 'Glossar', id: 'glos-t', title: 'Begriffe kurz erklärt', stack: true })}</div>
  <dl class="glossary" data-reveal>${GLOSSAR.map(([t, d]) => `<div><dt>${t}</dt><dd>${d}</dd></div>`).join('')}</dl>
</div></section>
${ctaBand()}`,
};

export default [hub, ...ARTICLES];

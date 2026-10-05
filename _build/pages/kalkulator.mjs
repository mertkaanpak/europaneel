// Kühlzellen-Kalkulator. WICHTIG: IDs, Funktionsaufrufe (onclick) und die Türoptionen
// (value UND Text) sind die Schnittstelle zur verschleierten Logik in assets/js/calc.js
// und zum Anfrage-Formular – nicht ändern, ohne den Regressionstest laufen zu lassen.
import { icon, secHead, faq, related, heroCrumbs } from '../lib.mjs';
import { SITE } from '../site.config.mjs';

const DOORS = [
  ['0', 'Keine Tür [0 €]', true], ['550', 'Drehtür 75 × 175 cm [+550 €]'], ['580', 'Drehtür 75 × 190 cm [+580 €]'],
  ['600', 'Drehtür 80 × 190 cm [+600 €]'], ['650', 'Drehtür 90 × 190 cm [+650 €]'], ['700', 'Drehtür 110 × 190 cm [+700 €]'],
  ['800', 'Drehtür 100 × 200 cm [+800 €]'], ['850', 'Drehtür 100 × 220 cm [+850 €]'], ['900', 'Drehtür 120 × 200 cm [+900 €]'],
  ['1000', 'Drehtür 120 × 220 cm [+1.000 €]'], ['0', 'Schiebetür (Auf Anfrage)'],
];
const back = (fn) => `<button class="step-back" type="button" onclick="${fn}">${icon('chevron-left')}Zurück</button>`;
const f = (id, label, input, req = true) => `<div class="field"><label for="${id}">${label}${req ? ' <span class="req" aria-hidden="true">*</span>' : ''}</label>${input}${req ? `<span class="err">Bitte ausfüllen.</span>` : ''}</div>`;
const i = (id, name, type, ac, extra = '') => `<input class="input" id="${id}" name="${name}" type="${type}" required aria-required="true" autocomplete="${ac}"${extra}>`;

export default {
  path: '/kalkulator.html',
  title: 'Kühlzellen-Kalkulator: Preis online berechnen | Europaneel',
  description: 'Kühlzelle konfigurieren und Netto-Richtpreis sofort sehen – ohne Registrierung: Kühlart, Boden, Maße und Tür wählen, Konfiguration direkt als Anfrage senden.',
  updated: '2026-10-05',
  pageType: 'WebPage',
  crumbs: [['Kühlzellen-Kalkulator', '/kalkulator.html']],
  css: ['calc.css'],
  js: ['calc.js', 'calc-ui.js'],
  noWa: true,
  bodyClass: 'page-calc',
  render() {
    return `<section class="calc-head blueprint" aria-labelledby="page-t">
  ${heroCrumbs()}
  <div class="container">
    <p class="eyebrow">Online-Tool · ohne Registrierung</p>
    <h1 id="page-t">Kühlzellen-Kalkulator</h1>
    <p class="lead">Konfigurieren Sie Ihre Kühlzelle in vier Schritten und sehen Sie sofort einen Netto-Richtpreis für Paneele und Tür. Passt die Größenordnung, senden Sie uns die Konfiguration direkt als Anfrage.</p>
  </div>
</section>

<section class="calc" aria-label="Konfigurator">
  <div class="container calc__grid">
    <div class="calc-wrapper">
      <ol class="stepper" id="calcProgress" aria-label="Fortschritt">
        <li class="dot done" data-step="1"><span class="dot__n">1</span><span class="dot__l">Kühlart</span></li>
        <li class="dot" data-step="2"><span class="dot__n">2</span><span class="dot__l">Boden</span></li>
        <li class="dot" data-step="3"><span class="dot__n">3</span><span class="dot__l">Maße</span></li>
        <li class="dot" data-step="4"><span class="dot__n">4</span><span class="dot__l">Tür &amp; Preis</span></li>
      </ol>

      <div id="step-1" class="step-content active" role="group" aria-labelledby="s1-t">
        <h2 class="step-title" id="s1-t">Welche Kühlart benötigen Sie?</h2>
        <p class="step-sub">Pluskühlung für Frischware oder Tiefkühlung für Ware, die bei −18 °C oder kälter gelagert werden muss.</p>
        <div class="opt-grid">
          <button class="opt" type="button" onclick="waehleKuehlung('normal')" data-typ="normal">${icon('snowflake')}<b>Normalkühlung</b><small>Pluskühlung, mit oder ohne Boden</small></button>
          <button class="opt" type="button" id="tiefkuehlung" onclick="waehleKuehlung('tief')" data-typ="tief">${icon('thermometer-snowflake')}<b>Tiefkühlung</b><small>Minusbereich, immer mit isoliertem Boden</small></button>
        </div>
      </div>

      <div id="step-2" class="step-content" role="group" aria-labelledby="s2-t">
        ${back('goToStep(1)')}
        <h2 class="step-title" id="s2-t">Benötigen Sie einen Boden?</h2>
        <p class="step-sub">Ohne Bodenelement steht die Zelle direkt auf Ihrem ebenen Boden – mit Bodenelement ist sie auch nach unten gedämmt.</p>
        <div class="opt-grid">
          <button class="opt" type="button" onclick="waehleBoden(true)">${icon('layers')}<b>Mit Boden</b><small>Isoliertes Bodenelement inkl. Siebdruckplatte</small></button>
          <button class="opt" type="button" onclick="waehleBoden(false)">${icon('move-horizontal')}<b>Ohne Boden</b><small>Aufstellung auf vorhandenem Boden, ebenerdiger Zugang</small></button>
        </div>
      </div>

      <div id="step-3" class="step-content" role="group" aria-labelledby="s3-t">
        ${back('zurueckVonMasse()')}
        <h2 class="step-title" id="s3-t">Maße Ihrer Kühlzelle</h2>
        <p class="step-sub">Außenmaße in Metern. Die Höhe wählen Sie aus den verfügbaren Paneelhöhen.</p>
        <div class="dims">
          <div class="field"><label for="inp-laenge">Länge <span class="unit">m</span></label><input class="input tnum" type="number" id="inp-laenge" inputmode="decimal" placeholder="z. B. 3,00" step="0.10" min="0.5" aria-describedby="dim-err"></div>
          <div class="field"><label for="inp-breite">Breite <span class="unit">m</span></label><input class="input tnum" type="number" id="inp-breite" inputmode="decimal" placeholder="z. B. 2,50" step="0.10" min="0.5" aria-describedby="dim-err"></div>
          <div class="field"><label for="inp-hoehe">Höhe <span class="unit">m</span></label><select class="select tnum" id="inp-hoehe"></select></div>
        </div>
        <p class="dim-err" id="dim-err" role="alert" hidden>${icon('triangle-alert')}Bitte Länge und Breite eingeben (mindestens 0,5 m).</p>
        <details class="tip"><summary>${icon('circle-help')}Innen- oder Außenmaß?</summary><p>Der Kalkulator rechnet mit Außenmaßen. Das nutzbare Innenmaß ist um die doppelte Paneelstärke kleiner. Planen Sie außerdem etwas Abstand zu Gebäudewänden und Decke ein – die genauen Maße klären wir beim Aufmaß.</p></details>
        <button class="btn btn--primary btn--block step-next" type="button" onclick="goToStep(4); berechnePreis();">Weiter zu Tür &amp; Preis${icon('arrow-right')}</button>
      </div>

      <div id="step-4" class="step-content" role="group" aria-labelledby="s4-t">
        ${back('goToStep(3)')}
        <h2 class="step-title" id="s4-t">Tür wählen &amp; Richtpreis</h2>
        <div class="field"><label for="inp-tuer">Tür</label>
          <select class="select" id="inp-tuer" onchange="berechnePreis()">${DOORS.map(([v, t, sel]) => `<option value="${v}"${sel ? ' selected' : ''}>${t}</option>`).join('')}</select>
        </div>
        <div class="result" aria-live="polite">
          <span class="result__lbl">Richtpreis netto</span>
          <div class="price-big tnum" id="preis-ausgabe">0,00 €</div>
          <span class="result__note">zzgl. MwSt. · Paneele und Tür</span>
        </div>
        <div class="incl incl--calc">
          <div class="yes"><h3>Enthalten</h3><ul><li>${icon('check')}Sandwichpaneele Wände &amp; Decke</li><li>${icon('check')}Boden inkl. Siebdruckplatte (falls gewählt)</li><li>${icon('check')}Gewählte Tür</li></ul></div>
          <div class="no"><h3>Separat angeboten</h3><ul><li>${icon('minus')}Kälteaggregat</li><li>${icon('minus')}Lieferung</li><li>${icon('minus')}Montage</li></ul></div>
        </div>
        <div class="calc-actions">
          <button class="btn btn--primary btn--block" type="button" onclick="openRequestModal()">${icon('send')}Jetzt Angebot anfordern</button>
          <button class="btn btn--outline" type="button" data-print>${icon('printer')}Konfiguration drucken</button>
        </div>
        <p class="step-hint">Sie erhalten ein schriftliches Angebot – auf Wunsch inklusive Kältetechnik, Lieferung und Montage.</p>
      </div>
    </div>

    <aside class="calc-side" aria-label="Ihre Konfiguration">
      <div class="calc-viz" aria-hidden="true"><svg id="calcViz" viewBox="0 0 360 250"></svg></div>
      <dl class="calc-sum" id="selectionSummary">
        <div id="summaryType"><dt>Kühlart</dt><dd><b>–</b></dd></div>
        <div id="summaryFloor"><dt>Boden</dt><dd><b>–</b></dd></div>
        <div id="summarySize"><dt>Maße (L × B × H)</dt><dd><b>–</b></dd></div>
        <div id="summaryDoor"><dt>Tür</dt><dd><b>–</b></dd></div>
        <div><dt>Grundfläche · Volumen</dt><dd><span id="calcArea" class="tnum">–</span></dd></div>
      </dl>
      <div class="calc-live" id="calcLive" hidden><span>Richtpreis netto</span><b class="tnum" id="calcLivePrice"></b></div>
      <ul class="calc-trust">
        <li>${icon('lock')}Ohne Registrierung, keine Datenübermittlung</li>
        <li>${icon('file-text')}Schriftliches Angebot auf Anfrage</li>
      </ul>
    </aside>
  </div>
  <div class="calc-bar" id="calcBar" hidden><span><small>Richtpreis netto</small><b class="tnum" id="calcBarPrice"></b></span><button class="btn btn--primary btn--sm" type="button" onclick="openRequestModal()">Angebot anfordern</button></div>
</section>

<section class="sec sec--surface" aria-labelledby="how-t">
  <div class="container split">
    <div>${secHead({ eyebrow: 'So funktioniert es', id: 'how-t', title: 'Was der Richtpreis aussagt', stack: true, text: 'Der Kalkulator berechnet die Kosten der gedämmten Hülle aus Wandfläche, Decke und gegebenenfalls Boden – plus der gewählten Tür. Er ersetzt kein Angebot, gibt Ihnen aber eine belastbare Größenordnung.' })}</div>
    ${faq([
      { q: 'Welche Kosten kommen zum Richtpreis hinzu?', a: '<p>Kälteaggregat, Lieferung und Montage bieten wir separat an. Wie sich die Gesamtkosten zusammensetzen, erklärt der Ratgeber <a href="/ratgeber/kuehlzelle-kosten/">Was kostet eine Kühlzelle?</a></p>' },
      { q: 'Warum gibt es nur bestimmte Höhen?', a: 'Die Höhen entsprechen den verfügbaren Paneelhöhen: ohne Boden 2,10 bis 4,60 m, mit Boden 2,20 bis 4,70 m in 50-cm-Schritten. Andere Maße sind auf Anfrage möglich.' },
      { q: 'Kann ich eine Schiebetür wählen?', a: 'Schiebetüren bieten wir auf Anfrage an – wählen Sie im Kalkulator „Schiebetür (Auf Anfrage)“, dann berücksichtigen wir sie im Angebot. Die verfügbaren Formate finden Sie unter <a href="/kuehlhaustueren/">Kühlhaustüren</a>.' },
      { q: 'Werden meine Eingaben gespeichert?', a: 'Nein. Die Berechnung läuft vollständig in Ihrem Browser. Daten erhalten wir erst, wenn Sie das Anfrageformular absenden.' },
    ], { name: 'calcfaq' })}
  </div>
</section>

<section class="sec--sm"><div class="container">${related([
  { href: '/kuehlzellen/', tag: 'Lösungen', title: 'Kühlzellen nach Maß', text: 'Aufbau, Boden, Tür und Temperatur.' },
  { href: '/tiefkuehlzellen/', tag: 'Minusbereich', title: 'Tiefkühlzellen', text: 'Was im Minusbereich anders ist.' },
  { href: '/ratgeber/kuehlzelle-planen/', tag: 'Ratgeber', title: 'Kühlzelle planen', text: 'Checkliste vor dem Aufmaß.' },
])}</div></section>

<dialog class="dlg" id="requestModal" aria-labelledby="req-t">
  <div class="dlg__head"><h2 id="req-t">Angebot anfordern</h2><button class="dlg__close" type="button" onclick="closeRequestModal()" aria-label="Schließen">${icon('x')}</button></div>
  <div class="dlg__body">
    <p class="muted">Ihre Konfiguration wird automatisch übernommen. Bitte ergänzen Sie Ihre Kontaktdaten – wir melden uns mit einem schriftlichen Angebot.</p>
    <form class="mt-m" action="https://formsubmit.co/${SITE.email}" method="POST" data-validate data-form="kalkulator" data-track-submit="quote_request">
      <input type="hidden" name="_subject" value="Neue Kalkulator-Anfrage (europaneel.de)">
      <input type="hidden" name="_next" value="${SITE.url}/danke.html">
      <input type="hidden" name="_captcha" value="false">
      <input type="hidden" name="_template" value="table">
      <input type="hidden" name="Konfiguration_Typ" id="hidden-typ">
      <input type="hidden" name="Konfiguration_Masse" id="hidden-masse">
      <input type="hidden" name="Konfiguration_Tuer" id="hidden-tuer">
      <input type="hidden" name="Kalkulierter_Preis" id="hidden-preis">
      <div class="honeypot" aria-hidden="true"><label for="hp-company">Company</label><input id="hp-company" type="text" name="_honey" tabindex="-1" autocomplete="off"></div>
      <div class="form-grid">
        ${f('r-firma', 'Firma', i('r-firma', 'Firma', 'text', 'organization'))}
        ${f('r-name', 'Ansprechpartner', i('r-name', 'Name', 'text', 'name'))}
        ${f('r-email', 'E-Mail', i('r-email', 'email', 'email', 'email'))}
        ${f('r-tel', 'Telefon', i('r-tel', 'Telefon', 'tel', 'tel'))}
        ${f('r-str', 'Straße und Hausnummer', i('r-str', 'Strasse', 'text', 'street-address'))}
        ${f('r-plz', 'PLZ', i('r-plz', 'PLZ', 'text', 'postal-code', ' inputmode="numeric"'))}
        ${f('r-ort', 'Ort', i('r-ort', 'Ort', 'text', 'address-level2'))}
        ${f('r-land', 'Land', i('r-land', 'Land', 'text', 'country-name', ' value="Deutschland"'))}
        <fieldset class="field full"><legend>Lieferung / Selbstabholung</legend><div class="choices">
          <label class="choice"><input type="radio" name="Service" value="Lieferung und Montage anfragen" checked><span>Lieferung &amp; Montage</span></label>
          <label class="choice"><input type="radio" name="Service" value="Nur Selbstabholung"><span>Selbstabholung in Bottrop</span></label>
        </div></fieldset>
        <div class="field full"><label for="r-msg">Anmerkungen</label><textarea class="textarea" id="r-msg" name="Nachricht" rows="3" placeholder="z. B. Wunschtermin, Kältetechnik gewünscht, Besonderheiten vor Ort"></textarea></div>
      </div>
      <div class="form-foot">
        <p class="form-legal">Ihre Angaben verwenden wir zur Bearbeitung der Anfrage – siehe <a href="/datenschutz/">Datenschutzerklärung</a>.</p>
        <button class="btn btn--primary" type="submit">Kostenlos anfragen${icon('send')}</button>
      </div>
    </form>
  </div>
</dialog>`;
  },
};

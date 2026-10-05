/* ==========================================================================
   Kühlzellen-Kalkulator – Oberfläche  ·  (c) Europaneel GmbH
   Ergänzt die (verschleierte) Rechenlogik in calc.js um Visualisierung,
   Zusammenfassung, Validierung, Tracking und Druck. Greift NICHT in die
   Preisberechnung ein – liest nur Eingaben und das Ergebnis aus dem DOM.
   ========================================================================== */
(function () {
  'use strict';
  var d = document, w = window;
  var wrap = d.querySelector('.calc-wrapper');
  var L = d.getElementById('inp-laenge'), B = d.getElementById('inp-breite'), H = d.getElementById('inp-hoehe');
  var T = d.getElementById('inp-tuer'), price = d.getElementById('preis-ausgabe');
  if (!wrap || !L || !B || !H || !T || !price) return; // z. B. Domain-Sperre aktiv

  var viz = d.getElementById('calcViz'), area = d.getElementById('calcArea');
  var live = d.getElementById('calcLive'), livePrice = d.getElementById('calcLivePrice');
  var bar = d.getElementById('calcBar'), barPrice = d.getElementById('calcBarPrice');
  var steps = [1, 2, 3, 4].map(function (n) { return d.getElementById('step-' + n); });
  var track = function (e, p) { if (typeof w.epTrack === 'function') w.epTrack(e, p); };
  var de = function (n, dig) { return n.toLocaleString('de-DE', { minimumFractionDigits: dig, maximumFractionDigits: dig }); };
  var num = function (el) { var v = parseFloat(String(el.value).replace(',', '.')); return isFinite(v) && v > 0 ? v : 0; };
  var currentStep = function () { for (var i = 0; i < steps.length; i++) if (steps[i].classList.contains('active')) return i + 1; return 1; };
  var floorChosen = function () { var b = d.querySelector('#summaryFloor b'); return b && /Mit Boden/.test(b.textContent); };
  var isTief = function () { var b = d.querySelector('#summaryType b'); return b && /Tief/.test(b.textContent); };

  /* 1) Deutsche Zahlendarstellung (Werte bleiben unverändert) */
  function localizeHeights() {
    Array.prototype.forEach.call(H.options, function (o) { var t = o.value.replace('.', ',') + ' m'; if (o.textContent !== t) o.textContent = t; });
  }
  new MutationObserver(localizeHeights).observe(H, { childList: true });
  var sizeB = d.querySelector('#summarySize b');
  if (sizeB) new MutationObserver(function () {
    var t = sizeB.textContent; if (/\d\.\d/.test(t)) sizeB.textContent = t.replace(/(\d)\.(\d)/g, '$1,$2');
  }).observe(sizeB, { childList: true, characterData: true, subtree: true });

  /* 2) Maßstäbliche Skizze der Zelle (Schrägbild) */
  var NS = 'http://www.w3.org/2000/svg';
  function el(tag, attrs, text) {
    var e = d.createElementNS(NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    viz.appendChild(e); return e;
  }
  function doorInfo() {
    var t = T.options[T.selectedIndex].text, m = t.match(/(\d+)\s*×\s*(\d+)/);
    if (m) return { w: +m[1] / 100, h: +m[2] / 100, slide: false };
    if (/Schiebe/.test(t)) return { w: 1.5, h: 2.0, slide: true };
    return null;
  }
  function draw() {
    if (!viz) return;
    while (viz.firstChild) viz.removeChild(viz.firstChild);
    var given = num(L) > 0 && num(B) > 0;
    var l = num(L) || 3, b = num(B) || 2.5, h = parseFloat(H.value) || 2.1;
    var cos = 0.476, sin = 0.275; // Tiefe unter 30°, verkürzt
    var k = Math.min(270 / (l + b * cos), 150 / (h + b * sin));
    var fw = l * k, fh = h * k, dx = b * k * cos, dy = -b * k * sin;
    var x0 = 74 + (270 - fw - dx) / 2, y0 = 250 - 46; // links Platz für die Höhenbemaßung
    var tief = isTief();
    var stroke = tief ? '#1e66a6' : '#3e4652', f1 = tief ? '#f1f6fc' : '#ffffff', f2 = tief ? '#e2edf8' : '#eef0f3', f3 = tief ? '#d3e3f3' : '#e3e6eb';
    var op = given ? 1 : 0.45;
    var pts = function (a) { return a.map(function (p) { return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' '); };
    var g = { stroke: stroke, 'stroke-width': 1.5, 'stroke-linejoin': 'round', opacity: op };
    el('polygon', Object.assign({ points: pts([[x0, y0 - fh], [x0 + fw, y0 - fh], [x0 + fw + dx, y0 - fh + dy], [x0 + dx, y0 - fh + dy]]), fill: f2 }, g));
    el('polygon', Object.assign({ points: pts([[x0 + fw, y0], [x0 + fw, y0 - fh], [x0 + fw + dx, y0 - fh + dy], [x0 + fw + dx, y0 + dy]]), fill: f3 }, g));
    el('rect', Object.assign({ x: x0, y: y0 - fh, width: fw, height: fh, fill: f1 }, g));
    // Paneelstöße auf der Front
    var seg = Math.max(1, Math.round(l / 1.2));
    for (var i = 1; i < seg; i++) el('line', { x1: x0 + fw * i / seg, y1: y0 - fh + 2, x2: x0 + fw * i / seg, y2: y0 - 2, stroke: stroke, 'stroke-width': 0.6, opacity: 0.35 * op });
    if (floorChosen()) el('rect', { x: x0, y: y0 - 5, width: fw, height: 5, fill: stroke, opacity: 0.55 * op });
    var dr = doorInfo();
    if (dr) {
      var dwp = Math.min(dr.w, l * 0.8) * k, dhp = Math.min(dr.h, h * 0.92) * k, dxp = x0 + Math.min(fw * 0.14, fw - dwp - 4);
      el('rect', { x: dxp, y: y0 - dhp, width: dwp, height: dhp, fill: '#ffffff', stroke: '#101216', 'stroke-width': 1.4, opacity: op });
      if (dr.slide) el('line', { x1: dxp, y1: y0 - dhp - 5, x2: Math.min(dxp + dwp * 2, x0 + fw), y2: y0 - dhp - 5, stroke: '#101216', 'stroke-width': 2, opacity: op });
      else el('line', { x1: dxp + dwp - 6, y1: y0 - dhp / 2 - 7, x2: dxp + dwp - 6, y2: y0 - dhp / 2 + 7, stroke: '#101216', 'stroke-width': 2.2, 'stroke-linecap': 'round', opacity: op });
    }
    // Bemaßung
    var red = '#dd0312', txt = { 'font-size': 12, 'font-weight': 600, fill: '#101216', 'font-family': 'Inter, Arial, sans-serif' };
    el('line', { x1: x0, y1: y0 + 16, x2: x0 + fw, y2: y0 + 16, stroke: red, 'stroke-width': 1.2 });
    el('text', Object.assign({ x: x0 + fw / 2, y: y0 + 33, 'text-anchor': 'middle' }, txt), 'L ' + de(l, 2) + ' m');
    el('line', { x1: x0 - 14, y1: y0, x2: x0 - 14, y2: y0 - fh, stroke: red, 'stroke-width': 1.2 });
    el('text', Object.assign({ x: x0 - 20, y: y0 - fh / 2, 'text-anchor': 'end', 'dominant-baseline': 'middle' }, txt), 'H ' + de(h, 2) + ' m');
    el('line', { x1: x0 + fw + 10, y1: y0 + 6, x2: x0 + fw + dx + 10, y2: y0 + dy + 6, stroke: red, 'stroke-width': 1.2 });
    el('text', Object.assign({ x: x0 + fw + dx / 2 + 16, y: y0 + dy / 2 + 18 }, txt), 'B ' + de(b, 2) + ' m');
    if (!given) el('text', { x: 180, y: 22, 'text-anchor': 'middle', 'font-size': 12, fill: '#5b6570', 'font-family': 'Inter, Arial, sans-serif' }, 'Beispielmaße – geben Sie Ihre Maße ein');
    if (area) area.textContent = given ? de(l * b, 2) + ' m² · ' + de(l * b * h, 2) + ' m³' : '–';
  }

  /* 3) Live-Preis aus der Berechnung spiegeln */
  function syncPrice() {
    var p = price.textContent.trim();
    var has = num(L) >= 0.5 && num(B) >= 0.5 && !/^0,00/.test(p);
    if (live) { live.hidden = !has; livePrice.textContent = p; }
    if (bar) { bar.hidden = !(has && currentStep() === 4); barPrice.textContent = p; }
  }
  new MutationObserver(syncPrice).observe(price, { childList: true, characterData: true, subtree: true });

  /* 4) Schrittwechsel: Fokus für Screenreader, Tracking */
  var started = false, completed = false;
  var onStep = function () {
    var cur = currentStep();
    var t = steps[cur - 1].querySelector('.step-title');
    if (t && d.activeElement && wrap.contains(d.activeElement)) { t.setAttribute('tabindex', '-1'); t.focus({ preventScroll: true }); }
    if (cur === 4 && !completed && num(L) >= 0.5 && num(B) >= 0.5) {
      completed = true;
      var v = parseFloat(price.textContent.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
      track('calculator_complete', { kuehlart: isTief() ? 'tief' : 'normal', boden: floorChosen() ? 'ja' : 'nein', value: v, currency: 'EUR' });
    }
    draw(); syncPrice();
  };
  steps.forEach(function (s) { new MutationObserver(onStep).observe(s, { attributes: true, attributeFilter: ['class'] }); });
  wrap.addEventListener('click', function (e) {
    var o = e.target.closest('#step-1 .opt');
    if (o && !started) { started = true; track('calculator_start', { kuehlart: o.getAttribute('data-typ') }); }
  });

  /* 5) Validierung vor Schritt 4 (fängt den Klick ab, bevor die Logik ihn sieht) */
  var err = d.getElementById('dim-err');
  wrap.addEventListener('click', function (e) {
    if (!e.target.closest('.step-next')) return;
    var badL = num(L) < 0.5, badB = num(B) < 0.5;
    [[L, badL], [B, badB]].forEach(function (x) { x[0].closest('.field').classList.toggle('is-invalid', x[1]); x[0].setAttribute('aria-invalid', x[1] ? 'true' : 'false'); });
    if (badL || badB) { e.stopPropagation(); e.preventDefault(); err.hidden = false; (badL ? L : B).focus(); }
    else err.hidden = true;
  }, true);
  [L, B].forEach(function (x) { x.addEventListener('input', function () { if (num(x) >= 0.5) { x.closest('.field').classList.remove('is-invalid'); x.setAttribute('aria-invalid', 'false'); } if (num(L) >= 0.5 && num(B) >= 0.5) err.hidden = true; }); });

  /* 6) Eingaben → Skizze */
  [L, B, H, T].forEach(function (x) { x.addEventListener('input', draw); x.addEventListener('change', draw); });

  /* 7) Vorauswahl per Link (#tiefkuehlung) und Druck */
  if (w.location.hash === '#tiefkuehlung' && currentStep() === 1 && typeof w.waehleKuehlung === 'function') w.waehleKuehlung('tief');
  d.addEventListener('click', function (e) { if (e.target.closest('[data-print]')) w.print(); });

  localizeHeights(); draw(); syncPrice();
})();

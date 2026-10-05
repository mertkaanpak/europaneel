/* ==========================================================================
   Europaneel – Seitenlogik 2.0  ·  (c) 2026 Europaneel GmbH
   Navigation · Dialoge · Einwilligung · Tracking-Layer · Reveal · Lightbox
   Jeder Block prüft, ob seine Elemente existieren – eine Datei für alle Seiten.
   ========================================================================== */
(function () {
  'use strict';
  var d = document, w = window, html = d.documentElement;
  var $ = function (s, r) { return (r || d).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || d).querySelectorAll(s)); };
  var reduced = w.matchMedia && w.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var CONSENT_KEY = 'ep_consent'; // Werte: 'necessary' | 'all'

  /* ---------- Tracking-Layer (DSGVO: keine personenbezogenen Daten) ---------- */
  w.dataLayer = w.dataLayer || [];
  function track(event, params) {
    var payload = { event: event };
    if (params) for (var k in params) if (Object.prototype.hasOwnProperty.call(params, k)) payload[k] = params[k];
    w.dataLayer.push(payload);
    if (typeof w.gtag === 'function') w.gtag('event', event, params || {});
  }
  w.epTrack = track;

  d.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    var posEl = a.closest('[data-track-pos]');
    var where = posEl ? posEl.getAttribute('data-track-pos') : 'inline';
    if (href.indexOf('tel:') === 0) track('phone_click', { position: where });
    else if (href.indexOf('mailto:') === 0) track('email_click', { position: where });
    else if (href.indexOf('wa.me') > -1) track('whatsapp_click', { position: where });
  });

  /* ---------- Header: Schatten beim Scrollen ---------- */
  var hdr = $('.hdr');
  if (hdr) {
    var onScroll = function () { hdr.classList.toggle('is-scrolled', w.scrollY > 8); };
    onScroll();
    w.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Desktop-Navigation: Mega-Menü & Dropdowns ---------- */
  var navItems = $$('.nav__item[data-menu]');
  function closeMenus(except) {
    navItems.forEach(function (it) {
      if (it === except) return;
      it.classList.remove('is-open');
      var b = $('.nav__btn', it); if (b) b.setAttribute('aria-expanded', 'false');
    });
  }
  navItems.forEach(function (it) {
    var btn = $('.nav__btn', it);
    if (!btn) return;
    btn.addEventListener('click', function () {
      var open = !it.classList.contains('is-open');
      closeMenus(it);
      it.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    it.addEventListener('focusout', function (e) { if (!it.contains(e.relatedTarget)) { it.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); } });
  });
  d.addEventListener('click', function (e) { if (!e.target.closest('.nav__item[data-menu]')) closeMenus(); });
  d.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var open = $('.nav__item.is-open');
    if (open) { closeMenus(); var b = $('.nav__btn', open); if (b) b.focus(); }
  });

  /* ---------- Mobile Navigation ---------- */
  var burger = $('.hdr__burger'), mnav = $('#mnav');
  function setMnav(open) {
    if (!burger || !mnav) return;
    mnav.classList.toggle('is-open', open);
    mnav.hidden = false;
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    d.body.classList.toggle('nav-open', open);
    if (open) { var f = $('a, summary, button', mnav); if (f) f.focus(); }
    else if (!reduced) setTimeout(function () { if (!mnav.classList.contains('is-open')) mnav.hidden = true; }, 260);
    else mnav.hidden = true;
  }
  if (burger && mnav) {
    burger.addEventListener('click', function () { setMnav(burger.getAttribute('aria-expanded') !== 'true'); });
    mnav.addEventListener('click', function (e) { if (e.target.closest('a')) setMnav(false); });
    d.addEventListener('keydown', function (e) {
      if (!mnav.classList.contains('is-open')) return;
      if (e.key === 'Escape') { setMnav(false); burger.focus(); return; }
      if (e.key === 'Tab') { // Fokusfalle: Panel + Menü-Button
        var items = [burger].concat($$('a[href], summary, button:not([disabled])', mnav));
        var first = items[0], last = items[items.length - 1];
        if (e.shiftKey && d.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && d.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    w.addEventListener('resize', function () { if (w.innerWidth >= 1180 && mnav.classList.contains('is-open')) setMnav(false); });
  }

  /* ---------- Scroll-Reveal ---------- */
  var reveals = $$('[data-reveal]');
  if (reveals.length) {
    if (!('IntersectionObserver' in w) || reduced) reveals.forEach(function (el) { el.classList.add('is-in'); });
    else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
      }, { rootMargin: '0px 0px -6% 0px', threshold: 0.08 });
      reveals.forEach(function (el) { io.observe(el); });
      // Sicherheitsnetz: nichts bleibt dauerhaft unsichtbar
      w.addEventListener('load', function () { setTimeout(function () { reveals.forEach(function (el) { var r = el.getBoundingClientRect(); if (r.top < w.innerHeight) el.classList.add('is-in'); }); }, 300); });
    }
  }

  /* ---------- Dialoge (auch Schnittstelle für den Kalkulator) ---------- */
  var lastFocus = null;
  w.openModal = function (id) {
    var dlg = d.getElementById(id); if (!dlg) return;
    lastFocus = d.activeElement;
    if (typeof dlg.showModal === 'function' && !dlg.open) dlg.showModal(); else dlg.setAttribute('open', '');
    dlg.classList.add('open');
  };
  w.closeModal = function (id) {
    var dlg = d.getElementById(id); if (!dlg) return;
    if (typeof dlg.close === 'function' && dlg.open) dlg.close(); else dlg.removeAttribute('open');
    dlg.classList.remove('open');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  };
  $$('dialog.dlg').forEach(function (dlg) {
    dlg.addEventListener('click', function (e) { if (e.target === dlg) w.closeModal(dlg.id); }); // Klick auf Hintergrund
    dlg.addEventListener('close', function () { dlg.classList.remove('open'); });
  });
  d.addEventListener('click', function (e) {
    var c = e.target.closest('[data-close]');
    if (c) { var dlg = c.closest('dialog'); if (dlg) w.closeModal(dlg.id); }
    var o = e.target.closest('[data-open]');
    if (o) { e.preventDefault(); w.openModal(o.getAttribute('data-open')); }
  });

  /* ---------- Einwilligung (Google Maps, optional Statistik) ---------- */
  var banner = $('#consent');
  function getConsent() { try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; } }
  function loadMaps() {
    $$('.map-ph[data-src]').forEach(function (ph) {
      var f = d.createElement('iframe');
      f.src = ph.getAttribute('data-src');
      f.className = 'map-frame';
      f.title = ph.getAttribute('data-title') || 'Karte';
      f.loading = 'lazy';
      f.referrerPolicy = 'no-referrer-when-downgrade';
      f.setAttribute('allowfullscreen', '');
      ph.replaceWith(f);
    });
  }
  function loadAnalytics() {
    var id = w.EP_CONFIG && w.EP_CONFIG.ga4;
    if (!id || w.gtag) return; // ohne konfigurierte Mess-ID wird nichts geladen
    var s = d.createElement('script'); s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id); d.head.appendChild(s);
    w.gtag = function () { w.dataLayer.push(arguments); };
    w.gtag('js', new Date()); w.gtag('config', id);
  }
  function applyConsent(v) { if (v === 'all') { loadMaps(); loadAnalytics(); } }
  function showBanner(show) {
    if (!banner) return;
    banner.hidden = !show;
    d.body.classList.toggle('has-consent', show);
    if (show) html.style.setProperty('--consent-h', (banner.offsetHeight + 12) + 'px');
  }
  w.setCookieConsent = function (v) { // auch für ältere Aufrufe
    try { localStorage.setItem(CONSENT_KEY, v); } catch (e) {}
    showBanner(false);
    applyConsent(v);
  };
  d.addEventListener('click', function (e) {
    var c = e.target.closest('[data-consent]');
    if (c) { e.preventDefault(); w.setCookieConsent(c.getAttribute('data-consent')); }
    if (e.target.closest('[data-consent-open]')) { e.preventDefault(); showBanner(true); var b = $('button', banner); if (b) b.focus(); }
  });
  var consent = getConsent();
  if (consent) applyConsent(consent);
  else if (banner && ($('[data-consent-required]') || (w.EP_CONFIG && w.EP_CONFIG.ga4))) showBanner(true);

  /* ---------- Alte Modal-Links (#impressum …) auf neue Rechtsseiten ---------- */
  var legacy = { '#impressum': '/impressum/', '#agb': '/agb/', '#datenschutz': '/datenschutz/' };
  if (legacy[w.location.hash]) w.location.replace(legacy[w.location.hash]);

  /* ---------- Bildschutz (Deterrent, nur Bilder – Text bleibt nutzbar) ---------- */
  d.addEventListener('contextmenu', function (e) { if (e.target.tagName === 'IMG') e.preventDefault(); });
  d.addEventListener('dragstart', function (e) { if (e.target.tagName === 'IMG') e.preventDefault(); });

  /* ---------- Formulare: Validierung, Doppelversand, Tracking ---------- */
  $$('form[data-validate]').forEach(function (form) {
    form.setAttribute('novalidate', '');
    form.addEventListener('submit', function (e) {
      var firstBad = null;
      $$('.field', form).forEach(function (f) {
        var inp = $('input, select, textarea', f);
        if (!inp || inp.type === 'hidden') return;
        var ok = inp.checkValidity();
        f.classList.toggle('is-invalid', !ok);
        inp.setAttribute('aria-invalid', ok ? 'false' : 'true');
        if (!ok && !firstBad) firstBad = inp;
      });
      $$('input[type=checkbox][required]', form).forEach(function (cb) { if (!cb.checked && !firstBad) firstBad = cb; });
      if (firstBad) { e.preventDefault(); firstBad.focus(); return; }
      var btn = $('button[type=submit]', form);
      if (btn) { btn.disabled = true; btn.setAttribute('aria-busy', 'true'); }
      var ev = form.getAttribute('data-track-submit');
      if (ev) track(ev, { form: form.getAttribute('data-form') || ev });
    });
    form.addEventListener('input', function (e) {
      var f = e.target.closest('.field');
      if (f && f.classList.contains('is-invalid') && e.target.checkValidity()) { f.classList.remove('is-invalid'); e.target.setAttribute('aria-invalid', 'false'); }
    });
  });

  /* ---------- Lightbox (Referenzen) ---------- */
  var lb = $('#lightbox');
  if (lb) {
    var items = $$('[data-lb]'), idx = 0;
    var img = $('img', lb), cap = $('.lightbox__cap', lb), cnt = $('.lightbox__count', lb);
    var show = function (i) {
      idx = (i + items.length) % items.length;
      var it = items[idx];
      img.src = it.getAttribute('data-lb'); img.alt = it.getAttribute('data-alt') || '';
      cap.textContent = it.getAttribute('data-cap') || '';
      cnt.textContent = (idx + 1) + ' / ' + items.length;
    };
    items.forEach(function (it, i) { it.addEventListener('click', function () { show(i); lastFocus = it; lb.showModal ? lb.showModal() : lb.setAttribute('open', ''); }); });
    $('.lb-prev', lb).addEventListener('click', function () { show(idx - 1); });
    $('.lb-next', lb).addEventListener('click', function () { show(idx + 1); });
    $('.lb-close', lb).addEventListener('click', function () { lb.close(); });
    lb.addEventListener('keydown', function (e) { if (e.key === 'ArrowRight') show(idx + 1); if (e.key === 'ArrowLeft') show(idx - 1); });
    lb.addEventListener('close', function () { if (lastFocus) lastFocus.focus(); });
  }

  /* ---------- Ratgeber: Lesefortschritt & aktives Inhaltsverzeichnis ---------- */
  var bar = $('.read-progress'), art = $('.prose[data-article]');
  if (bar && art) {
    var upd = function () {
      var r = art.getBoundingClientRect(), total = art.offsetHeight - w.innerHeight;
      var p = total > 0 ? Math.min(Math.max(-r.top / total, 0), 1) : 0;
      bar.style.transform = 'scaleX(' + p + ')';
    };
    w.addEventListener('scroll', upd, { passive: true }); upd();
  }
  var tocLinks = $$('.toc a[href^="#"]');
  if (tocLinks.length && 'IntersectionObserver' in w) {
    var map = {};
    tocLinks.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var tio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { tocLinks.forEach(function (a) { a.classList.remove('is-active'); }); var a = map[en.target.id]; if (a) a.classList.add('is-active'); }
      });
    }, { rootMargin: '0px 0px -70% 0px' });
    Object.keys(map).forEach(function (id) { var h = d.getElementById(id); if (h) tio.observe(h); });
  }
})();

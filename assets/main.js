/* ============================================================
   EUROPANEEL — Shared front-end behaviour
   Every block guards for element existence, so one file is safe
   on every page.
   ============================================================ */
(function () {
    'use strict';

    /* ---------- MOBILE NAV ---------- */
    var burger = document.querySelector('[data-menu-toggle]');
    var navLinks = document.getElementById('navLinks');
    function closeMenu() {
        if (navLinks) navLinks.classList.remove('open');
        if (burger) burger.setAttribute('aria-expanded', 'false');
    }
    if (burger && navLinks) {
        burger.addEventListener('click', function () {
            var open = navLinks.classList.toggle('open');
            burger.setAttribute('aria-expanded', open ? 'true' : 'false');
            burger.querySelector('i').className = open ? 'fas fa-xmark' : 'fas fa-bars';
        });
        navLinks.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', function () {
                closeMenu();
                var i = burger.querySelector('i'); if (i) i.className = 'fas fa-bars';
            });
        });
        window.addEventListener('resize', function () {
            if (window.innerWidth > 860) { closeMenu(); var i = burger.querySelector('i'); if (i) i.className = 'fas fa-bars'; }
        });
    }

    /* ---------- HEADER SHRINK + SCROLL PROGRESS + PARALLAX ---------- */
    var header = document.querySelector('.site-header');
    var progress = null;
    if (document.querySelector('.hero, .page-hero, .contact-hero, .calc-hero') || header) {
        progress = document.createElement('div');
        progress.className = 'scroll-progress';
        document.body.appendChild(progress);
    }
    var parallaxEls = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var ticking = false;
    function onScroll() {
        var y = window.scrollY || window.pageYOffset;
        if (header) header.classList.toggle('scrolled', y > 20);
        if (progress) {
            var h = document.documentElement.scrollHeight - window.innerHeight;
            progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
        }
        if (!reduceMotion) {
            parallaxEls.forEach(function (el) {
                var speed = parseFloat(el.getAttribute('data-parallax')) || 0.15;
                el.style.transform = 'translate3d(0,' + (y * speed) + 'px,0)';
            });
        }
        ticking = false;
    }
    function requestScroll() { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }
    onScroll();
    window.addEventListener('scroll', requestScroll, { passive: true });
    window.addEventListener('resize', requestScroll);

    /* ---------- SCROLL REVEAL (IO + scroll fallback, never stuck hidden) ---------- */
    var revealEls = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
    var counters = Array.prototype.slice.call(document.querySelectorAll('[data-target]'));

    function inView(el, factor) {
        var r = el.getBoundingClientRect();
        var vh = window.innerHeight || document.documentElement.clientHeight;
        return r.top < vh * (factor || 0.92) && r.bottom > 0;
    }

    function runCounter(el) {
        if (el.__counted) return; el.__counted = true;
        var target = +el.getAttribute('data-target');
        var dur = 1600, start = null;
        var step = function (ts) {
            if (!start) start = ts;
            var p = Math.min((ts - start) / dur, 1);
            var eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * eased).toLocaleString('de-DE');
            if (p < 1) requestAnimationFrame(step);
            else el.textContent = target.toLocaleString('de-DE');
        };
        requestAnimationFrame(step);
    }

    if (revealEls.length || counters.length) {
        if ('IntersectionObserver' in window) {
            if (revealEls.length) {
                var io = new IntersectionObserver(function (entries, obs) {
                    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); } });
                }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
                revealEls.forEach(function (el) { io.observe(el); });
            }
            if (counters.length) {
                var co = new IntersectionObserver(function (entries, obs) {
                    entries.forEach(function (e) { if (e.isIntersecting) { runCounter(e.target); obs.unobserve(e.target); } });
                }, { threshold: 0.5 });
                counters.forEach(function (c) { co.observe(c); });
            }
        }
        // Independent scroll/resize/load fallback — guarantees visibility even if IO never fires
        var sweep = function () {
            revealEls = revealEls.filter(function (el) {
                if (inView(el)) { el.classList.add('is-visible'); return false; }
                return true;
            });
            counters = counters.filter(function (el) {
                if (inView(el, 0.85)) { runCounter(el); return false; }
                return true;
            });
        };
        window.addEventListener('scroll', sweep, { passive: true });
        window.addEventListener('resize', sweep);
        window.addEventListener('load', sweep);
        sweep();
    }

    /* ---------- FAQ ACCORDION ---------- */
    window.toggleFaq = function (btn) {
        var item = btn.closest('.faq-item');
        var answer = btn.nextElementSibling;
        var isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(function (it) {
            it.classList.remove('open');
            var a = it.querySelector('.faq-answer'); if (a) a.style.maxHeight = null;
        });
        if (!isOpen) {
            item.classList.add('open');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    };

    /* ---------- LEGAL MODALS ---------- */
    window.openModal = function (id) {
        var m = document.getElementById(id);
        if (!m) return;
        m.classList.add('open');
        document.body.style.overflow = 'hidden';
    };
    window.closeModal = function (id) {
        var m = document.getElementById(id);
        if (!m) return;
        m.classList.remove('open');
        document.body.style.overflow = '';
    };
    document.addEventListener('click', function (e) {
        if (e.target.classList && e.target.classList.contains('modal')) {
            e.target.classList.remove('open');
            document.body.style.overflow = '';
        }
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.open').forEach(function (m) { m.classList.remove('open'); });
            document.body.style.overflow = '';
        }
    });
    // Open a legal modal when arriving via #impressum / #agb / #datenschutz
    var hashMap = { '#impressum': 'modal-impressum', '#agb': 'modal-agb', '#datenschutz': 'modal-datenschutz' };
    function openFromHash() {
        var id = hashMap[window.location.hash];
        if (id && document.getElementById(id)) window.openModal(id);
    }
    openFromHash();
    window.addEventListener('hashchange', openFromHash);

    /* ---------- COOKIE CONSENT (Maps + reCAPTCHA) ---------- */
    function loadMaps() {
        document.querySelectorAll('.map-placeholder').forEach(function (el) {
            var iframe = document.createElement('iframe');
            iframe.src = el.getAttribute('data-src');
            iframe.width = '100%';
            iframe.height = el.getAttribute('data-height') || '450';
            iframe.style.cssText = el.getAttribute('data-style') || 'border:0;';
            iframe.setAttribute('allowfullscreen', '');
            iframe.setAttribute('loading', 'lazy');
            iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
            iframe.title = 'Standort Europaneel GmbH';
            el.replaceWith(iframe);
        });
    }
    function loadRecaptcha() {
        if (document.querySelector('.g-recaptcha') && !document.querySelector('script[src*="recaptcha"]')) {
            var s = document.createElement('script');
            s.src = 'https://www.google.com/recaptcha/api.js';
            s.async = true; s.defer = true;
            document.head.appendChild(s);
        }
    }
    window.epConsent = { loadMaps: loadMaps, loadRecaptcha: loadRecaptcha };

    window.setCookieConsent = function (choice) {
        try { localStorage.setItem('ep_consent', choice); } catch (e) {}
        var banner = document.getElementById('cookieBanner');
        if (banner) banner.style.display = 'none';
        if (choice === 'all') { loadMaps(); loadRecaptcha(); }
        document.dispatchEvent(new CustomEvent('ep:consent', { detail: choice }));
    };

    var consent = null;
    try { consent = localStorage.getItem('ep_consent'); } catch (e) {}
    if (!consent) {
        var banner = document.getElementById('cookieBanner');
        if (banner) banner.style.display = 'block';
    } else if (consent === 'all') {
        loadMaps(); loadRecaptcha();
    }
})();

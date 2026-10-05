// Bausteine & Layout für den Seitengenerator.
// Seiten-Module importieren die Helfer und rufen sie in render() auf;
// der Build setzt vorher den aktuellen Seitenkontext (CUR).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE, CTA, NAV, FOOTER } from './site.config.mjs';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const IMAGES = JSON.parse(fs.readFileSync(path.join(ROOT, '_build/images.json'), 'utf8'));
export const USED_ICONS = new Set();
export const SPRITE_V = '__SPRITE_V__';
let CUR = null;
export const setCtx = (c) => { CUR = c; };

export const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const strip = (h) => String(h).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const abs = (p) => SITE.url + p;

/* ---------------------------------------------------------------- Basis */
export function icon(name, cls = '') {
  USED_ICONS.add(name);
  return `<svg class="icon${cls ? ' ' + cls : ''}" aria-hidden="true" focusable="false"><use href="/assets/icons.svg?v=${SPRITE_V}#i-${name}"></use></svg>`;
}
const ARROW = () => icon('arrow-right', 'icon--arrow');

export function pic(slug, o = {}) {
  const m = IMAGES.photos[slug];
  if (!m) throw new Error(`Bild unbekannt: ${slug}`);
  const sizes = o.sizes || '(min-width: 1240px) 620px, (min-width: 1024px) 50vw, 100vw';
  const set = (ext) => m.widths.map((w) => `/assets/img/${slug}-${w}.${ext} ${w}w`).join(', ');
  const fallbackW = m.widths.includes(1200) ? 1200 : m.widths[m.widths.length - 1];
  const alt = o.alt ?? m.alt;
  if (o.eager && CUR) CUR.preloads.push(`<link rel="preload" as="image" type="image/avif" imagesrcset="${set('avif')}" imagesizes="${sizes}" fetchpriority="high">`);
  return `<picture><source type="image/avif" srcset="${set('avif')}" sizes="${sizes}"><source type="image/webp" srcset="${set('webp')}" sizes="${sizes}">`
    + `<img src="/assets/img/${slug}-${fallbackW}.webp" width="${m.width}" height="${m.height}" alt="${esc(alt)}"${o.eager ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async"${o.cls ? ` class="${o.cls}"` : ''}${o.pos ? ` style="object-position:${o.pos}"` : ''}></picture>`;
}
export const imgSrc = (slug, w = 1600) => {
  const m = IMAGES.photos[slug]; const width = m.widths.includes(w) ? w : m.widths[m.widths.length - 1];
  return `/assets/img/${slug}-${width}.webp`;
};
export const imgAlt = (slug) => IMAGES.photos[slug].alt;

export function fig(slug, o = {}) {
  const ratio = o.ratio || '43';
  const cap = o.cap ? `<figcaption>${o.n ? `<b>Abb. ${String(o.n).padStart(2, '0')}</b>` : ''}<span>${o.cap}</span></figcaption>` : '';
  return `<figure class="fig fig--${ratio}${o.cls ? ' ' + o.cls : ''}"${o.reveal ? ' data-reveal' : ''}><div class="fig__frame">${o.corners ? '<span class="corners" aria-hidden="true"></span>' : ''}<div class="fig__img">${pic(slug, o)}</div></div>${cap}</figure>`;
}

export function btn(label, href, o = {}) {
  const v = o.variant || 'primary';
  const ic = o.icon === false ? '' : (o.icon ? icon(o.icon) : ARROW());
  return `<a class="btn btn--${v}${o.size ? ' btn--' + o.size : ''}${o.block ? ' btn--block' : ''}" href="${href}"${o.attrs ? ' ' + o.attrs : ''}>${o.iconLeft ? icon(o.iconLeft) : ''}${label}${o.iconLeft ? '' : ic}</a>`;
}
export const linkArrow = (label, href) => `<a class="link-arrow" href="${href}">${label}${icon('arrow-right')}</a>`;

/* CTA-System: ① konfigurieren · ② anfragen · ③ anrufen */
export function ctas(o = {}) {
  const parts = [];
  const p1 = btn(CTA.primary.label, o.primaryHref || CTA.primary.href, { variant: o.lead === 'secondary' ? (o.dark ? 'ghost-light' : 'outline') : 'primary', icon: o.lead === 'secondary' ? false : undefined });
  const p2 = btn(CTA.secondary.label, CTA.secondary.href, { variant: o.lead === 'secondary' ? 'primary' : (o.dark ? 'ghost-light' : 'outline'), icon: o.lead === 'secondary' ? undefined : false });
  if (o.lead === 'secondary') { if (o.secondary !== false) parts.push(p2); if (o.primary !== false) parts.push(p1); }
  else { if (o.primary !== false) parts.push(p1); if (o.secondary !== false) parts.push(p2); }
  if (o.tel) parts.push(`<a class="tel-line" href="${SITE.phone.href}">${icon('phone')}${CTA.tertiary.label}: ${SITE.phone.display}</a>`);
  return `<div class="btn-row">${parts.join('')}</div>`;
}

export function secHead(o) {
  const t = o.tag || 'h2';
  const id = o.id ? ` id="${o.id}"` : '';
  return `<header class="sec-head${o.stack ? ' sec-head--stack' : ''}" data-reveal><div>${o.eyebrow ? `<p class="eyebrow">${o.eyebrow}</p>` : ''}<${t}${id}>${o.title}</${t}></div>${o.text ? `<p>${o.text}</p>` : ''}</header>`;
}

export const facts = (rows, cls = '') => `<dl class="facts ${cls}" data-reveal>${rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>`;
export const checks = (items) => `<ul class="checks">${items.map((t) => `<li>${icon('circle-check')}<span>${t}</span></li>`).join('')}</ul>`;
export const points = (items) => `<ol class="points">${items.map(([h, p]) => `<li><div><h3>${h}</h3><p>${p}</p></div></li>`).join('')}</ol>`;
export const steps = (items) => `<ol class="steps" data-reveal>${items.map(([h, p]) => `<li><div><h3>${h}</h3><p>${p}</p></div></li>`).join('')}</ol>`;
export const note = (label, html, v = '', ic = 'info') => `<aside class="note${v ? ' note--' + v : ''}"><p class="note__label">${icon(ic)}${label}</p>${html.startsWith('<') ? html : `<p>${html}</p>`}</aside>`;
export const chip = (t, v = '') => `<span class="chip${v ? ' chip--' + v : ''}">${t}</span>`;

export function spec(rows, caption) {
  return `<table class="spec">${caption ? `<caption>${caption}</caption>` : ''}<tbody>${rows.map(([k, v]) => `<tr><th scope="row">${k}</th><td>${v}</td></tr>`).join('')}</tbody></table>`;
}
export function cmp(head, rows, o = {}) {
  return `<div class="table-wrap"${o.label ? ` role="region" aria-label="${esc(o.label)}" tabindex="0"` : ''}><table class="cmp">${o.caption ? `<caption class="sr-only">${o.caption}</caption>` : ''}<thead><tr>${head.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr><th scope="row">${r[0]}</th>${r.slice(1).map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>${o.note ? `<p class="table-note">${o.note}</p>` : ''}`;
}

/* FAQ – sichtbar als details/summary, automatisch als FAQPage-Schema */
export function faq(items, o = {}) {
  if (CUR && o.schema !== false) CUR.faqItems.push(...items);
  const name = o.name || 'faq';
  return `<div class="faq" data-reveal>${items.map((it) => `<details name="${name}"><summary>${it.q}${icon('plus')}</summary><div class="faq__a">${it.a.startsWith('<') ? it.a : `<p>${it.a}</p>`}</div></details>`).join('')}</div>`;
}

export function related(items, title = 'Weiterführend') {
  return `<nav class="related" aria-label="${esc(title)}">${items.map((r) => `<a href="${r.href}"><small>${r.tag}</small><b>${r.title}${icon('arrow-up-right')}</b>${r.text ? `<span>${r.text}</span>` : ''}</a>`).join('')}</nav>`;
}

export function ctaBand(o = {}) {
  const title = o.title || 'Ihre Kühlzelle – in wenigen Minuten zum Richtpreis.';
  const text = o.text || 'Konfigurieren Sie Maße, Boden und Tür online und sehen Sie sofort einen Netto-Richtpreis – ohne Registrierung. Oder schildern Sie uns Ihr Projekt, wir melden uns mit einem schriftlichen Angebot.';
  return `<section class="cta-band" aria-labelledby="cta-t" data-track-pos="cta-band"><div class="container cta-band__in"><div data-reveal><h2 id="cta-t">${title}</h2><p>${text}</p></div>`
    + `<div class="cta-band__act" data-reveal data-reveal-d="1">${o.lead === 'secondary'
      ? btn(CTA.secondary.label, CTA.secondary.href, { variant: 'primary' }) + btn(CTA.primary.label, o.primaryHref || CTA.primary.href, { variant: 'ghost-light', icon: false })
      : btn(CTA.primary.label, o.primaryHref || CTA.primary.href, { variant: 'primary' }) + btn(CTA.secondary.label, CTA.secondary.href, { variant: 'ghost-light', icon: false })}`
    + `<a class="cta-band__tel" href="${SITE.phone.href}">${icon('phone')}${CTA.tertiary.label}: ${SITE.phone.display}</a></div></div></section>`;
}

export function mapBlock(title = 'Standort der Europaneel GmbH in Bottrop') {
  if (CUR) CUR.consent = true;
  return `<div class="map-ph" data-consent-required data-src="${SITE.mapsEmbed}" data-title="${esc(title)}"><div>${icon('map')}<p>Die Karte wird von Google Maps geladen – erst nach Ihrer Zustimmung.</p>`
    + `<div class="btn-row" style="justify-content:center"><button class="btn btn--dark btn--sm" type="button" data-consent="all">Karte laden</button><a class="btn btn--outline btn--sm" href="${SITE.mapsLink}" target="_blank" rel="noopener">In Google Maps öffnen${icon('arrow-up-right')}</a></div></div></div>`;
}

export function heroCrumbs() {
  if (!CUR || !CUR.page) return '';
  CUR.crumbsDone = true;
  return renderCrumbs(CUR.page);
}

export function pageHero(o) {
  const crumbs = CUR && CUR.page ? renderCrumbs(CUR.page) : '';
  if (CUR) CUR.crumbsDone = true;
  const media = o.photo ? fig(o.photo, { n: 1, cap: o.cap, eager: true, corners: true, ratio: o.ratio || '43', pos: o.pos, alt: o.alt, sizes: '(min-width: 1240px) 620px, (min-width: 1024px) 50vw, 100vw' }) : (o.aside || '');
  return `<section class="phero blueprint" aria-labelledby="page-t">${crumbs}<div class="container"><div class="phero__grid${o.photo ? '' : ' phero__grid--text'}"><div>`
    + `${o.eyebrow ? `<p class="eyebrow">${o.eyebrow}</p>` : ''}<h1 id="page-t">${o.title}</h1>${o.lead ? `<p class="lead">${o.lead}</p>` : ''}`
    + `${o.ctas === false ? '' : ctas(o.ctas || {})}${o.after || ''}</div>${media}</div></div></section>`;
}

/* Ratgeber-Artikel: Fließtext + Inhaltsverzeichnis (h2 mit id) + Lesezeit */
export function readingTime(html) {
  return Math.max(1, Math.round(strip(html).split(' ').length / 200));
}
export function articleBody(html, o = {}) {
  const toc = [...html.matchAll(/<h2 id="([^"]+)">([\s\S]*?)<\/h2>/g)].map((m) => [m[1], strip(m[2])]);
  return `<section class="sec--sm"><div class="container article">
<div class="prose" data-article>${html}</div>
<aside class="toc" aria-label="Inhaltsverzeichnis"><b>Inhalt</b><ol>${toc.map(([id, t]) => `<li><a href="#${id}">${t}</a></li>`).join('')}</ol>
${o.asideCta === false ? '' : `<a class="mega__tool toc__tool" href="${CTA.primary.href}"><span><span class="eyebrow">Online-Tool</span><b>Richtpreis berechnen</b><small>Kühlzelle konfigurieren – ohne Registrierung.</small></span><span class="link-arrow">${CTA.primary.label}${icon('arrow-right')}</span></a>`}</aside>
</div></section>`;
}

export const napHtml = () => `<address class="nap">${SITE.legalName}<br>${SITE.address.street}<br>${SITE.address.zip} ${SITE.address.city}, ${SITE.address.countryName}</address>`;

/* ---------------------------------------------------------------- Layout */
function navLinkCurrent(href, page) { return page.path === href || (href !== '/' && page.path.startsWith(href) && href.endsWith('/')); }

function renderHeader(page) {
  const sol = NAV.solutions, ind = NAV.industries;
  const solCurrent = sol.cols.some((c) => c.links.some((l) => navLinkCurrent(l.href, page) && !['/referenzen/', '/ratgeber/'].includes(l.href)));
  const indCurrent = page.path.startsWith('/branchen/');
  const megaCols = sol.cols.map((c) => `<div class="mega__col"><p class="mega__title">${c.title}</p>${c.links.map((l) => `<a class="mega__link" href="${l.href}"${page.path === l.href ? ' aria-current="page"' : ''}>${icon(l.icon)}<span><b>${l.label}</b><small>${l.desc}</small></span></a>`).join('')}</div>`).join('');
  const tool = `<a class="mega__tool" href="${CTA.primary.href}"><span><span class="eyebrow">Online-Tool</span><b>Kühlzellen-Kalkulator</b><small>Maße, Boden und Tür wählen – Netto-Richtpreis sofort, ohne Registrierung.</small></span><span class="link-arrow">${CTA.primary.label}${icon('arrow-right')}</span></a>`;
  const drop = ind.links.map((l) => `<a class="mega__link" href="${l.href}"${page.path === l.href ? ' aria-current="page"' : ''}>${icon(l.icon)}<span><b>${l.label}</b><small>${l.desc}</small></span></a>`).join('');
  const links = NAV.links.map((l) => `<li><a class="nav__link" href="${l.href}"${navLinkCurrent(l.href, page) ? ' aria-current="page"' : ''}>${l.label}</a></li>`).join('');
  return `<a class="skip" href="#main">Zum Inhalt springen</a>
<header class="hdr" data-track-pos="header"><div class="container hdr__in">
<a class="hdr__logo" href="/" aria-label="Europaneel GmbH – zur Startseite"><img src="/assets/img/europaneel-logo-360.webp" srcset="/assets/img/europaneel-logo-360.webp 360w, /assets/img/europaneel-logo.webp 720w" sizes="180px" width="720" height="${Math.round(720 * IMAGES.logo.height / IMAGES.logo.width)}" alt="Europaneel GmbH – Isoliertüren &amp; Kühlraumbau"></a>
<nav class="nav" aria-label="Hauptnavigation"><ul class="nav__list">
<li class="nav__item${solCurrent ? ' is-current' : ''}" data-menu><button class="nav__btn" type="button" aria-expanded="false" aria-controls="m-sol">${sol.label}${icon('chevron-down')}</button><div class="mega" id="m-sol">${megaCols}${tool}</div></li>
<li class="nav__item${indCurrent ? ' is-current' : ''}" data-menu><button class="nav__btn" type="button" aria-expanded="false" aria-controls="m-ind">${ind.label}${icon('chevron-down')}</button><div class="drop" id="m-ind">${drop}</div></li>
${links}</ul></nav>
<div class="hdr__actions"><a class="hdr__phone" href="${SITE.phone.href}">${icon('phone')}${SITE.phone.display}</a><a class="hdr__call" href="${SITE.phone.href}" aria-label="Anrufen: ${SITE.phone.display}">${icon('phone')}</a>${btn(CTA.primary.label, CTA.primary.href, { size: 'sm', icon: false })}<button class="hdr__burger" type="button" aria-expanded="false" aria-controls="mnav" aria-label="Menü öffnen"><span></span></button></div>
</div></header>
<div class="mnav" id="mnav" hidden data-track-pos="mobile-nav"><div class="mnav__body">
<details class="mnav__group"${solCurrent ? ' open' : ''}><summary>${sol.label}${icon('chevron-down')}</summary><ul class="mnav__sub">${sol.cols.flatMap((c) => c.links).map((l) => `<li><a href="${l.href}">${icon(l.icon)}${l.label}</a></li>`).join('')}</ul></details>
<details class="mnav__group"${indCurrent ? ' open' : ''}><summary>${ind.label}${icon('chevron-down')}</summary><ul class="mnav__sub">${ind.links.map((l) => `<li><a href="${l.href}">${icon(l.icon)}${l.label}</a></li>`).join('')}</ul></details>
${NAV.links.map((l) => `<a class="mnav__link" href="${l.href}">${l.label}${icon('chevron-right')}</a>`).join('')}
<a class="mnav__link" href="${CTA.primary.href}">Kühlzellen-Kalkulator${icon('chevron-right')}</a>
</div><div class="mnav__foot"><a class="btn btn--outline" href="${SITE.phone.href}">${icon('phone')}Anrufen</a>${btn('Konfigurieren', CTA.primary.href, { icon: false })}</div></div>`;
}

function renderCrumbs(page) {
  if (!page.crumbs) return '';
  const items = [['Start', '/'], ...page.crumbs];
  return `<nav class="crumbs container" aria-label="Brotkrumen"><ol>${items.map(([t, h], i) => i === items.length - 1 ? `<li aria-current="page">${t}</li>` : `<li><a href="${h}">${t}</a></li>`).join('')}</ol></nav>`;
}

function renderFooter() {
  const year = new Date().getFullYear();
  return `<footer class="ftr" data-track-pos="footer"><div class="container ftr__grid">
<div class="ftr__brand"><a class="ftr__logo" href="/" aria-label="Europaneel GmbH – zur Startseite"><img src="/assets/img/europaneel-logo-light-360.webp" srcset="/assets/img/europaneel-logo-light-360.webp 360w, /assets/img/europaneel-logo-light.webp 720w" sizes="190px" width="720" height="${Math.round(720 * IMAGES.logo.height / IMAGES.logo.width)}" alt="Europaneel GmbH" loading="lazy"></a>
<p class="ftr__claim">Kühlzellen, Tiefkühlzellen und Kühlhäuser – geplant, geliefert und montiert. Mit Lager und Abholung in Bottrop.</p>
<address>${SITE.legalName}<br>${SITE.address.street}<br>${SITE.address.zip} ${SITE.address.city}<br><a href="${SITE.phone.href}">${SITE.phone.display}</a><br><a href="mailto:${SITE.email}">${SITE.email}</a><br>${SITE.hours.text}</address></div>
${FOOTER.cols.map((c) => `<div><h2>${c.title}</h2><ul>${c.links.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join('')}</ul></div>`).join('')}
</div><div class="container ftr__bottom"><span>© ${year} ${SITE.legalName} · Alle Rechte vorbehalten. Texte, Fotos und Kalkulator sind urheberrechtlich geschützt.</span><button class="ftr__btn" type="button" data-consent-open>Cookie-Einstellungen</button></div></footer>`;
}

function renderConsent() {
  const stats = !!SITE.ga4;
  return `<div class="consent" id="consent" role="dialog" aria-labelledby="consent-t" aria-describedby="consent-d" hidden>
<h2 id="consent-t">${icon('cookie')}Externe Dienste</h2>
<p id="consent-d">Für die Kartenansicht binden wir Google Maps${stats ? ' und zur Reichweitenmessung Google Analytics' : ''} erst nach Ihrer Zustimmung ein. Dabei können Daten an Google übermittelt werden. Ihre Wahl können Sie jederzeit unter „Cookie-Einstellungen“ ändern. <a href="/datenschutz/">Datenschutzerklärung</a></p>
<div class="consent__btns"><button class="btn btn--outline btn--sm" type="button" data-consent="necessary">Nur notwendige</button><button class="btn btn--outline btn--sm" type="button" data-consent="all">Alle akzeptieren</button></div></div>`;
}

/* --------------------------------------------------------- Strukturierte Daten */
const ORG_ID = `${SITE.url}/#organization`, WEB_ID = `${SITE.url}/#website`;
export function orgNode() {
  return {
    '@type': 'LocalBusiness', '@id': ORG_ID, name: SITE.legalName, legalName: SITE.legalName, alternateName: 'EuroPaneel – Isoliertüren & Kühlraumbau',
    url: SITE.url + '/', logo: { '@type': 'ImageObject', url: SITE.url + '/assets/img/europaneel-logo.png', width: IMAGES.logo.width, height: IMAGES.logo.height },
    image: SITE.url + imgSrc('europaneel-standort-bottrop'), telephone: SITE.phone.schema, email: SITE.email, vatID: SITE.vatID,
    address: { '@type': 'PostalAddress', streetAddress: SITE.address.street, postalCode: SITE.address.zip, addressLocality: SITE.address.city, addressRegion: SITE.address.region, addressCountry: SITE.address.country },
    geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng }, hasMap: SITE.mapsLink,
    openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: SITE.hours.days, opens: SITE.hours.opens, closes: SITE.hours.closes }],
    contactPoint: [{ '@type': 'ContactPoint', contactType: 'sales', telephone: SITE.phone.schema, email: SITE.email, areaServed: SITE.areaServed, availableLanguage: ['de'] }],
    areaServed: SITE.areaServed.map((c) => ({ '@type': 'Country', name: c })),
    knowsAbout: ['Kühlzellen', 'Tiefkühlzellen', 'Kühlhausbau', 'Sandwichpaneele', 'Kühlhaustüren', 'Isoliertüren', 'Kälteaggregate'],
    ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
  };
}
function schemaGraph(page, ctx) {
  const url = abs(page.path);
  const g = [orgNode(), { '@type': 'WebSite', '@id': WEB_ID, url: SITE.url + '/', name: 'Europaneel', inLanguage: 'de-DE', publisher: { '@id': ORG_ID } }];
  const wp = { '@type': page.pageType || 'WebPage', '@id': url + '#webpage', url, name: page.title, description: page.description, inLanguage: 'de-DE', isPartOf: { '@id': WEB_ID }, about: { '@id': ORG_ID }, dateModified: page.updated };
  if (page.ogPhoto) wp.primaryImageOfPage = { '@type': 'ImageObject', url: SITE.url + imgSrc(page.ogPhoto) };
  if (page.crumbs) wp.breadcrumb = { '@id': url + '#breadcrumb' };
  g.push(wp);
  if (page.crumbs) {
    const items = [['Start', '/'], ...page.crumbs];
    g.push({ '@type': 'BreadcrumbList', '@id': url + '#breadcrumb', itemListElement: items.map(([t, h], i) => ({ '@type': 'ListItem', position: i + 1, name: strip(t), ...(i < items.length - 1 ? { item: abs(h) } : {}) })) });
  }
  if (page.service) g.push({ '@type': 'Service', '@id': url + '#service', name: page.service.name, serviceType: page.service.type, description: page.description, provider: { '@id': ORG_ID }, areaServed: SITE.areaServed.map((c) => ({ '@type': 'Country', name: c })), url, ...(page.ogPhoto ? { image: SITE.url + imgSrc(page.ogPhoto) } : {}) });
  if (page.article) g.push({ '@type': 'Article', '@id': url + '#article', headline: page.article.headline || page.h1, description: page.description, datePublished: page.article.published, dateModified: page.updated, author: { '@id': ORG_ID }, publisher: { '@id': ORG_ID }, mainEntityOfPage: { '@id': url + '#webpage' }, inLanguage: 'de-DE', ...(page.ogPhoto ? { image: SITE.url + imgSrc(page.ogPhoto) } : {}) });
  if (ctx.faqItems.length && page.faqSchema !== false) g.push({ '@type': 'FAQPage', '@id': url + '#faq', mainEntity: ctx.faqItems.map((f) => ({ '@type': 'Question', name: strip(f.q), acceptedAnswer: { '@type': 'Answer', text: strip(f.a) } })) });
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': g });
}

/* --------------------------------------------------------------- Dokument */
export function renderDocument(page, main, ctx, V) {
  const canonical = abs(page.path);
  const indexable = page.robots !== 'noindex';
  const og = page.ogImage || '/assets/img/og-europaneel.jpg';
  const min = (c) => c.replace(/\.css$/, '.min.css');
  const css = [`/assets/css/site.min.css?v=${V['assets/css/site.min.css']}`, ...(page.css || []).map((c) => `/assets/css/${min(c)}?v=${V['assets/css/' + min(c)]}`)];
  const js = [`/assets/js/main.js?v=${V['assets/js/main.js']}`, ...(page.js || []).map((j) => `/assets/js/${j}?v=${V['assets/js/' + j]}`)];
  const cfg = SITE.ga4 ? `<script>window.EP_CONFIG={ga4:${JSON.stringify(SITE.ga4)}};</script>` : '';
  return `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8">
<!-- (c) ${new Date().getFullYear()} Europaneel GmbH, Am Rhein-Herne-Kanal 10, 46242 Bottrop. Design, Texte, Fotos, Quellcode und Kühlzellen-Kalkulator sind urheberrechtlich geschützt (§§ 2, 69a UrhG). Vervielfältigung oder Übernahme – auch auszugsweise – nur mit schriftlicher Genehmigung. -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
<meta name="robots" content="${indexable ? 'index, follow, max-image-preview:large' : 'noindex, follow'}">
${indexable ? `<link rel="canonical" href="${canonical}">` : ''}
<meta name="author" content="${SITE.legalName}">
<meta name="copyright" content="© ${SITE.legalName}">
<meta property="og:type" content="${page.article ? 'article' : 'website'}">
<meta property="og:locale" content="${SITE.locale}">
<meta property="og:site_name" content="Europaneel">
<meta property="og:title" content="${esc(page.ogTitle || page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${SITE.url}${og}">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Mehrzellige Kühlanlage von Europaneel mit Schiebetüren">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#16191f">
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" type="image/png" sizes="192x192" href="/assets/img/icon-192.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preload" href="/fonts/manrope-800.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/inter-400.woff2" as="font" type="font/woff2" crossorigin>
${ctx.preloads.join('\n')}
${css.map((h) => `<link rel="stylesheet" href="${h}">`).join('\n')}
<script>document.documentElement.className+=' js';</script>${cfg}
${js.map((s) => `<script src="${s}" defer></script>`).join('\n')}
<script type="application/ld+json">${schemaGraph(page, ctx)}</script>
</head>
<body${page.bodyClass ? ` class="${page.bodyClass}"` : ''}>
${page.readProgress ? '<div class="read-progress" aria-hidden="true"></div>' : ''}
${renderHeader(page)}
<main id="main">
${ctx.crumbsDone ? '' : renderCrumbs(page)}
${main}
</main>
${renderFooter()}
${renderConsent()}
${page.noWa ? '' : `<a class="wa-float" href="${SITE.whatsapp}" target="_blank" rel="noopener" aria-label="Per WhatsApp schreiben" data-track-pos="float">${icon('whatsapp', 'icon--fill')}</a>`}
</body>
</html>
`;
}

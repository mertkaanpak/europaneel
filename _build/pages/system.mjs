// Danke-Seite (Formular-Weiterleitung) und 404-Seite – beide noindex.
import { icon, btn, related } from '../lib.mjs';
import { SITE, CTA } from '../site.config.mjs';

export default [
  {
    path: '/danke.html', title: 'Vielen Dank für Ihre Anfrage | Europaneel', description: 'Ihre Anfrage ist bei der Europaneel GmbH eingegangen.',
    robots: 'noindex', sitemap: false, updated: '2026-10-02',
    render: () => `<section class="sec blueprint"><div class="container container--narrow">
  <p class="eyebrow">Anfrage eingegangen</p>
  <h1>Vielen Dank – Ihre Nachricht ist bei uns.</h1>
  <p class="lead mt-s">Wir prüfen Ihre Angaben und melden uns persönlich bei Ihnen. Für ein schriftliches Angebot stimmen wir offene Punkte wie Maße, Temperatur oder Montage direkt mit Ihnen ab.</p>
  <ol class="points mt-l">
    <li><div><h2 class="h3">Sichtung Ihrer Anfrage</h2><p>Wir sehen uns Konfiguration, Maße und Wünsche an.</p></div></li>
    <li><div><h2 class="h3">Rückmeldung</h2><p>Wir melden uns per Telefon oder E-Mail – bei Bedarf vereinbaren wir ein Aufmaß vor Ort.</p></div></li>
    <li><div><h2 class="h3">Schriftliches Angebot</h2><p>Sie erhalten ein Angebot mit allen Positionen.</p></div></li>
  </ol>
  <div class="btn-row mt-l">${btn('Zur Startseite', '/', { variant: 'dark', icon: false })}<a class="tel-line" href="${SITE.phone.href}">${icon('phone')}Eilig? ${SITE.phone.display}</a></div>
</div></section>`,
  },
  {
    path: '/404.html', title: 'Seite nicht gefunden | Europaneel', description: 'Die angeforderte Seite existiert nicht oder ist umgezogen.',
    robots: 'noindex', sitemap: false, updated: '2026-10-02',
    render: () => `<section class="sec blueprint e404"><div class="container">
  <p class="code" aria-hidden="true">404</p>
  <h1>Diese Seite gibt es nicht (mehr).</h1>
  <p class="lead mt-s measure">Vielleicht ist die Seite umgezogen oder der Link enthält einen Tippfehler. Hier geht es weiter:</p>
  <div class="btn-row mt-m">${btn('Zur Startseite', '/', { variant: 'dark', icon: false })}${btn(CTA.primary.label, CTA.primary.href)}</div>
  <div class="mt-xl">${related([
    { href: '/kuehlzellen/', tag: 'Lösungen', title: 'Kühlzellen nach Maß' },
    { href: '/kuehlhaustueren/', tag: 'Komponenten', title: 'Kühlhaustüren ab Lager' },
    { href: '/kontakt.html', tag: 'Kontakt', title: 'Projekt anfragen' },
  ], 'Beliebte Seiten')}</div>
</div></section>`,
  },
];

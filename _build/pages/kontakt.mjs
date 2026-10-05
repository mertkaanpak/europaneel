import { icon, pageHero, secHead, mapBlock, faq } from '../lib.mjs';
import { SITE } from '../site.config.mjs';

const field = (id, label, input, o = {}) => `<div class="field${o.full ? ' full' : ''}"><label for="${id}">${label}${o.req ? ' <span class="req" aria-hidden="true">*</span>' : ''}</label>${input}${o.hint ? `<span class="hint" id="${id}-h">${o.hint}</span>` : ''}${o.req ? `<span class="err" id="${id}-e">${o.err || 'Bitte ausfüllen.'}</span>` : ''}</div>`;
const inp = (id, name, type, o = {}) => `<input class="input" id="${id}" name="${name}" type="${type}"${o.req ? ' required aria-required="true"' : ''}${o.ac ? ` autocomplete="${o.ac}"` : ''}${o.ph ? ` placeholder="${o.ph}"` : ''}${o.req || o.hint ? ` aria-describedby="${[o.hint ? id + '-h' : '', o.req ? id + '-e' : ''].filter(Boolean).join(' ')}"` : ''}>`;
const choice = (name, value, label, type = 'radio', checked = false) => `<label class="choice"><input type="${type}" name="${name}" value="${value}"${checked ? ' checked' : ''}><span>${label}</span></label>`;

export default {
  path: '/kontakt.html',
  title: 'Kontakt & Projektanfrage | Europaneel Bottrop',
  description: 'Europaneel GmbH in Bottrop: Projekt anfragen, Telefon +49 2041 / 777 9191, E-Mail, WhatsApp und Anfahrt. Sie erhalten ein schriftliches Angebot.',
  updated: '2026-10-05',
  pageType: 'ContactPage',
  crumbs: [['Kontakt', '/kontakt.html']],
  render() {
    return `${pageHero({
      eyebrow: 'Kontakt',
      title: 'Projekt anfragen',
      lead: 'Beschreiben Sie Ihr Vorhaben – je mehr wir wissen, desto genauer wird unser Angebot. Lieber direkt sprechen? Wir sind Montag bis Freitag von 9 bis 17 Uhr erreichbar.',
      ctas: false,
      after: `<p class="mt-m"><a class="tel-line" href="${SITE.phone.href}" data-track-pos="kontakt-hero">${icon('phone')}${SITE.phone.display}</a></p>`,
    })}

<section class="sec" aria-labelledby="form-t">
  <div class="container split split--rev">
    <div class="card form-card">
      <h2 id="form-t" class="h3">Ihre Projektanfrage</h2>
      <p class="muted small mt-s">Pflichtfelder sind mit <span class="req">*</span> markiert. Wir arbeiten ausschließlich für Gewerbekunden.</p>
      <form class="mt-m" action="https://formsubmit.co/${SITE.email}" method="POST" data-validate data-form="kontakt" data-track-submit="contact_form_submit">
        <input type="hidden" name="_subject" value="Neue Projektanfrage über europaneel.de">
        <input type="hidden" name="_next" value="${SITE.url}/danke.html">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_template" value="table">
        <div class="honeypot" aria-hidden="true"><label for="hp-website">Website</label><input id="hp-website" type="text" name="_honey" tabindex="-1" autocomplete="off"></div>

        <fieldset class="field full"><legend>Worum geht es? <span class="req" aria-hidden="true">*</span></legend>
          <div class="choices">
            ${choice('Projektart', 'Kühlzelle', 'Kühlzelle', 'radio', true)}${choice('Projektart', 'Tiefkühlzelle', 'Tiefkühlzelle')}${choice('Projektart', 'Kühlhaus / mehrere Zellen', 'Kühlhaus')}
            ${choice('Projektart', 'Sandwichpaneele', 'Paneele')}${choice('Projektart', 'Kühlhaustür', 'Tür')}${choice('Projektart', 'Kälteaggregat', 'Aggregat')}${choice('Projektart', 'Sonstiges', 'Sonstiges')}
          </div>
        </fieldset>

        <div class="form-grid mt-m">
          ${field('f-firma', 'Firma', inp('f-firma', 'Firma', 'text', { req: true, ac: 'organization' }), { req: true })}
          ${field('f-name', 'Ansprechpartner', inp('f-name', 'Ansprechpartner', 'text', { req: true, ac: 'name' }), { req: true })}
          ${field('f-email', 'E-Mail', inp('f-email', 'email', 'email', { req: true, ac: 'email' }), { req: true, err: 'Bitte eine gültige E-Mail-Adresse angeben.' })}
          ${field('f-tel', 'Telefon', inp('f-tel', 'Telefon', 'tel', { req: true, ac: 'tel' }), { req: true })}
          ${field('f-ort', 'Standort der Anlage (PLZ, Ort)', inp('f-ort', 'Standort', 'text', { req: true, ac: 'postal-code', ph: 'z. B. 46242 Bottrop' }), { req: true })}
          ${field('f-masse', 'Ungefähre Maße (L × B × H)', inp('f-masse', 'Masse', 'text', { ph: 'z. B. 3,00 × 2,50 × 2,10 m', hint: 'Falls bekannt' }), { hint: 'Falls bekannt' })}
          ${field('f-temp', 'Kühlbereich', `<select class="select" id="f-temp" name="Kuehlbereich"><option>Pluskühlung</option><option>Tiefkühlung</option><option>Plus- und Tiefkühlung</option><option>noch offen</option></select>`)}
          ${field('f-termin', 'Wunschtermin', inp('f-termin', 'Wunschtermin', 'text', { ph: 'z. B. KW 46 oder „flexibel“' }))}
        </div>

        <fieldset class="field full mt-m"><legend>Gewünschte Leistungen</legend>
          <div class="choices">
            ${choice('Lieferung', 'ja', 'Lieferung', 'checkbox', true)}${choice('Montage', 'ja', 'Montage', 'checkbox', true)}${choice('Kaeltetechnik', 'ja', 'Kältetechnik', 'checkbox')}${choice('Selbstabholung', 'ja', 'Selbstabholung', 'checkbox')}
          </div>
        </fieldset>

        <div class="mt-m">${field('f-msg', 'Ihre Nachricht', `<textarea class="textarea" id="f-msg" name="Nachricht" required aria-required="true" aria-describedby="f-msg-h f-msg-e" placeholder="Was soll gekühlt werden, wo steht die Zelle, gibt es Besonderheiten?"></textarea>`, { req: true, full: true, hint: 'Grundriss, Fotos oder eine Skizze senden Sie uns gern im Anschluss per E-Mail oder WhatsApp.' })}</div>

        <div class="form-foot">
          <p class="form-legal">Mit dem Absenden werden Ihre Angaben zur Bearbeitung der Anfrage verarbeitet – siehe <a href="/datenschutz/">Datenschutzerklärung</a>.</p>
          <button class="btn btn--primary" type="submit">Anfrage senden${icon('send')}</button>
        </div>
      </form>
    </div>

    <aside class="contact-aside" aria-label="Kontaktdaten">
      <div class="contact-strip contact-strip--stack" data-track-pos="kontakt-aside">
        <a class="contact-strip__i" href="${SITE.phone.href}">${icon('phone')}<span><small>Telefon</small><b>${SITE.phone.display}</b></span></a>
        <a class="contact-strip__i" href="${SITE.mobile.href}">${icon('phone')}<span><small>Mobil</small><b>${SITE.mobile.display}</b></span></a>
        <a class="contact-strip__i" href="${SITE.whatsapp}" target="_blank" rel="noopener">${icon('message-circle')}<span><small>WhatsApp</small><b>Nachricht schreiben</b></span></a>
        <a class="contact-strip__i" href="mailto:${SITE.email}">${icon('mail')}<span><small>E-Mail</small><b>${SITE.email}</b></span></a>
        <div>${icon('clock')}<span><small>Erreichbarkeit</small><b>${SITE.hours.text}<br>${SITE.hours.sat}</b></span></div>
        <div>${icon('map-pin')}<span><small>Adresse</small><b>${SITE.legalName}<br>${SITE.address.street}<br>${SITE.address.zip} ${SITE.address.city}</b></span></div>
      </div>
    </aside>
  </div>
</section>

<section class="sec sec--surface" aria-labelledby="anfahrt-t">
  <div class="container split split--center">
    <div data-reveal>
      ${secHead({ eyebrow: 'Anfahrt', id: 'anfahrt-t', title: 'So finden Sie uns in Bottrop', stack: true, text: 'Unser Standort liegt am Rhein-Herne-Kanal. Besuche, Beratung vor Ort und Abholung bitte nach Terminvereinbarung.' })}
      <div class="btn-row"><a class="btn btn--dark" href="${SITE.mapsLink}" target="_blank" rel="noopener">${icon('navigation')}Route planen</a></div>
    </div>
    <div data-reveal data-reveal-d="1">${mapBlock()}</div>
  </div>
</section>

<section class="sec" aria-labelledby="faq-t">
  <div class="container split">
    <div>${secHead({ eyebrow: 'FAQ', id: 'faq-t', title: 'Gut zu wissen', stack: true })}</div>
    ${faq([
      { q: 'Wie schnell erhalte ich ein Angebot?', a: 'Wir melden uns nach Eingang Ihrer Anfrage persönlich. Je vollständiger Ihre Angaben sind – Maße, Temperatur, Standort –, desto schneller können wir ein schriftliches Angebot erstellen.' },
      { q: 'Kann ich vorab einen Richtpreis sehen?', a: '<p>Ja. Mit unserem <a href="/kalkulator.html">Kühlzellen-Kalkulator</a> sehen Sie in wenigen Schritten einen Netto-Richtpreis für Paneele und Tür – ohne Registrierung.</p>' },
      { q: 'Arbeitet Europaneel auch für Privatkunden?', a: 'Unser Angebot richtet sich an Gewerbekunden, also Unternehmer im Sinne des § 14 BGB.' },
    ])}
  </div>
</section>`;
  },
};

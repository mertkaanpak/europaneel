// Zentrale Website-Konfiguration: Firmendaten (NAP), Navigation, CTA-System.
// NAP muss überall identisch sein (Local SEO) – nur hier pflegen.

export const SITE = {
  url: 'https://www.europaneel.de',
  name: 'Europaneel',
  legalName: 'Europaneel GmbH',
  claim: 'Isoliertüren & Kühlraumbau',
  lang: 'de',
  locale: 'de_DE',
  phone: { display: '+49 2041 / 777 9191', href: 'tel:+4920417779191', schema: '+49-2041-7779191' },
  mobile: { display: '+49 152 / 29383 557', href: 'tel:+4915229383557' },
  email: 'info@europaneel.de',
  emailContact: 'm.pak@europaneel.de',
  whatsapp: 'https://wa.me/4915229383557?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20K%C3%BChlzelle.',
  address: { street: 'Am Rhein-Herne-Kanal 10', zip: '46242', city: 'Bottrop', region: 'Nordrhein-Westfalen', country: 'DE', countryName: 'Deutschland' },
  geo: { lat: 51.49864, lng: 6.93782 }, // OpenStreetMap, Gebäude Am Rhein-Herne-Kanal 10 (02.10.2026)
  hours: { text: 'Mo–Fr 09:00–17:00 Uhr', sat: 'Sa nach Vereinbarung', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' },
  areaServed: ['DE', 'AT', 'CH', 'NL'],
  vatID: 'DE283639971',
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=Europaneel+GmbH%2C+Am+Rhein-Herne-Kanal+10%2C+46242+Bottrop',
  mapsEmbed: 'https://maps.google.com/maps?q=Europaneel%20GmbH%2C%20Am%20Rhein-Herne-Kanal%2010%2C%2046242%20Bottrop&t=&z=15&ie=UTF8&iwloc=&output=embed',
  sameAs: [], // CONTENT_REQUIRED: nur echte Unternehmensprofile eintragen (Google-Unternehmensprofil, LinkedIn …)
  ga4: null,  // CONTENT_REQUIRED: GA4-Mess-ID (z. B. 'G-XXXXXXX') – erst nach Freigabe; lädt nur mit Einwilligung

  // Kennzahlen: werden NUR angezeigt, wenn vom Unternehmen bestätigt (confirmed: true)
  facts: {
    installed: { value: '1.000+', label: 'montierte Kühlzellen', confirmed: false },
    years: { value: '18+', label: 'Jahre Erfahrung', confirmed: false },
  },
};

// CTA-System – überall identische Bezeichnungen
export const CTA = {
  primary: { label: 'Kühlzelle konfigurieren', href: '/kalkulator.html' },
  secondary: { label: 'Projekt anfragen', href: '/kontakt.html' },
  tertiary: { label: 'Beratung anrufen', href: SITE.phone.href },
};

// Navigation
export const NAV = {
  solutions: {
    label: 'Lösungen',
    cols: [
      { title: 'Kühllösungen', links: [
        { href: '/kuehlzellen/', label: 'Kühlzellen', desc: 'Pluskühlung nach Maß, mit oder ohne Boden', icon: 'snowflake' },
        { href: '/tiefkuehlzellen/', label: 'Tiefkühlzellen', desc: 'Minusbereich mit isoliertem Boden', icon: 'thermometer-snowflake' },
        { href: '/kuehlhausbau/', label: 'Kühlhausbau', desc: 'Mehrzellige Anlagen & Kühllager', icon: 'warehouse' },
      ] },
      { title: 'Komponenten', links: [
        { href: '/sandwichpaneele/', label: 'Sandwichpaneele', desc: 'Isolierpaneele für Wand, Decke, Boden', icon: 'layers' },
        { href: '/kuehlhaustueren/', label: 'Kühlhaustüren', desc: 'Dreh- & Schiebetüren ab Lager', icon: 'door-closed' },
        { href: '/kaelteaggregate/', label: 'Kälteaggregate', desc: 'Monoblock, Huckepack, Split', icon: 'fan' },
      ] },
      { title: 'Service', links: [
        { href: '/kuehlzellen-montage/', label: 'Planung & Montage', desc: 'Aufmaß, Lieferung, Aufbau', icon: 'hard-hat' },
        { href: '/referenzen/', label: 'Referenzen', desc: 'Projekte aus der Praxis', icon: 'images' },
        { href: '/ratgeber/', label: 'Ratgeber', desc: 'Kosten, Paneelstärke, Planung', icon: 'book-open' },
      ] },
    ],
  },
  industries: {
    label: 'Branchen',
    links: [
      { href: '/branchen/', label: 'Alle Branchen', desc: 'Von Gastronomie bis Logistik', icon: 'layout-grid' },
      { href: '/branchen/gastronomie/', label: 'Gastronomie & Hotel', desc: 'Kühl- und Tiefkühlzellen für Küchen', icon: 'chef-hat' },
      { href: '/branchen/metzgerei/', label: 'Metzgerei & Fleischerei', desc: 'Kühlräume für Fleisch & Wurst', icon: 'beef' },
    ],
  },
  links: [
    { href: '/referenzen/', label: 'Referenzen', key: 'referenzen' },
    { href: '/ratgeber/', label: 'Ratgeber', key: 'ratgeber' },
    { href: '/unternehmen/', label: 'Unternehmen', key: 'unternehmen' },
    { href: '/kontakt.html', label: 'Kontakt', key: 'kontakt' },
  ],
};

export const FOOTER = {
  cols: [
    { title: 'Lösungen', links: [
      ['/kuehlzellen/', 'Kühlzellen'], ['/tiefkuehlzellen/', 'Tiefkühlzellen'], ['/kuehlhausbau/', 'Kühlhausbau'],
      ['/sandwichpaneele/', 'Sandwichpaneele'], ['/kuehlhaustueren/', 'Kühlhaustüren'], ['/kaelteaggregate/', 'Kälteaggregate'],
    ] },
    { title: 'Service & Wissen', links: [
      ['/kuehlzellen-montage/', 'Planung & Montage'], ['/kalkulator.html', 'Kühlzellen-Kalkulator'], ['/referenzen/', 'Referenzen'],
      ['/branchen/', 'Branchen'], ['/ratgeber/', 'Ratgeber'],
    ] },
    { title: 'Unternehmen', links: [
      ['/unternehmen/', 'Über Europaneel'], ['/kontakt.html', 'Kontakt & Anfahrt'], ['/impressum/', 'Impressum'],
      ['/datenschutz/', 'Datenschutz'], ['/agb/', 'AGB'],
    ] },
  ],
};

// Alte URLs → neue Ziele (Meta-Refresh + Canonical, GitHub Pages kann kein serverseitiges 301)
export const REDIRECTS = [
  { from: 'turen.html', to: '/kuehlhaustueren/', title: 'Kühlhaustüren' },
  { from: 'galerie.html', to: '/referenzen/', title: 'Referenzen' },
];

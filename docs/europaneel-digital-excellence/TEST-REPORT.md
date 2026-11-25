# TEST-REPORT Block A + B

Stand: 25.11.2026. Geprüft wurde der Zweig `feature/europaneel-digital-excellence` gegen den Ausgangsstand `origin/main` = `8b251e5`. Alle Prüfungen liefen lokal; die Live-Seite wurde nur gelesen (Sicherung), kein Formular wurde an den echten Dienst gesendet.

## 1. Ergebnis auf einen Blick

| Prüfung | Ergebnis |
|---|---|
| Build mit eingebauter Qualitätsprüfung | keine Fehler, keine Hinweise; 27 Seiten, 22 Sitemap-URLs |
| Tabu-Wachposten (`tabu-check.ps1`) | PASS vor jedem Commit. Gegenprobe mit absichtlich veränderter `calc.css` und verändertem Impressum: FAIL erkannt |
| Kalkulator-Regression vorher (unveränderter Zweig) | 330 von 330, keine Konsolenfehler |
| Kalkulator-Regression nachher | 330 von 330, keine Konsolenfehler, `calc.js` MD5 `efeebbc3159a2bb48e12e0c8aa49250c` |
| Formulartest gegen Attrappe | PASS, 15 Prüfpunkte (Abschnitt 4) |
| Nebenform-Weiterleitung | PASS, 26 Seiten, je ein Sprung, keine Schleife (Abschnitt 5) |
| Screenshots 390 px | 27 Seiten, kein horizontaler Überlauf, keine Konsolenfehler außer dem erwarteten 404-Status der Fehlerseite |
| Lighthouse, 5 Seiten, mobil und Desktop | nirgends schlechter als vorher (Abschnitt 3) |
| Canonicals, Sitemap-URLs, `robots.txt` | unverändert |

Nicht geprüft: Firefox und WebKit, echte Geräte, Screenreader, Googles Rich-Results-Test, das Verhalten auf GitHub Pages selbst (erst nach einem Merge möglich), der echte Versand über FormSubmit.

## 2. Vorher/Nachher-Crawl

Quelle: fertiges HTML des Ausgangsstands und des Zweigs, ausgewertet mit demselben Skript. „Links im Inhalt" zählt Ziele im Bereich `<main>`.

### Übersicht je Seite

| URL | Title (Zeichen) | Description (Zeichen) | H1 | H2 | Robots-Tags | Canonical | Links im Inhalt (ausgehend) | Verlinkende Seiten (aus Inhalt) | Schema-Typen |
|---|---|---|---|---|---|---|---|---|---|
| `/` | 60 | 155 | geändert | 16 → 12 | 2 → 1 | gleich | 19 → 20 | gleich | gleich (4) |
| `/404.html` | 33 | 58 | gleich | 4 → 0 | 2 → 1 | – (noindex) | 5 → 8 | gleich | gleich (3) |
| `/agb/` | 55 | 120 | gleich | 15 → 11 | 2 → 1 | gleich | gleich | gleich | gleich (4) |
| `/branchen/` | 59 | 155 | gleich | 14 → 10 | 2 → 1 | gleich | gleich | 6 → 9 | gleich (5) |
| `/branchen/baeckerei-konditorei/` | 53 | 144 | gleich | 9 → 5 | 2 → 1 | gleich | gleich | gleich | gleich (6) |
| `/branchen/gastronomie/` | 56 | 151 | gleich | 9 → 5 | 2 → 1 | gleich | 8 → 11 | gleich | gleich (6) |
| `/branchen/lebensmittelhandel-hofladen/` | 57 | 147 | gleich | 9 → 5 | 2 → 1 | gleich | gleich | gleich | gleich (6) |
| `/branchen/metzgerei/` | 50 | 146 | gleich | 9 → 5 | 2 → 1 | gleich | 9 → 12 | gleich | gleich (6) |
| `/danke.html` | 41 | 53 | gleich | 7 → 3 | 2 → 1 | – (noindex) | gleich | gleich | gleich (3) |
| `/datenschutz/` | 38 | 143 | gleich | 13 → 9 | 2 → 1 | gleich | gleich | gleich | gleich (4) |
| `/impressum/` | 27 | 133 | gleich | 5 → 1 | 2 → 1 | gleich | gleich | gleich | gleich (4) |
| `/kaelteaggregate/` | 60 | 151 | gleich | 9 → 6 | 2 → 1 | gleich | 7 → 9 | 9 → 10 | gleich (6) |
| `/kalkulator.html` | 58 | 157 | gleich | 10 → 6 | 2 → 1 | gleich | gleich | gleich | gleich (5) |
| `/kontakt.html` | 45 | 144 | gleich | 7 → 3 | 2 → 1 | gleich | 3 → 4 | gleich | gleich (5) |
| `/kuehlhausbau/` | 58 | 144 | gleich | 10 → 6 | 2 → 1 | gleich | 11 → 13 | 5 → 8 | gleich (6) |
| `/kuehlhaustueren/` | 50 → 51 (geändert) | 150 → 138 (geändert) | geändert | 9 → 5 | 2 → 1 | gleich | 6 → 9 | 9 → 13 | gleich (6) |
| `/kuehlzellen-montage/` | 57 | 132 | gleich | 10 → 6 | 2 → 1 | gleich | 6 → 9 | 6 → 8 | gleich (6) |
| `/kuehlzellen/` | 60 | 157 | gleich | 13 → 9 | 2 → 1 | gleich | 12 → 15 | 17 → 18 | gleich (6) |
| `/ratgeber/` | 58 | 158 | gleich | 7 → 3 | 2 → 1 | gleich | gleich | 4 → 6 | gleich (4) |
| `/ratgeber/kuehlraum-bauen/` | 56 | 146 | gleich | 12 → 8 | 2 → 1 | gleich | 8 → 10 | 5 → 10 | gleich (6) |
| `/ratgeber/kuehlzelle-kosten/` | 60 | 153 | gleich | 16 → 12 | 2 → 1 | gleich | 7 → 9 | 7 → 13 | gleich (6) |
| `/ratgeber/kuehlzelle-planen/` | 58 | 151 | gleich | 15 → 11 | 2 → 1 | gleich | 7 → 10 | 13 → 16 | gleich (6) |
| `/ratgeber/paneelstaerke-kuehlzelle/` | 56 | 154 | gleich | 13 → 9 | 2 → 1 | gleich | 7 → 9 | 7 → 10 | gleich (6) |
| `/referenzen/` | 55 | 146 | gleich | 7 → 3 | 2 → 1 | gleich | 6 → 9 | 7 → 9 | gleich (4) |
| `/sandwichpaneele/` | 53 → 54 (geändert) | 142 → 143 (geändert) | geändert | 11 → 7 | 2 → 1 | gleich | 6 → 9 | 5 → 7 | gleich (6) |
| `/tiefkuehlzellen/` | 57 | 146 | gleich | 11 → 7 | 2 → 1 | gleich | 11 → 14 | 10 → 14 | gleich (6) |
| `/unternehmen/` | 49 | 147 | gleich | 9 → 5 | 2 → 1 | gleich | 5 → 8 | 0 → 4 | gleich (4) |

### Geänderte Titles, Descriptions und H1 im Wortlaut

| URL | Feld | Vorher | Nachher |
|---|---|---|---|
| `/` | H1 | Kühlzellen nach Maß. Geplant, geliefert, montiert. | Kühlzellen und Kühlhäuser nach Maß. Geplant, geliefert, montiert. |
| `/kuehlhaustueren/` | Title | Kühlhaustüren & Isoliertüren ab Lager | Europaneel | Kühlraumtüren & Kühlhaustüren ab Lager | Europaneel |
| `/kuehlhaustueren/` | Description | Kühlhaustüren ab Lager Bottrop: 9 Drehtür- und 14 Schiebetürformate, Anschlag links oder rechts, mit oder ohne Schwelle – für Kühl- und Tiefkühlräume. | Kühlraumtüren und Kühlhaustüren ab Lager Bottrop: 9 Drehtür- und 14 Schiebetürformate, Anschlag links oder rechts, mit oder ohne Schwelle. |
| `/kuehlhaustueren/` | H1 | Kühlhaustüren ab Lager – Dreh- und Schiebetüren für Kühl- und Tiefkühlräume | Kühlraumtüren und Kühlhaustüren ab Lager – Dreh- und Schiebetüren |
| `/sandwichpaneele/` | Title | Sandwichpaneele für Kühlhaus & Kühlzelle | Europaneel | Kühlraumpaneele: Sandwichpaneele ab Lager | Europaneel |
| `/sandwichpaneele/` | Description | Sandwichpaneele für Kühlzellen und Kühlhäuser: Isolierpaneele für Wand, Decke und Boden, viele Stärken kurzfristig ab Lager Bottrop verfügbar. | Kühlraumpaneele für Kühlzellen und Kühlhäuser: Sandwichpaneele für Wand, Decke und Boden, viele Stärken kurzfristig ab Lager Bottrop verfügbar. |
| `/sandwichpaneele/` | H1 | Sandwichpaneele für Kühlzellen und Kühlhäuser | Kühlraumpaneele: Sandwichpaneele für Kühlzellen und Kühlhäuser |

### Geänderte H2 im Wortlaut

| URL | Entfallen als H2 | Neu als H2 |
|---|---|---|
| `/` | Lösungen · Service & Wissen · Unternehmen · Externe Dienste | – |
| `/404.html` | Lösungen · Service & Wissen · Unternehmen · Externe Dienste | – |
| `/agb/` | Lösungen · Service & Wissen · Unternehmen · Externe Dienste | – |
| `/branchen/` | Lösungen · Service & Wissen · Unternehmen · Externe Dienste | – |
| `/branchen/baeckerei-konditorei/` | Lösungen · Service & Wissen · Unternehmen · Externe Dienste | – |
| `/branchen/gastronomie/` | Lösungen · Service & Wissen · Unternehmen · Externe Dienste | – |
| `/branchen/lebensmittelhandel-hofladen/` | Lösungen · Service & Wissen · Unternehmen · Externe Dienste | – |
| `/branchen/metzgerei/` | Lösungen · Service & Wissen · Unternehmen · Externe Dienste | – |
| `/danke.html` | Lösungen · Service & Wissen · Unternehmen · Externe Dienste | – |
| `/datenschutz/` | Lösungen · Service & Wissen · Unternehmen · Externe Dienste | – |
| `/impressum/` | Lösungen · Service & Wissen · Unternehmen · Externe Dienste | – |
| `/kaelteaggregate/` | Lösungen · Service & Wissen · Unternehmen · Externe Dienste | Kühlzelle mit Aggregat aus einer Hand |
| `/kalkulator.html` | Lösungen · Service & Wissen · Unternehmen · Externe Dienste | – |
| `/kontakt.html` | Lösungen · Service & Wissen · Unternehmen · Externe Dienste | – |
| `/kuehlhausbau/` | Lösungen · Service & Wissen · Unternehmen · Externe Dienste | – |
| `/kuehlhaustueren/` | Lösungen · Service & Wissen · Unternehmen · Externe Dienste | – |
| `/kuehlzellen-montage/` | Lösungen · Service & Wissen · Unternehmen · Externe Dienste | – |
| `/kuehlzellen/` | So entsteht Ihre Kühlzelle · Lösungen · Service & Wissen · Unternehmen · Externe Dienste | Kühlzelle kaufen: So läuft es ab |
| `/ratgeber/` | Lösungen · Service & Wissen · Unternehmen · Externe Dienste | – |
| `/ratgeber/kuehlraum-bauen/` | Lösungen · Service & Wissen · Unternehmen · Externe Dienste | – |
| `/ratgeber/kuehlzelle-kosten/` | Lösungen · Service & Wissen · Unternehmen · Externe Dienste | – |
| `/ratgeber/kuehlzelle-planen/` | Lösungen · Service & Wissen · Unternehmen · Externe Dienste | – |
| `/ratgeber/paneelstaerke-kuehlzelle/` | Lösungen · Service & Wissen · Unternehmen · Externe Dienste | – |
| `/referenzen/` | Lösungen · Service & Wissen · Unternehmen · Externe Dienste | – |
| `/sandwichpaneele/` | Lösungen · Service & Wissen · Unternehmen · Externe Dienste | – |
| `/tiefkuehlzellen/` | Lösungen · Service & Wissen · Unternehmen · Externe Dienste | – |
| `/unternehmen/` | Lösungen · Service & Wissen · Unternehmen · Externe Dienste | – |

### Neue Links aus Inhaltsbereichen

| Von | Neu verlinkt |
|---|---|
| `/` | `/unternehmen/` |
| `/404.html` | `/tiefkuehlzellen/`, `/branchen/`, `/ratgeber/` |
| `/branchen/gastronomie/` | `/ratgeber/kuehlzelle-kosten/`, `/kuehlhaustueren/`, `/referenzen/` |
| `/branchen/metzgerei/` | `/kaelteaggregate/`, `/ratgeber/kuehlzelle-kosten/`, `/referenzen/` |
| `/kaelteaggregate/` | `/ratgeber/kuehlzelle-kosten/`, `/kuehlhausbau/` |
| `/kontakt.html` | `/unternehmen/` |
| `/kuehlhausbau/` | `/ratgeber/kuehlzelle-planen/`, `/branchen/` |
| `/kuehlhaustueren/` | `/tiefkuehlzellen/`, `/sandwichpaneele/`, `/kuehlzellen-montage/` |
| `/kuehlzellen-montage/` | `/kuehlhausbau/`, `/unternehmen/`, `/ratgeber/kuehlraum-bauen/` |
| `/kuehlzellen/` | `/kuehlzellen-montage/`, `/kuehlhausbau/`, `/ratgeber/paneelstaerke-kuehlzelle/` |
| `/ratgeber/kuehlraum-bauen/` | `/ratgeber/kuehlzelle-kosten/`, `/ratgeber/paneelstaerke-kuehlzelle/` |
| `/ratgeber/kuehlzelle-kosten/` | `/ratgeber/kuehlzelle-planen/`, `/ratgeber/kuehlraum-bauen/` |
| `/ratgeber/kuehlzelle-planen/` | `/ratgeber/kuehlzelle-kosten/`, `/ratgeber/paneelstaerke-kuehlzelle/`, `/ratgeber/kuehlraum-bauen/` |
| `/ratgeber/paneelstaerke-kuehlzelle/` | `/ratgeber/kuehlzelle-planen/`, `/ratgeber/kuehlraum-bauen/` |
| `/referenzen/` | `/tiefkuehlzellen/`, `/kuehlhaustueren/`, `/unternehmen/` |
| `/sandwichpaneele/` | `/tiefkuehlzellen/`, `/kuehlhaustueren/`, `/ratgeber/kuehlraum-bauen/` |
| `/tiefkuehlzellen/` | `/kuehlhaustueren/`, `/sandwichpaneele/`, `/ratgeber/kuehlzelle-kosten/` |
| `/unternehmen/` | `/kuehlzellen/`, `/branchen/`, `/ratgeber/` |

### Kennzahlen

| Kennzahl | Vorher | Nachher |
|---|---|---|
| Seiten (ohne Stubs) | 27 | 27 |
| Seiten mit genau einer H1 | 27 | 27 |
| Doppelte Titles (indexierbare Seiten) | 0 | 0 |
| Doppelte Descriptions (indexierbare Seiten) | 0 | 0 |
| Title-Länge min–max (indexierbar) | 27–60 | 27–60 |
| Description-Länge min–max (indexierbar) | 120–158 | 120–158 |
| Robots-Meta-Tags je Seite | 2 | 1 |
| Geänderte Canonicals | – | 0 |
| H2 gesamt | 279 | 172 |
| Ebenensprünge in Überschriften | 0 | 0 |
| Links aus Inhaltsbereichen gesamt | 195 | 240 |
| Sitemap-Seiten mit weniger als 3 verlinkenden Seiten (aus Inhalt) | 1 | 0 |
| Geringste Zahl verlinkender Seiten je Ratgeberartikel | 5 | 10 |
| Seiten mit Brotkrumen (sichtbar) | 24 | 24 |
| Schema-Knoten gesamt | 139 | 139 |
| Ungültiges JSON-LD | 0 | 0 |
| LocalBusiness-Ort | Bottrop | Bottrop |
| Country.name im Schema | DE, AT, CH, NL | Deutschland, Österreich, Schweiz, Niederlande |
| og:url gleich Canonical (indexierbar) | 25 von 25 | 25 von 25 |
| og:title/og:description vorhanden | 27 von 27 | 27 von 27 |
| Bilder ohne alt-Attribut | 0 | 0 |
| Bilder mit leerem alt | 1 | 1 |

Hinweis: Das eine Bild mit leerem `alt` ist der Platzhalter der Bildansicht auf `/referenzen/`; er erhält sein `alt` beim Öffnen per Skript. Unverändert.

## 3. Lighthouse

Lighthouse 13.6.0, Chrome headless, drei Läufe je Seite und Modus, Median. **Beide Messungen liefen lokal** gegen denselben einfachen Server ohne Kompression. Die absoluten Werte sind deshalb schlechter als die Messung gegen die Live-Seite aus Phase 1 (dort mobil 99 bis 100) und nicht mit ihr vergleichbar; aussagekräftig ist nur der Unterschied zwischen vorher und nachher. Es sind Labordaten, keine Felddaten.

| Seite | Modus | Performance vorher | Performance nachher | Accessibility | Best Practices | SEO | LCP vorher | LCP nachher | TBT vorher | TBT nachher | CLS nachher | Gewicht vorher | Gewicht nachher |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| kalkulator-html | desktop | 100 (100/100/100) | 100 (100/100/100) | 100 → 100 | 100 → 100 | 100 → 100 | 0.32 s | 0.32 s | 1 ms | 1 ms | 0.000 | 347 KB | 350 KB |
| kontakt-html | desktop | 100 (100/100/100) | 100 (100/100/100) | 100 → 100 | 100 → 100 | 100 → 100 | 0.28 s | 0.28 s | 0 ms | 0 ms | 0.000 | 257 KB | 259 KB |
| kuehlhaustueren | desktop | 100 (100/100/100) | 100 (100/100/100) | 100 → 100 | 100 → 100 | 100 → 100 | 0.60 s | 0.61 s | 0 ms | 0 ms | 0.000 | 289 KB | 293 KB |
| kuehlzellen | desktop | 100 (100/100/100) | 100 (100/100/100) | 100 → 100 | 100 → 100 | 100 → 100 | 0.67 s | 0.67 s | 0 ms | 0 ms | 0.000 | 313 KB | 316 KB |
| start | desktop | 100 (100/100/100) | 100 (100/100/100) | 100 → 100 | 100 → 100 | 100 → 100 | 0.32 s | 0.32 s | 0 ms | 0 ms | 0.000 | 673 KB | 675 KB |
| kalkulator-html | mobile | 98 (98/98/98) | 98 (98/98/98) | 100 → 100 | 100 → 100 | 100 → 100 | 1.50 s | 1.50 s | 137 ms | 131 ms | 0.000 | 347 KB | 350 KB |
| kontakt-html | mobile | 100 (100/100/100) | 100 (100/100/100) | 100 → 100 | 100 → 100 | 100 → 100 | 1.50 s | 1.50 s | 39 ms | 40 ms | 0.000 | 272 KB | 274 KB |
| kuehlhaustueren | mobile | 95 (95/95/95) | 100 (100/100/100) | 100 → 100 | 100 → 100 | 100 → 100 | 2.85 s | 1.50 s | 84 ms | 43 ms | 0.000 | 297 KB | 300 KB |
| kuehlzellen | mobile | 94 (94/95/93) | 94 (94/95/94) | 100 → 100 | 100 → 100 | 100 → 100 | 2.86 s | 2.85 s | 105 ms | 108 ms | 0.016 | 296 KB | 300 KB |
| start | mobile | 90 (90/90/90) | 91 (91/90/91) | 100 → 100 | 100 → 100 | 100 → 100 | 3.31 s | 3.31 s | 135 ms | 125 ms | 0.000 | 485 KB | 488 KB |

Einordnung:

- Keine der vier Lighthouse-Wertungen ist schlechter geworden; LCP und TBT liegen gleich oder besser, der Speed Index schwankt auf dem Desktop um wenige Hundertstelsekunden. Accessibility, Best Practices und SEO bleiben bei 100.
- `/kuehlhaustueren/` mobil steigt von 95 auf 100, weil der LCP von 2,85 s auf 1,50 s fällt. Vermutliche Ursache: Die kürzere H1 verändert den Umbruch im Kopfbereich, sodass ein anderes Element als größtes gilt. Das ist ein Nebeneffekt, kein gezielter Gewinn, und kann sich mit jeder Textänderung wieder verschieben.
- Das Seitengewicht steigt um 2 bis 4 KB je Seite (zusätzliche Links, unkomprimiert gemessen).
- Die Vorschau selbst setzt `X-Robots-Tag: noindex`; damit würde Lighthouse den SEO-Wert abwerten. Gemessen wurde deshalb über einen zweiten lokalen Server ohne diesen Header, ebenfalls nur an 127.0.0.1.

## 4. Formulartest gegen die Attrappe

Skript `_tools/form-test.mjs`. Der Testbrowser fängt jede Anfrage an `formsubmit.co` ab und beantwortet sie lokal; zusätzlich ist der Hostname im Testbrowser auf 127.0.0.1 umgelenkt. Es ging nichts an den Dienst.

| Prüfpunkt | Ergebnis |
|---|---|
| Formularziel und Methode unverändert | ok |
| Normaler Nutzer (ausfüllen, nach mehr als 3 s senden): genau ein POST | ok |
| Keine Anfragen an fremde Hosts | ok |
| Versendete Felder des Kontaktformulars identisch mit dem Ausgangsstand (17 Felder, gleiche Werte, gleiche Reihenfolge) | ok |
| Sofortversand unter 3 s wird gestoppt, Hinweis sichtbar | ok |
| Sendebutton bleibt danach bedienbar | ok |
| Zweiter Versuch nach der Wartezeit wird gesendet | ok |
| Gefülltes Honeypot-Feld stoppt den Versand, Hinweis sichtbar | ok |
| Honeypot für Menschen unsichtbar und nicht per Tab erreichbar | ok |
| Leere Pflichtfelder: kein Versand, Sammelhinweis, 6 Felder markiert, Fokus im ersten Feld | ok |
| Feldfehler verschwindet bei Eingabe | ok |
| Ohne Internetverbindung: kein Versand, Hinweis sichtbar | ok |
| Kalkulator-Anfrage im Zweig: ein POST mit Typ, Maßen, Tür und Preis | ok |
| Kalkulator-Anfrage im Ausgangsstand: ein POST | ok |
| Felder der Kalkulator-Anfrage identisch mit dem Ausgangsstand | ok |

Grenzen: Die Zeitprüfung und die Honeypot-Auswertung laufen im Browser. Sie halten Bots auf, die das Formular in einem Browser bedienen. Ein Bot, der direkt an den Dienst sendet, umgeht beides; dagegen wirkt nur der Honeypot auf Seiten des Dienstes (besteht schon) oder ein Captcha (abgeschaltet, Änderung nicht beauftragt). Nicht geprüft ist die Rückkehr mit der Zurück-Taste aus dem Browser-Cache; der Code dafür ist enthalten, der Test fehlt.

## 5. Nebenformen

Skript `_tools/altform-test.mjs`, 26 Seiten (alle außer der Fehlerseite). Je Seite: Hauptform löst keine Weiterleitung aus; Nebenform (`/ordner/index.html` bzw. ohne `.html`) landet in einem Sprung auf der Hauptform; Parameter und Anker bleiben erhalten. Die Fehlerseite bleibt unter jeder Adresse stehen. Die Stubs `/turen.html` und `/galerie.html` leiten weiter wie zuvor. Ergebnis: PASS.

## 6. Screenshots

390 × 844 px, Chromium, 27 Seiten (22 Sitemap-URLs, 3 Rechtstexte, Danke-Seite, Fehlerseite). Kein horizontaler Überlauf, keine fehlgeschlagenen Anfragen, keine fremden Hosts. Die Bilder liegen außerhalb des Repos im Arbeitsordner (`_work/block-ab/screens-nachher/`), weil das Repo öffentlich ist und sie die Seite nicht brauchen.

Sichtbefund: Die neue H1 der Startseite läuft auf dem Smartphone über drei statt zwei Zeilen; beide Schaltflächen bleiben im ersten Bildschirm, die Kennzahlen rutschen um eine Zeile nach unten.

## 7. Werkzeuge

Alle Skripte liegen im Arbeitsordner unter `_tools/` (nicht im Repo): `onpage.mjs`, `onpage-diff.mjs`, `form-test.mjs`, `altform-test.mjs`, `shots-ab.mjs`, `lh-run.mjs`, `vorschau-server.mjs`; dazu `tabu-check.ps1` und der Regressionstest aus Phase 1.

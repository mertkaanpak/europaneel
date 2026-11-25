# RECHTLICHE-HINWEISE (Sammlung für die fachliche Prüfung)

Stand: 25.11.2026. Dies ist keine Rechtsberatung. Gesammelt sind Stellen, an denen Rechtstext und Technik der Seite nicht zusammenpassen. **Die Rechtstexte wurden nicht geändert** (Quelle `_build/legal-texts.json`, im Zweig byte-identisch mit `origin/main`). Änderungen nimmt nur Mert nach juristischer Prüfung vor.

## Unstimmigkeiten zwischen Datenschutzerklärung und Technik

| Nr. | Fundstelle | Was die Technik tut | Was der Text sagt | Frage an die Prüfung |
|---|---|---|---|---|
| R-01 | Datenschutz, Abschnitt 3 b (Kontaktformular) | Beide Formulare senden per `POST` an `https://formsubmit.co/info@europaneel.de` (`_build/pages/kontakt.mjs` Zeile 29, `_build/pages/kalkulator.mjs` Zeile 148). FormSubmit ist ein externer Dienst. | Der Dienst wird nicht genannt. | Muss der Dienst als Empfänger genannt werden? Gibt es einen Vertrag zur Auftragsverarbeitung, wo sitzt der Anbieter, ist eine Übermittlung in ein Drittland zu erklären? |
| R-02 | Datenschutz, Abschnitt 4 | Kein reCAPTCHA eingebunden. Beide Formulare setzen `_captcha=false` (`kontakt.mjs` Zeile 32, `kalkulator.mjs` Zeile 151). Beim Laden der Seiten gibt es keine Anfrage an Google. | Nennt Google reCAPTCHA. | Abschnitt streichen oder anpassen? |
| R-03 | Datenschutz, Abschnitt 6 (Hosting) | Hosting bei GitHub Pages, Auslieferung über Fastly. | Hoster nicht benannt; der Text nennt einen Vertrag zur Auftragsverarbeitung. | Trifft das für GitHub zu? Hoster benennen? |
| R-04 | Datenschutz | Link zu WhatsApp (`wa.me`) auf jeder Seite; die Einwilligung für Karten wird im `localStorage` unter `ep_consent` gespeichert. | Beides nicht erwähnt. | Ergänzen? |
| R-05 | Datenschutz | Kein Analytics aktiv (`ga4: null`); der Einwilligungsdialog ist für eine spätere Messung vorbereitet. | Kein Abschnitt zur Reichweitenmessung. | Vor Einführung einer Messung ergänzen. |
| R-06 | Impressum | Angaben zu Vertretung, Register und Umsatzsteuer-ID vorhanden. | – | Vollständigkeit nach § 5 DDG bestätigen. |

## Neu durch Block A + B

| Nr. | Änderung | Datenschutz-Bezug |
|---|---|---|
| N-01 | Zeitprüfung und Honeypot-Auswertung im Browser (`assets/js/main.js`, Zeilen 192 bis 245) | Es werden keine zusätzlichen Daten erhoben, gespeichert oder übertragen. Geprüft wird nur der Zeitpunkt des Seitenaufrufs im Arbeitsspeicher des Browsers und ob das unsichtbare Feld `_honey` gefüllt ist. Kein Cookie, kein `localStorage`, kein zusätzliches Formularfeld. |
| N-02 | Weiterleitung von Nebenformen (`/index.html`, `/kontakt`, `/kalkulator`) | Rein technisch, keine Datenverarbeitung. |

## Weitere Punkte für Mert

- AGB § 1 Abs. 2 beschränkt das Angebot auf Unternehmer (§ 14 BGB). Die Seite sagt das in zwei FAQ-Antworten und im Formular. Mert wollte zu Privatkunden „neutral" formulieren: offene Frage, Texte unverändert.
- Der Fuß trägt einen Nutzungsvorbehalt nach § 44b UrhG; `robots.txt` und `/.well-known/tdmrep.json` setzen ihn maschinenlesbar um. Unverändert.

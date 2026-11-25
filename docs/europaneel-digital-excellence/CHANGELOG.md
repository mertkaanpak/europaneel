# CHANGELOG Europaneel Digital Excellence

Zweig `feature/europaneel-digital-excellence`, Basis `origin/main` = `8b251e5` (18.11.2026). Nichts davon ist veröffentlicht; Merge und Deployment nur durch Mert.

## Block A + B (25.11.2026)

### Geändert an der Seite

| Bereich | Änderung | Audit-Befund | Dateien |
|---|---|---|---|
| Titles, H1 | `/kuehlhaustueren/`: Title „Kühlraumtüren & Kühlhaustüren ab Lager \| Europaneel", H1 und Description mit „Kühlraumtüren"; „Kühlzellentür" im Einleitungstext | KEYWORD-MAPPING 5 | `_build/pages/kuehlhaustueren.mjs` |
| Titles, H1 | `/sandwichpaneele/`: Title „Kühlraumpaneele: Sandwichpaneele ab Lager \| Europaneel", H1 und Description mit „Kühlraumpaneele" | KEYWORD-MAPPING 5 | `_build/pages/sandwichpaneele.mjs` |
| H2 | `/kuehlzellen/`: Ablauf-Abschnitt heißt „Kühlzelle kaufen: So läuft es ab" (Text unverändert) | KEYWORD-MAPPING 5 | `_build/pages/kuehlzellen.mjs` |
| H2 | `/kaelteaggregate/`: neuer Abschnitt „Kühlzelle mit Aggregat aus einer Hand". Enthält nur Aussagen, die schon auf Startseite, Kühlzellen- und Kalkulatorseite stehen | KEYWORD-MAPPING 5 | `_build/pages/kaelteaggregate.mjs` |
| H1 | Startseite: „Kühlzellen und Kühlhäuser nach Maß. Geplant, geliefert, montiert." (Vorgabe Masterauftrag) | – | `_build/pages/index.mjs` |
| Überschriften | Fuß-Spaltentitel und Titel des Einwilligungsdialogs sind keine H2 mehr (je Seite 4 H2 weniger, Aussehen gleich) | A-10 | `_build/lib.mjs`, `assets/css/site.css` |
| Kopfbereich | Ein Robots-Meta-Tag statt zwei (`index, follow, max-image-preview:large, noai, noimageai`) | A-10 | `_build/lib.mjs` |
| Strukturierte Daten | `Country.name` ausgeschrieben (Deutschland, Österreich, Schweiz, Niederlande) in `LocalBusiness` und `Service` | S-02 | `_build/lib.mjs`, `_build/site.config.mjs` |
| Interne Verlinkung | 45 zusätzliche Links aus Inhaltsbereichen: Leistungsseiten untereinander und zu Ratgeberartikeln, Branchenseiten zu Ratgeber und Referenzen, jeder Ratgeberartikel zu den drei anderen, `/unternehmen/` von Startseite, Kontakt, Montage und Referenzen | A-09 | `_build/pages/*.mjs` |
| Nebenformen | `/ordner/index.html`, `/kontakt`, `/kalkulator` lenken per kurzem Skript im Kopf auf die Hauptform (ein Sprung, Parameter und Anker bleiben). Canonicals unverändert | A-08 | `_build/lib.mjs` |
| 404-Seite | Sechs statt drei Ziele, dazu die Telefonnummer | – | `_build/pages/system.mjs` |
| Formulare | Zeitprüfung (3 Sekunden ab Seitenaufruf), Auswertung des vorhandenen Honeypot-Felds, Sammelhinweis bei fehlenden Pflichtfeldern, Hinweis ohne Internetverbindung, Sendebutton nach „Zurück" wieder frei. Ziel, Methode und Felder unverändert | A-02 | `assets/js/main.js`, `assets/css/site.css` |
| Sitemap | Gleiche 22 URLs; `lastmod` 25.11.2026 für `/`, `/kuehlzellen/`, `/kuehlhaustueren/`, `/sandwichpaneele/`, `/kaelteaggregate/` | – | erzeugt |
| Build | Neue Prüfungen: kein interner Link auf weitergeleitete Adressen oder Nebenformen; Hinweis bei weniger als drei verlinkenden Seiten. Ordner `docs` wird nicht ausgeliefert | REDIRECT-MAPPING 2.4 | `_build/build.mjs`, `_config.yml` |

### Bewusst nicht geändert

| Punkt | Grund |
|---|---|
| `calc.js`, `calc-ui.js`, `calc.css`, `calc.min.css`, `_build/pages/kalkulator.mjs` | tabu; byte-identisch (siehe TEST-REPORT) |
| Title der Kalkulatorseite („Konfigurator") | liegt in einer Tabu-Datei; laut KEYWORD-MAPPING erst nach Blick in die Search Console |
| Rechtstexte | tabu; Unstimmigkeiten stehen in `RECHTLICHE-HINWEISE.md` |
| FormSubmit-Aufruf (Ziel, Felder, `_captcha`) | Auftrag: keine Änderung |
| Bestehende URLs, Canonicals, `robots.txt` | keine Änderung nötig; 0 Canonicals geändert |
| `/kontakt.html`, `/kalkulator.html` als Hauptformen | indexierte URLs bleiben (REDIRECT-MAPPING 2.1) |
| Stubs `/kontakt/`, `/kalkulator/` | Verhalten von GitHub Pages bei gleichnamiger Datei und Ordner ungeprüft; Kettenrisiko. Siehe REDIRECT-MAPPING |
| `sameAs`, Autor als Person, Bewertungen, Projektdaten | brauchen Angaben von Mert |
| Seitenindividuelle Vorschaubilder (Open Graph) | Open Graph ist vollständig; eigene Bilder je Seite bräuchten neue Bilddateien im Format 1200 × 630 |
| Sicherheits-Header, CSP per Meta | Hosting erlaubt keine Header; eine CSP würde den Kalkulator (Inline-Aufrufe, `eval`-artiger Selbstschutz) gefährden |

### Commits (lokal, nicht gepusht)

Siehe `git log origin/main..feature/europaneel-digital-excellence`.

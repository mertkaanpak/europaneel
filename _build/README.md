# Seitengenerator europaneel.de

Die Website besteht aus fertigem HTML, das dieser Generator erzeugt. GitHub Pages liefert es 1:1 aus.
Der Ordner `_build/` selbst wird nicht veröffentlicht.

## Befehle (im Projektordner)

| Aufgabe | Befehl |
|---|---|
| Seiten neu erzeugen + prüfen | `node _build/build.mjs` |
| Bilder neu erzeugen (nach neuen Fotos) | `node _build/images.mjs` (ImageMagick 7 nötig) |
| Kalkulator neu verschleiern (nur nach Änderung der Quelle) | `node _build/obfuscate.mjs` |

Der Build bricht mit Fehlerliste ab, wenn z. B. ein Link ins Leere zeigt, ein Title doppelt ist, eine Seite keine oder zwei H1 hat oder Bildmaße fehlen.

## Wo was gepflegt wird

- **Firmendaten, Navigation, CTA-Texte, Weiterleitungen:** `site.config.mjs`
- **Seiteninhalte:** `pages/*.mjs` (eine Datei je Seite bzw. Seitengruppe)
- **Bausteine (Header, Footer, Bilder, FAQ, Schema):** `lib.mjs`
- **Design:** `../assets/css/site.css` (wird zu `site.min.css`)
- **Fotos:** Originale in `src-img/`, Beschreibungen in `images.mjs`

## Regeln

- Keine erfundenen Zahlen, Kunden, Bewertungen oder Zertifikate. Kennzahlen erst nach Freigabe (`facts.confirmed`).
- Kalkulator: IDs, `onclick`-Aufrufe und Türoptionen in `pages/kalkulator.mjs` sind die Schnittstelle zur verschleierten Logik – nach Änderungen Regressionstest durchführen.
- Die lesbare Kalkulator-Quelle (`private/`) und interne Dokumente (`../_intern/`) nie veröffentlichen.

# DEPLOYMENT-PLAN (erste Fassung)

Stand: 25.11.2026. Beschreibt, wie der Zweig `feature/europaneel-digital-excellence` später auf die Live-Seite kommt. **Bisher ist nichts davon geschehen:** kein Push, kein PR, kein Merge.

## Wie veröffentlicht wird

GitHub Pages veröffentlicht den Zweig `main` des Repos `mertkaanpak/europaneel`. Ein Merge nach `main` ist das Deployment. Es gibt keinen Build-Schritt auf dem Server; ausgeliefert wird das fertige HTML im Repo. Der Cache beträgt 10 Minuten.

## Rollen

| Schritt | Wer |
|---|---|
| Zweig pushen, Pull Request anlegen | Kerem, erst nach Merts Ja |
| Vorschau ansehen, freigeben, mergen | Mert |
| Prüfung nach dem Merge | Kerem |

## Vor dem Pull Request

1. `node _build/build.mjs`: keine Fehler, danach `git status` ohne Änderungen (Erzeugtes ist eingecheckt).
2. `tabu-check.ps1`: PASS.
3. Kalkulator-Regression gegen die Vorschau: 330 von 330.
4. Formulartest gegen die Attrappe: PASS.
5. Lighthouse für Startseite und vier Kernseiten: nicht schlechter als die Ausgangsmessung.
6. Screenshots 390 px ohne Überlauf.
7. Mert hat die Vorschau gesehen (siehe `VORSCHAU.md`).
8. Im Diff des PR prüfen: keine Datei unter `assets/js/calc*.js`, `assets/css/calc*.css`, `_build/pages/kalkulator.mjs`, `_build/legal-texts.json`.

## Entscheidungen von Mert vor dem Merge

| Nr. | Frage | Vorschlag |
|---|---|---|
| 1 | Titles und H1 für Türen, Paneele, Startseite freigeben | ja; Wortlaut in `CHANGELOG.md` |
| 2 | Zeitprüfung im Formular (3 Sekunden) live nehmen | ja; niemand wird still abgewiesen |
| 3 | Darf das Formular nach dem Merge einmal angekündigt getestet werden (eine echte Testanfrage an `info@europaneel.de`)? | ja; ohne Test bleibt der Anfrageweg unbestätigt |
| 4 | Interne Dokumente im öffentlichen Repo: Dieser Ordner enthält keine Preis-Richtsätze. Die Berichte aus Phase 1 und der Regressionstest bleiben außerhalb des Repos. | so lassen |

## Ablauf

1. Kerem: `git push -u origin feature/europaneel-digital-excellence`, Pull Request gegen `main` mit Verweis auf `CHANGELOG.md` und `TEST-REPORT.md`.
2. Mert: prüft, merged (Merge-Commit, kein Squash, damit ein Revert den ganzen Block zurücknimmt).
3. Zeitpunkt: werktags vormittags, nicht vor einem Wochenende.
4. Kerem, 2 bis 15 Minuten nach dem Merge:
   - `https://www.europaneel.de/` und fünf Kernseiten: Status 200, neuer Title sichtbar.
   - MD5 von `/assets/js/calc.js` gleich `efeebbc3159a2bb48e12e0c8aa49250c`.
   - Kalkulator-Regression gegen die Live-Seite (sendet nichts): 330 von 330.
   - `/index.html`, `/kontakt`, `/kuehlzellen/index.html` im Browser: landen auf der Hauptform.
   - `/sitemap.xml`: 22 URLs. `/robots.txt` unverändert.
   - Konsole ohne Fehler auf Start, Kalkulator, Kontakt.
   - `/docs/europaneel-digital-excellence/CHANGELOG.md` liefert 404 (Ordner wird nicht ausgeliefert).
5. Mit Merts Ja: eine angekündigte Testanfrage über das Kontaktformular; Mert bestätigt den Eingang.
6. Mert, optional: in der Search Console die Sitemap neu einreichen und die Startseite prüfen lassen.

## Beobachtung danach

- Tag 1 und Tag 7: Statusprüfung aller Sitemap-URLs und Stubs.
- Search Console (Mert): Bericht „Seiten" und „Leistung" für `/kuehlhaustueren/` und `/sandwichpaneele/` (geänderte Titles) nach zwei und vier Wochen. Positionen können schwanken; zugesagt wird nichts.
- Eingang von Anfragen: Mert meldet, wenn auffällig weniger oder keine Anfragen kommen. Dann Rollback nach `ROLLBACK-PLAN.md`.

## Risiken

| Risiko | Einschätzung | Absicherung |
|---|---|---|
| Geänderte Titles verschieben Positionen | möglich, in beide Richtungen | nur zwei Seiten; alte Begriffe bleiben in Title oder Text; Revert jederzeit |
| Zeitprüfung hält echte Nutzer auf | gering: Hinweis statt Abweisung, zweiter Klick sendet | Test gegen Attrappe; Schwelle steht in `main.js` (`MIN_FILL_MS`) |
| Skript für Nebenformen stört | gering: greift nur bei exakt passender Nebenform | geprüft für alle 26 Seiten |
| FormSubmit selbst fällt aus | unverändert vorhanden | Telefon, WhatsApp, E-Mail auf jeder Seite; Testanfrage nach Merge |

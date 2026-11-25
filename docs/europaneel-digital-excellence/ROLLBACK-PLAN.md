# ROLLBACK-PLAN (erste Fassung)

Stand: 25.11.2026. Gilt ab dem Zeitpunkt, an dem der Zweig nach `main` gemergt ist. Bis dahin ist die Live-Seite unverändert und es gibt nichts zurückzunehmen.

## Gesicherter Stand

- Commit `8b251e57c1817eab4f65c935f4e3165fab385520` (`origin/main` am 25.11.2026).
- Sicherung außerhalb des Repos: Git-Bundle mit voller Historie, ZIP des Commits, Spiegel der Live-Seite (189 Dateien, byte-identisch mit dem Commit), SHA-256-Liste und `WIEDERHERSTELLUNG.md`. Ablage: Arbeitsordner von Kerem, `backup-2026-11-25`.

## Wann zurücknehmen

| Auslöser | Reaktion |
|---|---|
| Kalkulator rechnet falsch, startet nicht, oder MD5 von `calc.js` weicht ab | sofort zurück |
| Formular lässt sich nicht absenden oder Testanfrage kommt nicht an | sofort zurück, dann Ursache klären (kann auch an FormSubmit liegen) |
| Seiten liefern 404 oder sind sichtbar beschädigt | sofort zurück |
| Konsolenfehler ohne sichtbare Folge | kein Rollback; Korrektur im Zweig |
| Positionen schwanken in den ersten Wochen | kein Rollback; beobachten |

## Weg 1: Merge zurücknehmen (Normalfall, etwa 2 Minuten plus 10 Minuten Cache)

Auf GitHub im gemergten Pull Request „Revert" wählen und den Revert-PR mergen. Oder lokal:

```
git checkout main
git pull
git revert -m 1 <merge-commit>
git push origin main
```

Das macht Mert oder Kerem mit Merts ausdrücklichem Ja. Kein Force-Push, die Historie bleibt erhalten.

## Weg 2: Nur einen Teil zurücknehmen

Die Änderungen liegen in getrennten Commits (Formular, Titles, Verlinkung, Kopfbereich). Ein einzelner Commit lässt sich mit `git revert <hash>` zurücknehmen; danach `node _build/build.mjs` und das Erzeugte einchecken. Nur sinnvoll, wenn die Ursache eindeutig ist. Im Zweifel Weg 1.

## Weg 3: Repo beschädigt oder verloren

Aus dem Bundle wiederherstellen; Schritte stehen in `WIEDERHERSTELLUNG.md` der Sicherung.

## Nach dem Rollback prüfen

1. Startseite und Kalkulator laden, nach 10 Minuten erneut (Cache).
2. MD5 von `/assets/js/calc.js` gleich `efeebbc3159a2bb48e12e0c8aa49250c`.
3. Kalkulator-Regression gegen die Live-Seite: 330 von 330.
4. Title von `/kuehlhaustueren/` wieder „Kühlhaustüren & Isoliertüren ab Lager | Europaneel".
5. Stichprobe Live gegen Sicherung: SHA-256 von `index.html` und `kalkulator.html` gegen `SHA256SUMS.txt`.

## Was ein Rollback nicht zurückholt

- Was Suchmaschinen in der Zwischenzeit gecrawlt haben; das gleicht sich mit dem nächsten Crawl aus.
- Anfragen, die in der Zwischenzeit nicht angekommen sind. Deshalb die Testanfrage direkt nach dem Merge.

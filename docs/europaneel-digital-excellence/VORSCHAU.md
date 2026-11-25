# VORSCHAU des Zweigs

Stand: 25.11.2026. Die Vorschau läuft nur auf dem Arbeitsrechner, nur an `127.0.0.1`, und ist für Suchmaschinen gesperrt.

## Starten und stoppen

Im Arbeitsordner von Kerem (neben dem Worktree `repo`):

```
powershell -ExecutionPolicy Bypass -File vorschau-start.ps1          # Port 8795
powershell -ExecutionPolicy Bypass -File vorschau-start.ps1 -Port 8796
powershell -ExecutionPolicy Bypass -File vorschau-stop.ps1
```

Adresse: `http://localhost:8795/`. Der Kalkulator läuft unter `localhost` und `127.0.0.1`.

## Schutz vor Indexierung

- Der Vorschau-Server setzt auf jede Antwort `X-Robots-Tag: noindex, nofollow, noarchive` und liefert unter `/robots.txt` ein `Disallow: /`.
- Beides steckt nur im Vorschau-Server (`_tools/vorschau-server.mjs`). Der Produktionscode im Zweig enthält kein zusätzliches `noindex`; Titles, Robots-Tags und `robots.txt` sind die für die Live-Seite vorgesehenen.
- Der Server bindet nur an `127.0.0.1`. Aus dem Netz ist er nicht erreichbar.
- Er verhält sich wie GitHub Pages: Verzeichnis ohne Schrägstrich → 301, `.html` ohne Endung → 200, unbekannte Adresse → `404.html` mit Status 404; `_build/`, `docs/` und `*.md` werden nicht ausgeliefert.

## Am Handy ansehen (Anleitung für Mert; nichts davon ist eingerichtet)

Voraussetzung: Tailscale auf dem Arbeitsrechner und auf dem Handy, beide im selben Tailnet. Die Vorschau muss laufen.

Auf dem Arbeitsrechner, als der Benutzer, unter dem Tailscale läuft:

```
tailscale serve --bg --https=8443 http://127.0.0.1:8795
tailscale serve status
```

Am Handy im Browser: `https://<rechnername>.<tailnet>.ts.net:8443/`. Den genauen Namen zeigt `tailscale serve status`.

Beenden:

```
tailscale serve --https=8443 off
```

Wichtig:

- **`tailscale serve`, nicht `tailscale funnel`.** `serve` ist nur im Tailnet erreichbar, `funnel` wäre öffentlich.
- Eigenen Port verwenden (hier 8443), damit bestehende Freigaben auf 443 unberührt bleiben. Vorher `tailscale serve status` ansehen.
- Für HTTPS müssen im Tailnet MagicDNS und HTTPS-Zertifikate aktiviert sein. Der Rechnername erscheint dann im öffentlichen Zertifikatsverzeichnis (nur der Name, kein Inhalt).
- Der `noindex`-Header bleibt erhalten, weil Tailscale die Antworten des Vorschau-Servers durchreicht.

### Einschränkung: Kalkulator

Der Kalkulator startet nur unter `europaneel.de`, `localhost` und `127.0.0.1`. Unter dem Tailnet-Namen zeigt er „Kalkulator nicht verfügbar". Das liegt in `calc.js` und wird nicht geändert. Alle anderen Seiten und das Kontaktformular sind am Handy normal zu sehen.

Kalkulator mobil prüfen, zwei Wege:

1. Am Arbeitsrechner in Chrome `http://localhost:8795/kalkulator.html` öffnen, Entwicklerwerkzeuge (F12), Gerätesymbol, Breite 390.
2. Android-Handy per USB: in Chrome am Rechner `chrome://inspect/#devices`, „Port forwarding" 8795 → `localhost:8795`. Dann am Handy `http://localhost:8795/kalkulator.html`.

### Formulare in der Vorschau

Die Formulare zeigen auch in der Vorschau auf den echten Dienst. **In der Vorschau bitte nichts absenden**, sonst geht eine echte Anfrage an `info@europaneel.de`. Getestet wird das Absenden ausschließlich mit `_tools/form-test.mjs`, das jede Anfrage an den Dienst im Testbrowser abfängt.

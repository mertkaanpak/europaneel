# REDIRECT-MAPPING europaneel.de

Stand: 25.11.2026, aktualisiert nach Block A + B. Ausgangsmessung: Crawl der Live-Seite vom 25.11.2026 (87 URL-Varianten, 8 Host-Varianten). Geprüft im Zweig über die lokale Vorschau, die sich wie GitHub Pages verhält.

## 1. Was das Hosting kann

GitHub Pages bietet keine serverseitigen Weiterleitungen für einzelne URLs und keine eigenen Header. Als echtes 301 erledigt es nur: HTTP → HTTPS, Apex → `www`, `github.io`-Adresse → Domain, Verzeichnis ohne Schrägstrich → mit Schrägstrich. Alles andere geht nur im HTML: Meta-Refresh, Canonical, JavaScript. Der Server antwortet dabei mit 200.

## 2. Grundsatz

**Keine bestehende URL ändert sich.** Alle 22 Sitemap-URLs behalten Pfad und Canonical, auch `/kontakt.html` und `/kalkulator.html`. Im Zweig geprüft: 0 geänderte Canonicals, Sitemap enthält dieselben 22 Adressen.

## 3. Matrix

| Adresse | Antwort | Ziel / Hauptform | Technik | Stand |
|---|---|---|---|---|
| 22 Sitemap-URLs | 200 | sie selbst | – | unverändert |
| `/impressum/`, `/datenschutz/`, `/agb/` | 200 | sie selbst | – | unverändert, weiter außerhalb der Sitemap |
| `/danke.html`, `/404.html` | 200 | – (`noindex`) | – | unverändert |
| `/turen.html` | 200 | `/kuehlhaustueren/` | Meta-Refresh 0 s, Canonical, JavaScript | unverändert |
| `/galerie.html` | 200 | `/referenzen/` | Meta-Refresh 0 s, Canonical, JavaScript | unverändert |
| `/index.html` | 200 | `/` | Canonical (bestand) **plus neu:** `location.replace` im Kopf | **neu in Block B** |
| `/<ordner>/index.html` (24 Seiten) | 200 | `/<ordner>/` | wie oben | **neu in Block B** |
| `/kontakt` | 200 | `/kontakt.html` | wie oben | **neu in Block B** |
| `/kalkulator` | 200 | `/kalkulator.html` | wie oben | **neu in Block B** |
| `/danke` | 200 | `/danke.html` | wie oben | **neu in Block B** |
| `/?utm_…`, `/kontakt.html?projekt=…` | 200 | Canonical auf die Hauptform | – | unverändert; Parameter bleiben bei der Weiterleitung erhalten |
| `/kontakt/`, `/kalkulator/` | 404 | – | – | unverändert, siehe 5 |
| Verzeichnis ohne Schrägstrich | 301 | mit Schrägstrich | GitHub Pages | unverändert |

## 4. Neu: Nebenformen lenken auf die Hauptform

Warum kein Meta-Refresh: `/index.html` und `/` sind dieselbe Datei. Ein Meta-Refresh in dieser Datei würde auch die Hauptform treffen und eine Schleife erzeugen. Deshalb prüft ein kurzes Skript im Kopf den aufgerufenen Pfad und ersetzt ihn nur dann, wenn er genau der Nebenform entspricht:

```
(function(l){if(l.pathname==="/kuehlzellen/index.html")l.replace("/kuehlzellen/"+l.search+l.hash)})(location);
```

- Ein Sprung, nie eine Kette: Das Ziel ist immer die Adresse im Canonical.
- Parameter und Anker bleiben erhalten (`/kontakt?projekt=tuer#anfrage` → `/kontakt.html?projekt=tuer#anfrage`).
- Die Fehlerseite ist ausgenommen, weil sie unter beliebigen Adressen ausgeliefert wird.
- Ohne JavaScript bleibt es beim bisherigen Zustand (200 mit Canonical).
- Grenze: Für Suchmaschinen ist das eine Weiterleitung per JavaScript. Google wertet sie beim Rendern aus; verlässlicher als ein 301 ist sie nicht. Ob Nebenformen im Index stehen, zeigt nur die Search Console.

Quelle: `_build/lib.mjs`, Funktion `altFormRedirect`. Der Build bricht ab, wenn ein interner Link auf eine Nebenform oder auf eine weitergeleitete Adresse zeigt.

## 5. Nicht umgesetzt

| Nr. | Alte Form | Ziel | Grund |
|---|---|---|---|
| W-01 | `/kontakt/` | `/kontakt.html` | Ein Stub `kontakt/index.html` läge neben der Datei `kontakt.html`. Wie GitHub Pages dann `/kontakt` beantwortet (Datei oder 301 auf den Ordner), ist nicht geprüft. Im ungünstigen Fall entstünde eine Kette `/kontakt` → `/kontakt/` → `/kontakt.html`. Erst mit Search-Console-Daten und einem Test auf einem Probe-Repo entscheiden. |
| W-02 | `/kalkulator/` | `/kalkulator.html` | wie W-01 |
| W-04 | `/impressum.html`, `/datenschutz.html`, `/agb.html` | Verzeichnis-URL | Aus der Git-Historie nicht als frühere Seiten belegt; Search Console prüfen. |

## 6. Regeln

1. Weiterleitungen nur über `REDIRECTS` in `_build/site.config.mjs`; der Build schreibt den Stub.
2. Ein Stub zeigt immer direkt auf das Endziel.
3. Weitergeleitete Adressen stehen nie in der Sitemap und werden intern nie verlinkt (Build-Prüfung vorhanden).
4. Stubs bleiben dauerhaft liegen.
5. Nach jedem Merge: Status aller Sitemap-URLs und Stubs prüfen.

## 7. Offen für Mert

1. Search Console, Bericht „Seiten": Stehen Nebenformen (`/index.html`, `/kontakt`, `/kalkulator`) oder 404-Adressen (`/kontakt/`) im Bericht?
2. Sind weitere alte Adressen im Umlauf (Visitenkarten, Fahrzeugbeschriftung, Kleinanzeigen, eBay)?

# P5.js: Enter Key

[English](readme.md)

Zeigt drei Arten, auf die **Enter**-Taste zu reagieren: solange sie
gedrückt ist, als einmalige Aktion beim Drücken und als Ein/Aus-Schalter.
Jeder Zustand wird als gefüllter Kreis angezeigt. Nützlich als Muster für
Taster, Fussschalter oder Tastatur-Emulatoren, die Enter senden.

## Installation

Voraussetzungen: eine Tastatur (oder ein Gerät, das die Enter-Taste sendet)
und ein aktueller Browser.

Bibliotheken (in `libraries/`): p5.js 1.10.0, p5.sound 1.0.1 (eingebunden,
nicht verwendet).

## Ausführen

1. Den Ordner in Visual Studio Code öffnen und Live Server starten (in der
   Statusleiste auf **Go Live** klicken).
2. In die Zeichenfläche klicken, damit sie den Tastatur-Fokus hat.
3. **Enter** drücken und loslassen:
   - **Down** (rot): gefüllt, solange die Taste gedrückt ist.
   - **Once** (grün): leuchtet bei jedem Drücken eine Sekunde auf.
   - **Toggled** (blau): schaltet bei jedem Loslassen ein oder aus.

## Coding-Hilfe

- **`sketch.js` → Zustandsvariablen**: `isDown`, `once` und `isToggled`
  speichern die drei Zustände.
- **`keyPressed()`**: setzt `isDown` nur, wenn Enter nicht schon gedrückt
  war. So löst die Tastenwiederholung einer gehaltenen Taste die einmalige
  Aktion nicht erneut aus. Danach wird `doOnceOnPress()` aufgerufen. Gibt
  `false` zurück, um das Standardverhalten des Browsers zu unterdrücken.
- **`doOnceOnPress()`**: setzt `once` und ignoriert weitere Aufrufe, bis
  ein `setTimeout` von einer Sekunde das Flag zurücksetzt. Hier die eigene
  einmalige Aktion einfügen; mit den 1000 ms die Sperrzeit anpassen.
- **`keyReleased()`**: setzt `isDown` zurück und schaltet `isToggled` um.
- **`draw()`**: zeichnet die drei Kreise und füllt sie je nach Zustand. Um
  auf eine andere Taste zu reagieren, in beiden Tasten-Handlern `ENTER`
  durch einen anderen `keyCode` ersetzen (z. B. `32` für die Leertaste).

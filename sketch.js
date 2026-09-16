// Variablen für die Zustände der Tasten
let isDown = false      // true, wenn die ENTER-Taste gerade gedrückt wird
let isToggled = false   // true, wenn die ENTER-Taste umgeschaltet wurde
let once = false        // true für einmalige Aktion beim Drücken

// Funktion, die eine einmalige Aktion beim Drücken ausführt.
// Zur Visualisierung setzt sie das Flag once auf true, und nach einer
// Sekunde automatisch auf false.
function doOnceOnPress() {
  if (once === true) return       // Wenn die Aktion schon läuft, nichts tun
  once = true                     // Aktion starten
  setTimeout(() => {
    once = false                  // Nach 1 Sekunde zurücksetzen
  }, 1000)
}

function setup() {
  createCanvas(400, 400);         // Zeichenfläche erstellen
}

function draw() {
  background('black');            // Hintergrund schwarz
  noFill()                        // Keine Füllfarbe für die Kreise
  stroke('white')                 // Weißer Rand
  // Drei Kreise zeichnen
  circle(width * .25, height / 2, width / 5)
  circle(width * .5, height / 2, width / 5)
  circle(width * .75, height / 2, width / 5)

  // Wenn die Taste gedrückt wird, linker Kreis rot füllen
  if (isDown) {
    fill('red')
    stroke('red')
    circle(width * .25, height / 2, width / 5)
  }

  // Wenn die einmalige Aktion aktiv ist, mittlerer Kreis grün füllen
  if (once) {
    fill('green')
    stroke('green')
    circle(width * .5, height / 2, width / 5)
  }

  // Wenn toggled, rechter Kreis blau füllen
  if (isToggled) {
    fill('blue')
    stroke('blue')
    circle(width * .75, height / 2, width / 5)
  }

  // Beschriftungen unter den Kreisen
  textAlign(CENTER)
  fill('white')
  text('Down', width * .25, height * .75);
  text('Once', width * .5, height * .75);
  text('Toggled', width * .75, height * .75);
}

// Wenn eine Taste gedrückt wird
function keyPressed () {
  if (!isDown && keyCode === ENTER) {  // Nur reagieren, wenn ENTER gedrückt wird und vorher nicht gedrückt war
    isDown = true                       // Taste als gedrückt markieren
    doOnceOnPress()                     // Einmalige Aktion ausführen
  }
  return false                          // Verhindert Standardverhalten der Taste
}

// Wenn eine Taste losgelassen wird
function keyReleased () {
  if (keyCode === ENTER) {              // Nur bei ENTER
    isDown = false                       // Taste nicht mehr gedrückt
    isToggled = !isToggled               // Zustand umschalten
  }
  return false
}
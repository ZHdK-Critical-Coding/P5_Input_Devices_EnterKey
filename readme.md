# P5.js: Enter Key

[Deutsch](README_DE.md)

Shows three ways to react to the **Enter** key: while it is held down, as a
one-shot action on press, and as an on/off toggle. Each state is shown as a
filled circle. Useful as a pattern for buttons, foot switches or keyboard
emulators that send Enter.

## Installation

Requirements: a keyboard (or any device that sends the Enter key) and a
current browser.

Libraries (in `libraries/`): p5.js 1.10.0, p5.sound 1.0.1 (included, not
used).

## How to Run

1. Open the folder in Visual Studio Code and start Live Server (click
   **Go Live** in the status bar).
2. Click the canvas so it has keyboard focus.
3. Press and release **Enter**:
   - **Down** (red): filled as long as the key is held.
   - **Once** (green): lights up for one second on each press.
   - **Toggled** (blue): switches on or off each time the key is released.

## Coding Help

- **`sketch.js` → state variables**: `isDown`, `once` and `isToggled` hold
  the three states. The comments in the code are in German.
- **`keyPressed()`**: sets `isDown` only if Enter was not already down, so
  the key repeat of a held key does not trigger the one-shot action again.
  Then it calls `doOnceOnPress()`. Returns `false` to suppress the browser's
  default key behaviour.
- **`doOnceOnPress()`**: sets `once` and ignores further calls until a
  1-second `setTimeout` has reset the flag. Put your own one-shot action
  here and change the 1000 ms to adjust the lock time.
- **`keyReleased()`**: clears `isDown` and flips `isToggled`.
- **`draw()`**: draws the three circles and fills them according to the
  states. To react to another key, replace `ENTER` with another `keyCode`
  (e.g. `32` for space) in both key handlers.

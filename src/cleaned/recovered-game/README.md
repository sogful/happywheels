# Recovered game source

This source reconstruction comes from the custom-compressed game entry. It resolves 114,562 string-table calls, removes the entry-level self-defending wrappers and unused literal bindings, then exports the 52 Webpack factories as ordered fragments of at most 800 lines each.

`assemble.js` concatenates each module's fragments and exposes `window.loadrecoveredgamemodules()`. After awaiting that function, load `runtime.js` as a classic script. The runtime reads the reconstructed factories from `window.happywheelgamemodules`.

The default game entry and vendor runtime remain unchanged. This reconstructed path has parser and factory-compilation checks, but has not been browser-tested.

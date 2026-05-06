# Raster Net HTTP Mesh Walkthrough

This walk-through keeps the domain vocabulary close to the data instead of burying it in prose.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | packet span | 186 | ship |
| stress | retry pressure | 142 | ship |
| edge | route drift | 221 | ship |
| recovery | socket risk | 152 | ship |
| stale | packet span | 252 | ship |

Start with `stale` and `stress`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

`stale` is the optimistic case; use it to make sure the scoring path still rewards strong signal.

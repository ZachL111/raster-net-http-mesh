# Review Journal

I treated `raster-net-http-mesh` as a project where the smallest useful behavior should still be inspectable.

The local checks classify each case as `ship`, `watch`, or `hold`. That gives the project a small review vocabulary that matches its networking focus without claiming live deployment or external usage.

## Cases

- `baseline`: `packet span`, score 186, lane `ship`
- `stress`: `retry pressure`, score 142, lane `ship`
- `edge`: `route drift`, score 221, lane `ship`
- `recovery`: `socket risk`, score 152, lane `ship`
- `stale`: `packet span`, score 252, lane `ship`

## Note

This file is intentionally plain so the fixture remains the source of truth.

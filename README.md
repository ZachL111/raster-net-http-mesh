# raster-net-http-mesh

`raster-net-http-mesh` explores networking with a small TypeScript codebase and local fixtures. The technical goal is to design a TypeScript verification harness for http systems, covering security rule linting, safe and unsafe fixtures, and failure-oriented tests.

## Reason For The Project

This is intentionally local and self-contained so it can be inspected without credentials, services, or seeded history.

## Raster Net HTTP Mesh Review Notes

For a quick review, compare `packet span` with `retry pressure` before reading the middle cases.

## What It Does

- `fixtures/domain_review.csv` adds cases for packet span and retry pressure.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/raster-net-http-walkthrough.md` walks through the case spread.
- The TypeScript code includes a review path for `packet span` and `retry pressure`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## How It Is Put Together

The fixture data drives the tests. The code stays thin, while `metadata/domain-review.json` and `config/review-profile.json` explain what each case is meant to protect.

The TypeScript code keeps the review rule close to the tests.

## Run It

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Check It

The check exercises the source code and the review fixture. `stale` is the high score at 252; `stress` is the low score at 142.

## Boundaries

This remains a local project with deterministic fixtures. It does not depend on credentials, hosted services, or live data. Future work should add richer malformed inputs before widening the public API.

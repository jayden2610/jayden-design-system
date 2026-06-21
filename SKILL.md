---
name: jayden-design
description: Use this skill to generate well-branded interfaces and assets with the Jayden Design System — a trend-driven system (9 OKLCH trends × 3 variants plus a restraint-first glass layer), for production or throwaway prototypes/mocks. Contains tokens, glass + component primitives, guidelines, and one example product build (Tymos).
user-invocable: true
---

First, read `design-tokens.json` — it contains every token, theme, and component in a single structured file. One read gives you the full system.
Then read `GUIDELINES.md` — the taste profile, pre-build gate, anti-slop test, and the color + glass rules govern every decision.

This is a **trend-driven design system**. To use it:
1. Open `design-tokens.json` and pick **one trend-variant** (e.g. `liquid-glass/a`, `resonant-stark/b`, `bento-grid/c`). The JSON has every value at a glance.
2. Apply the corresponding class (e.g. `liquid-glass-a`, `resonant-stark-b`, `bento-grid-c`) on `<html>` or a wrapper. Link `styles.css`.
3. Build with the token-driven components — they read `--bg / --surface / --accent / --text
   / --muted` and re-theme from that one class. Never use raw hex; use the OKLCH tokens from your chosen variant.

Key files:
- `README.md` — full guide: content fundamentals, visual foundations, iconography, manifest.
- `GUIDELINES.md` — taste profile, pre-build gate, glass restraint rule, color system.
- `styles.css` — link this one file; it reaches every token, font, and component style.
- `tokens/` — `index.css` + `base.css` + `trends/*.css` (the 9 trends) + `typography.css`.
- `components/` — `glass.css` / `buttons.css` / `cards.css`, and `core/` React primitives
  (Button, Card, Badge).

**Tymos is an example, not the core system.** `ui_kits/tymos/` and `tokens/products/tymos.css`
(`class="tymos"`) are a worked reference showing the system's principles applied to a finished
product — look at it to see *how to build*, but design new work with a **trend-variant class**,
not the Tymos theme.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and create
static HTML files for the user to view. If working on production code, copy assets and read the
rules here to become an expert in designing with this system.

If the user invokes this skill without other guidance, ask what they want to build, run the
pre-build gate from `GUIDELINES.md`, ask a few questions, and act as an expert designer who
outputs HTML artifacts _or_ production code, depending on the need.

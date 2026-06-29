---
name: jayden-design
description: Use this skill to generate well-branded interfaces and assets with the Jayden Design System — a trend-driven system (9 OKLCH trends × 3 variants plus a restraint-first glass layer), for production or throwaway prototypes/mocks. Contains tokens, glass + component primitives, guidelines, and one example product build (Tymos).
user-invocable: true
---

First, read `design-tokens.json` — it contains every token, theme, and component in a single structured file. One read gives you the full system.
Then read `GUIDELINES.md` — the taste profile, pre-build gate, anti-slop test, and the color + glass rules govern every decision.
Then read `project-templates/` for reference layouts you can adapt.

## How to use the design system

This is a **trend-driven design system**. To use it:
1. Open `design-tokens.json` and pick **one trend-variant** (e.g. `liquid-glass/a`, `resonant-stark/b`, `bento-grid/c`). The JSON has every value at a glance.
2. Apply the corresponding class (e.g. `liquid-glass-a`, `resonant-stark-b`, `bento-grid-c`) on `<html>` or a wrapper. Link `styles.css`.
3. Build with the token-driven components — they read `--bg / --surface / --accent / --text / --muted` and re-theme from that one class. Never use raw hex; use the OKLCH tokens from your chosen variant.

Key files:
- `README.md` — full guide: content fundamentals, visual foundations, iconography, manifest.
- `GUIDELINES.md` — taste profile, pre-build gate, glass restraint rule, color system.
- `styles.css` — link this one file; it reaches every token, font, and component style.
- `tokens/` — `index.css` + `base.css` + `trends/*.css` (the 9 trends) + `typography.css`.
- `components/` — `glass.css` / `buttons.css` / `cards.css`, and `core/` React primitives (Button, Card, Badge).
- `project-templates/` — low-token HTML templates for common page types (landing, dashboard, SaaS product).

**Tymos is an example, not the core system.** `ui_kits/tymos/` and `tokens/products/tymos.css`
(`class="tymos"`) are a worked reference showing the system's principles applied to a finished
product — look at it to see *how to build*, but design new work with a **trend-variant class**,
not the Tymos theme.

## Project brief workflow (MANDATORY)

Whenever the user asks to build a website, page, or interface of any kind, ALWAYS follow this structured workflow. Do not skip steps.

### Step 1 — Gather the brief

Quickly establish:
- **What are they building?** (landing page, dashboard, SaaS product page, portfolio, e-commerce, etc.)
- **Who is it for?** (target audience, industry, vibe)
- **Any existing brand cues?** (logo, colors, competitor references)
- **Single-page or multi-page?**
- **Deadline / production level?** (quick mock vs production-ready)

### Step 2 — Recommend a style + colorway

Pick ONE trend-variant and explain why. Structure your recommendation like this:

```
Recommended: {trend} · {variant}

Why: 1-2 sentences connecting the project needs to the trend's aesthetic.

Colorway:
  --bg / --paper | oklch(...)  → description of what this does
  --accent       | oklch(...)  → description
  --text / --ink | oklch(...)  → description
  --muted        | oklch(...)  → description

Page flow:
  - {section 1}: brief description of layout/mood
  - {section 2}: brief description
  - {section 3}: brief description

Alternative pick: {trend} · {variant} — for if they want a {contrasting mood}.
```

### Step 3 — Spin up 1-3 low-token HTML templates

Before building the final page, create quick layout sketches to let the user see the overall flow. Each template is a single self-contained HTML file:

- **Target:** ~15-30KB per file, including inline styles
- **Content:** Real copy, no lorem ipsum. Delivery-ready placeholder text.
- **Structure:** Clear sections with comments, easy for the AI to extend
- **Theme picker:** Include a 2-3 option dropdown at the top so the user can preview different trend moods on the same layout
- **Naming:** `project-templates/{type}-{variant}.html` or just `project-templates/{type}.html`

After the user picks a direction, build the final polished page using the full design system (link `styles.css`).

### Step 4 — Build the final page

Link `styles.css` and use the full token + component layer. Apply the chosen trend class on `<html>`. Deliver as a single HTML file in `ui_kits/{project-name}/` or at the repo root.

## Trend quick-reference for recommendations

| Category | Trend | Best for |
|----------|-------|----------|
| Premium / brand | Resonant Stark (A-D) | Luxury, architecture, creative agencies, healthcare |
| Warm / cinematic | Liquid Glass (A-C) | Lifestyles, wellness, content platforms, product showcases |
| SaaS / product | Live Interface (A-C) | Web apps, dashboards, SaaS landing pages |
| Dark / cyberpunk | Neon Noir (A-C) | Gaming, crypto, developer tools, nightlife |
| Editorial / content | Narrative Motion (A-C) | Magazines, blogs, long-form content |
| Grid / data | Bento Grid (A-C) | Analytics dashboards, portfolios, feature grids |
| Immersive / 3D | Spatial Presence (A-C) | Creative portfolios, WebGL showcases, futuristic brands |
| Cinematic / ambient | Open World Ambient (A-C) | Video landing pages, meditation apps, gaming UIs |
| Print / artistic | Editorial Print (A-C) | Zines, artist portfolios, coffee brands |

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and create
static HTML files for the user to view. If working on production code, copy assets and read the
rules here to become an expert in designing with this system.

If the user invokes this skill without other guidance, ask what they want to build, run the
pre-build gate from `GUIDELINES.md`, ask a few questions, and act as an expert designer who
outputs HTML artifacts _or_ production code, depending on the need.

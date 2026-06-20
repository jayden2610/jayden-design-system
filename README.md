# Jayden Design System

A **trend-driven design system**: **9 trends × 3 color variants** (28 token sets) in OKLCH,
plus a restraint-first glass component layer and token-driven React primitives. One source
of truth; swap a single class to re-theme an entire page.

> Canonical source: `https://github.com/jayden2610/jayden-design-system`. This project
> mirrors that repo's `tokens/`, `components/*.css`, `GUIDELINES.md` verbatim and adds the
> compiler scaffolding (a `styles.css` entrypoint, React component primitives, specimen
> cards) plus one **example** product build (Tymos — see below).

## How it's meant to be used

Pick **one trend-variant class** per page (e.g. `liquid-glass-a`, `resonant-stark-b`,
`bento-grid-c`) and apply it on `<html>` or a wrapper. Every token-driven component reads
the semantic tokens `--bg / --surface / --accent / --text / --muted`, so the whole page
re-themes from that one class. `GUIDELINES.md` is the judgment layer — taste profile,
pre-build gate, anti-slop test, color + glass rules — read it before any design decision.

```html
<link rel="stylesheet" href="styles.css">
<html class="liquid-glass-a">   <!-- pick one trend-variant class -->
```

Each trend exposes variants `-a` / `-b` / `-c` (Resonant Stark also has `-d`, "Studio Blush").

## Trends

| # | Trend | Vibe |
|---|-------|------|
| 1 | Spatial Presence | 3D immersive WebGL |
| 2 | Liquid Glass | Glassmorphism / Vision Pro material |
| 3 | Neon Noir | Cyberpunk dark |
| 4 | Narrative Motion | Scrollytelling |
| 5 | Live Interface | Embedded product preview |
| 6 | Open World Ambient | Cinematic scene + floating UI |
| 7 | Editorial Print | Neo-Japandi / illustration-first |
| 8 | Bento Grid | Modular info architecture |
| 9 | Resonant Stark | Quiet premium / restrained minimalism |

---

## Content fundamentals — how this system writes

Voice is governed by `GUIDELINES.md`'s taste profile. The constants across every trend:

- **No placeholder copy, ever.** No "Lorem ipsum", no "Product Name" — delivery-ready, real
  content only. This is a hard rule in the pre-build gate.
- **Restraint over hype.** Copy is confident and plain, not salesy. Let the visual system
  carry personality; the words state the value directly.
- **Casing.** Sentence case for headings and UI; reserve UPPERCASE for mono eyebrows/labels
  with wide tracking. Numbers and metrics belong in the mono family.
- **Differentiation anchor.** Every build must be recognizable with the logo removed — the
  copy should reinforce that single distinctive idea, not generic category language.
- **Tone per trend.** Pick one dominant direction (the pre-build gate's step 2) and keep the
  voice consistent with the trend's mood — airy and quiet for Resonant Stark, cinematic for
  Open World Ambient, etc. Never mix.

---

## Visual foundations

**Color.** 2–3 hues max; richness from texture and depth, not hue count. All color lives in
OKLCH tokens under `tokens/trends/*.css` — **never raw hex in components**. One trend-variant
class per page; components read `--bg / --surface / --accent / --text / --muted / --border`.
Avoid the purple-on-white SaaS gradient (instant disqualification).

**Type.** Each trend names its own pairing and headline `clamp()` range inline. The shared
type layer (`tokens/typography.css`) supplies families, a fluid scale (`--type-display` …
`--type-eyebrow`), weights, line-heights, and tracking. Mono eyebrows are uppercase with
wide tracking (`--tracking-eyebrow`).

**Spacing & radius.** Shared primitives in `tokens/base.css`: an 8-step spacing scale, a
radius scale capped at `--radius-card-max: 20px` (the hard ceiling for non-pill elements —
full-pill only for tags and buttons).

**Glass (the 2026 Restraint Rule).** Heavy frosted blur on *every* panel is OUT. Glass goes
on floating/overlay elements only (nav, modals, popovers, a single hero panel); content
surfaces sit on solid/near-solid backgrounds. Blur signals z-hierarchy — deeper blur = higher
layer, so **vary blur per layer**. Every glass surface clears ≥ 4.5:1 text contrast; if the
scene breaks that, raise opacity (`.glass-dense`) — don't lower the blur. Default `.glass`;
reserve `.glass-deep` for the single topmost floating element.

**Depth & motion.** Cinematic depth — foreground / midground / background always present.
Light, airy, Apple-clean by default (morning light, not nightclub). Motion reveals and
breathes — never decorates. Easing leans on `--ease-out-power3` (GSAP power3.out as a CSS
cubic-bezier). Personality comes through hover microinteractions — alive, not loud.

**Hover / press.** Subtle and tactile: lift + shadow deepen, or a warm surface tint on hover;
a slight `scale()` down on press. No harsh edges, heavy borders, or strong drop shadows —
especially on glass.

**Backgrounds.** Flat and intentional. **No CSS-only nature/interior/cinematic backgrounds** —
they always read as unconvincing. Use real imagery or flat color fields.

---

## Iconography

The system is icon-agnostic and does not ship a bundled icon font. For UI affordances, link a
single consistent CDN set (e.g. Tabler, Lucide, Heroicons) and stay within one stroke weight
and fill style across a build — never mix sets. Brand marks (third-party logos) use their
official single-color SVG paths. The **Tymos example** (below) demonstrates this: it uses
**Tabler Icons** (webfont, `<i class="ti ti-…">`) for UI and a small set of hand-built flat
SVGs (favicon, candle) for brand. Match a target product's real icon set when recreating it;
don't hand-draw replacements.

---

## Example build — Tymos

**Tymos is an example, not the core system** — a real product (a warm candle-lit Pomodoro
timer) included to show the system's principles applied end-to-end: radical color restraint,
soft warm shadows, one floating glass panel, motion that reveals. Treat it as a reference for
*how to build*, not as the system's brand.

- `ui_kits/tymos/` — interactive recreation (timer + task split screen).
- `tokens/products/tymos.css` — an **example** product theme (`class="tymos"`), with the
  product's own palette/type. It sits alongside the trends as a worked example, not a 10th trend.
- `guidelines/{colors,type,brand}/tymos-*.html` — example specimen cards (palette, type, candle).

When you want to *use the design system*, reach for a **trend-variant class**. When you want
to see *what a finished product looks like*, look at Tymos.

---

## Index / manifest

**Root**
- `styles.css` — global entrypoint. Link this one file; it `@import`s everything below.
- `README.md` — this guide. `GUIDELINES.md` — taste profile, pre-build gate, anti-slop test,
  color + glass rules (mirrors canonical repo).
- `SKILL.md` — Agent Skills wrapper for use in Claude Code.

**Tokens** (`tokens/`)
- `index.css` → `base.css` + `trends/*.css` — the 9 trends × 3 OKLCH variants (canonical).
- `typography.css` — shared families, fluid scale, weights, tracking (+ General Sans webfont).
- `products/tymos.css` — the Tymos **example** theme (`class="tymos"`).

**Components** (`components/`)
- CSS (canonical): `glass.css`, `buttons.css`, `cards.css` — token-driven, class-based.
- React primitives (`core/`): `Button`, `Card`, `Badge` — read `window.JaydenDesignSystem_8ad61a`,
  re-theme from the active scope. Each has a `.d.ts`, `.prompt.md`, and a demo `@dsCard`.

**UI kit** (`ui_kits/tymos/`) — the example product: `index.html`, `App.jsx`, `TimerPanel.jsx`,
`TaskPanel.jsx`, `Candle.jsx`.

**Guidelines / specimen cards** (`guidelines/`) — populate the Design System tab: per-trend
color/type/spacing specimens, the glass-layer and trend-index brand cards, plus the Tymos
example cards.

**Assets** (`assets/`) — `tymos-favicon.svg` (example brand mark).

## Sources & provenance

- **Canonical design system:** `https://github.com/jayden2610/jayden-design-system` —
  tokens, glass spec, and guidelines (themselves extracted from the `ui-design-2026` skill).
  Explore it to extend the system faithfully.
- **Tymos (example product):** `https://github.com/jayden2610/tymos` — source of the example
  UI kit and theme.

## Caveats

- **General Sans** (shared type layer) is served from Fontshare's official free CDN via inlined
  `@font-face` rules — licensed, no upload needed. Newsreader + JetBrains Mono come from Google
  Fonts; the Tymos example uses Lora / Nunito / DM Mono (Google Fonts).

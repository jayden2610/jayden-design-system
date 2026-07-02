---
version: alpha
name: Liquid Glass
description: "Glassmorphism / Apple Vision Pro material — frosted panels, depth layers, warm or cool scene temperatures. Apply class `liquid-glass-a`, `liquid-glass-b`, or `liquid-glass-c` on `<html>`."
colors:
  bg_fallback: "oklch(15% 0.008 70)"
  text: "oklch(92% 0.018 75)"
  text_dark: "oklch(8% 0.012 70)"
  glass: rgba(255,255,255,0.18)
  glass_border: rgba(255,255,255,0.18)
  accent: "oklch(74% 0.12 72)"
  accent_pale: "oklch(82% 0.07 72)"
  accent_deep: "oklch(61% 0.09 72)"
  muted: "oklch(92% 0.018 75 / 0.6)"
  primary: "{colors.accent}"
typography:
  h1:
    fontFamily: General Sans
    fontSize: 2.5rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  body-md:
    fontFamily: General Sans
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  eyebrow:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: 500
    letterSpacing: "0.22em"
    textTransform: uppercase
rounded:
  sm: 8px
  md: 16px
  lg: 20px
spacing:
  sm: 8px
  md: 16px
  lg: 24px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "999px"
    padding: 12px 24px
  button-secondary:
    backgroundColor: "{colors.bg_fallback}"
    textColor: "{colors.text}"
    rounded: "999px"
    padding: 12px 24px
  card:
    backgroundColor: "{colors.bg_fallback}"
    rounded: "16px"
    padding: 24px
---

## Overview

Glassmorphism / Apple Vision Pro material quality — frosted panels floating over cinematic scenes. Panels feel like real glass, not blue rectangles. Depth through blur hierarchy (20px → 52px) and warm-cool temperature shifts.

**Activation:** Apply class `liquid-glass-a`, `liquid-glass-b`, or `liquid-glass-c` on `<html>`.

**Tone:** Warm cinematic (default), cool evening, or golden hour intimacy.

**Class format:** `liquid-glass-{variant}`

## Colors

The YAML frontmatter represents the primary variant (`a`). This trend has 3 variants:

| Variant | Name | Description |
|---------|------|-------------|
| a | Morning Gold | Warm cinematic — Jayden's confirmed taste. Default. |
| b | Midnight Indigo | Cool evening scene, deep focus, cinematic night. Blue-tinted glass. |
| c | Rose Dusk | Warm pink — golden hour, intimate, lifestyle/wellness. Rose-tinted glass. |

All color values use OKLCH for perceptual uniformity. Components read semantic tokens (`--bg`, `--surface`, `--accent`, `--text`, `--muted`, `--border`) set by the active variant class.

## Typography

Fonts are provided by the shared type layer. Display type uses a fluid `clamp()` scale at runtime; the YAML shows the midpoint. Body sits at `1rem`. Mono eyebrows run uppercase with 0.22em tracking on JetBrains Mono.

## Layout

Spacing follows an 8-point grid scale (`--space-1` through `--space-8`). Radii are capped at `--radius-card-max: 20px` for non-pill elements. Layout uses CSS Grid with container queries where supported.

## Components

Components are token-driven — they read CSS custom properties set by the active trend class. React primitives (Button, Card, Badge) are available in `components/core/` with full TypeScript definitions.

CSS classes (`.btn`, `.card`, `.glass`) apply styles from the active theme. See `design-tokens.json` `components` for full prop specs and variant documentation.
### Glass System (2026 Restraint Rule)

Glass is for floating/overlay elements only — nav, modals, popovers, a single hero panel. Content surfaces sit on solid backgrounds. Blur signals z-hierarchy: deeper blur = higher layer.

| Class | Usage | Blur | Background |
|-------|-------|------|------------|
| `.glass` | Default floating elements | 20px | `rgba(255,255,255,0.14)` |
| `.glass-deep` | Single topmost element | 52px | `rgba(255,255,255,0.18)` |
| `.glass-dense` | When text needs reliable opaque backing | 32px | `rgba(255,255,255,0.42)` |

Every glass surface must clear 4.5:1 text contrast. If the scene breaks that, use `.glass-dense` — don't lower the blur.

## Do's and Don'ts

- **Do** vary blur depth per z-layer — deeper blur = higher elevation (20px default, 52px for topmost).
- **Do** use `.glass` for most floating elements, `.glass-deep` for the single topmost element.
- **Don't** put heavy blur on every panel — glass is for overlays only.
- **Don't** let glass text fall below 4.5:1 contrast.

- **Do** follow the pre-build gate in `GUIDELINES.md` before starting any design.
- **Do** use real content — no placeholder copy ever.
- **Don't** mix tokens from different trends or variants on the same page.
- **Don't** use raw hex values — always reference the semantic tokens.

---

*Generated from `design-tokens.json`. Canonical source: `github.com/jayden2610/jayden-design-system`.*

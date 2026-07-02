---
version: alpha
name: Bento Grid
description: "Modular Info Architecture / SaaS Layout — grid-based layout with surface-2 for sub-cards within cells. surface / border / accent tokens. Apply class `bento-grid-a`, `bento-grid-b`, or `bento-grid-c` on `<html>`."
colors:
  bg: "oklch(97% 0.004 255)"
  surface: "oklch(100% 0 0)"
  surface_2: "oklch(94% 0.006 255)"
  accent: "oklch(52% 0.22 255)"
  accent_dark: "oklch(38% 0.20 255)"
  ink: "oklch(10% 0.008 255)"
  muted: "oklch(58% 0.010 255)"
  border: "oklch(88% 0.006 255)"
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
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "999px"
    padding: 12px 24px
  card:
    backgroundColor: "{colors.bg}"
    rounded: "16px"
    padding: 24px
---

## Overview

Modular info architecture — grid-based SaaS layouts with surface-2 for sub-cells within cards. Clean borders, structural clarity, Apple marketing warmth for lifestyle variants.

**Activation:** Apply class `bento-grid-a`, `bento-grid-b`, or `bento-grid-c` on `<html>`.

**Tone:** Clean modular — cool electric blue, dark premium obsidian, or warm linen editorial.

**Class format:** `bento-grid-{variant}`

## Colors

The YAML frontmatter represents the primary variant (`a`). This trend has 3 variants:

| Variant | Name | Description |
|---------|------|-------------|
| a | Clean Light | Cool white, electric blue, Vercel/Linear energy |
| b | Obsidian Grid | Dark premium product, high-contrast cells, Raycast energy |
| c | Warm Linen | Warm neutral — editorial bento, Apple marketing warmth, lifestyle brands |

All color values use OKLCH for perceptual uniformity. Components read semantic tokens (`--bg`, `--surface`, `--accent`, `--text`, `--muted`, `--border`) set by the active variant class.

## Typography

Fonts are provided by the shared type layer. Display type uses a fluid `clamp()` scale at runtime; the YAML shows the midpoint. Body sits at `1rem`. Mono eyebrows run uppercase with 0.22em tracking on JetBrains Mono.

## Layout

Spacing follows an 8-point grid scale (`--space-1` through `--space-8`). Radii are capped at `--radius-card-max: 20px` for non-pill elements. Layout uses CSS Grid with container queries where supported.

## Components

Components are token-driven — they read CSS custom properties set by the active trend class. React primitives (Button, Card, Badge) are available in `components/core/` with full TypeScript definitions.

CSS classes (`.btn`, `.card`, `.glass`) apply styles from the active theme. See `design-tokens.json` `components` for full prop specs and variant documentation.

## Do's and Don'ts

- **Do** use `surface-2` for sub-cells within bento cards.
- **Do** maintain consistent grid gaps with the spacing scale.
- **Don't** use glassmorphism — bento is solid-surface.
- **Don't** break the grid — every element aligns to it.

- **Do** follow the pre-build gate in `GUIDELINES.md` before starting any design.
- **Do** use real content — no placeholder copy ever.
- **Don't** mix tokens from different trends or variants on the same page.
- **Don't** use raw hex values — always reference the semantic tokens.

---

*Generated from `design-tokens.json`. Canonical source: `github.com/jayden2610/jayden-design-system`.*

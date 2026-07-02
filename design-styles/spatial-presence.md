---
version: alpha
name: Spatial Presence
description: "3D Immersive WebGL — cold, infinite, machine precision. Each variant: 2 accents + text + muted. Apply class `spatial-presence-a`, `spatial-presence-b`, or `spatial-presence-c` on `<html>`."
colors:
  bg: "oklch(9% 0.012 255)"
  surface: "oklch(13% 0.014 255)"
  accent_1: "oklch(62% 0.20 255)"
  accent_2: "oklch(58% 0.18 295)"
  text: "oklch(94% 0.004 255)"
  muted: "oklch(50% 0.008 255)"
  primary: "{colors.accent_1}"
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
    rounded: "8px"
    padding: 12px 24px
  button-secondary:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    rounded: "8px"
    padding: 12px 24px
  card:
    backgroundColor: "{colors.bg}"
    rounded: "16px"
    padding: 24px
---

## Overview

3D immersive WebGL experiences — cold, infinite, machine precision. Each variant layers two accents over a deep-space background. No glassmorphism; depth comes from particles, geometry, and light.

**Activation:** Apply class `spatial-presence-a`, `spatial-presence-b`, or `spatial-presence-c` on `<html>`.

**Tone:** Cold, infinite, machine precision.

**Class format:** `spatial-presence-{variant}`

## Colors

The YAML frontmatter represents the primary variant (`a`). This trend has 3 variants:

| Variant | Name | Description |
|---------|------|-------------|
| a | Electric Void | Cold, infinite, machine precision |
| b | Solar Forge | Warm foreground over cool space bg — molten amber, industrial heat |
| c | Jade Terminal | Cool green — bioluminescent, organic precision, Zaha Hadid meets nature |

All color values use OKLCH for perceptual uniformity. Components read semantic tokens (`--bg`, `--surface`, `--accent`, `--text`, `--muted`, `--border`) set by the active variant class.

## Typography

Fonts are provided by the shared type layer. Display type uses a fluid `clamp()` scale at runtime; the YAML shows the midpoint. Body sits at `1rem`. Mono eyebrows run uppercase with 0.22em tracking on JetBrains Mono.

## Layout

Spacing follows an 8-point grid scale (`--space-1` through `--space-8`). Radii are capped at `--radius-card-max: 20px` for non-pill elements. Layout uses CSS Grid with container queries where supported.

## Components

Components are token-driven — they read CSS custom properties set by the active trend class. React primitives (Button, Card, Badge) are available in `components/core/` with full TypeScript definitions.

CSS classes (`.btn`, `.card`, `.glass`) apply styles from the active theme. See `design-tokens.json` `components` for full prop specs and variant documentation.

## Do's and Don'ts

- **Do** use particle systems and 3D geometry for depth.
- **Do** keep type clean and sans-serif with wide tracking.
- **Don't** use glassmorphism — this trend is solid-surface.
- **Don't** add warm tones unless the variant explicitly calls for them.

- **Do** follow the pre-build gate in `GUIDELINES.md` before starting any design.
- **Do** use real content — no placeholder copy ever.
- **Don't** mix tokens from different trends or variants on the same page.
- **Don't** use raw hex values — always reference the semantic tokens.

---

*Generated from `design-tokens.json`. Canonical source: `github.com/jayden2610/jayden-design-system`.*

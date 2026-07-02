---
version: alpha
name: Editorial Print
description: "Neo-Japandi / Illustration-First — strict 2-ink system. --accent never appears at full weight more than twice per section. Apply class `editorial-print-a`, `editorial-print-b`, or `editorial-print-c` on `<html>`."
colors:
  paper: "oklch(91% 0.028 82)"
  ink: "oklch(14% 0.006 80)"
  accent: "oklch(50% 0.18 34)"
  accent_2: "oklch(72% 0.12 76)"
  muted: "oklch(52% 0.020 72)"
  primary: "{colors.accent}"
typography:
  h1:
    fontFamily: Newsreader
    fontSize: 2.5rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  body-md:
    fontFamily: Newsreader
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
    rounded: "4px"
    padding: 12px 24px
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "4px"
    padding: 12px 24px
  card:
    backgroundColor: "{colors.paper}"
    rounded: "4px"
    padding: 24px
---

## Overview

Neo-Japandi / illustration-first — strict 2-ink system where accent never appears at full weight more than twice per section. Asymmetric Japanese grid, illustration carries the visual world.

**Activation:** Apply class `editorial-print-a`, `editorial-print-b`, or `editorial-print-c` on `<html>`.

**Tone:** Print editorial — aged paper terracotta, indigo woodblock, or lantern-lit night market.

**Class format:** `editorial-print-{variant}`

## Colors

The YAML frontmatter represents the primary variant (`a`). This trend has 3 variants:

| Variant | Name | Description |
|---------|------|-------------|
| a | Terracotta Ukiyo | Aged paper, warm terracotta, Neo Mirai energy |
| b | Indigo Woodblock | Japanese woodblock blue, Hokusai palette. Cool indigo on ivory paper. |
| c | Night Market | Dark editorial — lantern light on black, festival poster, ink-on-dark |

All color values use OKLCH for perceptual uniformity. Components read semantic tokens (`--bg`, `--surface`, `--accent`, `--text`, `--muted`, `--border`) set by the active variant class.

## Typography

Fonts are provided by the shared type layer. Display type uses a fluid `clamp()` scale at runtime; the YAML shows the midpoint. Body sits at `1rem`. Mono eyebrows run uppercase with 0.22em tracking on JetBrains Mono.

## Layout

Spacing follows an 8-point grid scale (`--space-1` through `--space-8`). Radii are capped at `--radius-card-max: 20px` for non-pill elements. Layout uses CSS Grid with container queries where supported.

## Components

Components are token-driven — they read CSS custom properties set by the active trend class. React primitives (Button, Card, Badge) are available in `components/core/` with full TypeScript definitions.

CSS classes (`.btn`, `.card`, `.glass`) apply styles from the active theme. See `design-tokens.json` `components` for full prop specs and variant documentation.

## Do's and Don'ts

- **Do** use accent sparingly — twice per section at most.
- **Do** lean on illustration, not decoration.
- **Don't** use glassmorphism or shadows.
- **Don't** center-align large text blocks.

- **Do** follow the pre-build gate in `GUIDELINES.md` before starting any design.
- **Do** use real content — no placeholder copy ever.
- **Don't** mix tokens from different trends or variants on the same page.
- **Don't** use raw hex values — always reference the semantic tokens.

---

*Generated from `design-tokens.json`. Canonical source: `github.com/jayden2610/jayden-design-system`.*

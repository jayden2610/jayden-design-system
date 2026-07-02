---
version: alpha
name: Narrative Motion
description: "Scrollytelling / Functional Motion — editorial energy with motion that reveals. 2-ink system with paper + ink metaphor. Apply class `narrative-motion-a`, `narrative-motion-b`, or `narrative-motion-c` on `<html>`."
colors:
  bg: "oklch(98% 0.002 90)"
  ink: "oklch(10% 0.004 90)"
  accent: "oklch(58% 0.24 32)"
  accent_2: "oklch(52% 0.22 255)"
  surface: "oklch(93% 0.008 90)"
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
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "4px"
    padding: 12px 24px
  card:
    backgroundColor: "{colors.bg}"
    rounded: "4px"
    padding: 24px
---

## Overview

Scrollytelling editorial — motion that reveals, not decorates. 2-ink system with paper + ink metaphor. Serif display type with editorial scale. Animation carries the narrative forward.

**Activation:** Apply class `narrative-motion-a`, `narrative-motion-b`, or `narrative-motion-c` on `<html>`.

**Tone:** Editorial energy — terracotta press, luxury broadsheet, or Japanese zine.

**Class format:** `narrative-motion-{variant}`

## Colors

The YAML frontmatter represents the primary variant (`a`). This trend has 3 variants:

| Variant | Name | Description |
|---------|------|-------------|
| a | Terracotta Press | Warm editorial, ink-and-earth, magazine energy |
| b | Obsidian Broadsheet | Dark night mode editorial, luxury newspaper, high contrast |
| c | Risograph Mist | Cool toned — Japanese zine, ink overprint, coastal editorial |

All color values use OKLCH for perceptual uniformity. Components read semantic tokens (`--bg`, `--surface`, `--accent`, `--text`, `--muted`, `--border`) set by the active variant class.

## Typography

Fonts are provided by the shared type layer. Display type uses a fluid `clamp()` scale at runtime; the YAML shows the midpoint. Body sits at `1rem`. Mono eyebrows run uppercase with 0.22em tracking on JetBrains Mono.

## Layout

Spacing follows an 8-point grid scale (`--space-1` through `--space-8`). Radii are capped at `--radius-card-max: 20px` for non-pill elements. Layout uses CSS Grid with container queries where supported.

## Components

Components are token-driven — they read CSS custom properties set by the active trend class. React primitives (Button, Card, Badge) are available in `components/core/` with full TypeScript definitions.

CSS classes (`.btn`, `.card`, `.glass`) apply styles from the active theme. See `design-tokens.json` `components` for full prop specs and variant documentation.

## Do's and Don'ts

- **Do** let scroll position drive reveals and transitions.
- **Do** use serif display type (Newsreader) with editorial scale.
- **Don't** animate for decoration — motion must carry meaning.
- **Don't** use more than 2 accent colors per section.

- **Do** follow the pre-build gate in `GUIDELINES.md` before starting any design.
- **Do** use real content — no placeholder copy ever.
- **Don't** mix tokens from different trends or variants on the same page.
- **Don't** use raw hex values — always reference the semantic tokens.

---

*Generated from `design-tokens.json`. Canonical source: `github.com/jayden2610/jayden-design-system`.*

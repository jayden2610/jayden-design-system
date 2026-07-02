---
version: alpha
name: Resonant Stark
description: "Quiet Premium / Restrained Minimalism — extreme token restraint. Accent appears ONCE per page (or twice at most). 4 variants (A/B/C standard + D Studio Blush). Apply class `resonant-stark-a`, `resonant-stark-b`, `resonant-stark-c`, or `resonant-stark-d` on `<html>`."
colors:
  bg: "oklch(98% 0.003 90)"
  ink: "oklch(10% 0.004 255)"
  muted: "oklch(55% 0.006 255)"
  border: "oklch(88% 0.006 255)"
  accent: "oklch(38% 0.18 255)"
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
    rounded: "0px"
    padding: 12px 24px
  button-secondary:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "0px"
    padding: 12px 24px
  card:
    backgroundColor: "{colors.bg}"
    rounded: "0px"
    padding: 24px
---

## Overview

Quiet premium / restrained minimalism — extreme token restraint. Accent appears ONCE per page (or twice at most). 0px radii, no glassmorphism, no gradients, no decoration. The space between elements does the work.

**Activation:** Apply class `resonant-stark-a`, `resonant-stark-b`, `resonant-stark-c`, or `resonant-stark-d` on `<html>`.

**Tone:** Quiet premium — Swiss precision, dark luxury, organic wellness, or creative-agency confidence.

**Class format:** `resonant-stark-{variant}`

## Colors

The YAML frontmatter represents the primary variant (`a`). This trend has 4 variants:

| Variant | Name | Description |
|---------|------|-------------|
| a | Paper + Deep Blue | Swiss precision, trust, Stripe/healthcare energy. Deep blue accent used once. |
| b | Obsidian + Gold | Dark luxury, premium, architectural firms. Warm gold accent appears once. |
| c | Chalk + Forest | Warm neutral + deep forest green — organic premium, wellness, sustainability |
| d | Studio Blush | Unseen Studio energy — bold restraint, creative-agency confidence. Two-ink system: black + blush pink. |

All color values use OKLCH for perceptual uniformity. Components read semantic tokens (`--bg`, `--surface`, `--accent`, `--text`, `--muted`, `--border`) set by the active variant class.

## Typography

Fonts are provided by the shared type layer. Display type uses a fluid `clamp()` scale at runtime; the YAML shows the midpoint. Body sits at `1rem`. Mono eyebrows run uppercase with 0.22em tracking on JetBrains Mono.

## Layout

Spacing follows an 8-point grid scale (`--space-1` through `--space-8`). Radii are capped at `--radius-card-max: 20px` for non-pill elements. Layout uses CSS Grid with container queries where supported.

## Components

Components are token-driven — they read CSS custom properties set by the active trend class. React primitives (Button, Card, Badge) are available in `components/core/` with full TypeScript definitions.

CSS classes (`.btn`, `.card`, `.glass`) apply styles from the active theme. See `design-tokens.json` `components` for full prop specs and variant documentation.

## Do's and Don'ts

- **Do** use accent once per page — a single CTA, a single headline word.
- **Do** let whitespace carry hierarchy — no borders, no shadows.
- **Don't** use glassmorphism, gradients, or generic SaaS sans.
- **Don't** add decoration that doesn't communicate.

- **Do** follow the pre-build gate in `GUIDELINES.md` before starting any design.
- **Do** use real content — no placeholder copy ever.
- **Don't** mix tokens from different trends or variants on the same page.
- **Don't** use raw hex values — always reference the semantic tokens.

---

*Generated from `design-tokens.json`. Canonical source: `github.com/jayden2610/jayden-design-system`.*

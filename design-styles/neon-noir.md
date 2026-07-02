---
version: alpha
name: Neon Noir
description: "Cyberpunk / Dark Neon — electric neon on near-black backgrounds. Bloom effects, high contrast. Apply class `neon-noir-a`, `neon-noir-b`, or `neon-noir-c` on `<html>`."
colors:
  bg: "oklch(5% 0.004 280)"
  surface: "oklch(8% 0.005 280)"
  neon: "oklch(90% 0.22 155)"
  neon_blue: "oklch(85% 0.18 205)"
  neon_purple: "oklch(62% 0.24 295)"
  text: "oklch(91% 0.006 240)"
  muted: "oklch(45% 0.008 240)"
  primary: "{colors.neon}"
typography:
  h1:
    fontFamily: General Sans
    fontSize: 2.5rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  body-md:
    fontFamily: JetBrains Mono
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
    textColor: "{colors.text}"
    rounded: "4px"
    padding: 12px 24px
  card:
    backgroundColor: "{colors.bg}"
    rounded: "16px"
    padding: 24px
---

## Overview

Cyberpunk dark — electric neon on near-black backgrounds. Sharp 4px radii, bloom effects, high contrast. Monospace accents and terminal-grade precision.

**Activation:** Apply class `neon-noir-a`, `neon-noir-b`, or `neon-noir-c` on `<html>`.

**Tone:** Electric, dangerous, high-contrast — hacker terminal to underground rave.

**Class format:** `neon-noir-{variant}`

## Colors

The YAML frontmatter represents the primary variant (`a`). This trend has 3 variants:

| Variant | Name | Description |
|---------|------|-------------|
| a | Acid Green | Hacker terminal, electric, aggressive precision |
| b | Blood Neon | Red/magenta — underground rave, dangerous, high contrast |
| c | Arctic Wire | Cold blue/white — clean cyberpunk, near-future, Scandinavian dark. Restrained bloom. |

All color values use OKLCH for perceptual uniformity. Components read semantic tokens (`--bg`, `--surface`, `--accent`, `--text`, `--muted`, `--border`) set by the active variant class.

## Typography

Fonts are provided by the shared type layer. Display type uses a fluid `clamp()` scale at runtime; the YAML shows the midpoint. Body sits at `1rem`. Mono eyebrows run uppercase with 0.22em tracking on JetBrains Mono.

## Layout

Spacing follows an 8-point grid scale (`--space-1` through `--space-8`). Radii are capped at `--radius-card-max: 20px` for non-pill elements. Layout uses CSS Grid with container queries where supported.

## Components

Components are token-driven — they read CSS custom properties set by the active trend class. React primitives (Button, Card, Badge) are available in `components/core/` with full TypeScript definitions.

CSS classes (`.btn`, `.card`, `.glass`) apply styles from the active theme. See `design-tokens.json` `components` for full prop specs and variant documentation.

## Do's and Don'ts

- **Do** use neon glow effects sparingly on interactive elements.
- **Do** keep radii sharp (4px-8px) — no pill buttons.
- **Don't** add warm ambient light unless the variant specifies it.
- **Don't** use glassmorphism — solid surfaces only.

- **Do** follow the pre-build gate in `GUIDELINES.md` before starting any design.
- **Do** use real content — no placeholder copy ever.
- **Don't** mix tokens from different trends or variants on the same page.
- **Don't** use raw hex values — always reference the semantic tokens.

---

*Generated from `design-tokens.json`. Canonical source: `github.com/jayden2610/jayden-design-system`.*

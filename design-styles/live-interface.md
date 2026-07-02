---
version: alpha
name: Live Interface
description: "Embedded Interactive Product Preview — SaaS / web app UI. Clean panels, accent+border tokens, dark+light variants. Apply class `live-interface-a`, `live-interface-b`, or `live-interface-c` on `<html>`."
colors:
  bg: "oklch(10% 0.015 255)"
  surface: "oklch(14% 0.012 255)"
  border: "oklch(20% 0.010 255)"
  accent: "oklch(72% 0.17 160)"
  accent_2: "oklch(62% 0.20 255)"
  text: "oklch(97% 0.004 255)"
  muted: "oklch(63% 0.008 255)"
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
    textColor: "{colors.text}"
    rounded: "999px"
    padding: 12px 24px
  card:
    backgroundColor: "{colors.bg}"
    rounded: "16px"
    padding: 24px
---

## Overview

SaaS / web app product UI — clean panels, border separators, accent-driven interaction. Dark and light modes with Stripe/Linear-grade polish. Functional first, beautiful by default.

**Activation:** Apply class `live-interface-a`, `live-interface-b`, or `live-interface-c` on `<html>`.

**Tone:** Confident SaaS — dark emerald, airy light studio, or warm amber command.

**Class format:** `live-interface-{variant}`

## Colors

The YAML frontmatter represents the primary variant (`a`). This trend has 3 variants:

| Variant | Name | Description |
|---------|------|-------------|
| a | Dark Emerald | Confident SaaS, Stripe/Linear energy. Dark background. |
| b | Light Studio | Clean, airy, Figma/Linear light mode. White panels, blue accent. |
| c | Amber Command | Warm dark — terminal warmth, Raycast/Arc energy. Amber accent. |

All color values use OKLCH for perceptual uniformity. Components read semantic tokens (`--bg`, `--surface`, `--accent`, `--text`, `--muted`, `--border`) set by the active variant class.

## Typography

Fonts are provided by the shared type layer. Display type uses a fluid `clamp()` scale at runtime; the YAML shows the midpoint. Body sits at `1rem`. Mono eyebrows run uppercase with 0.22em tracking on JetBrains Mono.

## Layout

Spacing follows an 8-point grid scale (`--space-1` through `--space-8`). Radii are capped at `--radius-card-max: 20px` for non-pill elements. Layout uses CSS Grid with container queries where supported.

## Components

Components are token-driven — they read CSS custom properties set by the active trend class. React primitives (Button, Card, Badge) are available in `components/core/` with full TypeScript definitions.

CSS classes (`.btn`, `.card`, `.glass`) apply styles from the active theme. See `design-tokens.json` `components` for full prop specs and variant documentation.

## Do's and Don'ts

- **Do** use borders for structural separation, not shadows.
- **Do** keep cards at 16px radius max.
- **Don't** use glassmorphism — this is product UI, not marketing.
- **Don't** animate layout shifts — motion is for microinteractions only.

- **Do** follow the pre-build gate in `GUIDELINES.md` before starting any design.
- **Do** use real content — no placeholder copy ever.
- **Don't** mix tokens from different trends or variants on the same page.
- **Don't** use raw hex values — always reference the semantic tokens.

---

*Generated from `design-tokens.json`. Canonical source: `github.com/jayden2610/jayden-design-system`.*

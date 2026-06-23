---
version: alpha
name: "Neon Noir"
description: >
  Jayden Design System — Cyberpunk / Dark Neon. Electric neon on near-black
  backgrounds. Bloom effects, high contrast. Apply class `neon-noir-a` on <html>.
colors:
  bg: "oklch(5% 0.004 280)"
  surface: "oklch(8% 0.005 280)"
  neon: "oklch(90% 0.22 155)"
  neon_blue: "oklch(85% 0.18 205)"
  neon_purple: "oklch(62% 0.24 295)"
  text: "oklch(91% 0.006 240)"
  muted: "oklch(45% 0.008 240)"
typography:
  display:
    fontFamily: "JetBrains Mono, General Sans, system-ui, sans-serif"
    fontSize: "clamp(3rem, 8vw, 7rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  h1:
    fontFamily: "General Sans, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.2
  h2:
    fontFamily: "General Sans, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3.4vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "1rem"
    lineHeight: 1.6
  small:
    fontFamily: "General Sans, system-ui, sans-serif"
    fontSize: "0.875rem"
  eyebrow:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.22em"
    textTransform: uppercase
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
rounded:
  sm: "4px"
  md: "8px"
  card-max: "12px"
  full: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
components:
  button-primary:
    backgroundColor: "oklch(90% 0.22 155)"
    color: "oklch(5% 0.004 280)"
    rounded: "4px"
    padding: 12px 24px
    fontFamily: JetBrains Mono, monospace
    fontWeight: 600
  button-secondary:
    backgroundColor: "oklch(8% 0.005 280)"
    color: "oklch(91% 0.006 240)"
    rounded: "4px"
    border: 1px solid oklch(90% 0.22 155)
    padding: 12px 24px
    fontFamily: JetBrains Mono, monospace
  card:
    backgroundColor: "oklch(8% 0.005 280)"
    color: "oklch(91% 0.006 240)"
    rounded: "8px"
    padding: 24px
    border: 1px solid oklch(15% 0.008 280)
---

## Overview

The **Neon Noir** trend in the Jayden Design System. Cyberpunk / Dark Neon — electric neon on near-black backgrounds. Bloom effects, high contrast.

Electric, dangerous, high-contrast. Neon colors bloom. Use `--neon`, `--neon-blue`, `--neon-purple` directly. Prefer crisp 4px radii on interactive elements. No glass, no blurred panels — sharp edges only.

Apply the CSS class on `<html>`. 3 variants available.

### Variants

| Variant Class | Name | Description | Key Colors |
|---|---|---|---|
| `neon-noir-a` | **Acid Green** | Hacker terminal, electric, aggressive precision | `--neon`: `oklch(90% 0.22 155)`, `--neon-purple`: `oklch(62% 0.24 295)` |
| `neon-noir-b` | **Blood Neon** | Red/magenta — underground rave, dangerous, high contrast | `--neon`: `oklch(65% 0.28 15)`, `--neon-purple`: `oklch(58% 0.20 295)` |
| `neon-noir-c` | **Arctic Wire** | Cold blue/white — clean cyberpunk, near-future, Scandinavian | `--neon`: `oklch(94% 0.06 220)`, `--neon-purple`: `oklch(60% 0.14 250)` |

---

## Colors

**Key rules:** 2–3 hues max. All color in OKLCH — never raw hex. No glass, no blurred panels — use bloom/glow JS effects for neon instead.

---

## Typography

JetBrains Mono for display and body — the cyberpunk voice. General Sans for hierarchy where readability matters.

---

## Shapes

Sharp 4px radii on interactive elements. 8px max on cards. No pill buttons — keep it angular.

---

## Components

All token-driven. No glass, no blurred panels. Sharp edges, high contrast, neon on black.

---

## Do's and Don'ts

- **Do** apply the trend-variant class on `<html>`.
- **Do** use JS bloom/glow effects for neon elements.
- **Don't** use glass or blurred panels — sharp edges only.
- **Don't** use purple-on-white SaaS gradient.
- **Don't** use CSS-only nature/cinematic backgrounds.

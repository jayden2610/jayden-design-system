---
version: alpha
name: "Resonant Stark"
description: >
  Jayden Design System — Quiet Premium / Restrained Minimalism.
  Extreme token restraint. Accent appears ONCE per page (or twice max).
  4 variants. Apply class `resonant-stark-a` on <html>.
colors:
  bg: "oklch(98% 0.003 90)"
  ink: "oklch(10% 0.004 255)"
  muted: "oklch(55% 0.006 255)"
  border: "oklch(88% 0.006 255)"
  accent: "oklch(38% 0.18 255)"
typography:
  display:
    fontFamily: "General Sans, system-ui, sans-serif"
    fontSize: "clamp(3rem, 8vw, 7rem)"
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: "-0.03em"
  h1:
    fontFamily: "General Sans, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.5vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.1
  h2:
    fontFamily: "General Sans, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 500
    lineHeight: 1.2
  body:
    fontFamily: "General Sans, system-ui, sans-serif"
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
  sm: "0px"
  md: "0px"
  card-max: "0px"
  full: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  2xl: "80px"
  3xl: "120px"
components:
  button-primary:
    backgroundColor: "oklch(38% 0.18 255)"
    color: "oklch(98% 0.003 90)"
    rounded: "0px"
    padding: 14px 28px
    fontFamily: General Sans
    fontWeight: 600
  button-secondary:
    backgroundColor: "transparent"
    color: "oklch(10% 0.004 255)"
    rounded: "0px"
    border: 1px solid oklch(88% 0.006 255)
    padding: 14px 28px
  card:
    backgroundColor: "oklch(98% 0.003 90)"
    color: "oklch(10% 0.004 255)"
    rounded: "0px"
    padding: 24px
    border: 1px solid oklch(88% 0.006 255)
---

## Overview

The **Resonant Stark** trend in the Jayden Design System. Quiet Premium / Restrained Minimalism — extreme token restraint. Accent appears ONCE per page (or twice max). 4 variants.

Quiet premium, restrained, Swiss precision. Radical restraint. Accent appears **once per page** (or twice max). Zero decoration. Swiss precision spacing. Typography carries all hierarchy. No glass, no gradients, no shadows on cards.

Apply the CSS class on `<html>`. 4 variants available.

### Variants

| Variant Class | Name | Description | Key Colors |
|---|---|---|---|
| `resonant-stark-a` | **Paper + Deep Blue** | Swiss precision, trust, Stripe/healthcare energy | `--bg`: `oklch(98% 0.003 90)`, `--accent`: `oklch(38% 0.18 255)` |
| `resonant-stark-b` | **Obsidian + Gold** | Dark luxury, premium, architectural firms | `--bg`: `oklch(8% 0.006 255)`, `--accent`: `oklch(72% 0.12 72)` |
| `resonant-stark-c` | **Chalk + Forest** | Warm neutral + deep forest green, organic premium | `--bg`: `oklch(97% 0.005 100)`, `--accent`: `oklch(34% 0.16 155)` |
| `resonant-stark-d` | **Studio Blush** | Unseen Studio energy — black + blush pink two-ink | `--bg`: `oklch(8% 0.004 320)`, `--accent`: `oklch(85% 0.045 350)` |

---

## Colors

Radical restraint. Accent appears **once per page** (or twice at most). The rest is `--bg`, `--ink`, `--muted`, and `--border`. No third color.

---

## Typography

Typography carries ALL hierarchy. No boxes, no icons, no decoration. Tight letter-spacing on display sizes. Generous vertical rhythm.

---

## Shapes

**0px corners** by default. This is Swiss precision — right angles communicate restraint. Pill radius only on tags if absolutely needed.

---

## Components

No glass, no gradients, no shadows on cards. Square corners. Border-only card differentiation.

---

## Do's and Don'ts

- **Do** use accent ONCE per page (or twice at most).
- **Do** let typography carry all hierarchy.
- **Do** use right angles (0px radius).
- **Don't** use glassmorphism, gradients, or shadows on cards.
- **Don't** use more than one accent.
- **Don't** add decoration without purpose.

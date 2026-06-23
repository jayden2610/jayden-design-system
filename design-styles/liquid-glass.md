---
version: alpha
name: "Liquid Glass"
description: >
  Jayden Design System — Glassmorphism / Apple Vision Pro material.
  Frosted panels, depth layers, warm or cool scene temperatures.
  Apply class `liquid-glass-a` on <html> to activate.
colors:
  bg_fallback: "oklch(15% 0.008 70)"
  text: "oklch(92% 0.018 75)"
  text_dark: "oklch(8% 0.012 70)"
  glass: "rgba(255,255,255,0.18)"
  glass_border: "rgba(255,255,255,0.18)"
  accent: "oklch(74% 0.12 72)"
  accent_pale: "oklch(82% 0.07 72)"
  accent_deep: "oklch(61% 0.09 72)"
  muted: "oklch(92% 0.018 75 / 0.6)"
typography:
  display:
    fontFamily: "General Sans, system-ui, sans-serif"
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
    fontFamily: "Newsreader, Georgia, serif"
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
  sm: "8px"
  md: "16px"
  card-max: "20px"
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
    backgroundColor: "oklch(74% 0.12 72)"
    color: "oklch(15% 0.008 70)"
    rounded: "999px"
    padding: 12px 24px
    fontFamily: General Sans
    fontWeight: 600
  button-secondary:
    backgroundColor: "oklch(22% 0.01 72)"
    color: "oklch(92% 0.018 75)"
    rounded: "999px"
    border: 1px solid oklch(85% 0.008 72)
    padding: 12px 24px
  glass-panel:
    backgroundColor: "rgba(255,255,255,0.18)"
    backdropFilter: "blur(20px) saturate(180%)"
    rounded: "20px"
    boxShadow: "0 8px 32px rgba(0,0,0,0.16), inset 0 1px 0 rgba(255,255,255,0.28)"
    textColor: "oklch(92% 0.018 75)"
  card:
    backgroundColor: "oklch(22% 0.01 72)"
    color: "oklch(92% 0.018 75)"
    rounded: "16px"
    padding: 24px
---

## Overview

The **Liquid Glass** trend in the Jayden Design System. Glassmorphism / Apple Vision Pro material — frosted panels, depth layers, warm or cool scene temperatures.

Frosted glass, cinematic depth, warm default. Glass is the primary material. Use `.glass` for floating panels, `.glass-deep` for the hero's main interface layer. Content backgrounds are solid `--bg-fallback`.

Apply the CSS class on `<html>` — all children inherit the tokens. 3 variants available.

### Variants

| Variant Class | Name | Description | Key Colors |
|---|---|---|---|
| `liquid-glass-a` | **Morning Gold** | Warm cinematic — confirmed default taste | `--bg-fallback`: `oklch(15% 0.008 70)`, `--accent`: `oklch(74% 0.12 72)`, `--glass`: `rgba(255,255,255,0.18)` |
| `liquid-glass-b` | **Midnight Indigo** | Cool evening scene, deep focus, cinematic night | `--bg-fallback`: `oklch(10% 0.015 260)`, `--accent`: `oklch(72% 0.18 255)`, `--glass`: `rgba(180,200,255,0.12)` |
| `liquid-glass-c` | **Rose Dusk** | Warm pink — golden hour, intimate, lifestyle/wellness | `--bg-fallback`: `oklch(14% 0.012 10)`, `--accent`: `oklch(70% 0.18 20)`, `--glass`: `rgba(255,220,210,0.14)` |

---

## Colors

### Primary Variant: `liquid-glass-a` — Morning Gold

Warm cinematic — confirmed default taste. Key tokens: `--bg-fallback`: `oklch(15% 0.008 70)`, `--accent`: `oklch(74% 0.12 72)`, `--glass`: `rgba(255,255,255,0.18)`.

### Glass (2026 Restraint Rule)

- Heavy frosted blur on **every** panel is OUT. Glass on floating/overlay elements only.
- Content surfaces sit on solid/near-solid backgrounds.
- Blur signals z-hierarchy — deeper blur = higher layer. Vary blur by layer.
- Every glass surface clears ≥ 4.5:1 text contrast.
- Default `.glass`. Reserve `.glass-deep` for the single topmost element.
- `.glass-dense` when text needs reliable opaque backing.
- **Do** use `.glass` for floating elements, `.glass-deep` for the topmost layer only.
- **Don't** put glass on card grids, sidebars, or secondary panels.

General rules: 2–3 hues max. Richness from texture and depth, not hue count. All color in OKLCH.

---

## Typography

- **Display:** General Sans, fluid `clamp(3rem, 8vw, 7rem)`, 700 weight, tight -0.02em tracking.
- **H1/H2:** General Sans, 600 weight.
- **Body:** Newsreader serif for editorial warmth at 1rem / 1.6 leading.
- **Eyebrow:** JetBrains Mono, uppercase, 0.22em tracking.

---

## Layout & Spacing

8-point baseline. Use `md` (16px) for intra-component gaps, `lg` (24px) for inter-component, `xl`+ for sections.

---

## Shapes

Cards: 16–20px radius cap. Full-pill only for tags and buttons.

---

## Components

All token-driven — read from the trend-variant class on `<html>`.

---

## Do's and Don'ts

- **Do** apply the trend-variant class on `<html>` to activate all tokens.
- **Do** keep 2–3 hues max. Richness from texture and depth, not hue count.
- **Do** use OKLCH tokens — never raw hex in components.
- **Do** include cinematic depth: foreground / midground / background always present.
- **Do** write delivery-ready content. No "Lorem ipsum," no "Product Name."
- **Don't** use purple-on-white SaaS gradient (instant disqualification).
- **Don't** make decoration without purpose.
- **Don't** put glass on every surface — content sits on solid backgrounds.

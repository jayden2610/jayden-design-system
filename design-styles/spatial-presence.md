---
version: alpha
name: "Spatial Presence"
description: >
  Jayden Design System — 3D Immersive WebGL — cold, infinite, machine precision.
  Three cold-to-neutral variants. Apply class `spatial-presence-a` on <html> to activate.
colors:
  bg: "oklch(9% 0.012 255)"
  surface: "oklch(13% 0.014 255)"
  accent_1: "oklch(62% 0.20 255)"
  accent_2: "oklch(58% 0.18 295)"
  text: "oklch(94% 0.004 255)"
  muted: "oklch(50% 0.008 255)"
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
    backgroundColor: "oklch(62% 0.20 255)"
    color: "oklch(9% 0.012 255)"
    rounded: "999px"
    padding: 12px 24px
    fontFamily: General Sans
    fontWeight: 600
  button-secondary:
    backgroundColor: "oklch(13% 0.014 255)"
    color: "oklch(94% 0.004 255)"
    rounded: "999px"
    border: 1px solid oklch(85% 0.008 255)
    padding: 12px 24px
  card:
    backgroundColor: "oklch(13% 0.014 255)"
    color: "oklch(94% 0.004 255)"
    rounded: "16px"
    padding: 24px
    boxShadow: "0 2px 12px rgba(0,0,0,0.10)"
---

## Overview

The **Spatial Presence** trend in the Jayden Design System. 3D Immersive WebGL — cold, infinite, machine precision. Three cold-to-neutral variants.

Cold, infinite, machine precision. This trend pairs well with WebGL canvas backgrounds, particle systems, and 3D scene overlays. No glassmorphism — pure digital depth.

Apply the CSS class on `<html>` — all children inherit the tokens. 3 variants available.

### Variants

| Variant Class | Name | Description | Key Colors |
|---|---|---|---|
| `spatial-presence-a` | **Electric Void** | Cold, infinite, machine precision | `--bg`: `oklch(9% 0.012 255)`, `--accent-1`: `oklch(62% 0.20 255)`, `--accent-2`: `oklch(58% 0.18 295)` |
| `spatial-presence-b` | **Solar Forge** | Warm foreground over cool space bg — molten amber, industrial heat | `--bg`: `oklch(7% 0.010 30)`, `--accent-1`: `oklch(72% 0.22 55)`, `--accent-2`: `oklch(65% 0.18 32)` |
| `spatial-presence-c` | **Jade Terminal** | Cool green — bioluminescent, organic precision, Zaha Hadid meets nature | `--bg`: `oklch(7% 0.008 165)`, `--accent-1`: `oklch(74% 0.24 155)`, `--accent-2`: `oklch(55% 0.16 175)` |

---

## Colors

### Primary Variant: `spatial-presence-a` — Electric Void

Cold, infinite, machine precision. Key tokens:
  - **`--bg`** = `oklch(9% 0.012 255)`
  - **`--surface`** = `oklch(13% 0.014 255)`
  - **`--accent-1`** = `oklch(62% 0.20 255)`
  - **`--accent-2`** = `oklch(58% 0.18 295)`
  - **`--text`** = `oklch(94% 0.004 255)`
  - **`--muted`** = `oklch(50% 0.008 255)`

### Glass

Heavy frosted blur on **every** panel is OUT. Glass on floating/overlay elements only. Content surfaces sit on solid/near-solid backgrounds. Blur signals z-hierarchy — deeper blur = higher layer. Vary blur by layer. Every glass surface clears ≥ 4.5:1 text contrast. Default `.glass`. Reserve `.glass-deep` for the single topmost element. `.glass-dense` when text needs reliable opaque backing.

General rules: 2–3 hues max. Richness from texture and depth, not hue count. All color in OKLCH. Never use raw hex in components. One trend-variant class per page. Components read `--bg / --surface / --accent / --text / --muted / --border`.

---

## Typography

- **Display:** General Sans (system-ui fallback), fluid `clamp(3rem, 8vw, 7rem)`, 700 weight, tight -0.02em tracking.
- **H1/H2:** General Sans, 600 weight, generous fluid scale.
- **Body:** Newsreader serif for editorial warmth at 1rem / 1.6 leading.
- **Eyebrow:** JetBrains Mono, uppercase, 0.22em tracking — use for labels and metrics.
- **Mono:** JetBrains Mono for code, metrics, and data displays.

---

## Layout & Spacing

- **Grid:** 8-point baseline. Use `md` (16px) for intra-component gaps, `lg` (24px) for inter-component, `xl` (32px)+ for section breaks.
- **Page:** Always include foreground / midground / background depth.
- **Max width:** Responsive. Avoid fixed-width containers.

---

## Shapes

- Cards: 16–20px radius cap. **20px is the hard ceiling** for non-pill elements.
- Full-pill (999px radius) only for tags and buttons.

---

## Components

All components are token-driven — they read from the CSS custom properties set by the trend-variant class on `<html>`. Never hardcode values.

---

## Do's and Don'ts

- **Do** apply the trend-variant class on `<html>` to activate all tokens.
- **Do** keep 2–3 hues max. Richness from texture and depth, not hue count.
- **Do** use OKLCH tokens — never raw hex in components.
- **Do** include cinematic depth: foreground / midground / background always present.
- **Do** write delivery-ready content. No "Lorem ipsum," no "Product Name."
- **Don't** use purple-on-white SaaS gradient (instant disqualification).
- **Don't** make decoration without purpose. Motion reveals and breathes — it never decorates.
- **Don't** use CSS-only nature/interior/cinematic backgrounds (always flat, unconvincing).

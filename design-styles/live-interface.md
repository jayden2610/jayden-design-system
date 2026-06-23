---
version: alpha
name: "Live Interface"
description: >
  Jayden Design System — Embedded Interactive Product Preview. SaaS / web app UI.
  Clean panels, accent+border tokens, dark+light variants.
  Apply class `live-interface-a` on <html>.
colors:
  bg: "oklch(10% 0.015 255)"
  surface: "oklch(14% 0.012 255)"
  border: "oklch(20% 0.010 255)"
  accent: "oklch(72% 0.17 160)"
  accent_2: "oklch(62% 0.20 255)"
  text: "oklch(97% 0.004 255)"
  muted: "oklch(63% 0.008 255)"
typography:
  display:
    fontFamily: "General Sans, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  h1:
    fontFamily: "General Sans, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.2
  h2:
    fontFamily: "General Sans, system-ui, sans-serif"
    fontSize: "clamp(1.35rem, 2.5vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "General Sans, system-ui, sans-serif"
    fontSize: "0.9375rem"
    lineHeight: 1.5
  small:
    fontFamily: "General Sans, system-ui, sans-serif"
    fontSize: "0.8125rem"
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
  sm: "6px"
  md: "12px"
  card-max: "16px"
  full: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "20px"
  xl: "28px"
  2xl: "40px"
  3xl: "56px"
components:
  button-primary:
    backgroundColor: "oklch(72% 0.17 160)"
    color: "oklch(10% 0.015 255)"
    rounded: "999px"
    padding: 10px 20px
    fontFamily: General Sans
    fontWeight: 600
  button-secondary:
    backgroundColor: "oklch(14% 0.012 255)"
    color: "oklch(97% 0.004 255)"
    rounded: "999px"
    border: 1px solid oklch(85% 0.008 255)
    padding: 10px 20px
  card:
    backgroundColor: "oklch(14% 0.012 255)"
    color: "oklch(97% 0.004 255)"
    rounded: "12px"
    padding: 20px
    boxShadow: "0 2px 12px rgba(0,0,0,0.10)"
---

## Overview

The **Live Interface** trend in the Jayden Design System. Embedded Interactive Product Preview — SaaS / web app UI. Clean panels, accent+border tokens, dark+light variants.

SaaS precision, Stripe/Linear energy. Clean SaaS interface. Panels sit on solid `--surface` with `--border` separators. No glass overlay. Accent is the single interaction driver.

Apply the CSS class on `<html>`. 3 variants available.

### Variants

| Variant Class | Name | Description | Key Colors |
|---|---|---|---|
| `live-interface-a` | **Dark Emerald** | Confident SaaS, Stripe/Linear energy. Dark bg. | `--bg`: `oklch(10% 0.015 255)`, `--accent`: `oklch(72% 0.17 160)` |
| `live-interface-b` | **Light Studio** | Clean, airy, Figma/Linear light mode | `--bg`: `oklch(98% 0.004 240)`, `--accent`: `oklch(48% 0.22 255)` |
| `live-interface-c` | **Amber Command** | Warm dark — terminal warmth, Raycast/Arc energy | `--bg`: `oklch(9% 0.010 50)`, `--accent`: `oklch(74% 0.18 72)` |

---

## Colors

2–3 hues max. All OKLCH. Use `--border` for panel separation — not shadow or glass. Accent is the single interaction driver.

---

## Typography

General Sans for everything — clean SaaS utility. Smaller body (0.9375rem) for denser product UIs. JetBrains Mono for data/metrics.

---

## Shapes

12px card radius. 6px on inputs and smaller elements. Full-pill for buttons only.

---

## Components

All token-driven. Panels use `--border` not shadow. No glass.

---

## Do's and Don'ts

- **Do** use `--border` for panel separation.
- **Do** keep primary action driven by `--accent`.
- **Don't** use glass or blurred panels.
- **Don't** use placeholder copy — real product content only.

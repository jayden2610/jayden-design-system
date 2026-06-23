---
version: alpha
name: "Bento Grid"
description: >
  Jayden Design System — Modular Info Architecture / SaaS Layout.
  Grid-based layout with surface-2 for sub-cards within cells.
  Apply class `bento-grid-a` on <html>.
colors:
  bg: "oklch(97% 0.004 255)"
  surface: "oklch(100% 0 0)"
  surface_2: "oklch(94% 0.006 255)"
  accent: "oklch(52% 0.22 255)"
  accent_dark: "oklch(38% 0.20 255)"
  ink: "oklch(10% 0.008 255)"
  muted: "oklch(58% 0.010 255)"
  border: "oklch(88% 0.006 255)"
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
  sm: "8px"
  md: "16px"
  card-max: "20px"
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
    backgroundColor: "oklch(52% 0.22 255)"
    color: "oklch(97% 0.004 255)"
    rounded: "999px"
    padding: 10px 20px
    fontFamily: General Sans
    fontWeight: 600
  button-secondary:
    backgroundColor: "oklch(100% 0 0)"
    color: "oklch(10% 0.008 255)"
    rounded: "999px"
    border: 1px solid oklch(88% 0.006 255)
    padding: 10px 20px
  card:
    backgroundColor: "oklch(100% 0 0)"
    color: "oklch(10% 0.008 255)"
    rounded: "16px"
    padding: 20px
    boxShadow: "0 2px 12px rgba(0,0,0,0.10)"
---

## Overview

The **Bento Grid** trend in the Jayden Design System. Modular Info Architecture / SaaS Layout — grid-based layout with surface-2 for sub-cards within cells.

Modular, structured, info-architecture. Grid-forward layout. Use `--surface` for main cells, `--surface-2` for nested sub-cards. Sharp borders define the structure. No glass.

Apply the CSS class on `<html>`. 3 variants available.

### Variants

| Variant Class | Name | Description | Key Colors |
|---|---|---|---|
| `bento-grid-a` | **Clean Light** | Cool white, electric blue, Vercel/Linear energy | `--bg`: `oklch(97% 0.004 255)`, `--accent`: `oklch(52% 0.22 255)` |
| `bento-grid-b` | **Obsidian Grid** | Dark premium product, high-contrast cells | `--bg`: `oklch(9% 0.012 255)`, `--accent`: `oklch(72% 0.17 255)` |
| `bento-grid-c` | **Warm Linen** | Warm neutral — editorial bento, Apple warmth | `--bg`: `oklch(97% 0.006 80)`, `--accent`: `oklch(46% 0.16 30)` |

---

## Colors

Use `--surface` for main grid cells, `--surface-2` for nested sub-cards within cells. Border defines cell boundaries.

---

## Typography

General Sans throughout — clean, efficient, information-forward. Denser spacing for data-rich layouts.

---

## Shapes

16px card radius. 20px max. Full-pill for buttons.

---

## Components

No glass. Borders define structure. `--surface-2` for nested content within grid cells.

---

## Do's and Don'ts

- **Do** use `--surface`/`--surface-2` for cell hierarchy.
- **Do** use `--border` for structural definition.
- **Don't** use glass overlays on grid cells.
- **Don't** use shadows to separate cells — use borders.

---
version: alpha
name: "Narrative Motion"
description: >
  Jayden Design System — Scrollytelling / Functional Motion. Editorial energy
  with motion that reveals. 2-ink system with paper + ink metaphor.
  Apply class `narrative-motion-a` on <html>.
colors:
  bg: "oklch(98% 0.002 90)"
  ink: "oklch(10% 0.004 90)"
  accent: "oklch(58% 0.24 32)"
  accent_2: "oklch(52% 0.22 255)"
  surface: "oklch(93% 0.008 90)"
typography:
  display:
    fontFamily: "Newsreader, Georgia, serif"
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
    fontSize: "1.125rem"
    lineHeight: 1.7
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
  xl: "48px"
  2xl: "80px"
  3xl: "120px"
components:
  button-primary:
    backgroundColor: "oklch(58% 0.24 32)"
    color: "oklch(98% 0.002 90)"
    rounded: "8px"
    padding: 12px 24px
    fontFamily: General Sans
    fontWeight: 600
  button-secondary:
    backgroundColor: "oklch(98% 0.002 90)"
    color: "oklch(10% 0.004 90)"
    rounded: "8px"
    border: 1px solid oklch(10% 0.004 90)
    padding: 12px 24px
  card:
    backgroundColor: "oklch(93% 0.008 90)"
    color: "oklch(10% 0.004 90)"
    rounded: "8px"
    padding: 24px
    boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
---

## Overview

The **Narrative Motion** trend in the Jayden Design System. Scrollytelling / Functional Motion — editorial energy with motion that reveals. 2-ink system with paper + ink metaphor.

Editorial, magazine, motion-reveals. Motion reveals content — scroll-driven animations, text reveals, and parallax. The 2-ink paper system means high contrast between `--bg` (paper) and `--ink`.

Apply the CSS class on `<html>`. 3 variants available.

### Variants

| Variant Class | Name | Description | Key Colors |
|---|---|---|---|
| `narrative-motion-a` | **Terracotta Press** | Warm editorial, ink-and-earth, magazine energy | `--bg`: `oklch(98% 0.002 90)`, `--ink`: `oklch(10% 0.004 90)`, `--accent`: `oklch(58% 0.24 32)` |
| `narrative-motion-b` | **Obsidian Broadsheet** | Dark night mode editorial, luxury newspaper | `--bg`: `oklch(10% 0.008 60)`, `--ink`: `oklch(94% 0.010 80)`, `--accent`: `oklch(82% 0.16 75)` |
| `narrative-motion-c` | **Risograph Mist** | Cool toned — Japanese zine, coastal editorial | `--bg`: `oklch(95% 0.008 240)`, `--ink`: `oklch(12% 0.010 240)`, `--accent`: `oklch(52% 0.22 255)` |

---

## Typography

Newsreader serif for display and body — editorial weight. General Sans for headings. Larger body (1.125rem) at wider line-height (1.7) for reading comfort.

---

## Shapes

Modest radii — 4px on interactive, 8px on cards, 12px max. Paper-and-ink metaphor prefers straight edges.

---

## Components

All token-driven. No glass — this is a print-inspired system. Motion reveals through scrolling.

---

## Do's and Don'ts

- **Do** use scroll-driven animations (text reveals, parallax).
- **Do** treat `--bg` as paper and `--ink` as ink — high contrast.
- **Don't** use glassmorphism — print has no glass.
- **Don't** use placeholder copy — this is editorial.

---
version: alpha
name: "Editorial Print"
description: >
  Jayden Design System — Neo-Japandi / Illustration-First. Strict 2-ink system.
  Accent appears at full weight max twice per section.
  Apply class `editorial-print-a` on <html>.
colors:
  paper: "oklch(91% 0.028 82)"
  ink: "oklch(14% 0.006 80)"
  accent: "oklch(50% 0.18 34)"
  accent_2: "oklch(72% 0.12 76)"
  muted: "oklch(52% 0.020 72)"
typography:
  display:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(3.5rem, 9vw, 8rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  h1:
    fontFamily: "General Sans, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.5vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.15
  h2:
    fontFamily: "General Sans, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
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
    backgroundColor: "oklch(50% 0.18 34)"
    color: "oklch(91% 0.028 82)"
    rounded: "8px"
    padding: 12px 24px
    fontFamily: General Sans
    fontWeight: 600
  button-secondary:
    backgroundColor: "oklch(91% 0.028 82)"
    color: "oklch(14% 0.006 80)"
    rounded: "8px"
    border: 1px solid oklch(14% 0.006 80)
    padding: 12px 24px
  card:
    backgroundColor: "oklch(91% 0.028 82)"
    color: "oklch(14% 0.006 80)"
    rounded: "8px"
    padding: 24px
---

## Overview

The **Editorial Print** trend in the Jayden Design System. Neo-Japandi / Illustration-First — strict 2-ink system. Accent appears at full weight max twice per section.

Neo-Japandi, 2-ink, illustration-first. Strict 2-ink system: `--paper` (background) + `--ink` (text). Accent appears at full weight **max twice per section**. Rich illustration or photography carries the visual weight. Japanese asymmetric grids.

Apply the CSS class on `<html>`. 3 variants available.

### Variants

| Variant Class | Name | Description | Key Colors |
|---|---|---|---|
| `editorial-print-a` | **Terracotta Ukiyo** | Aged paper, warm terracotta, Neo Mirai energy | `--paper`: `oklch(91% 0.028 82)`, `--ink`: `oklch(14% 0.006 80)` |
| `editorial-print-b` | **Indigo Woodblock** | Japanese woodblock blue, Hokusai palette | `--paper`: `oklch(94% 0.012 240)`, `--ink`: `oklch(12% 0.012 250)` |
| `editorial-print-c` | **Night Market** | Dark editorial — lantern light on black | `--paper`: `oklch(10% 0.012 50)`, `--ink`: `oklch(94% 0.016 75)` |

---

## Colors

Strict 2-ink system. Paper + ink. Accent used at full weight max twice per section.

---

## Typography

Newsreader serif for display and body — editorial gravitas. General Sans for structure. Large display size `clamp(3.5rem, 9vw, 8rem)`.

---

## Shapes

Modest, print-inspired. 4px on interactive elements, 8px on cards. 12px max.

---

## Components

No glass, no shadows. Illustration or photography carries visual weight. Japanese asymmetric grid layouts.

---

## Do's and Don'ts

- **Do** use accent at full weight max twice per section.
- **Do** pair with illustration or photography as the visual world.
- **Don't** use glassmorphism — print has no glass.
- **Don't** use more than 2 inks plus one accent.

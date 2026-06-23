---
version: alpha
name: "Open World Ambient"
description: >
  Jayden Design System — Cinematic Scene + Floating UI. Ambient glass panels
  over full-screen video or 3D scenes. Apply class `open-world-ambient-a` on <html>.
colors:
  text: "oklch(92% 0.018 75)"
  text_strong: "oklch(99% 0 0)"
  text_muted: "oklch(92% 0.018 75 / 0.6)"
  glass: "rgba(255,255,255,0.18)"
  glass_border: "rgba(255,255,255,0.18)"
  accent: "oklch(74% 0.12 72)"
  accent_pale: "oklch(82% 0.07 72)"
  accent_cool: "oklch(80% 0.08 220)"
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
    color: "oklch(99% 0 0)"
    rounded: "999px"
    padding: 12px 24px
    fontFamily: General Sans
    fontWeight: 600
  button-secondary:
    backgroundColor: "transparent"
    color: "oklch(92% 0.018 75)"
    rounded: "999px"
    border: 1px solid rgba(255,255,255,0.18)
    padding: 12px 24px
  glass-panel:
    backgroundColor: "rgba(255,255,255,0.18)"
    backdropFilter: "blur(52px) saturate(220%)"
    border: 1px solid rgba(255,255,255,0.18)
    rounded: "20px"
    boxShadow: "0 8px 32px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.35)"
    textColor: "oklch(92% 0.018 75)"
  card:
    backgroundColor: "transparent"
    color: "oklch(92% 0.018 75)"
    rounded: "16px"
    padding: 24px
---

## Overview

The **Open World Ambient** trend in the Jayden Design System. Cinematic Scene + Floating UI — ambient glass panels over full-screen video or 3D scenes.

Cinematic, cozy, ambient scene. Floating glass panels over full-screen cinematic video or 3D scenes. The glass is intentionally translucent — the scene is the hero. Use `.ambient-panel` for the main floating UI.

Apply the CSS class on `<html>`. 3 variants available.

### Variants

| Variant Class | Name | Description | Key Colors |
|---|---|---|---|
| `open-world-ambient-a` | **Lofi Earth** | Warm, cozy, StudyWithMe energy. Confirmed taste. | `--accent`: `oklch(74% 0.12 72)`, `--glass`: `rgba(255,255,255,0.18)` |
| `open-world-ambient-b` | **Mountain Dawn** | Alpine morning, misty, meditative. Ice-blue glass. | `--accent`: `oklch(78% 0.14 220)`, `--glass`: `rgba(200,220,255,0.13)` |
| `open-world-ambient-c` | **Sakura Hour** | Cherry blossom, Japanese afternoon, soft luxury. | `--accent`: `oklch(72% 0.16 10)`, `--glass`: `rgba(255,220,225,0.15)` |

---

## Colors

Text is always light against the cinematic scene. Glass panels are translucent white/blue/pink tinted to match the scene temperature. Accent is warm gold by default.

---

## Typography

General Sans for display and UI. Newsreader serif for body warmth. High contrast text on glass — always ≥ 4.5:1.

---

## Glass

Deep blur (52px) on the main floating panel — `.ambient-panel` or `.glass-deep`. Secondary elements use `.glass` (20px blur). The scene behind IS the background.

---

## Components

All token-driven. Glass panels float over full-screen scene.

---

## Do's and Don'ts

- **Do** pair with full-screen video or 3D scene behind glass.
- **Do** use `.ambient-panel` for the main floating UI surface.
- **Don't** put glass on every element — let the scene breathe.
- **Don't** use CSS-only backgrounds — real video/scene only.

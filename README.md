# Jayden Design System

A trend-driven design system: **9 trends × 3 color variants** (28 token sets total) in
OKLCH, plus a restraint-first glass component layer. One source of truth, consumed two ways.

## Two consumers

### 1. Claude Design (auto-enforced)
Import this repo into Claude Design (`claude.ai/design` → connect GitHub repo, or
`/design-sync` on a local clone). Claude Design then builds with these real tokens +
components, checks its own output against them, and self-corrects before you see it.
`GUIDELINES.md` is the brand-rules doc it reads for taste + anti-patterns.

### 2. The `ui-design-2026` Claude Code skill (instructional)
The skill drives the *build workflow* (client brief → trend selection → pre-build gate →
single-file HTML output) and references these files for tokens/components instead of
inlining them. Skill = how to build. This repo = what to build with.

## Structure

```
tokens/
  index.css              # @imports base + all trends — link this once
  base.css               # shared primitives (spacing, radius, easing)
  trends/
    spatial-presence.css   neon-noir.css       live-interface.css   editorial-print.css   resonant-stark.css
    liquid-glass.css       narrative-motion.css open-world-ambient.css bento-grid.css
components/
  glass.css              # .glass / .glass-secondary / .glass-deep / .glass-dense (2026 restraint rule)
  buttons.css            # token-driven default
  cards.css              # token-driven default
GUIDELINES.md            # taste profile, anti-slop test, pre-build gate, color + glass rules
```

## Usage

```html
<link rel="stylesheet" href="tokens/index.css">
<link rel="stylesheet" href="components/glass.css">
<html class="liquid-glass-a">   <!-- pick one trend-variant class -->
```

Every component reads `--bg / --surface / --accent / --text / --muted`, so swapping the
variant class re-themes the whole page. Each trend exposes variants `-a` / `-b` / `-c`
(Resonant Stark also has `-d`, "Studio Blush").

## Trends

| # | Trend | Vibe |
|---|-------|------|
| 1 | Spatial Presence | 3D immersive WebGL |
| 2 | Liquid Glass | Glassmorphism / Vision Pro material |
| 3 | Neon Noir | Cyberpunk dark |
| 4 | Narrative Motion | Scrollytelling |
| 5 | Live Interface | Embedded product preview |
| 6 | Open World Ambient | Cinematic scene + floating UI |
| 7 | Editorial Print | Neo-Japandi / illustration-first |
| 8 | Bento Grid | Modular info architecture |
| 9 | Resonant Stark | Quiet premium / restrained minimalism |

## Provenance

Tokens, glass spec, and guidelines extracted verbatim from `~/.claude/skills/ui-design-2026/SKILL.md`.
This repo is canonical for tokens/components; the skill is canonical for the build workflow.

# Jayden Design System — Guidelines

The taste profile, anti-patterns, and quality gates that govern every build with this
system. Tokens and components live in `tokens/` and `components/`; this file is the
*judgment* layer Claude (Design or Code) applies on top of them.

> Source of truth lifted from the `ui-design-2026` skill. When this file and the skill
> disagree, update both — this repo is canonical for tokens/components, the skill is
> canonical for the build *workflow*.

---

## Taste Profile — read before any design decision

*Confirmed preferences from prior sessions. Apply before trend selection.*

**What works:**
- Cinematic depth — foreground / midground / background always present
- Liquid glass material quality — panels feel like frosted glass, not blue rectangles
- Light, airy, Apple-clean — default to morning light, not nightclub
- Motion reveals and breathes — never decorates
- Radical restraint in color (2–3 max), richness in texture and depth
- Personality through microinteractions — alive without being loud

**What doesn't work:**
- CSS-only nature/interior/cinematic backgrounds — always flat, unconvincing
- Purple-on-white SaaS gradient — immediate disqualification
- Dark/moody as default — only if brief demands it
- Harsh edges, heavy borders, strong drop shadows on glass
- Decoration that doesn't communicate anything

**Reference bar (internalize before building):**
- Apple Vision Pro spatial UI — liquid glass, real-world depth, aluminum material
- StudyWithMe AI — cinematic scene bg, frosted panels floating over it, warm earth tones
- Otherlife (Awwwards) — WebGL transitions, geometric distortion, motion as narrative
- Igloo Inc (Awwwards) — 2-color system, zero decoration, animation as vocabulary
- Chungi Folio (Awwwards) — personality through hover microinteractions, alive not loud
- Neo Mirai Conference — 2-ink editorial system, illustration as the visual world, Japanese asymmetric grid

---

## Pre-build gate

Before any code:

1. **Purpose** — Persuasive (drive action) or expressive (brand/identity)?
2. **Tone** — Name one dominant direction.
3. **Differentiation Anchor** — "If screenshotted with logo removed, how would someone recognise it?"
4. **Taste Alignment Check** — Does the direction match the profile above? If not, justify the deviation.
5. **Physical Scene Sentence** — One sentence: who uses this, where, under what ambient light, in what mood. If it doesn't force the theme answer (dark vs light, warm vs cool), add detail until it does. Never pick dark "because tools look cool dark" or light "to be safe."
6. **AI Slop Test** — run both tiers:
   - *First-order:* Could someone guess the trend + palette from the product category alone? If yes, rework — training-data reflex.
   - *Second-order:* Knowing the anti-references, could they still guess the aesthetic family? If yes, rework — avoided trap 1 but hit trap 2.

**Hard rule:** No placeholder copy ever. No "Lorem ipsum", no "Product Name". Delivery-ready with real content.

---

## Color system

- 2–3 colors max. Richness comes from texture and depth, not hue count.
- Use OKLCH tokens from `tokens/trends/*.css` — never raw hex in components.
- One trend-variant class per page (e.g. `liquid-glass-a`); all components read `--bg / --surface / --accent / --text / --muted`.

## Glass system (the 2026 Restraint Rule)

- Heavy frosted blur on *every* panel is OUT. Subtle translucency on overlays/modals/floating nav, paired with strong contrast.
- Blur signals z-hierarchy, not decoration — deeper blur = higher layer. Vary blur by layer.
- Glass on floating/overlay elements only. Content surfaces sit on solid/near-solid backgrounds.
- Every glass surface clears contrast ≥ 4.5:1 on its text. If the scene breaks that, raise opacity (`.glass-dense`) — don't lower the blur.
- Default `.glass`. Reserve `.glass-deep` for the single topmost floating element. `.glass-dense` when text needs reliable opaque backing.

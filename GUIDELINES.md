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

**Brief Inference (run first, one line):** before the gate above, state the Design Read in one sentence — page kind, vibe words from the brief, any reference signals given, audience, brand assets available, quiet constraints (deadline, framework, accessibility). This forces the gate answers instead of letting them default.

---

## Color system

- 2–3 colors max. Richness comes from texture and depth, not hue count.
- Use OKLCH tokens from `tokens/trends/*.css` — never raw hex in components.
- One trend-variant class per page (e.g. `liquid-glass-a`); all components read `--bg / --surface / --accent / --text / --muted`.
- **Banned-on-sight hexes** (premium-consumer cliché, instant disqualification): `#7C3AED`/`#8B5CF6` purple-violet, `#6366F1` indigo-on-white, `#EC4899` pink-purple gradient pair, generic SaaS blue `#3B82F6` as a sole accent. The LILA RULE: if the accent reads as "AI-purple" at any lightness, reject it — pick a hue with intent (the brief's domain), not the training-data reflex.

## Glass system (the 2026 Restraint Rule)

- Heavy frosted blur on *every* panel is OUT. Subtle translucency on overlays/modals/floating nav, paired with strong contrast.
- Blur signals z-hierarchy, not decoration — deeper blur = higher layer. Vary blur by layer.
- Glass on floating/overlay elements only. Content surfaces sit on solid/near-solid backgrounds.
- Every glass surface clears contrast ≥ 4.5:1 on its text. If the scene breaks that, raise opacity (`.glass-dense`) — don't lower the blur.
- Default `.glass`. Reserve `.glass-deep` for the single topmost floating element. `.glass-dense` when text needs reliable opaque backing.
- **Honest labeling:** there is no official Apple "Liquid Glass" CSS package — Apple's Liquid Glass is a native-platform material (HIG/SwiftUI), not a public web spec. What we ship is a labeled web approximation (`backdrop-filter` + layered borders + highlight overlays). Never claim it's the Apple material in comments or copy.
- Always pair `backdrop-filter` with a `@media (prefers-reduced-transparency: reduce)` fallback to an opaque surface — test it, support is uneven but the fallback is cheap.

---

## Real design systems (non-trend work)

The 9 trend-variants are for bespoke marketing/product surfaces. For **dashboards, admin panels, internal tools, or anything where the brief is "looks professional, ships fast, no bespoke art direction"** — don't force a trend class. Reach for an official system instead:

| Brief signal | System |
|---|---|
| Generic SaaS dashboard, React | Radix Themes or shadcn/ui |
| Enterprise data-dense tool | Carbon (IBM) |
| Microsoft-ecosystem product | Fluent UI |
| Government / public-sector | GOV.UK Frontend (UK) or USWDS (US) |
| Shopify app | Polaris Web Components |
| GitHub-adjacent dev tool | Primer |
| Atlassian-ecosystem tool | Atlaskit |
| Material-native (Android-adjacent web) | Material Web |

Install commands and canonical doc links live with the design system's own docs — check the system's GitHub before hand-rolling components it already ships.

---

## AI Tells — named anti-patterns (zero tolerance)

Beyond the Global Anti-Patterns already enforced in `ui-design-2026`, these are the specific, nameable tells that mark a build as AI-generated. Check every one before shipping:

- **Em-dash anywhere in copy** — zero tolerance, no exceptions. Use a period, comma, or rewrite the sentence.
- Version/build labels in the hero (`V0.6`, `BETA`, `v2.1.0`) used as decoration, not real product state.
- Section-number eyebrows as default scaffolding (`00 / INDEX`, `001 · Capabilities`) — max one eyebrow per three sections, never sequential numbering as a crutch.
- Decorative status dots (green dot + "All systems operational") with no real monitoring behind them.
- Decoration text strips at the hero bottom (`BRAND.MOTION.SPATIAL.`) that say nothing.
- Locale/weather/time strips bolted onto a hero for fake liveliness.
- Generic scroll cues (bouncing chevron, "Scroll to explore") as a default — earn it with content that needs it.
- Fake version footers / changelog stubs with no real history behind them.
- Photo-credit-style captions used as pure decoration ("Photo: Unsplash") on placeholder imagery.
- Generic step labels (`Stage 1`, `Step 2`, `Phase 3`) instead of naming what the step actually is.
- "Quietly trusted by" / "Used by teams at" marketing copy with no real logos to back it.
- Div-based fake screenshots (browser-chrome mockups built from divs) standing in for a real product screenshot.
- Logo walls used as the *only* social proof — pair with a real quote/metric or cut it.
- Marquee/ticker elements — max one per page, and only if content genuinely scrolls (live data, not decoration).
- Zigzag image/text alternation beyond 2 cycles — caps out fast, becomes a template tell.
- Split-header layout (logo left, nav right, CTA far right) as the unexamined default — justify it or vary it.
- Two CTAs with duplicate intent ("Get Started" + "Start Now") — every CTA on screen must do a distinct job.
- Bento grids with cell counts that don't match real content — never pad to hit a grid shape.

---

## Pre-flight check (run before calling any build done)

1. Brief Inference one-liner stated, and the Pre-build gate's 6 steps all answered — not skipped because "it's obvious."
2. Zero em-dashes anywhere in shipped copy.
3. No placeholder copy, no Lorem ipsum, no "Product Name" / "Company Inc."
4. Accent hue isn't on the banned-hex list; passes the LILA RULE.
5. 2–3 colors max; richness from texture/depth, not added hues.
6. Every glass surface ≥ 4.5:1 contrast; `prefers-reduced-transparency` fallback present if `backdrop-filter` is used.
7. Liquid Glass labeled as a web approximation, never claimed as the Apple-native material.
8. None of the AI Tells list above are present — walk the list item by item, don't eyeball it.
9. First-order and second-order AI Slop Test both pass (Pre-build gate step 6).
10. If this is a dashboard/admin/internal-tool brief, confirm a real design system (table above) was used instead of a forced trend-variant.
11. Differentiation Anchor answer is concrete, not generic ("clean UI" is not an answer).
12. Motion present only where it reveals or aids understanding — nothing animates purely to look alive.

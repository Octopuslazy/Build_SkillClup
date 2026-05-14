# MiniGame — Design System

A modern, neo-gaming design system for **MiniGame** — a web-based logic-game hub (Knight's Tour, 8 Queens, Lights Out, Cube Puzzle, etc.). Built to replace the current "tool/demo" UI with a confident, dark-mode, gamer-friendly aesthetic that still respects legibility and accessibility.

> **Source materials provided**
> - `uploads/ChatGPT Image 09_32_04 14 thg 5, 2026.png` — full UI mock of the target direction ("LogicArena / Train Your Brain"). All visual decisions derive from this image.
> - Detailed product brief (Vietnamese + English) describing color palette, components, and per-game UI.
>
> No codebase / Figma / repo was attached. UI components in `ui_kits/` are pixel-leaning recreations of the mock, not lifted from production code.

---

## Index

| File / Folder | What it is |
|---|---|
| `colors_and_type.css` | Source of truth for color, type, spacing, radius, shadow tokens. |
| `preview/` | Small HTML cards that render in the Design System tab (colors, type specimens, components, etc). |
| `assets/` | Logo SVG and any brand imagery. Icons load from Lucide via CDN — see ICONOGRAPHY below. |
| `ui_kits/hub/` | UI kit recreating the MiniGame Hub: landing, game cards, in-game shells (Knight Tour, 8 Queens, Lights Out). |
| `fonts/` | (empty — webfonts loaded from Google Fonts; see `colors_and_type.css`). |
| `SKILL.md` | Agent-Skill manifest for using this system in Claude Code or other agentic tools. |

---

## Brand at a glance

**Name:** MiniGame · **Tagline:** *Train Your Brain With Logic Games*
**Personality:** focused, sharp, a little futuristic. Not silly, not cartoon. Think *chess.com meets cyberpunk dashboard*.
**Audience:** casual-to-serious puzzle players, ages 14+, mobile-first but desktop-friendly.

---

## CONTENT FUNDAMENTALS

**Voice.** Confident, encouraging, never condescending. Talks to the player as a peer who's about to level up. Uses **"you"** ("Train **your** brain", "Can **you** complete the tour in 32 moves?"). Avoids "we" outside of brand statements.

**Casing.**
- Page + section titles in **Title Case** ("Featured Games", "Daily Challenge", "Your Progress").
- Buttons in **Title Case** ("Play Now", "Play Challenge", "Show Path").
- Game names + game UI titles in **UPPERCASE with tracking** ("KNIGHT TOUR", "8 QUEENS", "LIGHTS OUT") — feels like an arcade marquee.
- Meta labels in normal case ("Moves", "Remaining", "Hints Left").

**Numeric values are mono.** Stats, timers, scores, coordinates always use JetBrains Mono with tabular figures — never the UI font. This is non-negotiable; it's the most identifiable detail of the system.

**Tone examples.**
- Hero: *"Train Your Brain With Logic Games — Challenge yourself. Improve your skills. Become a logic master!"*
- Game card sub: *"Find the knight's path"*, *"Place 8 queens"*, *"Turn off all the lights"* — short, imperative, ≤4 words.
- Empty / hint state: *"Tap a square to begin"*, *"3 hints left."*
- Win modal: *"Solved!"* (not "Congratulations!").

**Length rules.** Headlines ≤ 6 words. Sub-copy ≤ 12 words. Button labels ≤ 2 words. Meta labels = 1 word.

**Emoji.** Not used in product UI. Reserved for marketing/social only. Use Lucide icons instead.

**Numbers + symbols.** Star ratings shown as `⭐ 4.8`; player counts as `👥 1.2K` (Lucide users icon in product, ⭐/👥 only acceptable as ASCII shorthand). Timer shown `mm:ss` always.

---

## VISUAL FOUNDATIONS

### Color
Dark canvas with one **indigo→cyan** gradient that does all the heavy lifting. Surfaces are stacked slate (#0F172A → #1E293B → #243149). No pure black, no pure white.

| Role | Token | Hex |
|---|---|---|
| Page bg | `--mg-bg-1` | `#0F172A` |
| Card | `--mg-surface-1` | `#1E293B` |
| Border | `--mg-border` | `#2A3654` |
| Primary | `--mg-primary-500` | `#6366F1` |
| Accent | `--mg-accent-400` | `#22D3EE` |
| Success / Easy | `--mg-success` | `#22C55E` |
| Danger / Hard | `--mg-danger` | `#EF4444` |
| Text high | `--mg-text-1` | `#F8FAFC` |
| Text meta | `--mg-text-3` | `#94A3B8` |

### Type
- **Space Grotesk** for everything UI (400 / 500 / 600 / 700). Subtle geometric grotesque — sits halfway between Inter and Eurostile. Good for both headlines and 12px metadata.
- **JetBrains Mono** for *all* numbers + code (moves, timer, coordinates, scores).
- Negative letter-spacing (-0.01 → -0.02em) on display sizes only.
- Eyebrows: 11px, uppercase, tracking +0.14em.

### Spacing
4px base grid. Common stops: **4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 64**. Cards prefer 24px inner padding; tight chip groups use 8px gap.

### Radii
Cards `16px`, large panels `20–28px`, small chips/buttons `12px`, pill badges `999px`. Game-board cells use `8–10px` — square enough to read as a grid but soft.

### Backgrounds
- App canvas: solid `--mg-bg-1` (no image).
- Hero / featured surfaces: **subtle radial purple** at top-left fading into the canvas, plus a single low-opacity "starfield" SVG. Never a full photographic background.
- Game-card thumbnails: dark slate with a single dramatic 3D piece (knight, queen, cube) lit from below with the brand gradient. Treat thumbnails as small "movie posters."
- Lights Out cells use **neon cyan glow** on lit state; nothing else in the system glows that intensely — it's reserved.

### Glass / blur
Sparingly. Used only on (1) the floating "Daily Challenge" card overlapping the hero and (2) modal dialogs. `backdrop-filter: blur(14px) saturate(140%)` with `rgba(30,41,59,.78)` fill. Don't glass-ify regular cards.

### Borders
1px, color `--mg-border` (#2A3654) by default. Hover bumps to `--mg-border-strong` (#3A4A72) **or** a 1px primary ring + outer glow for high-emphasis cards (game cards, CTA buttons).

### Shadows
Two systems:
- **Card shadow** (resting): `0 1px 0 rgba(255,255,255,.04) inset, 0 8px 24px -12px rgba(0,0,0,.6)`. Inset highlight is what sells the depth on dark surfaces — keep it.
- **Glow** (interactive emphasis): `0 0 0 1px rgba(99,102,241,.35), 0 12px 32px -8px rgba(99,102,241,.55)`. Applied on hover for game cards and the Play CTA.

### Animation
- Easing: `cubic-bezier(.2,.7,.2,1)` for most things; `cubic-bezier(.34,1.56,.64,1)` (spring) for chess-piece moves + win confetti.
- Hover lift: `translateY(-2px)` + glow, 220ms.
- Press: `scale(.97)`, 120ms — never a color change.
- Cell click (board): `scale(.92 → 1)` bounce, 180ms spring.
- Win: confetti + scale-pulse on score number.
- Invalid: 200ms `shake` (translateX -4 → 4 → -2 → 0).
- Page transitions: 280ms fade + 4px upward translate. No slide carousels.

### Hover / press states
- Buttons: hover = +6% luminance + glow; press = `scale(.97)`.
- Cards: hover = lift + primary glow + 1.5° tilt toward cursor (capped, optional).
- Icon buttons: hover = `--mg-surface-2` fill, no glow.
- Disabled: 40% opacity, no glow, no cursor change beyond `not-allowed`.

### Transparency rules
Never below 70% alpha on text. Glass surfaces stay between 70–85% alpha. Overlays (modals) dim canvas with `rgba(11,16,32,.72)`.

### Imagery vibe
Cool. Indigo-shifted. Slight grain on hero illustrations is OK. No warm/sepia photography anywhere. Hero pieces (knight, queen, cube) are rendered 3D with a magenta-to-cyan rim light.

### Layout rules
- Top nav: fixed, 72px tall, glass.
- Left sidebar: 240px on desktop, collapses to icon rail at <1100px, hidden on mobile.
- Content max-width: 1440px, centered, 32px gutters.
- Mobile (<640px): single column, bottom action bar fixed, board uses `width: min(92vw, 420px); aspect-ratio: 1`.
- Cards in a grid: 24px gap; never less.

---

## ICONOGRAPHY

**Primary set: [Lucide](https://lucide.dev)** loaded from CDN — `https://unpkg.com/lucide-static@latest/`. Stroke 1.75px, 20px default size, 24px in nav. Color inherits from `currentColor`.

Why Lucide: matches the line-weight of Space Grotesk, has every icon used in the mock (home, gamepad-2, calendar, trophy, star, search, bell, undo, lightbulb, rotate-ccw, settings), and stays consistent across the gaming + dashboard surfaces.

**Game thumbnails** are *not* icons — they're flat illustrations (1:1 squares, indigo-lit 3D piece) treated as poster art. See `assets/thumbs/` placeholders.

**Logo**: `assets/logo.svg` — a stylized crown over the wordmark. Crown uses the indigo gradient. Tagline "TRAIN YOUR BRAIN" sits in 9px tracked uppercase beneath.

**Emoji:** never used in product surfaces. Marketing only.

**Unicode shorthand:** `⭐` for ratings is acceptable as a fallback when a Lucide star isn't ergonomic; otherwise prefer Lucide.

> **Substitution flag:** the source mock uses custom 3D-rendered game pieces (knight, queen, cube). The repo does not contain these renders. Thumbnails in this kit are **placeholders** (CSS gradient + Lucide icon). Please drop final renders into `assets/thumbs/` (1:1, 600px, transparent PNG/WebP).

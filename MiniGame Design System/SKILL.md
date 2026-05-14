---
name: minigame-design
description: Use this skill to generate well-branded interfaces and assets for MiniGame, a web-based logic-game hub (Knight Tour, 8 Queens, Lights Out, Cube Puzzle, etc.), either for production or throwaway prototypes / mocks. Contains essential design guidelines, colors, type, fonts, assets, and a UI kit (`ui_kits/hub/`) recreating the hub layout and in-game shells.
user-invocable: true
---

# MiniGame design skill

Read `README.md` first — it covers brand context, content voice, visual foundations, and iconography. Then explore the other files as needed:

- `colors_and_type.css` — source of truth for color, type, spacing, radius, shadow tokens. Always reference these custom properties; do not redefine palette values.
- `preview/` — small specimen HTML files (colors, type, components). Useful as visual references.
- `assets/` — `logo.svg`, `logomark.svg`, `starfield.svg`. Icons load from Lucide CDN.
- `ui_kits/hub/` — high-fidelity recreation of the MiniGame Hub (landing, game cards, Knight Tour, 8 Queens, Lights Out). Lift components from here for prototypes.

## Working rules

1. **Dark canvas only.** Page background is `--mg-bg-1` (#0F172A). Never go pure black or white.
2. **One gradient does the work.** Use `--mg-grad-primary` (indigo) or `--mg-grad-hero` (indigo→cyan) for hero / CTA. Don't add more.
3. **Numbers are mono.** Every numeric value (timer, score, moves, coords) uses `--mg-font-mono` with `font-feature-settings:"tnum" 1`. Non-negotiable.
4. **Game-screen titles are UPPERCASE-tracked** (`letter-spacing: .25em`). Section titles are Title Case.
5. **No emoji in product UI.** Use Lucide icons (CDN: `https://unpkg.com/lucide-static@latest/`) at 1.75 stroke.
6. **Card hover = lift + indigo glow.** Use the `--mg-glow-primary` shadow token. Press = `scale(.97)`.
7. **Glass is reserved** for the floating Daily Challenge card and modal overlays. Don't glass regular cards.
8. **Difficulty pills are colored:** Easy = green, Medium = amber, Hard = red, Expert = purple gradient.
9. **Board cells:** light = `#E2E8F0`, dark = `#334155`, legal-move highlight = gold ring + inset glow.
10. **Lights-Out cells** are the only place neon-cyan glow is intense; reserve that treatment.

## If working on production code

Pull tokens from `colors_and_type.css`. Copy components out of `ui_kits/hub/*.jsx` as starting points (they're cosmetic shells, not production logic). Wire to your own state.

## If creating throwaway artifacts (mocks, slides, prototypes)

Copy `colors_and_type.css` + needed assets into the artifact, then build static HTML referencing the tokens. The `ui_kits/hub/index.html` is the canonical example to reference for layout proportions.

## If the user invokes this skill bare

Ask: "What are we building today — landing page, in-game UI, marketing slide, or something else? Which surfaces should I cover, and any specific games or screens to prioritize?" Then act as an expert designer who outputs HTML artifacts (or production code) matching the MiniGame language.

## Substitutions / open items

- Game pieces are CSS+SVG placeholders. Replace with 3D renders if available.
- Fonts (Space Grotesk + JetBrains Mono) load from Google Fonts CDN. For offline production, swap to self-hosted files in `fonts/`.

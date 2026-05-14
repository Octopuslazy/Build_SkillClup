# MiniGame Hub — UI Kit

A high-fidelity recreation of the MiniGame Hub: landing page, game-card grid, and the three in-game shells (Knight Tour, 8 Queens, Lights Out). Built as small JSX components that compose into `index.html`.

## Structure

| File | Purpose |
|---|---|
| `index.html` | The interactive hub: navbar, sidebar, hero, featured games, stats panel, daily challenge. Click any game card to drop into its play shell. |
| `Shell.jsx` | App chrome: `NavBar`, `Sidebar`, `PlayerCard`, `Footer` features bar. |
| `Hero.jsx` | Hero unit with gradient panel + chess piece + Play Now CTA. |
| `GameCard.jsx` | The featured-game tile with thumbnail, badge, rating, play button. |
| `RightRail.jsx` | Progress ring + daily streak + daily challenge card. |
| `KnightTour.jsx` | Knight Tour play screen (board, sidebar stats, move history). |
| `EightQueens.jsx` | 8 Queens play screen (board with queens, conflict panel). |
| `LightsOut.jsx` | Lights Out play screen (neon-glow cells, theme switcher). |
| `icons.jsx` | Inline Lucide SVG icons used across the kit. |

All components read from `../../colors_and_type.css`.

## Caveats / shortcuts

- **Game pieces are CSS+SVG placeholders.** The source mock uses photorealistic 3D renders (knight, queen, cube). Those don't exist in the project — replace `assets/thumbs/*.png` if you have them.
- **No real game logic.** Click handlers are cosmetic; this is a kit for layout fidelity, not a playable port.
- **No mobile breakpoint flow yet** — desktop only. Mobile tweaks called out in the README.

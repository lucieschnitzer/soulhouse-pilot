# Soulhouse Pilot — Landing Page

Static marketing landing page for the Soulhouse pilot. EN + DE, deployed to GitHub Pages. No app logic, no backend.

## Live URLs

- EN: https://lucieschnitzer.github.io/soulhouse-pilot/
- DE: https://lucieschnitzer.github.io/soulhouse-pilot/de.html

Language switcher pinned top-right on both pages.

## Tech

Static HTML + CSS. `index.html` (EN), `de.html` (DE), `sh.css` + `sh-additions.css`.

No build step. Edit, commit, push — GitHub Pages rebuilds in ~30 seconds.

## Deploy

```bash
cd ~/Projects/soulhouse-pilot
git add -A
git commit -m "..."
git push origin main  # Pages rebuilds automatically
```

Per global G-13a, code task completion triggers commit+push automatically (no force, no skip hooks, no broken pushes).

## Related folders

- `pilot-carousels/` — the 5-carousel acquisition campaign (Instagram assets)
- `training-carousels/` — the 4 training carousels (Foundation + R/R/I)
- `assets/` — hero image, testimonial headshots, logo

## Branding + voice

All consumer-facing copy on this page is governed by the Biofeedback Business rulebook:

- Master: `/Users/lucie/Desktop/Claude Code/PROJECTS/Biofeedback Business/05-strategy/Biofeedback_Rulebook_v2.md`
- Landing page source prompt: `/Users/lucie/Desktop/Claude Code/PROJECTS/Biofeedback Business/02-partnerships/soulhouse/marketing-assets/SoulhousePilot_LandingPage-ClaudeDesign_v4.md`

**Key facts on this page (must stay current with rulebook):**
- Pilot at Soulhouse Hamburg and Berlin (German market, not Portugal)
- Default Resiliency Index (DRI), 0–100 composite
- 7 biomarkers across 4 systems: Breath / Gas / Tension / Thinking
- R → R → I training framework
- Pilot pricing: €149 (standard price €220)
- Hero tagline must match: "Your nervous system learned patterns you never chose. I make them visible."

**Do not use on this page:** *clinical, heal, cure, treatment, baseline, exclamation marks, em dashes, PatternSense (retired brand).*

## Open items (Rosa-side)

- Rosa Tapper review + sign-off on EN + DE copy
- Decision between "Application form" CTA and "Waitlist" CTA (both rendered side-by-side)
- Registration data-sharing agreement between Soulhouse + Lucie
- Replacement of placeholder image slots with Soulhouse-grade assets

## Launch target

Soulhouse partnership goes live: **last week of May or first week of June 2026.** This landing page must be signed off before then.

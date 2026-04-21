# Soulhouse × DRM — Training Carousels (GitHub Pages bundle)

Everything needed to deploy to GitHub Pages. For the full walkthrough and the "sync scroll position" optional enhancement, see **CLAUDE_CODE_INSTRUCTIONS.md**.

## TL;DR

```sh
git init
git add .
git commit -m "initial"
git branch -M main
git remote add origin git@github.com:<ORG>/<REPO>.git
git push -u origin main
```

Then on GitHub:
**Settings → Pages → Source: Deploy from a branch → Branch: `main` / `/ (root)` → Save.**

URL arrives in ~1 minute at `https://<ORG>.github.io/<REPO>/`.

## Files

- `index.html` — shell with EN/DE toggle + iframe
- `en.html` — English carousels (renamed from `Training Carousels.html`)
- `de.html` — German carousels (renamed from `Training Carousels DE.html`)
- `colors_and_type.css` — shared type/color tokens
- `.nojekyll` — disables Jekyll so GH Pages serves files verbatim
- `CLAUDE_CODE_INSTRUCTIONS.md` — full handoff notes

## Smoke test locally

```sh
python3 -m http.server 8000
# open http://localhost:8000/
```

EN loads by default. Click **DE** — iframe swaps to `de.html`. Reload — language persists (localStorage + `?lang=` param).

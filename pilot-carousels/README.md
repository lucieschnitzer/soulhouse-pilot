# Soulhouse × DRM — Instagram Carousels

Static storyboard of the five Instagram carousels for the Soulhouse × Default
Resilient Method pilot (Hamburg + Berlin, May–June 2026), rendered in both
English and German.

**Live:** `https://<user>.github.io/<repo>/`
Use the `EN / DE` pill in the top-right to switch languages. Deep links:
`?lang=en` · `?lang=de`.

## Local preview

No build step. Just open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
# then open http://localhost:8000
```

## Structure

| File | What it is |
| --- | --- |
| `index.html` | Shell page with the EN/DE toggle. Default entry point. |
| `carousels.jsx` | English React tree (29 slides across 5 carousels). |
| `carousels_de.jsx` | German React tree. |
| `carousels.css` | Shared layout + component styles. |
| `colors_and_type.css` | Design tokens (imported by `carousels.css`). |
| `lang-toggle.css` | Styles for the EN/DE pill. |
| `en.html`, `de.html` | Optional direct-link fallbacks (single-language). |

React 18 + Babel Standalone are loaded from unpkg with pinned versions and
integrity hashes — no npm, no bundler.

## Editing content

All slide copy lives inside the JSX files. Search for the slide comment
(`{/* 1.4 Failure mode two ... */}`) to jump to a specific slide. Keep EN and
DE versions in structural sync — both files define the same 29 slides in the
same order.

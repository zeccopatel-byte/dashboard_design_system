# Avistar Dashboard Design System v2

Static site — no build step. Open `index.html` through any web server.

```
npx serve .
```

## Structure
- `index.html` — design system documentation app
- `support.js` — page runtime
- `ds/` — library: tokens, components, patterns, cards, charts runtime (`av-charts.js`)
- `orb.js` — orb renderer
- `assets/` — logo mark, wordmark, provider logos, icons, mascots, illustrations, patterns

## Deploy (Vercel)
Import this repo in Vercel → Framework preset **Other**, no build command, output directory `.`. Every push to `main` redeploys.

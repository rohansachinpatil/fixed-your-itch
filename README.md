# Itch Atlas

> Every problem on Razorpay's Fix My Itch, scraped end to end, turned into 143 startup briefs.

**Live:** [itch-atlas.vercel.app](https://itch-atlas.vercel.app) *(update after deploy)*

---

## What it is

Itch Atlas maps every problem published on [Fix My Itch](https://razorpay.com/m/fix-my-itch/) — Razorpay's public problem database — and pairs each one with a founder-readable startup brief:

- Build plan (step by step)
- First version (MVP checklist)
- Business model, pricing, go-to-market, and moat
- Risk factors
- A one-line verdict

**133** platform problems across 16 categories + **10** editorial picks = **143 total**, ranked by itch / founder score.

---

## Stack

Pure static site — zero build step, zero framework, zero server.

| Layer | Tech |
|-------|------|
| Markup | HTML5 |
| Styles | Vanilla CSS (custom properties, grid, animations) |
| Logic | Vanilla JS (ES5-compatible IIFE) |
| Data | Pre-built JS module (`data/problems.js`) |
| Fonts | Google Fonts (Bricolage Grotesque, IBM Plex Mono, Instrument Sans) |
| Hosting | Vercel (static) |

---

## Deploy to Vercel

### One-click (recommended)

1. Push this repo to GitHub / GitLab / Bitbucket.
2. Import the repo in [vercel.com/new](https://vercel.com/new).
3. Framework preset → **Other** (no build step needed).
4. Click **Deploy**.

### Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

The `vercel.json` already configures:
- Static asset caching (1 year for `assets/`, 1 day for `data/`)
- Security headers (X-Frame-Options, X-Content-Type-Options, CSP-ready)
- SPA-style fallback to `index.html`

---

## Local development

```bash
# Any static file server works, e.g.:
npx serve .
# or
python -m http.server 8080
```

Open `http://localhost:8080`.

> **Do not** open `index.html` as a `file://` URL — the `data/problems.js` script tag will fail on some browsers due to CORS restrictions.

---

## Project structure

```
├── index.html          # Single-page shell
├── vercel.json         # Vercel deployment config
├── assets/
│   ├── styles.css      # All styles (dark, glitchy, responsive)
│   └── app.js          # All behaviour (routing, filters, render)
├── data/
│   ├── problems.js     # Window global: window.ITCH_ATLAS
│   ├── problems.json   # Same data as JSON (reference)
│   ├── problems.csv    # Flat export
│   ├── b2b-blueprints.json
│   ├── editorial.json
│   └── scraped.json    # Raw scrape output
└── scripts/
    ├── scrape.js       # Headless scraper (Node + Puppeteer)
    ├── build-dataset.js
    └── solutions/      # Startup blueprint source files
```

---

## Legal & attribution

- Problem titles, descriptions, and itch scores: © Razorpay Software Pvt. Ltd. All rights reserved. Reproduced here for independent, non-commercial analysis.
- **Razorpay®** is a registered trademark of Razorpay Software Pvt. Ltd. This project is **not affiliated with, endorsed by, or sponsored by Razorpay**.
- Startup concepts, build plans, pricing, go-to-market, moats, risks, editorial scores, and market notes are original work by **Rohan Sachin Patil** and are licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
- **This site is for informational purposes only. Nothing here constitutes investment advice, financial advice, or a solicitation to invest.**

---

## Author

**Rohan Sachin Patil**
- GitHub: [@rohansachinpatil](https://github.com/rohansachinpatil)
- LinkedIn: [rohansachinpatil](https://linkedin.com/in/rohansachinpatil)

---

© 2026 Rohan Sachin Patil. All rights reserved.

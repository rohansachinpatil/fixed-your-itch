<div align="center">

# FIXED your ITCH

**143 startup blueprints built on every problem from Razorpay's Fix My Itch.**

[![Live site](https://img.shields.io/badge/live-fixed--your--itch.vercel.app-2f55f4?style=flat-square)](https://fixed-your-itch.vercel.app)
[![Vercel](https://img.shields.io/badge/deploy-Vercel-000?style=flat-square&logo=vercel)](https://fixed-your-itch.vercel.app)
[![License: MIT](https://img.shields.io/badge/license-MIT-2f55f4?style=flat-square)](LICENSE)
[![GitHub](https://img.shields.io/badge/github-rohansachinpatil/fixed--your--itch-2f55f4?style=flat-square&logo=github)](https://github.com/rohansachinpatil/fixed-your-itch)

India asked to **Fix My Itch**. This atlas scraped the whole wishlist and answered every single problem.

[Live site](https://fixed-your-itch.vercel.app) · [Source code](https://github.com/rohansachinpatil/fixed-your-itch) · [Report an issue](https://github.com/rohansachinpatil/fixed-your-itch/issues) · [Privacy](https://fixed-your-itch.vercel.app/privacy.html) · [Terms](https://fixed-your-itch.vercel.app/terms.html) · [Disclaimer](https://fixed-your-itch.vercel.app/disclaimer.html)

</div>

---

## What this is

Razorpay's **Fix My Itch** is a public platform where people and businesses across India describe real problems they want solved — unverified plumbers, fake rental listings, medicines priced wildly differently across pharmacies, ghosting freelancers.

The public page only ever showed 20 cards. This project scraped **all 133 problems across all 16 published categories** straight out of the page's React state, then added **10 editorial picks** to cover sectors the platform does not publish separately. Every one of the **143** problems is paired with an original startup blueprint: how to build it, what to ship first, how it makes money, what it costs, and what can kill it.

| | |
| --- | --- |
| **Problems mapped** | 143 (133 scraped + 10 editorial) |
| **Sectors** | 21 |
| **Source** | [razorpay.com/m/fix-my-itch](https://razorpay.com/m/fix-my-itch/) — extracted 13 Nov 2026 |
| **Stack** | Zero-dependency static site (HTML + CSS + vanilla JS) |
| **Hosting** | Vercel, with clean URLs and per-brief SEO |
| **Tracking** | None. No cookies, no analytics, no ads. |

## Highlights

- **Scratch-card welcome** — the Fix My Itch scratch mechanic, shown once per browser and never again on refresh.
- **Top 10 card deck** — drag, swipe or arrow through the ten strongest briefs.
- **Sector pile** — 21 sticker stamps; tap one to filter the ledger to that sector.
- **Full ledger** — all 143 briefs with instant search, sector filters and score sorting.
- **One URL per brief** — every problem has its own page at `/brief/<id>`, indexable, shareable and canonical.
- **Copy anywhere** — copy a share link, or copy a whole brief as formatted text.
- **Answers, not just data** — a visible FAQ section, per-brief `TechArticle` schema, and a sitemap with 149 URLs.

## Quick start

```bash
git clone https://github.com/rohansachinpatil/fixed-your-itch.git
cd fixed-your-itch
npm install          # optional — the site has no dependencies
npm run serve        # → http://127.0.0.1:8000
```

`npm run serve` starts a small static server that mirrors the Vercel rewrite, so `/brief/<id>` works locally exactly as it does in production.

## Deploying to Vercel

The repository is a static site — there is no build step to run.

```bash
npm i -g vercel
vercel              # preview deployment
vercel --prod       # production deployment
```

Or import the repo at [vercel.com/new](https://vercel.com/new) and connect it to GitHub for automatic deploys on every push.

`vercel.json` ships with the project and configures:

- the SPA rewrite so `/brief/<id>` serves `index.html`,
- long-lived caching for `robots.txt` and `sitemap.xml`,
- security headers: a strict Content-Security-Policy, `X-Content-Type-Options`, `X-Frame-Options: DENY`, `Referrer-Policy`, `Permissions-Policy` and HSTS.

> Set your own domain in one place before going live: `SITE_URL` in `scripts/generate-sitemap.js` and the `og:url` / `canonical` values in `index.html` and `assets/app.js`.

## How the data was collected

The Fix My Itch page is a Framer app that loads one category of a table at a time and renders the rows in React. Rather than scraping the visible HTML, `scripts/scrape.js` drives headless Chrome over the DevTools protocol, clicks all 16 category chips, and reads each row's React fiber props directly:

| Fiber prop | Field |
| --- | --- |
| `GxYbmSCXm` | problem title |
| `n5CZyq2G_` | description |
| `FSdKAOYFe` | industry |
| `gSNpzHAC1` | severity |
| `Wswmh3n6k` | TAM |
| `n0499yZT9` | whitespace |
| `Gz1HNukn9` | frequency |
| `lJoSHNtMf` | itch score |

Result: 133 problems, each with a description and all four sub-scores, zero nulls.

> The source publishes some sub-scores out of 10 and others out of 100 depending on the sector. `scripts/build-dataset.js` normalises every value above 10 down to a 0–10 scale before rendering.

### Rebuilding the dataset

```bash
# 1. Re-scrape (needs Chrome running with --remote-debugging-port=9222)
npm run scrape

# 2. Merge scraped rows + editorial picks + blueprints, validate, write outputs
npm run build:data

# 3. Regenerate the sitemap
npm run build:sitemap
```

`npm run build` runs steps 2 and 3 together. The build fails loudly if any platform problem lacks a blueprint or any blueprint matches no row.

### Project layout

```
index.html                 Page shell: hero, sector pile, deck, ledger, FAQ, footer
privacy.html               Privacy policy
terms.html                 Terms of use
disclaimer.html            Data-source and research disclaimer
404.html                   Not-found page
vercel.json                Vercel routing, caching and security headers
robots.txt / sitemap.xml   Generated SEO files
site.webmanifest           PWA manifest

assets/styles.css          Visual system, animations, responsive rules
assets/app.js              Routing, rendering, filters, intro card, SEO updates
assets/favicon.svg         Icon
assets/og.png              Social share image (1200×630)
assets/apple-touch-icon.png

data/problems.json         Generated dataset (143 problems)
data/problems.js           Same data as a browser global
data/problems.csv          Flat export
data/scraped.json          Raw 133-row scrape
data/editorial.json        Fixed input: the 10 editorial picks
data/b2b-blueprints.json   Fixed input: 10 reused B2B blueprints

scripts/scrape.js          CDP scraper for the Fix My Itch table
scripts/build-dataset.js   Merge, normalise, validate, write
scripts/generate-sitemap.js
scripts/serve.js           Zero-dependency static server with SPA fallback
scripts/solutions/         The authored blueprints
```

## How the ratings work

| Problem type | Rating |
| --- | --- |
| Platform problems (133) | Razorpay's published **itch score**, 0–100 |
| Editorial picks (10) | Weighted **founder score**: pain 30%, market 20%, timing 15%, feasibility 15%, moat 10%, revenue 10% |

Both are merged into one ordered ledger, so rank 001 is the strongest opportunity on the site.

## SEO

- Clean, indexable URLs — one page per brief at `/brief/<id>` (no hash fragments in the sitemap).
- Per-brief `<title>`, meta description, canonical link, `og:url` and `TechArticle` + `BreadcrumbList` JSON-LD, all updated on navigation.
- `WebSite`, `Person` and `FAQPage` schema on the home page, with the FAQ text rendered visibly for humans and crawlers alike.
- `sitemap.xml` with 149 URLs, priority weighted by rank; `robots.txt` pointing at it.
- Open Graph and Twitter cards with a generated 1200×630 image.
- Semantic landmarks, a skip link, visible focus states, `prefers-reduced-motion` support, and AA-contrast body copy.

## Legal and attribution

The problem statements and itch scores belong to **Razorpay Software Pvt. Ltd.** and are referenced here from the public Fix My Itch page with attribution. Every startup name, blueprint, pricing model, market note and verdict is **original independent analysis** by Rohan Sachin Patil.

This project is **not affiliated with, sponsored by, or endorsed by Razorpay**, and nothing on the site is investment advice. See [the disclaimer](https://fixed-your-itch.vercel.app/disclaimer.html) for the full text.

## Author

Built and shipped by **Rohan Sachin Patil** ([@rohansachinpatil](https://github.com/rohansachinpatil)) — GitHub [@rohansachinpatil](https://github.com/rohansachinpatil) · LinkedIn [in/rohansaschinpatil](https://www.linkedin.com/in/rohansaschinpatil) · Hugging Face [@rohansachinpatil](https://huggingface.co/rohansachinpatil).

## License

Code and original editorial content are released under the [MIT License](LICENSE). The scraped problem statements remain the property of Razorpay Software Pvt. Ltd. and are not relicensed here.

## Contributing

Issues and pull requests are welcome — especially corrections to a problem statement, a score, or a brief. Use the [issue tracker](https://github.com/rohansachinpatil/fixed-your-itch/issues).

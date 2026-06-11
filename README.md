# HealthierHomes.io

> Making healthier choices for your home.

Healthier Homes is a trustworthy, open-source, community-maintained guide to non-toxic, healthy **choices** for everyday home use. It focuses on what things are made of rather than brands, so the guidance stays useful over time.

The site made by [Cem](https://x.com/cembingool) and built with [VitePress](https://vitepress.dev) and ships as pure static HTML/CSS/JS.

## Principles

- **Material-focused, not brand-focused.** No specific product brands; no affiliate links.
- **Science-backed.** Every claim is tied to a citation (PubMed or reputable studies).
- **Neutral and practical.** Empowering, never alarmist.
- **Open.** MIT licensed; contributions welcome via Markdown pull requests.

## Project structure

```
healthier-homes/
├── .vitepress/
│   ├── config.ts            # Site config (srcDir = docs)
│   └── theme/               # Brand color overrides
├── docs/
│   ├── index.md             # Home
│   ├── overview.md          # Section map (what each section covers)
│   ├── what-people-say.md   # Community voices (under construction)
│   ├── kitchen.md           # Kitchen overview
│   ├── kitchen/             # Kitchen topics
│   │   ├── food-storage-containers.md
│   │   ├── cookware.md
│   │   ├── utensils-tools.md
│   │   ├── cutting-boards.md
│   │   ├── drinkware-water-bottles.md
│   │   ├── food-wraps-bags.md
│   │   ├── dinnerware-serving.md
│   │   ├── dish.md          # Hand & dishwasher
│   │   └── cloths-sponges-wipes.md
│   ├── cleaning-supplies.md # Cleaning Supplies overview
│   ├── cleaning-supplies/   # Cleaning Supplies topics
│   │   ├── all-purpose-surface-cleaners.md
│   │   ├── laundry-fabric-care.md
│   │   ├── floor-cleaners.md
│   │   ├── bathroom-cleaners.md
│   │   ├── glass-window-cleaners.md
│   │   └── disinfectants-sanitizers.md
│   ├── air-ventilation.md   # Coming soon
│   ├── water-system.md      # Coming soon
│   ├── sleep-system.md      # Coming soon
│   ├── hygiene.md           # Coming soon
│   └── public/              # Static assets (favicon, etc.)
├── .gitignore
├── CONTRIBUTING.md
├── package.json
└── README.md
```

## Local development

Requires [Node.js](https://nodejs.org) 18+.

```bash
git clone https://github.com/VolviX/healthier-homes.git
cd healthier-homes
npm install      # install dependencies
npm run dev      # start the dev server (prints a local URL, e.g. http://localhost:5173)
npm run build    # build the static site to .vitepress/dist
npm run preview  # preview the production build locally
```

Content lives in `docs/` as Markdown — edit a page and the dev server hot-reloads it.

## Content structure

Each topic page (e.g. the kitchen pages) follows the same structure. Section landing pages
like `kitchen.md` are overviews and don't follow it.

1. **Recommended Materials** — ordered safest first (no-downside materials lead), each with a
   short *What to consider* note covering honest trade-offs.
2. **Key Findings** — factual claims, each backed by an inline citation.
3. **Materials to Avoid + Risks**
4. **Practical Tips**

**Citations are inline, not a list.** Each claim links to its source at the point it's made, as
`[Author Year](url "Full citation — authors, title, journal vol:pages.")`. The full reference
lives in the link's hover tooltip; there is **no separate "Sources" section** at the bottom of
the page.

## Contributing

Contributions are welcome — especially adding real citations or translations, correcting facts, and drafting new pages. The easiest way to help:

1. Fork the repo and create a branch.
2. Edit the relevant Markdown file in `docs/`.
3. For any factual claim, add an inline citation right at the claim — `[Author Year](url "Authors. Title. Journal vol:pages.")` — using a peer-reviewed study (PubMed/DOI preferred). Verify the author and journal against the source rather than guessing.
4. Represent findings honestly, including limitations or corrections; if a claim can't be supported, soften or remove it.
5. Keep the tone neutral, practical, and non-alarmist.
6. Open a pull request.

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## Disclaimer

HealthierHomes.io provides educational information only — **not** medical advice.

## License

[MIT](LICENSE)

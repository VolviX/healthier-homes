# Contributing to HealthierHomes.io

Thanks for helping build a healthier home guide! This project lives or dies by the quality
of its sourcing, so contributions of **real, peer-reviewed citations** are the single most
valuable thing you can add.

## Ground rules

- **Material-focused, no brands**. Talk about what it made of — not specific products or retailers yet. Placeholders are fine if a brand example is
  truly needed for clarity.
- **Every claim needs a citation.** Prefer PubMed, government/health-agency sources, and
  peer-reviewed studies. Avoid blogs and marketing pages.
- **Neutral, practical, empowering tone.** No fear-mongering, no absolute health claims.
- **No affiliate links.**

## Page structure

Each topic page (e.g. the kitchen pages) follows this structure. Section landing pages like
`kitchen.md` are overviews and don't follow it.

1. **Recommended Materials** — ordered safest first (no-downside materials lead), each with a
   short *What to consider* note covering honest trade-offs.
2. **Key Findings** — factual claims, each backed by an inline citation.
3. **Materials to Avoid + Risks**
4. **Practical Tips**

Citations are **inline at the claim** — there is no separate "Sources" section.

## Adding a citation

1. Place the citation inline, right where the claim is made, as a Markdown link whose tooltip
   carries the full reference:

   ```md
   ...migration rises with heat ([Gupta et al. 2024](https://example.org/study "Gupta RK et al. (2024). Title. Journal vol:pages.")).
   ```

2. Prefer **PubMed, DOI, or peer-reviewed** sources; avoid blogs and marketing pages.
3. **Verify the author and journal by opening the source** — don't infer names from a search
   snippet.
4. **Represent findings honestly**, including limitations or corrections (e.g. a retracted dose
   estimate, or a null toxicity result).
5. If a claim can't be supported by a credible source, soften it or remove it rather than
   leaving it unsupported.

## Workflow

```bash
git clone https://github.com/VolviX/healthier-homes.git
cd healthier-homes
npm install
npm run dev      # preview your changes locally at the printed URL
```

1. Create a branch.
2. Edit the relevant `.md` file in `docs/`.
3. Run `npm run build` to confirm the site builds cleanly.
4. Open a pull request describing what you changed and why.

## Code of conduct

Be kind, be accurate, and assume good faith. We're all trying to make homes a little
healthier.

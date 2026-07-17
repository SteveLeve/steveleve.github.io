# Steve Leve — Field Journal

Static site hosted at https://steveleve.github.io. This is the fun, technical side of my web presence: a field journal for curious technologists, not a pitch to hiring managers. It charts three decades of building things through the stories that no longer fit on a resume — a high school holography lab, touring stage rigs, shrink-wrapped CD-ROM software, duct-tape order automation, DIY DevOps, a 24-minute disaster recovery, and the agent-driven development systems I build with today.

For the professional, "selling myself" version, see [stevenleve.com](https://stevenleve.com) and my [GitHub profile](https://github.com/SteveLeve).

## Design Goals

- **Audience:** fellow technologists and tinkerers. Celebrate history and growth; skip the sales copy.
- **Vanilla by intent:** semantic HTML, one hand-written stylesheet, lightweight JavaScript. No frameworks, no build step, nothing to compile — a deliberate contrast to my day-to-day stack.
- **Small delights:** light/dark theming, an animated hero canvas, and room for standalone experiment pages.

## Repository Layout

- `index.html` — Single-page field journal: hero intro plus era-by-era sections (Analog Origins, Shrink-Wrapped Software, The Web Takes Over, One Platform Seventeen Years, Now).
- `styles.css` — Theme tokens, layout, and components (`hero`, `stripe`, `card`, `grid-2`). Light/dark palettes via `data-theme` on the root element.
- `site.js` — Theme toggle with `localStorage` persistence, animation pause/play control, dynamic footer year.
- `hero-canvas.js` / `hero-canvas.css` — Animated background canvas for the hero area.
- `hero-content.css` — Additional hero styling (currently not linked from `index.html`).
- `llm-benchmark-charts.html` — Standalone Chart.js experiment visualizing LLM benchmark data. Self-contained; not linked from the main page yet.
- `res/` — Static assets.

## Getting Started Locally

1. Clone the repository and change into the project directory:
   ```bash
   git clone https://github.com/SteveLeve/steveleve.github.io.git
   cd steveleve.github.io
   ```
2. Start a local web server (Python example shown):
   ```bash
   python3 -m http.server 8081
   ```
3. Open http://localhost:8081 in a browser.

No build tooling, package installs, or external module dependencies are required. The theme is applied before first paint by an inline script in `index.html` to avoid a flash of the wrong color scheme.

## Updating Content

- Content lives directly in `index.html`. Each era follows the same pattern: a `.stripe` section introducing the period, followed by a `.grid-2` of `.card` articles telling individual stories. Copy an existing pair to add a new era or story.
- Visual changes go in `styles.css`; the CSS custom properties at the top define both light and dark palettes.
- Standalone experiments (like `llm-benchmark-charts.html`) can live as sibling pages and be linked in as they mature.
- Keep it vanilla — this repo intentionally avoids build tooling for simplicity on GitHub Pages.

## Deployment

Published through GitHub Pages. Pushes to the `main` branch are automatically served at https://steveleve.github.io. No CI/CD steps required.

## Roadmap

- Link in experiment pages and add writeups on harness engineering and agent memory.
- Consider breaking eras into their own pages as longer-form stories accumulate.

## Contributing

This is a personal site; changes are made directly by the site owner. Suggestions welcome via GitHub issues or the contact options at [stevenleve.com](https://stevenleve.com/contact/).


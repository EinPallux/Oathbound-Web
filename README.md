# Oathbound — Landing Page

The official announcement / "hype" landing page for **Oathbound**, an upcoming
3D fantasy MMORPG you play right in your browser. The game is currently in
development; this site exists to introduce the world and build community ahead
of the reveal.

It is a single-page, scroll-driven landing site — no accounts, no newsletter,
no wishlist, just the story, the world, and a way to follow along.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** global CSS + CSS Modules (dark + gold "heroic high fantasy" theme)
- **Fonts:** Fontin Sans (headings) + Calibri (body), self-hosted in `public/fonts/`
- **Icons:** Font Awesome rendered as inline SVG via the `@fortawesome` React
  packages (self-hosted — no CDN dependency)

The design system, fonts, gold "epic" buttons, glow dividers and imagery are
adapted from the sibling **BarrensCMS** project so the two sites share a
consistent, polished UI language. The site is fully self-contained with no
runtime CDN dependencies.

## Getting Started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
```

Deploy on Vercel by importing the repo — Next.js is auto-detected from the root.

## Page Structure

| Section | Anchor | Purpose |
|---|---|---|
| Hero | `#top` | Wordmark, tagline, "Now in Development" badge, community CTA |
| The Saga Begins | `#saga` | Announcement copy + heroes banner |
| The Realm | `#realm` | 3D-world / play-in-browser / oaths, plus a screenshot gallery |
| First Look | `#first-look` | "Reveal Trailer — Coming Soon" cinematic block |
| Will You Answer the Call? | `#community` | Final hype CTA |

## Project Structure

```
app/
  layout.tsx        # metadata + Font Awesome setup
  page.tsx          # the full landing page (content lives here)
  globals.css       # design system: fonts, palette, nav, footer, buttons, wordmark
  home.module.css   # per-section styles
  icon.svg          # heraldic favicon / nav crest
components/
  Navbar.tsx        # fixed nav with anchor links + community CTA
  Footer.tsx        # footer with links + social placeholders
  Wordmark.tsx      # the typographic "Oathbound" wordmark
public/
  fonts/  ui/  art/  world/  mounts/
```

## Before Launch — things to fill in

Search the codebase for `TODO` and these placeholders:

- **Community links** — Discord / X / YouTube etc. currently point to
  `#community`. Set the real URLs in `components/Navbar.tsx`,
  `components/Footer.tsx` and `app/page.tsx` (`COMMUNITY_URL`).
- **Production domain** — update `SITE_URL` in `app/layout.tsx` (used for SEO /
  Open Graph absolute URLs).
- **Reveal trailer** — the First Look section is a styled placeholder; wire it
  to the real trailer (e.g. a lightbox / embed) once available.
- **Logo art** — `components/Wordmark.tsx` is a pure-CSS wordmark; swap in real
  logo artwork later if desired.

## Note on imagery

All imagery is **pre-alpha / placeholder** and adapted from sibling-project
assets to dress the announcement. Replace with finished Oathbound art before any
public launch.

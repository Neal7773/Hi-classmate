# TODO — Hi Classmate

Last reviewed: 2026-09-04

Only implement these items after they are selected or confirmed in Chat, unless they are direct acceptance criteria of a newly delivered specification.

## P0 — Before relying on analytics

- [ ] Extend `analytics.js` and consistent funnel events to Classmate, Reaction Speed, Memory Challenge, Would You Rather, and How Pinoy.
- [ ] Standardize event names and parameters across all games; reconcile current `quiz_*` / `facebook_share_click` events with the SEO checklist's `game_*`, `share_game`, `share_result`, and `replay` vocabulary.
- [ ] Verify live GA4 receipt in Realtime/DebugView after the deployed pages are instrumented.

## P1 — Sharing consistency

- [ ] Add an always-visible pre-game “Share this game” action to the original Classmate quiz.
- [ ] Decide whether the original Classmate quiz should receive result-specific static pages/cards.
- [ ] Create result-specific social images for Videoke Persona and Barkada Role if Facebook testing confirms the shared main-game image is not compelling enough.
- [ ] Test representative game and result URLs with Facebook Sharing Debugger and refresh stale cached previews.

## P1 — Publishing and SEO operations

- [ ] Follow `SEO-PUBLISHING-CHECKLIST.md` for every new game and update Homepage New Games, category links, homepage ItemList data, and `sitemap.xml` in the same change.
- [ ] Confirm Google Search Console ownership/indexing and request indexing for main game pages where needed.
- [ ] Use GA4 completed-play and share data to replace manually curated Trending order once enough reliable data exists.

## P2 — Quality and maintainability

- [ ] Introduce a small automated smoke test for all public routes, required metadata, internal links, and JavaScript syntax.
- [ ] Evaluate moving repeated personality-game rendering/scoring/share logic into a common engine plus per-game data files without changing current URLs or behavior.
- [ ] Perform representative mobile and Facebook in-app-browser testing for each new interaction pattern.

## Pending external confirmation

- [ ] Confirm current AdSense approval state before enabling any advertising code or space.
- [ ] Confirm Cloudflare production deployment health when deployment behavior changes; repository history indicates automatic deployment, but external settings are not versioned here.

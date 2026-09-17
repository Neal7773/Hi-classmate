# TODO — Hi Classmate

Last reviewed: 2026-09-17

Only implement these items after they are selected or confirmed in Chat, unless they are direct acceptance criteria of a newly delivered specification.

## The River Within release

- [x] Implement six story choices, six answer-grounded reveals and four portraits.
- [x] Add original artwork, keepsake download, four share pages/cards, homepage and sitemap.
- [x] Complete exhaustive logic and browser verification, including the downloadable keepsake.
- [x] Publish via the existing GitHub/Cloudflare flow and verify production: 18 route/content checks passed.
- [ ] Confirm actual Facebook cache/in-app behavior and live GA4 receipt.

## Future content direction

- [x] Record the user's content-only reference clarification: future game UI and Facebook game/result previews use the established pre-Poomang Hi Classmate style. Leave existing games unchanged.

- [ ] Consider original universal personality tests inspired by the formats discussed on Poomang: animals, colors, everyday objects and character portraits. Exclude Korean-specific holiday/regional concepts. Select the next specific game in Chat before implementing it.

## Would You Date Yourself release

- [x] Implement 8 questions, exact answer-derived profile, explicit date/pass reveal, comparison evidence, sharing and GA4.
- [x] Add main artwork, six result cards/pages and homepage/sitemap discovery.
- [x] Pass exhaustive logic, mobile/desktop and existing-game checks; fix evidence/replay scroll restoration.
- [x] Publish to the established GitHub/Cloudflare destination and verify production: all 21 route/content checks passed.
- [ ] Confirm Facebook cache/in-app behavior and live GA4 receipt.

## Toxic Dating Habit release

- [x] Implement 8 questions, 6 habits, deterministic type match, fixed mobile zones, back/replay, GA4 and sharing.
- [x] Add unique main art, six result cards/pages, homepage discovery and sitemap.
- [x] Pass exhaustive scoring and browser/regression checks.
- [x] Publish via the authorized existing GitHub/Cloudflare flow and verify production: all 21 route/content checks passed.
- [ ] Confirm actual Facebook previews/in-app behavior and live GA4 receipt.

## Villain Era release

- [x] Implement the selected 8-question/6-result quiz with fixed answer zones, back/replay, deterministic scoring and type match.
- [x] Add main artwork, six result-specific cards/pages, GA4 and homepage/sitemap discovery.
- [x] Finish browser, scoring, keyboard, sharing and existing-game regression checks.
- [x] Obtain explicit approval for publishing the game and documents to public `Neal7773/Hi-classmate` `main` and the existing Cloudflare production site.
- [x] Complete GitHub authentication, push verified commits to `main`, and verify production: 21 route/content checks passed on 2026-09-15.
- [ ] Verify Facebook preview caches and live GA4 receipt for the new route.

## AdSense application next steps

- [x] Confirm Publisher ID `ca-pub-5544502803818999` and publish the exact Google ownership meta tag across all main/search-visible pages.
- [x] Publish the exact Google-authorized seller line at `/ads.txt` and verify the live plain-text response.
- [ ] In AdSense, check “HTML `<meta>` tag를 삽입했습니다” and click **확인**.
- [ ] After ownership verification succeeds, submit `hiclassmate.com` for site review.
- [ ] After AdSense approval, separately plan and implement actual ad placement; do not enable Auto Ads or ad units as part of ownership verification.
- [ ] Before serving ads where required, configure and publish the appropriate AdSense Privacy & messaging flow, including a Google-certified CMP for EEA, UK, and Switzerland traffic.

## P2 — Analytics follow-up

- [ ] Extend `analytics.js` and consistent funnel events to Reaction Speed, Memory Challenge, Would You Rather, and How Pinoy.
- [ ] Standardize event names and parameters across all games; reconcile current `quiz_*` / `facebook_share_click` events with the SEO checklist's `game_*`, `share_game`, `share_result`, and `replay` vocabulary.
- [ ] Verify live GA4 receipt in Realtime/DebugView after the deployed pages are instrumented.

## P1 — Sharing consistency

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
- [ ] Enable Cloudflare “Always Use HTTPS” so `http://hiclassmate.com/` redirects to the canonical HTTPS origin.
- [ ] Add and redirect `www.hiclassmate.com` only if the `www` hostname will be used or promoted; the current canonical host is non-www.
- [ ] Consider `Can You Survive a Filipino School Day?` as the next game candidate; do not implement until selected in Chat.

## Pending external confirmation

- [ ] Confirm AdSense ownership verification, review submission, and eventual approval status before enabling any advertising code or space.
- [ ] After CMP setup, verify that users can manage or revoke consent where required.
- [ ] Confirm Cloudflare production deployment health when deployment behavior changes; repository history indicates automatic deployment, but external settings are not versioned here.

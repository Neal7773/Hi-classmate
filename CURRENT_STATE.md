# CURRENT STATE — Hi Classmate

Snapshot date: 2026-09-15
Latest local implementation: Villain Era, commit `113cbc9` (2026-09-15). All local checks passed. The user explicitly approved publishing source and documents to public `Neal7773/Hi-classmate` `main` and the existing Cloudflare production site. Publication now awaits GitHub authentication on this PC; production verification is pending. Previous production implementation: `104edf0`; previous state commit: `1c20fb0`. AdSense remains ownership verification only.

## Production and architecture

- Production domain: `https://hiclassmate.com/`.
- Git remote: `https://github.com/Neal7773/Hi-classmate.git`.
- Static site with no dependency installation or build step.
- `wrangler.jsonc` publishes the project root as static assets.
- Git working tree was clean before this documentation initialization.
- Work completion protocol now requires synchronized state files followed by a self-contained `[CHAT_HANDOFF]` for the existing Chat thread.

## Implemented site areas

- Homepage with Barkada Role as Featured, three manually curated Trending cards, reverse-chronological New Games, two mood categories, SEO copy, canonical/Open Graph metadata, and WebSite/ItemList structured data.
- Trust pages: About, Contact, Privacy, and Terms.
- Search files: `robots.txt` and `sitemap.xml`, covering the homepage, twenty game/quiz routes, and four trust pages.
- Shared GA4 loader in `analytics.js`; it detects referral/UTM/Facebook traffic and adds `quiz_id` plus `traffic_source` to tracked events.
- Shared footer links and shared pre-game share-button styling for games.

## Current games

| Route | Type | Current behavior |
|---|---|---|
| `/quiz/classmate/` | Personality quiz | 8 questions, 6 classmate results, answer-weighted scoring, always-visible game sharing, result sharing, and restart. Data is in `QUIZ_DATA`. |
| `/games/reaction-speed/` | Skill game | 5 timed rounds, average/fastest/round scores, 5 descriptive result bands, game and result sharing, restart. |
| `/games/memory-challenge/` | Skill game | 6 visual-memory rounds, score/accuracy/answer speed, 4 result bands, game and result sharing, restart. |
| `/games/would-you-rather/` | Personality choice game | 10 two-choice questions, 8 results with playful comparisons, game sharing, result-specific sharing routes/cards, restart. |
| `/games/how-pinoy-are-you/` | Filipino personality quiz | 10 two-choice questions, 8 Pinoy results and comparisons, game sharing, result-specific sharing routes/cards, restart. |
| `/games/videoke-persona/` | Filipino personality quiz | 8 two-choice questions, 8 videoke personas, game/result sharing, restart, GA4 funnel events. |
| `/games/barkada-role/` | Filipino personality quiz | 8 two-choice questions, 8 barkada roles, game/result sharing, restart, GA4 funnel events. |
| `/games/pinoy-merienda/` | Filipino personality quiz | 8 two-choice questions, 8 merienda personalities, game/result sharing, restart, standardized GA4 funnel events. |
| `/games/pinoy-emoji-challenge/` | Filipino knowledge game | 10 three-choice emoji clues, accuracy and completion time, 5 result ranks with playful top-percent comparisons, game/result sharing, restart, standardized GA4 events. |
| `/games/hidden-love-language/` | Filipino relationship-style personality quiz | 8 two-choice kilig/chat/date situations, 8 playful caring styles, explicit entertainment disclaimer, game/result sharing, restart, standardized GA4 events. |
| `/games/how-delulu-are-you/` | Filipino crush/SNS personality test | 8 two-choice situations, 6 delulu ranks, playful comparison percentages, explicit entertainment disclaimer, game/result sharing, restart, standardized GA4 events. |
| `/games/pinoy-commute-persona/` | Filipino daily-life personality quiz | 8 two-choice jeepney, train, rain, and barkada commute situations; 8 playful personas, comparison percentages, game/result sharing, restart, standardized GA4 events, and fixed mobile question/answer zones. |
| `/games/family-gc-role/` | Filipino family-chat personality quiz | 8 two-choice family GC situations, 8 playful roles, comparison percentages, game/result sharing, GA4, and fixed mobile question/answer zones. |
| `/games/pinoy-rainy-day-persona/` | Filipino rainy-day personality quiz | 8 two-choice rain, baha, commute, and brownout situations with 8 playful personas, comparison results, sharing, GA4, and fixed mobile zones. |
| `/games/pinoy-fiesta-persona/` | Filipino fiesta personality quiz | 8 two-choice food, videoke, palaro, photo, hosting, and takeout situations with 8 playful personas, comparison results, sharing, GA4, and fixed mobile zones. |
| `/games/how-marites-are-you/` | Filipino chika personality quiz | 8 two-choice secret, screenshot, verification, and group-chat situations with 8 playful levels, comparison results, sharing, GA4, and fixed mobile zones. |
| `/games/what-kind-of-overthinker/` | Relatable psychological-style personality test | 10 two-choice chat, waiting, memory, planning, and late-night-thought situations with 11 distinct types, comparisons, sharing, GA4, and fixed mobile zones. |
| `/games/selos-level/` | Filipino relationship score/personality test | 10 two-choice relationship and social-media situations produce an exact 0–100% selos score and 8 playful types, with sharing, GA4, SEO, and fixed mobile zones. |
| `/games/red-flag-green-flag/` | Filipino dating-radar judgment game | 10 fast Red/Green judgments produce a 0–100 radar score and 4 shareable levels, with pre-game/result sharing, restart, Classmate cross-links, GA4 comparison events, SEO, and fixed mobile zones. |

| `/games/villain-era/` | Filipino social personality quiz | 8 four-choice questions, 6 villain-era types, deterministic normalized type match, trigger/excuse/way-back detail, fixed mobile answer zone, back/replay, GA4, and six dedicated result-share cards/pages. |

## Important files

- `index.html`: homepage content, homepage metadata, and structured data.
- `home.css`, `home-live.css`, `home-sections.css`: homepage visual system and responsive sections.
- `analytics.js`: shared GA4 loader for pages that include it.
- `quiz/classmate/`: original personality quiz and its data/scoring engine.
- `games/<slug>/`: each standalone game, normally containing its page, styles, logic/data, and social artwork.
- `games/<slug>/results/`: static share-result landing pages where supported.
- `games/share-buttons.css`: reusable styling for visible pre-game Facebook share controls.
- `SEO-PUBLISHING-CHECKLIST.md`: mandatory publishing/SEO checklist for new games.
- `sitemap.xml`, `robots.txt`: crawl discovery and crawler policy.
- `README.md`: original setup and architecture notes; parts of its game/result count are now outdated.

## Sharing and SEO state

- Games under `/games/` expose a pre-game Facebook share action and a post-game result share action.
- The result-enabled games now have 128 static result pages in total.
- All 128 result pages currently have `noindex,follow` and a canonical link to their main game.
- The new thumbnail direction uses a large question, visible answer choices, and a play CTA so social cards read as interactive games; characters are optional.
- How Pinoy and Would You Rather include unique result image files. Videoke and Barkada result pages currently use their main game image while varying title/description.
- The homepage Trending images are forced to their original horizontal aspect ratio; mobile uses one card per row.

## Analytics state

- Measurement ID: `G-77QM94C66P`.
- Loader present on homepage, Videoke Persona, Barkada Role, Pinoy Merienda, Pinoy Emoji Challenge, Hidden Love Language, and How Delulu Are You.
- Videoke and Barkada track start, answers, completion, result view, Facebook share clicks, and retry; Videoke also tracks return/home navigation.
- Pinoy Merienda uses the standardized `game_start`, `question_answer`, `game_complete`, `result_view`, `share_game`, `share_result`, and `replay` events.
- Pinoy Emoji Challenge uses the same standardized events and additionally records correctness, score, time, result rank, and playful top-percent values.
- Hidden Love Language uses the standardized events and records the resulting care style and playful comparison percentage.
- How Delulu Are You uses the standardized events and records answer points, total score, result rank, and playful comparison percentage.
- Pinoy Commute Persona uses the standardized events and records answer type, result persona, and playful comparison percentage.
- The original Classmate quiz now loads the shared GA4 script and tracks its start, answers, completion, result view, result share, replay, and next-game click using both legacy comparison events and standardized game events where applicable.
- Reaction Speed, Memory Challenge, Would You Rather, and How Pinoy do not currently load the shared GA4 script.

## AdSense ownership state

- Verified Publisher ID: `ca-pub-5544502803818999`.
- The Google-provided ownership tag is present exactly once inside `<head>` on all 25 main/search-visible pages: the homepage, all 20 game routes, and About, Contact, Privacy, and Terms.
- Root `ads.txt` is published at `https://hiclassmate.com/ads.txt` with the exact authorized seller line `google.com, pub-5544502803818999, DIRECT, f08c47fec0942fa0`.
- No AdSense ad-unit, Auto Ads, `adsbygoogle`, or `pagead2.googlesyndication.com` loading code is enabled. This release verifies site ownership only and does not serve ads.

## Deployment status — 2026-09-15

- Remote `main` was read and confirmed at `1c20fb0aadc4db89c5e15773614961635157b586` before attempted publication.
- Automatic approval review rejected pushing `113cbc9` to the public `Neal7773/Hi-classmate` `main` branch. Its stated concern was lack of explicit current authorization for that exact destination, exposure of source/internal documentation and triggering production deployment.
- No push occurred and the new route must not be described as live. Local implementation and verification are complete.
- The user subsequently explicitly approved that exact repository, branch, document publication and production destination. This resolves the approval prerequisite.
- The authorized retry waited in Git Credential Manager. A noninteractive retry with the prior DPAPI store failed because no usable GitHub credential was available (`could not read Username`; prompting disabled). GitHub authentication is now the blocker. No successful push has occurred.

## Villain Era continuation — 2026-09-15

- Work continues from `1c20fb0` in this task’s `outputs/classmate-quiz` copy; original laptop-transfer files are preserved. The copied Git remote points to the established `Neal7773/Hi-classmate` repository.
- `games/villain-era/data.js` contains content, `engine.js` handles scoring, and `app.js` handles display, navigation, Facebook sharing and analytics. No existing game engine or styling was changed.
- Six results: The Applause Addict, The Beautiful Revenge, The Puppet Master, The Untouchable, The Main Character, The Fallen Angel.
- Match is earned points divided by the maximum available for that type; it is not a population percentile. Equal normalized scores use the latest relevant answer, then stable content order.
- Homepage New Games, Personality category and 20-item ItemList include the game. Featured and curated Trending remain unchanged. Sitemap contains 25 main pages; result-share pages remain excluded.
- New main page has the existing AdSense ownership tag and GA4 ID. New game records `game_view`, `game_start`, `question_answer`, `game_complete`, `result_view`, `share_game`, `share_result`, `replay` and next-game navigation with `game_id`/`quiz_id` = `villain_era`.
- The main 1200 × 630 social image uses built-in ImageGen; six dedicated result cards use deterministic typography/layout.
- New static result pages have unique image/title/description, `noindex,follow`, and canonical links to the main game.
- Markdown state/history files are excluded from Cloudflare static assets.
- Actual Facebook in-app-browser behavior, Facebook cache previews and live GA4 receipt remain external checks.

## Verification status

- 2026-09-15: Villain Era passed all 65,536 answer combinations, including 3,346 tied combinations and reachability of all six results. All 24 JavaScript files passed syntax checks; 153 HTML files passed internal-reference and JSON-LD parsing checks; all 128 result pages passed noindex/main-game-canonical checks; the homepage has 20 unique sequential entries and 25 sitemap routes returned local HTTP 200 with ownership tags. Seven social cards are 1200 × 630. Chrome at 390 × 844, 360 × 740 and 1365 × 900 passed all six result paths, expected match scores, fixed answer positions, no horizontal overflow, result visibility, back navigation and replay, with zero page errors. Additional checks passed keyboard operation, rapid double-click protection, isolated Facebook popup and canonical share URL, homepage entry, and the original Classmate complete/replay flow. Facebook in-app-browser/cache previews and GA4 server receipt were not directly tested.

- 2026-09-03: all 10 JavaScript files passed syntax checking.
- 2026-09-03: all 40 static result pages passed the `noindex,follow` and canonical metadata check.
- 2026-09-03: Pinoy Merienda's 14 representative local routes/assets returned HTTP 200, its JavaScript passed syntax checking, all 8 result routes passed metadata checks, and its required game/share/analytics metadata was present. Its optimized social image is 1200 × 630.
- 2026-09-03: production verification returned HTTP 200 for `/games/pinoy-merienda/`; the live page contains the correct title and GA4 loader, and the live homepage links to the new game.
- 2026-09-04: all 11 JavaScript files passed syntax checking; Pinoy Emoji Challenge data contains 10 valid three-choice clues and 5 ordered result bands.
- 2026-09-04: 11 representative Pinoy Emoji routes/assets returned local HTTP 200; all 45 result pages passed `noindex,follow` and canonical checks; required game/share/analytics metadata and homepage JSON-LD passed validation; the optimized social image is 1200 × 630.
- 2026-09-04: production verification returned HTTP 200 for `/games/pinoy-emoji-challenge/`; the live page contains the expected game title and GA4 loader, and the live homepage links to it.
- 2026-09-04: all 12 JavaScript files passed syntax checking; Hidden Love Language contains 8 valid two-choice questions and 8 result styles.
- 2026-09-04: 14 representative Hidden Love Language routes/assets returned local HTTP 200; all 53 result pages passed `noindex,follow` and canonical checks; its share controls, disclaimer, GA4 loader, homepage links, ten-item JSON-LD list, and 1200 × 630 social image passed validation.
- 2026-09-04: production verification returned HTTP 200 for `/games/hidden-love-language/`; the live page contains the expected title and GA4 loader, and the live homepage links to the game.
- 2026-09-06: all 13 JavaScript files passed syntax checking; How Delulu Are You contains 8 valid two-choice questions, a complete 0–16 scoring range, and 6 ordered result ranks.
- 2026-09-06: 12 representative How Delulu Are You routes/assets returned local HTTP 200; all 59 result pages passed `noindex,follow` and canonical checks; share controls, disclaimer, GA4 loader, homepage links, eleven-item JSON-LD, and the 1200 × 630 interactive-style social image passed validation.
- 2026-09-06: production verification returned HTTP 200 for `/games/how-delulu-are-you/`; the live page contains the expected title and GA4 loader, and the live homepage links to the game.
- 2026-09-06: How Delulu Are You was locally updated to use a larger active question, answer controls capped near half the viewport, a prominent percentage score block, shorter descriptions and keyword chips, and no footer disclaimer inside the interactive result card. All 13 JavaScript files passed syntax checking, the local route returned HTTP 200, and layout/content markers plus `git diff --check` passed.
- 2026-09-06: production verification returned HTTP 200 and confirmed the new result score block, removed result-card disclaimer, and updated half-viewport answer styling on the live How Delulu Are You page.
- 2026-09-06: real-device screenshot review showed the half-viewport answer area remained oversized. The question state now has an explicit body state, a content-sized game card, and a combined answer area capped around 28svh. All 13 JavaScript files passed syntax checking; state/CSS markers, local HTTP 200, and `git diff --check` passed.
- 2026-09-06: production verification returned HTTP 200 and confirmed the content-sized question card, 28svh answer-area cap, and explicit question state on the live assets.
- 2026-09-06: follow-up device review requested the original game-card size. The full viewport-height card was restored while the 28svh answer area remained; mobile question text now scales to 44px and answer text to 22px at heavy weight. All 13 JavaScript files passed syntax checking; required CSS markers, local HTTP 200, and `git diff --check` passed.
- 2026-09-06: production verification returned HTTP 200 and confirmed the restored full-height game card, 44px mobile question maximum, 22px mobile answer maximum, and retained 28svh answer-area limit on the live stylesheet.
- 2026-09-06: How Delulu Are You now divides its question card into a flexible upper question zone and a fixed 28svh lower answer zone. Question copy is vertically centered in the upper zone, so all questions keep the answer buttons at the same vertical position regardless of text length.
- 2026-09-06: the fixed-zone update passed syntax checks for all 13 JavaScript files, required HTML/CSS layout-marker checks, local HTTP 200, and `git diff --check`.
- 2026-09-06: production verification returned HTTP 200 for the How Delulu page and stylesheet and confirmed the live `question-copy` wrapper plus fixed mobile answer-row rule after commit `27e7ce0` deployed.
- 2026-09-07: Pinoy Commute Persona passed syntax checks for all 14 JavaScript files, metadata checks across all 67 static result pages, homepage ItemList validation with 12 games, sitemap XML parsing, representative local game/result HTTP 200 checks, and `git diff --check`. Its inspected social image is 1200 × 630 and visibly presents the question, two choices, and quiz CTA.
- 2026-09-07: production verification returned HTTP 200 for Pinoy Commute Persona, the homepage, Barkada Ride Captain result route, and the 1200 × 630 social image. The live game includes the GA4 loader and the homepage links to the new route.
- 2026-09-07: Pinoy Rainy-Day Persona passed 16 JavaScript syntax checks and metadata checks across 83 result pages. Production returned HTTP 200, loaded GA4, and the live homepage linked to the game.
- 2026-09-08: Pinoy Fiesta Persona passed 17 JavaScript syntax checks and metadata checks across 91 result pages. Production returned HTTP 200, loaded GA4, and the live homepage linked to the game.
- 2026-09-08: How Marites Are You passed 18 JavaScript syntax checks and metadata checks across 99 result pages. Production returned HTTP 200, loaded GA4, and the live homepage linked to the game.
- 2026-09-08: the AdSense-ready Privacy Policy passed required-content, no-live-ad-code, official-link, and diff checks. Production returned HTTP 200 and exposed the new advertising and regional consent sections.
- 2026-09-08: What Kind of Overthinker Are You passed 19 JavaScript syntax checks, logic markers for 10 questions and 11 outcomes, and metadata checks across 110 result pages. Production returned HTTP 200 for the game and representative result, loaded GA4, and the homepage linked to it.
- 2026-09-08: What’s Your Selos Level passed 20 JavaScript syntax checks, logic markers for 10 questions and 8 reachable result bands, metadata checks across all 118 result pages, sequential 18-item homepage structured data, sitemap XML parsing, unwanted-disclaimer checks, and `git diff --check`. The 1200 × 630 social image and representative local game, asset, result, and homepage routes returned HTTP 200.
- 2026-09-08: production verification returned HTTP 200 for Selos Level, its Silent Observer result page, the 1200 × 630 social image, and the homepage. The live game title and homepage discovery link were confirmed after release `03498b8` deployed.
- 2026-09-12: Red Flag or Green Flag passed scoring tests for perfect, opposite, all-Red, all-Green, and every 0–10 threshold; all 21 JavaScript files passed syntax checks; all 122 result pages passed metadata checks; the homepage ItemList contained 19 sequential games; the required legacy and standardized GA4 event markers were present; and `git diff --check` passed.
- 2026-09-12: Chrome testing passed at desktop and emulated 390 × 844 mobile sizes. The mobile page had no horizontal overflow, kept the question and fixed Red/Green buttons within one viewport, completed all ten choices to the expected 100% result, restarted successfully, and opened the original Classmate quiz, whose first question and reverse cross-link also worked. A real Facebook in-app-browser session was not directly available.
- 2026-09-12: production verification returned HTTP 200 for Red Flag or Green Flag, its Mixed Signals result route, the 1200 × 630 social image, the homepage, and the original Classmate quiz. Live homepage discovery and bidirectional Classmate linkage were confirmed after release `b537e07` deployed.
- 2026-09-12: Red Flag or Green Flag passed 21 JavaScript syntax checks, all 0–10 scoring thresholds, perfect/opposite/all-Red/all-Green paths, metadata checks across all 122 result pages, sequential 19-item homepage structured data, sitemap XML parsing, analytics marker checks, and `git diff --check`. Chrome checks at 1365 × 900 and emulated 390 × 844 confirmed no horizontal overflow, a fixed question/answer layout, the 100% result path, replay, direct entry, and the Classmate cross-link/first-question regression. Its social image is 1200 × 630.
- 2026-09-13: AdSense application preflight completed against the repository and production. All 24 sitemap URLs (homepage, 19 games, and four trust pages) returned HTTP 200. A broader production crawl checked 226 page and asset URLs with zero failures after deployment. HTTPS, canonical URLs, robots.txt, sitemap XML, all 21 JavaScript files, homepage WebSite/19-item ItemList data, 146 local HTML files, and all 122 result-page `noindex,follow`/main-game canonical pairs passed.
- 2026-09-13: two P1 broken social/content image references were fixed on How Marites Are You and What Kind of Overthinker Are You. Their titles, structured data, question/result counts, and supporting copy were also corrected where they did not match the actual games. The original Classmate quiz now has an always-visible pre-game Facebook share action and consistent Hi Classmate branding.
- 2026-09-13: browser checks passed at 390 × 844 and 360 × 740. Complete start/play/result/replay flows were exercised for Classmate, Red Flag or Green Flag, How Marites, Overthinker, Delulu, Reaction Speed, and Memory Challenge; no horizontal overflow or captured console errors were found. Actual Facebook in-app-browser and Facebook Sharing Debugger tests remain external.
- 2026-09-13: during the application preflight, no live AdSense code, publisher ID, enabled ad container, or ad-click encouragement was found. The original hidden placeholders remain `display:none` unless the unused `ads-enabled` class is deliberately added; at that preflight snapshot, `ads.txt` was absent because no verified Publisher ID had yet been supplied.
- 2026-09-13: Publisher ID `ca-pub-5544502803818999` was subsequently confirmed. Release `104edf0` added the exact ownership meta tag to all 24 main/search-visible pages and published the exact authorized seller line in root `ads.txt` without enabling any ad-serving code.
- 2026-09-13: production verification checked all 24 tagged routes: all returned HTTP 200, contained exactly one ownership tag inside `<head>`, and retained canonical metadata. The homepage and representative game pages retained Open Graph, GA4, and valid structured data where previously present. Production `ads.txt` returned HTTP 200 as `text/plain` with the exact authorized line. Local regression checks passed all 21 JavaScript syntax checks, 146 HTML internal-reference checks, and both homepage JSON-LD blocks.
- 2026-09-07: Family GC Role passed all 15 JavaScript syntax checks, metadata checks across 75 result pages, homepage and sitemap checks, and production verification for the live game plus homepage link.
- Previous work verified key local pages and homepage markup before deployment.
- No automated browser/end-to-end test suite exists.
- The local server was not running during this snapshot, so full route HTTP checks were not repeated on 2026-09-03.

## Known issues and inconsistencies

- GA4 coverage is incomplete across the game catalog, and event names do not yet fully match the newer checklist vocabulary.
- The original Classmate quiz now links to Red Flag or Green Flag and offers pre-game sharing, but it still does not have result-specific static share pages.
- Videoke and Barkada result pages do not yet have unique result-specific images.
- README's game catalog is updated through Pinoy Merienda; its introductory focus remains the original Classmate quiz.
- Trending is editorially curated because sufficient comparative GA4 data has not been confirmed.
- Live Search Console indexing status, AdSense approval status, live GA4 receipt, and Facebook cache state are external and were not confirmed from repository files.
- The Privacy Policy is prepared for AdSense advertising cookies, but live AdSense code remains disabled. A Google-certified CMP/privacy message must still be configured where required before serving personalized ads in the EEA, UK, or Switzerland.
- `http://hiclassmate.com/` currently returns the site with HTTP 200 instead of redirecting to HTTPS. All canonical, Open Graph, sitemap, and internal URLs use HTTPS, so this is a non-blocking hardening item rather than an AdSense application blocker.
- The `www.hiclassmate.com` hostname currently has no DNS record. The site consistently uses the non-www canonical host, so this is not an AdSense application blocker; add and redirect `www` only if that hostname will be promoted.

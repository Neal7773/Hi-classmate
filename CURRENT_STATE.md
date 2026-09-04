# CURRENT STATE — Hi Classmate

Snapshot date: 2026-09-04  
Latest implemented release: `b32147d` on `main`; Hidden Love Language is published through the GitHub/Cloudflare deployment flow.

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
- Search files: `robots.txt` and `sitemap.xml`, covering the homepage, ten main games, and four trust pages.
- Shared GA4 loader in `analytics.js`; it detects referral/UTM/Facebook traffic and adds `quiz_id` plus `traffic_source` to tracked events.
- Shared footer links and shared pre-game share-button styling for games.

## Current games

| Route | Type | Current behavior |
|---|---|---|
| `/quiz/classmate/` | Personality quiz | 8 questions, 6 classmate results, answer-weighted scoring, result sharing, restart. Data is in `QUIZ_DATA`. |
| `/games/reaction-speed/` | Skill game | 5 timed rounds, average/fastest/round scores, 5 descriptive result bands, game and result sharing, restart. |
| `/games/memory-challenge/` | Skill game | 6 visual-memory rounds, score/accuracy/answer speed, 4 result bands, game and result sharing, restart. |
| `/games/would-you-rather/` | Personality choice game | 10 two-choice questions, 8 results with playful comparisons, game sharing, result-specific sharing routes/cards, restart. |
| `/games/how-pinoy-are-you/` | Filipino personality quiz | 10 two-choice questions, 8 Pinoy results and comparisons, game sharing, result-specific sharing routes/cards, restart. |
| `/games/videoke-persona/` | Filipino personality quiz | 8 two-choice questions, 8 videoke personas, game/result sharing, restart, GA4 funnel events. |
| `/games/barkada-role/` | Filipino personality quiz | 8 two-choice questions, 8 barkada roles, game/result sharing, restart, GA4 funnel events. |
| `/games/pinoy-merienda/` | Filipino personality quiz | 8 two-choice questions, 8 merienda personalities, game/result sharing, restart, standardized GA4 funnel events. |
| `/games/pinoy-emoji-challenge/` | Filipino knowledge game | 10 three-choice emoji clues, accuracy and completion time, 5 result ranks with playful top-percent comparisons, game/result sharing, restart, standardized GA4 events. |
| `/games/hidden-love-language/` | Filipino relationship-style personality quiz | 8 two-choice kilig/chat/date situations, 8 playful caring styles, explicit entertainment disclaimer, game/result sharing, restart, standardized GA4 events. |

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
- Would You Rather, How Pinoy, Videoke Persona, Barkada Role, Pinoy Merienda, Pinoy Emoji Challenge, and Hidden Love Language have 53 static result pages in total.
- All 53 result pages currently have `noindex,follow` and a canonical link to their main game.
- How Pinoy and Would You Rather include unique result image files. Videoke and Barkada result pages currently use their main game image while varying title/description.
- The homepage Trending images are forced to their original horizontal aspect ratio; mobile uses one card per row.

## Analytics state

- Measurement ID: `G-77QM94C66P`.
- Loader present on homepage, Videoke Persona, Barkada Role, Pinoy Merienda, Pinoy Emoji Challenge, and Hidden Love Language.
- Videoke and Barkada track start, answers, completion, result view, Facebook share clicks, and retry; Videoke also tracks return/home navigation.
- Pinoy Merienda uses the standardized `game_start`, `question_answer`, `game_complete`, `result_view`, `share_game`, `share_result`, and `replay` events.
- Pinoy Emoji Challenge uses the same standardized events and additionally records correctness, score, time, result rank, and playful top-percent values.
- Hidden Love Language uses the standardized events and records the resulting care style and playful comparison percentage.
- Classmate, Reaction Speed, Memory Challenge, Would You Rather, and How Pinoy do not currently load the shared GA4 script.

## Verification status

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
- Previous work verified key local pages and homepage markup before deployment.
- No automated browser/end-to-end test suite exists.
- The local server was not running during this snapshot, so full route HTTP checks were not repeated on 2026-09-03.

## Known issues and inconsistencies

- GA4 coverage is incomplete across the game catalog, and event names do not yet fully match the newer checklist vocabulary.
- The original Classmate quiz does not offer pre-game sharing and does not have result-specific static share pages.
- Videoke and Barkada result pages do not yet have unique result-specific images.
- README's game catalog is updated through Pinoy Merienda; its introductory focus remains the original Classmate quiz.
- Trending is editorially curated because sufficient comparative GA4 data has not been confirmed.
- Live Search Console indexing status, AdSense approval status, live GA4 receipt, and Facebook cache state are external and were not confirmed from repository files.

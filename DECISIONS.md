# DECISIONS — Hi Classmate

Last reviewed: 2026-09-03

Statuses: **Implemented**, **Partial**, **Superseded**, or **Decision only**.

| Date | Decision | Status | History / notes |
|---|---|---|---|
| 2026-08-30 | Build a mobile-first viral entertainment site for Filipino teens and young adults, using Facebook as an initial acquisition and sharing loop. | Implemented | Core direction remains active. |
| 2026-08-30 | Use static HTML/CSS/JavaScript with content data separated from quiz/game logic where practical. | Implemented | No build step. Separation is per-game rather than a shared engine. |
| 2026-08-30 | Host at `hiclassmate.com` with GitHub `Neal7773/Hi-classmate` and Cloudflare automatic deployment. | Implemented | External Cloudflare settings are not stored in the repository. |
| 2026-08-30 | Hide advertising placeholders until AdSense approval; do not show “advertisement” space to users. | Implemented | Hidden placeholder CSS remains in the original classmate quiz; no live AdSense code found. |
| 2026-08-30 | Add About, Contact, Privacy, and Terms pages for trust and future monetization readiness. | Implemented | Linked from the site footer. |
| 2026-08-31 | Remove the photo-guessing game because the graphics and gameplay were not engaging; replace it with a compact classroom-choice game. | Superseded | The replacement became Would You Rather; no Guess the Photo route remains. |
| 2026-08-31 | Keep choice games within one interactive viewport and avoid vertically expanding answer flows. | Implemented | Applied to Would You Rather and later personality games. |
| 2026-08-31 | Make personality results fun, varied, and socially comparable using result types and playful percentile-style wording. | Implemented | Percentages are explicitly disclosed as non-population estimates. |
| 2026-08-31 | Provide an always-available pre-game Facebook share action, and make the post-game action share the player's result. | Partial | Implemented across games under `/games/`; the original `/quiz/classmate/` still lacks pre-game sharing and result-specific static share pages. |
| 2026-08-31 | Prefer result-first Facebook cards where the result is the main visual/message. | Partial | Would You Rather and How Pinoy use result-specific image assets; Videoke and Barkada result routes currently reference the main game artwork. |
| 2026-09-01 | Add GA4 using measurement ID `G-77QM94C66P` and track the Facebook quiz funnel. | Partial | Shared loader is active on the homepage, Videoke Persona, and Barkada Role. Other games are not yet instrumented. |
| 2026-09-02 | Prioritize Filipino-specific game concepts, situations, humor, and language rather than generic games. | Implemented | How Pinoy, Videoke Persona, and Barkada Role establish the current direction. |
| 2026-09-02 | Organize the homepage as Featured, Trending, New Games, and category/mood discovery. | Implemented | Featured is Barkada Role; Trending is manually curated pending enough GA4 data. |
| 2026-09-02 | Treat SEO as part of every new-game publishing workflow. Result variants use `noindex,follow` and canonicalize to the main game. | Implemented | Detailed rules are in `SEO-PUBLISHING-CHECKLIST.md`; all 32 current static result pages follow this policy. |
| 2026-09-03 | Use this Work thread for implementation/testing and the four root state files as the official Chat↔Work handoff record. | Implemented | State system initialized; future work must synchronize it after changes. |
| 2026-09-03 | After every completed implementation, synchronize the state files and automatically finish with a paste-ready `[CHAT_HANDOFF]`. | Implemented | The handoff must cover actual changes, tests, current state, remaining TODO, and next Chat decisions. |
| 2026-09-03 | Add “What’s Your Pinoy Merienda?” as the next Filipino-first, highly shareable personality game. | Implemented | Eight questions map to eight iconic merienda personalities; it includes pre-game sharing, result sharing, GA4, SEO, homepage discovery, and static result routes. |
| 2026-09-04 | Add “Pinoy Emoji Challenge” as a different, competitive game format. | Implemented | Ten three-choice Filipino emoji clues produce an accuracy score, completion time, five playful ranks, and a top-percent comparison; sharing, GA4, SEO, homepage discovery, and static result routes are included. |
| 2026-09-04 | Test a light psychological-style format with “What’s Your Hidden Love Language?” for Filipino teens and young adults. | Implemented | Eight kilig/chat/date choices map to eight playful caring styles; the game explicitly states it is entertainment rather than a psychological or relationship assessment. |
| 2026-09-06 | Make new game thumbnails look unmistakably interactive using a large question, visible choices, and a strong play CTA; characters remain optional. | Implemented | First applied to “How Delulu Are You?” with Real Talk/Delulu Mode choices and a Play Now button in its social card. |
| 2026-09-06 | Add “How Delulu Are You?” as a playful Filipino crush and social-media test. | Implemented | Eight binary situations produce six ranks from Certified Realist to Delulu CEO, with comparison percentages, sharing, GA4, SEO, and static result routes. |
| 2026-09-06 | Make mobile question and result screens more glanceable: larger questions, answer controls around half the viewport, and results led by a large percentage and keywords rather than paragraphs. | Implemented | Applied to How Delulu Are You. Its result-card disclaimer was removed; the entertainment context remains in the supporting page copy. This becomes the default for future games. |
| 2026-09-06 | Reduce the mobile answer area further after device testing showed that half-viewport controls still looked oversized. | Implemented | How Delulu Are You now uses content-sized question cards and a combined answer area around 28% of the viewport. This refines and supersedes the “around half” sizing in the preceding decision. |
| 2026-09-06 | Preserve the original full game-card footprint while keeping the smaller answer controls; use larger, heavier question and answer text to improve readability. | Implemented | Device review showed that shrinking the outer card changed the intended composition. This supersedes only the content-sized-card portion of the preceding decision; the 28svh answer limit remains. |
| 2026-09-06 | Keep answer controls in a fixed lower zone and vertically center each question in the remaining upper zone so copy length cannot move the controls. | Implemented | Applied to How Delulu Are You and adopted as the default layout rule for future question-based games. |
| 2026-09-07 | Add “What’s Your Pinoy Commute Persona?” as a Filipino daily-life personality game. | Implemented | Eight commute choices map to eight playful personas; the fixed question/answer layout, pre-game and result sharing, GA4, SEO, homepage discovery, static result routes, and interactive social artwork are included. |
| 2026-09-07 | Automatically publish completed, tested implementation work to `Neal7773/Hi-classmate` `main` without requesting separate deployment approval each time. | Implemented | Standing authorization is limited to this existing Hi Classmate project and its established GitHub/Cloudflare production flow. |
| 2026-09-07 | Add “What’s Your Role in the Family GC?” as a Filipino family-chat personality game. | Implemented | Eight familiar chat situations map to eight shareable roles with fixed mobile layout, GA4, SEO, and result pages. |
| 2026-09-07 | Add “What’s Your Pinoy Rainy-Day Persona?” as a Filipino weather-life personality game. | Implemented | Eight rain, baha, commute, and brownout situations map to eight shareable personas with GA4, SEO, and fixed mobile layout. |

## Change rule

When a new Chat specification conflicts with a row above, record the new decision and explicitly mark the prior row as changed or superseded. Do not silently overwrite history.

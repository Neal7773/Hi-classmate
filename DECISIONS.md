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

## Change rule

When a new Chat specification conflicts with a row above, record the new decision and explicitly mark the prior row as changed or superseded. Do not silently overwrite history.

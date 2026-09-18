# PROJECT_SPEC — Hi Classmate

Last reviewed: 2026-09-18

## Purpose

Hi Classmate is a mobile-first viral entertainment site for Filipino teens and young adults. It offers short, locally recognizable quizzes and quick games designed to be completed, compared, and voluntarily shared with a barkada through Facebook or group chats.

The production site is `https://hiclassmate.com/`.

## Core structure

- Static HTML, CSS, and JavaScript; no build step or application server is currently required.
- Homepage at `/` provides Featured, Trending, New Games, and mood/category discovery.
- The original quiz lives at `/quiz/classmate/`.
- New games live at `/games/<slug>/`, normally with their own `index.html`, `styles.css`, `app.js`, and social image.
- Personality games may use `/games/<slug>/results/<result-slug>/` pages for result-specific Facebook previews.
- Shared site files include `analytics.js`, `footer-links.css`, `robots.txt`, and `sitemap.xml`.
- Source is maintained on GitHub (`Neal7773/Hi-classmate`, `main`) and is configured for Cloudflare static deployment.

## Long-term product rules

1. Target Filipino teens and young adults, while also allowing universal personality and symbolic story tests (updated 2026-09-17). Poomang is a reference for content and concepts only: animals, colors, everyday objects and relatable situations. Exclude Korean-specific holidays and regional references. Write original questions, illustrations and interpretations in accessible English; Filipino-specific content remains welcome but is no longer mandatory for every game. Do not adopt reference-site interfaces, layouts or social-preview styling.
2. Games must be simple, fast, and immediately understandable. The interactive game should fit within one screen where practical, especially on mobile and in Facebook's in-app browser.
3. Every game must be shareable before play so the site owner can publish the game itself. Result sharing must share the user's specific result when the game supports result types.
4. Results should create comparison value: a funny character/type, score, percentile-style presentation, or another clear way to compare with friends.
5. Personality outcomes should be varied, specific, playful, and worth sharing; avoid bland or repetitive results.
6. Keep questions/results/configuration separate from rendering and scoring logic where practical so the site can evolve toward a reusable engine plus content-data model.
7. Preserve working games and URLs. Do not silently replace an established decision or reimplement completed work without a new explicit decision.
8. Advertising remains visually hidden until approval. Do not add live AdSense code or expose placeholder labels without an explicit decision.
9. GA4 measurement ID `G-77QM94C66P` is the current analytics property. Do not change it without an explicit decision.
10. New releases must follow `SEO-PUBLISHING-CHECKLIST.md`: unique metadata/copy/social image, crawlable internal links, sitemap inclusion, and `noindex,follow` on thin result-share pages.
11. Homepage editorial roles remain distinct: Featured is the current promotion or strongest game; Trending is curated until reliable GA4 data exists; New Games is reverse chronological; categories aid discovery.
12. New social thumbnails should read immediately as playable content: prioritize a large question title, visible answer-choice cards, and a strong play/take-the-quiz button or equivalent interaction cue. Characters are optional. Keep essential text inside the 1200 × 630 safe area.
13. New mobile game screens should prioritize instant scanning: keep the main game-card footprint stable across play states, make the active question large and heavy, and keep the combined answer area around one-quarter to one-third of the viewport instead of stretching the controls. Divide question screens into a stable upper question zone and lower answer zone so answer controls never move when question copy changes length; center the question copy vertically inside its zone. For score-based games, compress results around one prominent score/percentage plus short keyword chips. Symbolic story tests may instead reveal each answer-specific meaning on a separate compact screen and end with a portrait; do not add a numerical score just to fit the old format. Avoid long result paragraphs or footer disclaimers inside the interactive result card; keep necessary context in the supporting page copy.

## Technical assumptions and protected items

### Start-screen controls — applies to new games after 2026-09-18

Keep Start and "Share this game" as similarly sized, prominent buttons. For future games, move the pair lower than the current Need to Know placement: center the entire button group vertically within the combined region occupied by the current buttons and the blank space below them down to the game-card bottom. Balance the space above and below the group within that region; do not center against the whole screen or crowd the introduction. Preserve comfortable bottom padding and mobile visibility. This supersedes the earlier generic mid-screen placement wording. Apply only to future games; all existing games, including What Do You NEED to Know?, remain unchanged. Question answer-zone positioning is unaffected.

- Production URLs and Facebook sharing URLs use HTTPS and the canonical host `hiclassmate.com`.
- Facebook sharing uses the user-opened Facebook share dialog. No automated posting or Facebook login/API integration is assumed.
- Percentage and percentile-style results are entertainment presentation derived from answers. Do not add mood-breaking diagnostic or "just for fun" disclaimers to game cards or supporting copy unless a specific legal or platform requirement is confirmed.
- Result pages are intended for social previews, not as independent search landing pages. They must point canonically to the main game.
- Keep policy/trust pages (`about`, `contact`, `privacy`, `terms`) accessible from the footer.
- Do not change the domain, GitHub repository/branch, Cloudflare deployment relationship, analytics ID, legal copy, or canonical URL policy casually.
- After a completed implementation passes its relevant checks, publish it to the established public GitHub repository `Neal7773/Hi-classmate` on `main` and verify the Cloudflare production result without asking for a separate deployment confirmation each time. This standing authorization applies only to this project and established deployment destination.

## Symbolic story tests (2026-09-17)

For the next game onward, use the established Hi Classmate game interface and Facebook game/result-card style from before the Poomang reference discussion. Use `games/villain-era/`, `games/toxic-dating-habit/` and `games/date-yourself/` as existing visual baselines, together with rules 12–13 above. Reference tests inform the topic, situations, choices and interpretation concept only. The River Within's storybook appearance is not the new visual template. The user explicitly requested leaving all already-created games, including The River Within, unchanged; do not retrofit this clarification to them.

Use invented story symbols consistently, retain the player’s exact choices in the result, and avoid asserting that animal symbolism establishes objective psychological facts. Reveal meanings after all story choices. The River Within uses six binary scenes, six individual reflections, four overall portraits and an optional locally generated keepsake image.

## Villain Era implementation note (2026-09-15)

The selected Villain Era quiz uses eight four-choice questions and six result archetypes. Its displayed type match is calculated from answers, not a percentile against other players. Keep content, scoring and display separate and preserve deterministic results for identical answers. This game adds no new site-wide deployment, analytics or advertising policy.

## Documentation workflow

Before implementation, read this file, `DECISIONS.md`, `CURRENT_STATE.md`, `TODO.md`, and the relevant code. After implementation and testing, update the state files so they match reality. Update this specification only when a long-term rule actually changes.

Every completed implementation response must end with a self-contained `[CHAT_HANDOFF]` after the state files have been synchronized. The handoff must be ready to paste into the project's existing Chat thread and must include:

- what was actually implemented;
- tests performed and their results;
- the resulting current state;
- remaining TODO items; and
- matters Chat should discuss or decide next.

Do not describe planned work as implemented, and explicitly distinguish untested or externally unverified items. This handoff is required even when the user does not ask for it separately.

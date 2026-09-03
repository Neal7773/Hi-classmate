# PROJECT_SPEC — Hi Classmate

Last reviewed: 2026-09-03

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

1. Target Filipino users first. Topics, humor, language, situations, and results should feel culturally recognizable rather than generic.
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

## Technical assumptions and protected items

- Production URLs and Facebook sharing URLs use HTTPS and the canonical host `hiclassmate.com`.
- Facebook sharing uses the user-opened Facebook share dialog. No automated posting or Facebook login/API integration is assumed.
- Percentile-style personality comparisons are playful estimates derived from answers, not live population statistics; the UI must disclose this.
- Result pages are intended for social previews, not as independent search landing pages. They must point canonically to the main game.
- Keep policy/trust pages (`about`, `contact`, `privacy`, `terms`) accessible from the footer.
- Do not change the domain, GitHub repository/branch, Cloudflare deployment relationship, analytics ID, legal copy, or canonical URL policy casually.

## Documentation workflow

Before implementation, read this file, `DECISIONS.md`, `CURRENT_STATE.md`, `TODO.md`, and the relevant code. After implementation and testing, update the state files so they match reality. Update this specification only when a long-term rule actually changes.

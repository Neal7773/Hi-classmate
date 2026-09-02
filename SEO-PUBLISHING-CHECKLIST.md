# Hi Classmate SEO Publishing Checklist

Use this checklist for every new game before publishing.

## Game page

- Use one short, readable URL: `/games/game-name/`.
- Write a unique page title and meta description that accurately describe the game.
- Set a canonical URL to the game's public URL on `https://hiclassmate.com`.
- Use one clear H1 and descriptive H2 headings.
- Include original, useful copy about what the game is, how to play, and what the result means. Avoid duplicated filler text and keyword stuffing.
- Add a unique 1200 × 630 social image, Open Graph title, description, URL, image dimensions, and `og:type=website`.
- Give content images useful alt text and explicit width and height.
- Keep the main game playable in one mobile viewport where practical. Optimize assets and avoid layout shifts.
- Include ordinary HTML links back home and to genuinely related games.
- Track `game_view`, `game_start`, `game_complete`, `share_game`, `share_result`, and `replay` in GA4 with a stable `game_id`.

## Result sharing pages

- Give each shareable result its own Open Graph title, description, and result-specific 1200 × 630 image.
- Add `<meta name="robots" content="noindex,follow">` so thin result variants do not compete in search.
- Set the canonical URL to the main game page.
- Keep a crawlable link to the main game.

## Homepage and discovery

- Add every release at the beginning of the **New games** list.
- Add it to the correct **Browse by mood** category.
- Change **Featured** only for the current promotion or strongest game.
- Change **Trending** based on GA4 completed plays and shares once enough traffic exists; until then curate it manually.
- Use descriptive link text, not generic text such as “click here.”
- Add the main game URL to `sitemap.xml`; do not add result-sharing URLs.
- Update the homepage `ItemList` structured data when the visible game list changes.

## Final checks

- Confirm the page and every main navigation link loads successfully on mobile and desktop.
- Confirm Facebook shows the correct title, description, and image for both the game and each result.
- Confirm metadata, heading, copy, and image are unique to this game.
- Confirm the game works in Facebook's in-app browser and with keyboard/touch input.
- Request indexing for the main game in Google Search Console after deployment.

# What Type of Classmate Are You?

A mobile-first entertainment hub with a personality quiz and reaction-speed game. The homepage lives at `/`, the quiz at `/quiz/classmate/`, and the game at `/games/reaction-speed/`.

Ad placeholders are hidden by default. After ad approval, add the `ads-enabled` class to the `<body>` element in `index.html` to display the reserved ad positions.

## Run locally

No installation or build step is needed.

1. Open `index.html` directly in Chrome, Edge, Safari, or Firefox.
2. Click **Start the quiz** and answer all 8 questions.

For the most realistic test, serve the folder with any basic local web server. For example, if Python is installed:

```text
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Facebook sharing

The Facebook button opens Facebook's user-controlled share dialog. Facebook can only share a publicly reachable `http://` or `https://` page, so when the quiz is opened as a local `file://` page the button copies the result text and explains that publishing is required.

The included `og-classmate-quiz.jpg` is a 1200 × 630 Facebook sharing card and is connected to the production URL `https://hiclassmate.com/og-classmate-quiz.jpg` through the page's Open Graph metadata. Facebook chooses the preview from page metadata; the browser cannot dynamically replace the preview image for each quiz result.

After deployment, paste the public page URL into Facebook Sharing Debugger and choose **Scrape Again** to refresh Facebook's cached title, description, and image.

## Editing or adding content

All content is at the top of `app.js` in the `QUIZ_DATA` object:

- `results` contains the six result characters, descriptions, traits, colors, and emoji.
- `questions` contains each prompt and its answers.
- Each answer has a `scores` object. Keys match result IDs and values are awarded points.

The rendering and scoring engine appears below `QUIZ_DATA`, so future quizzes can reuse the same engine with a different data object.

## Files

- `index.html` — page structure and metadata
- `styles.css` — responsive visual design
- `app.js` — quiz data, scoring, navigation, sharing, and restart logic
- `og-classmate-quiz.jpg` — 1200 × 630 Facebook sharing image
- `games/reaction-speed/` — five-round reaction game, results, information, and its social sharing image

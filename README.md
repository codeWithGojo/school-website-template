# School website template

A ready-to-customise **sample website for secondary schools** — no build step, no framework.

The demo school is **Crown Heritage College** (fictional). Swap the name, colours, copy, and photos for yours.

**Repo:** https://github.com/codeWithGojo/school-website-template

## Files

| File | What it is |
| --- | --- |
| `index.html` | Page content (name, copy, form) |
| `styles.css` | Look, layout, motion |
| `app.js` | Mobile menu, scroll reveals, apply form |
| `images/` | Drop campus photos here |

## Open it

1. Clone the repo.
2. Open `index.html` in a browser, **or:**

```bash
python3 -m http.server 5500
```

## What you get

- Sticky header + mobile menu
- Hero, about, academics, facilities, news, campuses, testimonials
- Admissions steps + working **application form** (saves in the browser only)
- Motion: fade-in, scroll reveals, count-up stats (respects “reduce motion”)

## Make it your school

| Change | Where |
| --- | --- |
| School name, motto, phone, email | Search `Crown Heritage` in `index.html` |
| Colours | CSS variables at the top of `styles.css` (`--navy`, `--gold`, `--green`, `--ivory`) |
| Crest letters | `.crest` text (`CH`) in `index.html` |
| Photos | JPEGs in `images/` using the filenames below |
| Tracks / campuses / news | Matching sections in `index.html` |
| Exam dates | Admissions section + apply form |

### Photo filenames

```
images/hero-campus.jpg
images/office.jpg
images/lab.jpg
images/library.jpg
images/boarding.jpg
images/sports.jpg
images/news-science.jpg
images/news-admissions.jpg
images/news-founders.jpg
```

If a photo is missing, that block still shows a navy placeholder.

## Publish

**GitHub Pages:** Settings → Pages → Deploy from `main` → `/` (root).

`https://codewithgojo.github.io/school-website-template/`

## Notes

- The apply form does **not** email the school. Hook it to Google Forms, Formspree, or your backend when you go live.
- Sample content is for demonstration. Replace before sharing with parents.

MIT licence — use it for any school.

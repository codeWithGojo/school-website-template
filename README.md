# School website template

A ready-to-customise **sample website for secondary schools** — one HTML file, no build step, no framework.

The demo school is **Crown Heritage College** (fictional). Swap the name, colours, copy, and photos for yours.

## Open it

1. Download or clone this repo.
2. Double-click `index.html`  
   **or** from the folder:

```bash
# optional local server
python3 -m http.server 5500
```

Then visit `http://localhost:5500`.

## What you get

- Sticky header + mobile menu
- Hero, about, academics, facilities, news, campuses, testimonials
- Admissions steps + working **application form** (saves in the browser only)
- Motion: fade-in, scroll reveals, count-up stats (respects “reduce motion”)

## Make it your school

| Change | Where |
| --- | --- |
| School name, motto, phone, email | Search `Crown Heritage` in `index.html` |
| Colours | CSS variables at the top of `<style>` (`--navy`, `--gold`, `--green`, `--ivory`) |
| Crest letters | `.crest` text (`CH`) |
| Photos | Drop JPEGs into `images/` using the filenames below |
| Tracks / campuses / news | The matching sections in `index.html` |
| Exam dates | Admissions section + apply form |

### Photo filenames

Put real campus photos here (any JPEG, same names):

```
images/hero-campus.jpg    ← wide courtyard / gate
images/office.jpg         ← principal’s office or portrait-safe photo
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

**GitHub Pages:** repo Settings → Pages → Deploy from `main` → `/` (root).  
Site URL will be:

`https://codewithgojo.github.io/school-website-template/`

Netlify / Cloudflare Pages: drag the folder in, done.

## Notes

- The apply form does **not** email the school. Hook it to Google Forms, Formspree, or your backend when you go live.
- Sample content and photos are for demonstration. Replace before sharing with parents.

MIT licence — use it for any school.

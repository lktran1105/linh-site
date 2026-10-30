# Linh Tran — personal site

Plain HTML/CSS/JS. No build step. Double-click `index.html` to preview locally.

## Structure
```
index.html              Experiences (hero + filters + project cards)
about.html              About
cv.html                 CV (+ "Download PDF" → assets/Linh-Tran-CV.pdf)
projects/<slug>.html    One case-study page per project
assets/css/style.css    All styling. Colors/fonts/spacing are tokens at the top.
assets/js/site.js       Shared header + footer. Your name, email, LinkedIn, GitHub live here.
assets/js/projects-data.js   The project list. Order, titles, tags, and images.
assets/js/experiences.js     Filter + card logic (you shouldn't need to touch this).
assets/img/projects/    Put square card images here.
```

## Common edits
- **Add a project:** add an entry to `projects-data.js`, then copy any file in `projects/` to `projects/<new-slug>.html` and paste in your case study.
- **Reorder cards:** reorder the entries in `projects-data.js`.
- **Card image:** save a square image (≥ 800×800) to `assets/img/projects/` and set `image: "assets/img/projects/<file>.jpg"`.
- **Change a filter:** edit `tags` on a project (`"product"`, `"ai-build"`, `"data"`).
- **Shareable filter links:** `index.html#ai-build`, `#product`, `#data`.

## TODO before launch
- [ ] Email + LinkedIn URL in `assets/js/site.js`
- [ ] Hero copy in `index.html`, About copy in `about.html`
- [ ] Bracketed `[placeholders]` in `projects-data.js`, `cv.html`, and each `projects/*.html`
- [ ] Portrait, card images, case-study covers
- [ ] `assets/Linh-Tran-CV.pdf`

## Deploy (GitHub Pages)
1. Push this folder to a GitHub repo.
2. Repo → Settings → Pages → Deploy from branch → `main` / root.
3. Custom domain later: Settings → Pages → Custom domain, then add the DNS records your registrar shows.

/*
  Shared header + footer, injected on every page.
  Edit SITE below to change your name, links, and footer note in one place.
*/
const SITE = {
  name: "Linh Tran",
  location: "Boulder, CO",
  timezone: "America/Denver",
  lastUpdated: "October 2026",
  email: "you@example.com",                       // TODO: your email
  linkedin: "https://www.linkedin.com/in/your-handle", // TODO: your LinkedIn
  github: "https://github.com/lktran1105",
  footerNote: "Thanks for stopping by. If something here sparked an idea, I'd love to hear it."
};

(function () {
  const root = document.body.dataset.root || "";      // "" on top-level pages, "../" in /projects/
  const page = document.body.dataset.page || "";

  // ---------- Header ----------
  const header = document.getElementById("site-header");
  if (header) {
    const link = (href, label, key) =>
      `<a href="${root}${href}" class="nav-link${page === key ? " is-active" : ""}"${page === key ? ' aria-current="page"' : ""}>${label}</a>`;
    header.innerHTML = `
      <div class="header-inner">
        <a href="${root}index.html" class="wordmark">${SITE.name}</a>
        <nav class="nav" aria-label="Main">
          ${link("index.html", "Experiences", "experiences")}
          ${link("about.html", "About", "about")}
          ${link("cv.html", "CV", "cv")}
        </nav>
      </div>`;
  }

  // ---------- Footer ----------
  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML = `
      <div class="footer-inner">
        <p class="footer-note">${SITE.footerNote}<br>
          Say hi at <a href="mailto:${SITE.email}">${SITE.email}</a>.</p>
        <div class="footer-meta">
          <div>
            <p class="meta-label">Last updated</p>
            <p>${SITE.lastUpdated}</p>
          </div>
          <div>
            <p class="meta-label">Currently</p>
            <p>${SITE.location}, <span id="local-time"></span></p>
          </div>
          <div>
            <p class="meta-label">Elsewhere</p>
            <p class="footer-links">
              <a href="${SITE.linkedin}" target="_blank" rel="noopener">LinkedIn ↗</a>
              <a href="${SITE.github}" target="_blank" rel="noopener">GitHub ↗</a>
              <a href="mailto:${SITE.email}">Email ↗</a>
            </p>
          </div>
        </div>
        <p class="copyright">© ${new Date().getFullYear()} ${SITE.name}</p>
      </div>`;

    const t = document.getElementById("local-time");
    const tick = () => {
      t.textContent = new Date().toLocaleTimeString("en-US", {
        hour: "numeric", minute: "2-digit", timeZone: SITE.timezone
      }).toLowerCase().replace(" ", "");
    };
    tick();
    setInterval(tick, 30000);
  }
})();

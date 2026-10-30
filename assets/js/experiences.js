/* Renders filter pills + project cards on the Experiences page. */
(function () {
  const grid = document.getElementById("project-grid");
  const bar = document.getElementById("filter-bar");
  if (!grid || !bar) return;

  const labelFor = (id) => (FILTERS.find((f) => f.id === id) || {}).label || id;

  // Filter pills with counts
  bar.innerHTML = FILTERS.map((f) => {
    const n = f.id === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.tags.includes(f.id)).length;
    return `<button type="button" class="filter" data-filter="${f.id}" aria-pressed="false">
              ${f.label}<span class="count">${n}</span>
            </button>`;
  }).join("");

  // Cards
  grid.innerHTML = PROJECTS.map((p) => {
    const meta = [p.org, p.area, p.year].filter(Boolean).join(" • ");
    const thumb = p.image
      ? `<img src="${p.image}" alt="" loading="lazy">`
      : `<div class="thumb-placeholder" style="background:${p.tint}"><span>${p.title.replace(/[\[\]]/g, "")}</span></div>`;
    return `
      <a class="card" href="projects/${p.slug}.html" data-tags="${p.tags.join(" ")}">
        <div class="thumb">${thumb}</div>
        <p class="meta">${meta}</p>
        <h3 class="card-title">${p.title}</h3>
        <p class="card-blurb">${p.blurb}</p>
        <p class="card-tags">${p.tags.map((t) => `<span>${labelFor(t)}</span>`).join("")}</p>
      </a>`;
  }).join("");

  const cards = [...grid.querySelectorAll(".card")];
  const buttons = [...bar.querySelectorAll(".filter")];

  function apply(id) {
    if (!FILTERS.some((f) => f.id === id)) id = "all";
    buttons.forEach((b) => {
      const on = b.dataset.filter === id;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on);
    });
    cards.forEach((c) => {
      const show = id === "all" || c.dataset.tags.split(" ").includes(id);
      c.hidden = !show;
    });
  }

  bar.addEventListener("click", (e) => {
    const b = e.target.closest(".filter");
    if (!b) return;
    const id = b.dataset.filter;
    history.replaceState(null, "", id === "all" ? location.pathname : "#" + id);
    apply(id);
  });

  // Supports shareable links like index.html#ai-build
  apply(location.hash.slice(1) || "all");
})();

/*
  ============================================================
  PROJECTS — edit this file to add, remove, or reorder cards.
  ============================================================
  Order here = order on the Experiences page.

  slug     → must match the file name in /projects/  (e.g. "yahoo-search" → projects/yahoo-search.html)
  org      → small uppercase label (company / context)
  area     → small uppercase label (domain)
  year     → optional; leave "" to hide
  title    → the card headline (lead with the outcome if you can)
  blurb    → one sentence under the title
  tags     → any of: "product", "ai-build", "data"  (controls the filters)
  image    → path to a square image, e.g. "assets/img/projects/yahoo-search.jpg"
             leave "" to show the colored placeholder
  tint     → placeholder background color (only used when image is "")
*/

window.PROJECTS = [
  {
    slug: "yahoo-search",
    org: "Yahoo",
    area: "Search",
    year: "2023",
    title: "Yahoo Search's first interactive map: 1st prize out of 200",
    blurb: "Led a 30-person team to build a travel map from 0 to 1, increasing search session length by 60%.",
    tags: ["product", "data"],
    image: "",
    tint: "#E8E4F8"
  },
  {
    slug: "ai-mock-interview",
    org: "Personal build",
    area: "AI · Career",
    year: "",
    title: "PM Interview Coach: feedback that compounds across mocks",
    blurb: "A Claude Skill that grades PM mock interviews against format-specific rubrics and tracks named skills across sessions.",
    tags: ["ai-build", "product"],
    image: "",
    tint: "#E3F1EA"
  },
  {
    slug: "treeban",
    org: "Personal build",
    area: "Consumer app",
    year: "",
    title: "Treeban: plant ID with spaced repetition",
    blurb: "Photo-based plant ID, a personal discovery timeline, and self-quizzing.",
    tags: ["ai-build", "product"],
    image: "",
    tint: "#E1EFDC"
  },
  {
    slug: "resume-matcher",
    org: "Grace Hopper 2026",
    area: "AI · Recruiting",
    year: "",
    title: "Resume-to-company matcher & pitch generator",
    blurb: "Reads an attendee's resume, matches them to companies, and drafts their pitch.",
    tags: ["ai-build"],
    image: "",
    tint: "#F6E3EC"
  },
  {
    slug: "grant-pipeline",
    org: "CU Boulder Venture Partners",
    area: "AI automation",
    year: "",
    title: "Automated grant-sourcing pipeline",
    blurb: "An AI pipeline that finds and screens grant opportunities for the office.",
    tags: ["ai-build", "data"],
    image: "",
    tint: "#E2ECF7"
  },
  {
    slug: "vca-analytics",
    org: "VCA Animal Hospitals",
    area: "Data & Analytics",
    year: "",
    title: "[Your VCA data product headline]",
    blurb: "One line on the problem, what you shipped, and the result.",
    tags: ["product", "data"],
    image: "",
    tint: "#F3EEDD"
  },
  {
    slug: "penguin-climate",
    org: "Independent research",
    area: "Machine learning",
    year: "",
    title: "Climate change & Antarctic penguin populations",
    blurb: "Modeling how a warming climate affects penguin populations.",
    tags: ["data"],
    image: "",
    tint: "#E0EEF2"
  },
  {
    slug: "semeval-reteco",
    org: "SemEval-2027",
    area: "NLP · Retrieval",
    year: "",
    title: "RETECO: temporal retrieval shared task",
    blurb: "Competing in Track 1 (TEMPO), sub-tracks 1a and 1b, with a team.",
    tags: ["data", "ai-build"],
    image: "",
    tint: "#ECE6F3"
  },
  {
    slug: "cu-cair",
    org: "CU Boulder CAIR",
    area: "Institutional analytics",
    year: "",
    title: "[Your CAIR analytics headline]",
    blurb: "One line on the analysis and who used it.",
    tags: ["data"],
    image: "",
    tint: "#EEF0E2"
  }
];

window.FILTERS = [
  { id: "all", label: "All" },
  { id: "product", label: "Product" },
  { id: "ai-build", label: "AI Build" },
  { id: "data", label: "Data" }
];

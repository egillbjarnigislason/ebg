/* ---------------------------------------------------
   Shared project metadata.

   This is the single source of truth for every project —
   both the scrollable overview list (index.html) and each
   project's own page (project.html?slug=...) read from here,
   so editing a project only means editing it once.

   To add a project: copy one of the objects below, give it a
   unique `slug` (used in the URL, e.g. project.html?slug=your-slug),
   and fill in the fields. Leave `image`/`imageWebp` pointing at
   assets/project_img_default.png/.webp until there's a real photo.
--------------------------------------------------- */

const PROJECTS = [
  {
    slug: "project-one",
    title: "Project One",
    dateStart: "2024",
    dateEnd: "present",
    subtitle: "Placeholder subtext — replace with a sentence or two describing this project.",
    image: "assets/project_img_default.png",
    imageWebp: "assets/project_img_default.webp",
  },
  {
    slug: "project-two",
    title: "Project Two",
    dateStart: "2023",
    dateEnd: "2024",
    subtitle: "Placeholder subtext — replace with a sentence or two describing this project.",
    image: "assets/project_img_default.png",
    imageWebp: "assets/project_img_default.webp",
  },
  {
    slug: "project-three",
    title: "Project Three",
    dateStart: "2022",
    dateEnd: "2023",
    subtitle: "Placeholder subtext — replace with a sentence or two describing this project.",
    image: "assets/project_img_default.png",
    imageWebp: "assets/project_img_default.webp",
  },
];

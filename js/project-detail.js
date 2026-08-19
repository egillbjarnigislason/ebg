/* Renders a single project's detail page (project.html?slug=...)
   from the shared PROJECTS data (js/projects-data.js). */
(function () {
  var container = document.getElementById("project-detail");
  if (!container || typeof PROJECTS === "undefined") return;

  var params = new URLSearchParams(window.location.search);
  var slug = params.get("slug");
  var project = PROJECTS.filter(function (p) { return p.slug === slug; })[0];

  if (!project) {
    container.innerHTML = "<p>Project not found.</p>";
    return;
  }

  document.title = project.title + " — Egill Bjarni Gíslason";

  container.innerHTML =
    '<p class="project-date">' + project.dateStart + " — " + project.dateEnd + "</p>" +
    '<h1 class="project-title project-title-detail">' + project.title + "</h1>" +
    '<p class="project-subtitle project-subtitle-detail">' + project.subtitle + "</p>" +
    "<picture>" +
      '<source srcset="' + project.imageWebp + '" type="image/webp">' +
      '<img src="' + project.image + '" alt="" class="project-detail-image">' +
    "</picture>";
})();

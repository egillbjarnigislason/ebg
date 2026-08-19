/* Renders the scrollable project overview list on index.html
   from the shared PROJECTS data (js/projects-data.js). */
(function () {
  var container = document.getElementById("project-list");
  if (!container || typeof PROJECTS === "undefined") return;

  PROJECTS.forEach(function (project, index) {
    var item = document.createElement("a");
    // Alternate: odd rows (index 1, 3, 5, ...) get the reflected layout —
    // image on the left, text on the right.
    item.className = "project-item" + (index % 2 === 1 ? " project-item--reversed" : "");
    item.href = "project.html?slug=" + encodeURIComponent(project.slug);

    item.innerHTML =
      '<div class="project-item-text">' +
        '<p class="project-date">' + project.dateStart + " — " + project.dateEnd + "</p>" +
        '<h2 class="project-title">' + project.title + "</h2>" +
        '<p class="project-subtitle">' + project.subtitle + "</p>" +
        '<span class="project-arrow" aria-hidden="true">→</span>' +
      "</div>" +
      '<div class="project-item-media">' +
        "<picture>" +
          '<source srcset="' + project.imageWebp + '" type="image/webp">' +
          '<img src="' + project.image + '" alt="">' +
        "</picture>" +
      "</div>";

    container.appendChild(item);
  });
})();

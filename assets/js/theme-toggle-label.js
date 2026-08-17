/**
 * Sunflowers Wales — dynamic label for the light/dark toggle button.
 * Upstream's button has a static title="appearance" regardless of state
 * (layouts/_partials/components/headers/navbar.html, vendored from the
 * HugoBlox module). This sets the title/aria-label to describe what
 * *clicking* will do next ("Switch to dark mode" / "Switch to light
 * mode") rather than the current mode, using `hbThemeChange` — an event
 * upstream's own hb-theme.js dispatches specifically to support this
 * kind of customisation.
 */
(function () {
  function updateLabels() {
    var isDark = document.documentElement.classList.contains("dark");
    var label = isDark ? "Switch to light mode" : "Switch to dark mode";
    document.querySelectorAll(".theme-toggle").forEach(function (btn) {
      btn.setAttribute("title", label);
      btn.setAttribute("aria-label", label);
    });
  }
  document.addEventListener("DOMContentLoaded", updateLabels);
  document.addEventListener("hbThemeChange", updateLabels);
})();

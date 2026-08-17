// Navigation

const applyScrollPadding = () => {
  const header = document.querySelector(".page-header");
  const position = header.getBoundingClientRect();
  document.documentElement.style.scrollPaddingTop = `${position.height.toString()}px`;
  const r = document.querySelector(":root");
  r.style.setProperty("--navbar-height", `${position.height.toString()}px`);
};

window.addEventListener("DOMContentLoaded", () => {
  const dropdownMenus = document.querySelectorAll(".nav-dropdown > .nav-link[role='button']");

  // Sunflowers Wales: upstream's toggle() only ever touched the dropdown
  // being clicked, so opening "Events" while "About us" was still open
  // (tap-to-open on mobile/tablet, no hover to close it) left both
  // expanded at once. closeOthers() collapses every other dropdown
  // first, so at most one is ever open — same pattern a native <details>
  // group or radio buttons would give for free.
  const closeOthers = (except) => {
    dropdownMenus.forEach((other) => {
      if (other === except) return;
      const otherParent = other.closest(".nav-dropdown");
      otherParent.classList.remove("active");
      other.setAttribute("aria-expanded", "false");
    });
  };

  dropdownMenus.forEach((toggler) => {
    const toggle = (el) => {
      const parent = el.closest(".nav-dropdown");
      const willActivate = !parent.classList.contains("active");
      closeOthers(el);
      parent.classList.toggle("active", willActivate);
      el.setAttribute("aria-expanded", willActivate ? "true" : "false");
    };

    toggler?.addEventListener("click", (e) => {
      e.preventDefault();
      toggle(e.currentTarget);
    });

    // Keyboard support
    toggler?.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle(e.currentTarget);
      }
      if (e.key === "Escape") {
        const parent = e.currentTarget.closest(".nav-dropdown");
        parent?.classList.remove("active");
        e.currentTarget.setAttribute("aria-expanded", "false");
      }
    });
  });

  applyScrollPadding();
});

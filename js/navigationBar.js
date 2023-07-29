const menuToggle = document.querySelector(".menu-toggle"),
  langToggle = document.querySelector(".languages-toggle"),
  siteNavigation = document.querySelector(".primary-menu"),
  siteLanguages = document.querySelector(".languages-list");

menuToggle.addEventListener("click", () => {
  const isOpened = menuToggle.getAttribute("aria-expanded") === "true";
  if (isOpened ? closeMenu() : openMenu());
});

function openMenu() {
  menuToggle.setAttribute("aria-expanded", "true");
  siteNavigation.setAttribute("data-state", "opened");
}
function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  siteNavigation.setAttribute("data-state", "closing");

  siteNavigation.addEventListener(
    "animationend",
    () => {
      siteNavigation.setAttribute("data-state", "closed");
    },
    { once: true }
  );
}

langToggle.addEventListener("click", () => {
  const isOpened = langToggle.getAttribute("aria-expanded") === "true";
  if (isOpened ? closeLang() : openLang());
});

function openLang() {
  langToggle.setAttribute("aria-expanded", "true");
  siteLanguages.setAttribute("data-state", "opened");
}
function closeLang() {
  langToggle.setAttribute("aria-expanded", "false");
  siteLanguages.setAttribute("data-state", "closed");
}

// Current Page
const pages = document.querySelectorAll(".menu-item");

pages.forEach((p) => {
  const a = p.querySelector("a");
  if (a.href == window.location) {
    p.setAttribute("aria-current", "page");
  }
});

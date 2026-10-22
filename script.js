const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Открыть меню" : "Закрыть меню");
    mainNav.classList.toggle("is-open", !isOpen);
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Открыть меню");
      mainNav.classList.remove("is-open");
    });
  });
}

const colorSection = document.querySelector(".color-section");
const colorButtons = document.querySelectorAll(".color-option");
const selectedColor = document.querySelector(".selected-color");
const colorCaption = document.querySelector(".color-caption");
const colorNames = {
  "sunshower": "Золотой дождь",
  "rainy-night": "Ночная тьма",
};

colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const color = button.dataset.color;
    const name = colorNames[color];

    if (!colorSection || !name || !selectedColor || !colorCaption) return;

    colorSection.dataset.color = color;
    selectedColor.innerHTML = `${name} <span>•</span> ${color === "sunshower" ? "Sunshower" : "Rainy Night"}`;
    colorCaption.innerHTML = `realme C55 <i>—</i> ${color === "sunshower" ? "Sunshower" : "Rainy Night"}`;
    colorButtons.forEach((option) => {
      const isSelected = option === button;
      option.classList.toggle("is-selected", isSelected);
      option.setAttribute("aria-pressed", String(isSelected));
    });
  });
});

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const yearElement = document.querySelector("#current-year");
if (yearElement) yearElement.textContent = String(new Date().getFullYear());

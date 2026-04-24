const btn = document.getElementById("categoryToggle");
const panel = document.getElementById("categoryPanel");
const items = document.querySelectorAll(".cat-item");
const contents = document.querySelectorAll(".cat-content");

function setActiveCategory(categoryId) {
  items.forEach((item) => {
    item.classList.toggle("active", item.dataset.cat === categoryId);
  });

  contents.forEach((content) => {
    content.classList.toggle("active", content.id === categoryId);
  });
}

if (btn && panel) {
  btn.addEventListener("click", () => {
    const isOpen = panel.classList.toggle("active");
    btn.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".category-menu")) {
      panel.classList.remove("active");
      btn.setAttribute("aria-expanded", "false");
    }
  });
}

items.forEach((item) => {
  const categoryId = item.dataset.cat;

  if (!categoryId) {
    return;
  }

  item.addEventListener("mouseenter", () => setActiveCategory(categoryId));
  item.addEventListener("focus", () => setActiveCategory(categoryId));
  item.addEventListener("click", () => setActiveCategory(categoryId));
});

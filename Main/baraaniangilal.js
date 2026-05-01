window.shopCategories = [
  {
    id: "men",
    title: "Эрэгтэй",
    description: "Цамц, өмд, гутал болон өдөр тутмын эрэгтэй загварууд.",
    subcategories: [
      { id: "shirt", title: "Цамц", terms: ["цамц", "shirt"] },
      { id: "pants", title: "Өмд", terms: ["өмд", "pants"] },
      { id: "shoes", title: "Гутал", terms: ["гутал", "кет", "shoes", "sneaker"] },
    ],
  },
  {
    id: "women",
    title: "Эмэгтэй",
    description: "Даашинз, цүнх, гутал, гадуур хувцас, гоёл чимэглэл.",
    subcategories: [
      { id: "dress", title: "Даашинз", terms: ["даашинз", "dress"] },
      { id: "bag", title: "Цүнх", terms: ["цүнх", "bag"] },
      { id: "shoes", title: "Гутал", terms: ["гутал", "shoes"] },
      { id: "outerwear", title: "Гадуур хувцас", terms: ["гадуур хувцас", "пальто", "coat"] },
      { id: "jewelry", title: "Гоёл чимэглэл", terms: ["гоёл чимэглэл", "jewelry"] },
      { id: "makeup", title: "Нүүр будалт", terms: ["нүүр будалт", "makeup"] },
    ],
  },
  {
    id: "tech",
    title: "Технологи",
    description: "Гар утас, laptop, чихэвч болон ухаалаг төхөөрөмжүүд.",
    subcategories: [
      { id: "phone", title: "Гар утас", terms: ["гар утас", "phone"] },
      { id: "laptop", title: "Laptop", terms: ["laptop", "зөөврийн компьютер"] },
      { id: "headphones", title: "Чихэвч", terms: ["чихэвч", "headphones"] },
    ],
  },
  {
    id: "kids",
    title: "Хүүхдийн",
    description: "Хүүхдийн тоглоом, хувцас, гутлын сонголт.",
    subcategories: [
      { id: "toy", title: "Тоглоом", terms: ["тоглоом", "toy"] },
      { id: "clothes", title: "Хувцас", terms: ["хувцас", "clothes"] },
      { id: "shoes", title: "Гутал", terms: ["гутал", "shoes"] },
    ],
  },
  {
    id: "home",
    title: "Гэрийн тавилга",
    description: "Тавилга, хүрээ болон гэрийн тохижилтын бараа.",
    subcategories: [
      { id: "frame", title: "Хүрээ", terms: ["хүрээ", "frame"] },
      { id: "furniture", title: "Тавилга", terms: ["тавилга", "furniture"] },
      { id: "household", title: "Гэр ахуйн бараа", terms: ["гэр ахуй", "household"] },
    ],
  },
  {
    id: "electronics",
    title: "Электрон бараа",
    description: "Электрон хэрэглээний үндсэн төхөөрөмжүүд.",
    subcategories: [
      { id: "phone", title: "Гар утас", terms: ["гар утас", "phone"] },
      { id: "laptop", title: "Laptop", terms: ["laptop"] },
      { id: "headphones", title: "Чихэвч", terms: ["чихэвч", "headphones"] },
    ],
  },
  {
    id: "cosmetics",
    title: "Гоо сайхан",
    description: "Нүүр будалт болон арьс арчилгааны бараанууд.",
    subcategories: [
      { id: "makeup", title: "Нүүр будалт", terms: ["нүүр будалт", "makeup"] },
      { id: "skincare", title: "Арьс арчилгаа", terms: ["арьс арчилгаа", "skincare"] },
    ],
  },
  {
    id: "household",
    title: "Гэр ахуйн бараа",
    description: "Гэрийн өдөр тутмын хэрэгцээ болон тохижилтын бараа.",
    subcategories: [
      { id: "frame", title: "Хүрээ", terms: ["хүрээ", "frame"] },
      { id: "furniture", title: "Тавилга", terms: ["тавилга", "furniture"] },
      { id: "household", title: "Гэр ахуйн бараа", terms: ["гэр ахуй", "household"] },
    ],
  },
];

window.megaCategories = window.shopCategories.map((category) => ({
  id: category.id,
  title: category.title,
  searchCategory: category.id,
  icon: "",
  promoImage: "pictures/tablecloth-card.svg",
  promoText: category.title,
  groups: [
    {
      title: category.title,
      links: category.subcategories.map((subcategory) => ({
        label: subcategory.title,
        terms: [subcategory.id, ...subcategory.terms],
      })),
    },
  ],
}));

function getProductsByCategory(categoryId) {
  const products = window.products || [];
  return products.filter((product) => {
    const categoryIds = product.categoryIds || [product.categoryId];
    return categoryIds.includes(categoryId);
  });
}

function createCategoryUrl(categoryId, subcategoryId) {
  const params = new URLSearchParams();
  if (categoryId) {
    params.set("category", categoryId);
  }
  if (subcategoryId) {
    params.set("subcategory", subcategoryId);
  }
  return `baraa.html${params.toString() ? `?${params.toString()}` : ""}`;
}

function renderDropdownContent() {
  const left = document.getElementById("categoryLeft");
  const right = document.getElementById("categoryRight");

  if (!left || !right || left.children.length || right.children.length) {
    return;
  }

  left.innerHTML = window.shopCategories
    .map(
      (category, index) => `
        <button class="cat-item ${index === 0 ? "active" : ""}" type="button" data-cat="${category.id}">
          <span>${category.title}</span>
          <span>&gt;</span>
        </button>
      `
    )
    .join("");

  right.innerHTML = window.shopCategories
    .map(
      (category, index) => `
        <div class="cat-content ${index === 0 ? "active" : ""}" id="${category.id}">
          <h3><a href="${createCategoryUrl(category.id)}">${category.title}</a></h3>
          ${category.subcategories
            .map(
              (subcategory) =>
                `<a href="${createCategoryUrl(category.id, subcategory.id)}">${subcategory.title}</a>`
            )
            .join("")}
        </div>
      `
    )
    .join("");
}

function bindCategoryDropdown() {
  const toggle = document.getElementById("categoryToggle");
  const panel = document.getElementById("categoryPanel");

  if (!toggle || !panel) {
    return;
  }

  renderDropdownContent();

  toggle.addEventListener("click", () => {
    const isOpen = panel.classList.toggle("active");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  panel.addEventListener("click", (event) => {
    const item = event.target.closest(".cat-item");
    if (!item) {
      return;
    }

    panel.querySelectorAll(".cat-item").forEach((button) => button.classList.remove("active"));
    panel.querySelectorAll(".cat-content").forEach((content) => content.classList.remove("active"));
    item.classList.add("active");
    panel.querySelector(`#${item.dataset.cat}`)?.classList.add("active");
  });

  document.addEventListener("click", (event) => {
    if (!panel.classList.contains("active")) {
      return;
    }

    if (!panel.contains(event.target) && !toggle.contains(event.target)) {
      panel.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

function renderHomeCategoryGrid() {
  const grid = document.getElementById("homeCategoryGrid");
  if (!grid) {
    return;
  }

  grid.innerHTML = window.shopCategories
    .map((category) => {
      const count = getProductsByCategory(category.id).length;
      return `
        <article class="home-category-card">
          <span class="home-category-label">${count} бараа</span>
          <h3><a href="${createCategoryUrl(category.id)}">${category.title}</a></h3>
          <p>${category.description}</p>
          <div class="home-category-chips">
            ${category.subcategories
              .slice(0, 4)
              .map(
                (subcategory) =>
                  `<a class="home-category-chip" href="${createCategoryUrl(category.id, subcategory.id)}">${subcategory.title}</a>`
              )
              .join("")}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderFeaturedProductGrid() {
  const grid = document.getElementById("featuredProductGrid");
  const products = (window.products || []).slice(0, 8);

  if (!grid) {
    return;
  }

  grid.innerHTML = products
    .map(
      (product) => `
        <article class="product-card home-product-card">
          <a class="product-card-link" href="baraa.html?id=${product.id}" aria-label="${product.name} дэлгэрэнгүй">
            <div class="product-card-media" style="--color-a:${product.colorA}; --color-b:${product.colorB};">
              <img src="${product.image}" alt="${product.name}" />
              <span>${product.brand}</span>
            </div>
            <div class="product-card-body">
              <span class="product-card-brand">${product.brand}</span>
              <h3>${product.name}</h3>
              <p class="product-card-subtitle">${product.description}</p>
              <div class="product-card-price-row">
                <strong>${product.price}</strong>
                ${product.oldPrice ? `<span>${product.oldPrice}</span>` : ""}
              </div>
            </div>
          </a>
          <button class="add-cart-btn" type="button" data-product-id="${product.id}">Сагсанд нэмэх</button>
        </article>
      `
    )
    .join("");
}

function initCategoryHelpers() {
  bindCategoryDropdown();
  renderHomeCategoryGrid();
  renderFeaturedProductGrid();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCategoryHelpers);
} else {
  initCategoryHelpers();
}

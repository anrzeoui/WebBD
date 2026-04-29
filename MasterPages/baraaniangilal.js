const btn = document.getElementById("categoryToggle");
const panel = document.getElementById("categoryPanel");
const items = document.querySelectorAll(".cat-item");
const contents = document.querySelectorAll(".cat-content");

const storeData = window.SHOPPY_DATA || { categories: [], products: [], featuredProductIds: [] };

function openPanel() {
  if (!btn || !panel) {
    return;
  }

  panel.classList.add("active");
  btn.setAttribute("aria-expanded", "true");
}

function closePanel() {
  if (!btn || !panel) {
    return;
  }

  panel.classList.remove("active");
  btn.setAttribute("aria-expanded", "false");
}

function setActiveCategory(categoryId) {
  items.forEach((item) => {
    item.classList.toggle("active", item.dataset.cat === categoryId);
  });

  contents.forEach((content) => {
    content.classList.toggle("active", content.id === categoryId);
  });
}

function formatPrice(price) {
  return new Intl.NumberFormat("mn-MN").format(price) + "\u20AE";
}

function getCategoryLink(categoryId, subcategoryId) {
  const url = new URL("../master/baraa.html", window.location.href);

  if (categoryId) {
    url.searchParams.set("category", categoryId);
  }

  if (subcategoryId) {
    url.searchParams.set("subcategory", subcategoryId);
  }

  return url.toString();
}

function getProductLink(product) {
  const url = new URL(getCategoryLink(product.category, product.subcategory));
  url.searchParams.set("product", product.id);
  return url.toString();
}

function renderHomeCategories() {
  const categoryGrid = document.getElementById("homeCategoryGrid");

  if (!categoryGrid) {
    return;
  }

  categoryGrid.innerHTML = storeData.categories
    .map((category) => {
      const topSubcategories = category.subcategories.slice(0, 3)
        .map((sub) => `<a class="home-category-chip" href="${getCategoryLink(category.id, sub.id)}">${sub.name}</a>`)
        .join("");

      return `
        <article class="home-category-card">
          <p class="home-category-label">Ангилал</p>
          <h3><a href="${getCategoryLink(category.id)}">${category.name}</a></h3>
          <p>${category.description}</p>
          <div class="home-category-chips">${topSubcategories}</div>
        </article>
      `;
    })
    .join("");
}

function renderFeaturedProducts() {
  const featuredGrid = document.getElementById("featuredProductGrid");

  if (!featuredGrid) {
    return;
  }

  const featuredProducts = storeData.featuredProductIds
    .map((productId) => storeData.products.find((product) => product.id === productId))
    .filter(Boolean);

  featuredGrid.innerHTML = featuredProducts
    .map((product) => `
      <article class="product-card product-card--compact">
        <a class="product-card-link" href="${getProductLink(product)}">
          <div class="product-card-media" style="background:${product.imageTone}">
            <span>${product.imageLabel}</span>
          </div>
          <div class="product-card-body">
            <p class="product-card-brand">${product.brand}</p>
            <h3>${product.name}</h3>
            <p class="product-card-subtitle">${product.shortDescription}</p>
            <div class="product-card-meta">
              <strong>${formatPrice(product.price)}</strong>
              <span>${product.badge || "Онцлох"}</span>
            </div>
          </div>
        </a>
      </article>
    `)
    .join("");
}

function setupSearchNavigation() {
  const searchInput = document.querySelector(".search-input");
  const searchButton = document.querySelector(".search-btn");
  const searchCategory = document.querySelector(".search-category");

  if (!searchInput || !searchButton) {
    return;
  }

  const searchAction = () => {
    const query = searchInput.value.trim();
    const url = new URL("../master/baraa.html", window.location.href);
    const categoryMap = {
      "Электрон бараа": "electronics",
      "Гоо сайхан": "cosmetics",
      "Гэр ахуйн бараа": "household",
      "Эрэгтэй": "men",
      "Эмэгтэй": "women",
      "Технологи": "tech",
      "Хүүхдийн": "kids",
      "Гэрийн тавилга": "home"
    };
    const selectedCategory = searchCategory ? categoryMap[searchCategory.value] : "";

    if (selectedCategory) {
      url.searchParams.set("category", selectedCategory);
    }

    if (query) {
      url.searchParams.set("q", query);
    }

    window.location.href = url.toString();
  };

  searchButton.addEventListener("click", searchAction);
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      searchAction();
    }
  });
}

if (btn && panel) {
  btn.addEventListener("click", () => {
    const isOpen = panel.classList.contains("active");

    if (isOpen) {
      closePanel();
      return;
    }

    openPanel();
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".category-menu")) {
      closePanel();
    }
  });

  btn.addEventListener("focus", openPanel);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePanel();
    }
  });
}

items.forEach((item) => {
  const categoryId = item.dataset.cat;

  if (!categoryId) {
    return;
  }

  item.addEventListener("focus", () => setActiveCategory(categoryId));
  item.addEventListener("click", () => {
    setActiveCategory(categoryId);
    openPanel();
  });
});

renderHomeCategories();
renderFeaturedProducts();
setupSearchNavigation();

const storeData = window.SHOPPY_DATA || { categories: [], products: [] };

const params = new URLSearchParams(window.location.search);
const searchQuery = (params.get("q") || "").trim();

let selectedProduct = storeData.products.find((product) => product.id === params.get("product")) || null;
let categoryId = params.get("category") || "";
let subcategoryId = params.get("subcategory") || "";

if (selectedProduct) {
  categoryId = selectedProduct.category;
  subcategoryId = selectedProduct.subcategory;
}

const categoryMap = new Map(storeData.categories.map((category) => [category.id, category]));

const titleElement = document.getElementById("pageTitle");
const subtitleElement = document.getElementById("pageSubtitle");
const labelElement = document.getElementById("pageLabel");
const breadcrumbElement = document.getElementById("catalogBreadcrumb");
const sidebarElement = document.getElementById("catalogSidebar");
const resultCountElement = document.getElementById("resultCount");
const chipContainer = document.getElementById("subcategoryChips");
const productGridElement = document.getElementById("productGrid");
const detailSectionElement = document.getElementById("productDetailSection");

function setupCategoryDropdown() {
  const btn = document.getElementById("categoryToggle");
  const panel = document.getElementById("categoryPanel");
  const items = document.querySelectorAll(".cat-item");
  const contents = document.querySelectorAll(".cat-content");

  const openPanel = () => {
    if (!btn || !panel) {
      return;
    }

    panel.classList.add("active");
    btn.setAttribute("aria-expanded", "true");
  };

  const closePanel = () => {
    if (!btn || !panel) {
      return;
    }

    panel.classList.remove("active");
    btn.setAttribute("aria-expanded", "false");
  };

  const setActiveCategory = (nextCategoryId) => {
    items.forEach((item) => {
      item.classList.toggle("active", item.dataset.cat === nextCategoryId);
    });

    contents.forEach((content) => {
      content.classList.toggle("active", content.id === nextCategoryId);
    });
  };

  if (categoryId) {
    setActiveCategory(categoryId);
  }

  if (!btn || !panel) {
    return;
  }

  btn.addEventListener("click", () => {
    if (panel.classList.contains("active")) {
      closePanel();
      return;
    }

    openPanel();
  });

  btn.addEventListener("focus", openPanel);

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".category-menu")) {
      closePanel();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePanel();
    }
  });

  items.forEach((item) => {
    const nextCategoryId = item.dataset.cat;

    if (!nextCategoryId) {
      return;
    }

    item.addEventListener("focus", () => setActiveCategory(nextCategoryId));
    item.addEventListener("click", () => {
      setActiveCategory(nextCategoryId);
      openPanel();
    });
  });
}

function setupSearchNavigation() {
  const searchInput = document.querySelector(".search-area .search-input");
  const searchButton = document.querySelector(".search-area .search-btn");
  const searchCategory = document.querySelector(".search-area .search-category");

  if (!searchInput || !searchButton) {
    return;
  }

  searchInput.value = searchQuery;

  if (searchCategory && categoryId) {
    searchCategory.value = categoryId;
  }

  const searchAction = () => {
    const query = searchInput.value.trim();
    const url = new URL(window.location.pathname, window.location.href);
    const nextCategoryId = searchCategory ? searchCategory.value : "";

    if (nextCategoryId) {
      url.searchParams.set("category", nextCategoryId);
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

function formatPrice(price) {
  return new Intl.NumberFormat("mn-MN").format(price) + "\u20AE";
}

function buildCatalogUrl(nextCategoryId, nextSubcategoryId, productId, query) {
  const url = new URL(window.location.pathname, window.location.href);

  if (nextCategoryId) {
    url.searchParams.set("category", nextCategoryId);
  }

  if (nextSubcategoryId) {
    url.searchParams.set("subcategory", nextSubcategoryId);
  }

  if (productId) {
    url.searchParams.set("product", productId);
  }

  if (query) {
    url.searchParams.set("q", query);
  }

  return url.toString();
}

function getCategoryName(id) {
  return categoryMap.get(id)?.name || "Бүх бараа";
}

function getSubcategoryName(category, id) {
  return category?.subcategories.find((subcategory) => subcategory.id === id)?.name || "";
}

function filterProducts() {
  return storeData.products.filter((product) => {
    const matchesCategory = !categoryId || product.category === categoryId;
    const matchesSubcategory = !subcategoryId || product.subcategory === subcategoryId;
    const matchesQuery = !searchQuery
      || [product.name, product.brand, product.shortDescription, product.description]
        .join(" ")
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSubcategory && matchesQuery;
  });
}

function renderBreadcrumb(category, subcategoryName) {
  const parts = [
    `<a href="../MasterPages/MasterPage.html">Нүүр</a>`,
    `<a href="baraa.html">Бараа</a>`
  ];

  if (categoryId && category) {
    parts.push(`<a href="${buildCatalogUrl(categoryId, "", "", searchQuery)}">${category.name}</a>`);
  }

  if (subcategoryName) {
    parts.push(`<a href="${buildCatalogUrl(categoryId, subcategoryId, "", searchQuery)}">${subcategoryName}</a>`);
  }

  if (selectedProduct) {
    parts.push(`<span>${selectedProduct.name}</span>`);
  }

  breadcrumbElement.innerHTML = parts.join("<span>/</span>");
}

function renderSidebar() {
  sidebarElement.innerHTML = storeData.categories
    .map((category) => {
      const subLinks = category.subcategories
        .map((subcategory) => `
          <a class="catalog-sub-link ${category.id === categoryId && subcategory.id === subcategoryId ? "active" : ""}"
             href="${buildCatalogUrl(category.id, subcategory.id, "", searchQuery)}">
            ${subcategory.name}
          </a>
        `)
        .join("");

      return `
        <section class="catalog-side-group">
          <a class="catalog-side-link ${category.id === categoryId ? "active" : ""}"
             href="${buildCatalogUrl(category.id, "", "", searchQuery)}">
            ${category.name}
          </a>
          <div class="catalog-sub-list">${subLinks}</div>
        </section>
      `;
    })
    .join("");
}

function renderHero(category, subcategoryName, products) {
  if (selectedProduct) {
    labelElement.textContent = selectedProduct.brand;
    titleElement.textContent = selectedProduct.name;
    subtitleElement.textContent = selectedProduct.description;
    return;
  }

  if (subcategoryName) {
    labelElement.textContent = category.name;
    titleElement.textContent = subcategoryName;
    subtitleElement.textContent = `${category.name} ангиллын ${subcategoryName.toLowerCase()} бараануудыг эндээс үзнэ.`;
    return;
  }

  if (category) {
    labelElement.textContent = "Category";
    titleElement.textContent = category.name;
    subtitleElement.textContent = category.description;
    return;
  }

  if (searchQuery) {
    labelElement.textContent = "Search result";
    titleElement.textContent = `"${searchQuery}" хайлтын үр дүн`;
    subtitleElement.textContent = `${products.length} бараа олдлоо. Илүү нарийвчлахын тулд ангилал сонгоорой.`;
    return;
  }

  labelElement.textContent = "Shoppy Catalog";
  titleElement.textContent = "Бүх бараа";
  subtitleElement.textContent = "Ангилал, дэд ангилал эсвэл онцлох барааг сонгон дэлгэрэнгүй үзээрэй.";
}

function renderChips(category) {
  if (!category) {
    chipContainer.innerHTML = `<a class="catalog-chip active" href="baraa.html">Бүгд</a>`;
    return;
  }

  const allLink = `
    <a class="catalog-chip ${subcategoryId ? "" : "active"}"
       href="${buildCatalogUrl(category.id, "", "", searchQuery)}">
      Бүгд
    </a>
  `;

  const subcategoryLinks = category.subcategories
    .map((subcategory) => `
      <a class="catalog-chip ${subcategory.id === subcategoryId ? "active" : ""}"
         href="${buildCatalogUrl(category.id, subcategory.id, "", searchQuery)}">
        ${subcategory.name}
      </a>
    `)
    .join("");

  chipContainer.innerHTML = allLink + subcategoryLinks;
}

function renderDetail(products, category, subcategoryName) {
  if (!selectedProduct) {
    detailSectionElement.classList.add("is-hidden");
    detailSectionElement.innerHTML = "";
    return;
  }

  const relatedProducts = products
    .filter((product) => product.id !== selectedProduct.id)
    .slice(0, 4);

  const relatedMarkup = relatedProducts.length
    ? relatedProducts.map((product) => `
        <a class="related-product-card" href="${buildCatalogUrl(product.category, product.subcategory, product.id, searchQuery)}">
          <div class="related-product-media" style="background:${product.imageTone}">
            <span>${product.imageLabel}</span>
          </div>
          <div>
            <strong>${product.name}</strong>
            <p>${formatPrice(product.price)}</p>
          </div>
        </a>
      `).join("")
    : `<p class="catalog-empty-inline">Энэ ангилалд өөр бараа нэмэгдэж ороогүй байна.</p>`;

  detailSectionElement.classList.remove("is-hidden");
  detailSectionElement.innerHTML = `
    <div class="product-detail-card">
      <div class="product-detail-media" style="background:${selectedProduct.imageTone}">
        <span>${selectedProduct.imageLabel}</span>
      </div>

      <div class="product-detail-content">
        <div class="product-detail-top">
          <p class="section-eyebrow">${category ? category.name : "Бараа"}${subcategoryName ? ` / ${subcategoryName}` : ""}</p>
          <h2>${selectedProduct.name}</h2>
          <p class="product-detail-brand">${selectedProduct.brand}</p>
          <p class="product-detail-description">${selectedProduct.description}</p>
        </div>

        <div class="product-price-row">
          <strong>${formatPrice(selectedProduct.price)}</strong>
          <span>${formatPrice(selectedProduct.oldPrice)}</span>
          <em>${selectedProduct.badge || "Онцлох"}</em>
        </div>

        <div class="product-info-grid">
          <div class="product-info-box">
            <h3>Үндсэн мэдээлэл</h3>
            <ul class="detail-list">
              ${selectedProduct.details.map((detail) => `<li>${detail}</li>`).join("")}
            </ul>
          </div>
          <div class="product-info-box">
            <h3>Сонголтууд</h3>
            <p><strong>Хэмжээ:</strong> ${selectedProduct.sizes.join(", ")}</p>
            <p><strong>Өнгө:</strong> ${selectedProduct.colors.join(", ")}</p>
            <p><strong>Үнэлгээ:</strong> ${selectedProduct.rating} / 5</p>
            <p><strong>Сэтгэгдэл:</strong> ${selectedProduct.reviews}</p>
          </div>
        </div>

        <div class="catalog-hero-actions">
          <a class="search-btn" href="${buildCatalogUrl(selectedProduct.category, selectedProduct.subcategory, "", searchQuery)}">Жагсаалт руу буцах</a>
          <a class="catalog-text-link" href="../MasterPages/MasterPage.html">Нүүр хуудас руу</a>
        </div>

        <div class="related-products">
          <div class="catalog-results-header">
            <div>
              <p class="section-eyebrow">Related</p>
              <h3>Ижил төрлийн бараанууд</h3>
            </div>
          </div>
          <div class="related-products-grid">${relatedMarkup}</div>
        </div>
      </div>
    </div>
  `;
}

function renderProducts(products) {
  if (!products.length) {
    productGridElement.innerHTML = `
      <div class="catalog-empty">
        <h3>Тохирох бараа олдсонгүй</h3>
        <p>Өөр ангилал сонгох эсвэл нүүр хуудас руу буцаж онцлох бараануудыг үзээрэй.</p>
        <a class="search-btn" href="../MasterPages/MasterPage.html">Нүүр хуудас руу буцах</a>
      </div>
    `;
    return;
  }

  productGridElement.innerHTML = products
    .map((product) => `
      <article class="product-card ${selectedProduct?.id === product.id ? "product-card--active" : ""}">
        <a class="product-card-link" href="${buildCatalogUrl(product.category, product.subcategory, product.id, searchQuery)}">
          <div class="product-card-media" style="background:${product.imageTone}">
            <span>${product.imageLabel}</span>
          </div>
          <div class="product-card-body">
            <p class="product-card-brand">${product.brand}</p>
            <h3>${product.name}</h3>
            <p class="product-card-subtitle">${product.shortDescription}</p>
            <div class="product-card-price-row">
              <strong>${formatPrice(product.price)}</strong>
              <span>${formatPrice(product.oldPrice)}</span>
            </div>
            <div class="product-card-meta">
              <span>${product.badge || "Онцлох"}</span>
              <span>${product.rating} / 5</span>
            </div>
          </div>
        </a>
      </article>
    `)
    .join("");
}

function renderPage() {
  const category = categoryMap.get(categoryId) || null;
  const subcategoryName = getSubcategoryName(category, subcategoryId);
  const products = filterProducts();

  renderBreadcrumb(category, subcategoryName);
  renderSidebar();
  renderHero(category, subcategoryName, products);
  renderChips(category);
  renderDetail(products, category, subcategoryName);
  renderProducts(products);

  resultCountElement.textContent = `${products.length} бараа`;
}

setupCategoryDropdown();
setupSearchNavigation();
renderPage();

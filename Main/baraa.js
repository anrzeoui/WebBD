const products = window.products || [];
const categories = window.shopCategories || [];
const params = new URLSearchParams(window.location.search);

const catalogSearchForm = document.getElementById("catalogSearchForm");
const catalogSearchCategory = document.getElementById("catalogSearchCategory");
const catalogSearchInput = document.getElementById("catalogSearchInput");
const catalogBreadcrumb = document.getElementById("catalogBreadcrumb");
const catalogHeroTitle = document.getElementById("catalogHeroTitle");
const catalogHeroText = document.getElementById("catalogHeroText");
const catalogHeroActions = document.getElementById("catalogHeroActions");
const catalogSideList = document.getElementById("catalogSideList");
const catalogChipRow = document.getElementById("catalogChipRow");
const catalogOverline = document.getElementById("catalogOverline");
const catalogTitle = document.getElementById("catalogTitle");
const catalogCount = document.getElementById("catalogCount");
const productGrid = document.getElementById("productGrid");
const productDetailSection = document.getElementById("productDetailSection");
const productDetailCard = document.getElementById("productDetailCard");
const relatedProductsSection = document.getElementById("relatedProductsSection");
const relatedProductsGrid = document.getElementById("relatedProductsGrid");

function normalizeText(value) {
  return String(value || "").trim().toLowerCase();
}

function formatCategoryUrl(categoryId, subcategoryId) {
  const nextParams = new URLSearchParams();
  if (categoryId) {
    nextParams.set("category", categoryId);
  }
  if (subcategoryId) {
    nextParams.set("subcategory", subcategoryId);
  }
  return `baraa.html${nextParams.toString() ? `?${nextParams.toString()}` : ""}`;
}

function getCategory(categoryId) {
  const normalizedId = normalizeText(categoryId);
  return categories.find(
    (category) => category.id === normalizedId || normalizeText(category.title) === normalizedId
  );
}

function getSubcategory(category, subcategoryId) {
  const normalizedId = normalizeText(subcategoryId);
  return category?.subcategories.find(
    (subcategory) =>
      subcategory.id === normalizedId ||
      normalizeText(subcategory.title) === normalizedId ||
      subcategory.terms.some((term) => normalizeText(term) === normalizedId)
  );
}

function getProductCategoryIds(product) {
  return product.categoryIds || [product.categoryId].filter(Boolean);
}

function getProductSubcategoryIds(product) {
  return product.subcategoryIds || [product.subcategoryId].filter(Boolean);
}

function getProductText(product) {
  return [
    product.name,
    product.brand,
    product.category,
    product.subcategory,
    product.description,
    ...(product.tags || []),
  ]
    .join(" ")
    .toLowerCase();
}

function matchesCategory(product, categoryId) {
  if (!categoryId) {
    return true;
  }

  const normalizedId = normalizeText(categoryId);
  return (
    getProductCategoryIds(product).includes(normalizedId) ||
    normalizeText(product.category).includes(normalizedId)
  );
}

function matchesSubcategory(product, subcategory) {
  if (!subcategory) {
    return true;
  }

  const productSubcategories = getProductSubcategoryIds(product);
  const productText = getProductText(product);

  return (
    productSubcategories.includes(subcategory.id) ||
    subcategory.terms.some((term) => productText.includes(normalizeText(term)))
  );
}

function getRecentIds() {
  try {
    const parsed = JSON.parse(localStorage.getItem("recentProductIds") || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveRecentProduct(productId) {
  const nextIds = [productId, ...getRecentIds().filter((id) => id !== productId)].slice(0, 8);
  localStorage.setItem("recentProductIds", JSON.stringify(nextIds));
}

function getRecentProducts() {
  return getRecentIds()
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean);
}

function getCartItems() {
  try {
    const parsed = JSON.parse(localStorage.getItem("cartItems") || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function normalizePrice(priceText) {
  return Number(String(priceText).replace(/[^\d]/g, ""));
}

function addToCart(productId, button) {
  const product = products.find((item) => item.id === productId);
  if (!product) {
    return;
  }

  const items = getCartItems();
  const existing = items.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity = Number(existing.quantity || 0) + 1;
  } else {
    items.push({
      id: product.id,
      name: product.name,
      brand: product.brand,
      category: product.category,
      price: product.price,
      size: product.size,
      quantity: 1,
      image: product.image,
      numericPrice: normalizePrice(product.price),
    });
  }

  localStorage.setItem("cartItems", JSON.stringify(items));

  if (button) {
    const originalText = button.textContent;
    button.textContent = "Нэмэгдлээ";
    button.disabled = true;
    window.setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
    }, 1100);
  }
}

function getFilteredProducts() {
  if (params.get("view") === "recent") {
    return getRecentProducts();
  }

  const category = getCategory(params.get("category"));
  const subcategory = getSubcategory(category, params.get("subcategory"));
  const query = normalizeText(params.get("q"));

  return products.filter((product) => {
    const categoryMatch = matchesCategory(product, category?.id || params.get("category"));
    const subcategoryMatch = matchesSubcategory(product, subcategory);
    const queryMatch = !query || getProductText(product).includes(query);
    return categoryMatch && subcategoryMatch && queryMatch;
  });
}

function getPageContext() {
  const product = products.find((item) => item.id === params.get("id"));
  const category = getCategory(params.get("category") || product?.categoryId);
  const subcategory = getSubcategory(category, params.get("subcategory") || product?.subcategoryId);
  const query = params.get("q") || "";
  const isRecent = params.get("view") === "recent";

  return { product, category, subcategory, query, isRecent };
}

function renderSearchOptions(activeCategoryId) {
  if (!catalogSearchCategory) {
    return;
  }

  catalogSearchCategory.innerHTML = [
    '<option value="">Бүгд</option>',
    ...categories.map(
      (category) =>
        `<option value="${category.id}" ${category.id === activeCategoryId ? "selected" : ""}>${category.title}</option>`
    ),
  ].join("");
}

function renderBreadcrumb(context) {
  if (!catalogBreadcrumb) {
    return;
  }

  const pieces = [`<a href="baraa.html">Бүх бараа</a>`];
  if (context.isRecent) {
    pieces.push("<span>/</span><span>Сүүлд үзсэн</span>");
  }
  if (context.category) {
    pieces.push(`<span>/</span><a href="${formatCategoryUrl(context.category.id)}">${context.category.title}</a>`);
  }
  if (context.subcategory) {
    pieces.push(
      `<span>/</span><a href="${formatCategoryUrl(context.category.id, context.subcategory.id)}">${context.subcategory.title}</a>`
    );
  }
  if (context.product) {
    pieces.push(`<span>/</span><span>${context.product.name}</span>`);
  }
  if (context.query) {
    pieces.push(`<span>/</span><span>"${context.query}"</span>`);
  }

  catalogBreadcrumb.innerHTML = pieces.join("");
}

function renderHero(context, items) {
  if (!catalogHeroTitle || !catalogHeroText || !catalogHeroActions) {
    return;
  }

  if (context.product) {
    catalogHeroTitle.textContent = context.product.name;
    catalogHeroText.textContent = `${context.product.brand} брэндийн ${context.product.category} ангиллын бараа.`;
  } else if (context.isRecent) {
    catalogHeroTitle.textContent = "Сүүлд үзсэн бараа";
    catalogHeroText.textContent = "Таны хамгийн сүүлд нээж үзсэн бараанууд энд хадгалагдана.";
  } else if (context.subcategory) {
    catalogHeroTitle.textContent = context.subcategory.title;
    catalogHeroText.textContent = `${context.category.title} ангиллын ${context.subcategory.title.toLowerCase()} төрлийн бараанууд.`;
  } else if (context.category) {
    catalogHeroTitle.textContent = context.category.title;
    catalogHeroText.textContent = context.category.description;
  } else if (context.query) {
    catalogHeroTitle.textContent = `"${context.query}" хайлт`;
    catalogHeroText.textContent = `${items.length} тохирох бараа олдлоо.`;
  } else {
    catalogHeroTitle.textContent = "Бүх бараа";
    catalogHeroText.textContent = "Ангилал, дэд ангилал, хайлтаар бараагаа шүүж сонгоно уу.";
  }

  const chips = (context.category?.subcategories || categories.slice(0, 5)).map((item) => {
    const isSubcategory = Boolean(context.category);
    const href = isSubcategory
      ? formatCategoryUrl(context.category.id, item.id)
      : formatCategoryUrl(item.id);
    const active = context.subcategory?.id === item.id || context.category?.id === item.id;
    return `<a class="catalog-chip ${active ? "active" : ""}" href="${href}">${item.title}</a>`;
  });

  catalogHeroActions.innerHTML = chips.join("");
}

function renderSidebar(context) {
  if (!catalogSideList) {
    return;
  }

  catalogSideList.innerHTML = categories
    .map(
      (category) => `
        <div class="catalog-side-group">
          <a class="catalog-side-link ${context.category?.id === category.id ? "active" : ""}" href="${formatCategoryUrl(category.id)}">
            ${category.title}
          </a>
          <div class="catalog-sub-list">
            ${category.subcategories
              .map(
                (subcategory) => `
                  <a class="catalog-sub-link ${
                    context.category?.id === category.id && context.subcategory?.id === subcategory.id ? "active" : ""
                  }" href="${formatCategoryUrl(category.id, subcategory.id)}">
                    ${subcategory.title}
                  </a>
                `
              )
              .join("")}
          </div>
        </div>
      `
    )
    .join("");
}

function renderChips(context) {
  if (!catalogChipRow) {
    return;
  }

  const activeCategory = context.category || categories[0];
  catalogChipRow.innerHTML = [
    `<a class="catalog-chip ${!context.subcategory ? "active" : ""}" href="${formatCategoryUrl(activeCategory?.id)}">Бүгд</a>`,
    ...(activeCategory?.subcategories || []).map(
      (subcategory) =>
        `<a class="catalog-chip ${context.subcategory?.id === subcategory.id ? "active" : ""}" href="${formatCategoryUrl(
          activeCategory.id,
          subcategory.id
        )}">${subcategory.title}</a>`
    ),
  ].join("");
}

function renderProductCard(product) {
  return `
    <article class="product-card">
      <a class="product-card-link" href="baraa.html?id=${product.id}">
        <div class="product-card-media" style="background: linear-gradient(135deg, ${product.colorA}, ${product.colorB});">
          <img src="${product.image}" alt="${product.name}" />
        </div>
        <div class="product-card-body">
          <span class="product-card-brand">${product.brand}</span>
          <h3>${product.name}</h3>
          <p class="product-card-subtitle">${product.description}</p>
          <div class="product-card-price-row">
            <strong>${product.price}</strong>
            ${product.oldPrice ? `<span>${product.oldPrice}</span>` : ""}
          </div>
          <div class="product-card-meta">
            <span>${product.subcategory}</span>
          </div>
        </div>
      </a>
      <div class="card-action-row product-card-body">
        <button class="primary-btn" type="button" data-add-cart="${product.id}">Сагсанд нэмэх</button>
      </div>
    </article>
  `;
}

function renderProducts(context, items) {
  if (catalogTitle) {
    catalogTitle.textContent = context.product ? "Төстэй бараа" : context.category?.title || "Бараанууд";
  }
  if (catalogOverline) {
    catalogOverline.textContent = context.subcategory?.title || context.query || "Results";
  }
  if (catalogCount) {
    catalogCount.textContent = `${items.length} бараа`;
  }
  if (!productGrid) {
    return;
  }

  if (!items.length) {
    productGrid.innerHTML = `
      <div class="catalog-empty">
        <h2>Бараа олдсонгүй</h2>
        <p>Өөр ангилал эсвэл хайлтаар дахин үзээрэй.</p>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = items.map(renderProductCard).join("");
}

function renderDetail(context) {
  if (!productDetailSection || !productDetailCard || !context.product) {
    productDetailSection?.classList.add("is-hidden");
    return;
  }

  const product = context.product;
  saveRecentProduct(product.id);
  productDetailSection.classList.remove("is-hidden");
  productDetailCard.innerHTML = `
    <div class="product-detail-media" style="background: linear-gradient(135deg, ${product.colorA}, ${product.colorB});">
      <img src="${product.image}" alt="${product.name}" />
    </div>
    <div class="product-detail-content">
      <div class="product-detail-top">
        <span class="product-detail-brand">${product.brand}</span>
        <h2>${product.name}</h2>
        <p class="product-detail-description">${product.description}</p>
      </div>
      <div class="product-price-row">
        <strong>${product.price}</strong>
        ${product.oldPrice ? `<span>${product.oldPrice}</span>` : ""}
        <em>${product.subcategory}</em>
      </div>
      <div class="product-info-grid">
        <div class="product-info-box">
          <h3>Мэдээлэл</h3>
          <ul class="detail-list">
            <li>Ангилал: ${product.category}</li>
            <li>Төрөл: ${product.subcategory}</li>
            <li>Хэмжээ: ${product.size}</li>
          </ul>
        </div>
        <div class="product-info-box">
          <h3>Үйлдэл</h3>
          <div class="product-detail-actions">
            <button class="primary-btn" type="button" data-add-cart="${product.id}">Сагсанд нэмэх</button>
            <a class="secondary-btn" href="basket.html">Сагс харах</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderRelated(context) {
  if (!relatedProductsSection || !relatedProductsGrid || !context.product) {
    relatedProductsSection?.classList.add("is-hidden");
    return;
  }

  const related = products
    .filter((product) => product.id !== context.product.id && matchesCategory(product, context.product.categoryId))
    .slice(0, 4);

  relatedProductsSection.classList.toggle("is-hidden", !related.length);
  relatedProductsGrid.innerHTML = related
    .map(
      (product) => `
        <a class="related-product-card" href="baraa.html?id=${product.id}">
          <div class="related-product-media" style="background: linear-gradient(135deg, ${product.colorA}, ${product.colorB});">
            <img src="${product.image}" alt="${product.name}" />
          </div>
          <div>
            <strong>${product.name}</strong>
            <span>${product.price}</span>
          </div>
        </a>
      `
    )
    .join("");
}

function initSearch(context) {
  renderSearchOptions(context.category?.id || "");
  if (catalogSearchInput) {
    catalogSearchInput.value = context.query;
  }

  catalogSearchForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const nextParams = new URLSearchParams();
    const categoryId = catalogSearchCategory?.value;
    const query = catalogSearchInput?.value.trim();
    if (categoryId) {
      nextParams.set("category", categoryId);
    }
    if (query) {
      nextParams.set("q", query);
    }
    window.location.href = `baraa.html${nextParams.toString() ? `?${nextParams.toString()}` : ""}`;
  });
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add-cart]");
  if (!button) {
    return;
  }

  addToCart(button.dataset.addCart, button);
});

function initPage() {
  const context = getPageContext();
  const items = context.product
    ? products.filter((product) => product.id !== context.product.id && matchesCategory(product, context.product.categoryId)).slice(0, 8)
    : getFilteredProducts();

  initSearch(context);
  renderBreadcrumb(context);
  renderHero(context, items);
  renderSidebar(context);
  renderChips(context);
  renderDetail(context);
  renderProducts(context, items);
  renderRelated(context);
}

initPage();

const products = window.products || [];
const megaCategories = window.megaCategories || [];

const searchInput = document.getElementById("searchInput");
const searchCategory = document.getElementById("searchCategory");
const searchBtn = document.getElementById("searchBtn");
const searchResults = document.getElementById("searchResults");
const resultsWrap = document.getElementById("resultsWrap");
const searchState = document.getElementById("searchState");
const resultsTitle = document.getElementById("resultsTitle");
const resultsCount = document.getElementById("resultsCount");
const categoryMenuToggle = document.getElementById("categoryMenuToggle");
const categoryMega = document.getElementById("categoryMega");
const megaCategoryList = document.getElementById("megaCategoryList");
const megaCategoryTitle = document.getElementById("megaCategoryTitle");
const megaColumns = document.getElementById("megaColumns");
const megaViewAll = document.getElementById("megaViewAll");
const megaPromo = document.getElementById("megaPromo");
const megaPromoImage = document.getElementById("megaPromoImage");
const megaPromoText = document.getElementById("megaPromoText");
const userDrawerToggle = document.getElementById("userDrawerToggle");
const userDrawer = document.getElementById("userDrawer");
const userDrawerOverlay = document.getElementById("userDrawerOverlay");
const userDrawerClose = document.getElementById("userDrawerClose");
const drawerUserName = document.getElementById("drawerUserName");
const drawerUserEmail = document.getElementById("drawerUserEmail");
const drawerWalletBalance = document.querySelector(".drawer-wallet-balance");
const featuredProductGrid = document.getElementById("featuredProductGrid");
let activeMegaCategoryId = megaCategories[0]?.id || "";

function normalizePrice(priceText) {
  return Number(String(priceText).replace(/[^\d]/g, ""));
}

function normalizeText(value) {
  return String(value || "").trim().toLowerCase();
}

function getProductText(product) {
  return [
    product.name,
    product.brand,
    product.category,
    product.description,
    ...(product.tags || []),
  ]
    .join(" ")
    .toLowerCase();
}

function findMegaCategory(categoryId) {
  return megaCategories.find((category) => category.id === categoryId) || megaCategories[0];
}

function getCategoryProducts(category) {
  const categoryTerm = normalizeText(category.searchCategory || category.title);

  return products.filter((product) => {
    const categoryIds = product.categoryIds || [product.categoryId];
    const productCategory = normalizeText(product.category);
    const productText = getProductText(product);

    return (
      categoryIds.includes(category.id) ||
      categoryIds.includes(category.searchCategory) ||
      productCategory.includes(categoryTerm) ||
      productText.includes(categoryTerm)
    );
  });
}

function getLinkProducts(category, link) {
  const categoryProducts = getCategoryProducts(category);
  const pool = categoryProducts.length ? categoryProducts : products;
  const terms = (link.terms?.length ? link.terms : [link.label]).map(normalizeText);
  const exactMatches = pool.filter((product) => {
    const productText = getProductText(product);
    return terms.some((term) => productText.includes(term));
  });

  return exactMatches.length ? exactMatches : categoryProducts;
}

function setSearchCategoryValue(categoryName) {
  if (!searchCategory) {
    return;
  }

  const normalizedCategory = normalizeText(categoryName);
  const options = Array.from(searchCategory.options);
  const matchedOption = options.find(
    (option) => normalizeText(option.value || option.textContent) === normalizedCategory
  );

  searchCategory.value = matchedOption?.value || "Бүгд";
}

function renderResults(items, title = "Хайлтын илэрц") {
  if (!searchResults || !resultsWrap || !searchState || !resultsCount) {
    return;
  }

  searchState.classList.add("hidden");
  resultsWrap.classList.remove("hidden");
  if (resultsTitle) {
    resultsTitle.textContent = title;
  }
  resultsCount.textContent = `${items.length} бараа`;

  if (!items.length) {
    searchResults.innerHTML = `
      <article class="product-card">
        <div class="product-body">
          <div class="product-name">Илэрц олдсонгүй</div>
          <p class="product-desc">Өөр түлхүүр үгээр дахин хайж үзээрэй.</p>
        </div>
      </article>
    `;
    return;
  }

  searchResults.innerHTML = items
    .map(
      (product) => `
        <article class="product-card" style="--color-a:${product.colorA}; --color-b:${product.colorB};">
          <a class="product-thumb" href="baraa.html?id=${product.id}" aria-label="${product.name} дэлгэрэнгүй">
            <img src="${product.image}" alt="${product.name}" />
            <div class="brand-badge">${product.brand}</div>
          </a>
          <div class="product-body">
            <a class="product-name product-link" href="baraa.html?id=${product.id}">${product.name}</a>
            <p class="product-desc">${product.description}</p>
            <div class="product-meta">
              <a class="product-category" href="baraa.html?category=${encodeURIComponent(product.category)}">${product.category}</a>
              <span class="product-price">${product.price}</span>
            </div>
            <button class="add-cart-btn" type="button" data-product-id="${product.id}">Сагсанд нэмэх</button>
          </div>
        </article>
      `
    )
    .join("");
}

function filterProducts() {
  if (!searchInput || !searchCategory) {
    return;
  }

  const term = normalizeText(searchInput.value);
  const categoryName = searchCategory.value.trim();
  const category = normalizeText(categoryName);
  const isAllCategory = category === "бүгд" || category === "";

  if (!term && isAllCategory) {
    if (resultsWrap && searchState && searchResults && resultsCount) {
      resultsWrap.classList.add("hidden");
      searchState.classList.remove("hidden");
      searchResults.innerHTML = "";
      if (resultsTitle) {
        resultsTitle.textContent = "Хайлтын илэрц";
      }
      resultsCount.textContent = "0 бараа";
    }
    return;
  }

  const filtered = products.filter((product) => {
    const categoryIds = product.categoryIds || [product.categoryId];
    const categoryMatch =
      isAllCategory ||
      normalizeText(product.category).includes(category) ||
      categoryIds.some((categoryId) => normalizeText(categoryId) === category);
    const text = getProductText(product);

    return categoryMatch && (!term || text.includes(term));
  });

  renderResults(filtered, term ? "Хайлтын илэрц" : categoryName);
}

function renderMegaMenu(categoryId = activeMegaCategoryId) {
  if (!megaCategoryList || !megaColumns) {
    return;
  }

  activeMegaCategoryId = categoryId;
  const activeCategory = findMegaCategory(activeMegaCategoryId);

  megaCategoryList.innerHTML = megaCategories
    .map(
      (category) => `
        <button class="mega-category-item ${category.id === activeCategory.id ? "active" : ""}" type="button" data-category-id="${category.id}">
          <span class="mega-category-label">
            <span class="mega-category-icon">${category.icon}</span>
            <span>${category.title}</span>
          </span>
          <span>&gt;</span>
        </button>
      `
    )
    .join("");

  if (megaCategoryTitle) {
    megaCategoryTitle.textContent = activeCategory.title;
  }

  if (megaPromoImage) {
    megaPromoImage.src = activeCategory.promoImage;
  }

  if (megaPromoText) {
    megaPromoText.textContent = activeCategory.promoText || activeCategory.title;
  }

  megaColumns.innerHTML = activeCategory.groups
    .map(
      (group, groupIndex) => `
        <section class="mega-group">
          <h3>${group.title}</h3>
          <div class="mega-link-list">
            ${group.links
              .map(
                (link, linkIndex) => `
                  <button class="mega-link" type="button" data-group-index="${groupIndex}" data-link-index="${linkIndex}">
                    ${link.label}
                  </button>
                `
              )
              .join("")}
            <button class="mega-link mega-group-view" type="button" data-group-index="${groupIndex}" data-link-index="all">
              Бүгдийг үзэх &gt;
            </button>
          </div>
        </section>
      `
    )
    .join("");
}

function openCategoryMega() {
  if (!categoryMega || !categoryMenuToggle) {
    return;
  }

  renderMegaMenu();
  categoryMega.classList.remove("hidden");
  categoryMega.setAttribute("aria-hidden", "false");
  categoryMenuToggle.setAttribute("aria-expanded", "true");
}

function closeCategoryMega() {
  if (!categoryMega || !categoryMenuToggle) {
    return;
  }

  categoryMega.classList.add("hidden");
  categoryMega.setAttribute("aria-hidden", "true");
  categoryMenuToggle.setAttribute("aria-expanded", "false");
}

function toggleCategoryMega() {
  if (!categoryMega || categoryMega.classList.contains("hidden")) {
    openCategoryMega();
    return;
  }

  closeCategoryMega();
}

function openProductCatalog(categoryName, query) {
  const nextParams = new URLSearchParams();

  if (categoryName) {
    nextParams.set("category", categoryName);
  }

  if (query) {
    nextParams.set("q", query);
  }

  const queryString = nextParams.toString();
  window.location.href = `baraa.html${queryString ? `?${queryString}` : ""}`;
}

function getGroupProducts(category, group) {
  const categoryProducts = getCategoryProducts(category);
  const terms = group.links
    .flatMap((link) => (link.terms?.length ? link.terms : [link.label]))
    .map(normalizeText);
  const groupMatches = categoryProducts.filter((product) => {
    const productText = getProductText(product);
    return terms.some((term) => productText.includes(term));
  });

  return groupMatches.length ? groupMatches : categoryProducts;
}

function showActiveCategoryResults() {
  const activeCategory = findMegaCategory(activeMegaCategoryId);
  openProductCatalog(activeCategory.searchCategory || activeCategory.title);
}

function addToCart(productId) {
  const product = products.find((item) => item.id === String(productId));
  if (!product) {
    return;
  }

  const cartItem = {
    id: product.id,
    name: product.name,
    brand: product.brand,
    category: product.category,
    price: product.price,
    size: product.size,
    quantity: 1,
    image: product.image,
    numericPrice: normalizePrice(product.price),
  };

  const saved = localStorage.getItem("cartItems");
  let cartItems = [];

  try {
    const parsedItems = saved ? JSON.parse(saved) : [];
    cartItems = Array.isArray(parsedItems) ? parsedItems : [];
  } catch {
    cartItems = [];
  }

  const existingItem = cartItems.find((item) => item.id === cartItem.id);
  if (existingItem) {
    existingItem.quantity = Number(existingItem.quantity || 0) + 1;
  } else {
    cartItems.push(cartItem);
  }

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  window.location.href = "basket.html";
}

function openUserDrawer() {
  if (!userDrawer || !userDrawerOverlay) {
    return;
  }

  userDrawer.classList.add("open");
  userDrawerOverlay.classList.remove("hidden");
  document.body.classList.add("drawer-open");
  userDrawer.setAttribute("aria-hidden", "false");
}

function closeUserDrawer() {
  if (!userDrawer || !userDrawerOverlay) {
    return;
  }

  userDrawer.classList.remove("open");
  userDrawerOverlay.classList.add("hidden");
  document.body.classList.remove("drawer-open");
  userDrawer.setAttribute("aria-hidden", "true");
}

function syncUserDrawer() {
  const savedUser = JSON.parse(localStorage.getItem("registeredUser") || "null");
  const userName = savedUser?.name?.trim() || "Хэрэглэгч";
  const userEmail = savedUser?.email?.trim() || "user@example.com";
  let walletBalance = 0;

  try {
    const savedWallet = JSON.parse(localStorage.getItem("shoppyWallet") || "null");
    walletBalance = Number(savedWallet?.balance || 0);
  } catch {
    walletBalance = 0;
  }

  if (drawerUserName) {
    drawerUserName.textContent = userName;
  }

  if (drawerUserEmail) {
    drawerUserEmail.textContent = userEmail;
  }

  if (userDrawerToggle) {
    userDrawerToggle.textContent = userName;
  }

  if (drawerWalletBalance) {
    drawerWalletBalance.textContent = `${walletBalance.toLocaleString("mn-MN")} ₮`;
  }
}

if (searchInput) {
  searchInput.addEventListener("input", filterProducts);
}

if (searchCategory) {
  searchCategory.addEventListener("change", filterProducts);
}

if (searchBtn) {
  searchBtn.addEventListener("click", filterProducts);
}

if (searchResults) {
  searchResults.addEventListener("click", (event) => {
    const button = event.target.closest("[data-product-id]");
    if (!button) {
      return;
    }

    addToCart(button.dataset.productId);
  });
}

if (featuredProductGrid) {
  featuredProductGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-product-id]");
    if (!button) {
      return;
    }

    event.preventDefault();
    addToCart(button.dataset.productId);
  });
}

if (categoryMenuToggle) {
  categoryMenuToggle.addEventListener("click", toggleCategoryMega);
}

if (megaCategoryList) {
  megaCategoryList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category-id]");
    if (!button) {
      return;
    }

    renderMegaMenu(button.dataset.categoryId);
  });
}

if (megaColumns) {
  megaColumns.addEventListener("click", (event) => {
    const button = event.target.closest("[data-group-index]");
    if (!button) {
      return;
    }

    const activeCategory = findMegaCategory(activeMegaCategoryId);
    const group = activeCategory.groups[Number(button.dataset.groupIndex)];
    if (!group) {
      return;
    }

    if (button.dataset.linkIndex === "all") {
      openProductCatalog(activeCategory.searchCategory || activeCategory.title);
      return;
    }

    const link = group.links[Number(button.dataset.linkIndex)];
    if (!link) {
      return;
    }

    openProductCatalog(
      activeCategory.searchCategory || activeCategory.title,
      link.terms?.[0] || link.label
    );
  });
}

if (megaViewAll) {
  megaViewAll.addEventListener("click", showActiveCategoryResults);
}

if (megaPromo) {
  megaPromo.addEventListener("click", (event) => {
    event.preventDefault();
    showActiveCategoryResults();
  });
}

if (userDrawerToggle) {
  userDrawerToggle.addEventListener("click", openUserDrawer);
}

if (userDrawerClose) {
  userDrawerClose.addEventListener("click", closeUserDrawer);
}

if (userDrawerOverlay) {
  userDrawerOverlay.addEventListener("click", closeUserDrawer);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCategoryMega();
    closeUserDrawer();
  }
});

document.addEventListener("click", (event) => {
  if (!categoryMega || categoryMega.classList.contains("hidden")) {
    return;
  }

  const clickedMenu = categoryMega.contains(event.target);
  const clickedToggle = categoryMenuToggle?.contains(event.target);

  if (!clickedMenu && !clickedToggle) {
    closeCategoryMega();
  }
});

renderMegaMenu();
syncUserDrawer();

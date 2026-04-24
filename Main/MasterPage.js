const products = [
  {
    id: 1,
    name: "Пальто",
    brand: "LIU JO",
    category: "Эмэгтэй",
    price: "329,000 ₮",
    description: "Өвлийн эмэгтэй пальто.",
    size: "M",
    image: "pictures/coat-card.svg",
    tags: ["эмэгтэй", "пальто", "гадуур хувцас", "coat"],
    colorA: "#f5d0fe",
    colorB: "#c084fc",
  },
  {
    id: 2,
    name: "Юбка",
    brand: "MANGO",
    category: "Эмэгтэй",
    price: "89,000 ₮",
    description: "Өдөр тутмын эвтэйхэн юбка.",
    size: "S",
    image: "pictures/skirt-card.svg",
    tags: ["юбка", "эмэгтэй", "skirt"],
    colorA: "#fde68a",
    colorB: "#f59e0b",
  },
  {
    id: 3,
    name: "Даашинз",
    brand: "ZARA",
    category: "Эмэгтэй",
    price: "149,000 ₮",
    description: "Гоёлын болон өдөр тутмын даашинз.",
    size: "M",
    image: "pictures/dress-card.svg",
    tags: ["даашинз", "эмэгтэй", "dress"],
    colorA: "#fecdd3",
    colorB: "#fb7185",
  },
  {
    id: 4,
    name: "Эрэгтэй цамц",
    brand: "UNIQLO",
    category: "Эрэгтэй",
    price: "99,000 ₮",
    description: "Сонгодог эрэгтэй цамц.",
    size: "L",
    image: "pictures/shirt-card.svg",
    tags: ["эрэгтэй", "цамц", "shirt", "футболка"],
    colorA: "#bfdbfe",
    colorB: "#2563eb",
  },
  {
    id: 5,
    name: "Цүнх",
    brand: "CHARLES & KEITH",
    category: "Эмэгтэй",
    price: "210,000 ₮",
    description: "Гар цүнх болон мөрний цүнх.",
    size: "One size",
    image: "pictures/bag-card.svg",
    tags: ["цүнх", "bag", "эмэгтэй"],
    colorA: "#cbd5e1",
    colorB: "#475569",
  },
  {
    id: 6,
    name: "Кет",
    brand: "VANS",
    category: "Эрэгтэй",
    price: "159,000 ₮",
    description: "Өдөр тутмын кет.",
    size: "42",
    image: "pictures/sneaker-card.svg",
    tags: ["кет", "гутал", "эрэгтэй", "эмэгтэй", "sneaker"],
    colorA: "#e5e7eb",
    colorB: "#6b7280",
  },
  {
    id: 7,
    name: "Ширээний бүтээлэг",
    brand: "HUSUG",
    category: "Гэрийн бараа",
    price: "77,000 ₮",
    description: "Гэрийн интерьерийн ширээний бүтээлэг.",
    size: "150x220",
    image: "pictures/tablecloth-card.svg",
    tags: ["ширээний бүтээлэг", "гэрийн бараа", "tablecloth"],
    colorA: "#f3f4f6",
    colorB: "#d1d5db",
  },
  {
    id: 8,
    name: "Чүдэнзний сав",
    brand: "HUSUG",
    category: "Гэрийн бараа",
    price: "49,000 ₮",
    description: "Чимэглэлийн керамик сав.",
    size: "Small",
    image: "pictures/mug-card.svg",
    tags: ["сав", "аяга", "гэрийн бараа", "mug"],
    colorA: "#e0f2fe",
    colorB: "#7dd3fc",
  },
  {
    id: 9,
    name: "Diffuser",
    brand: "HUSUG",
    category: "Гэрийн бараа",
    price: "99,000 ₮",
    description: "Өрөөний үнэртүүлэгч diffuser.",
    size: "Standard",
    image: "pictures/diffuser-card.svg",
    tags: ["diffuser", "үнэртүүлэгч", "гэрийн бараа"],
    colorA: "#fae8ff",
    colorB: "#d946ef",
  },
  {
    id: 10,
    name: "Уруулын будаг",
    brand: "MAC",
    category: "Гоо сайхан",
    price: "58,000 ₮",
    description: "Тод өнгийн уруулын будаг.",
    size: "3.5g",
    image: "pictures/lipstick-card.svg",
    tags: ["уруулын будаг", "гоо сайхан", "lipstick"],
    colorA: "#fecdd3",
    colorB: "#e11d48",
  },
  {
    id: 11,
    name: "Нүдний будгийн палет",
    brand: "HUDA",
    category: "Гоо сайхан",
    price: "125,000 ₮",
    description: "Олон өнгийн будгийн палет.",
    size: "12 өнгө",
    image: "pictures/palette-card.svg",
    tags: ["палет", "будгийн палет", "гоо сайхан"],
    colorA: "#fef3c7",
    colorB: "#f97316",
  },
  {
    id: 12,
    name: "Ухаалаг цаг",
    brand: "XIAOMI",
    category: "Технологи",
    price: "245,000 ₮",
    description: "Өдөр тутмын ухаалаг цаг.",
    size: "42mm",
    image: "pictures/smartwatch-card.svg",
    tags: ["ухаалаг цаг", "цаг", "smartwatch", "технологи"],
    colorA: "#dbeafe",
    colorB: "#1d4ed8",
  },
];

const searchInput = document.getElementById("searchInput");
const searchCategory = document.getElementById("searchCategory");
const searchBtn = document.getElementById("searchBtn");
const searchResults = document.getElementById("searchResults");
const resultsWrap = document.getElementById("resultsWrap");
const searchState = document.getElementById("searchState");
const resultsCount = document.getElementById("resultsCount");
const userDrawerToggle = document.getElementById("userDrawerToggle");
const userDrawer = document.getElementById("userDrawer");
const userDrawerOverlay = document.getElementById("userDrawerOverlay");
const userDrawerClose = document.getElementById("userDrawerClose");
const drawerUserName = document.getElementById("drawerUserName");
const drawerUserEmail = document.getElementById("drawerUserEmail");

function normalizePrice(priceText) {
  return Number(String(priceText).replace(/[^\d]/g, ""));
}

function renderResults(items) {
  if (!searchResults || !resultsWrap || !searchState || !resultsCount) {
    return;
  }

  searchState.classList.add("hidden");
  resultsWrap.classList.remove("hidden");
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
          <div class="product-thumb">
            <img src="${product.image}" alt="${product.name}" />
            <div class="brand-badge">${product.brand}</div>
          </div>
          <div class="product-body">
            <div class="product-name">${product.name}</div>
            <p class="product-desc">${product.description}</p>
            <div class="product-meta">
              <span class="product-category">${product.category}</span>
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

  const term = searchInput.value.trim().toLowerCase();
  const category = searchCategory.value.trim().toLowerCase();

  if (!term) {
    if (resultsWrap && searchState && searchResults && resultsCount) {
      resultsWrap.classList.add("hidden");
      searchState.classList.remove("hidden");
      searchResults.innerHTML = "";
      resultsCount.textContent = "0 бараа";
    }
    return;
  }

  const filtered = products.filter((product) => {
    const categoryMatch =
      category === "бүгд" ||
      category === "" ||
      product.category.toLowerCase().includes(category);
    const text = [
      product.name,
      product.brand,
      product.category,
      product.description,
      ...product.tags,
    ]
      .join(" ")
      .toLowerCase();

    return categoryMatch && text.includes(term);
  });

  renderResults(filtered);
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
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

  localStorage.setItem("cartItems", JSON.stringify([cartItem]));
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

  if (drawerUserName) {
    drawerUserName.textContent = userName;
  }

  if (drawerUserEmail) {
    drawerUserEmail.textContent = userEmail;
  }

  if (userDrawerToggle) {
    userDrawerToggle.textContent = userName;
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

    addToCart(Number(button.dataset.productId));
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
    closeUserDrawer();
  }
});

syncUserDrawer();

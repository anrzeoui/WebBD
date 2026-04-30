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
    id: 13,
    name: "Эмэгтэй футболка",
    brand: "UNIQLO",
    category: "Эмэгтэй",
    price: "59,000 ₮",
    description: "Зуны хөнгөн футболка ба майк.",
    size: "S-M",
    image: "pictures/shirt-card.svg",
    tags: ["эмэгтэй", "футболка", "майк", "цамц", "t-shirt"],
    colorA: "#d1fae5",
    colorB: "#10b981",
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

const megaCategories = [
  {
    id: "women",
    title: "Эмэгтэй",
    searchCategory: "Эмэгтэй",
    icon: "♙",
    promoImage: "pictures/coat-card.svg",
    promoText: "LIU JO",
    groups: [
      {
        title: "Эмэгтэй хувцас",
        links: [
          { label: "Гадуур хувцас", terms: ["гадуур хувцас", "пальто", "coat"] },
          { label: "Футболка & Майк", terms: ["футболка", "майк", "t-shirt"] },
          { label: "Цамц", terms: ["цамц", "shirt"] },
          { label: "Даашинз", terms: ["даашинз", "dress"] },
          { label: "Юбка", terms: ["юбка", "skirt"] },
        ],
      },
      {
        title: "Хувцасны аксессуар & Дотуур хувцас",
        links: [
          { label: "Малгай & Ороолт", terms: ["малгай", "ороолт"] },
          { label: "Дотуур хувцас", terms: ["дотуур хувцас"] },
          { label: "Оймс", terms: ["оймс"] },
          { label: "Нарны шил & Шил", terms: ["нарны шил", "шил"] },
        ],
      },
      {
        title: "Эмэгтэй гутал",
        links: [
          { label: "Ботинка & Хавтгай ултай гутал", terms: ["ботинка", "гутал"] },
          { label: "Пүүз & Кет", terms: ["пүүз", "кет", "sneaker"] },
          { label: "Өндөр өсгийт & Сандаль", terms: ["сандаль", "өндөр өсгийт"] },
        ],
      },
      {
        title: "Цүнх & Чемодан",
        links: [
          { label: "Чемодан & Тээшний цүнх", terms: ["чемодан", "тээш"] },
          { label: "Үүргэвч", terms: ["үүргэвч"] },
          { label: "Гар цүнх", terms: ["гар цүнх", "цүнх", "bag"] },
        ],
      },
    ],
  },
  {
    id: "men",
    title: "Эрэгтэй",
    searchCategory: "Эрэгтэй",
    icon: "♘",
    promoImage: "pictures/shirt-card.svg",
    promoText: "UNIQLO",
    groups: [
      {
        title: "Эрэгтэй хувцас",
        links: [
          { label: "Цамц", terms: ["цамц", "shirt"] },
          { label: "Футболка", terms: ["футболка", "t-shirt"] },
          { label: "Хослол & Пиджак", terms: ["хослол", "пиджак"] },
        ],
      },
      {
        title: "Эрэгтэй гутал",
        links: [
          { label: "Пүүз & Кет", terms: ["пүүз", "кет", "sneaker"] },
          { label: "Ботинк", terms: ["ботинк", "гутал"] },
          { label: "Углааш", terms: ["углааш"] },
        ],
      },
    ],
  },
  {
    id: "kids",
    title: "Хүүхдийн",
    searchCategory: "Хүүхдийн",
    icon: "♧",
    promoImage: "pictures/sneaker-card.svg",
    promoText: "Kids",
    groups: [
      {
        title: "Хүүхдийн хувцас",
        links: [
          { label: "Охидын хувцас", terms: ["охид", "хүүхдийн"] },
          { label: "Хөвгүүдийн хувцас", terms: ["хөвгүүд", "хүүхдийн"] },
          { label: "Хүүхдийн гутал", terms: ["хүүхдийн гутал", "кет"] },
        ],
      },
    ],
  },
  {
    id: "home",
    title: "Гэрийн & Тавилга",
    searchCategory: "Гэрийн бараа",
    icon: "⌂",
    promoImage: "pictures/tablecloth-card.svg",
    promoText: "Home",
    groups: [
      {
        title: "Гэр ахуй",
        links: [
          { label: "Ширээний бүтээлэг", terms: ["ширээний бүтээлэг", "tablecloth"] },
          { label: "Аяга & Сав", terms: ["аяга", "сав", "mug"] },
          { label: "Үнэртүүлэгч", terms: ["үнэртүүлэгч", "diffuser"] },
        ],
      },
      {
        title: "Тавилга",
        links: [
          { label: "Гал тогоо", terms: ["гал тогоо"] },
          { label: "Унтлагын өрөө", terms: ["унтлагын"] },
          { label: "Зочны өрөө", terms: ["зочны"] },
        ],
      },
    ],
  },
  {
    id: "tech",
    title: "Технологи",
    searchCategory: "Технологи",
    icon: "▣",
    promoImage: "pictures/smartwatch-card.svg",
    promoText: "XIAOMI",
    groups: [
      {
        title: "Ухаалаг төхөөрөмж",
        links: [
          { label: "Ухаалаг цаг", terms: ["ухаалаг цаг", "smartwatch"] },
          { label: "Гар утас", terms: ["гар утас"] },
          { label: "Чихэвч", terms: ["чихэвч"] },
        ],
      },
      {
        title: "Компьютер",
        links: [
          { label: "Зөөврийн компьютер", terms: ["зөөврийн компьютер"] },
          { label: "Дагалдах хэрэгсэл", terms: ["аксессуар", "дагалдах"] },
        ],
      },
    ],
  },
  {
    id: "appliance",
    title: "Цахилгаан хэрэгсэл",
    searchCategory: "Цахилгаан хэрэгсэл",
    icon: "▤",
    promoImage: "pictures/diffuser-card.svg",
    promoText: "Appliance",
    groups: [
      {
        title: "Гэр ахуйн цахилгаан",
        links: [
          { label: "Гал тогооны хэрэгсэл", terms: ["гал тогоо", "цахилгаан"] },
          { label: "Цэвэрлэгээ", terms: ["цэвэрлэгээ"] },
          { label: "Агааржуулагч", terms: ["агаар"] },
        ],
      },
    ],
  },
  {
    id: "beauty",
    title: "Гоо сайхан",
    searchCategory: "Гоо сайхан",
    icon: "◇",
    promoImage: "pictures/lipstick-card.svg",
    promoText: "Beauty",
    groups: [
      {
        title: "Нүүр будалт",
        links: [
          { label: "Уруулын будаг", terms: ["уруулын будаг", "lipstick"] },
          { label: "Будгийн палет", terms: ["палет", "будгийн палет"] },
          { label: "Суурь крем", terms: ["крем"] },
        ],
      },
      {
        title: "Арьс арчилгаа",
        links: [
          { label: "Цэвэрлэгч", terms: ["цэвэрлэгч"] },
          { label: "Тос & Серум", terms: ["тос", "серум"] },
        ],
      },
    ],
  },
  {
    id: "health",
    title: "Эрүүл мэнд & Эрүүл ахуй",
    searchCategory: "Эрүүл мэнд",
    icon: "⊕",
    promoImage: "pictures/palette-card.svg",
    promoText: "Wellness",
    groups: [
      {
        title: "Эрүүл мэнд",
        links: [
          { label: "Витамин", terms: ["витамин"] },
          { label: "Амны арчилгаа", terms: ["амны арчилгаа"] },
          { label: "Ариун цэвэр", terms: ["ариун цэвэр"] },
        ],
      },
    ],
  },
  {
    id: "jewelry",
    title: "Гоёл чимэглэл",
    searchCategory: "Гоёл чимэглэл",
    icon: "◇",
    promoImage: "pictures/bag-card.svg",
    promoText: "Accessories",
    groups: [
      {
        title: "Чимэглэл",
        links: [
          { label: "Ээмэг", terms: ["ээмэг"] },
          { label: "Зүүлт", terms: ["зүүлт"] },
          { label: "Бугуйвч", terms: ["бугуйвч"] },
        ],
      },
    ],
  },
  {
    id: "sport",
    title: "Спорт & Аялал",
    searchCategory: "Спорт",
    icon: "◌",
    promoImage: "pictures/sneaker-card.svg",
    promoText: "Sport",
    groups: [
      {
        title: "Спорт",
        links: [
          { label: "Спорт гутал", terms: ["спорт", "гутал", "кет"] },
          { label: "Аяллын цүнх", terms: ["аяллын", "цүнх"] },
          { label: "Дасгалын хэрэгсэл", terms: ["дасгал"] },
        ],
      },
    ],
  },
  {
    id: "food",
    title: "Хүнс",
    searchCategory: "Хүнс",
    icon: "▥",
    promoImage: "pictures/mug-card.svg",
    promoText: "Food",
    groups: [
      {
        title: "Хүнс",
        links: [
          { label: "Ундаа", terms: ["ундаа"] },
          { label: "Амттан", terms: ["амттан"] },
          { label: "Кофе & Цай", terms: ["кофе", "цай"] },
        ],
      },
    ],
  },
  {
    id: "hobby",
    title: "Тоглоом & Хобби",
    searchCategory: "Тоглоом",
    icon: "✧",
    promoImage: "pictures/palette-card.svg",
    promoText: "Hobby",
    groups: [
      {
        title: "Тоглоом",
        links: [
          { label: "Угсардаг тоглоом", terms: ["угсардаг"] },
          { label: "Board game", terms: ["board game"] },
          { label: "Зургийн хэрэгсэл", terms: ["зургийн хэрэгсэл"] },
        ],
      },
    ],
  },
  {
    id: "books",
    title: "Ном & цомог, пянз",
    searchCategory: "Ном",
    icon: "▱",
    promoImage: "pictures/tablecloth-card.svg",
    promoText: "Books",
    groups: [
      {
        title: "Ном",
        links: [
          { label: "Уран зохиол", terms: ["уран зохиол"] },
          { label: "Бизнес ном", terms: ["бизнес ном"] },
          { label: "Цомог & Пянз", terms: ["цомог", "пянз"] },
        ],
      },
    ],
  },
  {
    id: "stationery",
    title: "Бичиг хэрэг",
    searchCategory: "Бичиг хэрэг",
    icon: "▰",
    promoImage: "pictures/tablecloth-card.svg",
    promoText: "Stationery",
    groups: [
      {
        title: "Бичиг хэрэг",
        links: [
          { label: "Дэвтэр", terms: ["дэвтэр"] },
          { label: "Үзэг", terms: ["үзэг"] },
          { label: "Оффис хэрэгсэл", terms: ["оффис"] },
        ],
      },
    ],
  },
];

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
    ...product.tags,
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
    const productCategory = normalizeText(product.category);
    const productText = getProductText(product);

    return productCategory.includes(categoryTerm) || productText.includes(categoryTerm);
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
      if (resultsTitle) {
        resultsTitle.textContent = "Хайлтын илэрц";
      }
      resultsCount.textContent = "0 бараа";
    }
    return;
  }

  const filtered = products.filter((product) => {
    const categoryMatch =
      category === "бүгд" ||
      category === "" ||
      product.category.toLowerCase().includes(category);
    const text = getProductText(product);

    return categoryMatch && text.includes(term);
  });

  renderResults(filtered);
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
          <span>›</span>
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
              Бүгдийг үзэх →
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

function showMegaResults(title, items, categoryName) {
  if (searchInput) {
    searchInput.value = title;
  }

  setSearchCategoryValue(categoryName);
  renderResults(items, title);
  closeCategoryMega();

  if (resultsWrap) {
    resultsWrap.scrollIntoView({ behavior: "smooth", block: "start" });
  }
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
  showMegaResults(
    activeCategory.title,
    getCategoryProducts(activeCategory),
    activeCategory.searchCategory || activeCategory.title
  );
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
      showMegaResults(
        `${activeCategory.title} - ${group.title}`,
        getGroupProducts(activeCategory, group),
        activeCategory.searchCategory || activeCategory.title
      );
      return;
    }

    const link = group.links[Number(button.dataset.linkIndex)];
    if (!link) {
      return;
    }

    showMegaResults(
      link.label,
      getLinkProducts(activeCategory, link),
      activeCategory.searchCategory || activeCategory.title
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

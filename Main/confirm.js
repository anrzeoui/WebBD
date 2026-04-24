const headerTotalConfirm = document.getElementById("headerTotal");
const headerEmail = document.getElementById("headerEmail");
const productCountConfirm = document.getElementById("productCount");
const orderItems = document.getElementById("orderItems");
const summaryItems = document.getElementById("summaryItems");
const customerName = document.getElementById("customerName");
const customerContact = document.getElementById("customerContact");
const deliveryAddressText = document.getElementById("deliveryAddressText");
const receiverText = document.getElementById("receiverText");
const deliveryFeeConfirm = document.getElementById("deliveryFee");
const productTotalConfirm = document.getElementById("productTotal");
const grandTotalConfirm = document.getElementById("grandTotal");
const continueBtnConfirm = document.getElementById("continueBtn");

function getCartItemsConfirm() {
  const saved = localStorage.getItem("cartItems");
  if (!saved) return [];
  try { return JSON.parse(saved); } catch { return []; }
}

function getDeliveryAddressConfirm() {
  const saved = localStorage.getItem("deliveryAddress");
  if (!saved) return null;
  try { return JSON.parse(saved); } catch { return null; }
}

function parsePriceConfirm(priceText) {
  return Number(String(priceText).replace(/[^\d]/g, ""));
}

function formatPriceConfirm(value) {
  return `${value.toLocaleString("en-US")} ₮`;
}

function getProductTotalConfirm(items) {
  return items.reduce((sum, item) => sum + parsePriceConfirm(item.price) * item.quantity, 0);
}

function getDeliveryFeeConfirm(items) {
  return items.length ? 7980 : 0;
}

function renderItemsConfirm(items) {
  if (!items.length) {
    orderItems.innerHTML = '<p class="empty-note">Сагсанд бараа алга байна.</p>';
    summaryItems.innerHTML = '<p class="empty-note">Төлбөрийн мэдээлэл хоосон байна.</p>';
    productCountConfirm.textContent = "Бүтээгдэхүүн (0)";
    return;
  }

  productCountConfirm.textContent = `Бүтээгдэхүүн (${items.length})`;

  orderItems.innerHTML = items.map((item) => `
    <article class="order-item">
      <img src="${item.image}" alt="${item.name}" />
      <div>
        <div class="order-item-name">${item.name}</div>
        <div class="order-item-meta">${item.brand} · ${item.quantity} ширхэг · ${item.size}</div>
      </div>
      <div class="order-item-price">${formatPriceConfirm(parsePriceConfirm(item.price) * item.quantity)}</div>
    </article>
  `).join("");

  summaryItems.innerHTML = items.map((item) => `
    <article class="summary-item">
      <div>
        <div class="summary-item-name">${item.name}</div>
        <div class="summary-item-meta">${item.quantity} ширхэг</div>
      </div>
      <div class="summary-item-price">${formatPriceConfirm(parsePriceConfirm(item.price) * item.quantity)}</div>
    </article>
  `).join("");
}

function renderAddressInfoConfirm(data) {
  if (!data) {
    customerName.textContent = "-";
    customerContact.textContent = "-";
    deliveryAddressText.textContent = "-";
    receiverText.textContent = "-";
    return;
  }

  const fullName = [data.lastName, data.firstName].filter(Boolean).join(" ");
  const addressLine = [data.city, data.district, data.khoroo, data.details].filter(Boolean).join(", ");
  const receiverName = data.otherReceiver ? "Өөр хүлээн авагчтай" : fullName || "Хэрэглэгч";
  const contactLine = [data.email, data.phone].filter(Boolean).join(" · ");
  customerName.textContent = fullName || "Хэрэглэгч";
  customerContact.textContent = contactLine || "-";
  deliveryAddressText.textContent = addressLine || "-";
  receiverText.textContent = [receiverName, data.phone].filter(Boolean).join(" · ");
  headerEmail.textContent = data.email || "user@example.com";
}

function renderTotalsConfirm(items) {
  const productsPrice = getProductTotalConfirm(items);
  const shipping = getDeliveryFeeConfirm(items);
  const total = productsPrice + shipping;
  headerTotalConfirm.textContent = formatPriceConfirm(productsPrice);
  productTotalConfirm.textContent = formatPriceConfirm(productsPrice);
  deliveryFeeConfirm.textContent = formatPriceConfirm(shipping);
  grandTotalConfirm.textContent = formatPriceConfirm(total);
}

continueBtnConfirm.addEventListener("click", () => {
  localStorage.removeItem("cartItems");
  localStorage.removeItem("deliveryAddress");
  window.location.href = "MasterPage.html";
});

const confirmItems = getCartItemsConfirm();
const confirmAddress = getDeliveryAddressConfirm();
renderItemsConfirm(confirmItems);
renderAddressInfoConfirm(confirmAddress);
renderTotalsConfirm(confirmItems);

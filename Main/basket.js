const cartItemsContainer = document.getElementById("cartItems");
const productCount = document.getElementById("productCount");
const headerTotal = document.getElementById("headerTotal");
const subtotal = document.getElementById("subtotal");
const grandTotal = document.getElementById("grandTotal");
const clearCartBtn = document.getElementById("clearCartBtn");
const continueBtn = document.getElementById("continueBtn");

function getCartItems() {
  const saved = localStorage.getItem("cartItems");
  if (!saved) return [];
  try { return JSON.parse(saved); } catch { return []; }
}

function saveCartItems(items) {
  localStorage.setItem("cartItems", JSON.stringify(items));
}

function parsePrice(priceText) {
  return Number(String(priceText).replace(/[^\d]/g, ""));
}

function formatPrice(value) {
  return `${value.toLocaleString("en-US")} ₮`;
}

function getTotal(items) {
  return items.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0);
}

function renderCart() {
  const items = getCartItems();

  if (!items.length) {
    cartItemsContainer.innerHTML = `<div class="empty-cart">Сагс хоосон байна. <a href="MasterPage.html">Бараа үзэх</a></div>`;
    productCount.textContent = "Бүтээгдэхүүн (0)";
    headerTotal.textContent = formatPrice(0);
    subtotal.textContent = formatPrice(0);
    grandTotal.textContent = formatPrice(0);
    return;
  }

  const total = getTotal(items);
  productCount.textContent = `Бүтээгдэхүүн (${items.length})`;
  headerTotal.textContent = formatPrice(total);
  subtotal.textContent = formatPrice(total);
  grandTotal.textContent = formatPrice(total);

  cartItemsContainer.innerHTML = items.map((item, index) => `
    <article class="cart-item-card">
      <img class="cart-item-image" src="${item.image}" alt="${item.name}" />
      <div>
        <div class="cart-brand">${item.brand}</div>
        <h3 class="cart-item-name">${item.name}</h3>
        <p class="cart-item-size">Сонголт: Хэмжээ: ${item.size}</p>
        <select class="cart-item-select"><option>Сонголт: Хэмжээ: ${item.size}</option></select>
        <div class="cart-item-bottom">
          <span>Үлдэгдэл: 1</span>
          <span>Хүргэлтийн нөхцөл &gt;</span>
        </div>
      </div>
      <div class="cart-qty-wrap">
        <button class="qty-btn" type="button" data-action="decrease" data-index="${index}">−</button>
        <span class="qty-count">${item.quantity}</span>
        <button class="qty-btn" type="button" data-action="increase" data-index="${index}">+</button>
      </div>
      <div class="cart-item-actions">
        <div class="cart-side-price">${formatPrice(parsePrice(item.price) * item.quantity)}</div>
        <button class="icon-action" type="button" title="Хадгалах">♡</button>
        <button class="icon-action" type="button" title="Устгах" data-action="remove" data-index="${index}">×</button>
      </div>
    </article>
  `).join("");
}

cartItemsContainer.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const items = getCartItems();
  const index = Number(button.dataset.index);
  const action = button.dataset.action;
  if (!items[index]) return;
  if (action === "increase") items[index].quantity += 1;
  if (action === "decrease") items[index].quantity = Math.max(1, items[index].quantity - 1);
  if (action === "remove") items.splice(index, 1);
  saveCartItems(items);
  renderCart();
});

clearCartBtn.addEventListener("click", () => {
  saveCartItems([]);
  renderCart();
});

continueBtn.addEventListener("click", () => {
  window.location.href = "address.html";
});

renderCart();

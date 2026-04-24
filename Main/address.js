const headerTotalAddress = document.getElementById("headerTotal");
const productSummary = document.getElementById("productSummary");
const productTotal = document.getElementById("productTotal");
const grandTotal = document.getElementById("grandTotal");
const deliveryFee = document.getElementById("deliveryFee");
const addressForm = document.getElementById("addressForm");
const continueBtnAddress = document.getElementById("continueBtn");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");

function getCartItemsAddress() {
  const saved = localStorage.getItem("cartItems");
  if (!saved) return [];
  try { return JSON.parse(saved); } catch { return []; }
}

function parsePriceAddress(priceText) {
  return Number(String(priceText).replace(/[^\d]/g, ""));
}

function formatPriceAddress(value) {
  return `${value.toLocaleString("en-US")} ₮`;
}

function getDeliveryFeeAddress(items) {
  return items.length ? 7980 : 0;
}

function getProductTotalAddress(items) {
  return items.reduce((sum, item) => sum + parsePriceAddress(item.price) * item.quantity, 0);
}

function saveAddress() {
  const payload = {
    addressName: addressForm.addressName.value.trim(),
    city: addressForm.city.value.trim(),
    district: addressForm.district.value.trim(),
    khoroo: addressForm.khoroo.value.trim(),
    details: addressForm.details.value.trim(),
    otherReceiver: addressForm.otherReceiver.checked,
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    phone: phoneInput.value.trim(),
    email: emailInput.value.trim(),
  };
  localStorage.setItem("deliveryAddress", JSON.stringify(payload));
}

function loadSavedAddress() {
  const saved = localStorage.getItem("deliveryAddress");
  if (!saved) return;
  try {
    const data = JSON.parse(saved);
    addressForm.addressName.value = data.addressName || "";
    addressForm.city.value = data.city || "";
    addressForm.district.value = data.district || "";
    addressForm.khoroo.value = data.khoroo || "";
    addressForm.details.value = data.details || "";
    addressForm.otherReceiver.checked = Boolean(data.otherReceiver);
    firstNameInput.value = data.firstName || "";
    lastNameInput.value = data.lastName || "";
    phoneInput.value = data.phone || "";
    emailInput.value = data.email || "";
  } catch {}
}

function renderSummaryAddress() {
  const items = getCartItemsAddress();
  const productsPrice = getProductTotalAddress(items);
  const shipping = getDeliveryFeeAddress(items);
  const total = productsPrice + shipping;
  headerTotalAddress.textContent = formatPriceAddress(productsPrice);
  productTotal.textContent = formatPriceAddress(productsPrice);
  deliveryFee.textContent = formatPriceAddress(shipping);
  grandTotal.textContent = formatPriceAddress(total);

  if (!items.length) {
    productSummary.innerHTML = '<p class="empty-note">Сагсанд бараа алга байна.</p>';
    return;
  }

  productSummary.innerHTML = items.map((item) => `
    <article class="summary-item">
      <img src="${item.image}" alt="${item.name}" />
      <div>
        <div class="summary-item-name">${item.name}</div>
        <div class="summary-item-meta">${item.brand} · ${item.quantity} ширхэг</div>
      </div>
      <div class="summary-item-price">${formatPriceAddress(parsePriceAddress(item.price) * item.quantity)}</div>
    </article>
  `).join("");
}

addressForm.addEventListener("input", saveAddress);
firstNameInput.addEventListener("input", saveAddress);
lastNameInput.addEventListener("input", saveAddress);
phoneInput.addEventListener("input", saveAddress);
emailInput.addEventListener("input", saveAddress);

continueBtnAddress.addEventListener("click", () => {
  if (!addressForm.reportValidity()) return;
  saveAddress();
  window.location.href = "confirm.html";
});

loadSavedAddress();
renderSummaryAddress();

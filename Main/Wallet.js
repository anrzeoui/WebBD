const balanceElement = document.getElementById("walletBalance");
const userNameElement = document.getElementById("walletUserName");
const amountGrid = document.getElementById("amountGrid");
const customAmount = document.getElementById("customAmount");
const topUpBtn = document.getElementById("topUpBtn");
const walletMessage = document.getElementById("walletMessage");
const transactionList = document.getElementById("transactionList");

let selectedAmount = 10000;

function formatMoney(value) {
  return `${Number(value || 0).toLocaleString("mn-MN")} ₮`;
}

function getWallet() {
  try {
    const saved = JSON.parse(localStorage.getItem("shoppyWallet") || "null");
    return {
      balance: Number(saved?.balance || 0),
      transactions: Array.isArray(saved?.transactions) ? saved.transactions : [],
    };
  } catch {
    return { balance: 0, transactions: [] };
  }
}

function saveWallet(wallet) {
  localStorage.setItem("shoppyWallet", JSON.stringify(wallet));
}

function getUserName() {
  try {
    const savedUser = JSON.parse(localStorage.getItem("registeredUser") || "null");
    return savedUser?.name?.trim() || "Хэрэглэгч";
  } catch {
    return "Хэрэглэгч";
  }
}

function renderWallet() {
  const wallet = getWallet();

  if (balanceElement) {
    balanceElement.textContent = formatMoney(wallet.balance);
  }

  if (userNameElement) {
    userNameElement.textContent = getUserName();
  }

  if (!transactionList) {
    return;
  }

  if (!wallet.transactions.length) {
    transactionList.innerHTML = `
      <div class="transaction-item">
        <div>
          <strong>Хэтэвч нээгдсэн</strong>
          <span>Өнөөдөр</span>
        </div>
        <b>0 ₮</b>
      </div>
    `;
    return;
  }

  transactionList.innerHTML = wallet.transactions
    .map(
      (transaction) => `
        <div class="transaction-item">
          <div>
            <strong>${transaction.title}</strong>
            <span>${transaction.date}</span>
          </div>
          <b>+${formatMoney(transaction.amount)}</b>
        </div>
      `
    )
    .join("");
}

function setSelectedAmount(amount, selectedButton) {
  selectedAmount = Number(amount || 0);

  if (amountGrid) {
    amountGrid.querySelectorAll("button").forEach((button) => {
      button.classList.toggle("active", button === selectedButton);
    });
  }

  if (customAmount && selectedButton) {
    customAmount.value = "";
  }
}

if (amountGrid) {
  const firstButton = amountGrid.querySelector("button");
  if (firstButton) {
    firstButton.classList.add("active");
  }

  amountGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-amount]");
    if (!button) {
      return;
    }

    setSelectedAmount(button.dataset.amount, button);
  });
}

if (customAmount) {
  customAmount.addEventListener("input", () => {
    setSelectedAmount(customAmount.value, null);
  });
}

if (topUpBtn) {
  topUpBtn.addEventListener("click", () => {
    const amount = Number(selectedAmount || 0);
    if (amount < 1000) {
      if (walletMessage) {
        walletMessage.textContent = "Цэнэглэх дүн хамгийн багадаа 1,000 ₮ байна.";
      }
      return;
    }

    const wallet = getWallet();
    wallet.balance += amount;
    wallet.transactions.unshift({
      title: "Хэтэвч цэнэглэлт",
      amount,
      date: new Date().toLocaleDateString("mn-MN"),
    });
    wallet.transactions = wallet.transactions.slice(0, 6);
    saveWallet(wallet);
    renderWallet();

    if (walletMessage) {
      walletMessage.textContent = `${formatMoney(amount)} амжилттай нэмэгдлээ.`;
    }
  });
}

renderWallet();

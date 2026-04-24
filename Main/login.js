const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  const saved = JSON.parse(localStorage.getItem("registeredUser") || "null");

  if (!saved || saved.email !== email) {
    loginMessage.textContent = "И-мэйл эсвэл гар утасны дугаар буруу байна.";
    return;
  }

  loginMessage.textContent = "";
  window.location.href = "MasterPage.html";
});

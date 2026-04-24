const registerForm = document.getElementById("registerForm");
const registerMessage = document.getElementById("registerMessage");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("registerName").value.trim();
  const email = document.getElementById("registerEmail").value.trim();
  const password = document.getElementById("registerPassword").value.trim();

  localStorage.setItem("registeredUser", JSON.stringify({ name, email, password }));
  registerMessage.textContent = "Бүртгэл амжилттай. Одоо нэвтэрнэ үү.";

  setTimeout(() => {
    window.location.href = "login.html";
  }, 700);
});

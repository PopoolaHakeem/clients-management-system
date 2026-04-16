const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;

  localStorage.setItem("clientEmail", email);

  window.location.href = "dashboard.html";
});
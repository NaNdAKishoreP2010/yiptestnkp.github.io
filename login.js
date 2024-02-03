const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "root") {
    // Redirect to the database or desired page
    window.location.href = "https://example.com"; // Replace with your URL
  } else {
    errorMessage.textContent = "Invalid username or password";
  }
});
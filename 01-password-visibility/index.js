const password = document.querySelector("#password");
const showPassword = document.querySelector("#show-password");

showPassword.addEventListener("click", () => {
  password.type = showPassword.checked ? "text" : "password";
});

document.addEventListener("click", (event) => {
  if (!event.target.matches("[data-pass]")) {
    return;
  }
  const passwordField = event.target.dataset["pass"];
  // console.log(passwordField);
  const password = document.querySelectorAll(passwordField);
  //console.log(password)
  password.forEach((e) => {
    if (event.target.checked) {
      e.type = "text";
    } else {
      e.type = "password";
    }
  });
});

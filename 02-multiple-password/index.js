const passwords = document.querySelectorAll("input[type='password']");
const showPasswords = document.querySelector("#show-passwords");

showPasswords.addEventListener("click", () => {
  passwords.forEach((element)=>{
    element.type=showPasswords.checked ? 'text' : 'password';
  })
});

//const currentPassword=document.querySelector('#current-password');
const passwords = document.querySelectorAll("input[type='password']");
console.log(passwords);
//const newPassword=document.querySelector('#new-password');
const showPasswords = document.querySelector("#show-passwords");
console.log(showPasswords);
showPasswords.addEventListener("click", () => {
  if (showPasswords.checked) {
    passwords.forEach((element) => {
      console.log(element);
      element.type = "text";
    });
  } else {
    passwords.forEach((element) => {
      element.type = "password";
    });
  }
});

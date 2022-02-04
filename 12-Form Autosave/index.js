const main=document.querySelector('.main');
const form = document.querySelector("#id");
const button = document.querySelector("button");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const buttonTwo=document.querySelector('.button__two')
console.log(form);

const email = document.querySelector("#email");

const nameValue = nameInput.value;
const emailValue = emailInput.value;

form.addEventListener("submit", (e) => {
   // e.preventDefault();
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
  
  localStorage.setItem("name", nameValue);
  localStorage.setItem("email", emailValue);
});

buttonTwo.addEventListener('click',() => {
    const printData=document.createElement('div')
    console.log(localStorage.getItem('name'));
    console.log(localStorage.getItem('email'));
    printData.innerHTML=`<p>${localStorage.getItem('name')}</p>
    <p>${localStorage.getItem('email')}</p>`;
    main.appendChild(printData);
})
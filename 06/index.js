//fetch("https://jsonplaceholder.typicode.com/posteds")

const blockquotes=document.querySelector('.qoute');
const button=document.querySelector("#get-quote")
console.log(blockquotes);
console.log(button);
button.addEventListener('click',()=>{
  fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
  .then((e) => {
    if (e.ok) {
      return e.json();
    }
    return e.json().then((json) => {
      throw json;
    });
  })
  .then((data) => {
    blockquotes.textContent=data;
  })
  .catch((error) => {
    console.log(error);
  });

})

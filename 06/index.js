/*Random Ron no duplicates*/
const blockquotes = document.querySelector(".qoute");
const button = document.querySelector("#get-quote");
console.log(blockquotes);
console.log(button);

const allQuotes = [];

const getQuote=()=>{
  fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
  .then(e=>{
    if(e.ok){
      return e.json();
    }
    throw e.status;
  })
  .then(data=>{
    if(allQuotes.length>25){
      allQuotes.shift(); //delete first element
    }

    if(allQuotes.includes(data[0])){
      getQuote();
    }
    else{
      console.log(allQuotes);
      allQuotes.push(data[0]);
      blockquotes.textContent=data;
    }
  })
  .catch(error=>{
    console.log(error);
  })
}

button.addEventListener("click", getQuote)

const blockquotes = document.querySelector(".quote");
const button = document.querySelector("#button-quote");

const allQuotes = [];

const getQuote = () => {
  fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then((response) => {
     // console.log(response);
      if (response.ok) {
        return response.json();
      }
      throw e.status;
    })
    .then((data) => {
      console.log(data);
      if (allQuotes.length > 25) {
        allQuotes.shift(); //delete first element
      }
      if (allQuotes.includes(data[0])) {
        //preserv duplicate
        getQuote();
      } else {
        console.log(allQuotes);
        allQuotes.push(data[0]);
        blockquotes.textContent = data;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

button.addEventListener("click", getQuote);

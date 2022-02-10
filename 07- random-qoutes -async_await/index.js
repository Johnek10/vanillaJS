const blockquotes = document.querySelector(".quote");
const button = document.querySelector("#button-quote");
console.log(blockquotes);
console.log(blockquotes.textContent);
const getQuote = async () => {
  try {
    let response = await fetch(
      "https://programming-quotes-api.herokuapp.com/Quotes/random"
    );
    if (!response.ok) {
      throw response.status;
    }
    let data = await response.json();
    blockquotes.innerHTML = `${data["en"]} <br/> <span class="span-italic">${data["author"]}</span>`;
  } catch (error) {
    console.log(error);
  }
};

button.addEventListener("click", getQuote);

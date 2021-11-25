const blockquotes = document.querySelector(".qoute");
const button = document.querySelector("#get-quote");

const getQuote = async () => {
    try{
        const response = await fetch(
            "https://ron-swanson-quotes.herokuapp.com/v2/ques"
          );
        
          if (!response.ok) {
            throw "Something is no yes XD";
          }
          const data = await response.json();
        
          console.log(data);
    }
  catch(error){
      console.log(error)
  }
};

button.addEventListener("click", getQuote);

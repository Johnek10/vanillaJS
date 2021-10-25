let text = document.querySelector("#text");
let count = document.querySelector("#count");

text.addEventListener("input", function () {
  let words = text.value.split(/[\s]+/g).filter(function (word) {
    return word.length;
  });
  
  count.textContent = `You've written ${words.length} words and ${text.value.length} characters.`;
});

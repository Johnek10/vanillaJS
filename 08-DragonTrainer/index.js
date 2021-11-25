const greeting = document.querySelector(".greeting");

const displayArticle = ({ articles }) => {
  return `<article> ${articles
    .map(({ title, author, article }) => {
      return `<h3>${title}</h3>
    <p>${article}</p>
    <p>${author}</p> `;
    })
    .join("")} 
  </article>`;
};

fetch("https://vanillajsacademy.com/api/dragons.json")
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw response.status;
  })
  .then((data) => {
    console.log(data);
    greeting.innerHTML = displayArticle(data);
  })
  .catch((error) => {
    console.log(error);
  });

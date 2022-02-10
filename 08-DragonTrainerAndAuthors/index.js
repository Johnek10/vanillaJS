const greeting = document.querySelector(".greeting");

const displayAuthorBio = (data, author) => {
  const { authors } = data; //authors data from API, author data from article
  let result = "";
  for (e of authors) {
    if (e.author === author) {
      result = `<p class='author'>${e.author} </p>
       <p class='authorBio'>${e.bio}</p>`;
    }
  }
  return result;
};

/*Display Article with author and bio*/
const displayArticle = ([publication, authorDescription]) => {
  //data from two APIs, publication - atrictels, authorDescripton - authors and BIO
  const { articles } = publication;
  console.log(authorDescription);
  return `<article>
  ${articles
    .map(({ title, author, article }) => {
      return `<h3>${title}</h3>
    <p>${article}</p>
    <div>${displayAuthorBio(authorDescription, author)}</div>
    `;
    })
    .join("")}
  
  </article> 
`;
};

Promise.all([
  fetch("https://vanillajsacademy.com/api/dragons.json"),
  fetch("https://vanillajsacademy.com/api/dragons-authors.json"),
])
  .then((responses) => {
    return Promise.all(
      responses.map((response) => {
        return response.json();
      })
    );
  })
  .then((data) => {
    console.log(data);
    greeting.innerHTML = displayArticle(data);
  })
  .catch((error) => {
    console.log(error);
  });

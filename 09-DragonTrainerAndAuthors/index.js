const greeting = document.querySelector(".greeting");

const displayAuthorBio=(data, author)=>{
  const {authors}=data;
  let result='';
  for(e of authors){
    if(e.author===author){
      result=`<p>${e.author} </p>
       <p>${e.bio}</p>`
    }
  }
  return result;
}


/*Display Article with author and bio*/
const displayArticle = ([publication, authorDescription]) => {
  const { articles } = publication;
  console.log(authorDescription);
  return `<article>
  ${articles
    .map(({ title, author, article }) => {
      return `<h3>${title}</h3>
    <p>${article}</p>
    <div>${displayAuthorBio(authorDescription, author)}</div>
    <div style="height: 4px; background-color: red"></div>
    `
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
    //displayArticle(data[0]);
    console.log(data);
    greeting.innerHTML = displayArticle(data);
  })
  .catch((error) => {
    console.log(error);
  });

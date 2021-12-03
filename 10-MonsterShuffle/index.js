const app = document.querySelector("#app");
const button = document.querySelector(".button");

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

let monsters = [
  {
    name: "monster1",
    alt: "Picture with monster one",
    src: "img/monster1.svg",
  },
  {
    name: "monster2",
    alt: "Picture with monster two",
    src: "img/monster2.svg",
  },
  {
    name: "monster3",
    alt: "Picture with monster three",
    src: "img/monster3.svg",
  },
  {
    name: "monster4",
    alt: "Picture with monster four",
    src: "img/monster4.svg",
  },
  {
    name: "monster5",
    alt: "Picture with monster five",
    src: "img/monster5.svg",
  },
  {
    name: "monster6",
    alt: "Picture with monster six",
    src: "img/monster6.svg",
  },
  {
    name: "monster7",
    alt: "Picture with monster seven",
    src: "img/monster7.svg",
  },
  {
    name: "monster8",
    alt: "Picture with monster eight",
    src: "img/monster8.svg",
  },
  {
    name: "monster9",
    alt: "Picture with monster nine",
    src: "img/monster9.svg",
  },
  {
    name: "monster10",
    alt: "Picture with monster ten",
    src: "img/monster10.svg",
  },
  {
    name: "monster11",
    alt: "Picture with monster eleven",
    src: "img/monster11.svg",
  },
  { name: "sock", alt: "Picture with sock", src: "img/sock.svg" },
];

const data = (array) => {
  return array
    .map(({ name, alt, src }) => {
      return `
      <div class="box">
    <p>${name}</p>
    <img alt=${alt} src="${src}">
    </div>`;
})
    .join("");
};

const render = () => {
  const afterShuffle=shuffle(monsters)
  app.innerHTML = data(afterShuffle);
};

button.addEventListener("click", render);

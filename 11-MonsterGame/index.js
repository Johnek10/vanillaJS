const app = document.querySelector("#app");

const monsters = [
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

const uncoverMonster = [];
const initialButton = [];

function clickHandler(e) {
    const button=e.target.closest('button');
    //console.log(button.getAttribute('data-index'));
    initialButton.push(button);
    if(!button)
    return;
    //console.log(button.getAttribute('data-index'));
    const monsterData=monsters[button.getAttribute('data-index')]
    const img=document.createElement('img');

    //console.log(monsterData);
    img.src=monsterData.src;
    img.alt=monsterData.alt;
    uncoverMonster.push(img);

    button.replaceWith(img);

    setTimeout(() => {
      if (img.alt == "Picture with sock") {
        let counter = 0;
        uncoverMonster.forEach((element) => {
          element.replaceWith(initialButton[counter]);
          counter++;
        });
        alert(`You lost, your result ${result}, play again`);
        result=0;
      } else {
        result++;
        console.log(result);
      }
    }, 500);
  }


app.innerHTML = monsters
  .map((e,index) => {
    return `
        <div class="box">
        <button class="button" data-index=${index}>
        <img alt="Door"  src="img/door.svg">
        </button>
        </div>
        `;
  })
  .join("");

document.addEventListener('click', clickHandler);


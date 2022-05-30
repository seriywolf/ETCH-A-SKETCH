let container = document.querySelector("#container");
let n = 16;
let quantity = 256;
const createCards = () => {
  for (let i = 1; i <= quantity; i++) {
    let card = document.createElement("div");
    let cardSize = (960 / n).toString() + "px";
    card.classList.add(".card");
    card.style.width = cardSize;
    card.style.height = cardSize;
    card.style.backgroundColor = "black";
    card.style.opacity = "0.0";
    card.style.border = "1px solid black";
    container.appendChild(card);
  }
};

createCards();

let button = document.querySelector("button");
button.onclick = function () {
  n = prompt("1-100", "16");
  if (n !== null && n<100) {
    container.innerHTML = "";
    quantity = n * n;
    createCards();
  };
};


function getRandomRgb() {
    let num = Math.round(0xffffff * Math.random());
    let r = num >> 16;
    let g = num >> 8 & 255;
    let b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  };

container.addEventListener("mouseover", function (event) {
  if (container === event.target) return;  
  //event.target.style.backgroundColor = getRandomRgb();
  event.target.style.opacity = parseFloat(event.target.style.opacity) + 0.1;
  //event.target.style.backgroundColor = "rgba(0,0,0,0.1)";

});

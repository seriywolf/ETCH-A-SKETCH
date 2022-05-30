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
    card.style.border = "1px solid grey";
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

container.addEventListener("mouseover", function (event) {
  if (container === event.target) return;
  // highlight the mouseover target
  event.target.style.backgroundColor = "orange";
});

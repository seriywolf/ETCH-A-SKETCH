let container = document.querySelector("#container");
let quantity = 256;
const createCards = () => {
  for (let i = 1; i <= quantity; i++) {
    let card = document.createElement("div");
    card.id = "card";
    container.appendChild(card);
  }
};
createCards();

let button = document.querySelector("button");
button.onclick = function () {
  let size = prompt("1-100", "16");
  var first = container.firstElementChild;
  while (first) {
    first.remove();
    first = container.firstElementChild;
  }
  quantity = size * size;
  //document.querySelector("#card").remove();

  createCards();
};

container.addEventListener("mouseover", function (event) {
  if (container === event.target) return;
  // highlight the mouseover target
  event.target.style.backgroundColor = "orange";
});

container.addEventListener("mouseout", function (event) {
  // unhighlight the mouseover target
  event.target.style.backgroundColor = "white";
});

const display = document.querySelector(".counter-display");

const clickarea = document.body.querySelector("main");
clickarea.addEventListener("click", (event) => {
  count();
  console.log("counter: " + counter);
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Enter" || event.code === "Space") {
    count();
  }
});

let counter = 0;
const bar = document.querySelector(".bar");

function count() {
  counter++;
  display.innerText = counter;
  bar.style.width = (counter % 100) + "%"; //modulo zum zuücksetzten des gelben Balkens
  // bar.setAttribute("width", "40"); --> geht nicht weil, CSS Eigenschaften sind KEINE Attribute!
}

const btn_reset = document.querySelector("#button-reset");
btn_reset.addEventListener("click", () => {
  counter = 0;
  display.innerText = counter;
});

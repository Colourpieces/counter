const display = document.querySelector(".counter-display");

/* Warum geht das nicht?? */
/*
document.body.main.addEventListener("click", () => {
  console.log("klick");
});
*/

const clickarea = document.body.querySelector("main");
clickarea.addEventListener("click", (event) => {
  //console.log("click on main");
  count();
  console.log("counter: " + counter);
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Enter" || event.code === "Space") {
    //console.log("enter or space is pressed");
    count();
    console.log("counter: " + counter);
  }
});

let counter = 0;

function count() {
  counter++;
  //display.appendChild(document.createTextNode(counter)); //löscht nichts. wie geht das?
  display.innerText = counter;
  draw_bar(counter);
}

const bar = document.querySelector(".bar");

function draw_bar(p_counter) {
  console.log("bar");
  //bar.setAttribute("width", "40");
  bar.setAttribute("background-color", "green");
}

//const btn_reset = document.body.header.querySelector("button"); //geht nicht warum?
const btn_reset = document.querySelector("button");
btn_reset.addEventListener("click", () => {
  counter = 0;
  display.innerText = counter;
});

/*
// event = keyup or keydown
document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      console.log('Space pressed')
    }
  })
*/

const board = document.querySelector(".board");
const boardLetters = document.querySelector(".letters");
const boardNumbers = document.querySelector(".numbers");
let letters = ["a", "b", "c", "d", "e", "f", "g", "h", ""];
let index = 0;
let black = false;
let num = 1;
let i1;

for (let i = 0; i < 8; i++) {
  let letter = document.createElement("li");
  letter.textContent = letters[i];
  boardLetters.appendChild(letter);
  let numbers = document.createElement("li");
  numbers.textContent = num++;
  boardNumbers.appendChild(numbers);
}

for (let i = 1; i <= 64; i++) {
  const square = document.createElement("div");
  if (black) {
    square.classList.add("square");
    square.classList.add("black");
    index++;
    black = !black;
  } else {
    square.classList.add("square");
    square.classList.add("white");
    index++;
    black = !black;
  }

  board.appendChild(square);
  if (index === 8) {
    black = !black;
    index = 0;
  }
}

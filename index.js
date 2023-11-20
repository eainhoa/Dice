function playDice() {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  document
    .querySelector(".img1")
    .setAttribute("src", "./images/dice" + randomNumber1 + ".png");

  document
    .querySelector(".img2")
    .setAttribute("src", "./images/dice" + randomNumber2 + ".png");

  let h1 = document.querySelector("h1");
  if (randomNumber1 > randomNumber2) {
    h1.innerHTML = "Player 1 wins!";
  } else {
    h1.innerHTML = "Player 2 wins!";
  }
  if (randomNumber1 === randomNumber2) {
    h1.innerHTML = "It's a draw!";
  }
}
let diceButton = document.querySelector("button");
diceButton.addEventListener("click", playDice);

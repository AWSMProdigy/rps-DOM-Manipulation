let wins = 0;
let losses = 0;
let ties = 0;

const rps = ["r", "p", "s"];

function startGame() {
  let btns = document.querySelectorAll(".btn");
  console.log(btns);
  btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      let userChoice = event.target.id; // Could also be this.id
      console.log(userChoice);
      computerChoice()
    });
  });
}

function computerChoice() {
  randomIndex = Math.floor(Math.random() * rps.length);
  console.log(randomIndex);
  let computerChoice = rps[randomIndex];
  console.log(computerChoice);
}

startGame();

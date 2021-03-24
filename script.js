let wins = 0;
let losses = 0;
let ties = 0;

const rps = ["rock", "paper", "scissors"];

function startGame() {
  let btns = document.querySelectorAll(".btn");
  console.log(btns);
  btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      let userChoice = event.target.id; // Could also be this.id
      // console.log("user " + userChoice);
      let compChoice = computerChoice();
      // console.log("computer " + compChoice);
      compareChoices(userChoice, compChoice);
    });
  });
}

function computerChoice() {
  randomIndex = Math.floor(Math.random() * rps.length);
  // console.log(randomIndex);
  let computerChoice = rps[randomIndex];
  // console.log(computerChoice);
  return computerChoice;
}

function compareChoices(userSelection, computerSelection) {
  if (userSelection === computerSelection) {
    ties++;
  } else if (
    (userSelection === "rock" && computerSelection === "scissors") ||
    (userSelection === "scissors" && computerSelection === "paper") ||
    (userSelection === "paper" && computerSelection === "rock")
  ) {
    wins++;
  } else {
    losses++;
  }
  console.log("user: " + userSelection);
  console.log("computer: " + computerSelection);
  console.log("Wins: " + wins)
  console.log("Losses: " + losses)
  console.log("Ties: " + ties);
}

startGame();

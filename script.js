let playerWins = 0;
let playerLosses = 0;
let computerWins = 0;
let computerLosses = 0;

let ties = 0;
let rounds = 0;

const rps = ["rock", "paper", "scissors"];

// Start the game
function startGame() {
  console.log(rounds);
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

// TODO Figure out how to make alerts appear/dissapear properly

// Computer choice function
function computerChoice() {
  randomIndex = Math.floor(Math.random() * rps.length);
  // console.log(randomIndex);
  let computerChoice = rps[randomIndex];
  // console.log(computerChoice);
  return computerChoice;
}

// Function for comparing choices and deciding a winner
function compareChoices(userSelection, computerSelection) {
  clearPreviousAlerts();

  if (rounds < 5) {
    rounds++;
  }

  if (userSelection === computerSelection) {
    $(".tie").show();
    ties++;
  } else if (
    (userSelection === "rock" && computerSelection === "scissors") ||
    (userSelection === "scissors" && computerSelection === "paper") ||
    (userSelection === "paper" && computerSelection === "rock")
  ) {
    playerWins++;
    computerLosses++;
    $("#player-success").show();
    $("#computer-failure").show();
  } else {
    playerLosses++;
    computerWins++;
    $("#player-failure").show();
    $("#computer-success").show();
  }

  // console.log("user: " + userSelection);
  // console.log("computer: " + computerSelection);
  console.log("Wins: " + playerWins);
  console.log("Losses: " + playerLosses);
  console.log("Ties: " + ties);
  console.log("Rounds: " + rounds);
  printResults();
}

function clearPreviousAlerts() {
  console.log("function firing");
  $('.alert').hide()
}

function printResults() {
  console.log("Results placeholder");
}

startGame();

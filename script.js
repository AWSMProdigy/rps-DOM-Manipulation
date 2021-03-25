let playerWins = 0;
let playerLosses = 0;
let computerWins = 0;
let computerLosses = 0;

let ties = 0;
let rounds = 0;

const rps = ["rock", "paper", "scissors"];

// Start the game
function startGame() {
   

  
  attachButtons()
  // Call score summary function here
}

// TODO Figure out how to make alerts appear/dissapear properly

function attachButtons () {
  if (rounds <= 5) {
    rounds++;
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
}



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
  if (userSelection === computerSelection) {
    ties++;
  } else if (
    (userSelection === "rock" && computerSelection === "scissors") ||
    (userSelection === "scissors" && computerSelection === "paper") ||
    (userSelection === "paper" && computerSelection === "rock")
  ) {
    playerWins++;
    computerLosses++;
    // document.getElementById("player-success").style.display = "block";
    // document.getElementById("computer-failure").style.display = "block";
    $('#player-success').show()
    $('#computer-failure').show()
  
  } else {
    playerLosses++;
    computerWins++;
    document.getElementById("computer-success").style.display = "block";
    document.getElementById("player-failure").style.display = "block";
    $('#player-failure').show()
    $('#computer-success').show()
  
  }

  clearAlerts();
  console.log("user: " + userSelection);
  console.log("computer: " + computerSelection);
  console.log("Wins: " + playerWins);
  console.log("Losses: " + playerLosses);
  console.log("Ties: " + ties);
  printResults();
}

function clearAlerts() {
  console.log("function firing");
  $('#player-success').hide()
  $('#computer-failure').hide()
  $('#player-success').hide()
  $('#computer-failure').hide()
}

function printResults() {}

startGame();



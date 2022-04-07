const choices = ["rock", "paper", "scissors"];
const winners = [];

// plays a game of rock-paper-scissors 5 times
function game() {
  for (let i = 1; i <= 5; i++) {
    playRound();
  }
  logWins();
}

// plays a single round of rock-paper-scissors
function playRound() {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
}

// get input from player
function playerChoice() {
  let input = prompt("Choose Rock, Paper or Scissors");
  while (input == null) {
    input = prompt("Choose Rock, Paper or Scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt(
      "Choose Rock, Paper or Scissors. Spelling needs to be exact, but capitalization does not matter."
    );
    while (input == null) {
      input = prompt("Choose Rock, Paper or Scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}

// get random input from computer
function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// validate input of a user
function validateInput(choice) {
  if (choices.includes(choice)) {
    return true;
  }
  return false;
}

// declare winner
function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Tie!";
  } else if (
    (choiceP == "rock" && choiceC == "scissors") ||
    (choiceP == "paper" && choiceC == "rock") ||
    (choiceP == "scissors" && choiceC == "paper")
  ) {
    return "Player wins!";
  } else {
    return "Computer wins!";
  }
}

// log winner
function logWins() {
  let playerWins = winners.filter((item) => item == "Player wins!").length;
  let computerWins = winners.filter((item) => item == "Computer wins!").length;
  let ties = winners.filter((item) => item == "Tie!").length;
  console.log("Results:");
  console.log("Player wins:", playerWins);
  console.log("Computer wins:", computerWins);
  console.log("Ties:", ties);
}

// play rock-paper-scissors
game();

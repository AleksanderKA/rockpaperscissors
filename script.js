const choices = ["rock", "paper", "scissors"];

// plays a game of rock-paper-scissors 5 times
function game() {
  playRound();
}

// plays a single round of rock-paper-scissors
function playRound() {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  console.log(winner);
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

game();

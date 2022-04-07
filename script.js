const choices = ["rock", "paper", "scissors"];

// plays a game of rock-paper-scissors 5 times
function game() {
  playRound();
}

// plays a single round of rock-paper-scissors
function playRound() {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
}

// get input from player
function playerChoice() {
  let input = prompt("Choose Rock, Paper or Scissors");
  while (input == null) {
    input = prompt("Choose Rock, Paper or Scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  if (check == true) {
    console.log(input);
  }
}

// get random input from computer
function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
  if (choices.includes(choice)) {
    return true;
  } else {
    return false;
  }
}

game();

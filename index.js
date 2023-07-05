function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);

  if (choice === 0) {
    return "scissors";
  } else if (choice === 1) {
    return "paper";
  }
  return "rock";
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    return "You won";
  } else return "You lost";
}

function game() {
  let live = 5;

  do {
    console.log(`You have ${live} left`);
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("Enter your choice: ").toLocaleLowerCase();
    console.log("Computer choice is " + computerSelection);
    console.log("Your choice is " + playerSelection);
    let result = playRound(playerSelection, computerSelection);

    if (result == "It's a tie" || result == "You won") {
      console.log(result);
    } else {
      live--;
      console.log(result);
      if (live == 0) {
        console.log("Game Over");
      }
    }
  } while (live > 0);
}
game();

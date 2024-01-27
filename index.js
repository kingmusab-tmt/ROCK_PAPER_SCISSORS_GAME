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

function game(userChoice) {
  // let live = 5;

  // do {
    // console.log(`You have ${live} left`);
    const computerSelection = getComputerChoice();
    const playerSelection = userChoice; 
    console.log("Computer choice is " + computerSelection);
    console.log("Your choice is " + playerSelection);
    let result = playRound(playerSelection, computerSelection);
    
    if (result == "It's a tie" || result == "You won") {
      umanipulate(result, computerSelection, playerSelection);
      console.log(result);
    } else {
      // live--;
      umanipulate(result, computerSelection, playerSelection);
      console.log(result);
      // if (live == 0) {
        console.log("Game Over");
      // }
    }
  // } while (live > 0);
}
const buttons = document.querySelectorAll(".buttons");
  buttons.forEach((buttons) =>{

    buttons.addEventListener('click', function (e) {
          const userChoice = buttons.id;
          const clearAll = document.querySelector("#result-container")
          clearAll.textContent = " "
          game(userChoice);
      });
  })  
      

function umanipulate(result, computerSelection, playerSelection){
  const outcome = document.querySelector("#result-container");
  const div = document.createElement("div");
      div.className = "result";
      div.id = "comchoice";
      div.textContent = result;
      const firstChoice = document.createElement("div");
      firstChoice.className = "result";
      const compImage = document.createElement("img")
      compImage.className = "resultimage";
      compImage.src = `${computerSelection}.jpg`;
      const secondChoice = document.createElement("div");
      secondChoice.className = "result";
      const playImage = document.createElement("img")
      playImage.className = "resultimage";
      playImage.src = `${playerSelection}.jpg`;
      secondChoice.appendChild(playImage)
      firstChoice.appendChild(compImage);
      outcome.appendChild(firstChoice);
      outcome.appendChild(div);
      outcome.appendChild(secondChoice)
}
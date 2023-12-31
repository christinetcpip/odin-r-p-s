let score = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 10);
  let result;
    while(choice >= 3) {
      choice = Math.floor(Math.random() * 10);
    } 
    if (choice === 0) {
      result = "rock"; // = 0
    } else if (choice === 1){
      result = "paper"; // = 1
    } else if (choice === 2) {
      result = "scissors"; // = 2
    }
  return result;
}
function capitalize(selection) {
  
  selection = selection.toLowerCase();
  const firstLetter = selection.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = selection.slice(1);
  const capitalizedWord = firstLetterCap + remainingLetters;

  return capitalizedWord;

}
function spellCheck(userInput) {
  userInput = userInput.toLowerCase();

  if(userInput != "rock" && userInput != "paper" && userInput != "scissors") {
    return false;
  }

  return true;
}

function rockPaperScissors(user, comp) {
  let endOfGame;
  let player = capitalize(user);
  let computer = capitalize(comp);

  if (computer === player) {
    endOfGame = `Tie! ${computer} is the same as ${player}.`;
    score = 0;
  } else if (computer === "Rock" && player === "Scissors" 
  || computer === "Paper" && player === "Rock" 
  || computer === "Scissors" && player === "Paper"){
      endOfGame = `${computer} beats ${player}. You lose.`;
      score = 1;
  } else if (computer === "Paper" && player === "Scissors"
  || computer === "Rock" && player === "Paper"
  || computer === "Scissors" && player === "Rock") {
      endOfGame = `${player} beats ${computer}. You win.`;
      score = 2;
  }

  return endOfGame;

}
function game() {
  let playerSelection;
  let playerScore = 0;
  let computerScore = 0;
  
  for (let i = 0; i < 5; i++){
    playerSelection = prompt("Enter rock, paper, or scissors:");
    while(!spellCheck(playerSelection)) {
      playerSelection = prompt("Please input the correct spelling:");
    }
    const computerSelection = getComputerChoice();
    console.log(rockPaperScissors(playerSelection, computerSelection));
    if (score === 1) {
      computerScore++;
    } else if (score === 2) {
      playerScore++;
    }
    console.log(`The score for the computer is ${computerScore}, the score for the player is ${playerScore}.`)
  }

  if (computerScore > playerScore) {
    console.log(`The score for the computer is ${computerScore}, the score for the player is ${playerScore}. The computer wins.`)
  } else if (computerScore < playerScore) {
    console.log(`The score for the computer is ${computerScore}, the score for the player is ${playerScore}. The player wins.`)
  } else {
    console.log(`The score for the computer is ${computerScore}, the score for the player is ${playerScore}. It's a tie.`)
  }
}

game();

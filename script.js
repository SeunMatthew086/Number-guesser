let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  // This function will be produce a random number
  return Math.floor(Math.random() * 10);
}

function compareGuesses(humanNum,compNum,target) {
  let compGuess = Math.abs(target-compNum);
  let humanGuess = Math.abs(target-humanNum);

  if (humanGuess > 9 || humanGuess < 0) {
    alert ('Please enter a number between 0 and 9')
  if (humanGuess <= compGuess){
    return true
  } else {
    return false
  }
  }
}
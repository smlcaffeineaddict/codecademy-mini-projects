let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate a random target number
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

// Compare guesses and determine the winner
function compareGuesses(humanGuess, computerGuess, targetNumber) {
  const humanDiff = Math.abs(humanGuess - targetNumber);
  const computerDiff = Math.abs(computerGuess - targetNumber);

  return humanDiff <= computerDiff; // Human wins if their difference is less than or equal to the computer's difference
}

// Update the score based on the winner
function updateScore(winner) {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

// Advance to the next round
function advanceRound() {
  currentRoundNumber++;
}

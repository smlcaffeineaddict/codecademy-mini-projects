// Initial message
console.log('Welcome to the Rock Paper Scissors game!');

// Get user's choice and validate input
const getUserChoice = (userInput) => {
  // Validate user input
  if (['rock', 'paper', 'scissors'].includes(userInput.toLowerCase())) {
    return userInput.toLowerCase(); // Return valid choice
  } else {
    console.log("Invalid choice! Please choose rock, paper, or scissors.");
  }
}

// Generate computer's choice randomly
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0 ) {
    let computerInput = "rock";
    return computerInput;
} else if (randomNumber === 1) {
  let computerInput = "paper";
    return computerInput;
} else if (randomNumber === 2) {
  let computerInput = "scissors";
    return computerInput;
} else {
  console.log("Invalid.");
}

}

// Determine the winner based on choices
function determineWinner(computerChoice, userChoice) {
  // Handle tie scenario
  if (computerChoice === userChoice) {
    return "The game is a tie!";
  } else {
    // Handle non-tie scenarios based on game rules
    if ((userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')) {
      return "You won! ";
    } else {
      return "The computer won! ";
    }
  }
}

// Start and play the game
function playGame() {
  console.log('Choose rock, paper, or scissors: ');
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();

  console.log("You chose:", userChoice);
  console.log("Computer chose:", computerChoice);

  const winnerMessage = determineWinner(computerChoice, userChoice);
  console.log(winnerMessage);
}

// Start the game
playGame();

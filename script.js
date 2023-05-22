function getComputerChoice() {
let randomNumber = (Math.floor(Math.random() * 3))
// let result;
// if (randomNumber == 0) {return result = 'rock'}
// else if (randomNumber == 1) {return result = 'paper'}
// else if (randomNumber == 2) {return result = 'scissors'}; 
switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
}
};

function playRound(playerSelection, computerSelection) {
// if (playerSelection == computerSelection) {return "It's a Tie! Try again"}
// else if (playerSelection == 'rock' && computerSelection == 'scissors') 
// {return "You Win! Rock beats Scissors"}
// else if (playerSelection == 'rock' && computerSelection == 'paper')
// {return "You Lose! Paper beats Rock"}
// else if (playerSelection == 'paper' && computerSelection == 'rock') 
// {return "You Win! Paper beats Rock"}
// else if (playerSelection == 'paper' && computerSelection == 'scissors')
// {return "You Lose! Scissors beats Paper"}
// else if (playerSelection == 'scissors' && computerSelection == 'paper') 
// {return "You Win! Scissors beats Paper"}
// else if (playerSelection == 'scissors' && computerSelection == 'rock')
// {return "You Lose! Rock beats Scissors"};
if (playerSelection === computerSelection) {
    return "It's a Tie! Try again";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
};

const playerSelection = "scissors";
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));



// for the refactor: 
// const playerSelection = getPlayerChoice();
// 

// function game() {
    // Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
    // }
    
    // other stuff 
    
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
// function getPlayerChoice() {
// let choice = prompt('choose rock, paper, or scissors')
// convert the answer to lowercase *OR* do basic equality to see if choice == r, p, or s
// if the answer is equal to 'rock', 'paper', or 'scissors', return
// if it's equal to anything else, prompt the user to write a different answer
// }
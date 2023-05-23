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

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

// function game() {
// Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
// 

// playRound(playerSelection, computerSelection);
// let playerScore;
// let computerScore;
// if player wins, playerScore = playerScore += 1;
// if computer wins, computerScore = computerScore += 1;
// if tie, do nothing
// play another round
// continue until playerScore or computerScore = 3
// declare winner + losert
// }

// for the refactor: 
// const playerSelection = getPlayerChoice();
// 

function getPlayerChoice() {
    // Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
    let choice = prompt('choose rock, paper, or scissors').toLowerCase()

    // if the answer is equal to 'rock', 'paper', or 'scissors', return

    if (choice == 'rock') {
        return 'rock'
    }
    else if (choice == 'paper') {
        return 'paper'
    }
    else if (choice == 'scissors') {
        return 'scissors'
    } else {
        return getPlayerChoice();
    }

}
let playerScore = 0;
let computerScore = 0;
const winningScore = 3;
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', logText))

function logText(e) {

    const computerSelection = getComputerChoice();
    const playerSelection = this.classList.value;
    playRound(playerSelection, computerSelection);
    // if (playerScore === winningScore) {
    //     console.log('GAME OVER! YOU WIN! FINAL SCORE:');
    // } else if (computerScore === winningScore) {
    //     console.log('GAME OVER! YOU LOSE! FINAL SCORE:');
    // }
    // displayCurrentScore();
}
// function game() {

//     while (playerScore < winningScore && computerScore < winningScore) {

//         const playerSelection = getPlayerChoice();
//         const computerSelection = getComputerChoice();
//         playRound(playerSelection, computerSelection);
//         if (playerScore === winningScore) {
//             console.log('GAME OVER! YOU WIN! FINAL SCORE:');
//         } else if (computerScore === winningScore) {
//             console.log('GAME OVER! YOU LOSE! FINAL SCORE:');
//         }
//         displayCurrentScore();
//     }

// }
function getComputerChoice() {
    let randomNumber = (Math.floor(Math.random() * 3))
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

// function getPlayerChoice() {
//     let choice = prompt('choose rock, paper, or scissors')
//     const lowercaseChoice = choice.toLowerCase();
//     if (lowercaseChoice === 'rock' || lowercaseChoice === 'paper' || lowercaseChoice === 'scissors') {
//         return lowercaseChoice;
//     } else {
//         console.log('Invalid choice. Please try again.');
//         return getPlayerChoice();
//     }
// }

function playRound(playerSelection, computerSelection) {

    // if (playerSelection === null || computerSelection === null) {
    //     // Handle cancellation
    //     console.log('Game canceled.');
    //     return;
    // }

    const playerSelectionFormatted = (playerSelection.charAt(0).toUpperCase()) + playerSelection.slice(1)
    const computerSelectionFormatted = (computerSelection.charAt(0).toUpperCase()) + computerSelection.slice(1)

    if (playerSelection === computerSelection) {
        console.log("It's a Tie! Try again");
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        console.log(`You Win! ${playerSelectionFormatted} beats ${computerSelectionFormatted}`);
        playerScore += 1;
    } else {
        console.log(`You Lose! ${computerSelectionFormatted} beats ${playerSelectionFormatted}`);
        computerScore += 1;
    }
};

function displayCurrentScore() {
    const currentScore = `MAN: ${playerScore} ... MACHINE ${computerScore}`;
    console.log(currentScore);
}

// game();
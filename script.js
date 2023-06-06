let playerScore = 0;
let computerScore = 0;
const winningScore = 5;
const container = document.querySelector('.results');
const resultPara = document.createElement('p');
const currentScorePara = document.createElement('p');
const finalScorePara = document.createElement('p');
const resetButton = document.createElement('button')
resetButton.textContent = "Reset";
resetButton.addEventListener('click', resetGame);
const choices = document.querySelectorAll('.choice');

initalizeGame();

function initalizeGame() {
    choices.forEach(choice => choice.addEventListener('click', playGame))
}

function playGame() {
    const computerSelection = getComputerChoice();
    const playerSelection = this.id;
    if (playerScore < winningScore && computerScore < winningScore) {
        playRound(playerSelection, computerSelection);
    };
    if (playerScore === winningScore || computerScore === winningScore) {
        endGame();
    };
    displayCurrentScore();
}

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

function playRound(playerSelection, computerSelection) {
    const playerSelectionFormatted = (playerSelection.charAt(0).toUpperCase()) + playerSelection.slice(1)
    const computerSelectionFormatted = (computerSelection.charAt(0).toUpperCase()) + computerSelection.slice(1)

    if (playerSelection === computerSelection) {
        resultPara.textContent = "It's a Tie! Try again";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        resultPara.textContent = `You Win! ${playerSelectionFormatted} beats ${computerSelectionFormatted}`;
        playerScore += 1;
    } else {
        resultPara.textContent = `You Lose! ${computerSelectionFormatted} beats ${playerSelectionFormatted}`
        computerScore += 1;
    }
    container.appendChild(resultPara);
};

function displayCurrentScore() {
    const currentScore = `MAN: ${playerScore} ... MACHINE ${computerScore}`;
    currentScorePara.textContent = currentScore;
    container.appendChild(currentScorePara);
}

function endGame() {
    choices.forEach(choice => choice.removeEventListener('click', playGame));

    if (playerScore === winningScore) {
        finalScorePara.textContent = 'GAME OVER! YOU WIN! FINAL SCORE:';
        finalScorePara.style.color = 'green';
    } else if (computerScore === winningScore) {
        finalScorePara.textContent = 'GAME OVER! YOU LOSE! FINAL SCORE:';
        finalScorePara.style.color = 'red';
    }
    container.appendChild(finalScorePara);
    container.appendChild(resetButton);

}

function resetGame() {
    initalizeGame();
    playerScore = 0;
    computerScore = 0;
    resultPara.textContent = '';
    currentScorePara.textContent = '';
    finalScorePara.textContent = '';
    container.removeChild(resetButton);

}




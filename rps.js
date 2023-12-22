// Start the game. Initialize global variables.
let playerWins = 0;
let computerWins = 0;
const choices = ['rock', 'paper', 'scissors'];

// Get the results html elements.
const paraRoundResults = document.querySelector('#paraRoundResults');
const paraScorePlayer = document.querySelector('#paraScorePlayer');
const paraScoreComputer = document.querySelector('#paraScoreComputer');

// Get the rock, paper and scissors buttons and add eventListener to them.
// Play a round when clicked.
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.id);
    });
});


function game(playerSelection) {
    // The computer chooses an option.
    computerSelection = getComputerChoice();
    // Play a round between computer and player and store the winner (or tie).
    roundWinner = playRound(computerSelection, playerSelection);
    // Update the results on the screen.
    updateResults(computerSelection, playerSelection, roundWinner);
    // Check for a winner.
    if (playerWins === 5 || computerWins === 5) {
        gameOver();
    }
}


function getComputerChoice() {
    // Computer randomly chooses one of the available choices.
    return choices[Math.floor(Math.random() * choices.length)];
}


function playRound(computerSelection, playerSelection) {
    // Check for a tie.
    if (computerSelection === playerSelection) return 'tie';
    // Compare the player and computer choices.
    // Return the winner as 'player' or 'computer' according to the rules.
    switch(computerSelection) {
        case 'rock':
            roundWinner = (playerSelection === 'paper') ? 'player' : 'computer';
            break;
        case 'paper':
            roundWinner = (playerSelection === 'scissors') ? 'player' : 'computer';
            break;
        case 'scissors':
            roundWinner = (playerSelection === 'rock') ? 'player' : 'computer';
            break;
        }
        return roundWinner;
}   


function updateResults(computerSelection, playerSelection, roundWinner) {
    // Process the results to increment scores as appropriate, and return an
    // appropriate message depending on the winner.
    let resultMessage = processResults(roundWinner);
    
    // Update results on the screen.
    paraRoundResults.innerText = 
    `I chose: ${computerSelection} --- You chose: ${playerSelection}
    ${resultMessage}`
    paraScorePlayer.textContent = `Player score: ${playerWins}`;
    paraScoreComputer.textContent = `Computer score: ${computerWins}`;
}


function processResults(roundWinner) {
    switch (roundWinner) {
        case 'tie':
            return("It was a tie! Let's play that round again...");
        case 'player':
            playerWins++;
            return("You won that round.");
        case 'computer':
            computerWins++;    
            return("I won that round.");
    }
};


function gameOver() {
    alert((playerWins === 5) ? "You win!" : "I win!");
    // Reset variables and visible results.
    playerWins = 0;
    computerWins = 0;
    paraRoundResults.textContent = '';
    paraScorePlayer.textContent = '';
    paraScoreComputer.textContent = '';
}
// Start the game. Initialize variables.
let roundCount = 0;
let roundWinner = '';

let playerWins = 0;
let computerWins = 0;

const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    // Computer randomly chooses one of the available choices.
    return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
    // Get text input from player input for their choice.
    // Continue until a valid option is chosen.
    keepGoing = true;
    while (keepGoing) {
        // Prompt the player for their choice.
        playerSelection = prompt("Rock, paper, or scissors? ").toLowerCase().trim();
        if (playerSelection === 'rock' 
         || playerSelection === 'paper'
         || playerSelection === 'scissors') {
            // If it matches one of the options, break out of the loop.
            keepGoing = false;
        }
    }
    return playerSelection;
}

function playRound(computerSelection, playerSelection) {
    // Check for a tie.
    if (computerSelection === playerSelection) return 'tie';
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
        default:
            roundWinner = 'error';
        }
    return roundWinner;
}   

function game(rounds) {
    roundCount = 0;
    while (roundCount < rounds) {
        // Update with current status in console.
        console.log(`Round ${roundCount + 1} of ${rounds}`);
        console.log(`Your score: ${playerWins}`)
        console.log('---------------------------------------');

        // Get the choices of both computer and player and play the round.
        computerSelection = getComputerChoice();
        playerSelection = getPlayerChoice();
        roundWinner = playRound(computerSelection, playerSelection);

        // Update round result in console and increment counters.
        console.log(`I chose: ${computerSelection} --- You chose: ${playerSelection}`);
        switch (roundWinner) {
            case 'tie':
                console.log("It was a tie! Let's play that round again...");
                break;
            case 'player':
                console.log("You won that round.");
                playerWins++;
                roundCount++;
                break;
            case 'computer':
                console.log("I won that round.");
                roundCount++;
                break;
            default:
                console.log(`Unexpected result in roundWinner: ${roundWinner}`);
        }
    }   
    return playerWins;
}

const rounds = parseInt(prompt("Best of how many rounds? ").trim());
if (rounds > 0) {
    playerWins = game(rounds);
    console.log(`Game over --- You won ${playerWins} out of ${rounds} rounds.`);
}
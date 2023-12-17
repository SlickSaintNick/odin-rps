# odin-rps
Rock Paper Scissors for The Odin Project

## Pseudocode
Start the game
- Initialize number of rounds complete to 0.
- Initialize choices to 'rock', 'paper', 'scissors
- WHILE rounds complete is less than 5:
    - RANDOM computer chooses 'rock' 'paper' or 'scissors'    
    - GET input from player, trimmed, lowercase 
        - Check the input is valid, if not repeat the question.
    - FUNCTION play a round
        IF computer choice is same as player choice, RETURN 'tie'.
        CASE computer's choice:
            'rock':
                IF player choice is 'paper'
                    RETURN 'player wins'
                ELSE
                    RETURN 'computer wins'
            'paper':
                IF player choice is 'scissors'
                    RETURN 'player wins'
                ELSE
                    RETURN 'computer wins'
            scissors:
                IF player choice is 'rock'
                    RETURN 'player wins'
                ELSE
                    RETURN 'computer wins'
    - IF the round was a 'tie', reset as needed and CONTINUE
    - ELSE IF the player won:
        - Increment the win count
    - INCREMENT the number of rounds
- OUTPUT the final result to the user as win count / 5.

Functions and variables (as dictated by TOP):
```js

computerSelection = getComputerChoice();
playerSelection = prompt();
playRound(playerSelection, computerSelection);
game(rounds)
```

## My initial thinking:
### Structure using IF - ELSE
a = b -> tie
Simple IF ELSE or MATCH?
r, p -> player      0 1 P
r, s -> computer    0 2 C
p, r -> computer    1 0 C
p, s -> player      1 2 P
s, r -> player      2 0 P
s, p -> computer    2 1 C

### Structure using Recursion?

Can do with recursion? Hmm. This seems to already be at the simplest case, so not recursion.

### Reduce number of conditionals?

I can reduce to 4 conditions instead of 6 but at the cost of the code making sense.

P
0 1     a = b - 1
1 2     a = b - 1
2 0     a = b + 2

C
0 2     a = b - 2
1 0     a = b + 1
2 1     a = b + 1

Decision: Use simple IF ELSE MATCH. Rather than r, p, s, use rock paper scissors for readability.
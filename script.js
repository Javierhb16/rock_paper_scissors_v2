function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice < 0.33) {
        return "rock";
    }
    if (computerChoice < 0.66) {
        return "paper";
    }
    return "scissors";
}

function getHumanChoice() {
    return prompt("Rock, Paper or Scissors?").toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        // Check ties first
        if (humanChoice == "rock" && computerChoice == "rock") {
            console.log("It's a tie!");
        } else if (humanChoice == "paper" && computerChoice == "paper") {
            console.log("It's a tie!");
        } else if (humanChoice == "scissors" && computerChoice == "scissors") {
            console.log("It's a tie!");
        }
        // Check player wins
        else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You win! Paper beats Rock");
            humanScore++;
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You win! Rock beats Scissors");
            humanScore++;
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You win! Scissors beats Paper");
            humanScore++;
        }
        // Check computer wins
        else if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        } 
    }

    function checkWinner(humanFinalScore, computerFinalScore) {
        if (humanFinalScore > computerFinalScore) return "You won! The final score is: " + humanFinalScore + "-" + computerFinalScore;
        else if (humanFinalScore < computerFinalScore) return "You lost! The final score is: " + humanFinalScore + "-" + computerFinalScore;
        else return "Tie! The final score is: " + humanFinalScore + "-" + computerFinalScore;
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(checkWinner(humanScore, computerScore));
}

playGame();
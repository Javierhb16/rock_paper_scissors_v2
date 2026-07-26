let humanScore = 0;
let computerScore = 0;

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
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors");
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats Paper");
    }
    // Check computer wins
    else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock");
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors");
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats Paper");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
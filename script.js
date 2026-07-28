// const rock = document.getElementById("rock");
// const paper = document.getElementById("paper");
// const scissors = document.getElementById("scissors");

const buttons = document.querySelectorAll("button");

let playerScore = document.querySelector(".playerScore").textContent;
let computerScore = document.querySelector(".computerScore").textContent;
let result = document.querySelector(".result");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        //getplayerChoice(button.id);
        playRound(button.id, getComputerChoice());
    })
})

// while (parseInt(playerScore) < 5 || parseInt(computerScore) < 5) {
//     let playerChoice = getplayerChoice();
//     let computerChoice = getComputerChoice();
//     playRound(playerChoice, computerChoice);
// }

function playRound(playerChoice, computerChoice) {
    // Check ties first
    if (playerChoice == "rock" && computerChoice == "rock") {
        console.log("It's a tie!");
    } else if (playerChoice == "paper" && computerChoice == "paper") {
        console.log("It's a tie!");
    } else if (playerChoice == "scissors" && computerChoice == "scissors") {
        console.log("It's a tie!");
    }
    // Check player wins
    else if (playerChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats Paper");
        humanScore++;
    }
    // Check computer wins
    else if (playerChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }
}

function getPlayerChoice(choice) {
    return choice;
}

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

// function getplayerChoice() {
//     return prompt("Rock, Paper or Scissors?").toLowerCase();
// }

// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;
    
//     function playRound(playerChoice, computerChoice) {
//         // Check ties first
//         if (playerChoice == "rock" && computerChoice == "rock") {
//             console.log("It's a tie!");
//         } else if (playerChoice == "paper" && computerChoice == "paper") {
//             console.log("It's a tie!");
//         } else if (playerChoice == "scissors" && computerChoice == "scissors") {
//             console.log("It's a tie!");
//         }
//         // Check player wins
//         else if (playerChoice == "paper" && computerChoice == "rock") {
//             console.log("You win! Paper beats Rock");
//             humanScore++;
//         } else if (playerChoice == "rock" && computerChoice == "scissors") {
//             console.log("You win! Rock beats Scissors");
//             humanScore++;
//         } else if (playerChoice == "scissors" && computerChoice == "paper") {
//             console.log("You win! Scissors beats Paper");
//             humanScore++;
//         }
//         // Check computer wins
//         else if (playerChoice == "rock" && computerChoice == "paper") {
//             console.log("You lose! Paper beats Rock");
//             computerScore++;
//         } else if (playerChoice == "scissors" && computerChoice == "rock") {
//             console.log("You lose! Rock beats Scissors");
//             computerScore++;
//         } else if (playerChoice == "paper" && computerChoice == "scissors") {
//             console.log("You lose! Scissors beats Paper");
//             computerScore++;
//         } 
//     }

//     function checkWinner(humanFinalScore, computerFinalScore) {
//         if (humanFinalScore > computerFinalScore) return "You won! The final score is: " + humanFinalScore + "-" + computerFinalScore;
//         else if (humanFinalScore < computerFinalScore) return "You lost! The final score is: " + humanFinalScore + "-" + computerFinalScore;
//         else return "Tie! The final score is: " + humanFinalScore + "-" + computerFinalScore;
//     }

//     // for (let i = 0; i < 5; i++) {
//     //     const humanSelection = getplayerChoice();
//     //     const computerSelection = getComputerChoice();
//     //     playRound(humanSelection, computerSelection);
//     // }

//     console.log(checkWinner(humanScore, computerScore));
// }

// // playGame();
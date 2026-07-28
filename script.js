const buttons = document.querySelectorAll("button");

let playerScore = 0;
let computerScore = 0;
let result = document.querySelector(".result");
let gameFinished = false;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
    })
})

function playRound(playerChoice, computerChoice) {
    if (playerScore < 5 && computerScore < 5) {
        // Check ties first
        if (playerChoice == "rock" && computerChoice == "rock" || 
                playerChoice == "paper" && computerChoice == "paper" ||
                playerChoice == "scissors" && computerChoice == "scissors") {
            resultTie(playerChoice);
        } 
        // Check player wins
        else if (playerChoice == "paper" && computerChoice == "rock" ||
                playerChoice == "rock" && computerChoice == "scissors" ||
                playerChoice == "scissors" && computerChoice == "paper") {
            resultWin(playerChoice, computerChoice);
            playerScore++;
            document.querySelector(".playerScore").textContent = playerScore;
        }
        // Check computer wins
        else if (playerChoice == "rock" && computerChoice == "paper" ||
                playerChoice == "scissors" && computerChoice == "rock" ||
                playerChoice == "paper" && computerChoice == "scissors") {
            resultLose(playerChoice, computerChoice);
            computerScore++;
            document.querySelector(".computerScore").textContent = computerScore;
        }
    }
    if ((playerScore == 5 || computerScore == 5) && !gameFinished) {
        gameFinished = true;
        let resetBtn = document.createElement("button");
        resetBtn.textContent = "Play again";
        resetBtn.className = "resetBtn";
        resetBtn.addEventListener("click", () => {
            result.textContent = "Choose Rock, Paper or Scissors to start the game";
            playerScore = 0;
            computerScore = 0;
            document.querySelector(".playerScore").textContent = playerScore;
            document.querySelector(".computerScore").textContent = computerScore;
            gameFinished = false;
        });
        result.append(resetBtn);
    }
}

function resultTie(choice) {
    // Capitalize choice
    choice = choice.charAt(0).toUpperCase() + choice.slice(1);
    result.textContent = "It's a tie! Both of you used " + choice;
}

function resultWin(playerChoice, computerChoice) {
    // Capitalize both choices
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    result.textContent = "You win! " + playerChoice + " beats " + computerChoice;
}

function resultLose(playerChoice, computerChoice) {
    // Capitalize both choices
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    result.textContent = "You lose! " + computerChoice + " beats " + playerChoice;
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
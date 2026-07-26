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
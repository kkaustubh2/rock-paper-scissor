const btn = document.querySelectorAll(".choice");
let playerScore = 0; // Numerical score
const playerScoreDisplay = document.querySelector(".playerScore"); // HTML element
let computerScoreCount = 0;
const computerScoreDisplay = document.querySelector(".computerScore");
const output = document.querySelector(".output");

function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3);

    if (rand == 0) {
        return "rock";
    } else if (rand == 1) {
        return "paper";
    } else {
        return "scissor";
    }
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    if (playerChoice === computerChoice) {
        output.textContent = "It's a Tie";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissor") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissor" && computerChoice === "paper")
    ) {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        output.textContent = "Player Wins!";
    } else {
        computerScoreCount++;
        computerScoreDisplay.textContent = computerScoreCount;
        output.textContent = "Computer Wins!";
    }
    if (playerScore === 5) {
        output.textContent = "Player wins the game";
    } else if (computerScoreCount === 5) {
        output.textContent = "Computer wins the game";
    }
}

btn.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(`${button.textContent} is clicked`);

        const playerChoice = button.textContent.toLowerCase();

        playRound(playerChoice);
    });
});

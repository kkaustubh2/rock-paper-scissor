let playerScore = 0;
let computerScore = 0;

let randomNumberForComputer = Math.floor(Math.random() * 3 + 1);
//let userInput = prompt("Enter a number: 1=Rock, 2=Paper, 3=Scissor ");
let playerChoice = Number(userInput);

let playerInfo = getPlayerChoice(playerChoice);
let computerInfo = getComputerChoice(randomNumberForComputer);
function getComputerChoice(randomNumber) {
    if (randomNumber == 1) {
        return "Rock";
    } else if (randomNumber == 2) {
        return "Paper";
    } else {
        return "Scissor";
    }
}
function getPlayerChoice(playerChoice) {
    if (playerChoice == 1) {
        return "Rock";
    } else if (playerChoice == 2) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

function getScore(player, computer) {
    if (player == computer) {
        return "It is a tie";
    }
    if (
        (player == "Rock" && computer == "Scissor") ||
        (player == "Paper" && computer == "Rock") ||
        (player == "Scissor" && computer == "Paper")
    ) {
        playerScore += 1;
        return "Player wins!";
    } else {
        computerScore += 1;
        return "Computer wins!";
    }
}
console.log("player ", playerInfo);
console.log("computer", computerInfo);
console.log(getScore(playerInfo, computerInfo));
console.log("Player Score: ", playerScore);
console.log("Computer Score: ", computerScore);

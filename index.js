const btnRock = document.getElementById("btnRock");
const btnPaper = document.getElementById("btnPaper");
const btnScissors = document.getElementById("btnScissors");
const results = document.getElementById("results");
const playerScoreText = document.getElementById("playerScore");
const computerScoreText = document.getElementById("computerScore");
var playerScore = 0;
var computerScore = 0;

btnRock.addEventListener('click', () => playRound("Rock", getComputerChoice()));
btnPaper.addEventListener('click', () => playRound("Paper", getComputerChoice()));
btnScissors.addEventListener('click', () => playRound("Scissors", getComputerChoice()));

refresh();

function refresh() {
    if (playerScore < 5 && computerScore < 5) {
        playerScoreText.innerText = `Player Score: ${playerScore}`;
        computerScoreText.innerText = `Computer Score: ${computerScore}`;
    } else { 
        if (playerScore >= 5) {
            playerScoreText.innerText = "Player Wins!";
            computerScoreText.innerText = "";
        } else {
            playerScoreText.innerText = "Computer Wins!";
            computerScoreText.innerText = "";
        }
        playerScore = 0;
        computerScore = 0;
    }
}

function getComputerChoice() {
    const rng = Math.ceil(Math.random() * 3);
    switch (rng) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
        default:
            return null;
    }
}

function printWinner(player, computer) {
    results.innerText = `You win! ${player} beats ${computer}!`;
    playerScore += 1;
}

function printLoser(player, computer) {
    results.innerText = `You lose! ${computer} beats ${player}!`;
    computerScore += 1;
}

function printTie(player, computer) {
    results.innerText = `You tie! Both chose ${computer}!`;
}

function printInvalid(player) {
    results.innerText = `Invalid entry: "${player}". Please enter another value!`;
}

function playRound(player, computer) {
    if (player == null) {
        printInvalid("null");
        return;
    }
    let playerFormatted = "";
    let playerLower = player.toLowerCase();
    switch (playerLower) {
        case "rock":
            playerFormatted = playerLower.charAt(0).toUpperCase() + playerLower.slice(1);
            switch (computer) {
                case "Rock":
                    printTie(playerFormatted, computer);
                    break;
                case "Paper":
                    printLoser(playerFormatted, computer);
                    break;
                case "Scissors":
                    printWinner(playerFormatted, computer);
                    break;
                default:
                    break;
            }
            break;
        case "paper":
            playerFormatted = playerLower.charAt(0).toUpperCase() + playerLower.slice(1);
            switch (computer) {
                case "Rock":
                    printWinner(playerFormatted, computer);
                    break;
                case "Paper":
                    printTie(playerFormatted, computer);
                    break;
                case "Scissors":
                    printLoser(playerFormatted, computer);
                    break;
                default:
                    break;
            }
            break;
        case "scissors":
            playerFormatted = playerLower.charAt(0).toUpperCase() + playerLower.slice(1);
            switch (computer) {
                case "Rock":
                    printLoser(playerFormatted, computer);
                    break;
                case "Paper":
                    printWinner(playerFormatted, computer);
                    break;
                case "Scissors":
                    printTie(playerFormatted, computer);
                    break;
                default:
                    break;
            }
            break;
        default:
            printInvalid(player);
            break;
    }

    refresh();
}
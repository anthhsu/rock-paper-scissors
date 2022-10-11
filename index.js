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
    console.log(`You win! ${player} beats ${computer}!`);
}

function printLoser(player, computer) {
    console.log(`You lose! ${computer} beats ${player}!`);
}

function printTie(player, computer) {
    console.log(`You tie! Both chose ${computer}!`);
}

function printInvalid(player) {
    console.log(`Invalid entry: "${player}". Please enter another value!`);
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
}

function playGame() {    
    const playerChoice = prompt();
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
}

function main() {
    const btnRock = document.getElementById("btnRock");
    const btnPaper = document.getElementById("btnPaper");
    const btnScissors = document.getElementById("btnScissors");
    
    btnRock.addEventListener('click', () => playRound("Rock", getComputerChoice()));
    btnPaper.addEventListener('click', () => playRound("Paper", getComputerChoice()));
    btnScissors.addEventListener('click', () => playRound("Scissors", getComputerChoice()));
}

main();
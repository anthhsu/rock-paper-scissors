function getComputerChoice() {
    const rng = Math.ceil(Math.random() * 3);
    switch (rng) {
        case 1:
            console.log("Rock");
            break;
        case 2:
            console.log("Paper");
            break;
        case 3:
            console.log("Scissors");
            break;
        default:
            break;
    }
}

getComputerChoice();
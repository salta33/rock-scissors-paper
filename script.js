function getComputerChoice() {
    //outputs randomly either 0, 1, or 2;
    return Math.floor(Math.random() * 3);
    //number 0 represents rock;
    //number 1 represents scissors;
    //number 2 represents paper;
};

function getPlayerChoice() {
    //gets user to input rock, scissors or paper and returns a number representing each word as 0,1, or 2
    let checkCorrectInput = 0;
    let playerInput = "";

    //prompts user to enter value again if user enters a value that is not rock, scissors, or paper
    do {
        playerInput = prompt("Please input - Rock, Scissors, or Paper").toLowerCase();

        if (playerInput === "rock" || playerInput === "scissors" || playerInput === "paper") {
            checkCorrectInput = 1;
        }
    } while (checkCorrectInput !== 1);

    //Evaluates each input and returns a number, accordingly
    if (playerInput === "rock") {
        return 0;
    } else if (playerInput === "scissors") {
        return 1;
    } else if (playerInput === "paper") {
        return 2;
    }
}

function playRound(playerSelection, computerSelection) {
    //compares playerSelection and computerSelection and assigns a string value to roundWinner; returns roundWinner
    let roundWinner = "";

    if (playerSelection == 0 && computerSelection == 1) {
        roundWinner = "You Win! Rock beats Scissors";

    } else if (playerSelection == 0 && computerSelection == 2) {
        roundWinner = "You Lose! Paper beats Rock";


    } else if (playerSelection == 1 && computerSelection == 0) {
        roundWinner = "You Lose! Rock beats Scissors";

    } else if (playerSelection == 1 && computerSelection == 2) {
        roundWinner = "You Win! Scissors beats Paper";


    } else if (playerSelection == 2 && computerSelection == 0) {
        return "You Win! Paper beats Rock";


    } else if (playerSelection == 2 && computerSelection == 1) {
        roundWinner = "You Lose! Scissors beats Paper";

    } else {
        roundWinner = "it is a tie";
    }
    return roundWinner;

}

function game() {
    let playerTurn = "";
    let computerTurn = "";
    let playerPoints = 0;
    let computerPoints = 0;
    let roundResult = "";
    for (let i = 0; i < 5; i++) {
        computerTurn = getComputerChoice();
        playerTurn = getPlayerChoice();
        roundResult = playRound(playerTurn, computerTurn);
        if (roundResult.includes("You Win")) {
            playerPoints++;
        } else if (roundResult.includes("You Lose")) {
            computerPoints++;
        }
        console.log(roundResult + " The score is:" + playerPoints + " to " + computerPoints);
    }
}
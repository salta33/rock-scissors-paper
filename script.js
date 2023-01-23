const humanScore = document.querySelector('#yourPointsId');
const computerScore = document.querySelector('#compPointsId');
const result = document.querySelector('.resultsContainer');

function getComputerChoice() {
    //outputs randomly either 0, 1, or 2;
    return Math.floor(Math.random() * 3);
    //number 0 represents rock;
    //number 1 represents scissors;
    //number 2 represents paper;
}

   let yourScore = 0;
   let compScore = 0;


function playRound(playerSelection, computerSelection) {
    let drawPrompt = "It is a draw! Try again!";
if (yourScore <5 && compScore <5) {
    if (playerSelection === computerSelection){
        result.textContent = drawPrompt;
    }
    else if (playerSelection === 0 && computerSelection === 1) {
        result.textContent = "You Win! Rock beats Scissors";
        humanScore.textContent = (yourScore+=1);

    } else if (playerSelection === 0 && computerSelection === 2) {
        result.textContent="You Lose! Paper beats Rock";
        computerScore.textContent=(compScore+=1);
    } else if (playerSelection === 1 && computerSelection === 0) {
        result.textContent = "You Lose! Rock beats Scissors";
        computerScore.textContent=(compScore+=1);
    } else if (playerSelection === 1 && computerSelection === 2) {
        result.textContent="You Win! Scissors beats Paper";
        humanScore.textContent = (yourScore+=1);
    } else if (playerSelection === 2 && computerSelection === 0) {
        result.textContent = "You Win! Paper beats Rock";
        humanScore.textContent = (yourScore+=1);
    } else if (playerSelection === 2 && computerSelection === 1) {
        result.textContent = "You Lose! Scissors beats Paper";
        computerScore.textContent=(compScore+=1);
    } 
    }

    if (yourScore == 5){
        result.textContent = "Congrats! You won the computer in this game!";
    }else if (compScore == 5){
        result.textContent = "Nice try, but Computer won!!"
    }}

    //clicking rock

    const rock = document.querySelector('#rock');
    rock.addEventListener('click', () =>{
        playerSelection=0;
        computerSelection=getComputerChoice();
        playRound(playerSelection,computerSelection);

    })

    const paper=document.querySelector('#paper');
    paper.addEventListener('click', () =>{
        playerSelection=2;
        computerSelection=getComputerChoice();
        playRound(playerSelection, computerSelection);
       
    })

    const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', () =>{
        playerSelection=1;
        computerSelection=getComputerChoice();
        playRound(playerSelection,computerSelection);
    
    })

    const button = document.querySelector('.again');
    button.addEventListener('click', () =>{
        yourScore=0;
        humanScore.textContent=yourScore;
        compScore=0;
        computerScore.textContent=compScore;
        result.textContent="";
     
    })




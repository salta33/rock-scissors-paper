
    function getComputerChoice(){
     return Math.floor(Math.random()*3); 
     //outputs randomly either 0, 1, or 2;
    };

    function getPlayerChoice(){
    let playerInput=prompt("Please input rock, scissors, or paper");
    if (playerInput.toLowerCase() === "rock"){
        return 0;
    } else if (playerInput.toLowerCase() === "scissors"){
        return 1;
    } else if (playerInput.toLowerCase() === "paper"){
        return 2;
    } return "Please input correctly either Rock, Scissors, or Paper";
    }


    function playRound(playerSelection, computerSelection){
        let roundWinner="";
   
        if (playerSelection == 0 && computerSelection == 1){
            roundWinner = "You Win! Rock beats Scissors";
            
        }

        else if (playerSelection == 0 && computerSelection == 2){
            roundWinner = "You Lose! Paper beats Rock";
            
            
        }

        else if (playerSelection == 1 && computerSelection == 0){
            roundWinner = "You Lose! Rock beats Scissors";
            
        }

       else  if (playerSelection == 1 && computerSelection == 2){
        roundWinner = "You Win! Scissors beats Paper";

            
        }

       else if (playerSelection == 2 && computerSelection == 0){
            return "You Win! Paper beats Rock";
            x++;
        
        }

        else if (playerSelection == 2 && computerSelection == 1){
            roundWinner = "You Lose! Scissors beats Paper";
      
        } else {
            roundWinner = "it is a tie";
        }
        return roundWinner;
       
        }

        let computerSelection=getComputerChoice();
        let playerSelection=getPlayerChoice();


       function game(){
        let playerTurn="";
        let computerTurn="";
        let playerPoints=0;
        let computerPoints=0;
        let roundResult="";
       for (let i=0; i<2; i++){
        computerTurn=getComputerChoice();
        playerTurn=getPlayerChoice();
        
        roundResult = playRound(playerTurn,computerTurn);
        if (roundResult.includes("You Win")){
            playerPoints++;
        }else if (roundResult.includes("You Lose")){
            computerPoints++;
        }
        console.log(roundResult + "The score is:" +playerPoints +"to"+computerPoints);

       }
    }


    

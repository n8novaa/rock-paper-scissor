



function getComputerChoice()
{
    
    const choice = [ "rock", "paper", "scissor" ];
    const randomIndex =  Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}

function getHumanChoice()
{

    const choice = [ "rock", "paper", "scissor" ];
    const userInput = prompt("enter the required choice from rock paper scissor").toLowerCase();
    if (choice.includes(userInput))
    {
        return userInput;
    }
    else
    {
       alert("invalid choice enter rock paper or scissor");
       return getHumanChoice();
    }
}




function playgame()
{
    let humanScore = 0;
    let computerScore = 0;
    let i = prompt("enter the number of times you want to play the game");

 

    function playRound(humanChoice, computerChoice)
    {
        if (humanChoice === computerChoice)
        {
            console.log("its a tie, play again!!!");
            console.log(` both chose ${humanChoice}`);
        }
    
        else if ((humanChoice==="rock"  && computerChoice==="scissor") ||
                (humanChoice==="scissor"  && computerChoice==="paper")||
                (humanChoice==="stone"  && computerChoice==="scissor"))
        {
            humanScore++;
            console.log("you've won this round");
            console.log(`human choice ${humanChoice} beats computer choice ${computerChoice}`);
        }
    
        else
        {
            computerScore++;
            console.log("you've lost this round");
            console.log(`computer choice ${computerChoice} beats human choice ${humanChoice}`);
    
        }

         console.log(`score=> human: ${humanScore}  computer: ${computerScore}`);
    }

    for( let j=0; j <= i; j++ )
    {
        const humanChoice= getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
    }

    if (humanScore === computerScore)
    {
        console.log("its a tie");
    }

    else if (humanScore > computerScore)
    {
        console.log("human won!!!!" );
    }

    else
    {
        console.log("computer won!!!!");
    }


}

playgame();







let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice)
{
    if (humanChoice === computerChoice)
    {
        console.log("its a tie, play again!!!");
    }

    else if ((humanChoice==="rock"  && computerChoice==="scissor") ||
            (humanChoice==="scissor"  && computerChoice==="paper")||
            (humanChoice==="stone"  && computerChoice==="scissor"))
    {
        humanScore++;
        console.log("you've won this round");
        console.log(`score => humanscore: ${humanScore}  computerscore: ${computerScore}`);
    }

    else
    {
        computerScore++;
        console.log("you've lost this round");
        console.log(`score => humanscore: ${humanScore}  computerscore: ${computerScore}`);

    }
}

const humanChoice= getHumanChoice();
const computerChoice = getComputerChoice();
playRound(humanChoice,computerChoice);






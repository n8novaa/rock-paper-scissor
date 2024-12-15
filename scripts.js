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
       return getHUmanChoice();
    }
}
console.log(getHumanChoice());
console.log(getComputerChoice());

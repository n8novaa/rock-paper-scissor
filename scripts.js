function getComputerChoice()
{
    
    const choice = [ "rock", "paper", "scissor" ];
    const randomIndex =  Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}

console.log(getComputerChoice());
function getBotChoice() {
    let choice =  Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    }
    else if (choice == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
    
}

function getHumanChoice() {
    let choice = prompt("Please input your choice: Rock, Paper, or Scissors", );

    if (choice === null)  {
        return;
    }

    choice = choice.trim().toLowerCase();
    
    if (choice === "rock" || choice === "paper" || choice === "scissors")  {
        return choice;
    } else {
        return getHumanChoice();
    }
}


let humanScore = 0;
let botScore = 0

function playRound(humanChoice, botChoice) {
    humanChoice = humanChoice.toLowerCase();
    botChoice = botChoice.toLowerCase();

    if (humanChoice == botChoice) {
        console.log(`You chose ${humanChoice} and Bot chose ${botChoice}!!! It's a tie... Your score is ${humanScore}`);
    }
    else if(
        (humanChoice == "paper" && botChoice == "rock") 
        || (humanChoice == "rock" && botChoice == "scissors")
        || (humanChoice == "scissors" && botChoice == "paper")
    ) {
        humanScore++;
        console.log(`You chose ${humanChoice} and Bot chose ${botChoice}!!! You won and yur score is ${humanScore}`);
    } else {
        botScore++;
        console.log(`You chose ${humanChoice} and Bot chose ${botChoice}!!! You loose and yur score is ${humanScore}`);
    }
}

function playGame(){

    for (let i = 0; i < 5; i++) {
    humanChoice = getHumanChoice();
    botChoice = getBotChoice();
    
    playRound(humanChoice, botChoice);
    }
    if (humanScore > botScore) {
        console.log(`You win with ${humanScore} scores`);
    } else if (botScore > humanScore) {
        console.log(`You loose to bot with ${botScore} scores`);
    } else {
        console.log(`It's a tie! You both have ${humanScore} scores`);
    }
}

playGame();

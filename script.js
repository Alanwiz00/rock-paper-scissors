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
        console.log(`You choose ${choice}`);
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



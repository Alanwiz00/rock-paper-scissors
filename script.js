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



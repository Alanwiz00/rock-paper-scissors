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

// No need for getHumanChoice() function when using buttons.
// The human choice is determined directly in each button's click event handler.

humanScore = 0;
botScore = 0

function playRound(humanChoice, botChoice) {
    humanChoice = humanChoice.toLowerCase();
    botChoice = botChoice.toLowerCase();

    const tie = humanChoice === botChoice;
    const humanWins = (
            (humanChoice == "paper" && botChoice == "rock") 
        || (humanChoice == "rock" && botChoice == "scissors")
        || (humanChoice == "scissors" && botChoice == "paper")
    );
    const botWins = (
            (botChoice == "paper" && humanChoice == "rock")
        || (botChoice == "rock" && humanChoice == "scissors")
        || (botChoice == "scissors" && humanChoice == "paper"));
    
    if(humanWins
    ) {
        humanScore++;
        console.log(`You chose ${humanChoice} and Bot chose ${botChoice}!!! You won and yur score is ${humanScore}`);
    } else if (botWins){
        botScore++;
        console.log(`You chose ${humanChoice} and Bot chose ${botChoice}!!! You loose and yur score is ${humanScore}`);
    }
    updateScores();
    updateStat(humanChoice, botChoice, tie, humanWins, botWins);
    resetGame();
}

const container = document.querySelector("#container");
const paperBtn = document.querySelector("#paper-btn");
const rockBtn = document.querySelector("#rock-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const scoreBoard = document.querySelector("#score-board");
const playerScores = document.querySelector("#player-scores");
const human = document.querySelector("#human");
const bot = document.querySelector("#bot");

paperBtn.addEventListener("click", () => {
    const humanChoice = "paper";
    const botChoice = getBotChoice();
    console.log(`Your score is ${humanScore} and Bot's score is ${botScore}`);    playRound(humanChoice, botChoice);
});

rockBtn.addEventListener("click", () => {
    const humanChoice = "rock";
    const botChoice = getBotChoice();
    console.log(`Your score is ${humanScore} and Bot's score is ${botScore}`);
    playRound(humanChoice, botChoice);
});

scissorsBtn.addEventListener("click", () => {
    const humanChoice = "scissors";
    const botChoice = getBotChoice();
    console.log(`Your score is ${humanScore} and Bot's score is ${botScore}`);
    playRound(humanChoice, botChoice);
});

scoreBoard.setAttribute("style", "display:flex; flex-direction:column; align-items:center");
playerScores.setAttribute( "style", "display: flex; margin-top: 0")
human.setAttribute("style", "padding-right: 20px")

const humanScores = document.createElement("h3");
humanScores.textContent = `HUMAN: ${humanScore}`;
human.appendChild(humanScores);

const botScores = document.createElement("h3");
botScores.textContent = `BOT: ${botScore}`;
bot.appendChild(botScores);

function updateScores() {
    humanScores.textContent = `HUMAN: ${humanScore}`;
    botScores.textContent = `BOT: ${botScore}`;
}

function updateStat(humanChoice, botChoice, tie, humanWins, botWins) {
    const stat = document.querySelector("#stat");
    if (tie) {
        stat.textContent = 
        `You chose ${humanChoice} and Bot chose ${botChoice}!!! It's a tie...`;
    } else if (humanWins) {
        stat.textContent = 
        `You chose ${humanChoice} and Bot chose ${botChoice}!!! You won!!!`;
    } else if (botWins) {
        stat.textContent = 
        `You chose ${humanChoice} and Bot chose ${botChoice}!!! You lost!!!`;
    } else {
        stat.textContent = ""; // Clear stat if no one has won yet
    }
}

function resetGame() {
    const stat = document.querySelector("#stat");
    // Show a popup message announcing the winner
    if (humanScore === 5) {
        alert("Congratulations 🎉, You win!!!");
        humanScore = 0;
        botScore = 0;
    } else if (botScore === 5) {
        alert("You lose 😕!!!");
        humanScore = 0;
        botScore = 0;
    }
}



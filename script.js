function getComputerChoice() {
    let choiceNum = (Math.random() * 3);
    let choice;
    if (choiceNum < 1) {
       choice = "rock";
    } else if (choiceNum < 1 && choiceNum > 2) {
        choice = "paper";
    } else {
        choice = "scissors"
    }

    return choice;
};

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const gameArea = document.querySelector("#gameArea");
const gameArea2 = document.querySelector("#gameArea2");

let humanChoice = "";

rock.addEventListener("click", () => {
    humanChoice = "rock";
    playGame()
});

paper.addEventListener("click", () => {
    humanChoice = "paper";
    playGame()
});

scissors.addEventListener("click", () => {
    humanChoice = "paper";
    playGame()
});

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock") { 
        gameArea.textContent = "You chose rock. Computer chose rock. It's a draw!";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore += 1;
        gameArea.textContent = "You chose rock. Computer chose paper. You lose! paper beats rock.";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore += 1;
        gameArea.textContent = "You chose rock. Computer chose scissors. You win! rock beats scissors.";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore += 1;
        gameArea.textContent = "You chose rock. Computer chose scissors. You win! paper beats rock.";
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        gameArea.textContent = "You chose paper. Computer chose paper. It's a draw!";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore += 1;
        gameArea.textContent = "You chose paper. Computer chose scissors. You lose! scissors beats paper.";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore += 1;
        gameArea.textContent = "You chose scissors. Computer chose rock. You lose! paper beats rock.";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore += 1;
        gameArea.textContent = "You chose scissors. Computer chose paper. You win! scissors beats paper.";
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        gameArea.textContent = "You chose scissors. Computer chose scissors. It's a draw!";
    };
};

function playGame() {
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    let totalscore = `Score is Player: ${humanScore} Computer: ${computerScore}`;
    gameArea2.textContent = totalscore;
    if (humanScore === 5 || computerScore === 5) {
        gameArea2.textContent = "Game Over!";
        if (humanScore > computerScore) {
            gameArea.textContent = "Player wins."
        } else {
            gameArea.textContent = "Computer wins."
        };
        humanScore = 0;
        computerScore = 0;
    };
};



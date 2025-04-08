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
        console.log("You chose rock.")
        console.log("Computer chose rock.")
        console.log("It's a draw!");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore += 1;
        console.log("You chose rock.")
        console.log("Computer chose paper.")
        console.log("You lose! paper beats rock.");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore += 1;
        console.log("You chose rock.")
        console.log("Computer chose scissors.")
        console.log("You win! rock beats scissors.");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore += 1;
        console.log("You chose paper.")
        console.log("Computer chose rock.")
        console.log("You win! paper beats rock.");
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("You chose paper.")
        console.log("Computer chose paper.")
        console.log("It's a draw!");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore += 1;
        console.log("You chose paper.")
        console.log("Computer chose scissors.")
        console.log("You lose! scissors beat paper.");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore += 1;
        console.log("You chose scissors.")
        console.log("Computer chose rock.")
        console.log("You lose! rock beats scissors.");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore += 1;
        console.log("You chose scissors.")
        console.log("Computer chose paper.")
        console.log("You win! scissors beat paper.");
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("You chose scissors.")
        console.log("Computer chose scissors.")
        console.log("It's a draw!");
    };
};

function playGame() {
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    let totalscore = `Score is Player: ${humanScore} Computer: ${computerScore}`;
    console.log(totalscore);
};



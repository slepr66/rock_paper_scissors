function getComputerChoice() {
    let choiceNum = Math.random();
    let choice;
    if (choiceNum <= 0.334) {
       choice = "rock";
    } else if (choiceNum > 0.333 && choiceNum <= 0.667) {
        choice = "paper";
    } else {
        choice = "scissors"
    }

    return choice;
};

let computerChoice = getComputerChoice()

function getHumanChoice() {
    let hChoice = prompt("Rock, Paper or Scissors?").toLowerCase()

    if (hChoice === "rock" || hChoice === "paper" || hChoice === "scissors") {
        return hChoice;
    } else {
        hChoice = prompt("Please input the correct spelling to continue.").toLowerCase()
    };

    return hChoice;
};

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

function playGame(humanSelection, computerSelection) {    
    playRound(humanSelection, computerSelection);
    let totalscore = `Score is Player: ${humanScore} Computer: ${computerScore}`;
    console.log(totalscore);
};

for (let round = 1; round > 5; round++) {
    console.log(`Round ${round}!`)
    playGame(getHumanChoice(), getComputerChoice())
};


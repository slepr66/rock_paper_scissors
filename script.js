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
    let hChoice = prompt("Rock, Paper or Scissors?")

    return hChoice; 
};


const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

const playerSelection = rock;
const computerSelection = getComputerChoice();



function getComputerChoice() {
    let items = [rock, paper, scissors];
    let random = Math.floor(Math.random() * 3);
    let choice = items[random];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        roundResult = "Remis";
    } else if (playerSelection == rock && computerSelection == paper) {
        roundResult = "Computer wins this round! Paper beats rock!";
    } else if (playerSelection == rock && computerSelection == scissors) {
        roundResult = "Human wins this round! Rock beats scissors!";

    } else if (playerSelection == paper && computerSelection == rock) {
        roundResult = "Human wins this round! Paper beats rock!"
    } else if (playerSelection == paper && computerSelection == scissors) {
        roundResult = "Computer wins this round! Scissors beats paper";
    
    } else if (playerSelection == scissors && computerSelection == rock) {
        roundResult = "Computer wins this round! Rock beats scissors!";
    } else if (playerSelection == scissors && computerSelection == paper) {
        roundResult = "Human wins this round! RScissors beats paper!";
    }
    return roundResult;
}

console.log("Human:" + playerSelection);
console.log("Computer:" + computerSelection);
console.log(playRound(playerSelection, computerSelection));

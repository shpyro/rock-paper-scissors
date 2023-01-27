const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
const computerSelection = getComputerChoice();

let roundResult = '';
let playerSelection = '';
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let items = [rock, paper, scissors];
    let random = Math.floor(Math.random() * 3);
    let choice = items[random];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        roundResult = "It's a Draw";
    } else if (playerSelection == rock && computerSelection == paper) {
        roundResult = "Computer wins this round! Paper beats rock!";
        ++computerScore;
    } else if (playerSelection == rock && computerSelection == scissors) {
        roundResult = "Human wins this round! Rock beats scissors!";
        ++playerScore;
    } else if (playerSelection == paper && computerSelection == rock) {
        roundResult = "Human wins this round! Paper beats rock!";
        ++playerScore;
    } else if (playerSelection == paper && computerSelection == scissors) {
        roundResult = "Computer wins this round! Scissors beats paper";
        ++computerScore;
    } else if (playerSelection == scissors && computerSelection == rock) {
        roundResult = "Computer wins this round! Rock beats scissors!";
        ++computerScore;
    } else if (playerSelection == scissors && computerSelection == paper) {
        roundResult = "Human wins this round! Scissors beats paper!";
        ++playerScore;
    }
    return roundResult;
}

function score() {
    if (computerScore > playerScore) {
        verdict = "Game Finished. Computer wins! Machine: " + computerScore + "Human: " + playerScore;
    } else if (computerScore < playerScore) {
        verdict = "Game Finished. Player wins! Machine: " + computerScore + "Human: " + playerScore;
    } else {
        verdict = "Game Finished.Draw."
    }
}
function game() {
     for (let i = 0; i < 5; i++) {
        playRound(prompt("What do you choose?"), getComputerChoice());
        console.log(roundResult);
    }
    score();
    return verdict;
}


game();
console.log(verdict);
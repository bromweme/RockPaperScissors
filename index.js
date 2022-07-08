let userScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resetBtn = document.querySelector('#reset');

const resultsPrint = document.querySelector('.results');

const userTotalScore = document.querySelector('.userScore');
const computerTotalScore = document.querySelector('.computerScore');

rockBtn.addEventListener('click', function() {
    playGame("rock")});
paperBtn.addEventListener('click', function() {
    playGame("paper")});
scissorsBtn.addEventListener('click', function() {
    playGame("scissors")});
resetBtn.addEventListener('click', function() {
    reset()});

function playGame (playerSelection) {
    if(userScore === 5 || computerScore === 5) return;
    const computerOptions = ["rock", "paper", "scissors"];
    let results = playRound(playerSelection, computerOptions);
    if (results.indexOf("win") > 0) {
        userScore += 1;
        userTotalScore.textContent = userScore;
    }
    else if (results.indexOf("lose") > 0) {
        computerScore += 1;
        computerTotalScore.textContent = computerScore;
    }
        
    resultsPrint.textContent = results;
    if(userScore === 5 || computerScore === 5){
        if (userScore > computerScore) {
            resultsPrint.textContent =`You win ${userScore} to ${computerScore}, congrats!`;
        }
        else if (userScore === computerScore) {
            resultsPrint.textContent =`It's a tie at ${userScore}.`;
        }
        else {
            resultsPrint.textContent =`You lose ${computerScore} to ${userScore}.`;
        }
        resultsPrint.textContent += " Play Again?";

    }

}

function playRound (playerSelection,computerOptions) {
    const randomNumber = Math.floor(Math.random() * computerOptions.length);
    const computerSelection = computerOptions[randomNumber];
    let results = "";
    if(playerSelection !== null)
    {
        if (playerSelection === "rock" && computerSelection === "scissors") {
            results =`The computer chose ${computerSelection}, so you win!`;
        }
        else if (playerSelection === "paper" && computerSelection === "rock") {
            results =`The computer chose ${computerSelection}, so you win!`;
        }
        else if (playerSelection === "scissors" && computerSelection === "paper") {
            results =`The computer chose ${computerSelection}, so you win!`;
        }
        else if (playerSelection == computerSelection) {
            results =`The computer chose ${computerSelection} too, so you tie!`;
        }
        else {
            results =`Oh no, you lose. The computer chose ${computerSelection}.`;
        }
    }
    else
    {
        results = playerSelection;
    }
    return results;
}

function reset() {
    userTotalScore.textContent = 0;
    computerTotalScore.textContent =0;
    resultsPrint.textContent = "";
    userScore = 0;
    computerScore = 0;
}

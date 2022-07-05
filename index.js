let userScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const buttons = document.querySelectorAll('.btn');
const resultsPrint = document.querySelector('.results');

const userTotalScore = document.querySelector('.userScore');
const computerTotalScore = document.querySelector('.computerScore');

rockBtn.addEventListener('click', ()=>
    playGame("rock"));
paperBtn.addEventListener('click', ()=>
    playGame("paper"));
scissorsBtn.addEventListener('click', ()=>
    playGame("scissors"));

function playGame (playerSelection) {
    // Try to get the event click here instead of a parameter being passed
    // 
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
    if (userScore > computerScore) {
        console.log(`You win ${userScore} to ${computerScore}, congrats!`);
    }
    else if (userScore === computerScore) {
        console.log(`It's a tie at ${userScore}`);
    }
    else {
        console.log(`You lose ${computerScore} to ${userScore}`);
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

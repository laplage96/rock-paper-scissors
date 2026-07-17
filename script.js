// --- HELPER CHOICE FUNCTIONS ---
function getComputerChoice() {
    let randomVal = Math.random();
    if (randomVal < 0.33) return "rock";
    else if (randomVal < 0.66) return "paper";
    else return "scissors";
}

// --- STATE VARIABLES ---
let humanScore = 0;
let computerScore = 0;


// --- DOM ELEMENTS ---
const roundStatus = document.querySelector('#round-status');
const scoreBoard = document.querySelector('#score-board');
const buttons = document.querySelector('#button-container');

// --- CORE ROUND LOGIC ---
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        roundStatus.textContent = `You win this round! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else {
        roundStatus.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }
    
    // Update the running score
    scoreBoard.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;

    // Check for the winner
    if (humanScore === 5 || computerScore === 5) {
        announceWinner();
    }
}

function announceWinner() {
    const winner = humanScore === 5 ? "🏆 YOU WON THE GAME!" : "💻 COMPUTER WON THE GAME!";
    roundStatus.textContent = winner;

    // Reset scores for a new game
    humanScore = 0;
    computerScore = 0;
    // Note: scoreBoard will update on the next click
}

buttons.addEventListener('click', (event) => {
    // Check if the clicked element is one of our buttons
    if (event.target.tagName === 'BUTTON') {
        playRound(event.target.id, getComputerChoice());
    }
});
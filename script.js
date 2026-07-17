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

// --- CORE ROUND LOGIC ---
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win this round! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else {
        console.log(`You lose this round! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
    
    // Log scores to verify everything is working in the console
    console.log(`Current Score -> You: ${humanScore} | Computer: ${computerScore}`);
}

// --- EVENT LISTENER SETUP ---
// We select the container (Event Delegation)
const buttons = document.querySelector('#button-container');

buttons.addEventListener('click', (event) => {
    // Check if the clicked element is one of our buttons
    if (event.target.tagName === 'BUTTON') {
        const humanSelection = event.target.id; // 'rock', 'paper', or 'scissors'
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
    }
});
// --- HELPER CHOICE FUNCTIONS ---

function getComputerChoice() {
    let randomVal = Math.random();
    if (randomVal < 0.33) return "rock";
    else if (randomVal < 0.66) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    let userInput = prompt("Round starting! Enter rock, paper, or scissors:");
    // Simple fallback just in case user clicks cancel or leaves empty
    if (!userInput) return "rock"; 
    return userInput.toLowerCase();
}

// --- MASTER GAME CONTAINER ---

function playGame() {
    // Score variables moved inside as requested by instructions
    let humanScore = 0;
    let computerScore = 0;

    // Inner helper function to manage single round updates locally
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
    }

    // Play exactly 5 rounds sequentially using a loop
    for (let round = 1; round <= 5; round++) {
        console.log(`--- ROUND ${round} ---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        console.log(`You chose: ${humanSelection} | Computer chose: ${computerSelection}`);
        playRound(humanSelection, computerSelection);
        console.log(`Current Score -> You: ${humanScore} | Computer: ${computerScore}\n\n`);
    }

    // Declare final winner
    console.log("=== FINAL GAME OVERVIEW ===");
    if (humanScore > computerScore) {
        console.log(`🏆 Congratulations! You won the game! Final Score: ${humanScore}-${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`💻 Game Over! The computer wins. Final Score: ${computerScore}-${humanScore}`);
    } else {
        console.log(`🤝 It's a spectacular tie game! Final Score: ${humanScore}-${computerScore}`);
    }
}

// --- START GAME ENGINE ---
playGame();
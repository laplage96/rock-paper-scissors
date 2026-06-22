// Global scope variables to keep track of the game score
let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    // 1. Generate the random value
    let randomVal = Math.random();

    // 2. Conditionally return the choices based on the value range
    if (randomVal < 0.33) {
        return "rock";
    } else if (randomVal < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    // 1 & 2. Prompt the user and capture the input
    let userInput = prompt("Please enter rock, paper, or scissors:");

    // 3. Convert input to lowercase to normalize it (handles Rock, ROCK, etc.)
    let standardizedChoice = userInput.toLowerCase();

    // 4. Return the clean string
    return standardizedChoice;
}

function playRound(humanChoice, computerChoice) {
    // 1. Check for a tie
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
    } 
    // 2. Check for all human winning combinations
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        // Capitalize first letter for clean printing formatting
        let humanFormatted = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
        console.log(`You win! ${humanFormatted} beats ${computerChoice}.`);
        humanScore++;
    } 
    // 3. If it's not a tie and human didn't win, the computer wins
    else {
        let computerFormatted = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        console.log(`You lose! ${computerFormatted} beats ${humanChoice}.`);
        computerScore++;
    }
}



// Run the function multiple times to see if it varies randomly
//console.log("Test 1:", getComputerChoice());
//console.log("Test 2:", getComputerChoice());
//console.log("Test 3:", getComputerChoice());
//console.log("Test 4:", getComputerChoice());

// Run the human choice function and log the result
//const humanSelection = getHumanChoice();
//console.log("The human chose:", humanSelection);
//console.log("Initial Scores -> Human:", humanScore, "| Computer:", computerScore);


// Triggering a single round sequence
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log("Human selection:", humanSelection);
console.log("Computer selection:", computerSelection);

playRound(humanSelection, computerSelection);

// Log scores to verify incrementing works
console.log(`Updated Scores -> Human: ${humanScore} | Computer: ${computerScore}`);
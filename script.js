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



// Run the function multiple times to see if it varies randomly
console.log("Test 1:", getComputerChoice());
console.log("Test 2:", getComputerChoice());
console.log("Test 3:", getComputerChoice());
console.log("Test 4:", getComputerChoice());
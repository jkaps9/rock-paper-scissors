function getComputerChoice() {
    // randomly returns one of the following string values: “rock”, “paper” or “scissors”

    //create array with the 3 choices
    const choices = ["rock", "paper", "scissors"]

    // Use Math.Random to generate random number betweeen 0 and 2
    let index = Math.floor(Math.random() * 3)

    // Use random number to determine the output
    return choices[index]
}

function playRound(humanChoice, computerChoice) {
    //takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

    //Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
    humanChoice = humanChoice.toLowerCase()
    let humanWins = true
    //Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
    //Increment the humanScore or computerScore variable based on the round winner.
    switch (humanChoice) {
        case "rock":
            if (computerChoice == "scissors") {
                humanWins = true
            } else {
                humanWins = false
            }
            break;
        case "paper":
            if (computerChoice == "rock") {
                humanWins = true
            } else {
                humanWins = false
            }
        case "scissors":
            if (computerChoice == "paper") {
                humanWins = true
            } else {
                humanWins = false
            }
            break;
        default:
            console.log("you made an invalid choice")
    }

    if (humanWins) {
        humanScore++
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
    } else {
        computerScore++
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
    }


    console.log(`Human: ${humanScore} Computer: ${computerScore}`)
}


//initialize the score variables
let humanScore = 0
let computerScore = 0

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");
console.log(buttons)
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        const computerSelection = getComputerChoice();

        //alert(button.id);
        if (button.id === "rock") { playRound("rock", computerSelection) }
        if (button.id === "paper") { playRound("paper", computerSelection) }
        if (button.id === "scissors") { playRound("scissors", computerSelection) }
    });
});


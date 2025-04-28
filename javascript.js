//console.log("Hello World")

function getComputerChoice(){
    // randomly returns one of the following string values: “rock”, “paper” or “scissors”

    //create array with the 3 choices
    const choices = ["rock", "paper", "scissors"]
    
    // Use Math.Random to generate random number betweeen 0 and 2
    let index = Math.floor(Math.random()*3)
    
    // Use random number to determine the output
    return choices[index]
}

//console.log(getComputerChoice())

function getHumanChoice(){

    //return one of the valid choices depending on what the user inputs.
    
    let humanChoice = prompt("Enter your choice", '')

    //for now assuming user always inputs valid choice, so just returning the input
    return humanChoice
}

//console.log(getHumanChoice())

//initialize the score variables
let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice){
    //takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

    //Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
    humanChoice = humanChoice.toLowerCase()
    
    //Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
    switch(humanChoice) {
        case "rock":
            if(computerChoice=="scissors"){
                console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
            }else {
                console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
            }
            break;
        
        case "paper":
            break;
        
        case "scissors":
            break;
        default:
            console.log("you made an invalid choice")
    }

    //Increment the humanScore or computerScore variable based on the round winner.

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

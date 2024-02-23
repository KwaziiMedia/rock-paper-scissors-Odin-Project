//Get Computer Choice Function that randomly gets a chooses something form array
function getComputerChoice() {
    let random = Math.floor(Math.random() *choices.length) 
    return choices[random].toLowerCase()
}
//choices
const choices = [
    "Rock",
    "Paper",
    "Scissors"
]

//function to play game 
function playGame() {
    let userChoice = prompt("What will you choose Rock Paper or Scissors?").toLowerCase()
    let computerChoice = getComputerChoice();
    let userScore = 0
    let computerScore = 0
    let tieScore = 0
    if(userChoice == "rock" && computerChoice == "paper"){
        computerScore++
        console.log(`${computerChoice} beats ${userChoice} Computer Wins`)
    }else if(userChoice == "rock" && computerChoice == "scissors"){
        userScore++
        console.log(`${userChoice} beats ${computerChoice} User Wins`)
    }else if(userChoice == "rock" && computerChoice == "rock"){
        tieScore++
        console.log("its a tie")
    }else if (userChoice == "paper" && computerChoice == "paper"){
        tieScore++
        console.log("it's a tie")
    }else if(userChoice == "paper" && computerChoice == "rock"){
        userScore++
        console.log(`${userChoice} beats ${computerChoice} User Wins`);
    }else if (userChoice == "paper" && computerChoice == "scissors"){
        computerScore++
        console.log(`${computerChoice} beats ${userChoice} Computer Wins`)
    }else if(userChoice == "scissors" && computerChoice == "scissors"){
        tieScore++
        console.log("it's a tie")
    }else if(userChoice == "scissors" && computerChoice == "rock"){
        computerScore++
        console.log(`${computerChoice} beats ${userChoice} Computer Wins`)
    }else if (userChoice == "scissors" && computerChoice == "paper"){
        userScore++
        console.log(`${userChoice} beats ${computerChoice} user wins`)
    }else 
    console.log("not an option")
}
playGame()
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
//check winner function
function checkWin() {
    if(userScore === 3){
        userScore = 0
        computerScore = 0
        tieScore = 0
        console.log("User Wins Game Over")

    }else if (computerScore === 3){
        userScore = 0
        computerScore = 0
        tieScore = 0
        console.log("Computer Wins Game Over")
    }else if (tieScore === 3){
        userScore = 0
        computerScore = 0
        tieScore = 0
        console.log("Tie No Winner Try Again")
    } 
}

//Scores 
    let userScore = 0
    let computerScore = 0
    let tieScore = 0
    let round = 0
    while(userScore < 3 && computerScore < 3 && round < 12){
        playGame()
     }
//function to play game 
function playGame() {
    let userChoice = prompt("What will you choose Rock Paper or Scissors?").toLowerCase()
    let computerChoice = getComputerChoice();

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
    round++
}
checkWin()
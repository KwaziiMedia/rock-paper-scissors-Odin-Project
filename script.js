const rock = document.querySelector(".rockBtn")
const paper = document.querySelector(".paperBtn")
const scissors = document.querySelector(".scissorsBtn")
const playerImg = document.querySelector(".playerImg")
const computerImg = document.querySelector(".computerImg")
const winHeader = document.querySelector(".win-header")
const winPara = document.querySelector(".win-para")
const playerScore = document.querySelector(".player-score")
const computerScore = document.querySelector(".computer-score")
let cScore = 0;
let pScore = 0;
let tScore = 0;
//player selection
rock.addEventListener("click", function() {
    playerImg.src="/images/rock.png"
    playGame("rock")
})
paper.addEventListener("click", function() {
    playerImg.src="/images/paper.png"
    playGame("paper")
})
scissors.addEventListener("click", function() {
    playerImg.src="/images/scissors.png"
    playGame("scissors")
})

//computer Selction and choices array
const choices = ["rock", "paper", "scissors"]
function computerSelection() {  
    let random = Math.floor(Math.random() * choices.length)
    return choices[random]
}


function addResetBtn () {
    let restartBtn = document.createElement("BUTTON")
    restartBtn.textContent = "Restart"
    restartBtn.style.width = "5rem"
    restartBtn.style.height = "3rem"
    restartBtn.style.fontSize = "7rem"
    restartBtn.style.marginLeft = "2rem"
    restartBtn.style.width = "fit-content"
    restartBtn.style.height = "fit-content"
    restartBtn.style.flex = "display"
    restartBtn.style.justifyContent = "center"
    winPara.appendChild(restartBtn)
    restartBtn.addEventListener("click", function(){
        resetGame()
        enableBtn()
    })
}

function resetGame (){
    cScore = 0
    pScore = 0
    tScore = 0
    winHeader.textContent = "Player Pick A Weapon"
    winPara.textContent = "What will you choose?"
    playerImg.src = "images/question-mark.jpg"
    computerImg.src = "images/question-mark.jpg"
    playerScore.textContent = `Player Score: ${pScore}`
    computerScore.textContent = `Computer Score: ${cScore}`
    enableBtn()
}
function disableBtn () {
    rock.disabled = true
    paper.disabled = true
    scissors.disabled = true
}
function enableBtn() {
    rock.disabled = false
    paper.disabled = false
    scissors.disabled = false
}
function checkWin(){
    if(pScore === 5){
        winHeader.textContent =  "Player Wins Computer Loses"
        winPara.textContent = "Want to play again?"
        disableBtn()
        addResetBtn()
    }else if(cScore === 5){
        winHeader.textContent = "Computer Wins Player Loses"
        winPara.textContent = "Want to Play Again?"
        disableBtn()
        addResetBtn()
    }else if (tScore === 12){
        winHeader.textContent = "Its a Tie Womp Womp"
        winPara.textContent = "Want to Play Again?"
        disableBtn()
        addResetBtn()
    }
}

function playGame(playerSelection){
    let computerChoice = computerSelection()
    if(playerSelection === "rock" && computerChoice === "rock" || playerSelection === "paper" && computerChoice === "paper" || playerSelection === "scissors" && computerChoice === "scissors"){
        winHeader.textContent = "Tie"
        winPara.textContent = `${playerSelection} and ${computerChoice}`
        computerImg.src = `/images/${computerChoice}.png`
        tScore++
    }else if (playerSelection === "rock" && computerChoice === "scissors"){
        pScore++
        winHeader.textContent = "Player Wins"
        winPara.textContent = `${playerSelection} beats ${computerChoice}`
        computerImg.src = `/images/${computerChoice}.png`
        playerScore.textContent = `Player Score: ${pScore}`
    }else if (playerSelection === "paper" && computerChoice === "rock"){
        pScore++
        winHeader.textContent = "Player Wins"
        winPara.textContent = `${playerSelection} beats ${computerChoice}`
        computerImg.src = `/images/${computerChoice}.png`
        playerScore.textContent = `Player Score: ${pScore}`
    }else if (playerSelection === "scissors" && computerChoice === "paper"){
        pScore++
        winHeader.textContent = "Player Wins"
        winPara.textContent = `${playerSelection} beats ${computerChoice}`
        computerImg.src = `/images/${computerChoice}.png`
        playerScore.textContent = `Player Score: ${pScore}`
    }else if (computerChoice === "rock" && playerSelection === "scissors"){
        cScore++
        winHeader.textContent = "Computer Wins"
        winPara.textContent = `${computerChoice} beats ${playerSelection}`
        computerImg.src = `/images/${computerChoice}.png`
        computerScore.textContent = `Computer Score: ${cScore}`
    }else if (computerChoice === "paper" && playerSelection === "rock"){
        cScore++
        winHeader.textContent = "Computer Wins"
        winPara.textContent = `${computerChoice} beats ${playerSelection}`
        computerImg.src = `/images/${computerChoice}.png`
        computerScore.textContent = `Computer Score: ${cScore}`
    }else if (computerChoice === "scissors" && playerSelection === "paper"){
        cScore++
        winHeader.textContent = "Computer Wins"
        winPara.textContent = `${computerChoice} beats ${playerSelection}`
        computerImg.src = `/images/${computerChoice}.png`
        computerScore.textContent = `Computer Score: ${cScore}`
    }
    checkWin()
}


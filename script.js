function getComputerChoice() {
  const arr = ['rock', 'paper', 'scissors']

  // console.log(arr[Math.floor(Math.random() * 3)])
  return arr[Math.floor(Math.random() * 3)]
}

// function playerSelection() {
//   let choice = prompt('Choose between rock, paper and scissors: ')
//   while (choice.toLowerCase() != 'rock' && choice.toLowerCase() != 'paper' && choice.toLowerCase() != 'scissors') {
//     choice = prompt('Choose between rock, paper and scissors: ')
//   }
//   return choice.toLowerCase()
// }

// let player = 0
// let computer = 0

// function playRound(computerChoice, playerChoice) {
//   playerChoice = playerSelection()
//   computerChoice = getComputerChoice()

//   if (playerChoice === computerChoice) {
//     console.log(`Your choice: ${playerChoice} \t Computer choice: ${computerChoice} \nIt's a tie!`)
//     playRound()

//   } else if (playerChoice === 'rock'  && computerChoice === 'paper') {
//     computer++
//     console.log(`Your choice: ${playerChoice} \t Computer choice: ${computerChoice} \nYou lost! \nYour score: ${player} \tComputer score: ${computer}`)
    
//   } else if (playerChoice === 'rock'  && computerChoice === 'scissors') {
//     player++
//     console.log(`Your choice: ${playerChoice} \t Computer choice: ${computerChoice} \nYou win! \nYour score: ${player} \tComputer score: ${computer}`)

//   } else if (playerChoice === 'paper'  && computerChoice === 'rock') {
//     player++
//     console.log(`Your choice: ${playerChoice} \t Computer choice: ${computerChoice} \nYou win! \nYour score: ${player} \tComputer score: ${computer}`)

//   } else if (playerChoice === 'paper'  && computerChoice === 'scissors') {
//     computer++
//     console.log(`Your choice: ${playerChoice} \t Computer choice: ${computerChoice} \nYou lost! \nYour score: ${player} \tComputer score: ${computer}`)

//   } else if (playerChoice === 'scissors'  && computerChoice === 'rock') {
//     computer++
//     console.log(`Your choice: ${playerChoice} \t Computer choice: ${computerChoice} \nYou lost! \nYour score: ${player} \tComputer score: ${computer}`)

//   } else if (playerChoice === 'scissors'  && computerChoice === 'paper') {
//     player++
//     console.log(`Your choice: ${playerChoice} \t Computer choice: ${computerChoice} \nYou win! \nYour score: ${player} \tComputer score: ${computer}`)

//   }

//   console.log(player)
//   return player, computer
// }

// function game() {
//   for (let i = 0; i < 5; i ++) {
//     playRound()
//   }
//   if (player > computer) {
//     console.log(`Your score: ${player} \tComputer score: ${computer} \n\nYou won the game!`)
//   } else {
//     console.log(`Your score: ${player} \tComputer score: ${computer} \n\nComputer won the game!`)
//   }
// }

// game()

const btns = document.querySelectorAll('button')
const choice = document.querySelector('#choice')

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    choice.textContent = ''
    computer = getComputerChoice()
    player = btn.id
    
    playRound(computer, player)
  })
})

const playerScore = document.querySelector('#playerScore')
const computerScore = document.querySelector('#computerScore')

playerScore.textContent = 0
computerScore.textContent = 0

function playRound(computer, player)  {
  if (computer === player) {
    choice.textContent = `You chose: ${player}, computer chose: ${computer}. It's a draw!`
    return 

  } else if (player === 'rock'  && computer === 'paper') {
    computerScore.textContent++
    choice.textContent = `You chose: ${player}, computer chose: ${computer}. Computer win!`
    
  } else if (player === 'rock'  && computer === 'scissors') {
    playerScore.textContent++
    choice.textContent = `You chose: ${player}, computer chose: ${computer}. You win!`

  } else if (player === 'paper'  && computer === 'rock') {
    playerScore.textContent++
    choice.textContent = `You chose: ${player}, computer chose: ${computer}. You win!`

  } else if (player === 'paper'  && computer === 'scissors') {
    computerScore.textContent++
    choice.textContent = `You chose: ${player}, computer chose: ${computer}. Computer win!`

  } else if (player === 'scissors'  && computer === 'rock') {
    computerScore.textContent++
    choice.textContent = `You chose: ${player}, computer chose: ${computer}. Computer win!`

  } else if (player === 'scissors'  && computer === 'paper') {
    playerScore.textContent++
    choice.textContent = `You chose: ${player}, computer chose: ${computer}. You win!`
  }
}
function getComputerChoice() {
  const arr = ['rock', 'paper', 'scissors']

  // console.log(arr[Math.floor(Math.random() * 3)])
  return arr[Math.floor(Math.random() * 3)]
}

function playerSelection() {
  let choice = prompt('Choose between rock, paper and scissors: ')
  while (choice.toLowerCase() != 'rock' && choice.toLowerCase() != 'paper' && choice.toLowerCase() != 'scissors') {
    choice = prompt('Choose between rock, paper and scissors: ')
  }

  return choice.toLowerCase()
}

let player = 0
let computer = 0

function playRound(computerChoice, playerChoice) {
  playerChoice = playerSelection()
  computerChoice = getComputerChoice()

  if (playerChoice === computerChoice) {
    console.log(`Your choice: ${playerChoice} \t Computer choice: ${computerChoice} \nIt's a tie!`)
    playRound()

  } else if (playerChoice === 'rock'  && computerChoice === 'paper') {
    computer++
    console.log(`Your choice: ${playerChoice} \t Computer choice: ${computerChoice} \nYou lost! \nYour score: ${player} \tComputer score: ${computer}`)
    
  } else if (playerChoice === 'rock'  && computerChoice === 'scissors') {
    player++
    console.log(`Your choice: ${playerChoice} \t Computer choice: ${computerChoice} \nYou win! \nYour score: ${player} \tComputer score: ${computer}`)

  } else if (playerChoice === 'paper'  && computerChoice === 'rock') {
    player++
    console.log(`Your choice: ${playerChoice} \t Computer choice: ${computerChoice} \nYou win! \nYour score: ${player} \tComputer score: ${computer}`)

  } else if (playerChoice === 'paper'  && computerChoice === 'scissors') {
    computer++
    console.log(`Your choice: ${playerChoice} \t Computer choice: ${computerChoice} \nYou lost! \nYour score: ${player} \tComputer score: ${computer}`)

  } else if (playerChoice === 'scissors'  && computerChoice === 'rock') {
    computer++
    console.log(`Your choice: ${playerChoice} \t Computer choice: ${computerChoice} \nYou lost! \nYour score: ${player} \tComputer score: ${computer}`)

  } else if (playerChoice === 'scissors'  && computerChoice === 'paper') {
    player++
    console.log(`Your choice: ${playerChoice} \t Computer choice: ${computerChoice} \nYou win! \nYour score: ${player} \tComputer score: ${computer}`)

  }

  return player, computer
}

function game() {
  for (let i = 0; i < 5; i ++) {
    playRound()
  }
  if (player > computer) {
    console.log(`Your score: ${player} \tComputer score: ${computer} \n\nYou won the game!`)
  } else {
    console.log(`Your score: ${player} \tComputer score: ${computer} \n\nComputer won the game!`)
  }
}

game()
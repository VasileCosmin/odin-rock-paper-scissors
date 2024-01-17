function getComputerChoice() {
  const arr = ['rock', 'paper', 'scissors']

  return arr[Math.floor(Math.random() * 3)]
}

function playerSelection() {
  let choice = prompt('Choose between rock, paper and scissors: ')
  while (choice.toLowerCase() != 'rock' && choice.toLowerCase() != 'paper' && choice.toLowerCase() != 'scissors') {
    choice = prompt('Choose between rock, paper and scissors: ')
  }

  return choice
}

function playRound(computerChoice, playerChoice) {
  playerChoice = playerSelection()
  computerChoice = getComputerChoice()

  if (playerChoice === computerChoice) {
    console.log(`Your choice: ${playerChoice} \t Computer choice: ${computerChoice} \nIt's a tie!`)
  }
}

playRound()
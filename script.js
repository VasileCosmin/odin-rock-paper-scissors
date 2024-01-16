function getComputerChoice() {
  const arr = ['rock', 'paper', 'scissors']

  console.log(arr[Math.floor(Math.random() * 3)])
  return Math.floor(Math.random() * 3)
}

function playerSelection() {
  let choice = prompt('Choose between rock, paper and scissors: ')
  while (choice.toLowerCase() != 'rock' && choice.toLowerCase() != 'paper' && choice.toLowerCase() != 'scissors') {
    choice = prompt('Choose between rock, paper and scissors: ')
  }
  return `Your choice is ${choice}`
}

playerSelection()

function playRound(getComputerChoice, playerSelection) {
  
}
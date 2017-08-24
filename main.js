var button = document.getElementById('rock')
button.addEventListener('keyUp', function() {
  play('rock')
})

var button = document.getElementById('paper')
button.addEventListener('keyUp', function() {
  play('paper')
})

var button = document.getElementById('scissors')
button.addEventListener('keyUp', function() {
  play('scissors')
})


function play(playerChoice) {
  choices = ["rock", "paper", "scissors"]
  var compChoice = choices(Math.floor(Math.random()*3));
  console.log('You chose', playerChoice)
  console.log('comp chose', compChoice)
    document.getElementById('game').innerHTML =
    ('You chose: ' + playerChoice + '/' + compChoice + 'Computer choice')
    if (playerChoice === compChoice) {
      document.getElementById('result').innerHTML = 'Tie!' }
    else if ((playerChoice === 'rock' && compChoice === 'paper') ||
            (playerChoice === 'paper' && compChoice === 'scissors') ||
            (playerChoice === 'scissors' && compChoice === 'rock')) {
    document.getElementById('result').innerHTML = 'You lose!' }
    else {
      document.getElementById('result').innerHTML = 'You win!'
    }
}

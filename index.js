var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
guessField.style.width = '100%';
var guessCount = 1;
var guessClear = document.querySelector('.guessClear');
var resetButton;
var foot = document.querySelector('#customization');
var newMin = document.querySelector('.newMin').innerHTML;
var newMax = document.querySelector('.newMax').innerHTML;

if (guessClear.textContent === '') {
  guessClear.disabled = true;
  } else guessClear.disabled = false;

/* new function for random number that expands the limit every win */
function checkGuess() {
  var userGuess = parseInt(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Your last guess was: ';
    guesses.style.backgroundColor = '#D0D2D3';
    guesses.style.borderRadius = '10px';
   
  }
  guesses.textContent += userGuess + ' ';
  
  if (userGuess === randomNumber) {

    lastResult.textContent = 'BOOM';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 3) {
    lastResult.textContent = alert('GAME OVER!');
    setGameOver();
  } else {
    lastResult.textContent = 'Incorrect';
    lastResult.style.backgroundColor = '#DC0909';
    lastResult.style.color = '#fff';

    if(userGuess < randomNumber) {
      lowOrHi.textContent = '  That is too low';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = '  That is too high';
    } 
  }

    if(userGuess > 100) {
      lowOrHi.textContent = 'Number out of range';
    }
 
  guessCount++;
  guessField.value = '';
  guessField.style.width = '100%';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Reset';
  resetButton.style.backgroundColor = '#D0D2D3';
  resetButton.style.color = '#fff';
  resetButton.style.borderRadius = '10px';
  resetButton.style.position = 'relative';
  resetButton.style.margin = 'auto auto auto auto';
  foot.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  var resetParas = document.querySelectorAll('.resultParas p');
  for (var i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
/*
min.addEventListener('click', newLimits);
max.addEventListener('click', newLimits);

 function newLimits() {
  randomNumber = Math.floor(Math.random() * (newMax - newMin) + newMin;
} 

/* function harderLimits() {
  
} */


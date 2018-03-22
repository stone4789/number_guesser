var min = 0;
var max = 100;
var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');

var guessField = document.querySelector('.guessField');
guessField.style.width = '100%';
guessField.style.height = '50px';
guessField.style.fontSize = '18px';

var guessCount = 1;
var guessClear = document.querySelector('.guessClear');
var resetButton;
var foot = document.querySelector('#customization');
var newMin = document.querySelector('#min').value;
newMax = document.querySelector('#newMax');
var newMaxValue = document.querySelector('#max').value;
var newMaxInt = parseInt(newMaxValue);
var myImage = document.querySelector('#myImage');



if (guessClear.textContent === '') {
  guessClear.disabled = true;
  } else {
    guessClear.disabled = false;
  }

/* new function for random number that expands the limit every win */
function checkGuess() {
  var userGuess = parseInt(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Your last guess was: ';
    guesses.style.backgroundColor = '#fff';
    guesses.style.color = '#404041';
    guesses.style.borderRadius = '10px';
   
  }
  guesses.textContent += userGuess + ' ';
  
  if (userGuess === randomNumber) {

    min = min - 10;
    max = max + 10;
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    lastResult.textContent = 'BOOM';
    lastResult.style.backgroundColor = 'green';
    myImage.style.visibility = 'visible'; 
    myImage.style.position = 'relative';
    myImage.style.margin = '0 auto';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 3) {
    lastResult.textContent = 'GAME OVER!';
    lastResult.style.backgroundColor = 'white';
    setGameOver();
  } else {
    lastResult.textContent = 'Incorrect';
    lastResult.style.backgroundColor = '#DC0909';
    lastResult.style.color = '#404041';

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
  resetButton.style.padding = '10px';
  resetButton.style.position = 'relative';
  resetButton.style.margin = 'auto auto auto auto';
  resetButton.style.fontSize = '16px';
  resetButton.style.width = '175px';
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
  myImage.style.visibility = 'hidden';
  lastResult.style.backgroundColor = 'white';
  /* Check for custom limits on reset */
  
}

  function newLimits() {
    if (newMin != '' && newMaxValue != ''){
     randomNumber = Math.floor(Math.random() * (newMax - newMin) + newMin);
  } else {
     randomNumber = Math.floor(Math.random() * 100) + 1;
  }}
  newMax.addEventListener('click', newLimits);





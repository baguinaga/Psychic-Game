/*
html ids:
lives
prevGuess
answer

html.getElementbyId:
livesHTML
prevHTML
answerHTML

javascript global variables:
gameLives
gameGuesses = array?
"message" / gameAnswer
*/

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// random letter function
function randomLetter() {
  return letters[Math.floor(Math.random() * letters.length)];
}

// javascript variables
var gameAnswer = randomLetter();
var gameLives = 7;
var gameGuesses = [];
var gameCondition = true;

// for console cheaters...
console.log(gameAnswer);

// reset function
function gameReset() {
  gameAnswer = randomLetter();
  gameLives = 7;
  livesHTML.textContent = gameLives;
  gameGuesses = [];
  prevHTML.textContent = gameGuesses.join(", ");
  gameCondition = true;
  answerHTML.textContent = "";
}


// html references 
var livesHTML = document.getElementById("lives");
var prevHTML = document.getElementById("prevGuess");
var answerHTML = document.getElementById("answer");

livesHTML.textContent = gameLives;


document.onkeyup = function (event) {
  //game condition check (plays when true)
  console.log(gameCondition);

  var userGuess = event.key;

  if (letters.includes(userGuess) && gameCondition === true) {
    if (userGuess === gameAnswer) {
      answerHTML.textContent = "You won! Press Enter to play again!";
      gameCondition = false;
    } else if (gameGuesses.includes(userGuess)) {
      answerHTML.textContent = "You tried that one before...";
    } else {
      gameGuesses.push(userGuess);
      prevHTML.textContent = gameGuesses.join(", ");
      gameLives -= 1;
      livesHTML.textContent = gameLives;
      if (gameLives === 0) {
        answerHTML.textContent = "You Lost. Press Enter to try again."
        gameCondition = false;
      }
    }
  } else {
    answerHTML.textContent = "That's not a letter.";
  }

  if (gameCondition === false && userGuess === "Enter") {
    gameReset();
    console.log(gameAnswer); //Answer has been reset new answer is logged for dirty console cheaters
    gameCondition = true;
  }
}


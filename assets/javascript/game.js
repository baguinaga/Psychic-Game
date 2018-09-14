/*
html ids:
lives
prevGuess
wins
losses
message
reveal

html.getElementbyId:
livesHTML
prevHTML
messageHTML
winsHTML
lossesHTML
revealHTML

javascript ariables:
gameLives
gameGuesses = array
gameAnswer
gameConditon (whether the game logic is active or disabled)
gameWins
gameLosses
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
var gameWins = 0;
var gameLosses = 0;

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
  messageHTML.textContent = "";
  revealHTML.textContent = "Hidden";
}


// html references 
var livesHTML = document.getElementById("lives");
var prevHTML = document.getElementById("prevGuess");
var messageHTML = document.getElementById("message");
var winsHTML = document.getElementById("wins");
var lossesHTML = document.getElementById("losses");
var revealHTML =document.getElementById("reveal");

livesHTML.textContent = gameLives;
lossesHTML.textContent = gameLosses;
winsHTML.textContent = gameWins;

document.onkeyup = function (event) {
  //game condition check (plays when true)
  console.log(gameCondition);

  var userGuess = event.key;

  if (letters.includes(userGuess) && gameCondition === true) {
    if (userGuess === gameAnswer) {
      messageHTML.textContent = "You won! Press Enter to play again!";
      gameWins += 1;
      winsHTML.textContent = gameWins;
      revealHTML.textContent = gameAnswer;
      gameCondition = false;
    } else if (gameGuesses.includes(userGuess)) {
      messageHTML.textContent = "You tried that one before...";
    } else {
      gameGuesses.push(userGuess);
      prevHTML.textContent = gameGuesses.join(", ");
      gameLives -= 1;
      livesHTML.textContent = gameLives;
      if (gameLives === 0) {
        messageHTML.textContent = "You Lost. Press Enter to try again."
        gameLosses += 1;
        lossesHTML.textContent = gameLosses;
        revealHTML.textContent = gameAnswer;
        gameCondition = false;  
      }
    }
  } else {
    messageHTML.textContent = "That's not a letter.";
      if (userGuess !== "Enter" && gameCondition === false) {
        messageHTML.textContent = "Nope. Press Enter.";
      }
  }

  if (gameCondition === false && userGuess === "Enter") {
    gameReset();
    console.log(gameAnswer);     
    gameCondition = true;
  }
}


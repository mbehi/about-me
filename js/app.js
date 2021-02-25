'use strict';

console.log('Hello, this is Mohsin!');

var score = 0;


// write 5 questions. They MUST accept yes or no or y or n IN ANY CASE
// examples: YES, yes, YEs, yeS, yEs, Y, y

// First Question: get user name and offer greeting
var userName = prompt('Hello, what\'s your name?');
alert ('Hello ' + userName + ', nice to meet you!');


// First Question
function questionOne(){
  var answerOne = prompt('Do I live in Austin?').toLowerCase();
  if(answerOne === 'yes' || answerOne === 'y'){
  // console.log('you are correct');
    alert('You are correct!');
  }
}

// Second Question
function questionTwo(){
  var answerTwo = prompt('Do you believe in ghosts?').toLowerCase();
  if(answerTwo === 'yes' || answerTwo === 'y'){
  // console.log('question two worked');
    alert('You should join the Ghostbusters!');
  }
}

// Third Question
function questionThree(){
  var answerThree = prompt('Have you ever seen a UFO?').toLowerCase();
  if(answerThree === 'yes' || answerThree === 'y'){
  // console.log('question three worked');
    alert('You need to visit Roswell, NM!');
  }
}

// Fourth Question
function questionFour(){
  var answerFour = prompt('Have you ever seen a UFO?').toLowerCase();
  if(answerFour === 'yes' || answerFour === 'y'){
  // console.log('question three worked');
    alert('You need to visit Roswell, NM!');
  }
}

// Fifth Question
function questionFive(){
  var answerFive = prompt('Have you ever seen a UFO?').toLowerCase();
  if(answerFive === 'yes' || answerFive === 'y'){
  // console.log('question three worked');
    alert('You need to visit Roswell, NM!');
  }
}

// Sixth Question
function questionSix(){
  var maxCount = 6;
  var correctNumber = 29;
  for (var i = 0; i < maxCount; i++) {
    var answerSix = parseInt(prompt('What is my favorite number?'))
    if(answerSix === correctNumber) {
      alert('Yes, you are correct!!!');
      score++;
      break;
    } else if (answerSix > correctNumber) {
      alert('Sorry, you guessed too high. Try again.');
    } else if (answerSix < correctNumber) {
      alert('Sorry, you guessed too low. Try again');
    } if(i === maxCount - 1) {
      alert(`Sorry, you have run out of attempts. The correct answer is ${correctNumber}`);
    }
  }
}

// Seventh Question
function questionSeven(){
  var myFavoriteCities = ['Austin', 'Seattle', 'San Francisco', 'New York', 'Denver'];
  var correctAnswer = false;
  var numberofGuessAttempts = 6;

  for (var j = 0; j < numberofGuessAttempts; j++) {
    var favoriteCitiesGuess = prompt('What is my favorite city to visit?');
    for (var k = 0; k < myFavoriteCities.length; k++) {
      if (favoriteCitiesGuess === myFavoriteCities[k]) {
        console.log('question seven is correct');
        alert('Yes, you are correct!');
        correctAnswer = true;
        score++;
      }
    }
    if (correctAnswer) {
      break;
    }
  }
}



// Calling the Function
questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();

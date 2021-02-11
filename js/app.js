'use strict';

console.log('hello mohsin');


// write 5 questions. They MUST accept yes or no or y or n IN ANY CASE
// examples: YES, yes, YEs, yeS, yEs, Y, y

// get user name and offer greeting
var userName = prompt('Hello, what\'s your name?');
alert ('Hello ' + userName + ' , nice to meet you!');

var answerOne = prompt('Do I live in Austin?').toLowerCase();
if(answerOne === 'yes' || answerOne === 'y'){
  // console.log('you are correct');
  alert('you are correct');
}
var answerTwo = prompt('')
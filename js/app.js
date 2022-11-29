'use strict';

console.log('Hey World!');

// TODO: Get users name - prompt - alert a greeting back to the user!

let userName = prompt('Hello! Welcome to this biography into my as of now short life! I am going to ');
alert(`Welcome to my site ${userName}!`);

// TODO: Prompt them with 5 yes or no questions, alert if they got right or wrong.

let questionOneGuess = prompt('Do I have a cat?').toLowerCase();

if(questionOneGuess === 'yes' || questionOneGuess === 'y'){
  alert('You got it right!');
} else if(questionOneGuess === 'no' || questionOneGuess === 'n'){
  alert('You got it wrong!');
}

// TODO: GIVE a personalized message at the end.



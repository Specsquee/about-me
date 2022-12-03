'use strict';

let combinedAnswer = 0;

function whatsName(){
  let userName = prompt('Hello! Welcome to this biography into my as of now short life! What is your name if you do not mind me asking?');
  alert(`Welcome to my site ${userName}! Now that you are here I wanted to ask you a few yes or no questions to quiz you about your knowledge of me. Please only answer the questions with either Yes / Y or No / N. Thank you for your cooperation!`);
}

function questOne(){
  let firstQuestion = prompt('Yes or no! Is this my first attempt at breaking into tech?').toLowerCase();
  if(firstQuestion === 'yes' || firstQuestion === 'y'){
    alert('Nope. Years ago I attempted a bachelors degree in Game Design, but after passing for two years life got in the way and I had to pull out.');
  } else if(firstQuestion === 'no' || firstQuestion === 'n'){
    combinedAnswer++;
    /*console.log('You are correct!');*/
    alert('Correct. I attempted a bachelors degree in Game Design many years ago, but life got in the way after two years of work!');
  } else if(firstQuestion === ''){
    alert('Next time please answer the question properly');
  }
}

function questTwo(){
  let secondQuestion = prompt('Yes or No! Am I currently homeless?').toLowerCase();
  if (secondQuestion === 'yes' || secondQuestion === 'y'){
    combinedAnswer++;
    /*console.log('You are correct!');*/
    alert('Technically correct. The house I have lived in for over 20 years is currently on the market. Dont worry though I have a place to stay in the meantime :D');
  } else if(secondQuestion === 'no' || secondQuestion === 'n'){
    alert('Wrong! I have voluntarilly ousted myself from my home of over 20 years to sell it to settle my dads estate! Do not worry though I have a place to stay in the meantime.');
  } else if(secondQuestion === ''){
    alert('Next time please answer the question properly');
  }
}

function questThree(){
  let thirdQuestion = prompt('Yes or No! Do I have a chronic illness?').toLowerCase();
  if (thirdQuestion === 'yes' || thirdQuestion === 'y'){
    combinedAnswer++;
    /*console.log('You are correct!');*/
    alert('That would be a hard yes. In 2016 I was randomly diagnosed with Type 1 Diabetes. Fun stuff. Love having my body attack my pancreas because it thinks it is an enemy!');
  } else if(thirdQuestion === 'no' || thirdQuestion === 'n'){
    alert('I wish it were the case, but in 2016 I was randomly diagnosed with Type 1 Diabetes. The fun kind where your body attacks your pancreas because....reasons?');
  } else if(firstQuestion === ''){
    alert('Next time please answer the question properly');
  }
}

function questFour(){
  let forthQuestion = prompt('Yes or No! Do I currently possess a single chicken?').toLowerCase();
  if (forthQuestion === 'yes' || forthQuestion === 'y'){
    combinedAnswer++;
    /*console.log('You are correct!');*/
    alert('That is correct! Myself and my dad raised chickens for eggs. We originally had a flock of 10 hens, and from them 1 were left. Last year got another 8. With the house being sold I had to rehome all the young hens, but I cannot find a rescue or santuary for the last hen which is over 11 years old. So in the meantime I have a single indoor chicken.');
  } else if(forthQuestion === 'no' || forthQuestion === 'n'){
    alert('Wrong. From the flock I had to rehome when I put my fathers house on the market. I still have one 11 year old hen. Have not found a rescue or sanctuary yet that wants to take on such an old bird. So in the meantime I have a single indoor chicken.');
  } else if(firstQuestion === ''){
    alert('Next time please answer the question properly');
  }
}

function questFive(){
  let fifthQuestion = prompt('Yes or No! Have I played Magic the Gathering since I was around 10 years old').toLowerCase();
  if (fifthQuestion === 'yes' || fifthQuestion === 'y'){
    combinedAnswer++;
    /*console.log('You are correct!');*/
    alert('Yep! Originally played Pokemon like everyone else during the initial craze when it swept the kids of the nation, but after that I discovered MTG through that and have played ever since. At one point when I was younger when they had ratings I was ranked 7th from worst in the state of Washington, because I was a kid who did not really know how to play and I kept going to tournaments and losing! By the end of their rating system though I was in the top 25%. Going on over 20 years now of playing. Players vary in age but most are in my age group which is great.');
  } else if(fifthQuestion === 'no' || fifthQuestion === 'n'){
    alert('Nope. It has been my one static hobby for years. Great excuse to socialize and have a very chill few hours when you go out for a tournament. Been playing now over 20 years.');
  } else if(firstQuestion === ''){
    alert('Next time please answer the question properly');
  }
}

function questSix(){
  let guessNum = [5, 10, 15, 20, 25];
  let friedMind = prompt("Can you guess a correct number between 1 and 25? You have 6 chances");
  let correctAnswer = false;
  for (let i = 0; i < 6; i++){
    if(i === 5){
      alert("Sorry you have guessed to many times. Game over");
      break;
    }
    console.log(i);
    for(let j = 0; j < 5; j++){
      if(friedMind == guessNum[j]){
        combinedAnswer++;
        alert("You are correct! The answers were 5, 10, 15, 20, 25");
        correctAnswer = true;
        alert(`Good news your combined score for every question was ${combinedAnswer}!`);
        break;
      }
    }
    if(correctAnswer){
      break;
    }
    friedMind = prompt("That was a wrong guess. Please try again to guess a number between 1 and 25");
  }

  alert(`Thank you ${userName} for taking the time to answer my questions. Please feel free to check out the rest of this website for more information on me!`); }

'use strict';

//defining the secret number
const numberFunnction = () => {
  return Math.trunc(Math.random() * 20) + 1;
};

const displayfunction = message => {
  document.querySelector('.message').textContent = message;
};

const messageColor = color => {
  document.querySelector('.message').style.color = color;
};

let secretNumber = numberFunnction();

let score = 20;

let highscore = 0;

//check button
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  //no number
  if (!guess) {
    displayfunction('🚫 Please enter a number and try again.');
    messageColor('#E8354D');
  } else if (guess > 20) {
    displayfunction('🚫 Please enter a number between 1 and 20.');
    messageColor('#E8354D');
  }
  //player wins
  else if (secretNumber == guess) {
    messageColor('#fff');
    displayfunction('✔ Correct Number !');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    } else {
      highscore = highscore;
    }

    //when the number is different
  } else if (guess !== secretNumber) {
    messageColor('rgb(219, 223, 0)');
    if (score > 1) {
      displayfunction(guess > secretNumber ? '📈Too High.' : '📉Too Low.');
      score--;
    } else {
      score = 0;
      displayfunction('☠ You Lost.');
      document.querySelector('body').style.backgroundColor = '#E8354D';
    }
    document.querySelector('.score').textContent = score;
  }
});

//Again button

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = numberFunnction();

  displayfunction('Start guessing...');

  document.querySelector('.guess').value = null;

  document.querySelector('body').style.backgroundColor = '#000';

  document.querySelector('.number').textContent = '?';

  document.querySelector('.number').style.width = '15rem';
});
